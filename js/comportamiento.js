'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Variables del captcha
  const inputCaptcha = document.querySelector('#captcha');
  const valorCaptcha1 = document.querySelector('#valorCaptcha1');
  const valorCaptcha2 = document.querySelector('#valorCaptcha2');
  const btnRegistrar = document.querySelector('#registrarse');
  // Variables del Catalogo
  const bodyCatalogo = document.querySelector('#contenidoCatalogo');
  let datosCatalogo = [];
  const btnAgregarCatalogo = document.querySelector('#agregarCatalogo');
  const btnTripleCatalogo = document.querySelector('#tripleCatalogo');
  const btnVaciarCatalogo = document.querySelector('#vaciarCatalogo');
  const apiBaseUrl = 'https://62b8d817ff109cd1dc88b9f0.mockapi.io/telas';
  const apiUrlConId = (id) => `${apiBaseUrl}/${id}`;
  // Variables del modal
  const modalContainer = document.querySelector('.modalContainer');
  const modal = document.querySelector('.modal');
  const btnModalEditar = document.querySelector('#editarCatalogo');
  const btnsModalCerrar = document.querySelectorAll('.btnModalCerrar');
  const inputEditTela = modal.querySelector('#editarTela');
  const inputEditComposicion = modal.querySelector('#editarComposicion');
  const inputEditRinde = modal.querySelector('#editarRinde');
  const inputEditAncho = modal.querySelector('#editarAncho');
  const inputEditPrecio = modal.querySelector('#editarPrecio');
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

  function toggleBotonRegistro(estaDeshabilitado) {
    btnRegistrar.disabled = estaDeshabilitado;
  }

  async function cargarCatalogo() {
    await precargarCatalogo();
    llenarCatalogo(datosCatalogo);
  }

  async function precargarCatalogo() {
    return await fetch(apiBaseUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        pegarCatalogo(data);
      });
  }

  function pegarCatalogo(arr) {
    datosCatalogo = [];

    if (Array.isArray(arr) && arr.length > 0) {
      arr.forEach((elemento) => {
        datosCatalogo.push(elemento);
      });
    }
  }

  function llenarCatalogo(datos) {
    bodyCatalogo.innerHTML = '';

    if (Array.isArray(datos) && datos.length > 0) {
      datos.forEach((dato) => {
        agregarFilaCatalogo(dato);
      });
    }
  }

  function agregarFilaCatalogo(dato) {
    const fila = document.createElement('tr');

    const tela = document.createElement('td');
    const composicion = document.createElement('td');
    const rinde = document.createElement('td');
    const ancho = document.createElement('td');
    const precio = document.createElement('td');
    const botones = document.createElement('td');

    tela.innerText = dato.tela;
    composicion.appendChild(crearListaInput(dato.composicion));
    rinde.innerText = dato.rinde;
    ancho.innerText = dato.ancho;
    precio.innerText = dato.precio;

    botones.dataset.telaId = dato.id;
    botones.appendChild(crearBtnBorrar());
    botones.appendChild(crearBtnEditar());
    botones.classList.add('botonesTabla');

    fila.appendChild(tela);
    fila.appendChild(composicion);
    fila.appendChild(rinde);
    fila.appendChild(ancho);
    fila.appendChild(precio);
    fila.appendChild(botones);

    const precioOferta = 1000;
    if (dato.precio < precioOferta) {
      fila.classList.add('oferta');
    }
    bodyCatalogo.appendChild(fila);
  }

  function crearBtnBorrar() {
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.addEventListener('click', eventoBorrarTela);
    btn.innerText = 'Borrar';
    btn.classList.add('btnTabla');
    return btn;
  }

  function eventoBorrarTela(e) {
    const btn = e.srcElement;
    const idTela = btn.parentElement.dataset.telaId;
    const fila = btn.parentElement.parentElement;
    borrarTelaApi(idTela).then((_) => {
      fila.remove();
      datosCatalogo = datosCatalogo.filter((tela) => tela.id != idTela);
    });
  }

  async function borrarTelaApi(id) {
    return await fetch(apiUrlConId(id), { method: 'DELETE' });
  }

  function crearBtnEditar() {
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.addEventListener('click', eventoEditarTela);
    btn.innerText = 'Editar';
    btn.classList.add('btnTabla');
    return btn;
  }

  function eventoEditarTela(e) {
    const btn = e.srcElement;
    const idTela = btn.parentElement.dataset.telaId;
    precargarModal(idTela);
  }

  function toggleModal() {
    modalContainer.classList.toggle('mostrarModal');
  }

  function precargarModal(id) {
    const tela = datosCatalogo.find((obj) => obj.id == id);
    if (!tela?.id) {
      throw new Error(`No se encontro la tela con el id = ${id}`);
    }

    inputEditTela.placeholder = tela.tela;
    inputEditComposicion.placeholder = tela.composicion.join(', ');
    inputEditRinde.placeholder = tela.rinde;
    inputEditAncho.placeholder = tela.ancho;
    inputEditPrecio.placeholder = tela.precio;
    btnModalEditar.dataset.telaId = id;

    toggleModal();
  }

  function eventoEditarTelaApi(e) {
    const btn = e.srcElement;
    const telaId = btn.dataset.telaId;
    const tela = {};

    if (
      inputEditTela.value &&
      inputEditTela.placeholder != inputEditTela.value
    ) {
      tela.tela = inputEditTela.value;
    }
    if (
      inputEditComposicion.value &&
      inputEditComposicion.placeholder != inputEditComposicion.value
    ) {
      tela.composicion = parsearInputComposicion(inputEditComposicion.value);
    }
    if (
      inputEditRinde.value &&
      inputEditRinde.placeholder != inputEditRinde.value
    ) {
      tela.rinde = inputEditRinde.value;
    }
    if (
      inputEditAncho.value &&
      inputEditAncho.placeholder != inputEditAncho.value
    ) {
      tela.ancho = inputEditAncho.value;
    }
    if (
      inputEditPrecio.value &&
      inputEditPrecio.placeholder != inputEditPrecio.value
    ) {
      tela.precio = inputEditPrecio.value;
    }

    if (Object.keys(tela).length != 0) {
      editarTelaApi(telaId, tela).then((_) => {
        document.querySelector('#formEditarCatalogo')?.reset();
        cargarCatalogo();
        toggleModal();
      });
    }
  }

  async function editarTelaApi(id, tela) {
    const configuracion = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tela),
    };
    console.log(configuracion.body);
    return await fetch(apiUrlConId(id), configuracion);
  }

  function crearListaInput(arr) {
    const lista = document.createElement('ul');

    if (Array.isArray(arr) && arr.length > 0) {
      arr.forEach((elemento) => {
        const elementoLista = document.createElement('li');
        elementoLista.innerText = elemento.trim();
        lista.appendChild(elementoLista);
      });

      return lista;
    }
  }

  async function nuevoItemCatalogo(copias = 1) {
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
    nuevoItem.composicion = parsearInputComposicion(inputComposicion.value);
    nuevoItem.rinde = parseFloat(inputRinde.value);
    nuevoItem.ancho = parseFloat(inputAncho.value);
    nuevoItem.precio = parseFloat(inputPrecio.value);

    try {
      while (copias > 0) {
        await apiAgregarTela(nuevoItem).then((_) => {
          cargarCatalogo();
        });
        copias--;
      }
      resetearFormCatalogo();
    } catch (err) {
      console.log(err);
    }
  }

  function parsearInputComposicion(rawValue) {
    let composicion = rawValue.split(',');
    composicion = composicion.map((str) => str.trim());
    return composicion;
  }

  async function apiAgregarTela(nuevaTela) {
    const configuracion = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevaTela),
    };
    return await fetch(apiBaseUrl, configuracion);
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
    });

    btnTripleCatalogo.addEventListener('click', (e) => {
      e.preventDefault();
      nuevoItemCatalogo(3);
    });

    btnVaciarCatalogo.addEventListener('click', () => {
      datosCatalogo.length = 0;
      bodyCatalogo.innerHTML = null;
    });

    btnsModalCerrar.forEach((btn) => {
      btn.addEventListener('click', toggleModal);
    });

    btnModalEditar.addEventListener('click', eventoEditarTelaApi);
  }
}); // NO TIENE QUE QUEDAR NADA POR FUERA DE ESTE CIERRE DEL CALLBACK DE DOMCONTENTLOADED
