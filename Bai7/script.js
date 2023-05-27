/*let greet = function(name){
    console.log("Hello " + name + "!");
}
greet("Khang"); 

function min(a,b) {
    return a > b ? a : b;
}

console.log(min(3,4));

function increment(x){
    let y = 5;
    x += y;
    console.log("The number is: " + x);
}

let d = increment(8)
console.log(d)

let minValue = function (e, f){
    if (e < f) return e;
    return f;
}
console.log(minValue(4, 6))

minValue = function (g, h, i){
    let min = g;
    if (h < min) min = h;
    if (i < min) min = i;
    return min;
}
console.log(minValue(3, 5, 8));

minValue = 0;
console.log(minValue);

console.log("Dog: " + dog())

function dog(){
    return "go go go"
}

function Leap(a){
    if (a%4 == 0 && a%100 !=0){
        console.log("Leap Year");
    }
    else{
        console.log("Not Leap Year");
    }
}

let b = Leap(2020) */

let a = document.getElementById("h1").style.color ="red";
let b = document.getElementById("h1").innerHTML = "JSB04"

function ChangeColor(){
    document.getElementById("button1").style.backgroundColor = "white";
    document.getElementById("button1").style.color = "black";
}

function ChangeColorBack(){
    document.getElementById("button1").style.backgroundColor = "red";
    document.getElementById("button1").style.color = "black";
}

let c = document.getElementById("button1").addEventListener("mouseover", ChangeColor)
let d = document.getElementById("button1").addEventListener("mouseout", ChangeColorBack)