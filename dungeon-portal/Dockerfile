# ===== BUILD STAGE =====
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Angular 21 production build
RUN npx ng build --configuration production

# ===== NGINX STAGE =====
FROM nginx:alpine

COPY --from=build /app/dist/dungeon-portal/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
