// ============================================
// D'pur D'jadjan - Embedded Content Data
// No fetch needed - works with file:// protocol
// ============================================

const CONTENT_DATA = {
  'id': {
    "meta": {
      "title": "D'pur D'jadjan - Spesialis Frozen Food & Kuliner Premium",
      "description": "Frozen food berkualitas premium, masakan siap masak pre-order, dan aneka kuliner terbaik dari D'pur D'jadjan"
    },
    "nav": {
      "brand": "D'pur D'jadjan",
      "links": [
        { "text": "Beranda", "href": "#home" },
        { "text": "Tentang Kami", "href": "#about" },
        { "text": "Produk", "href": "#products" },
        { "text": "Layanan", "href": "#features" },
        { "text": "Kontak", "href": "#contact" }
      ]
    },
    "hero": {
      "headline": "Kelezatan Premium di Setiap Gigitan",
      "subheadline": "Spesialis frozen food berkualitas tinggi & masakan pre-order. Nikmati kemudahan dengan cita rasa istimewa - dari freezer langsung ke meja makan Anda.",
      "cta": {
        "primary": "Lihat Produk",
        "whatsapp": "Pesan via WhatsApp"
      }
    },
    "about": {
      "title": "Kisah Kami",
      "content": "Di <strong>D'pur D'jadjan</strong>, kami menghadirkan revolusi kuliner dengan spesialisasi frozen food premium dan masakan pre-order yang siap memanjakan selera Anda. Setiap produk dibuat dengan bahan pilihan terbaik, diproses higienis, dan dikemas sempurna untuk menjaga kesegaran serta kualitas rasa. Dari frozen food praktis hingga hidangan siap masak, kami memastikan setiap produk memberikan pengalaman kuliner terbaik untuk keluarga Indonesia.",
      "features": [
        {
          "icon": "✨",
          "title": "Bahan Premium",
          "description": "Hanya bahan pilihan terbaik untuk kualitas maksimal"
        },
        {
          "icon": "❄️",
          "title": "Proses Higienis",
          "description": "Standar keamanan pangan yang ketat & modern"
        },
        {
          "icon": "👨‍🍳",
          "title": "Resep Ahli",
          "description": "Dikembangkan oleh chef berpengalaman"
        },
        {
          "icon": "💝",
          "title": "Dibuat dengan Cinta",
          "description": "Setiap produk diproduksi dengan perhatian detail"
        }
      ]
    },
    "products": {
      "title": "Produk Unggulan Kami",
      "subtitle": "Frozen Food & Kuliner Premium",
      "categoryCards": [
        {
          "id": "frozenfood",
          "icon": "❄️",
          "title": "Frozen Food",
          "description": "Makanan beku premium siap masak",
          "link": "frozenfood.html"
        },
        {
          "id": "culinary",
          "icon": "🍽️",
          "title": "Culinary",
          "description": "Masakan pre-order & katering",
          "link": "culinary.html"
        },
        {
          "id": "bakery",
          "icon": "🍞",
          "title": "Roti & Pastry",
          "description": "Kue dan roti segar berkualitas",
          "link": "bakery.html"
        },
        {
          "id": "creative",
          "icon": "✨",
          "title": "Kreatif",
          "description": "Kreasi kuliner unik & inovatif",
          "link": "creative.html"
        }
      ],
      "categories": [
        {
          "id": "frozen",
          "name": "Frozen Food Favorit",
          "items": [
            {
              "name": "Dimsum Premium Selection",
              "description": "Aneka dimsum istimewa - siomay, hakao, gyoza dengan isian berlimpah",
              "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600",
              "tag": "Bestseller"
            },
            {
              "name": "Nugget Ayam Homemade",
              "description": "Nugget ayam asli tanpa pengawet, renyah di luar lembut di dalam",
              "image": "https://images.unsplash.com/photo-1562059390-a761a084768e?w=600",
              "tag": "Favorit Keluarga"
            },
            {
              "name": "Risoles & Kroket Mix",
              "description": "Risoles mayo dan kroket kentang dengan isian daging premium",
              "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
              "tag": "Ready Stock"
            },
            {
              "name": "Bakso Sapi Premium",
              "description": "Bakso urat, bakso halus, dan bakso aci dengan daging sapi pilihan",
              "image": "https://images.unsplash.com/photo-1620791144105-a40e78d85572?w=600",
              "tag": "100% Sapi"
            },
            {
              "name": "Lumpia Sayur & Udang",
              "description": "Lumpia segar isi sayuran dan udang, siap goreng",
              "image": "https://images.unsplash.com/photo-1600198256797-4f212cef5d6b?w=600",
              "tag": "Varian Baru"
            },
            {
              "name": "Siap Masak Paket Komplit",
              "description": "Paket bumbu & bahan masakan siap olah untuk berbagai menu favorit",
              "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600",
              "tag": "Pre-Order"
            }
          ]
        },
        {
          "id": "cakes",
          "name": "Bonus Treats - Kue & Pastry",
          "subtitle": "Pelengkap istimewa untuk acara spesial Anda",
          "items": [
            {
              "name": "Bolu Jadul Premium",
              "description": "Bolu lembut klasik dengan cita rasa nostalgia yang autentik",
              "image": "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600",
              "tag": "Klasik"
            },
            {
              "name": "Brownies Fudgy",
              "description": "Brownies cokelat premium dengan tekstur lembut dan fudgy",
              "image": "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=600",
              "tag": "Rich Chocolate"
            },
            {
              "name": "Banana Cake Moist",
              "description": "Cake pisang lembut dengan topping kacang dan keju",
              "image": "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600",
              "tag": "Moist & Sweet"
            },
            {
              "name": "Lapis Legit Premium",
              "description": "Kue lapis spesial dengan rempah pilihan dan mentega berkualitas",
              "image": "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600",
              "tag": "Signature"
            }
          ]
        }
      ]
    },
    "services": {
      "title": "Mengapa Memilih D'pur D'jadjan",
      "items": [
        {
          "icon": "❄️",
          "title": "Spesialis Frozen Food",
          "description": "Lebih dari 50+ produk frozen food berkualitas premium dengan proses pembekuan modern yang menjaga nutrisi dan rasa"
        },
        {
          "icon": "🍱",
          "title": "Masakan Pre-Order",
          "description": "Pesan masakan favorit Anda sesuai kebutuhan - fresh, higienis, dan siap santap untuk acara atau konsumsi harian"
        },
        {
          "icon": "📦",
          "title": "Pemesanan Bulk",
          "description": "Harga spesial untuk pembelian partai besar, cocok untuk usaha kuliner, kantin, dan katering"
        },
        {
          "icon": "🎉",
          "title": "Paket Katering Event",
          "description": "Solusi katering lengkap untuk acara pernikahan, ulang tahun, arisan, dan gathering perusahaan"
        },
        {
          "icon": "✨",
          "title": "Custom Order",
          "description": "Bisa request menu dan takaran sesuai selera - kami siap memenuhi kebutuhan kuliner khusus Anda"
        },
        {
          "icon": "🚚",
          "title": "Pengiriman Cepat",
          "description": "Pengiriman dengan cooling box khusus untuk menjaga kualitas frozen food tetap optimal sampai tujuan"
        },
        {
          "icon": "🎂",
          "title": "Kue Spesial",
          "description": "Bonus treats berupa aneka kue dan pastry untuk melengkapi kebutuhan hidangan penutup Anda"
        },
        {
          "icon": "🤝",
          "title": "B2B Partnership",
          "description": "Kemitraan untuk toko, warung, dan bisnis F&B dengan harga dan sistem yang menguntungkan"
        }
      ]
    },
    "contact": {
      "title": "Hubungi Kami",
      "subtitle": "Siap melayani pesanan dan menjawab pertanyaan Anda",
      "info": [
        {
          "icon": "📍",
          "title": "Lokasi",
          "content": "Jakarta, Indonesia"
        },
        {
          "icon": "📱",
          "title": "WhatsApp",
          "content": "+62 877-6423-0333"
        },
        {
          "icon": "📧",
          "title": "Email",
          "content": "order@dpurdjadjan.com"
        },
        {
          "icon": "🕒",
          "title": "Jam Operasional",
          "content": "Senin - Sabtu: 08:00 - 20:00 WIB<br>Minggu: 09:00 - 18:00 WIB"
        }
      ],
      "form": {
        "name": "Nama Lengkap",
        "email": "Alamat Email",
        "phone": "Nomor WhatsApp",
        "message": "Pesan Anda",
        "submit": "Kirim Pesan",
        "whatsapp": "Chat WhatsApp Langsung"
      }
    },
    "footer": {
      "about": {
        "title": "D'pur D'jadjan",
        "description": "Spesialis frozen food premium dan masakan pre-order terpercaya. Menghadirkan kelezatan praktis dengan kualitas terjamin untuk keluarga Indonesia."
      },
      "quickLinks": {
        "title": "Tautan Cepat",
        "links": [
          { "text": "Beranda", "href": "#home" },
          { "text": "Tentang Kami", "href": "#about" },
          { "text": "Produk", "href": "#products" },
          { "text": "Layanan", "href": "#features" },
          { "text": "Kontak", "href": "#contact" }
        ]
      },
      "services": {
        "title": "Layanan Kami",
        "links": [
          { "text": "Frozen Food", "href": "#products" },
          { "text": "Masakan Pre-Order", "href": "#products" },
          { "text": "Katering Event", "href": "#features" },
          { "text": "Custom Order", "href": "#features" },
          { "text": "Pembelian Bulk", "href": "#features" }
        ]
      },
      "newsletter": {
        "title": "Newsletter",
        "description": "Dapatkan info promo, produk baru, dan tips kuliner langsung ke email Anda.",
        "placeholder": "Email Anda",
        "button": "Berlangganan"
      },
      "social": {
        "title": "Ikuti Kami"
      },
      "copyright": "© 2026 D'pur D'jadjan. Semua hak dilindungi."
    },
    "whatsapp": {
      "message": "Halo D'pur D'jadjan! Saya ingin memesan produk frozen food dan kuliner."
    }
  },
  'en': {
    "meta": {
      "title": "D'pur D'jadjan - Premium Frozen Food & Culinary Specialist",
      "description": "Premium quality frozen food, pre-order ready-to-cook meals, and finest culinary products from D'pur D'jadjan"
    },
    "nav": {
      "brand": "D'pur D'jadjan",
      "links": [
        { "text": "Home", "href": "#home" },
        { "text": "About Us", "href": "#about" },
        { "text": "Products", "href": "#products" },
        { "text": "Services", "href": "#features" },
        { "text": "Contact", "href": "#contact" }
      ]
    },
    "hero": {
      "headline": "Premium Deliciousness in Every Bite",
      "subheadline": "Specializing in high-quality frozen food & pre-order meals. Enjoy convenience with exceptional taste - from freezer straight to your dining table.",
      "cta": {
        "primary": "View Products",
        "whatsapp": "Order via WhatsApp"
      }
    },
    "about": {
      "title": "Our Story",
      "content": "At <strong>D'pur D'jadjan</strong>, we bring culinary revolution with premium frozen food specialties and pre-order meals ready to delight your taste. Every product is made with the finest ingredients, processed hygienically, and packaged perfectly to maintain freshness and quality. From practical frozen food to ready-to-cook dishes, we ensure every product delivers the best culinary experience for Indonesian families.",
      "features": [
        {
          "icon": "✨",
          "title": "Premium Ingredients",
          "description": "Only the finest ingredients for maximum quality"
        },
        {
          "icon": "❄️",
          "title": "Hygienic Process",
          "description": "Strict & modern food safety standards"
        },
        {
          "icon": "👨‍🍳",
          "title": "Expert Recipes",
          "description": "Developed by experienced chefs"
        },
        {
          "icon": "💝",
          "title": "Made with Love",
          "description": "Every product crafted with attention to detail"
        }
      ]
    },
    "products": {
      "title": "Our Signature Products",
      "subtitle": "Premium Frozen Food & Culinary",
      "categoryCards": [
        {
          "id": "frozenfood",
          "icon": "❄️",
          "title": "Frozen Food",
          "description": "Premium ready-to-cook frozen meals",
          "link": "frozenfood.html"
        },
        {
          "id": "culinary",
          "icon": "🍽️",
          "title": "Culinary",
          "description": "Pre-order meals & catering services",
          "link": "culinary.html"
        },
        {
          "id": "bakery",
          "icon": "🍞",
          "title": "Bread & Pastry",
          "description": "Fresh quality cakes and breads",
          "link": "bakery.html"
        },
        {
          "id": "creative",
          "icon": "✨",
          "title": "Creative",
          "description": "Unique & innovative culinary creations",
          "link": "creative.html"
        }
      ],
      "categories": [
        {
          "id": "frozen",
          "name": "Favorite Frozen Foods",
          "items": [
            {
              "name": "Premium Dimsum Selection",
              "description": "Exquisite dimsum varieties - siomai, hakao, gyoza with generous fillings",
              "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600",
              "tag": "Bestseller"
            },
            {
              "name": "Homemade Chicken Nuggets",
              "description": "Real chicken nuggets without preservatives, crispy outside tender inside",
              "image": "https://images.unsplash.com/photo-1562059390-a761a084768e?w=600",
              "tag": "Family Favorite"
            },
            {
              "name": "Risoles & Kroket Mix",
              "description": "Mayo risoles and potato croquettes with premium meat filling",
              "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
              "tag": "Ready Stock"
            },
            {
              "name": "Premium Beef Meatballs",
              "description": "Tendon meatballs, smooth meatballs, and tapioca balls with selected beef",
              "image": "https://images.unsplash.com/photo-1620791144105-a40e78d85572?w=600",
              "tag": "100% Beef"
            },
            {
              "name": "Vegetable & Shrimp Spring Rolls",
              "description": "Fresh spring rolls with vegetables and shrimp, ready to fry",
              "image": "https://images.unsplash.com/photo-1600198256797-4f212cef5d6b?w=600",
              "tag": "New Variant"
            },
            {
              "name": "Ready-to-Cook Complete Package",
              "description": "Spice & ingredient packages ready to cook for various favorite menus",
              "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600",
              "tag": "Pre-Order"
            }
          ]
        },
        {
          "id": "cakes",
          "name": "Bonus Treats - Cakes & Pastries",
          "subtitle": "Special complements for your special occasions",
          "items": [
            {
              "name": "Premium Traditional Sponge Cake",
              "description": "Classic soft sponge cake with authentic nostalgic taste",
              "image": "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600",
              "tag": "Classic"
            },
            {
              "name": "Fudgy Brownies",
              "description": "Premium chocolate brownies with soft and fudgy texture",
              "image": "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=600",
              "tag": "Rich Chocolate"
            },
            {
              "name": "Moist Banana Cake",
              "description": "Soft banana cake with nuts and cheese topping",
              "image": "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600",
              "tag": "Moist & Sweet"
            },
            {
              "name": "Premium Layer Cake",
              "description": "Special layered cake with selected spices and quality butter",
              "image": "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600",
              "tag": "Signature"
            }
          ]
        }
      ]
    },
    "services": {
      "title": "Why Choose D'pur D'jadjan",
      "items": [
        {
          "icon": "❄️",
          "title": "Frozen Food Specialist",
          "description": "More than 50+ premium frozen food products with modern freezing process that preserves nutrients and taste"
        },
        {
          "icon": "🍱",
          "title": "Pre-Order Meals",
          "description": "Order your favorite dishes as needed - fresh, hygienic, and ready to serve for events or daily consumption"
        },
        {
          "icon": "📦",
          "title": "Bulk Orders",
          "description": "Special prices for large quantity purchases, perfect for culinary businesses, canteens, and catering"
        },
        {
          "icon": "🎉",
          "title": "Event Catering Packages",
          "description": "Complete catering solutions for weddings, birthdays, gatherings, and corporate events"
        },
        {
          "icon": "✨",
          "title": "Custom Orders",
          "description": "Request menus and portions according to your taste - we're ready to fulfill your special culinary needs"
        },
        {
          "icon": "🚚",
          "title": "Fast Delivery",
          "description": "Delivery with special cooling boxes to maintain frozen food quality until destination"
        },
        {
          "icon": "🎂",
          "title": "Special Cakes",
          "description": "Bonus treats featuring various cakes and pastries to complement your dessert needs"
        },
        {
          "icon": "🤝",
          "title": "B2B Partnership",
          "description": "Partnerships for stores, shops, and F&B businesses with profitable prices and systems"
        }
      ]
    },
    "contact": {
      "title": "Get in Touch",
      "subtitle": "Ready to serve your orders and answer your questions",
      "info": [
        {
          "icon": "📍",
          "title": "Location",
          "content": "Jakarta, Indonesia"
        },
        {
          "icon": "📱",
          "title": "WhatsApp",
          "content": "+62 877-6423-0333"
        },
        {
          "icon": "📧",
          "title": "Email",
          "content": "order@dpurdjadjan.com"
        },
        {
          "icon": "🕒",
          "title": "Business Hours",
          "content": "Monday - Saturday: 08:00 - 20:00 WIB<br>Sunday: 09:00 - 18:00 WIB"
        }
      ],
      "form": {
        "name": "Full Name",
        "email": "Email Address",
        "phone": "WhatsApp Number",
        "message": "Your Message",
        "submit": "Send Message",
        "whatsapp": "Direct WhatsApp Chat"
      }
    },
    "footer": {
      "about": {
        "title": "D'pur D'jadjan",
        "description": "Trusted premium frozen food specialist and pre-order meals. Bringing practical deliciousness with guaranteed quality for Indonesian families."
      },
      "quickLinks": {
        "title": "Quick Links",
        "links": [
          { "text": "Home", "href": "#home" },
          { "text": "About Us", "href": "#about" },
          { "text": "Products", "href": "#products" },
          { "text": "Services", "href": "#features" },
          { "text": "Contact", "href": "#contact" }
        ]
      },
      "services": {
        "title": "Our Services",
        "links": [
          { "text": "Frozen Food", "href": "#products" },
          { "text": "Pre-Order Meals", "href": "#products" },
          { "text": "Event Catering", "href": "#features" },
          { "text": "Custom Orders", "href": "#features" },
          { "text": "Bulk Purchase", "href": "#features" }
        ]
      },
      "newsletter": {
        "title": "Newsletter",
        "description": "Get promo info, new products, and culinary tips straight to your email.",
        "placeholder": "Your Email",
        "button": "Subscribe"
      },
      "social": {
        "title": "Follow Us"
      },
      "copyright": "© 2026 D'pur D'jadjan. All rights reserved."
    },
    "whatsapp": {
      "message": "Hello D'pur D'jadjan! I would like to order frozen food and culinary products."
    }
  }
};
