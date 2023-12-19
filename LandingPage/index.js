//nav
const nav = document.querySelector(".nav-bar");
const close = document.getElementById("nav-close");
const activeNavLink = document.querySelector(".active-nav-link");
const menuIcon = document.getElementById("menu-icon");
const header = document.getElementById("page-header");

menuIcon.addEventListener("click", () => {
    if (nav.classList.contains("hide")) {
        nav.classList.remove("hide");
    }
    menuIcon.classList.add("hide");
});
function closeNav() {
    if (!nav.classList.contains("hide")) {
        nav.classList.add("hide");
        menuIcon.classList.remove("hide");
        // removeActive();
    }
    return;
}
close.addEventListener("click", () => {
    closeNav();
});
const removeActive = () => {
    nav.children[0].childNodes.forEach((child) => {
        if (child) {
            try {
                const anchor = child.querySelector("a");
                const icon = child.querySelector("span");
                if (anchor.classList.contains("active-nav-link")) {
                    anchor.classList.remove("active-nav-link");
                }
                if (icon && icon.classList.contains("nav-icon-container")) {
                    icon.remove();
                }
                return;
            }
            catch (e) {
                return;
            }
        }
    })
}
nav.children[0].childNodes.forEach((child) => {
    child.addEventListener("click", (e) => {
        if (child) {
            removeActive();
            const anchor = child.querySelector('a');
            anchor.classList.add("active-nav-link");
            const icon = document.createElement("span");
            const img = document.createElement("img");
            img.src = "./images/coffee-orange.svg";
            icon.classList.add("nav-icon-container");
            icon.appendChild(img);
            child.appendChild(icon);
        }
    })
});
document.addEventListener("click", (e) => {
    if (e.target.id !== "menu-icon" | "nav-id") {
        closeNav();
    }
})
//scroll animation
function handleScroll() {
    if (document.scrollingElement.scrollTop >= 30) {
        header.style.position = 'fixed';
    } else {
        header.style.position = 'relative';
    }
}
let scrollTimeout;
document.addEventListener('scroll', handleScroll);
const observer = new IntersectionObserver((entries) => {
    entries.forEach((element) => {
        if (element.isIntersecting) {
            element.target.classList.add("show");
        }
        // else{
        //     element.target.classList.remove("show");
        // }
    })
});
const targetElements = document.querySelectorAll(".hidden");
targetElements.forEach((element) => {
    observer.observe(element);
});

//image slide
const imagesC1 = document.getElementById("images-c1");
const btnC1 = document.querySelector(".btn-c1");
const imagesC2 = document.getElementById("images-c2");
const btnC2 = document.querySelector(".btn-c2");
const imagesC3 = document.getElementById("images-c3");
const btnC3 = document.querySelector(".btn-c3");
const imagesC4 = document.getElementById("images-c4");
const btnC4 = document.querySelector(".btn-c4");

slide(imagesC1, btnC1.children[0], btnC1.children[1]);
slide(imagesC2, btnC2.children[0], btnC2.children[1]);
slide(imagesC3, btnC3.children[0], btnC3.children[1]);
slide(imagesC4, btnC4.children[0], btnC4.children[1]);

function slide(images, nextBtn, prevBtn) {
    const nextImage = () => {
        const active = images.querySelector(".current-image");
        active.classList.remove("current-image");
        if (active.nextElementSibling) {
            active.nextElementSibling.classList.add("current-image");
        } else {
            images.children[0].classList.add("current-image");
        }
    };
    let interval = setInterval(nextImage, 7000);
    nextBtn.addEventListener("click", () => {
        clearInterval(interval);
        nextImage();
        const timeOut = setTimeout(() => {
            interval = setInterval(nextImage, 7000);
        }, 5000);
        clearTimeout(timeOut);
    });
    prevBtn.addEventListener("click", () => {
        clearInterval(interval);
        const active = images.querySelector(".current-image");
        active.classList.remove("current-image");
        if (active.previousElementSibling) {
            active.previousElementSibling.classList.add("current-image");
        } else {
            images.children[images.children.length - 1].classList.add("current-image");
        }
        const timeOut = setTimeout(() => {
            interval = setInterval(nextImage, 7000);
        }, 5000);
        clearTimeout(timeOut);
    });
}


// console.log(imageContainer);
