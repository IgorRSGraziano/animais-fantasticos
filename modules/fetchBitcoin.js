export default async function fetchBitcoin() {

    const bitcoinPrice = await fetch('https://blockchain.info/ticker')
    const bitcoinSellPrice = await (await bitcoinPrice.json()).BRL.sell

    const priceArea = document.querySelector('.btc-preco')

    priceArea.innerText = (1000 / bitcoinSellPrice).toFixed(4)

}