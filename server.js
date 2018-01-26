// reference 
const hardcode = require('./hardcoded.js');
const net = require('net');

// create server
const server = net.createServer(function (socket) {



  socket.on('data', function (data) {
    //console.log(initData)
    console.log('connected');
    console.log("data :",data)
    // convert data to string
    
    let initData = data.toString();
      let string = initData.split(' ')[1];
      console.log(string)
      
      // match the proper string to html hardcoded js
      switch (string) {
       
        case '/':
          requestHeader(socket, hardcode.index, 'html')
          
          break;

        case '/helium.html':
          requestHeader(socket, hardcode.helium, 'html')
          
          break;



        case '/hydrogen.html':
          requestHeader(socket, hardcode.hydrogen, 'html')
          
          break;

        case '/index.html':
          requestHeader(socket, hardcode.index, 'html')
          
          break;



        case '/css/styles.css':
          requestHeader(socket, hardcode.style, 'css')
          
          break;


        default: 
          socket.write(`HTTP/1.1 404 ERROR
        Server: Zubin (Mac)
        Date: 
        Content-Type: text/html; charset=utf-8
        Connection: keep-alive\n\n
        
        ${hardcode.error404}`)

        socket.end() 
          break;
      // }
    };






    // function to return switch index
    function requestHeader(socket, file, js) {
      // console.log('file:    ',file)
      // console.log('js',js)
      // console.log('socket:',socket)
      let date = new Date().toUTCString();
    
      socket.write(`HTTP/1.1 200 OK
      Server: Zubin (Mac)
      Date: ${date}
      Content-Type: text/${js}; charset=utf-8
      Connection: keep-alive\n\n
      
      ${file}`);
      
      socket.end()
    };

  });
});
//console.log(requestHeader())
// listening to port 8080
server.listen(8080, function () {
  console.log('Server listening to 8080 port')
});