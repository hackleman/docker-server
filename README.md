# Dockerized Web Server

## Description

This is the template for a dockerized web server that I reuse extensively across apps.  This server makes deployment to cloud services like AWS and Google Compute painless and simple!  The present server uses the alpine version of node modified with dependencies needed to work with Oracle CE.  Oracle and Mongo containers come configured for the Taxi App project with an nginx container and certbot for easy SSL encryption.

## Installation

Be sure to clone the repository from this repo 

  $ git clone https://github.com/hackleman/docker-server.git
  
## Usage

To start the server simply type:
  
  $ docker-compose up

## Configuration

Each of these containers come with default configurations for my AWS projects but should be fairly easy to configure for others.  The nginx reverse proxy forwards https and http traffic to the Node.js server.  The Oracle and Mongo containers are configured to interface with the Node container using these settings in the docker-compose.yml file:

 
    $ container_name: oracle-xe
    $ image: hackleman/oracleproject
    $ ports:
    $ - '32118:1521'
    $ - '35518:5500'
    $ volumes:
    $ - ./data:/opt/oracle/oradata
    $ environment:
    $ - ORACLE_PWD=Oracle18
