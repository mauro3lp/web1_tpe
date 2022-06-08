'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Variables del captcha
  const inputCaptcha = document.querySelector('#captcha');
  const valorCaptcha1 = document.querySelector('#valorCaptcha1');
  const valorCaptcha2 = document.querySelector('#valorCaptcha2');
  const btnRegistrar = document.querySelector('#registrarse');
  // Variables del Catalogo
  const bodyCatalogo = document.querySelector('#contenidoCatalogo');
  //

  function menuMobile() {
    const hamburguesa = document.querySelector('.hamburguesa');
    const navbar = document.querySelector('.navbar');

    hamburguesa.addEventListener('click', () => {
      navbar.classList.toggle('navbarActivo');
      hamburguesa.classList.toggle('hamburguesaActiva');
    });
  }
  menuMobile();

  function obtenerValorAleatorio(listaValores) {
    return listaValores[Math.floor(Math.random() * listaValores.length)];
  }

  function generarCaptcha() {
    const valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    valorCaptcha1.innerHTML = obtenerValorAleatorio(valores);
    valorCaptcha2.innerHTML = obtenerValorAleatorio(valores);
  }

  function validarCaptcha() {
    const sumaCaptcha =
      parseInt(valorCaptcha1.innerHTML) + parseInt(valorCaptcha2.innerHTML);
    const resultadoCaptcha = parseInt(inputCaptcha.value);

    const validacion = sumaCaptcha === resultadoCaptcha;
    const captchaTieneSuccess = inputCaptcha.classList.contains('success');

    if (validacion && !captchaTieneSuccess) {
      inputCaptcha.classList.add('success');
    } else if (captchaTieneSuccess) {
      inputCaptcha.classList.remove('success');
    }

    return validacion;
  }

  function toggleBotonRegistro(deshabilitado) {
    btnRegistrar.disabled = deshabilitado;
  }

  async function precargarCatalogo() {
    const datosCatalogo = await fetch('./datosTabla.json').then((res) => {
      return res.json();
    });

    llenarCatalogo(datosCatalogo);
  }

  function agregarFilaCatalogo(dato) {
    const fila = document.createElement('tr');
    
    const tela = document.createElement('td');
    const composicion = document.createElement('td');
    const rinde = document.createElement('td');
    const ancho = document.createElement('td');
    const precio = document.createElement('td');

    tela.innerText = dato.tela;
    composicion.appendChild(crearLista(dato.composicion));
    rinde.innerText = dato.rinde;
    ancho.innerText = dato.ancho;
    precio.innerText = dato.precio;

    fila.appendChild(tela);
    fila.appendChild(composicion);
    fila.appendChild(rinde);
    fila.appendChild(ancho);
    fila.appendChild(precio);

    bodyCatalogo.appendChild(fila);
  }

  function crearLista(arr) {
    const lista = document.createElement('ul');

    if (arr.length && arr.length > 0) {
      arr.forEach((elemento) => {
        const elementoLista = document.createElement('li');
        elementoLista.innerText =
          elemento.ratio * 100 + '% ' + elemento.materiales;
        lista.appendChild(elementoLista);
      });

      return lista;
    }
  }

  function llenarCatalogo(datos) {
    if (datos.length && datos.length > 0) {
      datos.forEach((dato) => {
        agregarFilaCatalogo(dato);
      });
    }
  }

  if (inputCaptcha) {
    generarCaptcha();

    inputCaptcha.addEventListener('input', (e) => {
      e.preventDefault();
      const validacion = validarCaptcha();
      toggleBotonRegistro(!validacion);
    });

    btnRegistrar.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = './contacto.html';
    });
  }

  if (bodyCatalogo) {
    precargarCatalogo();
  }
}); // NO TIENE QUE QUEDAR NADA POR FUERA DE ESTE CIERRE DEL CALLBACK DE DOMCONTENTLOADED
