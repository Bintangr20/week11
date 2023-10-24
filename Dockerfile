
FROM node:14

WORKDIR /todo-api-tugas/src/app

COPY package*.json ./

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]
