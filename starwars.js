import { films } from ../data/films.js


let filmlist = document.querySelector('#filmlist')


for (let i = 0; i < films.length; i++) {

    const foundfilm = films.find(film => getLastNumber(film.url) === (i + 1).toString())
    let posterfig = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = 'https://starwars-visualguide.com/assets/img/films/7.jpg'
    let figCaption = document.createElement('figcaption')

    figCaption.textContent = foundfilm.title
    posterfig.appendChild(figImg)
    posterfig.appendChild(figCaption)

    filmlist.appendChild(posterfig)
}

function getLastNumber(url) {
    let end = url.lastIndecOf('/')
    return url.charAt(end - 1)
}