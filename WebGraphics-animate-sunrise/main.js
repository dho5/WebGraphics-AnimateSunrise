// Animate Sunrise

// Setup canvas and graphics context
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.height = 400;
cnv.width = 400;

// Global var
let cloudOne = 125;
let cloudTwo = 175;
let sun = 300;
let sunRadius = 20;
let circleRed = 255;
let circleBlue = 0;
let circleGreen = 0;

// Store image to var
let cloudImg = document.getElementById('cloth-cloud');

requestAnimationFrame(loop);
function loop() {
  // Draw Rectangle (Blue)
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, 400, 300);

  // Draw Circle
  ctx.fillStyle = "rgb(" + circleRed + ", " + circleGreen + "," + circleBlue + ")";
  ctx.beginPath();
  ctx.arc(200, sun, sunRadius, 0, 2 * Math.PI);
  ctx.fill();
    // Update vars
    sun = sun - 1.50;
    sunRadius = sunRadius + 0.25;
    circleGreen = circleGreen + 0.80;

  // Draw Rectangle (Green)
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 300, 400, 100);

  // Draw Image
  ctx.drawImage(cloudImg, cloudOne, 125);
    // Update cloudOne
    cloudOne--;
  ctx.drawImage(cloudImg, cloudTwo, 100);
    // Update cloudTwo
    cloudTwo++;

requestAnimationFrame(loop);
}
