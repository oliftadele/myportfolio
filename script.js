// Projects Data
const projects = [
    {
        title: "Fast Afaan Oromoo Facebook Scraper",
        description: "A modular, high-speed, and intelligent Facebook scraper designed specifically for extracting Afaan Oromoo content.",
        technologies: ["HTML5", "CSS3", "JavaScript","Python", "Flask","Playwright"],
        github: "https://github.com/oliftadele/weather-dashboard",
        live: "#",
        image: "https://8upload.com/image/2c6a44023490a826/banner_.png"
    },
    {
        title: "Mindscape – Self Reflection Platform",
        description: "A self-reflection web app that lets users rate their life satisfaction and receive personalized advice, resource recommendations, and therapy suggestions in Addis Ababa.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/oliftadele/Mindscape",
        live: "https://ecommerce.oliftadele.com",
        image: "https://images2.imgbox.com/c7/22/fzp3DfCw_o.png"
    },
    {
        title: "ODA SBS - Oda Special Boarding School Website",
        description: "A professional, high-performance, and fully responsive multi-page website built for Oda Special Boarding School (ODA SBS) located in Adama, Oromia, Ethiopia.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/oliftadele/ODA-SBS---Oda-Special-Boarding-School-Website",
        live: "#",
        image: "https://8upload.com/image/41370e45f1a46e3f/oda_web.png"
    },
    {
        title: "Anonymous Confession & Advice Wall",
        description: "A simple web application for users to register, log in, and post anonymous confessions or advice. Users can view all posts and like them.",
        technologies: ["HTML5", "CSS3", "JavaScript","Java"],
        github: "https://github.com/oliftadele/anonymous-confession-wall",
        live: "#",
        image: "https://8upload.com/image/e6c233cc4094a5ac/Confession.png"
    }
];

// Render Projects
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projects.map((project, index) => `
        <div class="project-card reveal reveal-delay-${Math.min(index + 2, 5)}">
            <div class="project-image">
                <div class="project-number">0${index + 1}</div>
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3 class="font-display text-xl font-bold mb-3">${project.title}</h3>
                <p class="text-sm mb-4" style="color: var(--fg-muted);">${project.description}</p>
                <div class="mb-4">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <svg viewBox="0 0 24 24" style="fill: currentColor;"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        GitHub
                    </a>
                    ${project.live ? `
                    <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project-link">
                        Live View
                    </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize
renderProjects();

// Typing Effect
const typingTexts = [
    "Software Engineering Student",
    "Full Stack Developer",
    "Problem Solver",
    "Building the Future"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typingText');

function typeText() {
    if (!typingElement) return;

    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

typeText();

// Scroll Progress
const progressBar = document.getElementById('progressBar');

function updateProgressBar() {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
}

window.addEventListener('scroll', updateProgressBar);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

function toggleMobileMenu() {
    if (!hamburger || !mobileMenu || !mobileOverlay) return;
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu on link click
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && mobileMenu && mobileOverlay) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
        }
    });
});

// Form Validation
// Contact form submission is handled directly by browser POST to FormSubmit.co
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formStatus = document.getElementById('formStatus');
        const submitBtn = document.getElementById('submitBtn');
        const formData = new FormData(this);
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formStatus.className = 'mt-4 p-4 text-center rounded-md status-info show';
        formStatus.textContent = 'Preparing your message...';

        try {
            console.log('Sending form data...');
            const response = await fetch('https://formsubmit.co/ajax/oliftadele@outlook.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Server responded with an error');
            }

            const result = await response.json();
            console.log('FormSubmit Response:', result);

            if (result.success === "true" || result.success === true) {
                formStatus.className = 'mt-4 p-4 text-center rounded-md status-success show';
                formStatus.textContent = 'Message received successfully! Thanks for contacting me. I’ll get back to you soon.';
                contactForm.reset();
            } else {
                throw new Error(result.message || 'Unexpected response from server');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            formStatus.className = 'mt-4 p-4 text-center rounded-md status-error show';
            formStatus.textContent = 'Error: ' + error.message + '. (Try using Live Server if testing locally)';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
