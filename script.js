// Sample data for the pie chart
// Change to my results of the test - get from school
var data = [36.99999996, 0, 30, 0];
var colors = ['#00FF00', '#36A2EB', '#FFFF00', '#808080'];

var canvas = document.getElementById('myPieChart');
var ctx = canvas.getContext('2d');

var total = data.reduce((acc, val) => acc + val, 0);
var startAngle = 0;

for (var i = 0; i < data.length; i++) {
  var sliceAngle = (2 * Math.PI * data[i]) / total;

  ctx.fillStyle = colors[i];
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 3, startAngle, startAngle + sliceAngle);
  ctx.closePath();
  ctx.fill();

  startAngle += sliceAngle;
}


// Draw a half circle
// ctx.beginPath();
// ctx.arc(200, 200, 100, 0, 2 * Math.PI, false);
// ctx.lineTo(200, 200);
// ctx.lineTo(300, 200);
// ctx.fillStyle = 'blue';
// ctx.fill();
// ctx.moveTo(200, 300);
// ctx.lineTo(200, 200);
// ctx.fillStyle = 'red';
// ctx.fill();
// ctx.moveTo(100, 200);
// ctx.lineTo(200, 200);
// ctx.moveTo(200, 100);
// ctx.lineTo(200, 200);
// ctx.moveTo(130, 130);
// ctx.lineTo(200, 200);
// ctx.moveTo(270, 270);
// ctx.lineTo(200, 200);
// ctx.stroke();