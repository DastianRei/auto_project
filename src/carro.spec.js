import Auto from "./carro";
describe("Sumar", () => {
    const t="5,5";
    let auto = new Auto(0,0,'N');
    let autoNuevo = new Auto(0,0,'N');
    let autoNuevo2 = new Auto(0,0,'N');
    it("deberia devolver la posicion inicial del auto", () => {
      expect(auto.ingresarPosicionInicial("3,2N")).toEqual("3,2N");
    });
    it("deberia crear un tablero 5x5", () => {
        expect(auto.ingresarTamanioTablero(t)).toEqual("5,5");
      });
    it("el auto deberia avanzar una posicion en Y porque esta mirando al Norte", () => {
      let auto1=new Auto(0,0,"N")
      auto1.ingresarTamanioTablero(t);
        expect(auto1.ejecutar("A")).toEqual("0,1N");
       });  
    it("el auto deberia mirar al este porque queremos que gire a la derecha", () => {
       let auto2=new Auto(0,0,"N")
       auto2.ingresarTamanioTablero(t);
        expect(auto2.ejecutar("D")).toEqual("0,0E");
       });
    it("el auto deberia mirar sud porque queremos que gire a la derecha", () => {
       let auto3=new Auto(0,0,"E")
       auto3.ingresarTamanioTablero(t);
        expect(auto3.ejecutar("D")).toEqual("0,0S");
       });
    it("el auto deberia mirar oeste porque queremos que gire a la derecha", () => {
        let auto3=new Auto(0,0,"S")
        auto3.ingresarTamanioTablero(t);
         expect(auto3.ejecutar("D")).toEqual("0,0O");
        });
    it("el auto deberia mirar al norte porque queremos que gire a la derecha", () => {
        let auto3=new Auto(0,0,"O")
        auto3.ingresarTamanioTablero(t);
          expect(auto3.ejecutar("D")).toEqual("0,0N");
        });   
    it("el auto deberia mirar al oeste porque queremos que gire a la izquierda", () => {
        let auto3=new Auto(0,0,"N")
        auto3.ingresarTamanioTablero(t);
        expect(auto3.ejecutar("I")).toEqual("0,0O");
        });
     it("el auto deberia mirar al sur porque queremos que gire a la izquierda", () => {
        let auto3=new Auto(0,0,"O")
        auto3.ingresarTamanioTablero(t);
        expect(auto3.ejecutar("I")).toEqual("0,0S");
        });
      it("el auto deberia mirar al este porque queremos que gire a la izquierda", () => {
        let auto3=new Auto(0,0,"S")
        auto3.ingresarTamanioTablero(t);
        expect(auto3.ejecutar("I")).toEqual("0,0E");
        });
      it("el auto deberia mirar al norte porque queremos que gire a la izquierda", () => {
        let auto3=new Auto(0,0,"E")
        auto3.ingresarTamanioTablero(t);
        expect(auto3.ejecutar("I")).toEqual("0,0N");
        });
      it("el auto deberia aumentar su pos en X porque esta mirando al este", () => {
        let auto3=new Auto(0,0,"E")
        auto3.ingresarTamanioTablero(t);
        expect(auto3.ejecutar("A")).toEqual("1,0E");
        });
      it("el auto deberia reducir su pos en Y porque esta mirando al sur", () => {
        let auto3=new Auto(0,3,"S")
        auto3.ingresarTamanioTablero(t);
        expect(auto3.ejecutar("A")).toEqual("0,2S");
        });
      it("el auto deberia reducir su pos en X porque esta mirando al oeste", () => {
        let auto3=new Auto(1,0,"O")
        auto3.ingresarTamanioTablero(t);
        expect(auto3.ejecutar("A")).toEqual("0,0O");
        });     
      it("deberia crear una matriz de 5x5 y poner el auto en una posicion inicial de 1,2 con direccion al norte ejecutar los siguientes comandos ", () => {
        let auto3=new Auto(1,2,"N")
        auto3.ingresarTamanioTablero(t);
        expect(autoNuevo.ejecutarInstrucciones("5,5/1,2N/IAIAIAIAA")).toEqual("1,3N");
        }); 
      
       it("deberia crear una matriz de 5x5 y poner el auto en una posicion inicial de 1,2 con direccion al norte ejecutar los siguientes comandos ", () => {
         expect(autoNuevo.ejecutarInstrucciones("5,5/1,2N/IAIAIAIAA")).toEqual("1,3N");
       });
       it("deberia crear una matriz de 5x5 y poner el auto en una posicion inicial de 1,2 con direccion al norte ejecutar los siguientes comandos IAIAIAIAAAAAA y fallar porque pasa el tamaño limite de la matriz", () => {
         expect(autoNuevo.ejecutarInstrucciones("5,5/1,2N/IAIAIAIAAAAAAA")).toEqual("1,5N");
       });
       it("deberia crear una matriz de 5x5 y poner el auto en una posicion inicial de 3,3 con direccion al este ejecutar los siguientes comandos AADAADADDA", () => {
         expect(autoNuevo.ejecutarInstrucciones("5,5/3,3E/AADAADADDA")).toEqual("5,1E");
       });
       it("verificar que el auto se detiene en el limite en caso de seguir avanzando en Y", () => {
        expect(autoNuevo.ejecutarInstrucciones("5,5/1,2N/AAAAAAAA")).toEqual("1,5N");
        }); 
      it("verificar que el auto se detiene en el limite en caso de seguir avanzando en X", () => {
        expect(autoNuevo.ejecutarInstrucciones("5,5/1,2E/AAAAAAAA")).toEqual("5,2E");
        }); 
      it("verificar que el auto se detiene en el limite en caso de seguir avanzando hacia abajo en Y", () => {
          expect(autoNuevo.ejecutarInstrucciones("5,5/1,2S/AAAAAAAA")).toEqual("1,0S");
          });
      it("verificar que el auto se detiene en el limite en caso de seguir avanzando hacia la izquierda en X", () => {
         expect(autoNuevo.ejecutarInstrucciones("5,5/1,2O/AAAAAAAA")).toEqual("0,2O");
         });  
      it("si el comando es J deberia avanzar 2 posiciones en la direccion en la que esta mirando el auto que es N", () => {
        let auto3=new Auto(0,0,"N")
        auto3.ingresarTamanioTablero(t);
          expect(auto3.ejecutar("J")).toEqual("0,2N");
          });
      it("si el comando es J deberia avanzar 2 posiciones en la direccion en la que esta mirando el auto que es Este", () => {
          let auto3=new Auto(0,0,"E")
          auto3.ingresarTamanioTablero(t);
          expect(auto3.ejecutar("J")).toEqual("2,0E");
          });
       it("si el comando es J deberia avanzar 2 posiciones en la direccion en la que esta mirando el auto que es Sur", () => {
           let auto3=new Auto(0,2,"S")
           auto3.ingresarTamanioTablero(t);
           expect(auto3.ejecutar("J")).toEqual("0,0S");
           });
      it("si el comando es J deberia avanzar 2 posiciones en la direccion en la que esta mirando el auto que es Oeste", () => {
          let auto3=new Auto(2,0,"O")
          auto3.ingresarTamanioTablero(t);
          expect(auto3.ejecutar("J")).toEqual("0,0O");
          }); 
      it("si el comando es J y el auto mirando al norte toca el limite deberia empezar su posicion Y en 0 y seguir el salto de 2 en 2", () => {
         let auto3=new Auto(0,5,"N")
         auto3.ingresarTamanioTablero(t);
         expect(auto3.ejecutar("J")).toEqual("0,1N");
         });
      it("si el comando es J y el auto mirando al este toca el limite deberia empezar su posicion X en 0 y seguir el salto de 2 en 2", () => {
        let auto3=new Auto(5,0,"E")
        auto3.ingresarTamanioTablero(t);
        expect(auto3.ejecutar("J")).toEqual("1,0E");
        });
      it("si el comando es J y el auto mirando al sur toca el limite deberia empezar su posicion Y en el limite de la matriz y seguir el salto de 2 en 2", () => {
        let auto3=new Auto(0,0,"S")
        auto3.ingresarTamanioTablero(t);
        expect(auto3.ejecutar("J")).toEqual("0,4S");
        });
      it("si el comando es J y el auto mirando al Oeste toca el limite deberia empezar su posicion X en el limite de la matriz y seguir el salto de 2 en 2", () => {
        let auto3=new Auto(0,0,"O")
        auto3.ingresarTamanioTablero(t);
        expect(auto3.ejecutar("J")).toEqual("4,0O");
        });
  });
  