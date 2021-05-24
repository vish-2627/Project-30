class Block{
    constructor(x, y, width, height) {
        var options = {
               restitution:0.4,
               friction:0.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;
        this.block = loadImage("block.png");
        World.add(world, this.body);
        
        
      }
      display(){
       
        if(this.body.speed<2) {
          imageMode(CENTER);
          image(this.block,this.body.position.x,this.body.position.y,this.width,this.height);
        }
        else{
          World.remove(world.this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility) ;
          image(this.block,this.body.position.x,this.body.position.y,this.width,this.height);
          pop();
        }

      }

      
      
}
