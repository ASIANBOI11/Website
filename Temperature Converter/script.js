let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit")

function farToCel(){
    let output = (parseFloat(fahrenheit.value) - 32) * 9/5; // Equation for fahrenhite to celsius
    celsius.value = parseFloat(output.toFixed(1)); // This will print out one decimal
    console.log(output)
}

function celToFar(){
    let output = (parseFloat(celsius.value) * 9/5) + 32; // Equation for celsius to fahrenhite
    fahrenheit.value = parseFloat(output.toFixed(1)); // This will print out one decimal
}