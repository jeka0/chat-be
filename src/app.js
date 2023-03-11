var express = require('express');
const server = require('http').createServer();
const io = require('socket.io')(server);
const router = require("./routes/router.js");
const bodyParser = require('body-parser');
const { AppDataSource } = require("./repositories/dbAccess.js")
require('dotenv').config();
const { errors } = require('celebrate');
const cors = require('cors');
const SERVER_PORT = process.env.SERVER_PORT;
const SOCKET_PORT = process.env.SOCKET_PORT;

var app = express();

app.use(cors({credentials: true, origin: '*'}));
app.use(bodyParser.json());
app.use('/api', router);
app.use(errors());

io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});

AppDataSource.initialize().then(()=>{
  console.log("Database connected successfully");
  app.listen(SERVER_PORT,()=>console.log(`The server is running on a port ${SERVER_PORT}...`));
}).catch((err)=>console.log("Database connection error (" + err + ")"));

server.listen(SOCKET_PORT);