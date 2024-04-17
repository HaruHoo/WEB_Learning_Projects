const bg = document.querySelector(".bg")
const text = document.querySelector(".loading_text")

let load = 0
let timer = setInterval(blurring, 30)

function blurring(){
    load++;
    text.innerText = load + "%";
    text.style.opacity = 1-load/100;
    bg.style.filter = `blur(${30-load/100*30}px)`;
    if(load>99){
        clearInterval(timer)
    }
}