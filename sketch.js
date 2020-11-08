let unit = 100;
let timer = 55

function setup() {
    w = unit * 10;
    h = unit * 6;
    createCanvas(w, h);
    background('black');
}

function draw() {
    noFill();
    stroke(255);
    if (frameCount % 60 == 0) {
        timer++;
        if (timer == 60){
            timer = 0;
            background('black');
        }
        draw_block(timer);
    }
}


function draw_block(number) {
    number -= 1;

    // Calculate the row
    y = height - unit - (int(number / 10) * unit);
    remainder = number % 10

    // Calculate the column
    x = remainder * unit;
    rect(x, y, unit, unit);
    // TODO: why does number 60 not render?
}