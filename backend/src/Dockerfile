FROM python:3.7-buster
ENV PYTHONUNBUFFERED 1
RUN mkdir /api
WORKDIR /api
ADD . /api

COPY ./requirements.txt /api/requirements

RUN pip install -r requirements.txt

COPY . /api


