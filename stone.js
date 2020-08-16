class Stone{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image=loadImage("stone.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 20;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        //imageMode(CENTER);
        image=this.image
        rect(pos.x, pos.y, this.width, this.height);
      }
    };