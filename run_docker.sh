#!/usr/bin/env bash

# Build image and add a descriptive tag
docker image build -t boston-housing:latest .

# List docker images
docker image ls

# Run flask app
docker run -d -p 8000:80 boston-housing:latest

# List docker process
docker ps -a