# web-uiのdockerfile
FROM node:14.16-buster

RUN yarn global add @vue/cli \
    && yarn global add typescript

WORKDIR /src
