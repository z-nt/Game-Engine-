export function checkStorage(){
	const savedObject = JSON.parse( localStorage.getItem("obj"));
	let objects = []
	 if(savedObject) {
		 createElementUser(savedObject);
		objects.push(savedObject);
		 
	 }else{
 console.log("there is no bject");
	 }
}

function createElementUser(elem){
  let newNavItem = document.createElement("li");
   newNavItem.classList.add = "newObjectItem";
   newNavItem.id = elem.name;
  Object.assign(newNavItem.style,{
	  border:"none ",
	  fontSize:"1.5rem",
	  fontWeight:"bold",
	  cursor:"pointer",
	  color:"#222",
	  backgroundColor:"#ccc",
	  padding:"0.5rem",
	  margin:"0.5rem",
	  borderRadius:"8px",
  });
   let navMenu = document.getElementById("objectList");
   newNavItem.innerHTML = `${elem.name}`;
   navMenu.appendChild(newNavItem);
}














