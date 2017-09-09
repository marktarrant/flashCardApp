const express = require('express');
const router = express.Router();

//set up a home route for landing pages '/' gets you to the home directory
router.get('/', (req, res) => {
	const name = req.cookies.username;

	if (name) {
		res.render('index', { name });
	} else {
		res.redirect('/hello');
	} //renders the index pug file. 
});

router.get('/hello', (req, res) => {
	const name = req.cookies.username;

	if (name) {
		res.redirect('/');
	} else {
		res.render('hello');//set up a home route for landing pages '/' gets you to the home directory
router.get('/', (req, res) => {
	const name = req.cookies.username;

	if (name) {
		res.render('index', { name });
	} else {
		res.redirect('/hello');
	} //renders the index pug file. 
});

router.get('/hello', (req, res) => {
	const name = req.cookies.username;

	if (name) {
		res.redirect('/');
	} else {
		res.render('hello');
	}
});

//redirect to home if if username is set

router.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	res.redirect('/');
});

//set up a hello route

router.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
});
	}
});

//redirect to home if if username is set

router.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	res.redirect('/');
});

router.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
});

module.exports = router;