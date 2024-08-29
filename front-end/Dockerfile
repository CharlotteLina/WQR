FROM node:18-alpine as builder
WORKDIR /app

COPY ["package.json","server.ts", "package-lock.json*","tsconfig.*","angular.json", "/app/"]
RUN npm ci

COPY ["src", "/app/src"]

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]

# RUN npm run build

# FROM nginx:latest
# COPY --from=builder /app/dist/weather-quality-report /usr/share/nginx/html

# FROM node:18-alpine as builder

# WORKDIR /app

# COPY . /usr/src/app

# RUN npm install -g @angular/cli

# RUN npm install

# CMD ["ng", "serve", "--host", "0.0.0.0"]