const url = "mongodb://localhost:27017";
const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname + "/"));

app.get('/', function(req, res)
{
  res.sendFile('index.html', {root : __dirname + '/'});
})

app.get(['/results/:id'], function(req, res)
{
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db('kankor');
    dbo.collection('kankor_res').findOne({'id':req.params.id}, function(err, results){
        if(err) res.end("no_id");

        if(!err)
        {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(results));
        }
        db.close();
    });
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
