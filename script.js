const content=document.querySelector('.Quote');
const author=document.querySelector('.Author');
const generate=document.querySelector('button');

function execute(){
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(q => {
        content.innerText=q.quote;
        author.innerText=q.character
    });
}

window.onload=execute();