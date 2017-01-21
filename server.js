var express = require('express');
var path = require('path');

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.sendFile('public/index.html', {root: __dirname});
});

app.listen(PORT, function() {
  console.log('Listening on port '+PORT);
})
