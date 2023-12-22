let caunt = document.querySelector('.clas')
let es = document.getElementById("i1")
let clas_ = document.querySelector("#clas_")
let caritem = document.getElementsByClassName("flexcar")
let inputBx = "cart"
let nar = `<div class="item">You cart is emplty</div>`
let a = 0
caunt.innerHTML = a
// let prev = document.querySelector('.items')
let box = document.querySelector('.flexcar')
// let next = document.querySelector('.next')
let ol1 = document.getElementById('oldiv1')
let ol2 = document.getElementById('oldiv2')
let ol3 = document.getElementById('oldiv3')
let ids = document.getElementById('ids')
let zi = document.querySelector('.zi')
let ol4 = document.getElementById('oldiv4')
let divbox2 = document.getElementById('divbox2')

// let ids1 = `
// <div class="img01">
// <div class="items" onclick="king()">
//     <div class="flexcar">
//         <img src="./image-product-1.jpg" class="ol" >
//         <img src="./image-product-2.jpg" class="ol" >
//         <img src="./image-product-3.jpg" class="ol" >
//         <img src="./image-product-4.jpg" class="ol" >
//         </div>
// </div>
// <div class="olo">
//     <div class="oldiv1 ac" id="oldiv1">
//     <div class="ol1 ac" onclick="or1()"></div>
//     </div>
//     <div class="oldiv2 "  id="oldiv2">
//     <div class="ol2 " onclick="or2()"></div>
//     </div>
//     <div class="oldiv3" id="oldiv3">
//     <div class="ol3" onclick="or3()"></div>
//     </div>
//     <div class="oldiv4" id="oldiv4">
//     <div class="ol4" onclick="or4()"></div>
//     </div>
// </div>
// </div>
// `

let degres = 0;
if (degres <= -474 ) {
    ol1.classList.remove("ac")
    ol2.classList.add('ac')
}
function or1() {
    degres = 0
    box.style = `transform: translateX(${degres}px);`
    ol3.classList.remove("ac")
    ol4.classList.remove("ac")
    ol2.classList.remove("ac")
    ol1.classList.add("ac")
}
function or2() {
    degres = -475
    box.style = `transform: translateX(${degres}px);`
    ol3.classList.remove("ac")
    ol1.classList.remove("ac")
    ol4.classList.remove("ac")
    ol2.classList.add('ac')
}
function or3() {
    degres = -950
    box.style = `transform: translateX(${degres}px);`
    ol4.classList.remove("ac")
    ol1.classList.remove("ac")
    ol2.classList.remove("ac")
    ol3.classList.add('ac')
}
function or4() {
    degres = -1425
    box.style = `transform: translateX(${degres}px);`
    ol3.classList.remove("ac")
    ol1.classList.remove("ac")
    ol2.classList.remove("ac")
    ol4.classList.add('ac')
}
function a2() {
    a++
    // console.log("ish");
    if (a+1 >= 10) {
        a = 0
    }
    caunt.innerHTML = a
}
function a1() {
    a--
    if (a <= -1) {
        a += 11 
    }
    // console.log("ish2");
    caunt.innerHTML = a
}
function king() {
    zi.classList.add('kin')
}

function deldt() {
    inputBx = "cart"
    nar = `<div class="item">You cart is emplty</div>`
    k2()
} 

function k1() {
    if (a >= 1) {
        inputBx = a
        nar = `
        <div class="flec">
        <div class="imgcart">
        </div>
        <div>Fall Limited Edition Sneakers<br/>
        $125.00 x ${inputBx} = <span class="dol">${a*125}.00</span></div> 
        <div class="kesh" onclick="deldt()"><img src="./icon-delete.svg" alt="" >
    
        </div>
        </div>
        <button class="id" onclick="chek()">Checkout</button>
        `
        clas_.classList.add("clas_")
        clas_.innerHTML = a ; 
        k2()
        }else{
        alert("item number not included")
        }
};
function k2() {
    es.innerHTML = `<div>
    <div class="cart">Cart</div>
    ${nar}
    </div>`;   
    es.classList.add("cal")
}
function chek() {
    es.setAttribute("id", "orqaga");
    setTimeout(() => {
        es.classList.remove("cal")
        es.innerHTML = ``
        clas_.classList.remove("clas_")
        clas_.innerHTML = "" ; 
      }, 900);
}

function yopish() {
    if (
    divbox2.classList.contains('ol')
    ) {
    divbox2.classList.remove('ol')
    }else{
        divbox2.classList.add('ol')
    }
}