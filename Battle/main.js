var CANVAS, BATTLE, GFX;

function preload()
{
    GFX = {
        player: loadImage("gfx/player.png"),
        enemy1: loadImage("gfx/enemy1.png"),
        enemy2: loadImage("gfx/enemy2.png"),
        bg: loadImage("gfx/bg.png"),
        font: loadFont("gfx/04B_03__.TTF")
    };
}

function setup()
{
    createCanvas(960, 528);

    CANVAS = createGraphics(320, 176);
    noSmooth();

    CANVAS.noStroke();
    CANVAS.textSize(8);
    CANVAS.textFont(GFX.font);

    BATTLE = new Battle();
}

function draw()
{
    image(CANVAS, 0, 0, 960, 528);

    BATTLE.update(CANVAS);
}