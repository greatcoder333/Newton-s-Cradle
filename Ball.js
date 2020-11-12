class Ball {

constructor(x,y,radius,offsetX,offsetY){
var options ={
isStatic:true,
restitution:1,
friction:0,
density:0.8
}

this.body = Bodies.circle(x,y,radius,options)
World.add(world, this.body)
}

display (){

var pos = this.body.position
var angle = this.body.angle
fill("purple")
strokeWeight(6)
stroke("purple")
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,70,70)
}
}