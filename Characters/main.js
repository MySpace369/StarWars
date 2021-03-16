import { people } from './data/people.js'

const Title = people[0].title
console.log (Title)

let peoplelist = document.getElementById('peoplelist')

console.log (peoplelist)

for (let i = 0; i < people.length; i++) {

    let titletext = document.createElement('p')
    titletext.innerText = people[i].title
    let peopleid = people[i]['character_id']
    let image = document.createElement('img')
    image.src = `https://starwars-visualguide.com/#/characters?page=1${peopleid}.jpg`
    let figcaption = document.createElement('figcaption')

    peoplelist.appendChild(titletext)
    peoplelist.appendChild(image)
}

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    return url.charAt(end - 1)
}


// import { people } from '../data/people.js'

// const mainElement = document.querySelector('#main')

// people.forEach((person. i) => {
//     console.log(person.name)
//     const charFigure = document.createElement('figure')
//     const charImg = document.createElement('img')
//     charImg.src = 'https://starwars-visualguide.com/#/characters?${charNum + 1}.jpg'
//     const charCaption = document.createElement('figcaption')
//     charCaption.textContent = person.name

//     charFigure.appendChild(charImg)
//     charFigure.appendChild(charCaption)

//     mainElement.appendChild(charFigure)


// })

// function getLastNumber(url) {
//     let end = url.lastIndexOf('/')
//     let start = end - 2
//     if (url.charAt(start) == '/')

//     return url.charAt(end - 1)
// }