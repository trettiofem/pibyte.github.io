class Thing
{
    constructor(x, y, w, h, graphic, fps, pattern, health = 100)
    {
        this.entity = new Entity(x, y, w, h, graphic, fps, pattern);
        this.healthbar = new Healthbar(x - (20 - w)/2, y - 4, 20, 1, health);

        this.dead = false;
    }

    damage(hp)
    {
        this.healthbar.health -= hp;

        if (this.healthbar.health <= 0)
            this.dead = true;
    }

    update(canvas)
    {   
        this.entity.update(canvas);
        this.healthbar.update(canvas);
    }
}