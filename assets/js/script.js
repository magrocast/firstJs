let precioBase = 400000;
let cantidad = 0;
let cantidadSpan = 0;
let totalSpan = 0;
let total = 0;
let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precioBase;

function aumentar() {
  cantidadSpan = document.querySelector(".cantidad");
  cantidad = parseInt(cantidadSpan.innerHTML);
  cantidad = cantidad + 1;
  cantidadSpan.innerHTML = cantidad;
  totalSpan = document.querySelector(".valor-total");
  total = cantidad * precioBase;
  totalSpan.innerHTML = total;
}

function disminuir() {
  cantidadSpan = document.querySelector(".cantidad");
  cantidad = parseInt(cantidadSpan.innerHTML);
  cantidad = cantidad - 1;
  cantidadSpan.innerHTML = cantidad;
  totalSpan = document.querySelector(".valor-total");
  total = cantidad * precioBase;
  totalSpan.innerHTML = total;
}
