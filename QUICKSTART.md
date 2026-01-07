# Quick Start Guide - D'pur D'jadjan Website

## 🚀 Local Development

### Option 1: Python Server (Recommended)
```bash
cd d:\HBB\WEBDD
python -m http.server 8080
```
Then open: http://localhost:8080

### Option 2: Live Server (VS Code Extension)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
Already configured with `vercel.json`

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd d:\HBB\WEBDD
vercel
```

### Option 2: Netlify
1. Drag & drop the entire `WEBDD` folder to https://app.netlify.com/drop
2. Or connect GitHub repository for auto-deploy

### Option 3: GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch and `/root` folder
4. Save and wait for deployment

---

## ✅ Pre-Deployment Checklist

### Content Updates Needed:
- [ ] Replace placeholder images in `content-id.json` and `content-en.json`
- [ ] Update Instagram handle in footer (currently `@dpurdjadjan`)
- [ ] Verify WhatsApp number: +6287764230333
- [ ] Update email: order@dpurdjadjan.com
- [ ] Add actual store location (currently generic "Jakarta, Indonesia")

### Image Recommendations:
**Frozen Food Products (6 images needed):**
1. Dimsum - professional photo on white/clean background
2. Nugget - golden fried, appetizing angle
3. Risoles/Kroket - cross-section showing filling
4. Bakso - in broth, garnished
5. Lumpia - arranged artfully
6. Siap Masak package - ingredients displayed

**Cake Products (4 images needed):**
1. Bolu - slice showing texture
2. Brownies - fudgy center visible
3. Banana Cake - topped with garnish
4. Lapis Legit - showing layers

**Other Images:**
- `images/hero-bg.png` - Frozen food themed hero background
- `images/about-bg.png` - Kitchen/production area (clean & professional)

---

## 🎨 Quick Customization

### Change Colors:
Edit `styles.css` lines 12-29 (`:root` variables)

### Update Content:
Edit `content-id.json` (Indonesian) or `content-en.json` (English)

### Add Products:
```json
// In content-id.json → products.categories[0].items
{
  "name": "Nama Produk",
  "description": "Deskripsi produk",
  "image": "https://your-image-url.jpg",
  "tag": "Label Opsional"
}
```

### Modify Services:
```json
// In content-id.json → services.items
{
  "icon": "❄️",
  "title": "Judul Layanan",
  "description": "Deskripsi layanan"
}
```

---

## 📱 Test on Multiple Devices

1. **Desktop:** Chrome, Firefox, Safari
2. **Mobile:** iOS Safari, Chrome Mobile
3. **Test language toggle** (ID ⟷ EN)
4. **Test WhatsApp links** (should open WhatsApp app)
5. **Test contact form** (redirects to WhatsApp)

---

## 🔧 Common Issues & Solutions

### Issue: Images not loading
**Solution:** Update image URLs in JSON files with absolute paths or hosted URLs

### Issue: Language toggle not working
**Solution:** Ensure JSON files are in same directory as index.html

### Issue: WhatsApp doesn't open on desktop
**Solution:** Normal behavior - WhatsApp Web will open. Test on mobile for app

### Issue: Colors look different
**Solution:** Different monitors show colors differently. Test on multiple devices

---

## 📊 Performance Optimization

Before going live:

1. **Compress images:**
   - Use https://tinypng.com/
   - Target: < 200KB per image
   - Format: WebP preferred, JPG fallback

2. **Minify files** (optional):
   ```bash
   # CSS
   npx cssnano styles.css styles.min.css
   
   # JS
   npx terser script.js -o script.min.js
   ```

3. **Enable caching** on your hosting platform

4. **Add lazy loading** (already implemented for images)

---

## 🔐 Security Notes

- No sensitive data stored in frontend
- WhatsApp links are safe and standard
- Form doesn't submit to server (WhatsApp redirect only)
- No cookies or tracking (privacy-friendly)

---

## 📈 Analytics (Optional)

To track visitors, add Google Analytics:

```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🆘 Support

If issues persist:
1. Check browser console for errors (F12)
2. Verify all files are uploaded
3. Clear browser cache (Ctrl + Shift + Delete)
4. Test in incognito mode

---

## 📱 Share Links

After deployment, share:
- **Main site:** https://your-domain.com
- **Direct WhatsApp:** https://wa.me/6287764230333
- **Instagram:** https://instagram.com/dpurdjadjan

---

**Ready to launch!** 🚀

All features are implemented and tested:
✅ Multi-language support
✅ WhatsApp integration
✅ Frozen food focus
✅ Responsive design
✅ SEO optimized
✅ Modern animations
