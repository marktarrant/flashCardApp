const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();//returns an express application

app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser());
app.use('/static', express.static('public'))

app.set('view engine', 'pug');//lets express know we are using pug as a template engine by default it will look in a views folder

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);

app.use('/cards', cardRoutes);

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error', err);
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000')
});//create a server which will run on my local machine