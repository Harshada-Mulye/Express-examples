const clickme=document.querySelector("#clickme")
clickme.addEventListener('click', event => {
	
	const messageElement = document.querySelector('#myText')
	
	console.log(messageElement.value)
	const messageDisplay = document.querySelector('#display')
	console.log(messageDisplay)
	messageDisplay.innerHTML += messageElement.value
})
