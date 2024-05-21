let sections = document.querySelectorAll("section");

sections[0].classList.add("show-animate");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 700;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add( "show-animate")
        } /*else {
            sec.classList.remove("show-animate")
        }*/
    
    })
}


const galleryImgs = document.getElementsByClassName("gallery-img");
const slide = document.getElementById("slide");
const back = document.getElementById("back");
const forward = document.getElementById("forward");

let imgCounter = 0;

function nextImg(direction) {
    return function() {
        imgCounter += direction;
        if(imgCounter < 0) {
            imgCounter = galleryImgs.length - 1;
        } else if(imgCounter >= galleryImgs.length) {
            imgCounter = 0;
        }
        slide.src = galleryImgs[imgCounter].src;
        console.log(imgCounter);
    }
}

function selectImg(src) {
    return function() {
        imgCounter = parseInt(this.dataset.index);    
        slide.src = src
    }
}

for(let element of galleryImgs) {
    element.addEventListener("click", selectImg(element.src));
}
back.addEventListener("click", nextImg(-1));
forward.addEventListener("click", nextImg(1));