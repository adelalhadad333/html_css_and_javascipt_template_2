// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let links = document.querySelector(".navbar-menu");

toggleBtn.onclick = function () {
    this.classList.toggle("menu-active");
    links.classList.toggle("open");
}



// Select All Links
let navLinks = document.querySelectorAll(".navbar .navbar-menu li a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });
    });
});




// Add highlight class To Menu Items
function highlightMenu () {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const servicesMenu = document.querySelector("#services-page");
    let scrollPosition = window.scrollY;

    if (window.innerWidth > 991 && scrollPosition < 600) {
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        return

    }else if (window.innerWidth > 991 && scrollPosition < 1350) {
        aboutMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        servicesMenu.classList.remove("highlight");
        return

    }else if (window.innerWidth > 991 && scrollPosition < 2050) {
        servicesMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        return
        
    }

    if ((elem && window.innerWidth < 991 && scrollPosition < 600) || elem) {
        elem.classList.remove("highlight");
    }
}

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);


// Close The Toggle Menu When Clicking On a Menu Item
links.addEventListener("click", function () {

    if(links.classList.contains("open")) {
    toggleBtn.classList.toggle("menu-active");
    links.classList.toggle("open");
    }
})


