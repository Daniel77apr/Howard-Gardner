let sections = document.querySelectorAll("section");

sections[0].classList.add("show-animate");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -500;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add( "show-animate")
        } /*else {
            sec.classList.remove("show-animate")
        }*/
    
    })
}