// constante globale ***************************************************************
const pseudo = document.getElementById("pseudo"); // input pseudo
const submit_pseudo = document.getElementById("envoyer_pseudo"); // bouton d'envoie du pseudo
const bonjour_pseudo = document.getElementById("bonjour_pseudo"); // paragraphe disant bonjour + le pseudo saisis

const section_hidden = document.getElementById("section_hidden"); // la section
const formulaire = document.getElementById("formulaire"); // le formulaire
const footer = document.getElementById("footer"); // le footer;

let partieJoueur1 = true; // partie joueur 1 activer 
let partieJoueur2;
let partieFinale;


const hidden_table = [...document.getElementsByClassName("hidden_table")];

// on appelle le formulaire dés le départ
form();

// function pour aficher le formulaire à chaque click sur le bouton
function form() {

    // la section et le footer sont cacher à chaque fois que le formulaire
    section_hidden.classList.add("section_hidden");
    formulaire.classList.remove("hidden");
    footer.classList.add("hidden");
    pseudo.value = "";
    bonjour_pseudo.innerText = "";
}

let pseudoArray = []; // tableau contenant les pseudo

// event sur le bouton pour valider le formulaire
submit_pseudo.addEventListener("click", () => {

    if (partieFinale != true) {
        if (pseudo.value != "" || pseudo.value == undefined) {
            pseudoArray.push(pseudo.value);
            bonjour_pseudo.innerText = "Bonjour " + pseudo.value + " c'est à toi de jouer ! ";
            formulaire.classList.add("hidden");
            section_hidden.classList.remove("section_hidden");
            footer.classList.remove("hidden");
        }
    } else if (partieFinale == true) {
        formulaire.classList.add("hidden");
        section_hidden.classList.remove("section_hidden");
        footer.classList.remove("hidden");
        const th = [...document.querySelectorAll("th.First")]
        th.forEach(element => {
            element.classList.add("padding");
        })
    }
})

// constant pour chaque element dont j'aurais bessoin
const titre = [...document.getElementsByClassName("titre")];
const table = [...document.getElementsByClassName("hidden")];

const questions1 = document.getElementById("questions1");
const questions2 = document.getElementById("questions2");
const questions3 = document.getElementById("questions3");
const questions4 = document.getElementById("questions4");
const questions5 = document.getElementById("questions5");
const questions6 = document.getElementById("questions6");
const questions7 = document.getElementById("questions7");
const questions8 = document.getElementById("questions8");
const questions9 = document.getElementById("questions9");
const questions10 = document.getElementById("questions10");
const questions11 = document.getElementById("questions11");
const questions12 = document.getElementById("questions12");
const questions13 = document.getElementById("questions13");


// constante contenant tout les id de chaque div
const questionArray = [questions1, questions2, questions3, questions4, questions5, questions6, questions7, questions8, questions9, questions10, questions11, questions12, questions13];

function questionsToggle() {
    questionArray.forEach(element => {
        element.children[0].addEventListener("click", () => {
            element.children[1].classList.toggle("hidden_table");
        })
    })
}

questionsToggle();

const checkbox1 = [...document.getElementsByClassName("checkbox1")];
const checkbox2 = [...document.getElementsByClassName("checkbox2")];

let reponsesJoueur1 = 0; // compter le nombre de réponses de joueur1
let reponsesJoueur2 = 0; // compter le nombre de réponses de joueur2

checkbox1.forEach(element => {
    element.addEventListener("click", () => {
        if (element.checked == true) {
            reponsesJoueur1++;
            console.log(reponsesJoueur1)
        }
    })
})

checkbox2.forEach(element => {
    element.addEventListener("click", () => {
        if (element.checked == true) {
            reponsesJoueur2++;
            console.log(reponsesJoueur2)
        }
    })
})

const validation_Formulaire = document.getElementById("validation_form");
const First = [...document.getElementsByClassName("First")];
const Autrui = [...document.getElementsByClassName("Autrui")];

validation_Formulaire.addEventListener("click", () => {
    if (partieJoueur1 == true) {
        if (reponsesJoueur1 < 13) {
            alert("Merci de répondre à toutes les questions");
        } else {
            partieJoueur1 = false;
            partieJoueur2 = true;
            hidden_table.forEach(element => {
                element.classList.add("hidden_table");
            })
            First.forEach(element => {
                element.classList.add("hidden");
            })
            Autrui.forEach(element => {
                element.classList.remove("Autrui");
            })
            form();
        }
    } else if (partieJoueur2 == true) {
        if (reponsesJoueur2 < 13) {
            alert("Merci de répondre à toutes les questions");
        } else {
            partieJoueur2 = false;
            partieFinale = true;

            hidden_table.forEach(element => {
                element.classList.add("hidden_table");
            })
            First.forEach(element => {
                element.classList.remove("hidden");
            })
            Autrui.forEach(element => {
                element.classList.remove("hidden");

            })
            form();
            pseudo.remove();
            formulaire.textContent = "Valider pour visualiser vos résultats";
            formulaire.appendChild(submit_pseudo);
            submit_pseudo.innerText = "Valider";
            bonjour_pseudo.innerText = "Félicitation ! " + pseudoArray[0] + ", " + pseudoArray[1] + ", " + "voici vos résultats : ";
            validation_Formulaire.remove();

        }
    }

})