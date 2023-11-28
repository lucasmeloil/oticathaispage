/* Caminhos para os botões */
/* Lentes de Contato */

var hash = window.location.hash;

if (hash.length > 0) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.contact-lenses').classList.add('active');
}

document.querySelector('.btn-contact-lenses').addEventListener('click',function() {
    window.location = "https://oticasaopaulo.netlify.app/article.html#id=contact-lenses";
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.contact-lenses').classList.add('active');
});

/* Exame de visão */

document.querySelector('.btn-vision-exam').addEventListener('click', () => {
    window.location = "https://oticasaopaulo.netlify.app/#id=vision-exam";
});

/* Menu Mobile */

var btnMobile = document.querySelector('.menu-hamburguer');

btnMobile.addEventListener('click', function() {
    if(btnMobile.parentElement.className === 'menu-mobile') {
        btnMobile.parentElement.className += ' activated';
    } else {
        btnMobile.parentElement.className =  'menu-mobile';
    }
});

/* Menu Mobile - Óculos, lentes de contato e marque seu exame */

var liGlass = document.querySelector('.li-glass');
var liContactLenses = document.querySelector('.li-contact-lenses');
var liVisionExam = document.querySelector('.li-vision-exam');

liGlass.addEventListener('click',()=> {
    window.location = "https://oticasaopaulo.netlify.app/article.html";
});

liContactLenses.addEventListener('click',()=> {
    window.location = "https://oticasaopaulo.netlify.app/article.html#id=contact-lenses";
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.contact-lenses').classList.add('active');
});

liVisionExam.addEventListener('click',()=> {
    window.location = "https://oticasaopaulo.netlify.app/#id=vision-exam";
});

/* Código para o filtro de preço */

(function() {
    const parent = document.querySelector('.range-slider');

    if(!parent) {
        return;
    }

    const rangeS = parent.querySelectorAll('input[type="range"]'),
            numberS = parent.querySelectorAll('input[type="number"]');

    rangeS.forEach((el) => {
        el.oninput = () => {
            let slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if(slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach((el) => {
        el.oninput = () => {
            let number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                let tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;
        }
    });
}) ();

/* Funcionalidade dos botões */

var btnSection = document.querySelectorAll('.options-article h2');

for(i = 0; i < btnSection.length; i++) {
    btnSection[i].addEventListener('click',changeSection);
}

function changeSection(e) {

    nameSection = e.target.id;

    document.querySelector('.active').classList.remove('active');
    document.querySelector('.'+nameSection).classList.add('active');

}