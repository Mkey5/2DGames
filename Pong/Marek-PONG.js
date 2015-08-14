// Creating variables
var ballX = 0,
    ballY = 0;
var padX = 770,
    padY = 0;
var points = 0;
var moveDown = true;
var moveLeft = true;
var speed = 10;
var lifesLeft = 5;
var ouch = false;
var speedPad = 130;
var keys = false;

function update() {
    //	myX = myX+(mouseX-myX)/10;
    //	myY = myY+(mouseY-myY)/10;

    if (lifesLeft > 0) {
        if(keys == false){
            padY = padY + (mouseY - padY) / 10;
        }
        
        //console.log("Ouch : " + ouch)

        if (moveDown == true) {
            ballY = ballY + speed;

        } else if (moveDown == false) {
            ballY = ballY - speed;
        }

        if (moveLeft == true) {
            ballX = ballX + speed;
        } else if (moveLeft == false) {
            ballX = ballX - speed;
        }



        if (ballX > 770) {
            moveLeft = false;
            lifesLeft -= 1;
            ouch = true;
        } else if (ballX < 17) {
            moveLeft = true;
        } else if (ballY > 570) {
            moveDown = false;
        } else if (ballY < 17) {
            moveDown = true;
        }

        //checking for collisions
        if (ballX + 17 >= padX && (ballY + 17 >= padY && ballY + 17 <= padY + 200)) {
            points += 1;
            moveLeft = false;
            console.log("Points : " + points);
        }

    }


    // pad restrictions
    if (padY > 400) {
        padY = 400;
    } else if (padY < 0) {
        padY = 0;
    }




}

function draw() {


    //context.fillRect(ballX, ballY, 30, 30);
    // canvas borders:    

    context.fillRect(0, 0, 800, 3);
    context.fillRect(0, 590, 800, 10);
    context.fillRect(0, 0, 3, 600);
    if (ouch == false) {
        context.fillStyle = "#0000FF";
        context.fillRect(797, 0, 3, 600);
    } else {
        context.fillStyle = "#f80b0b";
        context.fillRect(797, 0, 3, 600);
    }


    // the pad
    context.fillStyle = "#0000FF";
    context.fillRect(padX, padY, 30, 200);

    //text :
    context.fillStyle = "#ffffff";
    context.font = "30px Georgia";
    context.fillText("Points: " + points, 610, 40);

    context.fillStyle = "#ffffff";
    context.font = "30px Georgia";
    context.fillText("Lifes left: " + lifesLeft, 30, 40);


    // the ball
    if (lifesLeft > 0) {
        context.fillStyle = "#f80b0b";
        context.beginPath();
        context.arc(ballX, ballY, 17, 0, 2 * Math.PI, false);
        context.fill();
        context.stroke();
    } else {
        context.fillStyle = "#ffffff";
        context.fillText("GAME OVER!", 300, 300);
    }

    //defining Ouch!
    if (ouch == true) {
        context.fillStyle = "#ffffff";
        context.fillText("Ouch!", 350, 60);

        // timing for the Ouch
        if (ballX < 200) {
            ouch = false;
        }
    }

    // button mouse
    //context.strokeStyle = "#ffffff";
    context.fillStyle = "#5c5a59";
    context.fillRect(250, 20, 60, 30);
    context.fillStyle = "#ffffff";
    context.font = "17px Georgia";
    context.fillText("mouse", 255, 40);


    //button keys
    context.fillStyle = "#5c5a59";
    context.fillRect(470, 20, 60, 30);
    context.fillStyle = "#ffffff";
    context.font = "17px Georgia";
    context.fillText("keys", 481, 40);

}

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
}

function keydown(key) {
    console.log("Pressed", key);
    if (keys == true) {
        if (key == key_up) {
            padY -= speedPad;
        } else if (key == key_down) {
            padY += speedPad;
        }
    }
}

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);

    // first 250,20 60 30  second 470,20 60 30

    if ((mouseX > 250 && mouseX < 310) && (mouseY > 20 && mouseY < 50)) {
        keys = false;
    } else if ((mouseX > 470 && mouseX < 530) && (mouseY > 20 && mouseY < 50)) {
        keys = true;
    }
}