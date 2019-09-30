import { Provider, ResponseType } from 'oidc-provider';

const port = process.env.PORT || 8000;

const clients = [
  {
    client_id: "worker_app",
    client_secret: "password",
    grant_types: ["client_credentials", "authorization_code"],
    redirect_uris: ["http://localhost:8080/oauth2-redirect.html"],
  },
  {
    client_id: "web_app",
    client_secret: "password",
    grant_types: ["authorization_code", "refresh_token"],
    redirect_uris: ["http://localhost:8080/oauth2-redirect.html"],
  }
]

const scopes = [
  "offline_access",
  "read:policies",
  "create:policies",
  "read:agents",
  "create:agents",
  "remove:agents"
]

const configuration = {
  features: {
    revocation: {
      enabled: true
    },
    introspection: {
      enabled: true
    },
    clientCredentials: {
      enabled: true
    },
  },
  formats: {
    AccessToken: "jwt" as "jwt",
    ClientCredentials: "jwt" as "jwt",
  },
  clients: clients,
  scopes: scopes
};

const oidc = new Provider('http://localhost:' + port, configuration);

const server = oidc.listen(port, () => {
  console.log('oidc-provider listening on port ' + port +', check http://localhost:'+ port + '/.well-known/openid-configuration');
});
