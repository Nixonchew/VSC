const express = require('express');
const router = express.Router();
const alertMessage = require('../helpers/messenger');


router.get('/', (req, res) => {
	const title = 'Video Jotter';
	res.render('index', {title: title}) // renders views/index.handlebars
});

router.get('/showLogin',(req,res)=>{
	res.render('user/login')
})

router.get('/showRegister',(req,res)=>{
	res.render('user/register')
})

// Logout User
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.get('/about', (req,res)=>{
	const author = 'Denzel Washington';
	alertMessage(res,'success','This is an important message','fas fa-sign-in-alt',true);
	alertMessage(res,'danger','Unauthorized Access','fas fa-exclamation-circle',false)
})

