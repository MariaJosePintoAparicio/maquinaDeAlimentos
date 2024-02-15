const productos = {
    A: 270,
    B: 340,
    C: 390
  };
  
  const monedas = [100, 50, 10];
  
  function calcularVuelto(cambio) {
    let vuelto = [];
    for (let i = 0; i < monedas.length; i++) {
      while (cambio >= monedas[i]) {
        vuelto.push(monedas[i]);
        cambio -= monedas[i];
      }
    }
    return vuelto;
  }
  
  function maquinaDeAlimentos() {
    const producto = prompt("Elija producto: A, B o C").toUpperCase();
    if (!productos.hasOwnProperty(producto)) {
      console.log("Producto inválido. Por favor, elija A, B o C.");
      return;
    }
  
    const precioProducto = productos[producto];
    let montoIngresado = 0;
  
    console.log("Ingrese monedas:");
  
    while (montoIngresado < precioProducto) {
      const monto = parseInt(prompt("Ingrese una moneda (10, 50 o 100):"));
      if (![10, 50, 100].includes(monto)) {
        console.log("Moneda inválida. Por favor, ingrese 10, 50 o 100.");
        continue;
      }
      montoIngresado += monto;
    }
  
    const vuelto = calcularVuelto(montoIngresado - precioProducto);
    console.log("Su vuelto:");
    vuelto.forEach(m => console.log(m));
  }
  
  maquinaDeAlimentos();