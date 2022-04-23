var createError = require('http-errors');
var express = require('express');
var path = require('path');
const fileUpload = require('express-fileupload');
const bodyParser = require("body-parser");

var addDiseaseRouter = require('./routes/penyakit');
var dnaTestRouter = require('./routes/ujidna');
var searchRouter = require('./routes/search')

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use('/addpenyakit', addDiseaseRouter);
app.use('/ujidna', dnaTestRouter);
app.use('/search',searchRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3000,()=>{
  console.log("listen to port 3000")
})

module.exports = app;


