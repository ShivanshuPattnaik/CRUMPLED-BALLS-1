class Ball {

    constructor(x, y, radius, angle) {
        
        var options = {

            isStatic : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2

        }

        this.body = Bodies.circle(x, y, radius, options, angle);
        this.radius = radius;

        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        fill("purple");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius);

    }

}