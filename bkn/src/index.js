const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');
const appRouter = require('./router');

const winston = require('./util/logger');

// app
const app = express();

// env
require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});

// const
const port = process.env.PORT;
const mongo_host = process.env.MONGO_HOST;

// mongoose
mongoose.set('strictQuery', false);
mongoose
  .connect(mongo_host)
  .then(() => {
    console.log(`connected db`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 50000,
  })
);

app.use(helmet());
app.set('trust proxy', 1);

// socket.io
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

socket.on('connection', (socket) => {
  console.log('socket connection : ', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

global.io = socket;

app.use(morgan('combined', { stream: winston.stream }));

app.use('/api', appRouter);

app.get('/', (req, res) => {
  try {
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

server.listen(port, () => {
  console.log('server started', port);
});
