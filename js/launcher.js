class launcher{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        };

        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
            this.pointB = this.pointB;
            this.bodyA = this.launcher.bodyA.position;
            strokeWeight(4);
            line(this.bodyA.x, this.bodyA.y, this.pointB.x, this.pointB.y);
        }       
    }

    fly(){
        this.launcher.bodyA=null;
    }

    attach(body){
        this.launcher.bodyA = body;
    }
}