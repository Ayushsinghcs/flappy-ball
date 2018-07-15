let value;
function Bird()
{
this.y = height/2;
this.x = 30;
this.lift=-15;
this.gravity = 0.6;
this.velocity = 0;
value=0;
this.up = function(){
this.velocity += this.lift;

}

this.show = function()
{

  background(0);
  ellipse(this.x,this.y,30,30);
 value++;

  }

this.update = function(){

this.velocity+=this.gravity;
this.velocity= this.velocity*0.9;
this.y+=this.velocity;

  if(this.y >height)
  {
    this.y = height;
    this.velocity= 0;
  }

  if(this.y < 0)
  {
    this.y = 0;
    this.velocity= 0;
  }

}






}
