let panier = [];
const panierContenu = document.querySelector("#panier-contenu");
const panierTotal = document.querySelector("#panier-total");
const boutonWhatsapp = document.querySelector("#bouton-whatsapp");
const boutonMenu = document.querySelector("#bouton-menu");

boutonMenu.addEventListener("click", function() {
    document.querySelector("#menu").scrollIntoView({
        behavior: "smooth"
    });
});

const boutonsCommande = document.querySelectorAll(".bouton-commande");

boutonsCommande.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const plat = bouton.dataset.plat;
        const prix = bouton.dataset.prix;

        const quantite = prompt("Combien de portions souhaitez-vous commander ?");

        if (quantite === null) {
            return;
        }

        if (quantite <= 0 || isNaN(quantite)) {
            alert("Veuillez entrer une quantité valide.");
            return;
        }

        const message = `Bonjour Les Délices de Tata Zita 

Je souhaite commander :
 le Plat de ${plat}\n
dont le Prix unitaire est ${prix}\n
 Nombre Plats: ${quantite}\n

Merci !`;

        const numero = "22896215557";

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    });

});const texte = document.querySelector(".texte-defilant p");

let position = 0;

function defiler() {
    position -= 0.5; // plus petit = plus lent

    texte.style.transform = `translateX(${position}px)`;

    if (position < -texte.offsetWidth) {
        position = texte.parentElement.offsetWidth;
    }

    requestAnimationFrame(defiler);
}

defiler();