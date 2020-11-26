fetch('/api/')
  .then(response => {
    if (!response.ok) throw new Error('Error executing request. Status ' + response.status)
    return response.json()
  })
  .then(data => {
    let text = ''
    data.slice(0, 10).forEach(coin => {
      text += `
        <div class="media">
          <img src="coin.jpg" class="align-self-center mr-3" alt="coin" height="60">
          <div class="media-body">
          <h5 class="mt-2">${coin.cmc_rank}° - ${coin.symbol} - ${coin.name}</h5>
          <p>$ ${coin.quote.USD.price.toFixed(2)}</p>
          </div>
        </div>
      `
    })
    document.getElementById('coins').innerHTML = text
  })
  .catch(error => console.error(error.message))
