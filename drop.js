class Drop{

constructor() {
    friction=0.1;
    this.rain=Bodies.circle(x,y,5,options)
}


update(){
 if(this.rain.position.y > position.x){
Matter.Body.setPosition(this.rain,{x:random(0,400) , y:random(0,400)})
 }
}
}
