const inputCaptcha = document.querySelector('#captcha');
const valorCaptcha1 = document.querySelector('#valorCaptcha1');
const valorCaptcha2 = document.querySelector('#valorCaptcha2');

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
  console.log(sumaCaptcha);
  const resultadoCaptcha = parseInt(inputCaptcha.value);

  console.log(resultadoCaptcha);

  alert('muy bien sabes sumar!');
}

if (inputCaptcha) {
  console.log(inputCaptcha);
  generarCaptcha();
  inputCaptcha.addEventListener('onchange', () => {
    console.log('hola');
  });
}
