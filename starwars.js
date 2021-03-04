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
    filmlist.appendChild(titletext)
    filmlist.appendChild(image)
}


// for (let i = 0; i < films.length; i++) {

//     const foundfilm = films.find(film => getLastNumber(film.url) === (i + 1).toString())
//     let posterfig = document.createElement('figure')
//     let figImg = document.createElement('img')
//     figImg.src = 'https://starwars-visualguide.com/assets/img/films/7.jpg'
//     let figCaption = document.createElement('figcaption')

//     figCaption.textContent = foundfilm.title
//     posterfig.appendChild(figImg)
//     posterfig.appendChild(figCaption)

//     filmlist.appendChild(posterfig)
// }

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    return url.charAt(end - 1)
}