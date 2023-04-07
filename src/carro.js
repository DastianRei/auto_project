class Auto
{
  constructor(x, y,direccion) {
    this.x = x;
    this.y = y;
    this.direccion=direccion;
  }

  generarTablero(filas, columnas)
  {
    this.matriz = new Array(filas);
    for (let i = 0; i < filas; i++) 
    {
        this.matriz[i] = new Array(columnas);
    }
  }

  llenarTablero(filas,columnas)
  {
    for (let i = 0; i < filas; i++) 
    {
        for (let j = 0; j < columnas; j++) 
        {
            this.matriz[i][j] = "0";
        }
      }
  }
  posicionarAuto(x,y){
    this.matriz[x][y]='*';
  }
  ingresarPosicionInicial(comando){
    let cadena = comando.split(',');
    this.x = +cadena[0];
    this.y = +cadena[1];
    this.direccion = cadena[2];
    return comando;
  }
  ingresarTamanioTablero(comando){
    let cadena = comando.split(',');
    this.generarTablero(+cadena[0],cadena[1]);
    return comando;
  }
  avanzar(){
    switch(this.direccion) {
      case "N":
        this.matriz[this.x][this.y++];
        break;
    }
  }
  girarDerecha(){
    switch(this.direccion) {
      case "N":
        this.direccion="E";
        break;
    }
  }
  girarIzquierda(){
    switch(this.direccion) {
      case "E":
        this.direccion="N";
        break;
    }
  }
  ejecutar(comando){
    if (comando=="A"){
      this.avanzar();
    }
    if(comando=="D"){
      this.girarDerecha();
    }
    if(comando=="I"){
      this.girarIzquierda();
    }
    return this.x+","+this.y+","+this.direccion;
  }
}

export default Auto;
