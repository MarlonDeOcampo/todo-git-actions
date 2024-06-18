## how to use shepherd to auto update docker image when there is an update in the repository

1. Create a service/container where we can upload our images locally

```sh
    docker service create --name registry --publish published=5000,target=5000 registry:2
```
- this will create the container what would accept our image that can be used by the github action later

2. Prepare the project that we need to upload to the local registry by initially creating image using docker build

3. push the image to the local registry
- add tag first
- docker image ls first to see if the tag has been successfully created
- "<node-ipaddressregistry>" = ip address of the node where you deployed the local registry
```sh
    docker tag local-image <node-ipaddress-registry>:5000/local-image:latest
    docker push <node-ipaddress-registry>:5000/local-image:lastest
```

4. configure the github config which is in our project's .github/workflow directory


5. configure docker to accept unsecured connection (all nodes)
- use reverse proxy service for production

```sh
    vi /etc/docker/daemon.json
```
- copy paste the code below then save

```sh
    {
        "insecure-registries": ["<node-ipaddress-registry>:5000"]
    }
```

- restart docker to apply changes

```sh
    sudo systemctl restart docker
```


- check connection of all nodes to the registry server 

```sh
    curl http://<node-ipaddress-registry>:5000/v2/_catalog
```

6. deploy the watchtower stack
