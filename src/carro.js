class Auto
{
  constructor(x, y,direccion) {
    this.x = x;
    this.y = y;
    this.direccion=direccion;
  }

  generarTablero(filas, columnas)
  {
    this.filas = filas;
    this.columnas=columnas;
    this.matriz = new Array(filas);
    for (let i = 0; i < filas+1; i++) 
    {
        this.matriz[i] = new Array(columnas);
    }
  }
  asignarValores(cadena){
    try{
    this.x = +cadena[0];
    this.y = +cadena[1][0];
    this.direccion = cadena[1][1];
  }
    catch{
      alert('Formao de la posicion inicial invalido');
    }
  }
  ingresarPosicionInicial(comando){
    let cadena = comando.toString().split(',');
    this.asignarValores(cadena);
    return comando;
  }
  ingresarTamanioTablero(comando){
    try{
    let cadena = comando.split(',');
    this.generarTablero(+cadena[0],cadena[1]);
    return comando;}
    catch{
      alert('Tamaño matriz en formato invalido');
    }
  }
  avanzar(){
      switch(this.direccion) {
        case "N":
          if(this.y<this.columnas) this.matriz[this.x][this.y++];
          break;
        case "O":
          if(this.x>0) this.matriz[this.x--][this.y];   
          break;
        case "S":
          if(this.y>0) this.matriz[this.x][this.y--];
          break;
        case "E":
          if(this.x<this.filas)this.matriz[this.x++][this.y];
          break;
      }
  }
  girarDerecha(){
    switch(this.direccion) {
      case "N":
        this.direccion="E";
        break;
      case "E":
        this.direccion="S";
        break;
      case "S":
        this.direccion="O";
        break;
      case "O":
        this.direccion="N";
        break;     
    }
  }
  girarIzquierda(){
    switch(this.direccion) {
      case "E":
        this.direccion="N";
        break;
      case "N":
        this.direccion="O";
        break;
      case "O":
        this.direccion="S";
        break;
      case "S":
        this.direccion="E";
        break;
    }
  }
  saltar()
  {
    switch(this.direccion)
    {
      case "N":
        for(let i=0;i<2;i++)
        {
          this.y++;
          if(this.y>this.columnas)
          {
            this.y=0;
          }
        }
        this.matriz[this.x][this.y];
        break;
      case "E":
        for(let i=0;i<2;i++)
        {
          this.x++;
          if(this.x>this.filas)
          {
            this.x=0;
          }
        }
        this.matriz[this.x][this.y];
        break;
      case "S":
        for(let i=0;i<2;i++)
        {
          this.y--;
          if(this.y<0)
          {
            this.y=this.columnas;
          }
        }
        //this.y=this.y-2;
        this.matriz[this.x][this.y];
        break;
      case "O":
        this.x=this.x-2;
        this.matriz[this.x][this.y];
        break; 
    }
  }
  ejecutar(comando){
    if (comando=="A") this.avanzar();
    if(comando=="D")this.girarDerecha();
    if(comando=="I")this.girarIzquierda();
    if(comando=="J")this.saltar();
    return this.x+","+this.y+this.direccion;
  }
  ejecutarComandos(comandos){
    for(let i =0;i<comandos.length;i++){
      this.ejecutar(comandos[i]);
    }
    return this.x+","+this.y+this.direccion;
  }
  ejecutarInstrucciones(instrucciones){
    let comandos = instrucciones.split('/');
    this.ingresarTamanioTablero(comandos[0]);
    this.ingresarPosicionInicial(comandos[1]);
    this.ejecutarComandos(comandos[2]);
    return this.x+","+this.y+this.direccion;
  }
}

export default Auto;
