const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav__items");


menuBtn.addEventListener("click", () =>{
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})


menuBtn.addEventListener("click", () =>{
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})


//show/hide faqs


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');
        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        } else{
            icon.className = 'uil uil-plus';
        }

    })
})

//add background style to navbar

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})