// ============================================
// D'pur D'jadjan - Frozen Food Specialist
// Multi-Language Dynamic Content System
// ============================================

// Global state
let currentLang = 'id'; // Default to Indonesian
let contentData = null;

// ============================================
// Initialize Application
// ============================================
document.addEventListener('DOMContentLoaded', async function() {
    // Load saved language preference
    const savedLang = localStorage.getItem('language') || 'id';
    currentLang = savedLang;
    
    // Load content and render
    await loadContent(currentLang);
    initializeUI();
    initializeAnimations();
});

// ============================================
// Content Loading
// ============================================
async function loadContent(lang) {
    try {
        const response = await fetch(`content-${lang}.json`);
        if (!response.ok) throw new Error('Failed to load content');
        contentData = await response.json();
        
        // Update document
        updateDocumentMeta();
        renderAllContent();
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        document.documentElement.dataset.lang = lang;
        
    } catch (error) {
        console.error('Error loading content:', error);
        // Fallback to Indonesian if error
        if (lang !== 'id') {
            await loadContent('id');
        }
    }
}

// ============================================
// Language Switcher
// ============================================
window.switchLanguage = async function(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    localStorage.setItem('language', lang);
    await loadContent(lang);
    
    // Re-initialize animations for newly rendered content
    initializeAnimations();
};

// ============================================
// Update Document Meta
// ============================================
function updateDocumentMeta() {
    document.title = contentData.meta.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = contentData.meta.description;
    }
}

// ============================================
// Render All Content
// ============================================
function renderAllContent() {
    renderHeroSection();
    renderAboutSection();
    renderProductsSection();
    renderServicesSection();
    renderContactSection();
    renderFooter();
}

// ============================================
// Hero Section
// ============================================
function renderHeroSection() {
    const heroSection = document.querySelector('.hero .hero-content');
    if (!heroSection) return;
    
    heroSection.querySelector('h1').textContent = contentData.hero.headline;
    heroSection.querySelector('p').textContent = contentData.hero.subheadline;
    
    const buttons = heroSection.querySelectorAll('.btn');
    if (buttons[0]) buttons[0].textContent = contentData.hero.cta.primary;
    if (buttons[1]) {
        const whatsappBtn = buttons[1];
        const span = whatsappBtn.querySelector('span');
        if (span) span.textContent = contentData.hero.cta.whatsapp;
        
        // Update WhatsApp link with localized message
        const message = encodeURIComponent(contentData.whatsapp.message);
        whatsappBtn.href = `https://wa.me/6287764230333?text=${message}`;
    }
}

// ============================================
// About Section
// ============================================
function renderAboutSection() {
    const aboutSection = document.querySelector('#about');
    if (!aboutSection) return;
    
    // Update title
    const title = aboutSection.querySelector('h2');
    if (title) title.textContent = contentData.about.title;
    
    // Update content (innerHTML to support <strong> tags)
    const contentDiv = aboutSection.querySelector('[data-i18n="about.content"]');
    if (contentDiv) {
        contentDiv.innerHTML = `<p>${contentData.about.content}</p>`;
    }
    
    // Render features
    const featuresContainer = aboutSection.querySelector('#aboutFeatures');
    if (featuresContainer && contentData.about.features) {
        featuresContainer.innerHTML = contentData.about.features.map(feature => `
            <div class="feature-item">
                <div class="feature-icon">${feature.icon}</div>
                <div class="feature-text">
                    <h4>${feature.title}</h4>
                    <p>${feature.description}</p>
                </div>
            </div>
        `).join('');
    }
}

// ============================================
// Products Section
// ============================================
function renderProductsSection() {
    if (!contentData.products || !contentData.products.categories) return;
    
    // Update section header
    const sectionHeader = document.querySelector('#products .section-header');
    if (sectionHeader) {
        const h2 = sectionHeader.querySelector('h2');
        const p = sectionHeader.querySelector('p');
        if (h2) h2.textContent = contentData.products.title;
        if (p) p.textContent = contentData.products.subtitle;
    }
    
    // Render Frozen Food Products (Primary)
    const frozenCategory = contentData.products.categories.find(cat => cat.id === 'frozen');
    if (frozenCategory) {
        const frozenGrid = document.getElementById('frozenProductsGrid');
        if (frozenGrid) {
            frozenGrid.innerHTML = frozenCategory.items.map(product => `
                <div class="product-card fade-in">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <div class="product-overlay">
                            <h3>${product.name}</h3>
                            ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
                        </div>
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Update WhatsApp CTA in products section
    const whatsappCTA = document.querySelector('#products .cta-section a');
    if (whatsappCTA) {
        const message = encodeURIComponent(contentData.whatsapp.message);
        whatsappCTA.href = `https://wa.me/6287764230333?text=${message}`;
    }
    
    // Render Cake Products (Bonus Treats)
    const cakeCategory = contentData.products.categories.find(cat => cat.id === 'cakes');
    if (cakeCategory) {
        const cakeGrid = document.getElementById('cakeProductsGrid');
        if (cakeGrid) {
            cakeGrid.innerHTML = cakeCategory.items.map(product => `
                <div class="product-card fade-in">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <div class="product-overlay">
                            <h3>${product.name}</h3>
                            ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
                        </div>
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                    </div>
                </div>
            `).join('');
        }
    }
}

// ============================================
// Services Section
// ============================================
function renderServicesSection() {
    if (!contentData.services || !contentData.services.items) return;
    
    // Update section title
    const sectionHeader = document.querySelector('#features .section-header h2');
    if (sectionHeader) {
        sectionHeader.textContent = contentData.services.title;
    }
    
    // Render service cards
    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
        servicesGrid.innerHTML = contentData.services.items.map(service => `
            <div class="feature-card fade-in">
                <div class="feature-card-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `).join('');
    }
}

// ============================================
// Contact Section
// ============================================
function renderContactSection() {
    if (!contentData.contact) return;
    
    // Update section header
    const sectionHeader = document.querySelector('#contact .section-header');
    if (sectionHeader) {
        const h2 = sectionHeader.querySelector('h2');
        const p = sectionHeader.querySelector('p');
        if (h2) h2.textContent = contentData.contact.title;
        if (p) p.textContent = contentData.contact.subtitle;
    }
    
    // Update contact info title
    const contactTitle = document.querySelector('.contact-info h2');
    if (contactTitle) contactTitle.textContent = contentData.contact.title;
    
    // Render contact details
    const contactDetails = document.getElementById('contactDetails');
    if (contactDetails && contentData.contact.info) {
        contactDetails.innerHTML = contentData.contact.info.map(item => `
            <div class="contact-item">
                <div class="contact-icon">${item.icon}</div>
                <div class="contact-text">
                    <h4>${item.title}</h4>
                    <p>${item.content}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Update WhatsApp button in contact section
    const whatsappBtn = document.querySelector('.contact-info .btn-whatsapp');
    if (whatsappBtn) {
        const span = whatsappBtn.querySelector('span');
        if (span) span.textContent = contentData.contact.form.whatsapp;
        
        const message = encodeURIComponent(contentData.whatsapp.message);
        whatsappBtn.href = `https://wa.me/6287764230333?text=${message}`;
    }
    
    // Update form labels
    const form = document.getElementById('contactForm');
    if (form && contentData.contact.form) {
        const labels = form.querySelectorAll('label');
        const formData = contentData.contact.form;
        
        if (labels[0]) labels[0].textContent = formData.name;
        if (labels[1]) labels[1].textContent = formData.email;
        if (labels[2]) labels[2].textContent = formData.phone;
        if (labels[3]) labels[3].textContent = formData.message;
        
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.textContent = formData.submit;
    }
}

// ============================================
// Footer
// ============================================
function renderFooter() {
    if (!contentData.footer) return;
    
    // About section
    const footerAboutTitle = document.querySelector('.footer-section h3[data-i18n="footer.about.title"]');
    const footerAboutDesc = document.querySelector('.footer-section p[data-i18n="footer.about.description"]');
    if (footerAboutTitle) footerAboutTitle.textContent = contentData.footer.about.title;
    if (footerAboutDesc) footerAboutDesc.textContent = contentData.footer.about.description;
    
    // Quick Links
    const quickLinksTitle = document.querySelector('.footer-section h3[data-i18n="footer.quickLinks.title"]');
    if (quickLinksTitle) quickLinksTitle.textContent = contentData.footer.quickLinks.title;
    
    const quickLinksUL = document.getElementById('footerQuickLinks');
    if (quickLinksUL && contentData.footer.quickLinks.links) {
        quickLinksUL.innerHTML = contentData.footer.quickLinks.links.map(link => `
            <li><a href="${link.href}">${link.text}</a></li>
        `).join('');
    }
    
    // Services Links
    const servicesTitle = document.querySelector('.footer-section h3[data-i18n="footer.services.title"]');
    if (servicesTitle) servicesTitle.textContent = contentData.footer.services.title;
    
    const servicesLinksUL = document.getElementById('footerServicesLinks');
    if (servicesLinksUL && contentData.footer.services.links) {
        servicesLinksUL.innerHTML = contentData.footer.services.links.map(link => `
            <li><a href="${link.href}">${link.text}</a></li>
        `).join('');
    }
    
    // Newsletter
    const newsletterTitle = document.querySelector('.footer-section h3[data-i18n="footer.newsletter.title"]');
    const newsletterDesc = document.querySelector('.footer-section p[data-i18n="footer.newsletter.description"]');
    const newsletterBtn = document.querySelector('.footer-section button[data-i18n="footer.newsletter.button"]');
    
    if (newsletterTitle) newsletterTitle.textContent = contentData.footer.newsletter.title;
    if (newsletterDesc) newsletterDesc.textContent = contentData.footer.newsletter.description;
    if (newsletterBtn) newsletterBtn.textContent = contentData.footer.newsletter.button;
    
    // Copyright
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) copyright.textContent = contentData.footer.copyright;
}

// ============================================
// Navigation & UI Interactions
// ============================================
function initializeUI() {
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Hero parallax effect
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroSection.style.backgroundPositionY = parallax + 'px';
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Build WhatsApp message
            let whatsappMessage = `Halo D'pur D'jadjan!%0A%0A`;
            whatsappMessage += `Nama: ${encodeURIComponent(name)}%0A`;
            if (phone) whatsappMessage += `Telepon: ${encodeURIComponent(phone)}%0A`;
            whatsappMessage += `%0APesan:%0A${encodeURIComponent(message)}`;
            
            // Redirect to WhatsApp
            window.open(`https://wa.me/6287764230333?text=${whatsappMessage}`, '_blank');
            
            // Reset form
            this.reset();
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            alert(currentLang === 'id' 
                ? `Terima kasih! Email ${email} telah terdaftar.`
                : `Thank you! Email ${email} has been registered.`
            );
            this.reset();
        });
    }
}

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}
