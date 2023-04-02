const express = require('express') /* import express */
const path = require('path') /*Default module for node js */
const mongoose = require('mongoose')
const home = require('./routes/home')
const register = require('./routes/register')
//    Data base address callback function 
mongoose.connect('mongodb://localhost/FlowAid', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Db Connection Success');
  })
  .catch((err) => {
    console.error('Db Connection Fail', err);
  });

const app = express() /* instanciate the express app */

app.set('views', path.join(__dirname,'views'))/*Set the app to use the views dir*/
app.set('view engine','hjs') /*Set the app to use the hjs file*/


app.use(express.json())/*parse are form as json*/
app.use(express.urlencoded({extended: false})) /*enables receiving form data*/
app.use(express.static(path.join(__dirname, 'public')))/*Find all static assets inside the public dir*/ /*We will add our code with the other instance of the app.use function.*/
app.use('/', home) /* this route is responsable for all gets posts  deletes etc*/
app.use('/register', register)


app.listen(5000);
console.log('App running on http://localhost:5000');
