const url = 'http://localhost:3000/'


console.log('start')
fetch(url, {mode: 'cors'})
  .then(response => {
    if (!response.ok) throw new Error('Error executing request. Status ' + response.status)
    return response.json()
  })
  .then(data => {
    let text = ''
    data.forEach(coin => {
      text += `
        <div>
            <h5>${coin.name}</h5>
            <p>${coin.symbol}</p>
        </div>
      `
    })

    document.getElementById('coins').innerHTML = text
  })
  .catch(error => console.error(error.message))
