var express = require('express');
var app = express();

app.use((function(req, res, next){
  if (req.path === '/store') {
    console.log('Jestem pośrednikiem w żądaniu do /store')
  }
  next();
}))

app.get('/', function(req, res){
  res.send('Hello World');
})

app.get('/store', function(req, res){
  res.send('To jest sklep');
})

app.listen(3000);

