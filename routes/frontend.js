const express=require('express')
const router=express.Router();
router.get('/',(req,res)=>{
	console.log('get /frontend')
	var path = require('path');
	//res.sendFile(__dirname + '/../frontend/index.html')
	
    res.sendFile(path.resolve('frontend/index.html'));
	//res.send('hi')
})
module.exports=router