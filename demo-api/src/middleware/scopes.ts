import * as jwt from 'jsonwebtoken';
import { scopesACL } from './scope-acls';

export const scopes = async (req, res, next) => {
  try{
    const payload = jwt.decode(req.token);

    const reqScopes = payload.scope.split(" ");

    let match = null;
    reqScopes.forEach( ( reqScope ) => {
      if(!match) {
        const acls = scopesACL[reqScope];
        if(acls) {
          match = acls.find( ( acl ) => {
            return acl.method == req.method &&
              req.url.match(new RegExp(acl.url))
          })
        }
      }
    })

    if(match) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
}
