function getColor(num) {
    return Math.floor(Math.random()*num);
}

function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var i = 0;
    var j = 0;

    var gWidth = canvas.width;
    var gHeight = canvas.height;
    var gTamany = 10;
    
    for (i = 0; i < gWidth; i += gTamany+1) {
        for (j = 0; j < gHeight; j += gTamany+1) {
            c1 = getColor(255);
            c2 = getColor(255);
            c3 = getColor(100);
            ctx.fillStyle = "rgb(" +c1+ ","+c2+","+c3+")";
            ctx.fillRect(i, j, gTamany, gTamany);
        }
    }
}

function setRange() {
    
}
initf = setInterval(draw, 100);