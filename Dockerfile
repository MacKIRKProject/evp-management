FROM node:16 as builder

WORKDIR /app

COPY package.json yarn.lock .yarnrc .babelrc ./
RUN yarn --pure-lockfile

COPY static ./static
COPY gatsby-*.js ./
COPY src ./src
COPY *.config.js ./

ARG BUILD_VISIBILITY=public
ENV GATSBY_BUILD_VISIBILITY=$BUILD_VISIBILITY
RUN yarn clean && yarn run gatsby build --verbose

FROM docker.infra.online.net/uxp/nginx-static:v0.0.4

ENV NGINX_404_FILE "/404.html"

COPY --from=builder /app/public /var/www
