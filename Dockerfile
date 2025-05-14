FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn prisma generate

RUN npx prisma migrate deploy

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start:prod"]
