console.log('Bienvenue sur mon profil');

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

// HORIZONTAL SCROLLING
/*$(function() {
    $("body").mousewheel(function(evt, chg) {
       this.scrollLeft -= (chg * 50); //need a value to speed up the change
       evt.preventDefault();
    });
 });*/

$(function() {
    $("html, body, *").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 50);
        event.preventDefault();
    });
});