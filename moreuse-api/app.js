const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect with database
require('./src/conn/mongo_conn');

//modules
app.use('/auth', require('./src/modules/users/auth.routes'));

app.listen(port, () => {
  console.log(`Server runnnig on port ${port}`)
});
