class Todo
{
    constructor()
    {
        // DOM
        this.todoDiv = document.getElementById("todo");
    }

    openWindow()
    {
        this.todoDiv.classList.remove("hidden");
    }

    closeWindow()
    {
        this.todoDiv.classList.add("hidden");
    }
}