function convertTemp(){

let temp = parseFloat(document.getElementById("temp").value);
let scale = document.getElementById("scale").value;
let result = "";

if(scale == "c"){
let f = (temp * 9/5) + 32;
let k = temp + 273.15;
result = "Fahrenheit: " + f.toFixed(2) + "<br>Kelvin: " + k.toFixed(2);
}

else if(scale == "f"){
let c = (temp - 32) * 5/9;
let k = c + 273.15;
result = "Celsius: " + c.toFixed(2) + "<br>Kelvin: " + k.toFixed(2);
}

else if(scale == "k"){
let c = temp - 273.15;
let f = (c * 9/5) + 32;
result = "Celsius: " + c.toFixed(2) + "<br>Fahrenheit: " + f.toFixed(2);
}

document.getElementById("result").innerHTML = result;

}
