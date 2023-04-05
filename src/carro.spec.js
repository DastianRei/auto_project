import Auto from "./carro";
describe("Sumar", () => {
    let auto = new Auto(0,0,'N');

    it("deberia devolver la posicion inicial del auto", () => {
      expect(auto.ingresarPosicionInicial("3,2,N")).toEqual("3,2,N");
    });

  });
  