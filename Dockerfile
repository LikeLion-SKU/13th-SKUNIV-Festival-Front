# builder
FROM node:20 AS builder
COPY . .
RUN npm ci && npm run build

ENTRYPOINT [ "npm","run","dev" ]