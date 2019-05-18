class Healthbar
{
    constructor(x, y, w, h, health = 100)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.health = health;
    }

    update(canvas)
    {
        canvas.fill(255, 0, 0);
        canvas.rect(this.x, this.y, this.w, this.h);

        if (this.health > 0)
        {
            var green_width = Math.ceil(this.w * (this.health / 100));

            canvas.fill(0, 255, 0);
            canvas.rect(this.x, this.y, green_width, this.h);
        }
    }
}