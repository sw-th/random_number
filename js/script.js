let content=document.getElementById("content-el")


function display(str) {
    l=str.length
    let htm="" 
    for ( let i=0; i<l; i++) {
        htm+= `<div class="digit-el"> ${str[i]} </div>`
    }
    content.innerHTML=htm
}

function generate() {
    let num=""
    for (let i=1; i< 7; i++) {
        num+= JSON.stringify(Math.floor(Math.random()*10))
    }
    display(num)
}