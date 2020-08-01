const port = 8000
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const fs = require('fs');
const html = require('./index.html');

router.get('/',function(req,res) {
    fs.readFile('index.html', null, (err, res)=> {
      if(err) res.status(400).json({Message: 'Error while finding file'});
    })
});

app.get('/file', (req, res) => {
  fs.readFile('index.html', null, (err, res)=> {
    if(err) res.status(400).json({Message: 'Error while finding file'});
    res.render(res)
  });
});

router.get('/about', (req,res) => {
     res.send('Hellow from about');
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use('/', router);
app.listen(port, () => console.log(` app is running on port => :: ${port}`));
