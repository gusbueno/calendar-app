FROM node:8.10.0
EXPOSE 80

WORKDIR /calendar

COPY . /calendar/

RUN npm install -g http-server \
  && npm install \
  && npm run build

CMD ["http-server", "./build", "--cors"]