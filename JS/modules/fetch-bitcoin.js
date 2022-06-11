export default function initFetchBitcoin() {
  async function fetchBitcoin() {
    try {
      const btcPreco = document.querySelector('.btc-preco');
      const responseBitcoin = await fetch('https://blockchain.info/ticker');
      const bitcoinJson = await responseBitcoin.json();

      btcPreco.innerText = (100 / bitcoinJson.BRL.buy).toFixed(5);
    } catch (erro) {
      console.log(Error(`${erro} Erro no fetch bitcoin`));
    }
  }
  fetchBitcoin();
}
