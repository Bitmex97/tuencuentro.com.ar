/*** Advertencia */


document.addEventListener('DOMContentLoaded', function() {
    const ageWarningPopup = document.getElementById('ageWarningPopup');
    const closeAgeWarning = document.getElementById('closeAgeWarning');
    const ageWarningAccepted = localStorage.getItem('ageWarningAccepted');

    if (!ageWarningAccepted) {
        ageWarningPopup.style.display = 'flex';

        if (closeAgeWarning) {
            closeAgeWarning.addEventListener('click', function() {
                ageWarningPopup.style.display = 'none';
                localStorage.setItem('ageWarningAccepted', 'true');
            });
        }

        setTimeout(function() {
            ageWarningPopup.style.display = 'none';
            localStorage.setItem('ageWarningAccepted', 'true');
        }, 5000); // Mostrar la advertencia durante 5 segundos (ajusta según tu preferencia)
    }
});
/***** Verificar mail */
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');

    emailInput.addEventListener('input', function() {
        const emailValue = emailInput.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(emailValue)) {
            emailInput.setCustomValidity('Ingrese un correo electrónico válido');
        } else {
            emailInput.setCustomValidity('');
        }
    });
});

/***Formulario */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente

            // Obtener los valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Enviar correo (simulado aquí)
            // En un entorno real, esto requeriría una implementación del lado del servidor
            console.log('Nombre:', name);
            console.log('Correo electrónico:', email);
            console.log('Mensaje:', message);

            // Limpiar el formulario después del envío (opcional)
            contactForm.reset();
        });
    }
});

/****** Deslizar */
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}
