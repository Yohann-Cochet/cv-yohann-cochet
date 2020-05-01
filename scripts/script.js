console.log('Bienvenue sur mon profil');





// MENU
const menu1 = document.querySelector('.menu-item1');
const menu2 = document.querySelector('.menu-item2');
const menu3 = document.querySelector('.menu-item3');

window.addEventListener('scroll', () => {
    // j'ajoute la classe active au menu1, la retire au autres
    if(window.scrollY < 800) {
        menu1.classList.add('active');
        menu2.classList.remove('active');
        menu3.classList.remove('active');
    }
    // j'ajoute la classe active au menu2, la retire au autres
    else if(window.scrollY >= 800 && window.scrollY < 1700) {
        menu1.classList.remove('active');
        menu2.classList.add('active');
        menu3.classList.remove('active');
    }
    // j'ajoute la classe active au menu3, la retire au autres
    else {
        menu1.classList.remove('active');
        menu2.classList.remove('active');
        menu3.classList.add('active');
    }
    
});





// ACCORDEON
let accordeons = document.getElementsByClassName("accordeon");

for (let i = 0, l = accordeons.length; i < l; i++) {
    accordeons[i].onclick = function () {
        this.classList.toggle('is-open');
        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
            // l'accordeon est ouvert, on doit le fermer
            content.style.maxHeight = null;
        }
        else {
            // l'accordeon est fermé, on doit l'ouvrir
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}