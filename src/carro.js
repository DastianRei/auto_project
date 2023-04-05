class Auto
{
  constructor(x, y,direccion) {
    this.x = x;
    this.y = y;
    this.direccion=direccion;
  }

  generarTablero(filas, columnas)
  {
    let matriz = new Array(filas);
  for (let i = 0; i < filas; i++) 
  {
    matriz[i] = new Array(columnas);
  }

  return matriz;
  }
}


