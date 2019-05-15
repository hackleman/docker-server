module.exports = {

  CISEPool: {

    user: 'system',
    password: 'Oracle18',
//    connectString: "localhost/orcl",
    connectString: 'oracle-xe:1521/xe',
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  },
  Mongoose: {

    database: 'mongodb://mongo:27017/docker-node-mongo',
    secret: 'rosebud'
  }
};
