class stone{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("sprites/stone.png");
        World.add(world, this.body);
    }
    display(){
        rect(this.x,this.y,this.w,this.h) ;
        image(this.image, this.x, this.y, this.w, this.h);
    }
    
}