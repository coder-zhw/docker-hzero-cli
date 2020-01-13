FROM gcr.io/kaniko-project/executor:v0.9.0
FROM node:12.14.1-stretch
COPY --from=0 /kaniko/executor /usr/local/bin/kaniko
# Modify timezone
ENV TZ=Asia/Shanghai
# Add mirror source
RUN mv /etc/apt/sources.list /etc/apt/sources.list.bak && \
  echo 'deb http://mirrors.aliyun.com/debian stretch main contrib non-free' >> /etc/apt/sources.list && \
  echo 'deb http://mirrors.aliyun.com/debian stretch-proposed-updates main contrib non-free' >> /etc/apt/sources.list && \
  echo 'deb http://mirrors.aliyun.com/debian stretch-updates main contrib non-free' >> /etc/apt/sources.list && \
  echo 'deb http://mirrors.aliyun.com/debian-security/ stretch/updates main non-free contrib' >> /etc/apt/sources.list && \
  echo 'deb-src http://mirrors.aliyun.com/debian stretch main contrib non-free' >> /etc/apt/sources.list && \
  echo 'deb-src http://mirrors.aliyun.com/debian stretch-proposed-updates main contrib non-free' >> /etc/apt/sources.list && \
  echo 'deb-src http://mirrors.aliyun.com/debian stretch-updates main contrib non-free' >> /etc/apt/sources.list && \
  echo 'deb-src http://mirrors.aliyun.com/debian-security/ stretch/updates main non-free contrib' >> /etc/apt/sources.list
# Install base packages
RUN apt-get update && apt-get install -y \
  git \
  vim \
  tar \
  zip \
  unzip \
  gzip \
  bzip2 \
  curl \
  wget \
  locales \
  netcat \
  net-tools \
  python2.7 \
  python-pip \
  openssh-client \
  ca-certificates && \
  rm -rf /var/lib/apt/lists/* && \
  pip install pymysql==0.9.2 pyyaml==3.13 -i http://mirrors.aliyun.com/pypi/simple/ --trusted-host mirrors.aliyun.com && \
  npm install -g cnpm

ADD dist /dist
RUN npm i -g hzero-cli --registry http://nexus.saas.hand-china.com/content/groups/hzero-npm-group
