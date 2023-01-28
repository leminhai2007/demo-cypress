# Args are defined in the Dockerfile before the FROM command.
# Using these args will cause an image to be created with node (default version is 16.18.1), chrome, firefox and edge.
ARG NODE_VERSION='18.13.0'
ARG CYPRESS_VERSION='12.4.0'
ARG CHROME_VERSION='109.0.5414.74-1'
ARG EDGE_VERSION='108.0.1462.54-1'
ARG FIREFOX_VERSION='109.0'

# use Cypress provided image
FROM cypress/factory
WORKDIR /opt/app