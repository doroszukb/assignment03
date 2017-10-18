var colorList = ['#595959',
                '#384795',
                 '#ff441f',
                 '#ffda2b'];
function setup() {
  createCanvas(800,600)
  background(100,100,100)
  frameRate(10)

}




function draw() {
  
noStroke()


for(var x1=0; x1<800; x1 += 40) {
for(var y1=-50; y1<800; y1 += 100) {
for(var a=0; y1<800; y1 += 40) {




var index = floor(random() * colorList.length);
var colorHex = colorList[index];

//fill(color(colorHex));
  
  
  if(random()<0.1)
{
   fill(color(colorHex));
} else {
   fill(200);
}



  
    quad(x1+a,y1+a,x1+40+a,y1+40+a,x1+40+a,y1+200+a,x1+a,y1+160+a)
}
}
}
}