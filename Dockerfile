FROM node:16.6.1

WORKDIR /app

COPY package.json /app

RUN npm install

COPY index.js /app

ENTRYPOINT ["node", "index.js"]
