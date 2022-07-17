let autowatsHead = document.getElementsByTagName("HEAD")[0]
let autowatsCssLink = document.createElement("link")
autowatsCssLink.rel = "stylesheet"
autowatsCssLink.type = "text/css"
autowatsCssLink.href = "style.css"
autowatsHead.appendChild(autowatsCssLink)
let autowatsFontLink = document.createElement("link")
autowatsFontLink.rel = "stylesheet"
autowatsFontLink.type = "text/css"
autowatsFontLink.href = "https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
autowatsHead.appendChild(autowatsFontLink)

let autowatsForm = document.createElement("div")
autowatsForm.setAttribute("class", "autowats-embeded-form")
autowatsForm.setAttribute("style", "display:none;")
autowatsForm.innerHTML = `<div class="section">
	<div class="form">
		<h1>AutoWats</h1>
		<p>Fill the form to recieve your discount.</p>
		<div class="input-group">
			<label for="autowatsName">Enter your full name:</label>
			<input id="autowatsName" type="text" placeholder="Full name" onKeyup="autowatsValidateName(this)">
			<p class="error">No Errors</p>
		</div>
		<div class="input-group">
			<label for="autowatsEmail">Enter your email address:</label>
			<input id="autowatsEmail" type="email" placeholder="Email address" onKeyup="autowatsValidateEmail(this)">
			<p class="error">No Errors</p>
		</div>
		<div class="input-group">
			<label for="autowatsPhone">Enter your phone number:</label>
			<input id="autowatsPhone" type="tel" placeholder="Phone number" onKeyup="autowatsValidatePhone(this)">
			<p class="error">No Errors</p>
		</div>
		<div class="btn-container">
			<button onclick="autowatsSubmitForm(this)" class="btn">Submit</button><div class="btn-particles"></div>
		</div>
	</div>
	<div class="sent-successfully">
		<span>Sent Successfully</span>
	</div>
	<div onclick="toggleAutowatsEmbededForm()" class="close">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
	</div>
</div>`
document.body.appendChild(autowatsForm)

let autowatsFormToggler = document.createElement("div")
autowatsFormToggler.setAttribute("class", "autowats-embeded-form-toggle-btn")
autowatsFormToggler.setAttribute("onclick", "toggleAutowatsEmbededForm(this)")
autowatsFormToggler.setAttribute("style", `position:fixed;
bottom:10px;right:10px;width:60px;height:60px;
background-color:#0FA3B1;color:#f7f7f7;display:flex;
flex-direction:row;justify-content:center;align-items:center;
cursor:pointer;z-index:100000;`)
autowatsFormToggler.innerHTML = `<span>open</span>`
document.body.appendChild(autowatsFormToggler)

const autowatsOpenOrCloseProperties = {
	open: {
		styleAttribute: "", 
		btnText: "close", 
		addClass: "animate-to-open", 
		removeClass: "animate-to-close",
		timeToOpen: 100,
		timeToClose: 0
	},
	close: {
		styleAttribute: "display:none;", 
		btnText: "open", 
		addClass: "animate-to-close", 
		removeClass: "animate-to-open",
		timeToOpen: 0,
		timeToClose: 500
	}
}
let AutowatsFormStatus = "close"
function toggleAutowatsEmbededForm(e = document.querySelector(".autowats-embeded-form-toggle-btn")){
	AutowatsFormStatus = AutowatsFormStatus == "close" ? "open" : "close"
	setTimeout(()=>{
		autowatsForm.querySelector(".section").classList.add(autowatsOpenOrCloseProperties[AutowatsFormStatus].addClass)
		autowatsForm.querySelector(".section").classList.remove(autowatsOpenOrCloseProperties[AutowatsFormStatus].removeClass)
	}, autowatsOpenOrCloseProperties[AutowatsFormStatus].timeToOpen)
	setTimeout(()=>{
		autowatsForm.setAttribute("style", autowatsOpenOrCloseProperties[AutowatsFormStatus].styleAttribute)
	}, autowatsOpenOrCloseProperties[AutowatsFormStatus].timeToClose)
	e.querySelector("span").textContent = autowatsOpenOrCloseProperties[AutowatsFormStatus].btnText
}

function autowatsValidateName(e = document.getElementById("autowatsName")){
	if(/^[a-zA-Z\s]*$/.test(e.value) && e.value.length > 4){
		e.parentNode.querySelector(".error").style.opacity = "0"
		e.parentNode.querySelector(".error").textContent = "No Errors"
		return true
	}else if(e.value.length == 0){
		e.parentNode.querySelector(".error").textContent = "Required"
		e.parentNode.querySelector(".error").style.opacity = "1"
		return false
	}else{
		e.parentNode.querySelector(".error").textContent = "Enter a valid name"
		e.parentNode.querySelector(".error").style.opacity = "1"
		return false
	}
}
function autowatsValidateEmail(e = document.getElementById("autowatsEmail")){
	if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value)){
		e.parentNode.querySelector(".error").style.opacity = "0"
		e.parentNode.querySelector(".error").textContent = "No Errors"
		return true
	}else if(e.value.length == 0){
		e.parentNode.querySelector(".error").textContent = "Required"
		e.parentNode.querySelector(".error").style.opacity = "1"
		return false
	}else{
		e.parentNode.querySelector(".error").textContent = "Enter a valid email"
		e.parentNode.querySelector(".error").style.opacity = "1"
		return false
	}
}
function autowatsValidatePhone(e = document.getElementById("autowatsPhone")){
	if(/^\+?\d*$/.test(e.value) && e.value.length > 4){
		e.parentNode.querySelector(".error").style.opacity = "0"
		e.parentNode.querySelector(".error").textContent = "No Errors"
		return true
	}else if(e.value.length == 0){
		e.parentNode.querySelector(".error").textContent = "Required"
		e.parentNode.querySelector(".error").style.opacity = "1"
		return false
	}else{
		e.parentNode.querySelector(".error").textContent = "Enter a valid phone number"
		e.parentNode.querySelector(".error").style.opacity = "1"
		return false
	}
}
function autowatsSubmitForm(e){
	if(autowatsValidateName() & autowatsValidateEmail() & autowatsValidatePhone()){
		let fullName = document.getElementById("autowatsName").value
		let emailAddress = document.getElementById("autowatsEmail").value
		let phoneNumber = document.getElementById("autowatsPhone").value
		console.log(fullName, emailAddress, phoneNumber)
		autowatsSubmittedSuccessfully(e)
		setTimeout(()=>{
			document.querySelector(".autowats-embeded-form .form").style.opacity = "0"
			document.querySelector(".autowats-embeded-form .sent-successfully").style.display = "flex"
			// setTimeout(()=>{
			// 	toggleAutowatsEmbededForm()
			// 	setTimeout(()=>{
			// 		document.querySelector(".autowats-embeded-form .form").style.opacity = "1"
			// 		document.querySelector(".autowats-embeded-form .sent-successfully").style.display = "none"
			// 	}, 400)
			// }, 1600)
		}, 800)
	}else{
		console.log("Not valid")
	}
}
function autowatsSubmittedSuccessfully(e){
	let particles = []
	let colors = ["#2aa2a2", "#2bb2b2", "#2cc2c2", "#2dd2d2", "#2ee2e2"]
	for(let i=0; i<20; i++){
		particles[i] = document.createElement("div")
		particles[i].setAttribute("class", "btn-particle")
		particles[i].setAttribute("style", `width:${Math.floor(Math.random() * 30) + 10}px;background-color:${colors[Math.floor(Math.random() * 4) + 0]};`)
		e.nextSibling.appendChild(particles[i])
		setTimeout(()=>{
			particles[i].classList.add("animated-particle")
			let x = Math.floor(Math.random() * 60) + 30
			let y = Math.floor(Math.random() * 60) + 30
			let position = Math.floor(Math.random() * 4) + 1
			if(position == 1){
				x = x * 1
				y = y * 1
			}else if(position == 2){
				x = x * -1
				y = y * 1
			}else if(position == 3){
				x = x * -1
				y = y * -1
			}else{
				x = x * 1
				y = y * -1
			}
			particles[i].style.transform = `translate(${x}px, ${y}px)`
		}, 50)
	}
}