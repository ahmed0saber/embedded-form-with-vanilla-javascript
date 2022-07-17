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
			<input id="autowatsName" type="text" placeholder="Full name" onKeyup="AutowatsValidateName(this)">
			<p class="error">No Errors</p>
		</div>
		<div class="input-group">
			<label for="autowatsEmail">Enter your email address:</label>
			<input id="autowatsEmail" type="email" placeholder="Email address" onKeyup="AutowatsValidateEmail(this)">
			<p class="error">No Errors</p>
		</div>
		<div class="input-group">
			<label for="autowatsPhone">Enter your phone number:</label>
			<input id="autowatsPhone" type="tel" placeholder="Phone number" onKeyup="AutowatsValidatePhone(this)">
			<p class="error">No Errors</p>
		</div>
		<button onclick="AutowatsSubmitForm()">Submit</button>
	</div>
</div>`
document.body.appendChild(autowatsForm)

let autowatsFormToggler = document.createElement("div")
autowatsFormToggler.setAttribute("class", "autowats-embeded-form-toggle-btn")
autowatsFormToggler.setAttribute("onclick", "openAutowatsEmbededForm(this)")
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
function openAutowatsEmbededForm(e){
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

function AutowatsValidateName(e){
	if(/^[a-zA-Z\s]*$/.test(e.value) && e.value.length > 4){
		e.parentNode.querySelector(".error").style.opacity = "0"
		e.parentNode.querySelector(".error").textContent = "No Errors"
	}else{
		e.parentNode.querySelector(".error").textContent = "Required"
		e.parentNode.querySelector(".error").style.opacity = "1"
	}
}
function AutowatsValidateEmail(e){
	if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value)){
		e.parentNode.querySelector(".error").style.opacity = "0"
		e.parentNode.querySelector(".error").textContent = "No Errors"
	}else{
		e.parentNode.querySelector(".error").textContent = "Required"
		e.parentNode.querySelector(".error").style.opacity = "1"
	}
}
function AutowatsValidatePhone(e){
	if(/^\+?\d*$/.test(e.value) && e.value.length > 4){
		e.parentNode.querySelector(".error").style.opacity = "0"
		e.parentNode.querySelector(".error").textContent = "No Errors"
	}else{
		e.parentNode.querySelector(".error").textContent = "Required"
		e.parentNode.querySelector(".error").style.opacity = "1"
	}
}
function AutowatsSubmitForm(){
	let fullName = document.getElementById("autowatsName").value
	let emailAddress = document.getElementById("autowatsEmail").value
	let phoneNumber = document.getElementById("autowatsPhone").value
	console.log(fullName, emailAddress, phoneNumber)
}