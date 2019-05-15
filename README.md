To run docker with mongo and node server:

docker-compose up

To run oracle server by itself:

 - Make sure container is deleted with hackleman/oracleproject image

    docker run -d -p 32118:1521 -p 35518:5500 -e ORACLE_PWD=Oracle18 --name=oracle-xe --volume ./data:/opt/oracle/oradata hackleman/oracleproject

  oracle-xe:
    container_name: oracle-xe
    image: hackleman/oracleproject
    ports:
      - '32118:1521'
      - '35518:5500'
    volumes:
      - ./data:/opt/oracle/oradata
    environment:
      - ORACLE_PWD=Oracle18
