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
  