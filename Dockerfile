FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y ca-certificates curl && \
    npm config set strict-ssl false && \
    npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN npx prisma generate

RUN pnpm build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && pnpm start:prod"]
