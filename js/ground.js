class ground{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true,
           density:1,
           restitution:1.0
      }
      this.body = Matter.Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
    rect(pos.x, pos.y, this.w,this.h);
    }
  };