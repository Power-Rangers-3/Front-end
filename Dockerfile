FROM node:18-bullseye AS builder
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.23-alpine
WORKDIR /static
COPY --from=builder /app/build /static
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf