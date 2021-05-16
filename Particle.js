class Particle {
    constructor(x,y,radius){
    var options={
     isStatic:false
    }
    this.r=radius
    this.x=x;
    this.y=y;
    this.body=Bodies.circle(x,y,this.r,options);
    this.color=color(random(1,255),random(1,255),random(1,255));
    World.add(world,this.body);
    }
    display() {
    var pos=this.body.position;
    fill(this.color)
    noStroke();
  push();
  translate(pos.x, pos.y);
  ellipse(0, 0, this.r);
  pop();
    }
}