FROM mongo:3.6.5
COPY init-mongo.js /docker-entrypoint-initdb.d/
CMD ["mongod"]
