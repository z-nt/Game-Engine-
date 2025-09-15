import  {circle1} from  "./logic.js";




const btnCircle = document.getElementById("btn-shape-circle");

btnCircle.addEventListener("click",function(){
   const scene = document.getElementById("scene");
   let obj = document.createElement("div");
   obj.classList = circle1.name;
   obj.style.width = circle1.width + "px";
   obj.style.height = circle1.height + "px";
   obj.style.borderRadius= circle1.border_radius + "px";
   scene.appendChild(obj); 
	changePos(obj);
})

const input = document.getElementById("input");

//console.log(circle.offsetHeight);

//console.log(circle.offsetWidth);


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






const btnT = document.getElementById("btn-shape-trangle");


const btnS = document.getElementById("btn-shape-squre");




















