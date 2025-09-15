function  createObject (name) {
	let newObject = {
	    name:name,
	    width:200,
	    height:200,
	    pos_x:0,
	    pos_y:0,
	};
	return newObject;
} 


function circle(obj){	
	if(!obj){
	    console.log("there is no object");
		return 0;
	}else{
	    let Pi = 3.14;
	    let r = obj.width;
	    let C_M = r * Pi;
	    let radius = C_M;
	    obj.border_radius = radius;	
	return obj;
	}
}



function trangle(obj){
	console.log(obj);
}


function squre(obj){
	console.log(obj);
}

function createShape(btn){
      let newObj;	
	if(!btn){
	    console.log("do not create shape");	   	
	}else if(btn.name == "circle"){
		 circle(btn);
	}else if(btn.name == "trangle"){
		 trangle(btn);
	}else if (btn.name == "squre"){
	  	 squre(btn);
	}

       newObj = btn;

          return newObj	
}

const trangleshape = createObject("trangle");

const squreshape = createObject("squre");

const circleshape = createObject("circle");


export const circle1 = createShape(circleshape);
