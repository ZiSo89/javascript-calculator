// Keep track of our socket connection
var socket;
socket = io.connect('http://localhost:3000');

//function that display value 
function dis(val) {
    let value = document.getElementById("result").value += val
}

//function that evaluates the digit and return result 
function solve() {
    let x = document.getElementById("result").value
    let y = eval(x) //eval() function evaluates JavaScript code represented as a string
    document.getElementById("result").value = y //
    var result = x + "=" + y
    socket.emit('data', result);
}

//function that clear the display 
function clr() {
    document.getElementById("result").value = ""
}