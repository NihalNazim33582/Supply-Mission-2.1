var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage("package",packageIMG)
	packageSprite.scale=0.2

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage("helicopter",helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	//ground = Bodies.rectangle(width/2, 699, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	Engine.run(engine);

	box1 = new Box(width/2,690,200,20);
	box2 = new Box (300,660,20,100);
	box3 = new Box(500,660,20,100);

}

function draw() {
	rectMode(CENTER);
	
	background(0);
	
	Engine.update(engine);
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y
	
	box1.display();
	box2.display();
	box3.display(); 
	
	keyPressed();
	drawSprites();
 
}

function keyPressed() {
	//console.log("I AM ANNOEYED");
	if (keyCode === UP_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}
keyPressed