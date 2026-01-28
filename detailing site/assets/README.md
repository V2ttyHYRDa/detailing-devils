# Detail Suds - Asset Preparation Guide

## 📸 Required Images

Place optimized `.webp` images in this directory with the following specifications:

### Hero Section
**File:** `hero-detailing.webp`
- **Dimensions:** 600×700px (portrait orientation)
- **Content:** High-end car being detailed/coated
- **Style:** Premium, clean, well-lit
- **Compression:** Medium quality (70-80%)
- **Usage:** Main hero card with floating effect

### Showcase Carousel (Before/After)
**Files:** `showcase-1-before.webp` through `showcase-4-before.webp`
- **Dimensions:** 1200×675px (16:9 landscape)
- **Content Suggestions:**
  - Showcase 1: Ceramic coating application/result
  - Showcase 2: PPF installation on luxury car
  - Showcase 3: Paint enhancement/correction comparison
  - Showcase 4: Interior deep clean transformation
- **Compression:** Medium quality (70-80%)
- **Usage:** Netflix-style carousel slides

### Social Preview
**File:** `detail-suds-hero.webp`
- **Dimensions:** 1200×630px (Open Graph standard)
- **Content:** Brand hero with logo and tagline
- **Compression:** High quality (85-90%)
- **Usage:** Facebook, Twitter, LinkedIn preview cards

---

## 🛠️ Image Optimization Tools

### Online Tools
1. **Squoosh** (https://squoosh.app/)
   - Best for WebP conversion
   - Real-time quality comparison
   - Browser-based, no upload to servers

2. **TinyPNG WebP** (https://tinypng.com/)
   - Batch processing
   - Excellent compression ratio
   - Free tier: 20 images/month

3. **Cloudinary** (https://cloudinary.com/)
   - Advanced transformations
   - CDN delivery
   - Free tier available

### Desktop Tools
- **ImageOptim** (Mac) - https://imageoptim.com/
- **FileOptimizer** (Windows) - https://sourceforge.net/projects/nikkhokkho/
- **GIMP** (Cross-platform) - Export as WebP with quality slider

### Command Line
```bash
# Using cwebp (Google's WebP encoder)
cwebp -q 80 input.jpg -o output.webp

# Batch convert all JPGs in folder
for file in *.jpg; do cwebp -q 80 "$file" -o "${file%.jpg}.webp"; done
```

---

## 📐 Image Specifications Summary

| File Name | Dimensions | Aspect Ratio | Format | Quality | Max Size |
|-----------|-----------|--------------|--------|---------|----------|
| hero-detailing.webp | 600×700 | 6:7 | WebP | 70-80% | 150KB |
| showcase-1-before.webp | 1200×675 | 16:9 | WebP | 70-80% | 200KB |
| showcase-2-before.webp | 1200×675 | 16:9 | WebP | 70-80% | 200KB |
| showcase-3-before.webp | 1200×675 | 16:9 | WebP | 70-80% | 200KB |
| showcase-4-before.webp | 1200×675 | 16:9 | WebP | 70-80% | 200KB |
| detail-suds-hero.webp | 1200×630 | 1.9:1 | WebP | 85-90% | 250KB |

---

## 🎨 Photography Tips

### For Best Results:
1. **Lighting:** Natural daylight or professional studio lighting
2. **Background:** Clean, minimal distractions (dark/neutral preferred)
3. **Angles:** 
   - Hero: 45° angle showing process/detail
   - Showcase: Side profiles, close-ups of gloss/reflection
4. **Focus:** Sharp focus on vehicle details (paint, gloss, reflections)
5. **Color Balance:** Accurate representation of coating results

### Before/After Shots:
- Use **same angle and lighting** for consistency
- Show clear **transformation** (dull → glossy, scratched → smooth)
- Include **reflections** to demonstrate coating quality
- Add **text overlays** in post if needed (but keep minimal)

---

## 📱 Responsive Considerations

Images will be displayed at various sizes:
- **Desktop:** Full resolution
- **Tablet:** 768px - 1023px width
- **Mobile:** 375px - 767px width

The CSS applies:
```css
.hero__image {
    width: 100%;
    height: auto;
    object-fit: cover;
}
```

Ensure important elements are centered in the frame for proper cropping.

---

## 🔄 Placeholder Replacement Checklist

- [ ] `hero-detailing.webp` - Hero section main image
- [ ] `showcase-1-before.webp` - Ceramic coating showcase
- [ ] `showcase-2-before.webp` - PPF installation showcase
- [ ] `showcase-3-before.webp` - Paint enhancement showcase
- [ ] `showcase-4-before.webp` - Interior deep clean showcase
- [ ] `detail-suds-hero.webp` - Social preview image
- [ ] Update image alt text in HTML for SEO
- [ ] Test responsive display on all devices
- [ ] Verify lazy loading is working
- [ ] Check Core Web Vitals (LCP should be < 2.5s)

---

## 📊 Performance Impact

With optimized WebP images:
- **Total image weight:** ~1.15 MB (all images combined)
- **LCP improvement:** 40-60% faster vs. JPEG/PNG
- **Mobile data savings:** 30-50% reduction
- **Browser support:** 95%+ (Safari 14+, Chrome 23+, Firefox 65+)

For older browsers, consider adding JPG fallbacks:
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

---

## 🎯 SEO Image Optimization

### Alt Text Format
Use descriptive, keyword-rich alt text:

```html
<!-- Good -->
<img src="hero-detailing.webp" alt="Premium ceramic coating application on luxury car at Detail Suds Lucknow">

<!-- Bad -->
<img src="hero-detailing.webp" alt="car image">
```

### File Naming
Already optimized:
- Lowercase
- Hyphen-separated
- Descriptive keywords
- WebP extension

---

## 🚀 Quick Start

1. **Gather your best photos** (from phone, camera, or professional shoot)
2. **Resize** to specified dimensions
3. **Convert to WebP** using tools above
4. **Compress** to target quality (70-80%)
5. **Drop into this folder** (`/assets/`)
6. **Test the site** locally
7. **Deploy!**

---

**Need help with image sourcing or editing? Contact a professional photographer specializing in automotive content or use stock images temporarily from:**
- Unsplash (https://unsplash.com/s/photos/car-detailing)
- Pexels (https://www.pexels.com/search/luxury-car/)
- Adobe Stock (licensed)

Remember: High-quality images = High-perceived brand value! 📸✨
