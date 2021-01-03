const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var du1, du2, du3;

function preload() {

}

function setup() {

	createCanvas(1600, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200, 590, 10000, 20);

	ball = new Ball(200, 300, 30);

	du1 = new Dustbin(1200, 505, 20, 150);
	du2 = new Dustbin(1450, 505, 20, 150);
	du3 = new Dustbin(1325, 570, 230, 20);

	Engine.run(engine);

}

function draw() {

	rectMode(CENTER);

	background(0);

	keyPressed();

	ground.display();

	ball.display();

	du1.display();
	du2.display();
	du3.display();

	drawSprites();

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x : 10, y : -10})

	}

	if(ball.body.position.x >= 670){

		Matter.Body.applyForce(ball.body, ball.body.position, {x : 5, y : 15})

	}

}