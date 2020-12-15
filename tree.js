class Tree{
    constructor(x,y){
        this.x = x
        this.y = y
        this.dustbinW = 450;
        this.dustbinH = 600;
        this.wallThickness = 10;
        this.image = loadImage("tree.png");
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinW,this.wallThickness,{isStatic:true})
       this.leftwall = Bodies.rectangle(0,this.y-this.dustbinH/2,this.wallThickness,this.dustbinH,{isStatic:true})
       // Matter.Body.setAngle(this.leftwall,this.angle)
        this.rightwall = Bodies.rectangle(this.x+this.dustbinW/2,this.y-this.dustbinH/2,this.wallThickness,this.dustbinH,{isStatic:true})
       // Matter.Body.setAngle(this.rightwall,-1*this.angle)
       

        World.add(world,this.bottomBody)
        World.add(world,this.leftwall)
        World.add(world,this.rightwall)
     }
     display(){
        var posBottom = this.bottomBody.position
        //  var posleft = this.leftwall.position
        //  var posright = this.rightwall.position
        
        //   push();
        // translate(posleft.x,posleft.y);
        // rectMode(CENTER);
        // angleMode(CENTER);
        // rotate(this.angle);
        // strokeWeight(3);
        // fill("white");
        // rect(0,0,this.wallThickness,this.dustbinH);
        // pop()

        // push();
        // translate(posright.x,posright.y);
        // rectMode(CENTER);
        // angleMode(CENTER);
        // rotate(-1*this.angle);
        // strokeWeight(3);
        // fill("white");
        // rect(0,0,this.wallThickness,this.dustbinH);
        // pop()

        push();
        translate(posBottom.x,posBottom.y);
       
        rectMode(CENTER);
        imageMode(CENTER);
        
        
        strokeWeight(3);
        fill("white");
       // rect(0,0,this.dustbinW,this.wallThickness);
       image(this.image,0,-this.dustbinH/2,this.dustbinW,this.image.length);
        pop()
     }
}