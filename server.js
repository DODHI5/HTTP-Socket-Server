const hardcode = require('./hardcoded');
const net = require('net');


const server = net.createServer(function (socket) {
  socket.setEncoding('utf8');



  socket.on('data', function (data) {

    console.log(data.toString());
    stringMaker(data);
  });
});

function stringMaker(data) {
  string = data.toString().match(/[^\r\n]+/g)[0].split(' ');

  switch (string) {
    case '404.html':

      break;

    default:
      break;

    case 'helium.html':

      break;

    default:
      break;
    case 'hydrogen.html':

      break;

    default:
      break;
    case 'index.html':

      break;

    default:
      break;
    case 'style.html':

      break;

    default:
      break;

  }
  };


  server.listen(8080, function () {
    console.log('Server listening to 8080 port')
  });