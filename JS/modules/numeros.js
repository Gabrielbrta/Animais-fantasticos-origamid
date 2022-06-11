export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  function animaNumeros() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let contador = 0;

      const timer = setInterval(() => {
        contador += incremento;
        numero.innerText = contador;
        if (contador > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  let observador;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observador.disconnect();
      animaNumeros();
    }
  }
  observador = new MutationObserver(handleMutation);
  const sectionNumero = document.querySelector('.numeros');
  observador.observe(sectionNumero, { attributes: true });
}
