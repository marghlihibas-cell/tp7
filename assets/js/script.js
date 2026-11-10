

const form = document.getElementById("user-form");

const nom = document.getElementById("nom");

const email = document.getElementById("email");

const password = document.getElementById("password");

const tooltip = document.getElementById("pwd-tooltip");

const liste = document.querySelector("#dynamic-list");


password.addEventListener("focus", function() {

    password.style.borderColor = "blue";

});




password.addEventListener("blur", function() {

    password.value = password.value.trim();

});




password.addEventListener("input", function() {

    if (password.value.length < 6) {

        tooltip.style.display = "block";

        password.style.borderColor = "red";

    }

    else {

     
        tooltip.style.display = "none";

   
        password.style.borderColor = "green";

    }

});


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const nomValue = nom.value.trim();

    const emailValue = email.value.trim();

    const passwordValue = password.value.trim();


   
    if (passwordValue.length < 6) {

        alert("Le mot de passe doit contenir au moins 6 caractères.");

        password.focus();

        tooltip.style.display = "block";

        return;

    }


    const element = document.createElement("li");


    
});
