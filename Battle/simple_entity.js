class SimpleEntity
{
    constructor(x, y, graphics)
    {
        this.x = x;
        this.y = y;
        this.graphic;
    }

    update(canvas)
    {
        // draw
        canvas.image(this.graphic, this.x, this.y);
    }
}