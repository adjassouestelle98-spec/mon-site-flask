let commande = [];

// Ajouter un plat à la commande
function commander(nomPlat, prix, idQuantite) {

    const quantite = parseInt(
        document.getElementById(idQuantite).value
    );

    // Vérifier la quantité
    if (isNaN(quantite) || quantite < 1) {
        alert("Veuillez choisir une quantité valide.");
        return;
    }

    // Vérifier si le plat est déjà dans la commande
    const platExistant = commande.find(
        plat => plat.nom === nomPlat
    );

    if (platExistant) {
    platExistant.quantite = quantite;
}   else {
        commande.push({
            nom: nomPlat,
            prix: prix,
            quantite: quantite
        });
    }

    afficherResume();
}


// Afficher un petit résumé de la commande
function afficherResume() {

    const liste = document.getElementById("liste-commande");
    const resume = document.getElementById("resume-commande");

    if (commande.length === 0) {
        liste.innerHTML = "<p>Aucun plat sélectionné.</p>";
        resume.textContent = "Aucun plat sélectionné.";
        return;
    }

    let total = 0;
    let contenu = "";

    commande.forEach(function(plat,index) {

        const totalPlat = plat.prix * plat.quantite;
        total += totalPlat;

        contenu +=
            "<p>" +
            plat.nom +
            " × " +
            plat.quantite +
            " — " +
            totalPlat +
            " FCFA" +
            "</p>";
    });

    liste.innerHTML = contenu;

    resume.textContent =
        "Total de la commande : " +
        total +
        " FCFA";
}

// Bouton WhatsApp
const boutonWhatsApp =
    document.getElementById("envoyer-whatsapp");

if (boutonWhatsApp) {

    boutonWhatsApp.addEventListener("click", function() {

        if (commande.length === 0) {
            alert("Veuillez ajouter au moins un plat.");
            return;
        }

        let message =
            "Bonjour, je souhaite passer une commande.\n\n";

        let totalGeneral = 0;

        commande.forEach(function(plat) {

            const totalPlat =
                plat.prix * plat.quantite;

            totalGeneral += totalPlat;

            message +=
                "Plat : " + plat.nom + "\n" +
                "Quantité : " + plat.quantite + "\n" +
                "Prix unitaire : " + plat.prix + " FCFA\n" +
                "Total : " + totalPlat + " FCFA\n\n";
        });

        message +=
            "TOTAL DE LA COMMANDE : " +
            totalGeneral +
            " FCFA\n\n" +
            "Merci !";

        const numero = "22896215755";

        const url =
            "https://wa.me/" +
            numero +
            "?text=" +
            encodeURIComponent(message);

        window.open(url, "_blank");
    });
}