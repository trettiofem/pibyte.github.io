var Comp;

window.onload = function()
{    
    Comp = new A();
    draw();
}

function loadProgram()
{
    var Program = document.getElementById("program").value;

    Comp.Reset(Program);

    draw();

    console.log("Program loaded!");
}

function compute()
{
    Comp.Compute();
    draw();
}

function step()
{
    Comp.Step();
    draw();
}

function turnon()
{
    Comp.Running = true;
    draw();
}

function draw()
{
    document.getElementById("ROM").innerHTML = "ROM: " + Comp.ROM;
    document.getElementById("RAM").innerHTML = "Memory: " + Comp.RAM;
    document.getElementById("A").innerHTML = "A: " + Comp.A;
    document.getElementById("IP").innerHTML = "IP: " + Comp.IP;
    document.getElementById("Status").innerHTML = "Is computer running: " + Comp.Running;
}

function fix()
{
    document.getElementById("program").value = document.getElementById("program").value.replace(/\s+/g, '');
    document.getElementById("program").value = document.getElementById("program").value.replace(/\D/g,'');
}
