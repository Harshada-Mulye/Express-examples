const express=require('express')

const router=express.Router();
let visitcount=0
function onGetGuestBook(req,res){
	console.log('Get/Guestbook')
	visitcount++;
	res.status(200).send(`you are visitor number ${visitcount}`)
}
router.get('/',onGetGuestBook)
module.exports=router