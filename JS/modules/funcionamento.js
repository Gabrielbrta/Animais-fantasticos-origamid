/* eslint-disable max-len */
export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.diasHorario = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  horarioAberto() {
    const diaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = this.horarioAgora > this.diasHorario[0] && this.horarioAgora < this.diasHorario[1];
    return diaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.horarioAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
