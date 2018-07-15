var bird;
var score;
var run;
var pipes = [];
let button;
function setup()
 {
createCanvas(400,600);
bird = new Bird();
pipes.push(new pipe());
 run = select('#score');
}


function draw()
{
  run.html(value);

background(0);
bird.show();
bird.update();

if(frameCount%100 == 0){
pipes.push(new pipe());
}

for(var i=pipes.length-1; i>=0 ;i--){
  if(pipes[i].hits(bird)){
    console.log("hit");
    alert('Game Over! Your score is'+(--value));
{
    bird.y = height/2;
    bird.x = 30;
   value=0;
}
  //   {
  //     noCanvas();
  //
  // createA('index.html','Play Again!');
  //   }
  }
  pipes[i].show();
  pipes[i].update();
  if(pipes[i].offscreen()){
  pipes.splice(i,1);

  }
}
}

function keyPressed(){

    if (key == ' ')
    {
     bird.up();
    }
}
