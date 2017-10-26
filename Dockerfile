FROM node:6.10-alpine
RUN mkdir -p /home/web
ADD . /home/web
WORKDIR "/home/web"
RUN npm install
ENTRYPOINT npm run start
