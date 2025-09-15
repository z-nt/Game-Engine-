

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


function circle(){
	console.log("i am circle ")
}



function trangle(){
	console.log("i am trangle ");
}


function squre(){
	console.log("i am squre");
}

function createShape(btn){
	if(!btn){
	    console.log("do not create shape");	   	
	}else if(btn.name == "circle"){
		return circle();
	}else if(btn.name == "trangle"){
		return trangle();
	}else if (btn.name == "squre"){
	  	return squre();
	}

}

const trangleshape = createObject("trangle");

const squreshape = createObject("squre");

const circleshape = createObject("circle");

createShape (trangleshape);
createShape (squreshape);
createShape (circleshape);
createShape ();










