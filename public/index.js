const ctx = document.getElementById('canvas1').getContext('2d');


let mainMap

fetch('./main_map.json')
    .then(map => map.json())
    .then(map => logMap(map))


function logMap(map) {
    console.log(map)
}


function draw() {
    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        //   ctx.beginPath();
        //   ctx.moveTo(30, 96);
        //   ctx.lineTo(70, 66);
        //   ctx.lineTo(103, 76);
        //   ctx.lineTo(170, 15);
        //   ctx.stroke();
    };
    img.src = './assets/grass_2.png';
}

draw()