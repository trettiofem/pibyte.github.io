// Makes it easier to debug on an iPad
function debugPrint(variable, message)
{
    try {
        document.getElementById(`debug${variable}`).innerHTML = message.toString();
    }
    catch(e) {
        debugError(`Unknown variable: ${variable}`);
    }
    
}

function debugError(message)
{
    document.getElementById("debugError").innerHTML = message.toString();
    console.error(message.toString());
}