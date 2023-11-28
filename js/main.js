/* Caminhos para os botões */
/* Lentes de Contato */

document.querySelector('.btn-contact-lenses').addEventListener('click',function() {
    window.location = "https://oticasaopaulo.netlify.app/article.html#id=contact-lenses";
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.contact-lenses').classList.add('active');
});

/* Exame de visão */
/*** DEPOIS VERIRIFICAR ESSE CÓDIGO (AS VEZES FUNCIONA AS VEZES NÃO) ***/

var hash = window.location.hash;
var obj = document.querySelector('.vision-exam');
var objPosition = obj.getBoundingClientRect().top;

if (hash.length > 0) {
    window.scrollBy(0,objPosition);
}

document.querySelector('.btn-vision-exam').addEventListener('click',(e) => {
    e.preventDefault();
    window.scrollBy(0,objPosition);
})

/* Menu Mobile */

var btnMobile = document.querySelector('.menu-mobile');

btnMobile.addEventListener('click', function() {
    if(btnMobile.className === 'menu-mobile') {
        btnMobile.className += ' activated';
    } else {
        btnMobile.className =  'menu-mobile';
    }
});

/* Menu Mobile - Óculos, lentes de contato e marque seu exame */

var liGlass = document.querySelector('.li-glass');
var liContactLenses = document.querySelector('.li-contact-lenses');
var liVisionExam = document.querySelector('.li-vision-exam');

liGlass.addEventListener('click',()=> {
    window.location = "https://oticasaopaulo.netlify.app/article.html";
})

liContactLenses.addEventListener('click',()=> {
    window.location = "https://oticasaopaulo.netlify.app/article.html#id=contact-lenses";
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.contact-lenses').classList.add('active');
})

liVisionExam.addEventListener('click',(e)=> {
    e.preventDefault();
    window.scrollBy(0,objPosition);
})

/* Carrocel */

function setImage() {

    var settings = {

        firstImage: function() {
            element = document.querySelector('.slider div:first-child');
            element.classList.add('active');
        },

        slide: function() {
            element = document.querySelector('.active');
            if(element.nextElementSibling){
                element.nextElementSibling.classList.add('active');
                element.classList.remove('active');
            }else{
                element.classList.remove('active');
                settings.firstImage();
            }
        },

        next: function() {
            clearInterval(interval);
            element = document.querySelector('.active');

            if(element.nextElementSibling){
                element.nextElementSibling.classList.add('active');
                element.classList.remove('active');
            }else{
                element.classList.remove('active');
                settings.firstImage();
            }

            interval = setInterval(settings.slide,4000);
        },

        prev: function() {
            clearInterval(interval);
            element = document.querySelector('.active');

            if(element.previousElementSibling){
                element.previousElementSibling.classList.add('active');
                element.classList.remove('active');
            }else{
                element.classList.remove('active');
                element = document.querySelector('.slider div:last-child');
                element.classList.add('active');
            }

            interval = setInterval(settings.slide,4000);
        }

    }

    //Chama o slide
    settings.firstImage();

    //Chama o próximo slide à um determinado tempo
    var interval = setInterval(settings.slide,4000);
    document.querySelector('.next').addEventListener('click',settings.next,false);
    document.querySelector('.prev').addEventListener('click',settings.prev,false);
}


window.addEventListener('load',setImage,false);

/* Botão para "ver mais" */

btnViewMore = document.querySelector('.view-more');

btnViewMore.addEventListener('click',()=>{ window.location =  "https://oticasaopaulo.netlify.app/article.html"});