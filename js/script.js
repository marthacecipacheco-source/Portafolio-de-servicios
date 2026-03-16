document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Contact Form Simulation
    const contactForm = document.getElementById('contact-form');
    const formMsg = document.getElementById('form-msg');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerText;

            // Loading state
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;

            // Simulate server delay
            setTimeout(() => {
                formMsg.innerText = '¡Mensaje enviado con éxito! Me pondré en contacto pronto.';
                formMsg.style.color = '#10b981'; // Success Green

                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                contactForm.reset();

                // Clear message after 5 seconds
                setTimeout(() => {
                    formMsg.innerText = '';
                }, 5000);
            }, 1500);
        });
    }

    // Header Shadow on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Dashboard animation logic (subtle)
    const lines = document.querySelectorAll('.dash-line');
    let widthValues = ['100%', '60%', '40%'];

    // Pulse animation logic
    setInterval(() => {
        lines.forEach((line, index) => {
            line.style.opacity = '0.7';
            setTimeout(() => {
                line.style.opacity = '1';
            }, 500);
        });
    }, 3000);
});
