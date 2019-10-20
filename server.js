const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const fs = require('fs');

app.get('/',function(req,res){
  res.writeHead(200, {
      'Content-Type': 'text/html'
  });
  fs.readFile('./principal.html', null, function (err, data) {
      if (err) {
        res.status(404).write('No encontre');
      } else {
          res.write(data);
      }
      res.end();
  })
  //__dirname : It will resolve to your project folder.
});

router.get('/descubre',function(req,res){
  res.sendFile(path.join(__dirname+'/descubre.html'))
})

router.get('/KNNDataset',function(req,res){
    console.log(path.join(__dirname+'/KNNDataset.json'))
    res.sendFile(path.join(__dirname+'/KNNDataset.json'))
})

//add the router
app.use('/', router);
app.use("*/static", express.static('static'));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');