#!/usr/bin/env bash

# Build image and add a descriptive tag
docker build -f Dockerfile -t mansong/boston-housing:latest -t mansong/boston_housing:v1.0 .

# List docker images
docker ps -a

# Run flask app
docker run -d -p 5000:5000 mansong/boston_housing