FROM node:18-alpine

RUN npm i -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm run build

EXPOSE 3000 3000

CMD ["pnpm", "run", "start"]