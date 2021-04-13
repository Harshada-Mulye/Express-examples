const express=require('express')
const app=express()
const port=1337
const frontend=require('./routes/frontend.js')
const guestbook=require('./routes/guestbook.js')
const animals=require('./routes/animals.js')
const fruits=require('./routes/fruits.js')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
	console.log('get /')
	
	res.send('Hi from server')
})

    app.get('/secret', (req, res) => {
		console.log('GET /secret');
		res.send('You have found the secret route!')
	})
	app.get('/message', (req, res) => {
		console.log('GET /secret');
		res.sendFile(__dirname + '/frontend/message.html')
		//res.send('You have found the message.html route!')
	})
	
	app.use('/frontend', frontend)
	app.use('/guestbook', guestbook)
	app.use('/animals', animals)
	app.use('/fruits', fruits)
	var path = require('path');
	app.use('/static', express.static(path.join(__dirname, 'public')))
    app.listen(port,()=>{console.log('server is listning',port)})