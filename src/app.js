var express = require('express');
const server = require('http').createServer();
//const io = require('socket.io')(server);
const io = require("socket.io")(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"]
  }
});
const router = require("./routes/router.js");
const bodyParser = require('body-parser');
const { AppDataSource } = require("./repositories/dbAccess.js")
require('dotenv').config();
const { errors } = require('celebrate');
const cors = require('cors');
const SERVER_PORT = process.env.SERVER_PORT;
const SOCKET_PORT = process.env.SOCKET_PORT;

var app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use('/api', router);
app.use(errors());

io.on('connection', client => {
  console.log("user connected");

  client.on("mess", mess =>{
    console.log(mess);
    io.emit("mess", mess);
  });
});


AppDataSource.initialize().then(()=>{
  console.log("Database connected successfully");
  app.listen(SERVER_PORT,()=>console.log(`The server is running on a port ${SERVER_PORT}...`));
}).catch((err)=>console.log("Database connection error (" + err + ")"));

server.listen(SOCKET_PORT);