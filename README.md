# Manoj MS Portfolio

## Local Asset Management

This portfolio uses a local asset management system for better performance and control. All assets are stored in the `public/assets` directory.

## Asset Organization

### Directory Structure
```
public/assets/
├── images/
│   ├── profile/          # Profile photos
│   ├── projects/         # Project screenshots
│   ├── certificates/     # Certificate images
│   └── experience/       # Experience photos
└── videos/
    ├── projects/         # Project demo videos
    └── experience/       # Experience videos
```

### Asset Requirements

#### Profile Images
- **Format**: JPG/PNG
- **Dimensions**: 400x400px (1:1 aspect ratio)
- **Size**: < 500KB
- **Quality**: High resolution for hero section display
- **Background**: Preferably transparent or clean background

#### Project Images
- **Format**: JPG/PNG/WebP
- **Dimensions**: 800x600px (4:3 aspect ratio) for main images
- **Thumbnails**: 400x300px (4:3 aspect ratio)
- **Size**: < 1MB per image
- **Quality**: High enough to show project details clearly
- **Content**: Screenshots, UI mockups, architecture diagrams

#### Project Videos
- **Format**: MP4 (H.264 codec recommended)
- **Dimensions**: 1920x1080px (16:9 aspect ratio) or 1280x720px
- **Duration**: 30 seconds to 2 minutes maximum
- **Size**: < 10MB per video
- **Quality**: 30fps, good compression
- **Content**: Demo videos, project walkthroughs

#### Certificate Images
- **Format**: JPG/PNG
- **Dimensions**: 1200x900px (4:3 aspect ratio)
- **Size**: < 800KB
- **Quality**: High resolution to show certificate details
- **Content**: Official certificates, completion badges

#### Experience Images
- **Format**: JPG/PNG
- **Dimensions**: 800x600px (4:3 aspect ratio)
- **Size**: < 1MB per image
- **Quality**: Professional quality
- **Content**: Workplace photos, project images, team photos

### How to Add Your Assets

1. **Prepare your assets** according to the specifications above
2. **Place them in the appropriate directories** under `public/assets/`
3. **Update the file paths** in `src/data/assets.ts`

#### Example: Adding a Profile Photo
1. Resize your photo to 400x400px
2. Save it as `public/assets/images/profile/manoj-profile.jpg`
3. The system will automatically use it (path is already configured)

#### Example: Adding Project Images
1. Prepare project screenshots (800x600px)
2. Save them in `public/assets/images/projects/`
3. Update the paths in `src/data/assets.ts` if needed

### Asset Configuration

All asset configurations are managed in `src/data/assets.ts`. Each asset includes:
- **ID**: Unique identifier
- **Name**: Descriptive name
- **Type**: 'image' or 'video'
- **Path**: Relative path from public directory
- **Category**: Asset category
- **Description**: What the asset shows
- **Dimensions**: Required dimensions
- **Size**: Maximum file size
- **Requirements**: Specific requirements for the asset

### Performance Features

- **Automatic fallback**: If a local image fails to load, it falls back to placeholder images
- **Lazy loading**: Images load only when needed for better performance
- **Error handling**: Graceful handling of failed image loads
- **Preloading**: Critical assets can be preloaded for faster display
- **Optimized paths**: Direct file serving for better performance

### Image Optimization Tips

1. **Use appropriate formats**:
   - JPG for photos with many colors
   - PNG for images with transparency or few colors
   - WebP for better compression (modern browsers)

2. **Optimize file sizes**:
   - Use tools like TinyPNG or ImageOptim
   - Maintain quality while reducing file size
   - Consider progressive JPEGs for larger images

3. **Maintain aspect ratios**:
   - Use the specified dimensions for consistency
   - Crop images to fit the required aspect ratios
   - Avoid stretching or distorting images

### Video Optimization Tips

1. **Use H.264 codec** for best browser compatibility
2. **Compress videos** to reduce file size while maintaining quality
3. **Keep videos short** (30 seconds to 2 minutes)
4. **Use appropriate bitrates** for web delivery
5. **Consider multiple formats** (MP4, WebM) for broader support

## Development

### Adding New Assets

1. Add the asset file to the appropriate directory
2. Update `src/data/assets.ts` with the new asset configuration
3. Update the relevant data files (projects.ts, certificates.ts, etc.) if needed
4. Test the asset loading in development

### Utility Functions

- `getAssetById(id)`: Get asset configuration by ID
- `getAssetsByCategory(category)`: Get all assets in a category
- `getFallbackImage(category)`: Get fallback image for a category
- `preloadImages(urls)`: Preload multiple images for performance

## Troubleshooting

If assets don't load:
1. Verify the file path is correct
2. Ensure the file exists in the public directory
3. Check that the file type is supported
4. Verify file permissions and accessibility
5. Check browser console for any loading errors

The system will automatically fall back to placeholder images if local assets fail to load.

## Features

### 1. Local Asset Management
- Organized directory structure for different asset types
- Detailed specifications for each asset category
- Automatic fallback system for missing assets
- Performance optimized loading

### 2. Responsive Design
- Optimized for all screen sizes
- Proper aspect ratio maintenance
- Mobile-first approach

### 3. Performance Optimization
- Lazy loading for non-critical assets
- Image preloading for critical assets
- Efficient file serving
- Automatic compression and optimization

The portfolio now uses a robust local asset management system for better performance, reliability, and control over your content!