# 🚀 Omkar Choudhury - Portfolio Website

A modern, responsive portfolio website with AI/ML and Cybersecurity themes. Built with cutting-edge web technologies and smooth animations.

## ✨ Features

- **🎨 Dual Theme Support**: Seamlessly switch between dark and light modes with smooth transitions
- **💫 Smooth Animations**: Powered by anime.js for fluid, eye-catching animations
- **🖥️ Interactive Terminal**: Live xterm.js terminal simulation in the hero section
- **🌌 Particle Background**: Dynamic particle network representing neural networks
- **📱 Fully Responsive**: Optimized for all screen sizes and devices
- **⚡ Performance Optimized**: Fast loading with lazy loading and efficient animations
- **♿ Accessible**: Built with accessibility best practices and semantic HTML
- **🎯 SEO Friendly**: Proper meta tags and semantic structure

## 🛠️ Technologies Used

### Core Libraries
- **[anime.js](https://animejs.com/)** - Lightweight JavaScript animation library
- **[xterm.js](https://xtermjs.org/)** - Terminal emulator for the web
- **[particles.js](https://vincentgarreau.com/particles.js/)** - Lightweight library for creating particles
- **[typed.js](https://github.com/mattboldt/typed.js/)** - Typing animation library
- **[AOS](https://michalsnik.github.io/aos/)** - Animate On Scroll library

### Fonts
- **Inter** - Primary font family
- **JetBrains Mono** - Monospace font for code/terminal

### Development
- **live-server** - Development server with live reload

## 📂 Project Structure

```
Portfolios/
├── index.html              # Main HTML file
├── package.json            # NPM dependencies and scripts
├── WResume_OmkarChoudhury.pdf  # Resume file
├── css/
│   └── styles.css          # Main stylesheet with theme variables
├── js/
│   └── main.js             # Main JavaScript with all functionality
├── assets/                 # Assets folder (images, icons, etc.)
└── node_modules/           # NPM packages
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download this repository**
   ```bash
   cd Portfolios
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The portfolio will open automatically in your default browser at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with live reload
- `npm start` - Start development server without auto-opening browser

## 🎨 Customization Guide

### Updating Personal Information

#### 1. Hero Section
Edit the hero content in `index.html`:
```html
<h1 class="glitch-text" data-text="Your Name">Your Name</h1>
```

Update typed text in `js/main.js`:
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

#### 2. About Section
Modify the about text in `index.html` within the `about-section`.

#### 3. Skills
Update skills in `index.html` within the `skills-section`. Add/remove skill categories and items as needed.

#### 4. Projects
Edit the projects array in `js/main.js`:
```javascript
const projects = [
    {
        title: 'Your Project',
        description: 'Project description',
        icon: '🚀',
        tags: ['Tag1', 'Tag2'],
        github: 'https://github.com/...',
        demo: 'https://...'
    },
    // Add more projects
];
```

#### 5. Experience
Update the experiences array in `js/main.js`:
```javascript
const experiences = [
    {
        title: 'Job Title',
        company: 'Company Name',
        date: 'Date Range',
        description: 'Description',
        points: ['Point 1', 'Point 2']
    },
    // Add more experiences
];
```

#### 6. Contact Information
Update contact links in `index.html` within the `contact-section`.

### Theme Customization

Colors and theme variables are defined in `css/styles.css`:

```css
:root {
    /* Accent Colors */
    --accent-color: #00ff88;
    --accent-secondary: #00d9ff;
    /* Change these to your preferred colors */
}
```

## 🎭 Theme Toggle

The portfolio supports both dark and light themes:
- Click the sun/moon icon in the navigation bar to toggle themes
- Theme preference is saved in localStorage
- All colors automatically adjust based on the selected theme

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔧 Terminal Commands

The terminal in the hero section simulates various commands:
- `whoami` - Display identity
- `cat skills.txt` - Show skills
- `python --version` - Python version
- `ls expertise/` - List expertise areas
- `echo $STATUS` - Show current status

You can customize these in `js/main.js` by modifying the `commands` array.

## 🎬 Animations

### Anime.js Animations
- Hero section entrance animations
- Scroll-triggered section animations
- Hover effects on skills and cards
- Theme toggle rotation

### AOS (Animate On Scroll)
- Section fade-ins
- Staggered project card animations
- Timeline item animations

### CSS Animations
- Glitch effect on name
- Typing cursor blink
- Particle movements
- Gradient animations

## 📈 Performance Tips

1. **Optimize Images**: Compress images before adding them
2. **Lazy Loading**: Images are lazy-loaded by default
3. **Reduce Motion**: Automatically detected for users with motion sensitivity
4. **Code Splitting**: Consider splitting JS for larger portfolios

## 🐛 Troubleshooting

### Issue: Animations not working
- Ensure all JavaScript files are loaded correctly
- Check browser console for errors
- Verify anime.js is loaded: `console.log(anime)`

### Issue: Terminal not displaying
- Check if xterm.js is loaded properly
- Verify the terminal container has proper dimensions

### Issue: Particles not showing
- Ensure particles.js is loaded
- Check if the particles-js div exists
- Verify theme colors are set correctly

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

If you find any bugs or have suggestions for improvements:
1. Open an issue
2. Submit a pull request
3. Share your customized version!

## 💡 Tips for Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`

### Vercel
1. Import your GitHub repository
2. Deploy with default settings

## 📞 Support

For questions or support:
- Email: omkar@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 🎉 Acknowledgments

- anime.js team for the amazing animation library
- xterm.js contributors for the terminal emulator
- All open-source library maintainers

---

**Built with ❤️ by Omkar Choudhury**

*Last Updated: October 2025*
