class Dustbin{
    constructor(x,y,width,height){ 
var option = {
    restitution :0.3,
  density :1,
    friction :1,
    isStatic:true
 }
 this.body = Bodies.rectangle(x,y,width,height,option);
 this.width = width
 this.height = height;
 this.image = loadImage('dustbingreen.png');
 World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
         fill('white');
         imageMode(CENTER);
        
        
         image(this.image,pos.x,pos.y,this.width,this.height);
     }
    }
    
