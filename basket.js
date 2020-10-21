class Bucket {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, 800,290,200,200)
      stroke("grey")
       
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  }