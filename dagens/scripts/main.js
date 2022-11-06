// We define the colors again. See main.css
// (global)
const COLOR_RED = "rgb(219, 22, 47)";
const COLOR_YELLOW = "rgb(252, 186, 4)";

// Good function to have
String.format = (string, ...subseq) => {

    var currentString = string;
    for (var seq of subseq)
    {
        currentString = currentString.replace("%", seq);
    }

    return currentString;
};

window.addEventListener("load", () => { 
    debugPrint(0, `inner: ${window.innerWidth}x${window.innerHeight}`);
    debugPrint(1, `outer: ${window.outerWidth}x${window.outerHeight}`);
});

const todo = new Todo();
const alert = new Alert();
const time = new Time();

document.getElementById("logo").addEventListener("click", () => {
    alert.createAlert("Test");
});
