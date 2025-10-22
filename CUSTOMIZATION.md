# 🎨 Quick Customization Guide

This guide will help you quickly customize your portfolio with your own information.

## 📝 Step-by-Step Customization

### 1. Personal Information (5 minutes)

#### Update Your Name
**File:** `index.html` (Line ~62)
```html
<h1 class="glitch-text" data-text="YOUR NAME">YOUR NAME</h1>
```

#### Update Typed Roles
**File:** `js/main.js` (Line ~268)
```javascript
const typed = new Typed('#typed-text', {
    strings: [
        'Your Role 1',
        'Your Role 2',
        'Your Role 3'
    ],
    // ...
});
```

#### Update Hero Description
**File:** `index.html` (Line ~72)
```html
<p class="hero-description">
    Your personal description here
</p>
```

### 2. About Section (10 minutes)

**File:** `index.html` (Line ~118-140)

Replace the paragraphs with your own story:
- Paragraph 1: Introduction
- Paragraph 2: Your specialization and experience
- Paragraph 3: Interests and hobbies

Update Quick Facts:
- Education
- Location
- Focus Areas

### 3. Skills (15 minutes)

**File:** `index.html` (Line ~160-320)

For each skill category:
1. Keep or change the category icon
2. Update category name
3. Add/remove skill items
4. Update skill emojis and names

Example:
```html
<div class="skill-item">
    <div class="skill-icon">🐍</div>
    <span>Python</span>
</div>
```

### 4. Projects (20 minutes)

**File:** `js/main.js` (Line ~282-340)

Update the projects array:
```javascript
const projects = [
    {
        title: 'Your Project Name',
        description: 'Brief description of your project',
        icon: '🚀', // Choose an emoji
        tags: ['Tech1', 'Tech2', 'Tech3'],
        github: 'https://github.com/yourusername/project',
        demo: 'https://yourproject.com'
    },
    // Add more projects...
];
```

**Tips:**
- Use 3-6 projects for best layout
- Keep descriptions under 150 characters
- Use relevant emojis (🤖 🔐 🎨 📊 🎯 💬)
- Add real GitHub/demo links or use '#' for placeholders

### 5. Experience (15 minutes)

**File:** `js/main.js` (Line ~406-440)

Update the experiences array:
```javascript
const experiences = [
    {
        title: 'Your Job Title',
        company: 'Company Name',
        date: 'Start - End Date',
        description: 'Brief role description',
        points: [
            'Achievement or responsibility 1',
            'Achievement or responsibility 2',
            'Achievement or responsibility 3'
        ]
    },
    // Add more experiences...
];
```

**Tips:**
- List most recent first
- Use action verbs (Developed, Implemented, Optimized)
- Include measurable achievements when possible
- 3-4 experiences is ideal

### 6. Contact Information (5 minutes)

#### Update Contact Cards
**File:** `index.html` (Line ~440-470)

Change:
- Email address
- LinkedIn URL
- GitHub URL

#### Update Footer Social Links
**File:** `index.html` (Line ~483-510)

Update social media URLs

#### Update Resume Link
**File:** `index.html` (Line ~86)
```html
<a href="./YOUR_RESUME.pdf" target="_blank" class="btn btn-secondary">
```

### 7. Terminal Commands (Optional - 10 minutes)

**File:** `js/main.js` (Line ~230-250)

Customize the terminal commands:
```javascript
const commands = [
    { delay: 500, text: '$ your_command', color: '\x1b[1;32m' },
    { delay: 1000, text: 'output', color: '\x1b[0m' },
    // Add more commands...
];
```

### 8. Colors & Theme (Optional - 10 minutes)

**File:** `css/styles.css` (Line ~12-20)

```css
:root {
    /* Change these colors */
    --accent-color: #00ff88;        /* Primary accent */
    --accent-secondary: #00d9ff;    /* Secondary accent */
    --accent-tertiary: #ff0055;     /* Tertiary accent */
}
```

**Popular Color Schemes:**

**Cyberpunk:**
```css
--accent-color: #00ff88;
--accent-secondary: #00d9ff;
--accent-tertiary: #ff0055;
```

**Purple Tech:**
```css
--accent-color: #a78bfa;
--accent-secondary: #818cf8;
--accent-tertiary: #c084fc;
```

**Orange Energy:**
```css
--accent-color: #fb923c;
--accent-secondary: #f59e0b;
--accent-tertiary: #ef4444;
```

**Blue Professional:**
```css
--accent-color: #3b82f6;
--accent-secondary: #06b6d4;
--accent-tertiary: #8b5cf6;
```

## 🖼️ Adding Your Photo (Optional)

**File:** `index.html` (Line ~195)

Replace the placeholder SVG with an image:
```html
<div class="profile-placeholder">
    <img src="./assets/your-photo.jpg" alt="Your Name" />
</div>
```

Then add this CSS to `css/styles.css`:
```css
.profile-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## 📱 Testing Your Changes

After making changes:

1. **Check Desktop View**
   - Open http://localhost:3000
   - Test all sections
   - Verify animations

2. **Check Mobile View**
   - Press F12 in browser
   - Toggle device toolbar
   - Test different screen sizes

3. **Test Theme Toggle**
   - Click sun/moon icon
   - Check all sections in both themes

4. **Test Links**
   - Click all navigation links
   - Verify smooth scrolling
   - Test external links

## ✅ Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Resume PDF uploaded and linked
- [ ] All placeholder links replaced
- [ ] Photos added (if using)
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Theme toggle works
- [ ] All animations smooth
- [ ] No console errors
- [ ] All links work

## 🚀 Quick Deploy to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to Pages section
   - Select main branch
   - Save

3. **Your site will be live at:**
   `https://yourusername.github.io/portfolio`

## 💡 Pro Tips

1. **Keep it Simple**: Don't overcomplicate - clarity is key
2. **Real Projects**: Only showcase projects you're proud of
3. **Regular Updates**: Keep content fresh and current
4. **Performance**: Compress images before adding
5. **Mobile First**: Always test mobile view
6. **Fast Loading**: Keep animations subtle for better performance

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Open browser console (F12) to check for errors
- Test in incognito mode if styles don't update
- Clear cache if changes don't appear

---

**Estimated Total Time: 1-2 hours for complete customization**

Happy customizing! 🎉
