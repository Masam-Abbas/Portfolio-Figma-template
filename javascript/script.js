const btn = document.getElementById('hamburger');
const nav = document.querySelector('.navbar2');
const cancel = document.getElementById('cancel')

btn.addEventListener('click',()=>{
    nav.style.top='0px'
})

cancel.addEventListener('click',()=>{
    nav.style.top='-1000px'
})

window.onscroll = () => {
    btn.classList.remove('.navbar2');
}