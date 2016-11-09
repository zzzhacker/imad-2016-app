var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser=require('body-parser');

var config = {
   host: 'db.imad.hasura-app.io',
   user: 'zzzhacker',
   password: process.env.DB_PASSWORD,
   database: 'zzzhacker',
   port: '5432'
};


var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width,initial-scale-1"/>
            <link href="/ui/style.css" rel="stylesheet"/>
        </head>
        <body>
            <div class="container">
                <div>
                    <h3>
                        ${heading}
                    </h3>
                </div>
                <div>
                    ${date.toDateString()}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM test',function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } 
       else{
           res.send(JSON.stringify(result.rows));
       }
    });
});


function hash(input,salt){
    var hashed= crypto.pbkdf2Sync(input, salt, 100000, 512, 'sha512');
    return ['pbkdf2',10000,salt,hashed.toString('hex')].join('$');
}

app.get('/hash/:input',function(req,res){
    var hashedstring=hash(req.params.input,'this-is-random-string');
    res.send(hashedstring);
});


app.post('/create-user',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    var salt=crypto.randomBytes(128).toString('hex');
    var dbString=hash(password,salt);
    pool.query('INSERT INTO "user" (username,password) VALUES ($1,$2)',[username,dbString],function(err,result){
        if(err){
           res.status(500).send(err.toString());
       } 
       else{
           res.send('user sucessfully created : '+username);
       }
    });
});


app.post('/login',function(req,res){
    var username=req.body.username;
    var password=req.body.password;

    pool.query('SELECT * FROM "user" WHERE username= $1',[username],function(err,result){
        if(err){
           res.status(500).send(err.toString());
       } 
       else{
           if(result.rows.length===0){
               res.send(403).send('usename/password is invailid');
           }
           else{
               var dbString=result.rows[0].password;
               var salt=dbString.split('$')[2];
               var hashedPassword=hash(passowrd,salt);
               if(hashedPassword===dbString){
                   res.send("credentials are correct");
               }else{
                   res.send(403).send('username/password is invailid');
               }
           }
       }
    });
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var names=[];
app.get('/submit-name',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/article/:articleName',function(req,res){
        pool.query("SELECT * FROM article WHERE title= $1",[req.params.articleName],function(err,result){
            if(err){
           res.status(500).send(err.toString());
       }
            else{
                if(result.rows.length===0){
                    res.status(404).send('Article not found');
                }
                else{
                    var articleData=result.rows[0];
                    res.send(createTemplate(articleData));
                }
            }
        });
        
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
