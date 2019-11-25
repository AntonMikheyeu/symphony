FROM node:10

WORKDIR /usr/src/main
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3001
CMD [ "node", "index.js" ]
