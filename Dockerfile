# Args are defined in the Dockerfile before the FROM command.
ARG NODE_VERSION='20.9.0'
ARG YARN_VERSION='1.22.19'
ARG CHROME_VERSION='121.0.6167.85-1'

# Base image
FROM cypress/factory

# Copy cypress source code
WORKDIR /opt/app
COPY ./cypress ./cypress
COPY ./.cypress-cucumber-preprocessorrc.json ./.cypress-cucumber-preprocessorrc.json
COPY ./cypress.config.ts ./cypress.config.ts
COPY ./package.json ./package.json
COPY ./reporter-config.json ./reporter-config.json
COPY ./tsconfig.json ./tsconfig.json

# Install dependecies
RUN yarn install

# Set default environment variables for Cypress
ENV CYPRESS_BASE_URL=https://docs.cypress.io

# Run test
CMD ["yarn", "test"]