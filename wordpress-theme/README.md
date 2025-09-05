# The Gem Project Sanctuary WordPress Theme

A comprehensive WordPress theme for The Gem Project Sanctuary - an animal rescue organization providing care for dogs and horses in need.

## Overview

This theme has been converted from a React application to a fully functional WordPress theme, maintaining all visual design and functionality while adding WordPress content management capabilities.

## Features

- **Custom Post Types**: Horses, Dogs, Success Stories, Team Members
- **Advanced Customizer Integration**: Visual editing for all content areas
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Media Management**: Optimized image handling and import tools
- **Contact Forms**: Built-in contact form with email notifications
- **SEO Optimized**: Clean markup and proper WordPress structure
- **Performance Optimized**: Lazy loading, optimized assets, and caching-friendly

## Installation

### Prerequisites

- WordPress 5.0 or higher
- PHP 7.4 or higher
- Node.js and npm (for development)

### Installation Steps

1. **Upload Theme Files**
   ```bash
   # Upload the wordpress-theme directory to wp-content/themes/
   # Rename it to 'gem-project' if needed
   ```

2. **Install Dependencies and Build CSS**
   ```bash
   cd wp-content/themes/gem-project
   npm install
   npm run build
   ```

3. **Activate Theme**
   - Go to WordPress Admin → Appearance → Themes
   - Activate "The Gem Project Theme"

4. **Import Sample Content** (Optional)
   - Go to Appearance → Import Images
   - Click "Import Images" to import sample images to media library

## Configuration

### 1. Basic Setup

- **Site Identity**: Set site title, tagline, and logo in Customizer
- **Menus**: Create and assign menus for Primary, Footer, and Mobile locations
- **Widgets**: Configure footer widgets if needed

### 2. Theme Customization

Access all theme options via **Appearance → Customize**:

#### Brand Colors
- Primary Color (Blue)
- Secondary Color (Orange)
- Accent Color (Green)
- Yellow/Warning Color

#### Hero Section
- Hero Images (up to 4 slides)
- Hero Title and Subtitle
- Call-to-Action Buttons

#### Homepage Sections
- Welcome Section content and images
- About Section text and visuals
- Services and programs content

#### Contact Information
- Address, Phone, Email
- Social Media Links
- Contact Form Settings

### 3. Content Management

#### Adding Animals

**For Horses:**
1. Go to Horses → Add New Horse
2. Fill in horse details (age, breed, gender, status)
3. Set featured image
4. Add description and story
5. Set adoption status (Adoptable, Forever Home, In Training)

**For Dogs:**
1. Go to Dogs → Add New Dog
2. Complete dog profile information
3. Upload photos
4. Set adoption status and special needs
5. Add behavioral notes

#### Success Stories
1. Go to Success Stories → Add New Story
2. Link to related animal
3. Add before/after photos
4. Write transformation story
5. Set featured status for homepage display

#### Team Members
1. Go to Team Members → Add New Member
2. Add profile photo and bio
3. Set role and department
4. Add contact information if needed

### 4. Page Setup

The theme includes several key pages that should be created:

- **Home** - Uses homepage template automatically
- **About** - Create page with slug 'about'
- **Contact** - Create page with slug 'contact'
- **Dogs** - Archive page created automatically
- **Horses** - Archive page created automatically
- **Gallery** - Create page with slug 'gallery'
- **Get Involved** - Create page with slug 'get-involved'

## Development

### Building CSS

The theme uses Tailwind CSS for styling:

```bash
# Development (watch mode)
npm run dev

# Production build
npm run build
```

### CSS Structure

- **Source**: `src/input.css`
- **Output**: `assets/css/style.css`
- **Config**: `tailwind.config.js`

### Custom Functions

Key functions available for development:

```php
// Get optimized image with fallback
gem_get_image($image_url, $size, $default)

// Generate responsive image HTML
gem_get_responsive_image($image_url, $alt, $class, $sizes)

// Import external image to media library
gem_import_external_image($image_url, $post_id)
```

## File Structure

```
gem-project/
├── assets/
│   ├── css/
│   │   └── style.css (generated)
│   └── js/
├── src/
│   └── input.css
├── template-parts/
│   └── pages/
│       ├── home.php
│       ├── about.php
│       ├── contact.php
│       ├── dogs-landing.php
│       └── horses-landing.php
├── functions.php
├── index.php
├── header.php
├── footer.php
├── style.css (theme info)
├── package.json
└── tailwind.config.js
```

## Customization

### Adding New Page Templates

1. Create PHP file in `template-parts/pages/`
2. Add template routing to `index.php`
3. Include WordPress functions for dynamic content

### Modifying Styles

1. Edit `src/input.css`
2. Run `npm run build` to compile
3. Styles are automatically enqueued

### Adding Custom Post Types

Use the existing pattern in `functions.php`:

```php
function gem_register_custom_post_type() {
    register_post_type('your_type', array(
        // Configuration
    ));
}
add_action('init', 'gem_register_custom_post_type');
```

## Support Features

### Contact Form
- Built-in contact form processing
- Email notifications to admin
- Auto-reply to users
- Spam protection with nonces

### Image Management
- Automatic responsive images
- Multiple image sizes for different contexts
- Import tools for external images
- Lazy loading and optimization

### SEO
- Proper heading structure
- Meta tag support
- Clean URLs
- Schema markup ready

## Troubleshooting

### Common Issues

1. **CSS Not Loading**
   - Run `npm install && npm run build`
   - Check file permissions on assets/css/

2. **Images Not Displaying**
   - Verify image URLs in customizer
   - Check media library permissions
   - Try importing images via admin panel

3. **Contact Form Not Working**
   - Verify email configuration in WordPress
   - Check spam folder for test emails
   - Ensure nonce field is present in form

### Debug Mode

Enable WordPress debugging by adding to `wp-config.php`:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

## Performance Tips

1. **Image Optimization**
   - Use appropriate image sizes
   - Enable WebP format if supported
   - Implement lazy loading (included)

2. **Caching**
   - Use caching plugin (WP Super Cache, W3 Total Cache)
   - Enable object caching
   - Configure CDN if needed

3. **Database**
   - Regular database optimization
   - Limit post revisions
   - Clean spam and trash regularly

## License

GPL v2 or later - Same as WordPress

## Support

For theme-specific issues, please check:
1. WordPress error logs
2. Browser console for JavaScript errors  
3. Theme customizer settings
4. Plugin conflicts

## Changelog

### Version 1.0.0
- Initial release
- Complete React to WordPress conversion
- Full Tailwind CSS integration
- Custom post types and fields
- Advanced customizer options
- Contact form functionality
- Media management system