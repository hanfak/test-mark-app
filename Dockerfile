FROM node:12 as build

WORKDIR /home/node/app
COPY app /home/node/app
RUN npm install

FROM node:12-alpine
COPY --from=build /home/node/app /
CMD ["npm", "run", "app"]
EXPOSE 9999
