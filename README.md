### Getting started with Docker using NodeJS

#### Prerequisites:

- Docker installed on your machine
- NodeJS installed on your machine

#### Info:

##### docker build command is used to build the image

`docker build -t image_name:version_number . `

`docker build -t gunjan1909/node_docker_beginner:0.0.1`

###### Once you've built your Docker image, you'll be able to see it on your Docker Desktop.

##### To run the container:

` docker container run -d --name <name_of_app> -p <local_port>:<docker_port> <image_name>:<version>`

`docker container run -d --name node_docker_beginner -p 3000:3000 gunjan1909/node_docker_beginner:0.0.1`

###### Login to docker hub using

`docker login`

##### Push the image to docker hub

`docker push <image_name>:<version>`
`docker push gunjan1909/node_docker_beginner:0.0.1`

#### Dockerfile:

```dockerfile
FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
```

### Documentation

- [Docker Docs](https://docs.docker.com/)
- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)
