



/*create-object*/

let obj={
 name:null,
}
const createobjbtn = document.getElementById("create-object");




//function for create get new object name;
function addPromt(){  

//function for remove promt 

function removePromt(button){
//	button.parentElement.remove();
	console.log("remove");
	console.log(button);
}



//create promt Element
   let promt= document.createElement("div");
     	  promt.className="promt";
	  promt.innerHTML=`
	 <div">
	 	<input class="getnameobject" id="promtinput" placeholder="insert object name..."/>
		<button>save</button>
		<button id="removebtn">exit</button>
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
}



createobjbtn.addEventListener("click",(e) => {
	e.preventDefault();
	addPromt();
});











