let unit = 100;
let timer = 0
let old_timer = 0

function setup() {
    w = unit * 10;
    h = unit * 6;
    createCanvas(w, h);
    background('black');
}

function draw() {
    noFill();
    stroke(255);
    /*
    draw_block(1);
    draw_block(2);
    draw_block(3);
    draw_block(4);
    draw_block(5);
    draw_block(6);
    draw_block(7);
    draw_block(8);
    draw_block(9);
    draw_block(10);
    stroke(0, 153, 255);
    draw_block(11);
    draw_block(12);
    draw_block(13);
    draw_block(58);
    draw_block(59);
    */
    //draw_block(60);
    if (frameCount % 60 == 0) {
        timer++;
        draw_blocks(timer);
    }
}


function draw_blocks(number) {
    for (i = 1; i <= number; i++) {
        draw_block(i);
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