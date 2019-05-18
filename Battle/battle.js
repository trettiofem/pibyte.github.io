class Battle
{
    constructor()
    {
        this.Player = new Thing(40, 100, 10, 14, GFX.player, 6, [0, 1, 2, 0, 1, 2, 0, 1, 2, 3, 1, 2], 100);
        this.Enemy1 = new Thing(260, 100, 16, 12, GFX.enemy1, 3, [0, 1], 100);
        this.Enemy2 = new Thing(270, 120, 12, 15, GFX.enemy2, 2, [1, 0], 100);

        this.Menus = {
            Main: new Menu(5, 140, ["Attack", "Items", "Flee"])
        };
    }

    update(canvas)
    {
        canvas.image(GFX.bg, 0, 0);

        this.Player.update(canvas);
        this.Enemy1.update(canvas);
        this.Enemy2.update(canvas);

        this.Menus.Main.update(canvas);
    }
}