window.addEventListener('scroll',() => {
    if (window.scrollY >= 600){
        let top=document.querySelector('.top');
        top.style.opacity = "1";
    }else{
        let top=document.querySelector('.top');
        top.style.opacity = "0";
    }
});

let prev=document.querySelector('.prev');
let next=document.querySelector('.next');
next.addEventListener('click', () => {
    let cards=document.querySelector('.cards');
    let shift=document.querySelector('.shift').scrollWidth;
    cards.scrollLeft += shift;
})
prev.addEventListener('click', () => {
    let cards=document.querySelector('.cards');
    let shift=document.querySelector('.shift').scrollWidth;
    cards.scrollLeft -= shift;
})


let prev2=document.querySelector('.prev2');
let next2=document.querySelector('.next2');
let viwAll=document.querySelector('.viewAll.span');
next2.addEventListener('click', () => {
    let types=document.querySelector('.typesContainer');
    let shift=document.querySelector('.type').scrollWidth;
    types.scrollLeft += shift;
})
prev2.addEventListener('click', () => {
    let types=document.querySelector('.typesContainer');
    let shift=document.querySelector('.type').scrollWidth;
    types.scrollLeft -= shift;
})
viwAll.addEventListener('click', () => {
    let types=document.querySelector('.typesContainer');
    let shift=types.scrollWidth;
    types.scrollLeft += shift;
})

let search=document.getElementById('search');
let find=document.getElementById('find');
let address=document.getElementById('address');
find.addEventListener('click', () => {
    address.focus();
})
search.addEventListener('click', () => {
    address.focus();
})

let email=document.getElementById('email');
let subscribe=document.getElementById('subscribe');
subscribe.addEventListener('click', () => {
    email.focus();
})


