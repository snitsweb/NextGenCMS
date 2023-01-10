FROM mysql:5.6

# Copy content from .sql to Docker mysql container
COPY ./db_schema.sql /docker-entrypoint-initdb.d/init.sql

EXPOSE 3306