FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash
USER node 
WORK /home/node/app
