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
  const btnVaciarCatalogo = document.querySelector('#vaciarCatalogo');
  const apiBaseUrl = 'https://62b8d817ff109cd1dc88b9f0.mockapi.io/telas'
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
    return await fetch(apiBaseUrl)
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

    tela.innerText = dato.tela;
    composicion.appendChild(crearListaInput(dato.composicion));
    rinde.innerText = dato.rinde;
    ancho.innerText = dato.ancho;
    precio.innerText = dato.precio;

    fila.appendChild(tela);
    fila.appendChild(composicion);
    fila.appendChild(rinde);
    fila.appendChild(ancho);
    fila.appendChild(precio);

    const precioOferta = 1000;
    if (dato.precio < precioOferta) {
      fila.classList.add('oferta');
    }

    bodyCatalogo.appendChild(fila);
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
    nuevoItem.composicion = inputComposicion.value.split(',');
    nuevoItem.rinde = parseFloat(inputRinde.value);
    nuevoItem.ancho = parseFloat(inputAncho.value);
    nuevoItem.precio = parseFloat(inputPrecio.value);

/*    while (copias > 0) {
      datosCatalogo.push(nuevoItem);
      agregarFilaCatalogo(nuevoItem);
      copias--;
     }

*/
    try {
    await apiAgregarTela(nuevoItem).then(_=> agregarFilaCatalogo(nuevoItem))
    resetearFormCatalogo();
  
    } 
    catch (error) {
      console.log(error);
    }
    
  }

  async function apiAgregarTela(nuevaTela){
    const configuracion = { 'method': 'POST',
    'headers': {
        'Content-Type': 'application/json'
    },
    'body': JSON.stringify(nuevaTela)}
    return await fetch(apiBaseUrl, configuracion)
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
  }
}); // NO TIENE QUE QUEDAR NADA POR FUERA DE ESTE CIERRE DEL CALLBACK DE DOMCONTENTLOADED




async function obtenerDatos() {
  const url = 'https://60aab45166f1d000177731ea.mockapi.io/api/usuarios';
  const lista = document.querySelector("#lista_nombres");
  lista.innerHTML = "";
  try {
      let res = await fetch(url); // GET url
      let json = await res.json(); // texto json a objeto
      console.log(json);
      for (const usuario of json) {
          let nombre = usuario.nombre;
          lista.innerHTML += `<ul>${nombre}</ul>`;
      }
  } catch (error) {
      console.log(error);
  }
}

obtenerDatos();