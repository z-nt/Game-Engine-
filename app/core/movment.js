


 export  function move(obj,e){
   let object = document.getElementById("circle");

	 let isDraging = false;
	 let startX,startY;
	 let initialHandleX , initialHandleY;

	 function getRelativeMousePosition(e,element){
		const rect = element.getBoundingClientRect();
		 return{
		    x:e.clientX - rect.left,
		    y:e.clientY - rect.top,
	            relativeX : (e.clientX - rect.left) / rect.width * 100 ,

	            relativeY : (e.clienty - rect.top) / rect.height * 100 ,


		 }

	 }







}
