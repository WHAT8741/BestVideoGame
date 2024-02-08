var data = [0, 0, 0, 100];
var colors = ['#FF6384', '#36A2EB', '#FFFF00', '#808080'];

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
