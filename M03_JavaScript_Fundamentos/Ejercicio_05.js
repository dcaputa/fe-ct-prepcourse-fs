/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve False.
   // Tu código:
   let dato 
   if (num > 0) {
      dato = "es positivo"   
   } else {
      dato = "es negativo"
   }
   console.log (dato)
   return dato

}
esPositivo (3)
esPositivo (0)
function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   let dato
   // dato = str + "!"
   dato = `${str}!`
   console.log (dato)
   return dato 
}

agregarSimboloExclamacion ("hello world")


function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   let dato
   dato = `${nombre} ${apellido}`
   return dato
}

console.log (combinarNombres("Diego","Caro"))


function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   let dato
   dato = `Hola ${nombre}!`
   return dato
}

console.log (obtenerSaludo("Martin"))

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   let dato
   dato = alto * ancho
   return dato
}

console.log (obtenerAreaRectangulo (3 , 7))

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   let dato
   dato = lado * 4 
   return dato
}

console.log (retornarPerimetro(8))


function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   let dato
   dato = (base * altura) / 2
   return dato 
}

console.log (areaDelTriangulo(20 , 4))

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   let dolar
   dolar = euro * 1.20
   return dolar
}

console.log (deEuroAdolar(3))

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   let dato
   if (letra.length > 1){
      dato = "Dato incorrecto"
   } else {
      if (letra == ("a"||"e"||"i"||"o"||"u")){
         dato = "Es vocal"
      } else {
         dato = "Dato incorrecto"
      }
   }
   return dato
}

console.log (esVocal("a"))
console.log (esVocal("b"))
console.log (esVocal("abc"))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
