function entrar() {
  document.getElementById('hero').style.display = 'none';
  document.querySelector('header').style.display = 'flex';
  document.getElementById('catalogo').style.display = 'grid';
  document.getElementById('nosotros').style.display = 'block';
  document.getElementById('contacto').style.display = 'block';
}

function volverInicio() {
  document.getElementById('hero').style.display = 'block';
  document.querySelector('header').style.display = 'none';
  document.getElementById('catalogo').style.display = 'none';
  document.getElementById('nosotros').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';
}

function agregarAlCarrito(producto) {
  const carrito = document.getElementById('carrito');
  carrito.style.display = 'block';
  const lista = document.getElementById('lista-carrito');
  const item = document.createElement('li');
  item.textContent = producto;
  lista.appendChild(item);
}

function vaciarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
}

function finalizarCompra() {
  alert('Gracias por tu compra');
  vaciarCarrito();
  document.getElementById('carrito').style.display = 'none';
}
