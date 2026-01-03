# D'pur D'jadjan - Cake & Culinary Services

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/dpur-djadjan-website)

## 🍰 About

D'pur D'jadjan is a modern e-commerce website for a premium frozen food, pre-order cook meals, and cake culinary brand. Features an elegant white, red, and brown color scheme with seamless WhatsApp ordering integration.

## ✨ Features

- 🎨 **Elegant Design** - Premium UI with custom color palette (white, red, brown)
- 🛒 **Interactive Shopping Cart** - Add, remove, and manage product quantities
- 💬 **WhatsApp Integration** - Direct order submission to business WhatsApp
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🚀 **Fast & Lightweight** - Single HTML file with CDN dependencies
- ✨ **Smooth Animations** - Premium micro-interactions and hover effects

## 🛍️ Product Categories

- **Frozen Food** - Nuggets, fish fillets, spring rolls, meatballs, sausages, dumplings
- **Pre-Order Meals** - Rendang, soto ayam, nasi kuning, ayam goreng, gulai, nasi box
- **Cakes & Pastries** - Brownies, cheesecake, pudding, red velvet, lapis legit, cupcakes

## 🚀 Quick Start

### Local Development

Simply open the `index.html` file in any modern web browser:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

No build process or dependencies required!

### Deploy to Vercel

1. **Fork or clone this repository**
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import this repository
   - Click "Deploy"

3. **Done!** Your site is live 🎉

Alternatively, click the "Deploy with Vercel" button at the top of this README.

## 📦 Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS 3.x** - Utility-first CSS framework (CDN)
- **Vanilla JavaScript** - Zero dependencies
- **Font Awesome 6.5.2** - Icon library
- **Google Fonts** - Playfair Display & Inter

## 📞 Contact Integration

Orders are sent directly to WhatsApp: **+62 877-6423-0333**

To update the business number, edit the `whatsappNumber` variable in the `checkout()` function in `index.html`.

## 🎨 Customization

### Update Products

Edit the `products` array in the JavaScript section of `index.html`:

```javascript
const products = [
    { 
        id: 1, 
        name: 'Product Name', 
        category: 'frozen', // or 'meals' or 'cakes'
        price: 35000, 
        image: 'image-url.jpg', 
        description: 'Product description' 
    },
    // Add more products...
];
```

### Update Colors

Modify the Tailwind configuration in the `<script>` tag:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-brown': '#8B4513',
                'brand-red': '#DC2626',
                'brand-accent': '#A0522D',
                'brand-light': '#D2691E',
            }
        }
    }
}
```

### Replace Images

Replace the Unsplash placeholder images with your actual product photos.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for modification.

## 🤝 Contributing

Feel free to fork this project and customize it for your own culinary business!

---

**Made with ❤️ for D'pur D'jadjan**

*Bringing authentic deliciousness to Indonesian families*
