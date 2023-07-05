let pregunta=confirm("¿Quiere ingresar un numero?")
let suma=0
let numero=0
let esnumero;
while (pregunta!=false) {
    numero=Number(prompt("Ingrese un numero"))
    esnumero=isNaN(numero)
    while (esnumero==true) {
        alert("Solo se Pueden Ingresar Numeros")
        numero=Number(prompt("Ingrese un numero"))
        esnumero=isNaN(numero)
    }
    suma=suma+numero
    pregunta=confirm("¿Quiere ingresar otro numero?")

}
alert("La suma de los numeros ingresados es de "+suma)