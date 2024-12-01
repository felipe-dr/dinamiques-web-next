FROM node:18-alpine AS builder

WORKDIR /usr/src/app

RUN apk add --no-cache libc6-compat

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:18-alpine AS runner

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package.json /usr/src/app/
COPY --from=builder /usr/src/app/package-lock.json /usr/src/app/
COPY --from=builder /usr/src/app/next.config.mjs /usr/src/app/
COPY --from=builder /usr/src/app/.next /usr/src/app/
COPY --from=builder /usr/src/app/node_modules /usr/src/app/

EXPOSE 4000

CMD ["npm", "start"]
