FROM mysql:8.0.31
ENV MYSQL_ROOT_PASSWORD=mypassword \
        MYSQL_HOST=localhost
WORKDIR /docker-entrypoint-initdb.d
# Copy content from .sql to Docker mysql container
ADD db_schema.sql /docker-entrypoint-initdb.d

# RUN ["/usr/sbin/mysqld", "--init-file=/docker-entrypoint-initdb.d/db_schema.sql"]

# ENTRYPOINT ["mysqld"]
