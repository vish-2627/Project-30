class SlingShot{
    constructor(BodyA,PointB) {
        var options = {
            bodyA:BodyA,pointB:PointB,
            'stiffness':0.04,
            'length':10
        }
        this.pointB = PointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
      }
      display(){
        if(this.chain.bodyA) {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3);
        stroke(48,22,8);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        //line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
        pop();
        
      }
      }

      fly() {
        this.chain.bodyA = null;
      }

      attach(body) {
        this.chain.bodyA = body;
      }

    }
