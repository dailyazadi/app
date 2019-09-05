#!/bin/bash
./build.sh

ssh -i ~/.ssh/dailyazadi.pem ec2-user@54.183.43.75 'bash -s'<< EOF
    
    docker rm -f app-nginx
    docker pull dailyazadi/app-nginx
    docker run -d \
    --name app-nginx \
    -p 443:443 -p 80:80 \
    dailyazadi/app-nginx
EOF