// YinYang1

// draws simple yinyang figure centered at the given point, with given radius and colors
function drawYinYang(ctx, centerX, centerY, radius, color1, color2, colorStroke) {

    ctx.strokeStyle = colorStroke;
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = color1;
    ctx.arc(centerX, centerY, radius, Math.PI / 2, 3 * Math.PI / 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = color2;
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, Math.PI / 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = color2;
    ctx.arc(centerX, centerY - radius / 2, radius / 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = color1;
    ctx.arc(centerX, centerY + radius / 2, radius / 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = color1;
    ctx.arc(centerX, centerY - radius / 2, radius / 4, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = color2;
    ctx.arc(centerX, centerY + radius / 2, radius / 4, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

function draw() {
    // get the canvas element
    var canvas = document.getElementById('myCanvas');

    // get the 2D context to draw into
    var ctx = canvas.getContext('2d');

    // set up params and call
    drawYinYang(ctx, 110, 110, 100, '#000000', '#ffffff', '#000000');
}

// draw when page is loaded
window.onload = draw;