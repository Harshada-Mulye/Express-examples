const express=require('express')

const router=express.Router();
let fakeDB=[
	{species:"monkey",favouritefood:"banana"},
	{species:"dog",favouritefood:"biscuit"},
	{species:"cat",favouritefood:"milk"},

]
router.get('/',(req,res)=>{
	//console.log('GET /animals/');
	//console.log('GET /')
	res.send(fakeDB)
})
router.get('/:index',(req,res)=>{
	//console.log('GET /animals/' ,req.params.index);
	
	const index=Number(req.params.index)
	const value=fakeDB[index]
	if(!value){
		const random = Math.floor(Math.random() * fakeDB.length)
		res.status(400).send(fakeDB[random])
		//res.send(fakeDB[2])
		return
	}
	res.send(value)
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

router.delete('/:index',  (req, res) => {
	const index=Number(req.params.index)
	const value=fakeDB[index]
	if(!value){
		res.status(400).send("no animal with that index")
		return
	}
    const fakeDBIndex = fakeDB.findIndex(p => p.index == index);
   fakeDB.splice(fakeDBIndex, 1);
   return res.send();
   });

module.exports=router