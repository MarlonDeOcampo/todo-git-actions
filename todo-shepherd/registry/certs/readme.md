https://medium.com/@shubnimkar/how-to-set-up-and-use-private-docker-registry-with-authentication-web-ui-361ee39b2079


openssl req -newkey rsa:4096 -nodes -keyout /etc/docker/certs/domain.key -x509 -days 365 -out /etc/docker/certs/domain.crt

openssl req -newkey rsa:2048 -nodes -keyout domain.key -out domain.csr -subj "/CN=52.221.188.143" -addext "subjectAltName = IP:52.221.188.143"