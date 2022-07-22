class Link{
    constructor(bodyA,bodyB){
        let lastLink = bodyA.body.bodies.length-2;
        this.link = Constraint.create(
            {bodyA : bodyA.body.bodies[lastLink],
             bodyB : bodyB,
             pointA : {x:0,y:0},
             pointB : {x:0,y:0},
             length : 10,
             stiffness : 0.02

            }
        )
        
        World.add(engine.world,this.link);


    }











}