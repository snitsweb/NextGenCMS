FROM python:3.8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

COPY . .
RUN pip3 install --no-cache-dir -r requirements.txt

CMD python3 -m swagger_server

EXPOSE 8080