FROM node:20
COPY .output run
EXPOSE 5033
ENV NITRO_PORT=5033
ENTRYPOINT [ "node", "run/server/index.mjs" ]