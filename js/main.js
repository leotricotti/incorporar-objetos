//********Menu Inicio*********/

//Saldo inicial
let saldo = 100000;
let dinero = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
}).format(saldo);

//Menu inicio
let seleccion = prompt(
  "Seleccione la operación deseada: \n1) Consulta de saldo  \n2) Depósitos \n3) Extracciones \n4) Consultar \n5) Salir "
);

//Menu Consultas
let menuConsultas = prompt(
  "Seleccione la operación deseada: \nA) Últimos movimientos  \nB) Pago Mis Cuentas \nC) Transferencias Realizadas \nD) Menu Principal"
);

upperConsultas = menuConsultas.toUpperCase();

//Funcion nueva operacion
function continuar() {
  let continuo = prompt("Desea resalizar otra operacion? S/N: ");
  if ((continuo == "S") || (continuo == "s")) {
    seleccion = prompt(
      "Seleccione la operación deseada: \n1) Consulta de saldo  \n2) Depósitos \n3) Extracciones \n4) Consultar \n5) Salir"
    );
  } else if ((continuo == "n") || (continuo == "N")) {
    seleccion = "5";
  } else {
    alert("Elija una opción valida");
    seleccion = prompt(
      "Seleccione la operación deseada: \n1) Consulta de saldo  \n2) Depósitos \n3) Extracciones \n4) Consultar \n5) Salir"
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

//Función para salir del sistema
function salir() {
  return alert("Gracias por utilizar nuestros servicios.");
}

//Programa principal
while (seleccion != "5") {
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

    case "4":
      seleccionar();
      break;

    default:
      alert("Opcion inválida. Vuelva a intentarlo.");
      break;
  }
  continuar();
}

salir();

//********* Consultas **********//

//Menu consultas
function seleccionar() {
  let eleccion = menuConsultas;
}

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
function Transfer(fecha, hora, tipo, monto) {
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
  console.log(movement1, movement2, movement3).toUpperCase();
}

//Función pagos
function mostrarPagos() {
  console.log(
    pago1,
    pago2,
    pago3
  );
}

//Funcion Transferencia
function mostrarTransfer() {
  console.log(
    pago1,
    pago2,
    pago3
  );
}

function menuPrincipal(){
  seleccion = prompt(
    "Seleccione la operación deseada: \n1) Consulta de saldo  \n2) Depósitos \n3) Extracciones \n4) Consultar \n5) Salir "
  );
}

//Programa principal
while (upperConsultas != "D")  {
  switch (upperConsultas) {
    case "A":
      mostrarMovimientos();
      break;

    case "B":
      mostrarPagos();
      break;

    case "C":
      mostrarTransfer();
      break;
    
    default:
      alert("Opcion inválida. Vuelva a intentarlo.");
      break;
    }
    seleccionar();
}

menuPrincipal();
