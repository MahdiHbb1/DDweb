// ============================================
// D'pur D'jadjan - Product Page Loader
// With image support for visual product display
// ============================================

// Product data with images
const productsData = {
    frozenfood: [
        { 
            name: 'Dimsum Special Mix', 
            price: 'Rp 45.000', 
            image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop',
            desc: 'Aneka dimsum premium: siomay, hakao, gyoza (isi 10pcs)' 
        },
        { 
            name: 'Nugget Ayam Homemade', 
            price: 'Rp 35.000', 
            image: 'https://images.unsplash.com/photo-1562059390-a761a084768e?w=400&h=300&fit=crop',
            desc: 'Nugget ayam asli tanpa pengawet, renyah & lezat (500gr)' 
        },
        { 
            name: 'Bakso Sapi Premium', 
            price: 'Rp 50.000', 
            image: 'https://images.unsplash.com/photo-1620791144105-a40e78d85572?w=400&h=300&fit=crop',
            desc: 'Bakso urat, halus & aci dengan daging sapi pilihan (500gr)' 
        },
        { 
            name: 'Risoles & Kroket', 
            price: 'Rp 40.000', 
            image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
            desc: 'Risoles mayo & kroket kentang isian premium (10pcs)' 
        },
        { 
            name: 'Lumpia Sayur & Udang', 
            price: 'Rp 38.000', 
            image: 'https://images.unsplash.com/photo-1600198256797-4f212cef5d6b?w=400&h=300&fit=crop',
            desc: 'Lumpia segar siap goreng dengan isian melimpah (10pcs)' 
        },
        { 
            name: 'Kentang Goreng Premium', 
            price: 'Rp 25.000', 
            image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
            desc: 'French fries kualitas resto, crispy & lezat (500gr)' 
        },
        { 
            name: 'Siomay Bandung', 
            price: 'Rp 42.000', 
            image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
            desc: 'Siomay bandung komplit dengan bumbu kacang (10pcs)' 
        },
        { 
            name: 'Sosis Sapi Premium', 
            price: 'Rp 55.000', 
            image: 'https://images.unsplash.com/photo-1612392166886-ee6b5e52c5f6?w=400&h=300&fit=crop',
            desc: 'Sosis sapi jumbo tanpa pengawat (500gr)' 
        },
        { 
            name: 'Tahu Bakso', 
            price: 'Rp 35.000', 
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
            desc: 'Tahu isi bakso daging sapi cincang (10pcs)' 
        },
        { 
            name: 'Paket Siap Masak', 
            price: 'Rp 65.000', 
            image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop',
            desc: 'Bumbu & bahan lengkap untuk 1 menu favorit' 
        }
    ],
    culinary: [
        { 
            name: 'Nasi Box Premium', 
            price: 'Rp 25.000', 
            image: 'https://images.unsplash.com/photo-1591281700630-055d99e8b2a0?w=400&h=300&fit=crop',
            desc: 'Nasi box lengkap dengan lauk pilihan & sayur' 
        },
        { 
            name: 'Paket Katering 10 Pax', 
            price: 'Rp 250.000', 
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
            desc: 'Katering lengkap untuk 10 orang (nasi + 3 lauk)' 
        },
        { 
            name: 'Rendang Sapi Premium', 
            price: 'Rp 85.000', 
            image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
            desc: 'Rendang sapi empuk bumbu rempah nusantara (500gr)' 
        },
        { 
            name: 'Ayam Bakar Spesial', 
            price: 'Rp 40.000', 
            image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
            desc: 'Ayam bakar bumbu khas dengan sambal (1 ekor)' 
        },
        { 
            name: 'Gulai Kambing', 
            price: 'Rp 95.000', 
            image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
            desc: 'Gulai kambing bumbu rempah kaya rasa (500gr)' 
        },
        { 
            name: 'Soto Betawi Lengkap', 
            price: 'Rp 35.000', 
            image: 'https://images.unsplash.com/photo-1604908816023-bdb0b65d2e2c?w=400&h=300&fit=crop',
            desc: 'Soto betawi santan gurih per porsi (ready to heat)' 
        },
        { 
            name: 'Paket Tumpeng Mini', 
            price: 'Rp 150.000', 
            image: 'https://images.unsplash.com/photo-1596040033229-a0b3b2f0c3f8?w=400&h=300&fit=crop',
            desc: 'Tumpeng mini 20cm dengan lauk lengkap (5-7 pax)' 
        },
        { 
            name: 'Rawon Daging Sapi', 
            price: 'Rp 45.000', 
            image: 'https://images.unsplash.com/photo-1583838606040-0c6e7d6c4f6e?w=400&h=300&fit=crop',
            desc: 'Rawon hitam khas Jawa Timur per porsi' 
        },
        { 
            name: 'Paket Snack Box', 
            price: 'Rp 20.000', 
            image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=400&h=300&fit=crop',
            desc: 'Snack box isi kue & minuman untuk acara' 
        },
        { 
            name: 'Custom Katering Event', 
            price: 'Hub. CS', 
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
            desc: 'Katering custom untuk pernikahan & acara besar' 
        }
    ],
    bakery: [
        { 
            name: 'Roti Sobek Premium', 
            price: 'Rp 35.000', 
            image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
            desc: 'Roti sobek lembut dengan berbagai topping' 
        },
        { 
            name: 'Brownies Cokelat Fudgy', 
            price: 'Rp 45.000', 
            image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=300&fit=crop',
            desc: 'Brownies cokelat premium tekstur fudgy lezat' 
        },
        { 
            name: 'Bolu Jadul Klasik', 
            price: 'Rp 40.000', 
            image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
            desc: 'Bolu jadul lembut cita rasa nostalgia' 
        },
        { 
            name: 'Kue Lapis Legit', 
            price: 'Rp 120.000', 
            image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
            desc: 'Lapis legit spesial rempah & mentega premium (loyang 20cm)' 
        },
        { 
            name: 'Donat Premium Mix', 
            price: 'Rp 30.000', 
            image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
            desc: 'Donat empuk aneka topping (isi 6pcs)' 
        },
        { 
            name: 'Bolu Pisang Moist', 
            price: 'Rp 38.000', 
            image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=300&fit=crop',
            desc: 'Banana cake super moist dengan kacang & keju' 
        },
        { 
            name: 'Cake Ulang Tahun', 
            price: 'Mulai Rp 150.000', 
            image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop',
            desc: 'Custom cake ulang tahun sesuai tema (uk. 20cm)' 
        },
        { 
            name: 'Nastar Premium', 
            price: 'Rp 55.000', 
            image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=400&h=300&fit=crop',
            desc: 'Nastar mentega selai nanas asli (toples 300gr)' 
        },
        { 
            name: 'Kastengel Keju', 
            price: 'Rp 50.000', 
            image: 'https://images.unsplash.com/photo-1588195538326-c5acd4d4c677?w=400&h=300&fit=crop',
            desc: 'Kastengel keju edam premium (toples 300gr)' 
        },
        { 
            name: 'Cookies Cokelat Chip', 
            price: 'Rp 45.000', 
            image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
            desc: 'Cookies cokelat chip crunchy (toples 300gr)' 
        }
    ],
    creative: [
        { 
            name: 'Fusion Snack Box', 
            price: 'Rp 55.000', 
            image: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=400&h=300&fit=crop',
            desc: 'Paket snack fusion kreatif untuk hampers' 
        },
        { 
            name: 'Mini Burger Sliders', 
            price: 'Rp 60.000', 
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
            desc: 'Mini burger unik berbagai rasa (isi 5pcs)' 
        },
        { 
            name: 'Dessert Box Premium', 
            price: 'Rp 40.000', 
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
            desc: 'Dessert box layer cake & cream specialty' 
        },
        { 
            name: 'Korean Fusion Roll', 
            price: 'Rp 48.000', 
            image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=400&h=300&fit=crop',
            desc: 'Korean style fusion roll modern & colorful (6pcs)' 
        },
        { 
            name: 'Rainbow Smoothie Bowl', 
            price: 'Rp 35.000', 
            image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
            desc: 'Smoothie bowl cantik & sehat per cup' 
        },
        { 
            name: 'Sushi Cake Roll', 
            price: 'Rp 65.000', 
            image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
            desc: 'Perpaduan sushi & cake dalam 1 kreasi unik' 
        },
        { 
            name: 'Mochi Ice Cream', 
            price: 'Rp 42.000', 
            image: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=400&h=300&fit=crop',
            desc: 'Mochi ice cream aneka rasa (isi 6pcs)' 
        },
        { 
            name: 'Bento Box Art', 
            price: 'Rp 50.000', 
            image: 'https://images.unsplash.com/photo-1602667249688-8071daa13638?w=400&h=300&fit=crop',
            desc: 'Bento box cantik dengan food art kreatif' 
        },
        { 
            name: 'Bubble Waffle', 
            price: 'Rp 38.000', 
            image: 'https://images.unsplash.com/photo-1612374409761-e136d98e3e56?w=400&h=300&fit=crop',
            desc: 'Hong Kong style bubble waffle topping premium' 
        },
        { 
            name: 'Custom Hampers', 
            price: 'Hub. CS', 
            image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop',
            desc: 'Hampers custom untuk berbagai occasion' 
        }
    ]
};

// Product card generator with images
function loadProducts(category) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    const products = productsData[category] || [];
    
    if (products.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">Produk segera hadir...</p>';
        return;
    }
    
    grid.innerHTML = products.map(p => `
        <div class="product-card fade-in">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                <div class="product-overlay">
                    <span class="view-detail">Lihat Detail</span>
                </div>
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                <p class="product-price">${p.price}</p>
                <a href="https://wa.me/6287764230333?text=Halo!%20Saya%20ingin%20memesan%20${encodeURIComponent(p.name)}%20-%20${encodeURIComponent(p.price)}" 
                   class="btn btn-order" target="_blank" rel="noopener">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 6px;">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                   </svg>
                   Pesan Sekarang
                </a>
            </div>
        </div>
    `).join('');
    
    // Trigger fade-in animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, idx) => {
            setTimeout(() => el.classList.add('visible'), idx * 50);
        });
    }, 100);
}

// Auto-detect page and load products
document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split('/').pop().replace('.html', '');
    if (productsData[page]) {
        loadProducts(page);
    }
    
    // Update language if saved
    const savedLang = localStorage.getItem('language') || 'id';
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
    });
    
    // Initialize navbar & mobile menu
    initializeNavbar();
});

// Navbar scroll effect and mobile menu
function initializeNavbar() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu?.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu?.contains(e.target) && !menuToggle?.contains(e.target)) {
            menuToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    });
}

// Language switcher (placeholder - actual implementation in main script.js)
window.switchLanguage = function(lang) {
    localStorage.setItem('language', lang);
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update page description if element exists
    const desc = document.querySelector('[data-product-desc]');
    if (desc && lang === 'en') {
        const translations = {
            'frozenfood': 'High-quality frozen food, practical and delicious for Indonesian families',
            'culinary': 'Pre-order meals & catering packages for your special events',
            'bakery': 'Fresh premium quality cakes and bread for every special moment',
            'creative': 'Unique and special culinary innovations from D\'pur D\'jadjan'
        };
        const page = window.location.pathname.split('/').pop().replace('.html', '');
        if (translations[page]) desc.textContent = translations[page];
    }
};
