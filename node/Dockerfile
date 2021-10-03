FROM node:15

WORKDIR /usr/src/app

RUN chmod -R 7777 /usr/src/app

COPY ./src .

EXPOSE 3000

CMD [ "node", "app.js" ] 