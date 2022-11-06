class Alert
{
    constructor()
    {
        // DOM
        this.messageLabel = document.getElementById("alertMessage");
        this.timedownLabel = document.getElementById("alertTimedown");

        this.alertDiv = document.getElementById("alert");
        this.alertCanvas = document.getElementById("alertCanvas");

        this.video = document.getElementById("video"); // remove

        // Setup canvas
        this.alertCanvas.width = window.innerWidth;
        this.alertCanvas.height = window.innerHeight;
        this.ctx = this.alertCanvas.getContext("2d");

        // Other
        this.running = false;
        this.time = 10; // seconds
        this.timedownMessage = "Rutan försvinner om %...";
        this.frame = 0;
        this.waitedSeconds = 0;

        this.stripeWidth = 100;
        this.stripeSpeed = 10;

        // Audio
        this.alertJingle = new Audio("./img/alert.mp3");
    }

    createAlert(message)
    {
        if (this.running)
        {
            debugError("Alert has already been called!");
            return;
        }

        this.alertJingle.play();

        this.running = true;
        this.frame = 0;
        this.waitedSeconds = 0;

        // Update labels
        this.messageLabel.innerHTML = message;
        this.timedownLabel.innerHTML = String.format(this.timedownMessage, this.time.toString());

        this.video.pause();

        // Start timer
        this.interval = setInterval(this.count.bind(this), 1000);

        // Start background animation
        this.update();

        // Show alert div
        this.alertDiv.classList.remove("hidden");
    }

    count()
    {
        if (this.waitedSeconds < this.time - 1)
        {
            // Update timedown label
            this.waitedSeconds++;
            this.timedownLabel.innerHTML = this.timedownMessage.replace("%", (this.time - this.waitedSeconds).toString());
        }
        else
        {
            // Stop the timer
            clearInterval(this.interval);

            // Hide alert div
            this.alertDiv.classList.add("hidden");
            
            this.video.play();
            this.alertJingle.pause();
            this.alertJingle.currentTime = 0;

            this.running = false;
        }
    }

    update()
    {
        this.frame++;

        // Draw background
        this.ctx.fillStyle = COLOR_YELLOW;
        this.ctx.fillRect(0, 0, this.alertCanvas.width, this.alertCanvas.height);

        // Draw stripes
        var stripes = Math.ceil(this.alertCanvas.height / this.stripeWidth / 2) + 1;

        var offset = ((this.frame * this.stripeSpeed) % (this.stripeWidth * 2)) - this.stripeWidth; //idk, it works

        this.ctx.fillStyle = COLOR_RED;
        for (var i = 0; i < stripes; i++)
            this.ctx.fillRect(0, offset + (i * this.stripeWidth * 2), this.alertCanvas.width, this.stripeWidth);

        // Next frame
        if (this.running)
            window.requestAnimationFrame(this.update.bind(this));
    }
}