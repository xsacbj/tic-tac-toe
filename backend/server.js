const express = require('express');
const cors = require('cors');
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors)

io.on('connection', function(socket){

});


server.listen(3333, ()=>{
  console.log('> Server listening on port 3000');
})