FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

CMD ["node", "-r", "module-alias/register", "./dist", "--env=production"]


