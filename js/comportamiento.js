'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Variables del captcha
  const inputCaptcha = document.querySelector('#captcha');
  const valorCaptcha1 = document.querySelector('#valorCaptcha1');
  const valorCaptcha2 = document.querySelector('#valorCaptcha2');
  const btnRegistrar = document.querySelector('#registrarse');
  // Variables del Catalogo
  const bodyCatalogo = document.querySelector('#contenidoCatalogo');
  const datosCatalogo = [];
  const btnAgregarCatalogo = document.querySelector('#agregarCatalogo');
  const btnTripleCatalogo = document.querySelector('#tripleCatalogo');
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

  async function cargarCatalogo() {
    await precargarCatalogo();
    llenarCatalogo(datosCatalogo);
  }

  async function precargarCatalogo() {
    return await fetch('./datosTabla.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        pegarCatalogo(data);
      });
  }

  function pegarCatalogo(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
      arr.forEach((elemento) => {
        datosCatalogo.push(elemento);
      });
    }
  }

  function llenarCatalogo(datos) {
    if (Array.isArray(datos) && datos.length > 0) {
      datos.forEach((dato) => {
        agregarFilaCatalogo(dato, crearListaApi);
      });
    }
  }

  function agregarFilaCatalogo(dato, callbackCrearLista) {
    const fila = document.createElement('tr');

    const tela = document.createElement('td');
    const composicion = document.createElement('td');
    const rinde = document.createElement('td');
    const ancho = document.createElement('td');
    const precio = document.createElement('td');

    tela.innerText = dato.tela;
    composicion.appendChild(callbackCrearLista(dato.composicion));
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

  function crearListaApi(arr) {
    const lista = document.createElement('ul');

    if (Array.isArray(arr) && arr.length > 0) {
      arr.forEach((elemento) => {
        const elementoLista = document.createElement('li');
        elementoLista.innerText =
          elemento.ratio * 100 + '% ' + elemento.materiales;
        lista.appendChild(elementoLista);
      });

      return lista;
    }
  }

  function crearListaInput(arr) {
    const lista = document.createElement('ul');

    if (Array.isArray(arr) && arr.length > 0) {
      arr.forEach((elemento) => {
        const elementoLista = document.createElement('li');
        elementoLista.innerText = elemento;
        lista.appendChild(elementoLista);
      });

      return lista;
    }
  }

  function nuevoItemCatalogo() {
    const nuevoItem = {
      tela: '',
      composicion: [],
      rinde: 0,
      ancho: 0,
      precio: 0,
    };
    const inputTela = document.querySelector('#tela');
    const inputComposicion = document.querySelector('#composicion');
    const inputRinde = document.querySelector('#rinde');
    const inputAncho = document.querySelector('#ancho');
    const inputPrecio = document.querySelector('#precio');

    nuevoItem.tela = inputTela.value;
    nuevoItem.composicion = inputComposicion.value.split(',');
    nuevoItem.rinde = parseFloat(inputRinde.value);
    nuevoItem.ancho = parseFloat(inputAncho.value);
    nuevoItem.precio = parseFloat(inputPrecio.value);

    datosCatalogo.push(nuevoItem);
    agregarFilaCatalogo(nuevoItem, crearListaInput);
  }

  function resetearFormCatalogo() {
    const form = document.querySelector('#formCatalogo');
    form.reset();
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
    cargarCatalogo();
    btnAgregarCatalogo.addEventListener('click', (e) => {
      e.preventDefault();
      nuevoItemCatalogo();
      resetearFormCatalogo();
    });
    btnTripleCatalogo.addEventListener('click', (e) => {
      e.preventDefault();
      nuevoItemCatalogo();
      nuevoItemCatalogo();
      nuevoItemCatalogo();
      resetearFormCatalogo();
    });
  }
}); // NO TIENE QUE QUEDAR NADA POR FUERA DE ESTE CIERRE DEL CALLBACK DE DOMCONTENTLOADED
