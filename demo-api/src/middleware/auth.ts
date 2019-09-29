import * as jwkToPem from 'jwk-to-pem';
import * as axios from 'axios';
import * as jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
  try {

    const authorizationHeader = req.headers.authorization;

    // check for header
    if(!authorizationHeader) {
      res.sendStatus(401);
      return;
    }

    // check for bearer token
    const bearerToken: Array<string> = authorizationHeader.split(" ");
    if(bearerToken.length != 2 ||
       bearerToken[0] != "Bearer") {
      res.sendStatus(401);
      return;
    }


    // create public key using JWKS
    // search for the kid that matches what's in the token
    const jwks = await axios.default.get("http://localhost:8000/jwks")
    const jwk = jwks.data.keys[0];
    const pem = jwkToPem(jwk);
    console.log(pem);


    // validate token
    const token: string = bearerToken[1];
    const isAuthorized = jwt.verify(token, pem);

    if (isAuthorized) {
      next()
    } else {
     res.sendStatus(401)
    }
  } catch(error) {
    console.log(error);
    res.sendStatus(401)
  }
}
