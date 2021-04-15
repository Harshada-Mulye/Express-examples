const express=require('express')
const router=express.Router();
let fruits = ['strawberry', 'pear', 'apple', 'banana', 'orange']
router.get('/',(req,res)=>{
	console.log('GET /fruits/');
	console.log('GET /')
	res.send(fruits)
})
router.post('/',(req,res)=>{
	console.log('POST /fruits/', req.body);
	//let newFruit='mango'
	let newFruit=req.body
	fruits.push(newFruit)
	res.send('added new fruit')
})
router.put('/',(req,res)=>{

	let replaceFruit="grapefruit"
	let lastindex=fruits.length-1;
	fruits[lastindex]=replaceFruit
	res.send('fruit replaced')
})
router.delete('/',(req,res)=>{
	console.log('DELETE /fruits');
	fruits=[];
    res.send('deleted all fruits')
})
module.exports=router