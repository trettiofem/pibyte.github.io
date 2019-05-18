class Entity
{
    constructor(x, y, w, h, graphic, fps, pattern)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ms = 1000 / fps;
        this.pattern = pattern;

        this.frames = [];
        this.frame = 0;

        this.Time = Date.now();
        this.FutureTime = this.Time + this.ms;

        for (y = 0; y < graphic.height; y += h)
        {
            for (x = 0; x < graphic.width; x += w)
            {
                var frame_i = (y / h) * (graphic.width / w) + (x / w);

                this.frames[frame_i] = graphic.get(x, y, w, h);
            }
        }
    }

    update(canvas)
    {
        // draw
        canvas.image(this.frames[this.pattern[this.frame]], this.x, this.y);

        // update graphic
        if (this.Time > this.FutureTime)
        {
            this.frame = this.frame === this.pattern.length - 1 ? 0 : this.frame + 1;

            this.Time = Date.now();
            this.FutureTime = this.Time + this.ms;
        }
        else
            this.Time = Date.now();
    }
}