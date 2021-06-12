class Magnet{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,stiffness:0.04,length:10
        }
        this.pointB=pointB;
        this.magnet = Constraint.create(options)
        World.add(world, this.magnet);
      }
      fly()
    {
        this.magnet.bodyA=null;
    }   
      display(){
          if(this.magnet.bodyA){
            var pointA =this.magnet.bodyA.position;
            var pointB =this.pointB;
    
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB.x,pointB.y)      
          }
        
    
        };

    
    }
