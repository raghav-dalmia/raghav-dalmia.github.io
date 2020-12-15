// variables
const mainContent = document.getElementById("content");
const navbar = document.querySelector("nav");
const jumbotron = document.querySelector(".jumbotron");
const whatsappLogo = document.getElementById("whatsappLogo");
const contactSection = document.querySelector("#section-contact");
const navbarContent = document.getElementById("nav-content");
const navbarToggleer = document.querySelector(".container");
const bottomBar = document.querySelector(".contact-bottom-bar");

$("#nav-content").click(
    function(){
        navbarToggleer.classList.toggle("change");
        navbarContent.classList.toggle("hidden");
    }
)

function navbarToggle(x) {
    x.classList.toggle("change");
    navbarContent.classList.toggle("hidden");
}

const scrollingEffectOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

// aos
AOS.init({
    offset: 100,
    duration: 800
});

// typing text effect
var content = 'A software developer & competitive coder. ';
var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

$(ele).hide().appendTo('#hero').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});

// scrolling effect - navbar
const scrollObserver1 = new IntersectionObserver(
    function(
        entries,
        scrollObserver1
    ){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                navbar.classList.add('nav-scrolled');
            } else{
                navbar.classList.remove('nav-scrolled');
            }
        });
    },
    scrollingEffectOptions
);

scrollObserver1.observe(jumbotron);

// scrolling effect - whatsapp logo
const scrollObserver2 = new IntersectionObserver(
    function(
        enttries,
        scrollObserver2
    ){
        enttries.forEach(entry =>{
            if(entry.isIntersecting){
                bottomBar.style.visibility = "hidden";
                bottomBar.style.opacity = 0;
                bottomBar.style.transition = "visibility 0.5s, opacity 0.5s linear";
            }
            else{
                bottomBar.style.visibility = "initial";
                bottomBar.style.opacity = 1;
                bottomBar.style.transition = "visibility 0.5s, opacity 0.5s linear";
            }
        });
    }
);

scrollObserver2.observe(mainContent);

// scrolling effect - bottom bar
const scrollObserver3 = new IntersectionObserver(
    function(
        enttries,
        scrollObserver3
    ){
        enttries.forEach(entry =>{
            if(entry.isIntersecting){
                bottomBar.style.visibility = "initial";
                bottomBar.style.opacity = 1;
                bottomBar.style.transition = "visibility 0.5s, opacity 0.5s linear";
            }
            else{
                bottomBar.style.visibility = "hidden";
                bottomBar.style.opacity = 0;
                bottomBar.style.transition = "visibility 0.5s, opacity 0.5s linear";
            }
        });
    }
);

scrollObserver3.observe(contactSection);