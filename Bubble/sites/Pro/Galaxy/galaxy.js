var q = document.getElementById("quote");
var user = document.getElementById("username-txt");
var pass = document.getElementById("password-txt");
var signin = document.getElementById("signin-btn");
var signup = document.getElementById("signup-btn");
var e = document.getElementById("error");

var quotes = ["I love galaxy so much<br/><br/>James Moffet", "I think galaxy is great<br/><br/>Brad Jones", "My favorite social media is Galaxy<br/><br/>Ni Hao", "If I could choose between Galaxy or LV. I would choose L... erm, I mean galaxy!<br/><br/>ThatGuy Magazine", "I actually can't think of a time when Galaxy wasn't useful!<br/><br/>TNT", "The future of social media<br/><br/>Socialist Magazine", "Currently the best social media out there!<br/><br/>Brett Kazoo"];

q.innerHTML = randomQuote();

/* Reset quote every 5 seconds */
setInterval(function()
{
    q.innerHTML = randomQuote();
}, 5000);

signin.addEventListener("click", sign_in);

function randomQuote()
{
    return quotes[Math.floor((Math.random() * 7) + 1) - 1]
}

function sign_in()
{

    if (user.value === "")
    {
        e.innerHTML = "Missing username";
    }
    else if (pass.value === "")
    {
        e.innerHTML = "Missing password";
    }
    else if (user.value === "" && pass.value === "")
    {
        e.innerHTML = "Sign in here";
    }
    else
    {
        e.innerHTML = "Incorrect info";
    }

}

function sign_up()
{

}
