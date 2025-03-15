document.addEventListener('DOMContentLoaded', () => {
	// Animation for project cards
	const projectCards = document.querySelectorAll('.project-card');
	const sections = document.querySelectorAll('section');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = 1;
				entry.target.style.transform = 'translateY(0)';
			}
		});
	}, { threshold: 0.1 });

	projectCards.forEach(card => {
		card.style.opacity = 0;
		card.style.transform = 'translateY(20px)';
		card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
		observer.observe(card);
	});

	sections.forEach(section => {
		observer.observe(section);
	});
});


document.addEventListener('DOMContentLoaded', () => {
	const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
	const navLinks = document.querySelector('.nav-links');

	// Toggle mobile menu
	mobileMenuToggle.addEventListener('click', () => {
		navLinks.classList.toggle('active');

		// Change icon based on menu state
		const icon = mobileMenuToggle.querySelector('i');
		if (navLinks.classList.contains('active')) {
			icon.classList.remove('fa-bars');
			icon.classList.add('fa-times');
		} else {
			icon.classList.remove('fa-times');
			icon.classList.add('fa-bars');
		}
	});

	// Close menu when a link is clicked
	document.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', () => {
			if (window.innerWidth <= 768) {
				navLinks.classList.remove('active');
				const icon = mobileMenuToggle.querySelector('i');
				icon.classList.remove('fa-times');
				icon.classList.add('fa-bars');
			}
		});
	});

	// Close menu when clicking outside
	document.addEventListener('click', (e) => {
		if (
			window.innerWidth <= 768 &&
			navLinks.classList.contains('active') &&
			!navLinks.contains(e.target) &&
			!mobileMenuToggle.contains(e.target)
		) {
			navLinks.classList.remove('active');
			const icon = mobileMenuToggle.querySelector('i');
			icon.classList.remove('fa-times');
			icon.classList.add('fa-bars');
		}
	});

	// Handle resize events
	window.addEventListener('resize', () => {
		if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
			navLinks.classList.remove('active');
			const icon = mobileMenuToggle.querySelector('i');
			icon.classList.remove('fa-times');
			icon.classList.add('fa-bars');
		}
	});
});
