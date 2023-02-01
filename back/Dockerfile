FROM node:18.13-alpine

WORKDIR /code/back

COPY ./package.json ./

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /code/back/node_modules/.bin:$PATH

RUN npm install

CMD npm run start:dev