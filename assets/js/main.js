"use strict"

window.onload = () => {
    // progress
    var i = 0;
    var bar = document.querySelector("#bar");

    function move() {
        if (i == 0) {
            i = 1;
            var width = 1;
            var id = setInterval(frame, 2);
            function frame() {
                if (width >= 100) {
                clearInterval(id);
                i = 0;
                } else {
                    width++;
                    bar.style.width = width + "%";
                }
            }
        }
    }

    function loaded() {
        setTimeout(() => {
            progress.classList.add("loaded")
        }, 1200)
    }

    setTimeout(() => {
        move()
        loaded()
    }, 120)

    // preloader
    var logo = document.querySelector("#preloader .logo")
    var aoc = document.querySelector("#preloader #aoc_hover")
    var aocBackdrop = document.querySelector("#preloader #aoc_backdrop")
    var gallery = document.querySelector("#preloader .gallery")
    var header = document.querySelector('header')
    var preloader = document.querySelector("#preloader")

    function logoHide() {
        logo.classList.add("hide")
    }

    function scrollToHeader() {
        header.scrollIntoView({ behavior: 'smooth' });
    }

    function backdropHide() {
        aocBackdrop.classList.add("hide")
    }

    if (logo) {
        setTimeout(() => {
            logoHide()

            setTimeout(() => {
                backdropHide()
            }, 300)
        }, 1200);
        
        logo.addEventListener("click", () => {
            logoHide()
        })
    }

    if (gallery) {
        aoc.addEventListener("click", () => {
            scrollToHeader()

            setTimeout(() => {
                preloader.remove()
            }, 1200)
        })
    }

    // nav
    var trigger = document.querySelector("#nav_trigger")
    var nav = document.querySelector("#nav")
    var backdrop = document.querySelector("#backdrop")

    function navToggle() {
        nav.classList.toggle("open")
        backdrop.classList.toggle("open")
    }

    if (nav) {
        trigger.addEventListener("click", () => {
            navToggle()
        })
    
        nav.addEventListener("click", () => {
            navToggle()
        })
    }

    // about
    var blocks = document.querySelectorAll(".blocks")
    var close = document.querySelectorAll(".row_button")
    var elem = document.querySelectorAll(".content .row .title")
    var target = document.querySelectorAll(".content .row .blocks")

    if (blocks) {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].classList.add("collapsed")
        }
    }

    if (close) {
        for (let i = 0; i < blocks.length; i++) {
            close[i].classList.add("open")
        }
    }

    if (elem) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener("click", () => {
                target[i].classList.toggle("collapsed")
            })
        }
    }

    if (elem) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener("click", () => {
                close[i].classList.toggle("open")
            })
        }
    }

    // splide
    var elem = document.querySelectorAll('.splide')

    elem.forEach(carousel => new Splide(carousel, {
        type: 'fade',
        rewind: true,
        arrows: false,
        pagination: true,
        speed: 1200,
        // autoplay: true,
        // interval: 4800,
        pauseOnHover: false
    }).mount());
}