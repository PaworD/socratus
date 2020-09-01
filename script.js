const scrollToTop = document.getElementById('scroll-to-top');
const anchors = document.querySelectorAll('a[href*="#"]');
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

let dataShow = false;


for (let anchor of anchors){
    anchor.addEventListener('click', (e)=>{
        e.preventDefault();
        anchor.classList.add("active-nav");
        const section = anchor.getAttribute('href').substr(1);

        document.getElementById(section).scrollIntoView({
            behavior: "smooth",
            block: 'start',
            inline: "center"
        })
    });
}

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 50 && !dataShow){
        document.getElementsByClassName('navbar')[0].style.backgroundColor = "#ffffff";
        document.getElementsByClassName('navbar')[0].style.borderBottom = "1px solid silver";
        scrollToTop.setAttribute('data-show', 'true');
        dataShow = true;
    }
    if(window.scrollY <= 50 && dataShow){
        document.getElementsByTagName('nav')[0].style.backgroundColor = "transparent";
        document.getElementsByTagName('nav')[0].style.border = "";
        scrollToTop.setAttribute('data-show', 'false');
        dataShow = false;
    }
});

scrollToTop.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
        
    })
});


btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}