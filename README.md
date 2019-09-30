# Securing APIs with oAuth2

## Introduction to oAuth2

- oAuth2 standard for managing token access to resources

### Know the Actors
- Resource Owner: end user
- Client: application requesting access to protected resource
- Resource Server: server with protected resource
- Authorization Server: server that can authorize access to resource server
- User Agent: entity that the end user uses to interact with client, like a browser

### Two flows we will discuss
- Credentials Flow: used when the client owns the resource. ie server to server interactions
- Authorization Code Flow: used when the client is a webapp

## Demo Apps
-  oidc
-  demo-api
-  demo-worker
-  demo-webapp
-  docker-compose

## The Flows
### Client Credentials flow
-- Walk through the flow
-- show flow with client demo
-- auth.ts middleware
-- Discuss bearer token, jwt, jwks
--- Show the jwt.io debugger
--- using RS256 instead of HS256

### Authorization Code Flow
-- Walk through the flow
-- Show flow with swagger ui
-- scopes.ts
-- Discuss scopes

