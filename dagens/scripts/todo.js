class Todo
{
    constructor()
    {
        // DOM
        this.todoDiv = document.getElementById("todo");

        this.video = document.getElementById("video");
        this.video.addEventListener("click", this.toggleWindow.bind(this));
    }

    toggleWindow()
    {
        this.todoDiv.classList.toggle("hidden");
    }
}