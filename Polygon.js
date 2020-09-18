class PolygonClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        polygon = Bodies.circle(50,200,20);
        World.add(world,polygon);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}