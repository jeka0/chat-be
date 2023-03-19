const server = require('http').createServer();
const { checkSocketAuth } = require('../middlewares/checkAuth');
const { createMessage } = require('../services/messageService');
const { checkMessage } = require('../middlewares/messageValidation');
const io = require("socket.io")(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ["GET", "POST"]
    }
});
io.use(checkSocketAuth);

io.on('connection', client => {
  console.log("user connected");

  client.on("message", ({ message }) =>{
    createMessage(client.userId, { message }).then((savedMessage)=>{
        console.log(message)
        io.emit("message", savedMessage);
    })
  });

  client.use(checkMessage);

  client.on('error', err=>{
    client.emit("error", err);
  })

  client.on("disconnect", () => {
    console.log("User disconnected");
  });

});

module.exports = server;