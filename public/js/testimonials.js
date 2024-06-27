document.addEventListener('DOMContentLoaded', () => {
    const testimonials = [
        {
            name: "Juan Pérez",
            comment: "Microsoft products have significantly improved our productivity.",
            stars: 5
        },
        {
            name: "María García",
            comment: "Their support and services are top-notch.",
            stars: 5
        },
        {
            name: "Carlos Rodríguez",
            comment: "I love the innovation and quality of their software.",
            stars: 5
        }
    ];

    const testimonialContainer = document.getElementById('testimonial-container');

    testimonials.forEach((testimonial, index) => {
        const col = document.createElement('div');
        col.className = `col-md-4 wow animate__fadeInUp`;
        col.setAttribute('data-wow-delay', `${index * 0.2}s`);

        const card = document.createElement('div');
        card.className = 'card text-dark mb-3 shadow';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = testimonial.comment;

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = testimonial.name;

        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars text-center';

        for (let i = 0; i < testimonial.stars; i++) {
            const star = document.createElement('i');
            star.className = 'fas fa-star text-warning';
            starsContainer.appendChild(star);
        }

        cardBody.appendChild(cardText);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(starsContainer);
        card.appendChild(cardBody);
        col.appendChild(card);
        testimonialContainer.appendChild(col);
    });

    // Initialize WOW.js for animation
    new WOW().init();
});
