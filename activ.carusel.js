let prev1 = document.querySelector('.orqaga1')
let box1 = document.querySelector('#flexcar1')
let next1 = document.querySelector('.otgazish1')
let ol11 = document.getElementById('oldiv11')
let ol12 = document.getElementById('oldiv12')
let ol13 = document.getElementById('oldiv13')
let ol14 = document.getElementById('oldiv14')

let active_degres = 0; 
if (active_degres <= -474 ) {
    ol11.classList.remove("ac")
    ol12.classList.add('ac')
}
function or11() {
    active_degres = 0
    box1.style = `transform: translateX(${active_degres}px);`
    ol13.classList.remove("ac")
    ol14.classList.remove("ac")
    ol12.classList.remove("ac")
    ol11.classList.add("ac")
    if (active_degres >= -474){
        next1.style = `
        opacity: 0.7;
        z-index: 0;
        `
    }
    if (active_degres >= -1424) {
        prev1.style = `
        opacity: 1;
        z-index: 1; `
    }
}
function or12() {
    active_degres = -475
    box1.style = `transform: translateX(${active_degres}px);`
    ol13.classList.remove("ac")
    ol11.classList.remove("ac")
    ol14.classList.remove("ac")
    ol12.classList.add('ac')
    if (active_degres >= -1424) {
        prev1.style = `
        opacity: 1;
        z-index: 1; `
    }
    if (active_degres <= -475) {
        next1.style = `
        opacity: 1;
        z-index: 1;
        `
    }
}
function or13() {
    active_degres = -950
    box1.style = `transform: translateX(${active_degres}px);`
    ol14.classList.remove("ac")
    ol11.classList.remove("ac")
    ol12.classList.remove("ac")
    ol13.classList.add('ac')
    if (active_degres >= -1424) {
        prev1.style = `
        opacity: 1;
        z-index: 1; `
    }
    if (active_degres <= -475) {
        next1.style = `
        opacity: 1;
        z-index: 1;
        `
    }
}
function or14() {
     active_degres = -1425
    box1.style = `transform: translateX(${active_degres}px);`
    ol13.classList.remove("ac")
    ol11.classList.remove("ac")
    ol12.classList.remove("ac")
    ol14.classList.add('ac')
    if(active_degres <= -1425){
        prev1.style = `
        opacity: 0.7;
        z-index: 0;
        `
    }if (active_degres <= -475) {
        next1.style = `
        opacity: 1;
        z-index: 1;
        `
    }
}
let deg1 = 1
function caru() {
    if (deg1 < 4) {
        deg1 ++
        }
}
function caru1() {
    if (deg1 >= 2) {
        deg1--
    }
}
prev1.addEventListener('click', function() {
    if (deg1 = 1) {
        or12()
    }else if (deg1 = 2) {
        or13(

        )
    }else if (deg1 = 3) {
        or14
    }
    console.log(deg1)

})
next1.addEventListener('click', function() {
    if (active_degres = 1) {
        next1.style = `
        opacity: 0.7;
        z-index: 0;
        `
    }else if (deg1 = 4) {
        or13()
    }else if (deg1 = 3) {
        or12()
    }
    else if (deg1 = 2) {
        or11(

        )
    }
})
function ifha() {
    if (zi.classList.contains = 'kin') {
    zi.classList.remove('kin')
    }
}