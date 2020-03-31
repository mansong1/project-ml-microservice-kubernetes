[![CircleCI](https://circleci.com/gh/mansong1/project-ml-microservice-kubernetes/tree/master.svg?style=svg)](https://circleci.com/gh/josephmfaulkner/udacity-devops-project4/tree/master)
# Cloud DevOps Engineer Nanodegree - Operationalize a Machine Learning Microservice API

## Overview

A containerised flask application that serves out predictions (inference) about housing prices through API calls. This project could be extended to any pre-trained machine learning model, such as those for image recognition and data labeling. It utilises a pre-trained `sklearn` model that has been trained to predict housing prices in Boston according to several features, such as average rooms in a home and data about highway access, teacher-to-pupil ratios, and so on. You can read more about the data, which was initially taken from Kaggle, on [the data source site](https://www.kaggle.com/c/boston-housing).

---

### Running the application

1. Standalone:
```
#Setup a python virtual environment and activate it
make setup

#Install the necessary dependencies
make install

#Run the main application
python app.py
```
2. Run in Docker:  `./run_docker.sh`
3. Run in Kubernetes:  `./run_kubernetes.sh`

The application will be running on http://localhost:8000

### Predict housing prices

While the application is running, run `./make_predicion.sh` to make api calls to the app

### Upload Docker image to DockerHub
After running `./run_docker.sh`, execute script`./upload_docker.sh ${USERNAME}` to upload image to DockerHub where ${USERNAME} is your dockerhub id. e.g. `./upload_docker.sh mansong`

---

## Project Files

* __app.py:__ The Flask application 
* __requirements.txt:__ Prerequisites of Python packages for Flask app
* __model_data/boston_housing_prediction.joblib:__ Pretrained sklearn model used by the flask app
* __Dockerfile:__ Instructions of how to build our application container
* __Makefile:__ Commands to setup, install and lint the applicaiton
* __run_docker.sh:__ Builds and runs the docker container
* __run_kubernetes.sh:__ Runs Flask app as a pod in kubernetes
* __make_prediction.sh:__ Sends a POST api call to running Flask app to make a prediction
* __upload_docker.sh:__ Tags and uploads the Docker image to DockerHub
* __output_txt_files/docker_out.txt:__ Console output from running run_docker.sh and make_prediction.sh
* __output_txt_files/kubernetes_out.txt__ Console output from running run_kubernetes.sh and make_prediction.sh
* __.circleci/config.yml:__ Defines the circleCI deployment