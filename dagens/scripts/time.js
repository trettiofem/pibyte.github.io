class Time
{
    constructor()
    {
        this.dateLabel = document.getElementById("date");
        this.clockLabel = document.getElementById("clock");
        this.weekdayLabel = document.getElementById("weekday");
        this.weekLabel = document.getElementById("week");

        this.weekdays = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];
        this.months = ["jan.", "feb.", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."];

        this.dateFormat = "% % %";
        this.clockFormat = "%:%:%";
        this.weekdayFormat = "%";
        this.weekFormat = "vecka %";

        this.interval = setInterval(this.count.bind(this), 1000);
        this.count();
    }

    count()
    {
        // Update the time
        var now = new Date();

        var date = String.format(
            this.dateFormat,
            now.getDate().toString(),
            this.months[now.getMonth()],
            now.getFullYear().toString()
        );
        
        var clock = String.format(
            this.clockFormat,
            now.getHours().toString().padStart(2, "0"),
            now.getMinutes().toString().padStart(2, "0"),
            now.getSeconds().toString().padStart(2, "0")
        );

        var weekday = String.format(
            this.weekdayFormat,
            this.weekdays[(now.getDay() + 1) & 7]
        );

        // Get the current week nr.
        now.setHours(0, 0, 0);
        now.setDate(now.getDate() + 4 - (now.getDay() || 7));
        var w = Math.ceil((((now - new Date(now.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);

        var week = String.format(
            this.weekFormat,
            w
        );

        // Commit to DOM
        this.dateLabel.innerHTML = date;
        this.clockLabel.innerHTML = clock;
        this.weekdayLabel.innerHTML = weekday;
        this.weekLabel.innerHTML = week;
    }

}