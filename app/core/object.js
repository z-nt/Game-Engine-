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
   newNavItem.classList.add = "nav-items";
   newNavItem.id = elem.name;
   
   let navMenu = document.getElementById("objectList");
   newNavItem.innerHTML = `${elem.name}`;
   navMenu.appendChild(newNavItem);
}














