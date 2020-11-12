class Queue {

    constructor(a,b,offsetX,offsetY){
    this.offsetX = offsetX
    this.offsetY = offsetY
    var options = {
    bodyA : a,
    bodyB : b,
    pointB: {x: offsetX, y: offsetY},
    length : 10,
    stiffness : 0.2
    }
    
     this.rope = Matter.Constraint.create (options)
    World.add(world,this.rope)
    }
    
    display(){
    
    push()
    strokeWeight(6)
    stroke("blue")
    line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x, this.rope.bodyB.position.y)
    pop()
    }
    }