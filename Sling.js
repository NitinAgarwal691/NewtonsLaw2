class Sling {
    constructor(bodyA,pointB) {
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            length:300,
            stiffness:0.9
        }
        this.pointB=pointB;
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    display() {
    push();
    stroke("white");
    strokeWeight(1.5);
    line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);
    pop();    
}
}