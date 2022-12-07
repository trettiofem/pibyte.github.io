// Fade out splash screen after 1 second
window.addEventListener("load", async () => {
    const splash = document.getElementById("splash-screen");

    // Pause for 1 second to give people time to admire the beauty of the Exolabs logo
    await new Promise(resolve => setTimeout(resolve, 1000));

    var fade = splash.animate({ opacity: [1, 0], easing: ["ease"] }, 1000);
    fade.onfinish = () => {
        splash.classList.add("hidden");
    };
});
