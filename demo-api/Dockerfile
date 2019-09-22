# Build the application
FROM node:10.16.3-alpine AS build
COPY . /usr/src
WORKDIR /usr/src
RUN yarn install
RUN yarn build


# Build the runtime image
FROM node:10.16.3-alpine
COPY --from=build /usr/src/dist /app
COPY --from=build /usr/src/node_modules /app/node_modules

RUN addgroup -S app
RUN adduser -S -G app app
RUN chown -R app /app
RUN chgrp -R app /app

USER app

WORKDIR /app

CMD ["node","main.js"]
