// Attendre que le document soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez l'élément du lien "Retour à l'accueil"
    const retourAccueil = document.getElementById("retour-accueil");

    // Ajoutez un gestionnaire d'événements pour l'effet de transition au survol
    retourAccueil.addEventListener("mouseover", () => {
        retourAccueil.classList.add("hover");
    });

    // Ajoutez un gestionnaire d'événements pour supprimer l'effet de transition lorsque le curseur quitte le lien
    retourAccueil.addEventListener("mouseout", () => {
        retourAccueil.classList.remove("hover");
    });
});

// Sélectionnez l'élément où vous souhaitez afficher "PROJETS"
const element = document.getElementById("Projet");

// Texte à afficher lettre par lettre
const texte = "PROJETS";
let index = 0;

// Fonction pour afficher la lettre suivante avec une animation de fondu
function afficherLettre() {
    if (index < texte.length) {
        const lettre = texte[index];
        const lettreSpan = document.createElement("span");
        lettreSpan.textContent = lettre;
        lettreSpan.style.opacity = 0;
        element.appendChild(lettreSpan);
        index++;

        // Animation de fondu
        setTimeout(() => {
            lettreSpan.style.opacity = 1;
            afficherLettre();
        }, 200); // Délai entre l'affichage de chaque lettre
    }
}

// Démarrer l'animation après 3 secondes (3000 millisecondes)
setTimeout(afficherLettre, 2000);

const images = document.querySelectorAll(".image-container");

function afficherImageSuivante(index) {
    images[index].style.opacity = 0; // Masquer l'image actuelle
    images[(index + 1) % images.length].style.opacity = 1; // Afficher l'image suivante
}

// Masquer toutes les images au départ
images.forEach((image, index) => {
    image.style.opacity = 0;
});

// Démarrer l'animation d'images après 5 secondes (5000 millisecondes)
setTimeout(() => {
    images[0].style.opacity = 1; // Afficher la première image
    setInterval(() => {
        afficherImageSuivante([...images].findIndex((image) => parseFloat(getComputedStyle(image).opacity) === 1));
    }, 2000); // Changer d'image toutes les 2 secondes
}, 5000);

// 1 premier texte
const textContainer = document.getElementById('text-container');
const textdef = "Details:";
const text1 = "Ce projet a été le premier que j'aie eu à développer lorsque j'ai eu les bases de certains langages de programmation. C'est un site qui s'occupe de location de voiture...";
const textdesc = "Outils:";
const text2 = "Pour ce projet j'ai eu à utiliser le HTML pour la mise en page, le CSS pour tous ce qui est couleur... et le JS pour son dynamisme, j'ai utlisé sublime texte mais par la suite VS code était mieux.";
let currentText = 1; // Indique quel texte est en cours d'affichage (1 ou 2)
let currentChar = 0; // Indique la position actuelle de la lettre

function typeText() {
    let text = currentText === 1 ? textdef + '\n\n' + text1 : textdesc + '\n\n' + text2;
    if (currentChar < text.length) {
        textContainer.textContent += text.charAt(currentChar);
        currentChar++;
        setTimeout(typeText, 50); // Vitesse de frappe (50 millisecondes par lettre)
    } else {
        // Le texte en cours est terminé, passez au texte suivant
        setTimeout(clearText, 3500); // Attendez 3.5 secondes avant de supprimer le texte actuel
    }
}

function clearText() {
    textContainer.textContent = '';
    currentText = currentText === 1 ? 2 : 1; // Passez au texte suivant
    currentChar = 0;
    setTimeout(typeText, 50); // Commencez à taper le nouveau texte
}

setTimeout(typeText, 6000); // Attendez 20 secondes avant de commencer l'affichage

//section2

const images2 = document.querySelectorAll(".image2-container2");

function afficherImageSuivanteS(index) {
    images2[index].style.opacity = 0; // Masquer l'image actuelle
    images2[(index + 1) % images2.length].style.opacity = 1; // Afficher l'image suivante
}

// Masquer toutes les images au départ
images2.forEach((image, index) => {
    image.style.opacity = 0;
});

// Démarrer l'animation d'images après 5 secondes (5000 millisecondes)
setTimeout(() => {
    images2[0].style.opacity = 1; // Afficher la première image
    setInterval(() => {
        afficherImageSuivanteS([...images2].findIndex((image) => parseFloat(getComputedStyle(image).opacity) === 1));
    }, 2000); // Changer d'image toutes les 2 secondes
}, 15000);

//texte2
const textContainer2 = document.getElementById('text-container1');
const textdeff = "Details:";
const text22 = "Ce projet a été réalisé l'année dernière au deuxième semestre,c'est un projet de gestion de photo une galérie pour être précis, le photographe peut prendre toutes sortes de photos et les stockées quelque part...";
const textdesc22 = "Outils:";
const text222 = "Pour ce projet, j'ai eu à utiliser le HTML pour la mise en page, le CSS pour tout ce qui est couleur... et le PHP pour pouvoir interagir avec la base de données, j'ai utilisé Visual Studio pour le développement et comme serveur web WAMP.";
let currentText2 = 1; // Indique quel texte est en cours d'affichage (1 ou 2)
let currentChar2 = 0; // Indique la position actuelle de la lettre

function typeText2() {
    let text = currentText2 === 1 ? textdeff + '\n\n' + text22 : textdesc22 + '\n\n' + text222;
    if (currentChar2 < text.length) {
        textContainer2.textContent += text.charAt(currentChar2);
        currentChar2++;
        setTimeout(typeText2, 50); // Vitesse de frappe (50 millisecondes par lettre)
    } else {
        // Le texte en cours est terminé, passez au texte suivant
        setTimeout(clearText2, 3500); // Attendez 3.5 secondes avant de supprimer le texte actuel
    }
}

function clearText2() {
    textContainer2.textContent = '';
    currentText2 = currentText2 === 1 ? 2 : 1; // Passez au texte suivant
    currentChar2 = 0;
    setTimeout(typeText2, 50); // Commencez à taper le nouveau texte
}

setTimeout(typeText2, 16000); // Attendez 6 secondes avant de commencer l'affichage


//section2

const images3 = document.querySelectorAll(".image3-container3");

function afficherImageSuivante3(index) {
    images3[index].style.opacity = 0; // Masquer l'image actuelle
    images3[(index + 1) % images3.length].style.opacity = 1; // Afficher l'image suivante
}

// Masquer toutes les images au départ
images3.forEach((image, index) => {
    image.style.opacity = 0;
});

// Démarrer l'animation d'images après 5 secondes (5000 millisecondes)
setTimeout(() => {
    images3[0].style.opacity = 1; // Afficher la première image
    setInterval(() => {
        afficherImageSuivante3([...images3].findIndex((image) => parseFloat(getComputedStyle(image).opacity) === 1));
    }, 2000); // Changer d'image toutes les 2 secondes
}, 27000);

//texte2
const textContainer3 = document.getElementById('text-container2');
const textdefff = "Details:";
const text33 = "Ce projet a été réalisé l'année dernière au deuxième semestre,c'est un site de gestion de restaurants où tous les clients peuvent choisir un restaurant, voir les différents  plats que sert ce dernier avec ces horaies d'ouvertures, il est même possible ils laissent des commentaires sur le type de cuisine, mais il n'est pas complèment achevé...";
const textdesc33 = "Outils:";
const text333 = "Pour ce projet, j'ai eu à utiliser le HTML pour la mise en page, le CSS pour tout ce qui est couleur... et le PHP pour pouvoir interagir avec la base de données, j'ai utilisé Visual Studio pour le développement et comme serveur web WAMP.";
let currentText3 = 1; // Indique quel texte est en cours d'affichage (1 ou 2)
let currentChar3 = 0; // Indique la position actuelle de la lettre

function typeText3() {
    let text = currentText3 === 1 ? textdefff + '\n\n' + text33 : textdesc33 + '\n\n' + text333;
    if (currentChar3 < text.length) {
        textContainer3.textContent += text.charAt(currentChar3);
        currentChar3++;
        setTimeout(typeText3, 50); // Vitesse de frappe (50 millisecondes par lettre)
    } else {
        // Le texte en cours est terminé, passez au texte suivant
        setTimeout(clearText3, 3500); // Attendez 3.5 secondes avant de supprimer le texte actuel
    }
}

function clearText3() {
    textContainer3.textContent = '';
    currentText3 = currentText3 === 1 ? 2 : 1; // Passez au texte suivant
    currentChar3 = 0;
    setTimeout(typeText3, 50); // Commencez à taper le nouveau texte
}

setTimeout(typeText3, 28000); // Attendez 6 secondes avant de commencer l'affichage

// Fait apparaître le pied de page avec un effet de scintillement
const footerContent = document.querySelector(".footer-content");

function fadeIn() {
    footerContent.style.opacity = "1";
}

setTimeout(fadeIn, 30000); // Attendez 2 secondes avant d'afficher le pied de page