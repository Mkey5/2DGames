// Creating variables
var myX = 50, myY = 100;
var enX = 760, enY = 300;

var en2X = 400; en2Y = 0;
var count = 0;
var gameOver= false;

//for the circle
var circleX = 800;
var circleY = 200;

// for a random number between 2 integers (min - max);
var maxX = 800;
var minX = 0;
var randomx = Math.floor(Math.random() * (max - min + 1)) + 1;


function update() {
	//myX = myX+(mouseX-myX)/10;
	//myY = myY+(mouseY-myY)/10;
    
    // checking for collisions
//    rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.y + rect1.height > rect2.y
    
    
    if(gameOver == true){
    
    }
    //checking for collisions with the first enemy
    else if(myX < enX + 40 &&
            myX + 30 > enX &&
            myY < enY + 40 &&
            myY + 30 > enY){
        console.log("Game Over");
        console.log("Boooom!");
        gameOver = true;
        myY = myY;
        enX = enX;
        circleX = circleX;
    //checking for collisions with the second enemy
    }else if(myX < en2X + 40 &&
             myX + 30 > en2X &&
             myY < en2Y + 40 &&
             myY + 30 > en2Y){
        console.log("Game Over");
        console.log("Boooom!");
        gameOver = true;
        myY = myY;
        enX = enX;
        circleX = circleX;
        en2Y = en2Y;
    }
    //player is on the bottom 
    else if(myY >= 560 && gameOver != 1){
        myY = 560;
        console.log("Game Over");
        enX = enX;
        gameOver = true;
    //left side movement limitation
    }else if(myX<=0){
        myX = 0;
        
        myY = myY +3;
        enX = enX - 8;
        circleX = circleX - 9;
        en2Y = en2Y + 4;
    //right side movement limitation    
    }else if(myX>=750){
        myX = 750;
        
        myY = myY +3;
        enX = enX - 8;
        circleX = circleX - 9;
        en2Y = en2Y + 4;
    }else{
        myY = myY +3;
        enX = enX - 8;
        circleX = circleX - 9;
        en2Y = en2Y + 4;
    }
	
    //for counting the points and reviving the enemy
    if(enX <=-40 ){
        enX= 760;
        enY = myY + 50;
        count+=1;
        console.log("Points =  " + count);
        //contex.fillText("Points = "+ count,10,50);
    }
   
    // reviving the false enemy
    if(circleX <=-40){
        circleX = 760;
        circleY = myY + 50;
        count+=1;
    }
    
    //reviving the second enemy
    
    if(en2Y >= 640){
        en2Y = 0;
        en2X = myX + 10;
        count+=1;
    }
    
    
    
    
}

function draw() {
    // canvas borders
    context.fillRect(0,0,800,3);
    context.fillRect(797,0,3,600);
    context.fillRect(0,590,800,10);
    context.font="20px Georgia";
    context.fillStyle = "#FEFBFB";
    context.fillText("GAME CONTROLS : SPACE - Jump ; Left arrow ; Right arrow; ",0,20);
    
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
    context.fillStyle = "#FF0000";
    context.fillRect(enX , enY , 40, 40);
    context.font="20px Georgia";
    if(gameOver == true){
        context.fillStyle = "#FEFBFB";
        context.font="30px Georgia";
        context.fillText("Points: " + count ,650,40);
    }else{
        context.fillText("Points: " + count ,650,40);
    }
    context.fillRect(en2X , en2Y , 40 , 40);
    
    // this is how you draw circles
    
    if(gameOver == false){
    context.beginPath();
    context.arc( circleX, circleY , Math.floor(Math.random()*(40-0+1))+1, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
    
    
    context.fillStyle = "#FE9A2E";
    context.beginPath();
    context.arc( circleX +(Math.floor(Math.random()*(400-0+1))+1), circleY - (Math.floor(Math.random()*(400-0+1))+1) , Math.floor(Math.random()*(40-0+1))+1, 0, 2 * Math.PI,         false);
    context.fill();
    context.stroke();
    
    }
    
    
    
    
    if(gameOver == true){
        context.fillStyle = "#FF0000";
        context.font="50px Georgia";
        context.fillText("Game Over",275,300);
    }
    
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
    if(gameOver == false){
        
        if(key == space){
            myY = myY/1.5;
        }else if(key == key_right){
                myX = myX+50;
        }else if(key == key_left){
                myX = myX-50;
        }
        
    }
   
	
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

