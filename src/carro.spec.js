import Auto from "./carro";
describe("Sumar", () => {
    let auto = new Auto(0,0,'N');
    let autoNuevo = new Auto(0,0,'N');
    let autoNuevo2 = new Auto(0,0,'N');
    it("deberia devolver la posicion inicial del auto", () => {
      expect(auto.ingresarPosicionInicial("3,2N")).toEqual("3,2N");
    });

    it("deberia crear un tablero 3x3", () => {
        expect(auto.ingresarTamanioTablero("5,5")).toEqual("5,5");
      });
      it("deberia avanzar una posicion en Y porque esta en Norte", () => {
        expect(auto.ejecutar("A")).toEqual("3,3,N");
      });  
      it("deberia de girar a la derecha cambiando la posicion a este debido a que apuntamos al norte", () => {
        expect(auto.ejecutar("D")).toEqual("3,3,E");
      });
      it("deberia de girar a la izquiera cambiando la posicion a norte debido a que apuntamos al este", () => {
        expect(auto.ejecutar("I")).toEqual("3,3,N");
      });
      it("deberia de girar a la izquiera cambiando la posicion a oeste debido a que apuntamos al norte", () => {
        expect(auto.ejecutar("I")).toEqual("3,3,O"); 
      })
      it("deberia de reducir una casilla en la posicion X ya que avanzamos con direccion al oeste", () => {
        expect(auto.ejecutar("A")).toEqual("2,3,O"); 
      })
      it("deberia de girar a la izquiera cambiando la posicion a sur debido a que apuntamos al oeste", () => {
        expect(auto.ejecutar("I")).toEqual("2,3,S"); 
      })
      it("deberia de reducir una casilla en la posicion Y ya que avanzamos con direccion al sur", () => {
        expect(auto.ejecutar("A")).toEqual("2,2,S"); 
      })
      it("deberia de girar a la izquiera cambiando la posicion a este debido a que apuntamos al sur", () => {
        expect(auto.ejecutar("I")).toEqual("2,2,E"); 
      })
      it("deberia de aumentar una casilla en la posicion X ya que avanzamos con direccion al este", () => {
        expect(auto.ejecutar("A")).toEqual("3,2,E"); 
      })
      it("deberia de girar a la derecha cambiando la posicion a sur debido a que apuntamos al este", () => {
        expect(auto.ejecutar("D")).toEqual("3,2,S");
      });
      it("deberia de reducir una casilla en la posicion y ya que avanzamos con direccion al sur", () => {
        expect(auto.ejecutar("A")).toEqual("3,1,S"); 
      })
      it("deberia de girar a la derecha cambiando la posicion a oeste debido a que apuntamos al sur", () => {
        expect(auto.ejecutar("D")).toEqual("3,1,O");
      });
      it("deberia de girar a la derecha cambiando la posicion a norte debido a que apuntamos al oeste", () => {
        expect(auto.ejecutar("D")).toEqual("3,1,N");
      });
      it("deberia de girar a la derecha cambiando la posicion a este debido a que apuntamos al norte y avanzar en una posicion en X ya que apuntamos al este", () => {
        expect(auto.ejecutarComandos("DA")).toEqual("4,1,E");
      });
      it("deberia de girar a la derecha cambiando la posicion a sur debido a que apuntamos al este y reducir una posicion en Y ya que apuntamos al sur", () => {
        expect(auto.ejecutarComandos("DA")).toEqual("4,0,S");
      });
      it("deberia crear una matriz de 5x5 y poner el auto en una posicion inicial de 1,2 con direccion al norte ejecutar los siguientes comandos ", () => {
        expect(autoNuevo.ejecutarInstrucciones("5,5/1,2N/IAIAIAIAA")).toEqual("1,3,N");
      });
      it("deberia crear una matriz de 5x5 y poner el auto en una posicion inicial de 1,2 con direccion al norte ejecutar los siguientes comandos IAIAIAIAAAAAA y fallar porque pasa el tamaño limite de la matriz", () => {
        expect(autoNuevo.ejecutarInstrucciones("5,5/1,2N/IAIAIAIAAAAAAA")).toEqual("1,5,N");
      });
      it("deberia crear una matriz de 5x5 y poner el auto en una posicion inicial de 3,3 con direccion al este ejecutar los siguientes comandos AADAADADDA", () => {
        expect(autoNuevo.ejecutarInstrucciones("5,5/3,3E/AADAADADDA")).toEqual("5,1,E");
      });
  });
  