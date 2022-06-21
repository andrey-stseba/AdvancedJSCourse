const h1 = document.querySelector('h1')

const getData = () => {
  fetch('./js/test.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (myJson) {
      console.log(myJson.test)
      const myParagraf = document.createElement('p')
      myParagraf.style.marginTop = '20px'
      myParagraf.textContent = `Значение свойства  ${Object.keys(myJson)} : ${
        myJson.test
      } из test.json`
      h1.appendChild(myParagraf)
    })
}

getData()
