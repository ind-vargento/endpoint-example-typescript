FROM clearlinux/node:16.13.1

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["node", "dist/index.js"]