const form = document.getElementById('form');

function validateForm(event) {
    event.preventDefault(); 

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let postalCodeRegex = /^\d{5}$/;
    let secSocialeRegex = /^[12]\d{12}$/;
    let nomprenomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
    let passeportRegex = /^[0-9]{2}[A-z]{2}[0-9]{5}$/;
    let numeroPasseportInput = document.getElementById('numeroPasseport').value;
    let emailInput = document.getElementById('email').value;
    let codePostalInput = document.getElementById('codePostal').value;
    let numeroSecuriteInput = document.getElementById('numeroSecurite').value;
    let prenomInput = document.getElementById('prenom').value;
    let nomInput = document.getElementById('nom').value;
    let dateDelivrance = document.getElementById("dateDelivrancePasseport").value;
    let dateValidite = document.getElementById("dateValiditePasseport").value;
    
    if (!emailRegex.test(emailInput)) {
        alert('Adresse email non-valide.');
    }

    if (!postalCodeRegex.test(codePostalInput)) {
        alert('Code postal non-valide.');    
    }

    if (!secSocialeRegex.test(numeroSecuriteInput)) {
        alert('Numéro de sécurité sociale non-valide.');
    }

    if (!nomprenomRegex.test(prenomInput)) {
        alert('Prénom non-valide');
    }

    if (!nomprenomRegex.test(nomInput)) {
        alert('Nom non-valide');
    }

    if (!passeportRegex.test(numeroPasseportInput)) {
      alert('Numero passeport non-valide')
    }

    if (dateDelivrance > dateValidite) {
      alert("La date de délivrance ne doit pas depasser la date de validité.");
    }
}
form.addEventListener('submit', validateForm);

