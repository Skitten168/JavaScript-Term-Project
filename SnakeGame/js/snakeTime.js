const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width/tileCount-2;//creating a tile size  that will fit in the canvas
let headX = 10;
let headY = 10;

let xVelocity=0;
let yVelocity=0;

//game loop
function drawGame(){
    clearScreen();
    changeSnakePosition();
    drawSnake();
    setTimeout(drawGame, 1000/ speed);
}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake(){
    ctx.fillStyle = 'orange';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize);
}

function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

document.body.addEventListener("keydown", keyDown);

function keyDown(event){
    //setting 'up' movement to up key
    if(event.keyCode == 38){//up arrow keycode = 38
        if(yVelocity ==1)//preventing colision with 180 degree movements
            return;
        yVelocity = -1;//moving up one position by decrementing y
        xVelocity = 0;
    }
    //setting 'down' movement to down key
    if(event.keyCode == 40){//down arrow keycode = 40
        if(yVelocity ==-1)//preventing colision with 180 degree movements
            return;
        yVelocity = 1;//moving down one position by incrementing y
        xVelocity = 0;
    }

     //setting 'left' movement to right key
     if(event.keyCode == 37){//left arrow keycode = 37
        if(xVelocity ==1)//preventing colision with 180 degree movements
            return;
        yVelocity = 0; 
        xVelocity = -1;//moving left one position by decrementing x
    }

       //setting 'right' movement to right key
       if(event.keyCode == 39){//right arrow keycode = 39
        if(xVelocity ==-1)//preventing colision with 180 degree movements
        return;
        yVelocity = 0; 
        xVelocity = +1;//moving right one position by incrementing x
    }
}
drawGame();


//request animation frame
//set interval xtimes per second
//set Timeout