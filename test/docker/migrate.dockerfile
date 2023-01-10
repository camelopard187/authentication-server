FROM denoland/deno:alpine 

RUN apk add --no-cache bash coreutils

COPY wait-for-it.sh db opt/setup/

WORKDIR /opt/setup
RUN chmod +x ./wait-for-it.sh
