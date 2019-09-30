import { AxiosInstance } from "axios";
import * as qs from "qs";
import * as axios   from "axios";

const oidcUri: string = "http://localhost:8000/";
const oidc: AxiosInstance = axios.default.create({
  baseURL: oidcUri,
});

const apiUri: string = "http://localhost:9000/v1";
const api: AxiosInstance = axios.default.create({
  baseURL: apiUri
})


const request_token = async () =>{
  const token_endpoint = "token";

  const data = qs.stringify({
    grant_type: "client_credentials",
    client_id: "worker_app",
    client_secret: "password",
    scope: "read:policies"
  })
  return await oidc.post(token_endpoint, data,
  {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
  });
}


(async ()=>{

  try {
    const oidcResponse = await request_token();
    const apiResponse = await api.get("/policies",{
      headers: {
        "Authorization": "Bearer " + oidcResponse.data.access_token
      }
    });

    console.log(apiResponse.data);

  } catch( e ) {
    console.log(e.response);
  }

})()
