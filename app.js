var express = require('express');
var path = require('path');
var mysql=require('mysql');


var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);

var http =require('http');


var connection = mysql.createConnection({
  host     : '127.4.188.2',
port:'3306',
  user     : 'adminfG3JNNG',
  password : 'la65E2Rzzys4',
  database : 'nammaooru'
}); 


/*var connection = mysql.createConnection({

OPENSHIFT_MYSQL_DB_HOST :'127.4.188.2',
OPENSHIFT_MYSQL_DB_PORT :'3306',
OPENSHIFT_MYSQL_DB_USERNAME:'adminfG3JNNG',
OPENSHIFT_MYSQL_DB_PASSWORD:'la65E2Rzzys',
OPENSHIFT_MYSQL_DB_URL:'mysql://adminfG3JNNG:la65E2Rzzys4@127.4.188.2:3306'
});
*/

connection.connect(function(err,success){
  if (err) {
    throw err;
  console.log("Error"+err);

  }
  else
  {
    console.log("Success"+success);
  }
});



/*var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'jj'
});*/ 
  
if(connection)
{
  //console.log("Success"+connection);

}
else
{
  console.log("Error");
}
app.get('/city',function(req,res){
try{



  //var id = req.query.id;

/*var t=req.query.id;
console.log(t);
*/  /*  var data = {
        "error":1,
        "Books":""
    };*/


    console.log(req.params.cityid);
    var t=1;
    connection.query("SELECT * from city",function(err, rows, fields){
        
console.log("success"+JSON.stringify(rows));
res.send("dsadasda");
//console.log("success"+JSON.stringify(fields));
console.log(JSON.stringify(rows));
res.send(JSON.stringify(rows));
//console.log("success"+JSON.stringify(err));
     
    });

}
catch(e)
{
console.log(e); 
}

});
app.get('/jj/',function(req,res){

res.send("Connection Success change");
});
app.get('/jss/',function(req,res){

res.send("Connection Success change");
});

app.get('/city/:cityid',function(req,res){
try{



  //var id = req.query.id;

/*var t=req.query.id;
console.log(t);
*/  /*  var data = {
        "error":1,
        "Books":""
    };*/


    console.log(req.params.cityid);
    var t=1;
    connection.query("SELECT * FROM city",function(err, rows, fields){
        
console.log("success"+JSON.stringify(rows));

//console.log("success"+JSON.stringify(fields));
res.send(JSON.stringify(rows));
//console.log("success"+JSON.stringify(err));
     
    });

}
catch(e)
{
console.log(e); 
}

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

});

module.exports = app;


app.listen('8000');
