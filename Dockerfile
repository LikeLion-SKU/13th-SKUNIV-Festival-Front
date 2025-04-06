FROM node:20-alpine

COPY package.json /

COPY disk /

ENTRYPOINT [ "npm","run","start" ]