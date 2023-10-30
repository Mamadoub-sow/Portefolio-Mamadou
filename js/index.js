const responsive ={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}



$(document).ready(function(){
    
    $nav=$('.nav');
    
    $toggleCollapse=$('.toggle-collapse');
    
    $toggleCollapse.click(function(){
        
    $nav.toggleClass('collapse');
        
        
    }) 
    
    //Carousel pour le blog
    
    $('.owl-carousel').owlCarousel({
        
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive 
        
    })
    
    //Click to scroll top
    
    $('.move-up span').click(function(){
        $('html, body').animate({
            
            scrollTop:0
            
        },1500);
        
    })
    
    AOS.init();
    
        
    
    
    
});

const textElement = document.getElementById("typewriter");
const colors = ["#FFA500", "#FF8C00", "#FFD700"]; // Couleurs orange, orange foncée et orange clair
let colorIndex = 0;

function changeTextColor() {
    textElement.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

function typeWriter(text, i) {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, i);
        }, 50); // Vitesse de frappe (50 millisecondes par lettre)
    } else {
        // L'animation de frappe est terminée, vous pouvez maintenant changer la couleur du texte
        setInterval(changeTextColor, 1000); // Changez la couleur toutes les 1000 millisecondes (1 seconde)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Animation pour le premier titre
    typeWriter("Bienvenue sur mon portefolio", 0, function () {
        // Animation terminée pour le premier titre, vous pouvez effectuer des actions supplémentaires ici si nécessaire.
    });

    setTimeout(function () {
        // L'animation du premier titre est terminée, démarrez l'animation pour le deuxième titre
        textElement.innerHTML = ""; // Efface le texte précédent
        typeWriter("Moi, C'est SOW MAMADOU", 0, function () {
            // Animation terminée pour le deuxième titre, vous pouvez effectuer des actions supplémentaires ici si nécessaire.
        });
    }, 4500); // Attendez 3.5 secondes avant de démarrer la deuxième animation
});

const competencesElement = document.getElementById("competences");
const colorss = ["#FFA500", "#FFD700", "#FF8C00"]; // Couleurs orange, orange clair et orange foncée
let colorsIndex = 0;

function changeCompetencesColor() {
    competencesElement.style.color = colorss[colorIndex];
    colorIndex = (colorsIndex + 1) % colorss.length;
}

function competences(text, i) {
    if (i < text.length) {
        competencesElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            competences(text, i);
        }, 100); // Vitesse de frappe (400 millisecondes par lettre)
    } else {
        // L'animation de frappe est terminée, vous pouvez maintenant changer la couleur du texte
        setInterval(changeCompetencesColor, 1000); // Changez la couleur toutes les 1000 millisecondes (1 seconde)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Animation pour le titre "COMPETENCES"
    competences("MES COMPETENCES", 0);
});
//la section 
document.addEventListener("DOMContentLoaded", function () {
    const myImage = document.getElementById("myImage");
    const displayText = document.getElementById("displayText");

    // Afficher l'image initialement
    myImage.style.display = "block";

    // Après 3 secondes, ajouter la classe d'animation de fondu
    setTimeout(function () {
        myImage.classList.add("fade-out");
    }, 3000); // 3 secondes (3000 millisecondes)

    // Après 5 secondes, masquer l'image
    setTimeout(function () {
        myImage.style.display = "none";

        // Ajouter la classe d'apparition au texte
        displayText.classList.add("appear");
    }, 5000); // 5 secondes (5000 millisecondes)
});
//le texte après la disparition de l'image

const textElement2 = document.getElementById("text");
const colors2 = ["#FFA500", "#FF8C00", "#FFD700"]; // Couleurs orange, orange foncée et orange clair
let colorIndex2 = 0;

function changeTextColor2() {
    textElement2.style.color = colors2[colorIndex2];
    colorIndex2 = (colorIndex2 + 1) % colors2.length;
}

function texte(text, i, callback) {
    if (i < text.length) {
        textElement2.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            texte(text, i, callback);
        }, 50); // Vitesse de frappe (50 millisecondes par lettre)
    } else {
        // L'animation de frappe est terminée, vous pouvez maintenant changer la couleur du texte
        setInterval(changeTextColor2, 1000); // Changez la couleur toutes les 1000 millisecondes (1 seconde)
        callback(); // Appeler la fonction de rappel lorsque l'animation est terminée
    }
}
const mot= "HTML 5/CSS 3";
document.addEventListener("DOMContentLoaded", function () {
    // Animation pour le premier titre
    texte("", 0, function () {
        // Animation terminée pour le premier titre, vous pouvez effectuer des actions supplémentaires ici si nécessaire.
    });

    setTimeout(function () {
        // L'animation du premier titre est terminée, démarrez l'animation pour le deuxième titre
        textElement2.innerHTML = ""; // Efface le texte précédent
        texte(mot, 0, function () {
            // Animation terminée pour le deuxième titre, vous pouvez effectuer des actions supplémentaires ici si nécessaire.
        });
    }, 3500); // Attendez 3.5 secondes avant de démarrer la deuxième animation
});

const mot2 = "FRAMEWORKS";
const textElement4 = document.getElementById("text2");
const colors4 = ["#FFA500", "#FF8C00", "#FFD700"];
let colorIndex4 = 0;

function changeTextColor4() {
    textElement4.style.color = colors4[colorIndex4];
    colorIndex4 = (colorIndex4 + 1) % colors4.length;
}

function texte2(text, i, callback) {
    if (i < text.length) {
        textElement4.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            texte2(text, i, callback);
        }, 50);
    } else {
        setInterval(changeTextColor4, 1000);
        callback();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    texte2("", 0, function () {
        // Animation terminée pour le premier titre
    });

    setTimeout(function () {
        textElement4.innerHTML = "";
        texte2(mot2, 0, function () {
            // Animation terminée pour le deuxième titre
        });
    }, 3500);
});
const mot1 = "PHP/MYSQL/JS";
const textElement3 = document.getElementById("text1");
const colors3 = ["#FFA500", "#FF8C00", "#FFD700"];
let colorIndex3 = 0;

function changeTextColor3() {
    textElement3.style.color = colors3[colorIndex3];
    colorIndex3 = (colorIndex3 + 1) % colors3.length;
}

function texte1(text, i, callback) {
    if (i < text.length) {
        textElement3.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            texte1(text, i, callback);
        }, 50);
    } else {
        setInterval(changeTextColor3, 1000);
        callback();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    texte1("", 0, function () {
        // Animation terminée pour le premier titre
    });

    setTimeout(function () {
        textElement3.innerHTML = "";
        texte1(mot1, 0, function () {
            // Animation terminée pour le deuxième titre
        });
    }, 3500);
});

//image 2
document.addEventListener("DOMContentLoaded", function () {
    const myImage1 = document.getElementById("myImage1");
    const displayText = document.getElementById("displayText1");

    // Afficher l'image initialement
    myImage1.style.display = "block";

    // Après 8 secondes, ajouter la classe d'animation de fondu
    setTimeout(function () {
        myImage1.classList.add("fade-out");
    }, 10000); // 8 secondes (8000 millisecondes)

    // Après 10 secondes, masquer l'image
    setTimeout(function () {
        myImage1.style.display = "none";

        // Ajouter la classe d'apparition au texte
        displayText.classList.add("appearr");
    }, 10000); // 10 secondes (10000 millisecondes)
});

const mot3 = "EEn ce qui concerne le POO:";
const textElement5 = document.getElementById("text3");
const colors5 = ["#FFA500", "#FF8C00", "#FFD700"];
let colorIndex5 = 0;

function changeTextColor5() {
    textElement5.style.color = colors5[colorIndex3];
    colorIndex5 = (colorIndex3 + 1) % colors5.length;
}

function texte5(text, i, callback) {
    if (i < text.length) {
        textElement5.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            texte5(text, i, callback);
        }, 50);
    } else {
        setInterval(changeTextColor5, 1000);
        callback();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    texte5("", 0, function () {
        // Animation terminée pour le premier titre
    });

    setTimeout(function () {
        textElement5.innerHTML = "";
        texte5(mot3, 0, function () {
            // Animation terminée pour le deuxième titre
        });
    }, 10000);
});

const mot4 = " • Connaissance des langages C++/C#";
const textElement55 = document.getElementById("text4");
const colors55 = ["#FFA500", "#FF8C00", "#FFD700"];
let colorIndex55 = 0;

function changeTextColor55() {
    textElement55.style.color = colors55[colorIndex55];
    colorIndex55 = (colorIndex55 + 1) % colors55.length;
}

function texte55(text, i, callback) {
    if (i < text.length) {
        textElement55.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            texte55(text, i, callback);
        }, 50);
    } else {
        setInterval(changeTextColor55, 1000);
        callback();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    texte55("", 0, function () {
        // Animation terminée pour le premier titre
    });

    setTimeout(function () {
        textElement5.innerHTML = "";
        texte55(mot4, 0, function () {
            // Animation terminée pour le deuxième titre
        });
    }, 10000);
});

const mot44 = " • Connaissance des langages JAVA/PYTHON";
const textElement555 = document.getElementById("text5");
const colors555 = ["#FFA500", "#FF8C00", "#FFD700"];
let colorIndex555 = 0;

function changeTextColor555() {
    textElement555.style.color = colors55[colorIndex555];
    colorIndex555 = (colorIndex555 + 1) % colors555.length;
}

function texte555(text, i, callback) {
    if (i < text.length) {
        textElement555.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            texte555(text, i, callback);
        }, 50);
    } else {
        setInterval(changeTextColor555, 1000);
        callback();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    texte555("", 0, function () {
        // Animation terminée pour le premier titre
    });

    setTimeout(function () {
        textElement5.innerHTML = "";
        texte555(mot44, 0, function () {
            // Animation terminée pour le deuxième titre
        });
    }, 10000);
});

const mot5 = " • Connaissance des langages NET/RUBY";
const textElement6 = document.getElementById("text6");
const colors6 = ["#FFA500", "#FF8C00", "#FFD700"];
let colorIndex6 = 0;

function changeTextColor6() {
    textElement6.style.color = colors6[colorIndex6];
    colorIndex6 = (colorIndex6 + 1) % colors6.length;
}

function texte6(text, i, callback) {
    if (i < text.length) {
        textElement6.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            texte6(text, i, callback);
        }, 50);
    } else {
        setInterval(changeTextColor6, 1000);
        callback();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    texte6("", 0, function () {
        // Animation terminée pour le premier titre
    });

    setTimeout(function () {
        textElement5.innerHTML = "";
        texte6(mot5, 0, function () {
            // Animation terminée pour le deuxième titre
        });
    }, 10000);
});
// image 2 

document.addEventListener("DOMContentLoaded", function () {
    const myImage2 = document.getElementById("myImage2");
    const displayText = document.getElementById("displayText2");

    // Afficher l'image initialement
    myImage1.style.display = "block";

    // Après 8 secondes, ajouter la classe d'animation de fondu
    setTimeout(function () {
        myImage2.classList.add("fade-out");
    }, 12000); // 8 secondes (8000 millisecondes)

    // Après 10 secondes, masquer l'image
    setTimeout(function () {
        myImage2.style.display = "none";

        // Ajouter la classe d'apparition au texte
        displayText.classList.add("appear2");
    }, 13000); // 10 secondes (10000 millisecondes)
});

// texte 7

const mot7 = "Divers:";
const textElement7 = document.getElementById("text7");
const colors7 = ["#FFA500", "#FF8C00", "#FFD700"];
let colorIndex7 = 0;

function changeTextColor7() {
    textElement7.style.color = colors7[colorIndex7];
    colorIndex7 = (colorIndex7 + 1) % colors7.length;
}

function texte7(text, i, callback) {
    if (i < text.length) {
        textElement7.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            texte7(text, i, callback);
        }, 50);
    } else {
        setInterval(changeTextColor7, 1000);
        callback();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    texte7("", 0, function () {
        // Animation terminée pour le premier titre
    });

    setTimeout(function () {
        textElement7.innerHTML = "";
        texte7(mot7, 0, function () {
            // Animation terminée pour le deuxième titre
        });
    }, 15000);
});

// texte 8
const mot8 = "• Connaissance des langages C/GO";
const textElement8 = document.getElementById("text8");
const colors8 = ["#FFA500", "#FF8C00", "#FFD700"];
let colorIndex8 = 0;

function changeTextColor8() {
    textElement8.style.color = colors8[colorIndex8];
    colorIndex8 = (colorIndex8 + 1) % colors8.length;
}

function texte8(text, i, callback) {
    if (i < text.length) {
        textElement8.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            texte8(text, i, callback);
        }, 50);
    } else {
        setInterval(changeTextColor8, 1000);
        callback();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    texte8("", 0, function () {
        // Animation terminée pour le premier titre
    });

    setTimeout(function () {
        textElement8.innerHTML = "";
        texte8(mot8, 0, function () {
            // Animation terminée pour le deuxième titre
        });
    }, 15500);
});

//texte 9
// texte 8
const mot9 = "• Connaissance de GIT/WINDEV";
const textElement9 = document.getElementById("text9");
const colors9 = ["#FFA500", "#FF8C00", "#FFD700"];
let colorIndex9 = 0;

function changeTextColor9() {
    textElement9.style.color = colors9[colorIndex9];
    colorIndex9 = (colorIndex9 + 1) % colors9.length;
}

function texte9(text, i, callback) {
    if (i < text.length) {
        textElement9.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            texte9(text, i, callback);
        }, 50);
    } else {
        setInterval(changeTextColor9, 1000);
        callback();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    texte9("", 0, function () {
        // Animation terminée pour le premier titre
    });

    setTimeout(function () {
        textElement9.innerHTML = "";
        texte9(mot9, 0, function () {
            // Animation terminée pour le deuxième titre
        });
    }, 16500);
});

//text 10

const mot10 = "• Connaissance de Symfony/Laravel";
const textElement10 = document.getElementById("text10");
const colors10 = ["#FFA500", "#FF8C00", "#FFD700"];
let colorIndex10 = 0;

function changeTextColor10() {
    textElement10.style.color = colors10[colorIndex10];
    colorIndex10 = (colorIndex10 + 1) % colors10.length;
}

function texte10(text, i, callback) {
    if (i < text.length) {
        textElement10.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            texte10(text, i, callback);
        }, 50);
    } else {
        setInterval(changeTextColor10, 1000);
        callback();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    texte10("", 0, function () {
        // Animation terminée pour le premier titre
    });

    setTimeout(function () {
        textElement10.innerHTML = "";
        texte10(mot10, 0, function () {
            // Animation terminée pour le deuxième titre
        });
    }, 17500);
});

//vieille
const vieilleElement = document.getElementById("vieille");
const color = ["#FFA500", "#FFD700", "#FF8C00"]; // Couleurs orange, orange clair et orange foncée
let colorssIndex = 0;

function changevieilleColor() {
    vieilleElement.style.color = color[colorssIndex];
    colorIndex = (colorssIndex + 1) % color.length;
}

function vieille(text, i) {
    if (i < text.length) {
        vieilleElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            vieille(text, i);
        }, 3000); // Vitesse de frappe (400 millisecondes par lettre)
    } else {
        // L'animation de frappe est terminée, vous pouvez maintenant changer la couleur du texte
        setInterval(changevieilleColor, 1000); // Changez la couleur toutes les 1000 millisecondes (1 seconde)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Animation pour le titre "COMPETENCES"
    vieille("VIEILLE", 0);
});

// vielle technologique

const letters = document.querySelectorAll(".letter");
const circleText = document.getElementById("circle-text");
const totalLetters = letters.length;

letters.forEach((letter, index) => {
    const angle = (index / totalLetters) * 2 * Math.PI; // Répartir les lettres uniformément autour du cercle
    const radius = 80; // Rayon du cercle

    // Calculer les positions x et y pour chaque lettre
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    letter.style.transform = `translate(${x}px, ${y}px)`;
    letter.style.transition = `transform 2s ease-in-out`;
});

// Démarrez l'animation après un court délai
setTimeout(() => {
    letters.forEach((letter) => {
        letter.style.transform = "translate(0, 0)";
    });
}, 500);

const textContainer = document.getElementById('text-container');
const textdef = "Definition:";
const text1 = "La veille technologique ou veille scientifique et technique consiste à s'informer de façon systématique sur les techniques les plus récentes et surtout sur leur mise à disposition commerciale.";
const textdesc = "Description:";
const text2 = "Pour ma part j'utilise divers sites pour m'informer ou avoir une deuxième opinion des choses, ces sites sont entre autres OpenClassRoom, Comment ça marche, www.school.com... Il y a aussi le site WaytolearnX qui renferme presque tous les domaines de l'informatique.";
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
        setTimeout(clearText, 3000); // Attendez 2 secondes avant de supprimer le texte actuel
    }
}

function clearText() {
    textContainer.textContent = '';
    currentText = currentText === 1 ? 2 : 1; // Passez au texte suivant
    currentChar = 0;
    setTimeout(typeText, 50); // Commencez à taper le nouveau texte
}

setTimeout(typeText, 20000); // Attendez 20 secondes avant de commencer l'affichage

// footer

// Fait apparaître le pied de page avec un effet de scintillement
const footerContent = document.querySelector(".footer-content");

function fadeIn() {
    footerContent.style.opacity = "1";
}

setTimeout(fadeIn, 20000); // Attendez 2 secondes avant d'afficher le pied de page

