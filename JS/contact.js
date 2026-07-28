emailjs.init("yay5jJdbPDLYhkrm_");
const message = document.querySelector("#contact-message");

const messageArea = document.querySelector("#messagearea");
const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(event){

    // Empêche le rechargement de la page
    event.preventDefault();


    // Désactive le bouton pendant l'envoi
    const bouton = form.querySelector("button");
    bouton.disabled = true;
    bouton.textContent = "Envoi...";

    message.textContent = "";
    message.className = "";
    if(messageArea.value.trim().length >= 10){


        const captcha = document.querySelector(
            '[name="cf-turnstile-response"]'
        );
        
        if (!captcha.value) {
        
            message.textContent =
                "Veuillez valider le CAPTCHA.";
        
            message.className = "error";
        
            bouton.disabled = false;
            bouton.textContent = "Envoyer";
        
            return;
        }

        // Envoi du formulaire à EmailJS
    emailjs.sendForm(

        "service_qshw4wc",
        "template_uce7sbl",
        form

    )

    .then(function(){

        // Message de succès
        message.textContent = "✓ Votre message a bien été envoyé.";
        message.classList.add("success");

        // Vide le formulaire
        form.reset();

    })

    .catch(function(error){

        console.error(error);

        message.textContent = "Une erreur est survenue. Veuillez réessayer.";
        message.classList.add("error");

    })

    .finally(function(){

        // Réactive le bouton
        bouton.disabled = false;
        bouton.textContent = "Envoyer";

    });
    
    }else{   
        message.textContent = "Une erreur est survenue. Veuillez réessayer.";
        message.classList.add("error");

        bouton.disabled = false;
        bouton.textContent = "Envoyer";
    
        }
    });
