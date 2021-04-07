var http = require('http');

const onRequest = (req, resp) =>{
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.write('Hello World, learning Node, YAY 😀');
    resp.end()
};

http.createServer(onRequest).listen(2046)