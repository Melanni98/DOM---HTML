console.log("------- Elementos del documento -------")
console.log(window.document)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.characterSet)
console.log(document.title)
console.log(document.links)
console.log(document.images)

console.log(document.getElementsByTagName('img'))
console.log(document.getElementsByTagName('nombre'))
console.log(document.getElementsById('menu'))
console.log(document.getElementsByClassName('subtit1'))
console.log(document.getElementsById('menu'))
console.log(document.querySelector('#menu'))
console.log(document.querySelector('li'))
console.log(document.querySelectorAll('li'))
console.log(document.querySelectorAll('a').length)
document.querySelectorAll('a').forEach((el) => console.log(el))
// Para obtener datos de atributos haremos lo siguiente:
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute ('lang'))
console.log(document.querySelector('.link-dom').href)
console.log(document.querySelector('.link-dom').getAttribute('hret'))
//Ahora cambiaremos valores de atributos
document.documentElement.lang = 'en'
document.documentElement.setAttribute('lang', 'es-ARG')
//Modificamos atributos: usamos variables para guardar elementos del DOM. Es buena práctica que su nombre comience con el signo $.
const $linkDOM = document.querySelector('.link-dom')
$linkDOM.setAttribute("target", "_blank")
$linkDOM.setAttribute("href", "https://tecnologiaeducativaargentina.blogspost.com/")
//Podemos quitar atributos y corroborar si se quitaron
console.log($linkDOM.hasAttribute("href"))
$linkDOM.removeAttribute("href")
console.log($linkDOM.hasAttribute("href"))
const $subtit1 = document.querySelector(".subtit1")
console.log($subtit1.getAttribute("style"))
console.log($subtit1.style.backgroundColor)
console.log($subtit1.style.color)
$subtit1.style.setProperty("text-align","center")
$subtit1.style.setProperty("display","inline")
$subtit1.style.fontFamily = "sans-serif"
$subtit1.style.marginLeft = "20px"
$subtit1.style.padding = "1rem"
$subtit1.style.borderRadius = ".8rem"