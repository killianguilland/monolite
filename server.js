const express = require('express')
const app = express();
const http = require('http').createServer(app);
const path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/demo.html'));
});

app.use(express.static('static'));

var port = 8000;

http.listen(port, () => {
  console.log('Monolite listening on *:' + port);
});
