let x = 300;
let y = 570;

let a = 300;
let b = 570;

let shoot = false;
let collided;


function setup() {
    createCanvas(600, 600);
    background(0, 0, 0);
}

function draw() {
    background(0, 0, 0);

    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }

    if (shoot == true){
        fill('gray');
        ellipse(a, b, 10);
        b -= 5;
    } else {
        if (keyIsDown(LEFT_ARROW)) {
            a -= 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            a += 5;
        } 
    }

   
    
    fill(255, 0, 0);
    rect(x, y, 15, 25);

    fill("lightblue")
    ellipse(75, 100, 20, 20);
    ellipse(150, 100, 20, 20);
    ellipse(225, 100, 20, 20);
    ellipse(300, 100, 20, 20);
    ellipse(375, 100, 20, 20);


}

function keyPressed() {
    if (keyCode == UP_ARROW) {
     shoot = true;
    }
   
}


function shipsHit(){
    circle1 = {
        x: a,
        y: b, 
        r: 20,
    }
    circle2 = {
        x: a, 
        y: b,
        r: 20,
    }
    

    collided = dist(circle1.x, circle1.y, circle2.x, circle2.y) < (circle1.r + circle2.r);

    if (collided){
        fill('black');
    }
} 