'use strict';
const inputCaptcha = document.querySelector('#captcha');
const valorCaptcha1 = document.querySelector('#valorCaptcha1');
const valorCaptcha2 = document.querySelector('#valorCaptcha2');
const btnRegistrar = document.querySelector('#registrarse');

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
