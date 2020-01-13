FROM node:10.15.1-alpine

RUN apk add --no-cache \
  bash \
  curl \
  git

RUN npm install -g hzero-cli --registry http://nexus.saas.hand-china.com/content/groups/hzero-npm-group