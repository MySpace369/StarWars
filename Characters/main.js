import { people } from '../data/people.js'

const mainElement = document.querySelector('#main')

people.forEach((person. i) => {
    console.log(person.name)
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    charImg.src = 'https://starwars-visualguide.com/#/characters?${charNum + 1}.jpg'
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = person.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainElement.appendChild(charFigure)


})

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) == '/')

    return url.charAt(end - 1)
}