
const canvas = document.getElementById("gameCanvas");

const ctx = canvas.getContext("2d");


const gameState={
	players:[],
	objects:[],
	gravity:0.5
}

class Player {
	constructor(x,y,width,height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;

		this.velocityY = 0;
		this.velocityX = 0;
		this.jumping = false;
		this.speed = 5;
		this.jumpForce= -12;
		this.color="#FF0000";
	}

	update(){
	//applay gravity
	  this.velocityY += gameState.gravity;

	//update position 
	   this.X +=this.velocityX;
	   this.Y +=this.velocityY;

	//ground collision 
	if(this.y > canvas.height - this.height){
		this.y = canvas.height - this.height;
		this.velocityY = 0;
		this.jumping = false;
		}
	}

	draw (){
	  ctx.fillStyle= this.color;
	  ctx.fillRect(this.x,this.y,this.width,this.height);

	   ctx.fillStyle = "green";
	   ctx.fillRect(this.x + 5 , this.y + 5 ,5,5);
	   ctx.fillRect(this.x + 15 , this.y + 5 ,5,5);
	}




	jump(){
		if(!this.jumping){
			this.velocityY = this.jumpForce;
			this.jumping = true;

		}
	}



	moveLeft(){
	        this.velocityX = -this.speed;
	}

	moveRight (){
        	this.velocityX = this.speed;
	}

	stop(){
	this.velocityX = 0;

	}


}

class Platform{
	constructor(x,y,width,height,color="gray"){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}


	draw (){

	ctx.fillStyle = this.color;
	ctx.fillRect(this.x,this.y,this.width,this.height);

	}

}

function init(){

	const player = new Player (10,10,50,50);
	gameState.players.push(player);


	gameState.objects.push(new Platform( 0,canvas.height - 20 , canvas.width,20 ));
	gameState.objects.push(new Platform(100,400,200,20));
	gameState.objects.push(new Platform(400,300,150,20));
	gameState.objects.push(new Platform(200,200,100,20));

	gameLoop();

}


function gameLoop(){

	ctx.clearRect(0,0,canvas.width,canvas.height);


	drawBackground();

	gameState.objects.forEach(obj => obj.draw());


	gameState.players.forEach(player=>{

	player.update();
	checkCollisions(player);
	player.draw();
	});

	requestAnimationFrame(gameLoop);

}

function drawBackground(){

	ctx.fillStyle = "#87CEEB";
	ctx.fillRect(0,0,canvas.width,canvas.height);

//sun
	ctx.fillStyle = "#FFFF00";
	ctx.beginPath();
	ctx.arc(700,50,30,0,Math.PI * 2);
	ctx.fill();


//cluod
	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.arc(100,80,20,0,Math.PI * 2);
	ctx.arc(130,80,25,0,Math.PI * 2);
	ctx.arc(160,80,20,0,Math.PI * 2);
	ctx.fill();

}

function checkCollisions(player){

	gameState.objects.forEach(obj => {
	
		if(player.x < obj.x + obj.width && 
		   player.x + player.width > obj.x &&
		   player.y < obj.y + obj.height && 
		   player.y + player.height > obj.y) {

		if(player.velocityY > 0 && player.y + player.height > obj.y){
		 player.y = obj.y - player.height;
	         player.velocityY = 0 ;
		 player.jumping = false;
		}
	}
	});
}



// Keyboard input
const keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
	console.log(e);
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function handleInput() {
    const player = gameState.players[0];
    
    if (keys['ArrowLeft'] || keys['a']) {
        player.moveLeft();
    } else if (keys['ArrowRight'] || keys['d']) {
        player.moveRight();
    } else {
        player.stop();
    }
    
    if ((keys['ArrowUp'] || keys['w'] || keys[' ']) && !player.jumping) {
        player.jump();
    }
}

// Update game loop to include input handling
function gameLoop() {
    handleInput();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    
    gameState.objects.forEach(obj => obj.draw());
    
    gameState.players.forEach(player => {
        player.update();
        checkCollisions(player);
        player.draw();
    });
    
    requestAnimationFrame(gameLoop);
}
// Start everything when page loads

class Coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.collected = false;
    }
    
    draw() {
        if (!this.collected) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}


class AnimatedSprite {
    constructor(x, y, spriteSheet, frameWidth, frameHeight, frameCount) {
        this.x = x;
        this.y = y;
        this.spriteSheet = new Image();
        this.spriteSheet.src = spriteSheet;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.frameCount = frameCount;
        this.currentFrame = 0;
        this.animationSpeed = 0.2;
    }
    
    update() {
        this.currentFrame = (this.currentFrame + this.animationSpeed) % this.frameCount;
    }
    
    draw() {
        const frameX = Math.floor(this.currentFrame) * this.frameWidth;
        ctx.drawImage(
            this.spriteSheet,
            frameX, 0, this.frameWidth, this.frameHeight,
            this.x, this.y, this.frameWidth, this.frameHeight
        );
    }
}



window.addEventListener('load', init);


