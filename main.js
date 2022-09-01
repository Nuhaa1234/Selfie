function preLoad()
{
}
function setup()
{
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video= createCapture(VIDEO);
    video.hide();

    tint_color= "";
}
function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(600, 50, 70);
  rect(50, 50, 550, 20);
  circle(50, 50, 70);
  rect(50, 425, 550, 20);
  circle(600, 430, 70);
  rect(40, 50, 20, 350);
  circle(50, 430, 70);
  rect(590, 50, 20, 350);
}
function take_snapshot()
{
    save=('student_name.png');
}
function filter_tint()
{
    tint_color= document.getElementById("color_name").value;
}