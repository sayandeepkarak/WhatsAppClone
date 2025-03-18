# Stage 1: Build React App
FROM node:16 AS build
RUN mkdir -p /home/whatsapp-clone-frontend && chmod -R 777 /home/whatsapp-clone-frontend
WORKDIR /home/whatsapp-clone-frontend

# Install dependencies and build app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Stage 2: Serve using Nginx
FROM nginx:alpine
COPY --from=build /home/whatsapp-clone-frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
