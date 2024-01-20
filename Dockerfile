FROM node:18.16.0-alpine as BUILD_IMAGE 
WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:18.16.0-alpine as PRODUCTION_IMAGE
WORKDIR /usr/app
COPY --from=BUILD_IMAGE /usr/app/dist /usr/app/dist
EXPOSE 3000

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript
EXPOSE 3000
CMD ["npm", "run", "preview"]
