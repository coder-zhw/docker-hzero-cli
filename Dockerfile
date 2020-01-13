FROM node:10.15.1-alpine

RUN apk add --no-cache \
  bash \
  curl \
  git \
  docker 

ADD dist /dist
RUN npm install -g yarn && npm install -g hzero-cli --registry http://nexus.saas.hand-china.com/content/groups/hzero-npm-group
RUN curl -L -o helm-v2.14.3-linux-amd64.tar.gz https://file.choerodon.com.cn/kubernetes-helm/v2.14.3/helm-v2.14.3-linux-amd64.tar.gz && \
  tar -zxvf helm-v2.14.3-linux-amd64.tar.gz && \
  mv linux-amd64/helm /usr/bin/helm && \
  rm -fr helm-v2.14.3-linux-amd64.tar.gz && \
  rm -fr linux-amd64/helm