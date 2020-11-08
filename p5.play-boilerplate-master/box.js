class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        if(this.body.speed < 3){
          push();
        imageMode(CENTER);
        fill("#F76C00");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(0,this.Visiblity);
           rect(pos.x, pos.y, this.width, this.height);
           pop();
         }
         
       }
      
      
      };
