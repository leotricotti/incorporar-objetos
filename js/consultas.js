//********* Consultas **********//

//Menu consultas
let seleccion = prompt(
  "Seleccione la operación deseada: \n1) Últimos Movimientos \n2) Pago Mis Cuentas \n3) Transferencias \n4) Salir "
);

//Ver últimos movimientos
function Movement(fecha, hora, operacion, monto, saldo) {
  this.fecha = fecha;
  this.hora = hora;
  this.operacion = operacion;
  this.monto = monto;
  this.saldo = saldo;
}

//Base datos movimientos
const movement1 = new Movement(
  "14/07/2022",
  "15:55",
  "Deposito",
  "$ 15.000.00",
  "$ 125.343.00"
);
const movement2 = new Movement(
  "15/07/2022",
  "12:34",
  "Extracción",
  "$ 30.000.00",
  "$ 95.343.00"
);
const movement3 = new Movement(
  "17/07/2022",
  "12:18",
  "Transferencia",
  "$ 20.000.00",
  "$ 115.343.00"
);

//Consultar pagos
function Pagos(fecha, hora, servicio, monto) {
  this.fecha = fecha;
  this.hora = hora;
  this.servicio = servicio;
  this.monto = monto;
}

//Base de datos pagos
const pago1 = new Pagos("18/07/2022", "15:55", "Edelap", "$ 3.000.00");
const pago2 = new Pagos(
  "15/07/2022",
  "12:34",
  "Camuzzi Gas Pampeana",
  "$ 5.000.00"
);
const pago3 = new Pagos("17/07/2022", "12:18", "AySA", "$1.200.00");

//Consultar Transferencias
function Transfer (fecha, hora, tipo, monto) {
  this.fecha = fecha;
  this.hora = hora;
  this.tipo = tipo;
  this.servicio = servicio;
  this.monto = monto;
}

//Base datos transferencias
const transfer1 =
  ("14/07/2022",
  "15:55",
  "Transferencia Recibida",
  "$ 15.000.00",
  "$ 125.343.00");
const transfer2 =
  ("15/07/2022",
  "12:34",
  "Transferencia Realizada",
  "$ 30.000.00",
  "$ 95.343.00");
const transfer3 =
  ("17/07/2022",
  "12:18",
  "Transferencia recibida",
  "$ 20.000.00",
  "$ 115.343.00");

//Función últimos movimientos
function mostrarMovimientos() {
  console.log(movement1, movement2, movement3);
}

//Función pagos
function mostrarPagos() {
  console.log(pago1, pago2, pago3);
}

//Funcion Transferencia
function mostrarTransfer() {
  alert(pago1, pago2, pago3);
}

//Funcion nueva operacion
function continuar() {
  let continuo = prompt("Desea resalizar otra operacion? S/N: ");
  if (continuo == "S" || continuo == "s") {
    seleccion = prompt(
      "Seleccione la operación deseada: \n1) Últimos Movimientos \n2) Pago Mis Cuentas \n3) Transferencias \n4) Salir "
    );
  } else if (continuo == "n" || continuo == "N") {
    seleccion = "4";
  } else {
    alert("Elija una opción valida");
    seleccion = prompt(
      "Seleccione la operación deseada: \n1) Últimos Movimientos \n2) Pago Mis Cuentas \n3) Transferencias \n4) Salir "
    );
  }
}

//Función para salir del sistema
function salir() {
  return alert("Gracias por utilizar nuestros servicios.");
}

//Programa principal
while (seleccion != "4") {
  switch (seleccion) {
    case "1":
      mostrarMovimientos();
      break;

    case "2":
      mostrarPagos();
      break;

    case "3":
      mostrarTransfer();
      break;

    default:
      alert("Opcion inválida. Vuelva a intentarlo.");
      break;
  }
  continuar();
}

salir();
