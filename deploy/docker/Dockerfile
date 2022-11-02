FROM public.ecr.aws/docker/library/node:16-alpine3.15 as build-stage

WORKDIR /service

RUN node -v

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM public.ecr.aws/nginx/nginx:stable-alpine as production-stage

COPY deploy/docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage /service/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]