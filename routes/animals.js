const express=require('express')

const router=express.Router();
let fakeDB=[
	{species:"monkey",favouritefood:"banana"},
	{species:"dog",favouritefood:"biscuit"},
	{species:"cat",favouritefood:"milk"},

]
router.get('/',(req,res)=>{
	console.log('GET /animals/');
	console.log('GET /')
	res.send(fakeDB)
})
router.post('/',(req,res)=>{
	console.log('POST /animals/', req.body);
	//let newAnimal={species:"rabbit",favouritefood:"carrot"}
	let newAnimal=req.body
	fakeDB.push(newAnimal)
	res.send('added new animal')
})
router.put('/',(req,res)=>{

	let replaceAnimal={species:"dear",favouritefood:"grass"}
	let lastindex=fakeDB.length-1;
	fakeDB[lastindex]=replaceAnimal
	res.send('animal replaced')
})
router.delete('/',(req,res)=>{

 fakeDB=[]
	res.send('deleted all animals')
})
module.exports=router