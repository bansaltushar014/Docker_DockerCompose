## Docker & Docker-Compose 
It represent three container, mongodb container, nodejs and react. All these container interact with each other. React sends the information to nodejs container which is being stored in mongoDB container. All of them being handled by docker-compose at a time. 

### Steps to Run 

* `git clone "repo"`
* `cd "Docker_DockerCompose"`
* `docker-compose up` - "To Start"
* `docker-compose down` - "To Stop"