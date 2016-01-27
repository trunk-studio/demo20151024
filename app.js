var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/', function (req, res) {
  res.redirect('/login');
});

app.use(express.static('.'));

var server = app.listen(process.env.npm_package_config_port || process.env.PORT || '3000', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
