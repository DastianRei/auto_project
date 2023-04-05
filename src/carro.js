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
            this.matriz[i][j] = "";
        }
      }
  }z
  
}


