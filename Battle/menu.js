class Menu
{
    constructor(x, y, items)
    {
        this.item_pointer = 0;
        this.items = items;
        this.x = x;
        this.y = y;

        this.keys_pressed = new Array(0xFF).fill(false);
    }

    update(canvas)
    {
        // draw
        var str = "";
        for (var i = 0; i < this.items.length; i++)
        {
            str += i === this.item_pointer ? ">" + this.items[i] : " " + this.items[i];
            str += "\n";
        }
        canvas.fill(255);
        canvas.text(str, this.x, this.y);


        if (this.key_press(UP_ARROW))
        {
            if (this.item_pointer !== 0)
            {
                this.item_pointer--;
            }
        }

        if (this.key_press(DOWN_ARROW))
        {
            if (this.item_pointer !== this.items.length - 1)
            {
                this.item_pointer++;
            }
        }

        if (this.key_press(13)) // enter
        {
            return this.item_pointer;
        }

        return -1;
    }

    key_press(code)
    {
        if (keyIsDown(code))
        {
            if (!this.keys_pressed[code])
            {
                this.keys_pressed[code] = true;
                return true;
            }
            else
                return false;
        }
        else
            if (this.keys_pressed[code])
                this.keys_pressed[code] = false;
    }
}