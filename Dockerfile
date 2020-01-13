FROM registry.cn-shanghai.aliyuncs.com/c7n/cifront:0.8.0

ADD dist /dist
RUN npm install -g yarn && npm install -g hzero-cli --registry http://nexus.saas.hand-china.com/content/groups/hzero-npm-group
