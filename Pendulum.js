class Pendulum {
    constructor(x,y,r) {
        var options = {
            isStatic:false,
            restitution:0.1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia: Infinity
        }
        this.body=Matter.Bodies.circle(x,y,r,options);
        this.r=r
        World.add(world,this.body);
    }
    display () {
        var posA=this.body.position;
        push();
           translate(posA.x,posA.y);
           rotate(this.body.angle);
           fill("black");
           stroke("white");
           strokeWeight(1.5);
           ellipseMode(RADIUS);
           ellipse(0,0,this.r,this.r);
           pop();
    }
}