class Box
{    
  constructor(x, y, width, height)
  {
      var options =
      {
        isStatic : false,
        restitution : 0,
        friction : 1,
        density : 1.2   
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }

  display()
  {
      var pos = this.body.position;
      rectMode(CENTER);
      stroke("black")
      strokeWeight(3)
      fill(247, 78, 78);
      rect(pos.x, pos.y, this.width, this.height);
  }
}