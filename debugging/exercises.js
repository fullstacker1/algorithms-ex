// console.log("Debugging exercises");
// console.error("This is an error message");
// console.warn("This is a warning message");
// console.info("this is a info message")
// console.table({ name: "John", age: 30, city: "New York" });
// console.group("Group 1");
// console.time("Timer 1");
// console.assert(1 === 1, "This will not be logged");
// console.assert(1 === 2, "This will be logged");
// console.timeEnd("Timer 1");
// console.groupEnd("Group 1");
// console.trace("This is a stack trace");
// Datos de ejemplo
const carrito = [
  { nombre: "Laptop", precio: 1200, cantidad: 1 },
  { nombre: "Mouse", precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 75, cantidad: 1 }
];

// const TASA_IMPUESTO = 0.16;

// function calcularTotalConImpuesto(items, codigoDescuento) {
//   console.group("🛒 Calculando total del carrito");
  
//   // 1. Log inicial de los datos de entrada
//   console.log("Items recibidos:");
//   console.table(items);
//   console.log("Código de descuento:", codigoDescuento);
  
//   let subtotal = 0;
//   for (let item of items) {
//     const precioItem = item.precio * item.cantidad;
//     console.log(`   ➕ ${item.nombre} x${item.cantidad}: $${precioItem.toFixed(2)}`);
//     subtotal += precioItem;
//   }
  
//   console.log("Subtotal calculado: $", subtotal.toFixed(2));
  
//   // 2. Aplicar descuento si existe
//   let descuentoAplicado = 0;
//   if (codigoDescuento === "OFERTA10") {
//     descuentoAplicado = subtotal * 0.10;
//     console.warn("⚠️ Código OFERTA10 aplicado: 10% de descuento.");
//   } else if (codigoDescuento) {
//     console.error(`❌ Código de descuento inválido: ${codigoDescuento}`);
//   }
  
//   const conDescuento = subtotal - descuentoAplicado;
//   console.log("Total tras descuento: $", conDescuento.toFixed(2));
  
//   // 3. Calcular impuesto
//   console.time("⏱️ Cálculo de impuesto");
//   const impuesto = conDescuento * TASA_IMPUESTO;
//   console.timeEnd("⏱️ Cálculo de impuesto");
  
//   const total = conDescuento + impuesto;
  
//   // 4. Log final con aserción (verificamos que no sea negativo)
//   console.assert(total >= 0, "¡Alerta! El total es negativo.");
  
//   console.log("✅ TOTAL FINAL: $", total.toFixed(2));
//   console.groupEnd();
  
//   return total;
// }

// // Ejecutamos la función
// calcularTotalConImpuesto(carrito, "OFERTA10");



// function procesarPagos(transacciones) {
//   let total = 0;
//   for (let i = 0; i <= transacciones.length; i++) {  // Bug: <= en lugar de <
//     total += transacciones[i].monto;
//   }
//   return total;
// }

// const pagos = [
//   { id: 1, monto: 100 },
//   { id: 2, monto: 200 },
//   { id: 3, monto: 50 }
// ];

// console.log(procesarPagos(pagos));