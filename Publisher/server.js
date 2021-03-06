const express = require('express');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api/api');

const app = express();
const PORT = process.env.port || 8000;

app.use(morgan('dev'));
app.use(errorHandler());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.use('/', express.static('../Publisher'));
app.listen(PORT, () => {
    console.log("The server is listening at port: " + PORT);
})

module.exports = app;