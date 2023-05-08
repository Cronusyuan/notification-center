# Build stage
FROM public.ecr.aws/lambda/nodejs:18 as base

# Include "shush" to decode KMS_ENCRYPTED_STUFF
RUN curl -fsSL -o /usr/local/bin/shush \
      https://github.com/realestate-com-au/shush/releases/download/v1.5.2/shush_linux_amd64 && \
    chmod +x /usr/local/bin/shush

FROM base as build

RUN npm install -g pnpm

RUN mkdir -pv /source
WORKDIR /source

## Copy source code and compile ts
COPY . .
RUN pnpm install && pnpm build

FROM base as app

COPY --from=build /source/dist/ ./
COPY --from=build /source/node_modules ./node_modules/

CMD [ "index.handler" ]

ENTRYPOINT ["/usr/local/bin/shush", "exec", "--", "/lambda-entrypoint.sh"]
