// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triángulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden: "
// + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo1 + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo (base, altura){
    return (base * altura)/2
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Codigo del circulo
console.group("Circulo");

// //radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diámetro
// const diametroCircurlo = radioCirculo * 2;
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCircurlo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");
//Circunferencia
// const perimetroCirculo = diametroCircurlo * PI;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

//Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio) {
    return (radio * radio) * PI
}
// console.log("El área del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();