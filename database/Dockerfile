FROM postgres:15

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=souvenirs

COPY init.sql /docker-entrypoint-initdb.d/
