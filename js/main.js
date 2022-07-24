//Saldo inicial
let saldo = 100000;
let dinero = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
}).format(saldo);

//Menu inicio
let seleccion = prompt(
  "Seleccione la operación deseada: \n1) Consulta de saldo  \n2) Depósitos \n3) Extracciones \n4) Salir"
);

//Funcion nueva operacion
function continuar() {
  let continuo = prompt("Desea resalizar otra operacion? S/N: ");
  if (continuo == "S" || continuo == "s") {
    seleccion = prompt(
      "Seleccione la operación deseada: \n1) Consulta de saldo  \n2) Depósitos \n3) Extracciones \n4) Salir"
    );
  } else if (continuo == "n" || continuo == "N") {
    seleccion = "4";
  } else {
    alert("Elija una opción valida");
    seleccion = prompt(
      "Seleccione la operación deseada: \n1) Consulta de saldo  \n2) Depósitos \n3) Extracciones \n4) Salir"
    );
  }
}

//Función para consultar el saldo
const consultar = () => {
  return alert("Su saldo es: " + dinero);
};

//Función para realizar depositos
function depositar() {
  let deposito = parseFloat(prompt("Ingrese el monto que desea depósitar: "));
  saldo = saldo + deposito;
  dinero = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(saldo);
  return alert("Operación realizada con exíto. \nSu saldo es: " + dinero);
}

//Función para realizar extracciones
function extraer() {
  let extraccion = parseInt(prompt("Ingrese el monto que desea extraer: "));
  saldo = saldo - extraccion;
  dinero = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(saldo);
  return alert("Operación realizada con exíto. \nSu saldo es: " + dinero);
}

//Funcion últimos movimientos
function consultar (){
  let consulta = prompt("Seleccione la operación deseada: \n1) Últimos movimientos   \n2) Pago Mis Cuentas \n3) Transferencias Realizadas \n4) Menu Principal")
}

//Función para salir del sistema
function salir() {
  return alert("Gracias por utilizar nuestros servicios.");
}

//Programa principal
while (seleccion != "4") {
  switch (seleccion) {
    case "1":
      consultar();
      break;

    case "2":
      depositar();
      break;

    case "3":
      extraer();
      break;

    case "continuo":
      continuar();
      break;

    default:
      alert("Opcion inválida. Vuelva a intentarlo.");
      break;
  }
  continuar();
}

salir();

//********* Objetos

//Ver últimos movimientos
function Movimientos (fecha, hora, operacion, monto, saldo){
  this.fecha = fecha;
  this.hora = hora;
  this.operacion = operacion;
  this.monto = monto;
  this.saldo = saldo;
}

//Creacion de movimientos
const movement1 =  ("14/07/2022", "15:55", "Transferencia Recibida", "$ 15.000.00", "$ 125.343.00" );
const movement2 =  ("15/07/2022", "12:34", "Transferencia Realizada", "$ 30.000.00", "$ 95.343.00" );
const movement3 =  ("17/07/2022", "12:18", "Deposito", "$ 20.000.00", "$ 115.343.00" );

//Consultar pagos
function Pagos (fecha, hora, servicio, monto){
  this.fecha = fecha;
  this.hora = hora;
  this.servicio = servicio;
  this.monto = monto;
}

//Creacion de movimientos
const pago1 =  ("18/07/2022", "15:55", "Edelap", "$ 3.000.00");
const pago2 =  ("15/07/2022", "12:34", "Camuzzi Gas Pampeana", "$ 5.000.00");
const pago3 =  ("17/07/2022", "12:18", "AySA", "$1.200.00");
