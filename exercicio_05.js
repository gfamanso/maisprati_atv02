
function debounce(fn, delay) {
    let timerId;

    return function() {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(function() {
            fn()
        }, delay);
    }
}


function escreverTresVezes() {
  for (let i = 0; i < 3; i++) {
    console.log("Hello, world!");
  }
}


function esperarEEscreverTresVezes() {
  setTimeout(escreverTresVezes, 3000); // espera 3 segundos antes de escrever
}

const debouncedEsperar = debounce(esperarEEscreverTresVezes, 2000);

debouncedEsperar();