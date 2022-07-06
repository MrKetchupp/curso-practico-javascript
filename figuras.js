// Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triángulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triangulo miden: "
+ ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo1 = ladoTriangulo1 + ladoTriangulo1 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo1 + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Codigo del circulo
console.group("Circulo");

//radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diámetro
const diametroCircurlo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCircurlo + "cm");
//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");
//Circunferencia
const perimetroCirculo = diametroCircurlo * PI;
console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();