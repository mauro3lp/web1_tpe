const inputCaptcha = document.querySelector('#captcha');

function obtenerValorAleatorio(listaValores) {
  return listaValores[Math.floor(Math.random() * listaValores.length)];
}

function generarCaptcha() {
  const valorCaptcha1 = document.querySelector('#valorCaptcha1');
  const valorCaptcha2 = document.querySelector('#valorCaptcha2');
  const valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  valorCaptcha1.innerHTML = obtenerValorAleatorio(valores);
  valorCaptcha2.innerHTML = obtenerValorAleatorio(valores);
}

if (inputCaptcha) {
  generarCaptcha();
}
