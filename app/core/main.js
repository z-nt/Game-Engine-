


const circle = document.getElementById("circle");



const input = document.getElementById("input");

console.log(circle.offsetHeight);

console.log(circle.offsetWidth);


const change = document.getElementById("change");

change.addEventListener("click",( )=>{
	circle.style.width=input.value + "px";	
	circle.style.height=input.value + "px"  ;	
});

function changePos (obj) {
	let pluspos= 50;
 const buttons = document.querySelectorAll(".movement-button");
	if (obj) {
	buttons.forEach(btn=>{
		btn.addEventListener("click",()=>{
			if(btn.id=="up"){
			    pluspos -= 10;	
			   obj.style.top = pluspos + "px";
			}
			else if (btn.id =="bottom"){

			    pluspos += 10;	
			   obj.style.top= pluspos + "px";
			}
			else if (btn.id == "left" ) {

			    pluspos -= 10;	
			   obj.style.left= pluspos + "px";
			}

			else if (btn.id == "right" ) {

			    pluspos += 10;	
			   obj.style.left= pluspos + "px";
			}else {
			   console.log("there is no shape");
	
			}
		})
	})
	}
	
}

changePos(circle);





