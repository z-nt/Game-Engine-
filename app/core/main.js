import {checkStorage} from "./object.js";



/*create-object*/
let obj={
 name:null,
}
const createobjbtn = document.getElementById("create-object");
//function for create get new object name;
function addPromt(){  
//create promt Element
   let promt= document.createElement("div");
     	  promt.className="promt";
	  promt.innerHTML=`
	 <div">
	 	<input class="getnameobject" id="promtinput" placeholder="insert object name..."/>
		<button id="savebtn">save</button>
		<button id="removebtn">exit</button>
		<div class="status-message" id="statusMessage"></div>
	 </div>
	  `;
//style the promt 
	Object.assign(promt.style,{
	  position:"absolute",
	  color:"white",
	  top:"300px",
	  left:"400px",
	  borderRadius:"8px",
	  boxShadow:"0 4px 6px rgba(0,0,0,0.1)"
	});

//add to home page 
	let homeContainer = document.getElementById("home-container");
	homeContainer.appendChild(promt);
//remove promt
//function for remove promt 
function removePromt(obj){
	obj.remove();
}
const removepromtbtn = document.getElementById("removebtn");
removepromtbtn.addEventListener("click",(e)=>{
	e.preventDefault();
	removePromt(promt);
});

//save prompt value 
//button
const saveValueInputPromt = document.getElementById("savebtn");

//input
saveValueInputPromt.addEventListener("click",saveValueInput);
function saveValueInput(){

	const input= document.getElementById("promtinput");

	let errMessage = "This field cannot be empty";
	let successMessage="Object saved successfully!";
	
	let statusMessage = document.getElementById("statusMessage");

	const value = input.value.trim();

	if(value == ""){
		showError("please fill in this field");
		return false;
	}else{
	    	showSuccess("object saved");
		obj.name = value;
		if(obj.name !== null){
		 CreateUserObject(obj);
		  checkStorage();	
		removePromt(promt);
		}
	}

	//clear input after delay;
	setTimeout(()=>{
		resetInput();

	},2000);

//function for showing error message
	function showError(message){
	  input.placeholder=`${message}`;
	  input.classList.remove("success");
	  input.classList.add("empty-error");
	  input.value = "";
	  input.focus();
		statusMessage.textContent = message;
		statusMessage.style.color="#ff4757";
	}
// function for showing success message
	function showSuccess(message){	
	  input.placeholder=`${message}`;
	  input.classList.remove("empty-error");
	  input.classList.add("success");
	  input.value = "";
		statusMessage.textContent = message;
		statusMessage.style.color="#2ed573";
	}
	
// function for resetInput 
	function resetInput() {	  
	   input.placeholder="Enter your name";
	   input.classList.remove("empty-error","success");
		statusMessage.textContent = "" ;
	}
}


}

//create promt
createobjbtn.addEventListener("click",(e) => {
	e.preventDefault();
	addPromt();	
});

 async function CreateUserObject(obj){
	console.log(obj.name);
	  if(obj){
		await localStorage.setItem("obj",JSON.stringify(obj));
	}
	 return obj;
};


