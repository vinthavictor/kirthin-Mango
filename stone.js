class Stone{
constructor(x,y,r){
    var options = {restitution:0,friction:1,density:1.2}
    this.image = loadImage("stone.png")
    this.body = Bodies.circle(x,y,r/2,options)
    this.r = r
    World.add(world,this.body)
    
}
display(){
    var pos = this.body.position
    push();
    translate(pos.x,pos.y)
    fill("black")
    imageMode(CENTER)
    image(this.image,0,0,this.r*2,this.r*2)
    pop();
}
}