//PUNTO A

var a=4,b=7,c=3,d=2,y=3.5,x=2.0,z=5.0,w=1.5;

var resultado1=(a*b)/(2+1);
var resultado2=(c/y*y);
var resultado3=(z/x)+b*w*(c-b)/a;

console.log("Resultado 1: " + resultado1 + " resultado 2: " + resultado2 + "resultado 3: " + resultado3);

//PUNTO B

var a = 4;
var b = 5;
var c = 1;

var x = (b<=100) && ! (a>5);
var y = (b == 5) || (c == 30) && !(a == 10);
var z = ((b+20)>(c-1)) || (( a+5)<=50);

console.log("El resultado en x es: " + x + " El resultado en y: " + y + " El resultado en z es: " + z);
