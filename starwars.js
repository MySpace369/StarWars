import { films } from './data/films.js'

const Title = films[0].title
console.log (Title)

let filmlist = document.getElementById('filmlist')

console.log (filmlist)

for (let i = 0; i < films.length; i++) {

    let titletext = document.createElement('p')
    titletext.innerText = films[i].title
    let filmid = films[i]['episode_id']
    let image = document.createElement('img')
    image.src = `https://starwars-visualguide.com/assets/img/films/${filmid}.jpg`
    let figcaption = document.createElement('figcaption')

    filmlist.appendChild(titletext)
    filmlist.appendChild(image)
}

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    return url.charAt(end - 1)
}