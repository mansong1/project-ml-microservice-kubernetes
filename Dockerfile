FROM python:3.7.3-stretch

# Create a working directory
WORKDIR /app

# Copy source code to working directory
COPY app.py /app/
COPY requirements.txt /app/
COPY model_data/boston_housing_prediction.joblib /app/model_data/

# hadolint ignore=DL3013
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Expose port 80
EXPOSE 80

# Run app.py at container launch
ENTRYPOINT [ "python" ]

CMD [ "app.py" ]

