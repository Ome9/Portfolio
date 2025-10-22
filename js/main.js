// ========================================
// Portfolio Main JavaScript
// Using anime.js, xterm.js, particles.js, typed.js, and AOS
// ========================================

// Wait for all libraries to load
window.addEventListener('load', function() {

// ========================================
// Initialize AOS (Animate On Scroll)
// ========================================
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        easing: 'ease-out-cubic',
        mirror: true
    });
}

// ========================================
// Theme Toggle Functionality
// ========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = body.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Animate theme toggle button
    if (typeof anime !== 'undefined') {
        anime({
            targets: themeToggle,
            rotate: '1turn',
            duration: 500,
            easing: 'easeInOutQuad'
        });
    }
    
    // Reinitialize particles with new theme colors
    initParticles();
});

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate menu items
    if (navMenu.classList.contains('active') && typeof anime !== 'undefined') {
        anime({
            targets: '.nav-menu li',
            translateX: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 500,
            easing: 'easeOutQuad'
        });
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Smooth Scroll & Active Nav Link
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Update active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.pageYOffset;
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    // Handle last section when near bottom
    if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 50) {
        currentSection = 'contact';
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Intersection Observer for navigation active state
const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -35% 0px',
    threshold: 0
};

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, navObserverOptions);

sections.forEach(section => navObserver.observe(section));

// ========================================
// Particles.js Configuration
// ========================================
function initParticles() {
    const isDark = body.getAttribute('data-theme') === 'dark';
    const particleColor = isDark ? '#00ff88' : '#00c46a';
    const lineColor = isDark ? '#00ff88' : '#00c46a';
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: particleColor
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: lineColor,
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// Initialize particles on load
initParticles();

// ========================================
// Xterm.js Terminal Configuration
// ========================================
if (typeof Terminal !== 'undefined') {
    const terminal = new Terminal({
        cursorBlink: true,
        cursorStyle: 'block',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 13,
        rows: 16,
        cols: 60,
        scrollback: 0,
        theme: {
            background: 'transparent',
            foreground: '#e4e7eb',
            cursor: '#00ff88',
            black: '#0a0e27',
            red: '#ff0055',
            green: '#00ff88',
            yellow: '#ffbd2e',
            blue: '#00d9ff',
            magenta: '#ff00ff',
            cyan: '#00ffff',
            white: '#e4e7eb',
            brightBlack: '#4a5568',
            brightRed: '#ff5f87',
            brightGreen: '#5fff87',
            brightYellow: '#ffff5f',
            brightBlue: '#5fafff',
            brightMagenta: '#ff5fff',
            brightCyan: '#5fffff',
            brightWhite: '#ffffff'
        },
        allowTransparency: true,
        convertEol: true,
        disableStdin: true
    });

terminal.open(document.getElementById('terminal'));

// Terminal commands simulation
const commands = [
    { delay: 500, text: '$ whoami', color: '\x1b[1;32m' },
    { delay: 900, text: 'omkar_choudhury', color: '\x1b[0m' },
    { delay: 1300, text: '', color: '' },
    { delay: 1700, text: '$ cat profile.txt', color: '\x1b[1;32m' },
    { delay: 2100, text: '> Cybersecurity Enthusiast', color: '\x1b[1;36m' },
    { delay: 2500, text: '> AI/ML Engineer', color: '\x1b[1;36m' },
    { delay: 2900, text: '> Full-Stack Developer', color: '\x1b[1;36m' },
    { delay: 3300, text: '', color: '' },
    { delay: 3700, text: '$ ls achievements/', color: '\x1b[1;32m' },
    { delay: 4100, text: 'PicoCTF-87th_rank  UST-GenCys-Top50', color: '\x1b[1;34m' },
    { delay: 4500, text: '', color: '' },
    { delay: 4900, text: '$ echo $STATUS', color: '\x1b[1;32m' },
    { delay: 5300, text: 'Available for opportunities', color: '\x1b[1;33m' },
    { delay: 5700, text: '', color: '' },
    { delay: 6100, text: '$ _', color: '\x1b[1;32m' }
];

let commandIndex = 0;

function typeCommand() {
    if (commandIndex < commands.length) {
        const cmd = commands[commandIndex];
        setTimeout(() => {
            terminal.writeln(`${cmd.color}${cmd.text}\x1b[0m`);
            commandIndex++;
            typeCommand();
        }, cmd.delay);
    }
}

// Start terminal animation after a short delay
setTimeout(typeCommand, 1000);

} // End of Terminal check

// ========================================
// Typed.js for Hero Section
// ========================================
if (typeof Typed !== 'undefined') {
    const typed = new Typed('#typed-text', {
        strings: [
            'AI/ML Engineer',
            'Cybersecurity Enthusiast',
            'Full-Stack Developer',
            'Problem Solver',
            'Tech Innovator'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: false
    });
}

// ========================================
// Projects Data & Rendering
// ========================================
const projects = [
    {
        title: 'AI-Powered Threat Detection',
        description: 'Machine learning system for real-time cybersecurity threat detection using anomaly detection algorithms and neural networks.',
        icon: '🛡️',
        tags: ['Python', 'TensorFlow', 'Scikit-learn', 'Cybersecurity'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Neural Style Transfer App',
        description: 'Deep learning application that applies artistic styles to images using convolutional neural networks and transfer learning.',
        icon: '🎨',
        tags: ['PyTorch', 'OpenCV', 'React', 'Flask'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Secure Chat Application',
        description: 'End-to-end encrypted messaging platform with advanced cryptographic protocols and secure authentication mechanisms.',
        icon: '🔐',
        tags: ['Node.js', 'WebSocket', 'Cryptography', 'MongoDB'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Predictive Analytics Dashboard',
        description: 'Interactive data visualization dashboard for predictive analytics using machine learning models and real-time data processing.',
        icon: '📊',
        tags: ['Python', 'Pandas', 'D3.js', 'AWS'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Automated Penetration Testing Tool',
        description: 'Cybersecurity tool for automated vulnerability scanning and penetration testing with detailed reporting capabilities.',
        icon: '🎯',
        tags: ['Python', 'Kali Linux', 'Metasploit', 'Docker'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Sentiment Analysis API',
        description: 'REST API for real-time sentiment analysis using NLP and deep learning models with high accuracy and scalability.',
        icon: '💬',
        tags: ['Python', 'BERT', 'FastAPI', 'Docker'],
        github: '#',
        demo: '#'
    }
];

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        projectCard.setAttribute('data-aos-delay', index * 100);
        
        projectCard.innerHTML = `
            <div class="project-image">
                <span>${project.icon}</span>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        <span>Code</span>
                    </a>
                    <a href="${project.demo}" class="project-link" target="_blank">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                            <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                        </svg>
                        <span>Demo</span>
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// ========================================
// Experience Data & Rendering
// ========================================
const experiences = [
    {
        title: 'AI/ML Intern',
        company: 'Tech Company',
        date: '2024 - Present',
        description: 'Developed machine learning models for predictive analytics and contributed to AI-powered features.',
        points: [
            'Built and deployed ML models with 95% accuracy',
            'Optimized data pipelines for real-time processing',
            'Collaborated with cross-functional teams on AI initiatives'
        ]
    },
    {
        title: 'Cybersecurity Research Assistant',
        company: 'University Research Lab',
        date: '2023 - 2024',
        description: 'Conducted research on network security and vulnerability assessment techniques.',
        points: [
            'Performed security audits and penetration testing',
            'Published research papers on emerging threats',
            'Developed automated security testing tools'
        ]
    },
    {
        title: 'Full-Stack Developer',
        company: 'Startup Project',
        date: '2022 - 2023',
        description: 'Built responsive web applications with modern frameworks and cloud technologies.',
        points: [
            'Developed RESTful APIs and microservices',
            'Implemented CI/CD pipelines with Docker',
            'Improved application performance by 40%'
        ]
    }
];

function renderExperience() {
    const timeline = document.getElementById('experienceTimeline');
    
    experiences.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.setAttribute('data-aos', 'fade-right');
        timelineItem.setAttribute('data-aos-delay', index * 100);
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-header">
                    <div>
                        <h3>${exp.title}</h3>
                        <div class="timeline-company">${exp.company}</div>
                    </div>
                    <div class="timeline-date">${exp.date}</div>
                </div>
                <div class="timeline-description">
                    <p>${exp.description}</p>
                    <ul>
                        ${exp.points.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// ========================================
// Anime.js Animations
// ========================================
if (typeof anime !== 'undefined') {
    // Animate hero section elements on load
    anime({
        targets: '.hero-text h1',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutQuad'
    });

    anime({
        targets: '.hero-text .typed-container',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        delay: 200,
        easing: 'easeOutQuad'
    });

    anime({
        targets: '.hero-text .hero-description',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        delay: 400,
        easing: 'easeOutQuad'
    });

    anime({
        targets: '.hero-buttons .btn',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        delay: anime.stagger(100, { start: 600 }),
        easing: 'easeOutQuad'
    });

// Animate scroll indicator
anime({
    targets: '.scroll-indicator',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 1000,
    delay: 1000,
    easing: 'easeOutQuad'
});

// Animate section titles on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anime({
                targets: entry.target.querySelector('.section-title'),
                opacity: [0, 1],
                translateX: [-50, 0],
                duration: 800,
                easing: 'easeOutQuad'
            });
            
            anime({
                targets: entry.target.querySelector('.title-line'),
                width: [0, '100%'],
                duration: 1000,
                delay: 300,
                easing: 'easeOutQuad'
            });
            
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    if (section.querySelector('.section-title')) {
        sectionObserver.observe(section);
    }
});

// Skill items hover animation
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        anime({
            targets: this.querySelector('.skill-icon'),
            scale: [1, 1.2],
            rotate: [0, 360],
            duration: 600,
            easing: 'easeOutElastic(1, .6)'
        });
    });
    
    item.addEventListener('mouseleave', function() {
        anime({
            targets: this.querySelector('.skill-icon'),
            scale: [1.2, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
});

// Animate fact items on hover
document.querySelectorAll('.fact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        anime({
            targets: this.querySelector('.fact-icon'),
            scale: [1, 1.3],
            duration: 400,
            easing: 'easeOutElastic(1, .8)'
        });
    });
    
    item.addEventListener('mouseleave', function() {
        anime({
            targets: this.querySelector('.fact-icon'),
            scale: [1.3, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
});

// Floating animation for neural network background
anime({
    targets: '.neural-net-bg',
    scale: [1, 1.05, 1],
    duration: 4000,
    loop: true,
    easing: 'easeInOutSine'
});

    // Reduce animations on low-end devices
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        anime.speed = 0.5;
    }
} // End of anime check

// ========================================
// Initialize Content
// ========================================
renderProjects();
renderExperience();

// Update AOS on dynamic content changes
if (typeof AOS !== 'undefined') {
    setTimeout(() => {
        AOS.refresh();
    }, 500);
}

console.log('%c🚀 Portfolio loaded successfully!', 'color: #00ff88; font-size: 16px; font-weight: bold;');
console.log('%c💻 Built with anime.js, xterm.js & particles.js', 'color: #00d9ff; font-size: 12px;');

}); // End of window.load event listener
