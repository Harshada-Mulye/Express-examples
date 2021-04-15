const express=require('express')
const app=express()
const port=1337

const guestbook=require('./routes/guestbook.js')
const animals=require('./routes/animals.js')
const fruits=require('./routes/fruits.js')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
var path = require('path');


app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/frontend', express.static(path.join(__dirname, 'frontend')))
app.use((req,res,next)=>{
console.log(`${req.method} ${req.url}`,req.params)
next()
})

app.get('/',(req,res)=>{

	res.send('Hi from server')
})

    app.get('/secret', (req, res) => {
		console.log('GET /secret');
		res.send('You have found the secret route!')
	})
	app.get('/message', (req, res) => {
	   res.sendFile(__dirname + '/frontend/message.html')
		//res.send('You have found the message.html route!')
	})


	

	app.use('/guestbook', guestbook)
	app.use('/animals', animals)
	app.use('/fruits', fruits)
	
	
    app.listen(port,()=>{console.log('server is listning',port)})