FROM registry.cn-shanghai.aliyuncs.com/c7n/cibase:0.9.1

# ADD dist /dist

RUN npm i -g yarn && \
npm i -g tsc && \
npm i -g hzero-cli --registry http://nexus.saas.hand-china.com/content/groups/hzero-npm-group