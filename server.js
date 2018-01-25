const net = require('net');

arr = [];
const server = net.createServer(function (socket) {
  socket.setEncoding('utf8');
  arr.push(socket);


  socket.on('data', function (data) {
    console.log(data);
  });


});

server.once('close', function () {
  console.log('Connection closed');

});
server.on('error', function (err) {
  throw err;


});
server.listen(8080, function () {
  console.log('Server listening to 8080 port')
});