# Deployment fun

## About
* get yourself a nodejs runtime
* install dependencies with `npm ci`
* run with `npm start`

## Task 1
* fork repo to your own github
* create yourself a Heroku account
* initiate deployment of the repo using pipelines into newly created free Heroku app
* initiate Heroku pipelines, enable Review Apps
* create a PR which will automatically set FUN environment variable

## Task 2
* initiate any kind of CI (GitHub Actions, CircleCI, ..), anything which can be connected to a GitHub
* initiate CI process - let it download dependencies, run dummy test, create deployment tarball
* utilize Ansible to initiate and deploy a machine - your local one (you can use vagrant with virtualbox, or use AWS free tier credits or any other kind of free cloud services)
* ideally, if using cloud, let the ansible deploy from the CI to the machine on e.g. `deploy` branch push

## Task 3
* using a different CI than for Task 2, create a docker image from resulting "build" and push it into any docker container registry
* create a docker-compose.yml somewhere which will run this image, it's version being parametrized ideally by build number, or commit sha
* use certbot, to utilize Letsencrypt to generate an HTTPs certificate for the app in docker (server is required) with nginx routing it - either system nginx or (if your DNS provider is integrated) another docker image which will handle the certbot/letsencrypt tooling for you
