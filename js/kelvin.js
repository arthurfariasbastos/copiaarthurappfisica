var Fahrenheit = 0;
var kelvin = document.getElementById("kel").value;
kelvin = parseInt(kelvin);
if(krlvin == "" || kelvin < 0){
if(kelvin == "" || kelvin < 0){
    alert("Essa temperatura Não existe");
    }
    else{

kelvin = prompt("digite a temperatura em graus kelvin que você quer que converta:")
kelvin = parseInt(kelvin)
celsius = kelvin - 273;
Fahrenheit = 1.8 * (kelvin - 273 ) + 32;
celsius = kelvin - 273.15;
Fahrenheit = 1.8 * (kelvin - 273.15 ) + 32;
var arredondafar = parseFloat(Fahrenheit.toFixed(2));
var arredondacel = parseFloat(celsius.toFixed(2));
    }
}