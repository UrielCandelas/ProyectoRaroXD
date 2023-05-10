const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const users = require('./routes/users.routes.js');
const colors = require('colors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


app.use(users);

app.listen(port, () => {
  console.log(`Servidor inciciado en el puerto ${port}`.blue);
});
