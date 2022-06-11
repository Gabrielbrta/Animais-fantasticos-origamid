export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const diasHorario = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const diaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = horarioAgora > diasHorario[0] && horarioAgora < diasHorario[1];
  if (horarioAberto && diaAberto) {
    funcionamento.classList.add('aberto');
  }
}
