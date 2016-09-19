var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne={
    title: 'Article-one:Zhacker',
    heading: 'Article-one',
    date: '19-09-2016',
    content:`<p>
                    this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.
                </p>
                <p>
                    this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.
                </p>
                <p>
                    this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.
                </p>`
}

var articleTwo={
    title: 'Article-two:Zhacker',
    heading: 'Article-two',
    date: '19-09-2016',
    content:`<p>
                    this is my first article-two.this is my first article.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.
                </p>
                <p>
                    this is my first article-two.this is my first article.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.
                </p>
                <p>
                    this is my first article-two.this is my first article.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.
                </p>`
    
}

var articleThree={title: 'Article-two:Zhacker',
    heading: 'Article-two',
    date: '19-09-2016',
    content:`<p>
                    this is my first article-two.this is my first article.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.
                </p>
                <p>
                    this is my first article-two.this is my first article.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.
                </p>
                <p>
                    this is my first article-two.this is my first article.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.this is my first article-one.
                </p>`
    
}

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
                    ${date}
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one',function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req,res){
        res.send(createTemplate(articleTwo));
});

app.get('/article-three',function(req,res){
        res.send(createTemplate(articleThree));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
