class Log extends BaseClass{
  constructor(x,y,hight,angle) {
    super(x,y,20,hight,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body,angle);
  }
}