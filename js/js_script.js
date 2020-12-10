$(".jumbotron").css({ height: $(window).height() + "px" });
$("#aboutMe-card").css({ minHeight: ($(window).height()*0.75) + "px"});
 

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
  $("#aboutMe-card").css({ minHeight: ($(window).height()*0.75) + "px"});
});

const header = document.querySelector("header");
const sectionSiteHero = document.querySelector(".jumbotron");
const sectionEducation = document.querySelector("#myWebsite");
const whatsappLogo = document.getElementById("whatsappLogo");

const sectionNavOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const scrollbarObserver = new IntersectionObserver(function(
    entries,
    scrollbarObserver
){
    entries.forEach(entry => {
        console.log(entry.intersectionRatio);
        if(!entry.isIntersecting){
            header.classList.add("nav-scrolled");
        }
        else{
            header.classList.remove("nav-scrolled");
        }
    });
},
sectionNavOptions);
scrollbarObserver.observe(sectionSiteHero);

const scrollbarObserver2 = new IntersectionObserver(function(
    entries,
    scrollbarObserver2
){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            whatsappLogo.style.visibility = "hidden";
            whatsappLogo.style.opacity = 0;
            whatsappLogo.style.transition = "visibility 0.5s, opacity 0.5s linear";
        }
        else{
            whatsappLogo.style.visibility = "initial";
            whatsappLogo.style.opacity = 1;
            whatsappLogo.style.transition = "visibility 0.5s, opacity 0.5s linear";
        }
    });
}, sectionNavOptions);
scrollbarObserver2.observe(sectionEducation);