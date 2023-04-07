import Auto from "./carro";
describe("Sumar", () => {
    let auto = new Auto(0,0,'N');

    it("deberia devolver la posicion inicial del auto", () => {
      expect(auto.ingresarPosicionInicial("3,2,N")).toEqual("3,2,N");
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
  });
  