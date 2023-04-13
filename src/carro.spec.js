import Auto from "./carro";
describe("Sumar", () => {
  const t = "5,5";
  let auto = new Auto(0, 0, "N");
  let autoNuevo = new Auto(0, 0, "N");
  let autoNuevo2 = new Auto(0, 0, "N");
  it("deberia devolver la posicion inicial del auto", () => {
    expect(auto.ingresarPosicionInicial("3,2N")).toEqual("3,2N");
  });
  it("deberia crear un tablero 5x5", () => {
    expect(auto.ingresarTamanioTablero(t)).toEqual("5,5");
  });
  it("el auto deberia avanzar una posicion en Y porque esta mirando al Norte", () => {
    let auto1 = new Auto(0, 0, "N");
    auto1.ingresarTamanioTablero(t);
    expect(auto1.ejecutar("A")).toEqual("0,1N");
  });
  it("el auto deberia mirar al este porque queremos que gire a la derecha", () => {
    let auto2 = new Auto(0, 0, "N");
    auto2.ingresarTamanioTablero(t);
    expect(auto2.ejecutar("D")).toEqual("0,0E");
  });
  it("el auto deberia mirar sud porque queremos que gire a la derecha", () => {
    let auto3 = new Auto(0, 0, "E");
    auto3.ingresarTamanioTablero(t);
    expect(auto3.ejecutar("D")).toEqual("0,0S");
  });
  it("el auto deberia mirar oeste porque queremos que gire a la derecha", () => {
    let auto3 = new Auto(0, 0, "S");
    auto3.ingresarTamanioTablero(t);
    expect(auto3.ejecutar("D")).toEqual("0,0O");
  });
  it("el auto deberia mirar al norte porque queremos que gire a la derecha", () => {
    let auto3 = new Auto(0, 0, "O");
    auto3.ingresarTamanioTablero(t);
    expect(auto3.ejecutar("D")).toEqual("0,0N");
  });
  it("el auto deberia mirar al oeste porque queremos que gire a la izquierda", () => {
    let auto3 = new Auto(0, 0, "N");
    auto3.ingresarTamanioTablero(t);
    expect(auto3.ejecutar("I")).toEqual("0,0O");
  });
  it("el auto deberia mirar al sur porque queremos que gire a la izquierda", () => {
    let auto3 = new Auto(0, 0, "O");
    auto3.ingresarTamanioTablero(t);
    expect(auto3.ejecutar("I")).toEqual("0,0S");
  });
  it("el auto deberia mirar al este porque queremos que gire a la izquierda", () => {
    let auto3 = new Auto(0, 0, "S");
    auto3.ingresarTamanioTablero(t);
    expect(auto3.ejecutar("I")).toEqual("0,0E");
  });
  it("el auto deberia mirar al norte porque queremos que gire a la izquierda", () => {
    let auto3 = new Auto(0, 0, "E");
    auto3.ingresarTamanioTablero(t);
    expect(auto3.ejecutar("I")).toEqual("0,0N");
  });
  it("el auto deberia aumentar su pos en X porque esta mirando al este", () => {
    let auto3 = new Auto(0, 0, "E");
    auto3.ingresarTamanioTablero(t);
    expect(auto3.ejecutar("A")).toEqual("1,0E");
  });
  it("el auto deberia reducir su pos en Y porque esta mirando al sur", () => {
    let auto3 = new Auto(0, 3, "S");
    auto3.ingresarTamanioTablero(t);
    expect(auto3.ejecutar("A")).toEqual("0,2S");
  });
  it("el auto deberia reducir su pos en X porque esta mirando al oeste", () => {
    let auto3 = new Auto(1, 0, "O");
    auto3.ingresarTamanioTablero(t);
    expect(auto3.ejecutar("A")).toEqual("0,0O");
  });
  it("deberia crear una matriz de 5x5 y poner el auto en una posicion inicial de 1,2 con direccion al norte ejecutar los siguientes comandos ", () => {
    let auto3 = new Auto(1, 2, "N");
    auto3.ingresarTamanioTablero(t);
    expect(autoNuevo.ejecutarInstrucciones("5,5/1,2N/IAIAIAIAA")).toEqual(
      "1,3N"
    );
  });

  it("deberia crear una matriz de 5x5 y poner el auto en una posicion inicial de 1,2 con direccion al norte ejecutar los siguientes comandos ", () => {
    expect(autoNuevo.ejecutarInstrucciones("5,5/1,2N/IAIAIAIAA")).toEqual(
      "1,3N"
    );
  });
  it("deberia crear una matriz de 5x5 y poner el auto en una posicion inicial de 1,2 con direccion al norte ejecutar los siguientes comandos IAIAIAIAAAAAA y fallar porque pasa el tamaño limite de la matriz", () => {
    expect(autoNuevo.ejecutarInstrucciones("5,5/1,2N/IAIAIAIAAAAAAA")).toEqual(
      "1,5N"
    );
  });
  it("deberia crear una matriz de 5x5 y poner el auto en una posicion inicial de 3,3 con direccion al este ejecutar los siguientes comandos AADAADADDA", () => {
    expect(autoNuevo.ejecutarInstrucciones("5,5/3,3E/AADAADADDA")).toEqual(
      "5,1E"
    );
  });
  it("verificar que el auto se detiene en el limite en caso de seguir avanzando en Y", () => {
    expect(autoNuevo.ejecutarInstrucciones("5,5/1,2N/AAAAAAAA")).toEqual(
      "1,5N"
    );
  });
  it("verificar que el auto se detiene en el limite en caso de seguir avanzando en X", () => {
    expect(autoNuevo.ejecutarInstrucciones("5,5/1,2E/AAAAAAAA")).toEqual(
      "5,2E"
    );
  });
  it("verificar que el auto se detiene en el limite en caso de seguir avanzando hacia abajo en Y", () => {
    expect(autoNuevo.ejecutarInstrucciones("5,5/1,2S/AAAAAAAA")).toEqual(
      "1,0S"
    );
  });
  it("verificar que el auto se detiene en el limite en caso de seguir avanzando hacia la izquierda en X", () => {
    expect(autoNuevo.ejecutarInstrucciones("5,5/1,2O/AAAAAAAA")).toEqual(
      "0,2O"
    );
  });
  it("Creamos un auto con posicion inicial en 1,2N y con un tamaño de matriz de 5x5 ejecutando el comando Jump que deberia devolver 1,4N", () => {
    let autoJump = new Auto(1, 2, "N");
    autoJump.ingresarTamanioTablero(t);
    expect(autoJump.ejecutar("J")).toEqual("1,4N");
  });
  it("Creamos un auto con posicion inicial en 1,3E y con un tamaño de matriz de 5x5 ejecutando el comando Jump que deberia devolver 3,3E", () => {
    let autoJump1 = new Auto(1, 3, "E");
    autoJump1.ingresarTamanioTablero(t);
    expect(autoJump1.ejecutar("J")).toEqual("3,3E");
  });
  it("Creamos un auto con posicion inicial en 1,3N y con un tamaño de matriz de 5x5 ejecutando el comando Jump que deberia devolver 1,5N", () => {
    let autoJump2 = new Auto(1, 3, "N");
    autoJump2.ingresarTamanioTablero(t);
    expect(autoJump2.ejecutar("J")).toEqual("1,5N");
  });
  it("Creamos un auto con posicion inicial en 1,1N y con un tamaño de matriz de 5x5 ejecutando el comando Jump que deberia devolver 1,3N", () => {
    let autoJump3 = new Auto(1, 1, "N");
    autoJump3.ingresarTamanioTablero(t);
    expect(autoJump3.ejecutar("J")).toEqual("1,3N");
  });
});
