import { Provider } from 'oidc-provider';
import { config } from 'dotenv';

config();

const port = process.env.PORT || 3000;

const configuration = {
  features: {
    devInteractions: {
      enabled: true
    },
    registration: {
      enabled: false
    },
    revocation: {
      enabled: true
    },
    sessionManagement: {
      enabled: false
    }
  },
  clients : [{
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uris: [process.env.REDIRECT_URI]
  }]
};

const oidc = new Provider('http://localhost:' + port, configuration);

const server = oidc.listen(port, () => {
  console.log('oidc-provider listening on port 3000, check http://localhost:3000/.well-known/openid-configuration');
});
