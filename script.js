const changeTitle = function () {
    let maintitle = document.querySelector('h1')
    maintitle.innerText ='Epicode è il nuovo titolo'
    console.log(maintitle)
}
changeTitle()

const addClassToTitle = function () {
    let maintitle = document.querySelector('h1')
    maintitle.setAttribute('class', 'myHeading')
    console.log (maintitle)
}
addClassToTitle ()

const changePcontent = function () {
let newwrite = document.getElementsByClassName('primoparagrafo')
newwrite.innerText = 'Nuovo paragrafo usando la funzione'
console.log(newwrite)
}
changePcontent ()

const changeUrls = function () {
    let newlink = document.querySelector('div a')
newlink.setAttribute ('href','https://www.google.com')
console.log(newlink)
}
changeUrls()

const addToTheSecond = function () {
    let newListItem = document.createElement('li')
    newListItem.innerText = '4d'
    let parentul = document.getElementById('secondList')
    parentul.appendChild(newListItem)
  }
  addToTheSecond()

  const addParagraph = function () {
    let newparagraph = document.createElement('p')
    newparagraph.innerText = 'Ecco il secondo paragrafo'
    let parentp = document.getElementById('primoparagrafo')
    parentp.appendChild(newparagraph)
  }
  addParagraph()

  const hideFirstUl = function () {
    let hidingFirstUl = document.getElementById ('firstList')
    hidingFirstUl.remove
}
hideFirstUl ()