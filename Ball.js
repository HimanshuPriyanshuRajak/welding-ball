class Ball {
    constructor(x,y,width,height){
    var options={
        isStatic :false,
        restitution:0.3,
        friction:0.5,
        density:1.0
    };
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
         var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            fill(50);
            rotate(angle);
            ellipse(0,0, 20 , 20);
            pop();
    }
    
}