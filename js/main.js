function nombre_documento_ciudad() {
    var nombre;
    var documento;
    var ciudad;

    nombre = prompt("ingrese el nombre de la persona");
    
    documento = prompt("ingrese el documento de la persona");
    ciudad = prompt("ingrese la ciudad de residencia");

    alert("bienvenido " + nombre + "\n identificado con el numero: " + documento + " de la ciudad de: " + ciudad);
    
}
function valor_dia_pagado(){
    var pagopordia;
    var dias;
    var valpagar;

    pagopordia = 40000;
    alert("el valor del dia es de" + pagopordia);

    dias = parseInt(prompt("ingrese los dias trabajados"));
    valpagar = dias * pagopordia;

    alert("La ganacia por los dias trabajados es de: " + valpagar);
}
function descuento(){
    var valor;
    var descuento;
    var total;

    descuento = 1000
    alert("el descuento echo por la compra es de: " + descuento);

    valor = parseInt(prompt("ingrse el valor de la compra: "));
    total = valor - descuento;

    alert("el valor de su compra con el descuento es de: " + total);
}
function porcentaje_hombre_mujer(){
    var h,m,ambos, val1,val2;

    h = parseInt(prompt("ingrese la cantidad de hombres"));
    m = parseInt(prompt("ingrese la cantidad de mujeres"));
    ambos = h + m;
    val1 = (h*100)/ambos;
    val2 = (m*100)/ambos;
    alert("el porcentaje de hombres es de: " + val1 + "%" + "\nel porcentaje de mujeres es de: " + val2 + "%");

}
function circulo(){
    var r,d;

    d = parseInt(prompt("ingrese el diametro del circulo: "));
    r = d/2

    alert("el radio del circulo es: " + r);
}
function factura(){
    var valf, valt, IGV, imp;

    IGV = 0.18;
    valf = parseInt(prompt("ingrese el valor de la factura:"));
    imp = valf*IGV;
    valt = valf+imp;

    alert("valor de la factura es de: " + valf);
    alert("el IGV es de: " + IGV);
    alert("valor factura con impuesto agregado es de: " + valt);
}
function incremento_en_un_salario(){
    var sal1, sal2, sal3, inc;
    
    inc = 0.25;

    alert("si su salario supera los 200000 se le hara un incremento del 0.25% de su salario actual");
    sal1 = parseInt(prompt("ingrese el salario recibido"));

    if (sal1>200000) {

        sal2 = sal1*inc;
        sal3 = sal1+sal2;
        alert("su salario actual recibio un aumento de: " + sal2 + "\nsu nuevo saldo actual es de: " + sal3);

    }else{
        alert("el salario actual no tiene aumento, su salario actual es de: " + sal1);
    }
}
function ganancia_por_hora(){
    var gan1, ganf, horas;

    alert("cuanto gana por hora");
    horas = parseInt(prompt("¿cuantas horas ha trabajado?"));
    gan1 = parseInt(prompt("¿cual ha sido su pago por las horas trabajadas?"));
    ganf = gan1/horas;
    
    alert("la hora se le paga a: " + ganf);
}
function numero_positivo_negativo(){
    var num1, num2, valf;

    num1 = parseInt(prompt("ingrese numero1"));
    num2 = parseInt(prompt("ingrese numero2"));

    if (num1>0 && num2>0){
        alert("los dos numeros ingresados son positivos");
    }else if (num1<0 && num2<0){
        alert("los numeros son negativos");
    }
    else if (num1>0 && num2<0){
        alert("el primero es positivo y el segundo es negativo");
    }else {
        alert("el primero es negativo y el segundo es positivo");
    }
}
function interes(){
    var cap,imp,int,valf;

    cap = parseInt(prompt("ingrese de cantidad de prestamo: "));
    int = parseInt(prompt("ingrese la tasa de interes que se le cobrara: "));
    imp = (cap*int)/100;
    valf = cap+imp;

    alert("el interess que pagara por su prestamo es de: " + imp);
    alert("el valor total a pagar con el interes cluido es de: " + valf);
}
function prestar_servicio(){
    var genero, edad;

    genero = prompt("ingrese si es masculino(m), si es femenino(f): ");
    edad = parseInt(prompt("ingrese la edad de la persona: "));

    if (genero= "m" && edad>17){
        alert("puede prestar servicio");
    }else{
        alert("no puede prestar servicio");
    }
}
function ingresos_son_buenos(){
    var ingresos;
    ingresos  = parseInt(prompt("¿cuantos ingresos a obtenido?"));

    if (ingresos<=300){
        alert("no ha obtenido ingresos");
    }else{
        alert("sus ingresos han sido buenos");
    }
}