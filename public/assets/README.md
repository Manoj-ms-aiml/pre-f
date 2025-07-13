# Assets Directory

This directory contains all the media assets for the portfolio website.

## Directory Structure

```
assets/
├── images/
│   ├── profile/          # Profile photos (400x400px, <500KB)
│   ├── projects/         # Project screenshots (800x600px, <1MB)
│   ├── certificates/     # Certificate images (1200x900px, <800KB)
│   └── experience/       # Experience photos (800x600px, <1MB)
└── videos/
    ├── projects/         # Project demo videos (1280x720px or 1920x1080px, <10MB)
    └── experience/       # Experience videos (1280x720px or 1920x1080px, <10MB)
```

## Asset Requirements

### Profile Images (`images/profile/`)
- **File**: `manoj-profile.jpg`
- **Dimensions**: 400x400px (1:1 aspect ratio)
- **Size**: < 500KB
- **Format**: JPG/PNG
- **Content**: Professional headshot with clean background

### Project Images (`images/projects/`)
- **Stickman Shootout**: 
  - `stickman-shootout-gameplay.jpg` - Game interface screenshot
  - `stickman-shootout-ai.jpg` - AI visualization or flowchart
- **Emotion Recognition**:
  - `emotion-recognition-ui.jpg` - Application interface
- **Breast Cancer AI**:
  - `breast-cancer-model.jpg` - Model architecture diagram
- **Apollo Health**:
  - `apollo-health-homepage.jpg` - Website homepage
- **Astro Santhvana**:
  - `astro-santhvana-app.jpg` - App interface

**Specifications**: 800x600px (4:3), < 1MB, JPG/PNG/WebP

### Project Videos (`videos/projects/`)
- **Stickman Demo**: `stickman-demo.mp4` - Gameplay footage (30-60 seconds)
- **Emotion Recognition**: `emotion-recognition-demo.mp4` - Live demo (30-90 seconds)

**Specifications**: 1280x720px or 1920x1080px (16:9), < 10MB, MP4 (H.264)

### Certificate Images (`images/certificates/`)
- `aws-cloud-practitioner.jpg` - AWS certification
- `tensorflow-developer.jpg` - Google TensorFlow cert
- `azure-fundamentals.jpg` - Microsoft Azure cert
- `docker-certified.jpg` - Docker certification
- `kubernetes-admin.jpg` - Kubernetes cert
- `react-advanced.jpg` - Meta React cert
- `python-data-science.jpg` - IBM Python cert
- `gcp-associate.jpg` - Google Cloud cert

**Specifications**: 1200x900px (4:3), < 800KB, JPG/PNG

### Experience Images (`images/experience/`)
- **Tech Solutions**: 
  - `tech-solutions-office.jpg` - Workplace/team photo
  - `tech-solutions-project.jpg` - Project work photo
- **AI Lab**:
  - `ai-lab-research.jpg` - Research environment
  - `ai-lab-project.jpg` - Technical work photo
- **Startup**:
  - `startup-team.jpg` - Team collaboration
  - `startup-development.jpg` - Development work
- **Enterprise**:
  - `enterprise-office.jpg` - Professional environment
  - `enterprise-project.jpg` - Technical project work

**Specifications**: 800x600px (4:3), < 1MB, JPG/PNG

## Image Optimization Guidelines

1. **Resize images** to exact specifications before uploading
2. **Compress images** using tools like TinyPNG or ImageOptim
3. **Use appropriate formats**:
   - JPG for photos with many colors
   - PNG for images with transparency
   - WebP for better compression (if supported)
4. **Maintain aspect ratios** to prevent distortion
5. **Use descriptive filenames** that match the configuration

## Video Optimization Guidelines

1. **Use H.264 codec** for MP4 files
2. **Compress videos** to reduce file size
3. **Keep duration short** (30 seconds to 2 minutes max)
4. **Use 30fps** for web delivery
5. **Test playback** across different browsers

## Adding New Assets

1. Place the file in the appropriate directory
2. Follow the naming convention specified in `src/data/assets.ts`
3. Ensure the file meets the size and dimension requirements
4. Test the asset loading in the application

## Fallback System

If any asset fails to load, the system will automatically use placeholder images from Pexels. However, for the best user experience, ensure all required assets are properly uploaded and accessible.