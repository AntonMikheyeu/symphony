FROM node:10

WORKDIR /usr/src/app1
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3002
CMD [ "node", "index.js" ]
