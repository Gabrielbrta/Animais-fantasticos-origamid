export default class AnimaNumeros {
  constructor(numeros, sectionNumero, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.sectionNumero = document.querySelector(sectionNumero);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
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
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observador.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observador = new MutationObserver(this.handleMutation);
    this.observador.observe(this.sectionNumero, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.sectionNumero) {
      this.addMutationObserver();
    }
    return this;
  }
}
