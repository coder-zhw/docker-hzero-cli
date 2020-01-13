FROM registry.cn-shanghai.aliyuncs.com/c7n/cifront:0.8.0

ADD dist /dist
RUN npm i -g n && n stable && npm i -g yarn && npm i -g hzero-cli --registry http://nexus.saas.hand-china.com/content/groups/hzero-npm-group
