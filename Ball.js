class Ball
{
    constructor(x, y, radius)
    {
        var options = 
        {
            isStatic : false
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(0, 255, 255);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }

}