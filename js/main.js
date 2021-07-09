const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']


let changeBackground = function(){

body.style.backgroundColor = colors[parseInt(Math.random()*colors.length)]
}


button.addEventListener('click', changeBackground);






