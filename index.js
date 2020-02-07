const title = document.querySelector('#title');

console.log(title)

const CLICKED_CLASS = 'clicked';

function handleClick(){
    const currentClass=title.className;

    title.classList.toggle(CLICKED_CLASS)
    
    
}
function init(){
    window.addEventListener('click',handleClick);
}

init();
