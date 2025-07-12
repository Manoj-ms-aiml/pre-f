# Portfolio Setup Guide

## Google Drive Integration Setup

To use your own photos and videos from Google Drive, follow these steps:

### 1. Upload Your Assets to Google Drive

Upload all your photos and videos to Google Drive and organize them in folders:
- Profile photos
- Project screenshots/videos
- Certificate images
- Experience photos

### 2. Get Google Drive File IDs

For each file you want to use:

1. Right-click on the file in Google Drive
2. Select "Share" or "Get link"
3. Change permissions to "Anyone with the link can view"
4. Copy the sharing link
5. Extract the file ID from the URL

**Example URL:** `https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74mHxYjgpKY/view?usp=sharing`

**File ID:** `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74mHxYjgpKY`

### 3. Update Drive Assets Configuration

Open `src/data/driveAssets.ts` and replace the placeholder Drive IDs with your actual file IDs:

```typescript
// Example: Replace this
driveId: 'YOUR_PROFILE_PHOTO_DRIVE_ID'

// With your actual file ID
driveId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74mHxYjgpKY'
```

### 4. Asset Categories

Update the following asset categories with your Drive file IDs:

#### Profile Assets
- `manoj-profile-main`: Your main profile photo for the hero section

#### Project Assets
- `stickman-shootout-1`, `stickman-shootout-2`: Stickman Shootout project images
- `emotion-recognition-1`: Emotion recognition project image
- `emotion-recognition-video`: Demo video of emotion recognition (optional)
- `breast-cancer-1`: Breast cancer AI project image
- `apollo-health-1`: Apollo Health website screenshot
- `astro-santhvana-1`: Astro Santhvana app screenshot

#### Certificate Assets
- `aws-certificate`: AWS Cloud Practitioner certificate
- `tensorflow-certificate`: TensorFlow Developer certificate
- `azure-certificate`: Azure Fundamentals certificate
- `docker-certificate`: Docker Certified Associate certificate
- `kubernetes-certificate`: Kubernetes Administrator certificate
- `react-certificate`: Advanced React certificate
- `python-certificate`: Python for Data Science certificate
- `gcp-certificate`: Google Cloud Associate certificate

#### Experience Assets
- `tech-solutions-1`, `tech-solutions-2`: Tech Solutions internship photos
- `ai-lab-1`, `ai-lab-2`: AI Research Lab photos
- `startup-1`, `startup-2`: Startup Accelerator photos
- `enterprise-1`, `enterprise-2`: Enterprise Solutions photos

### 5. Features

The Drive integration includes:

- **Automatic fallback**: If a Drive image fails to load, it falls back to placeholder images
- **Lazy loading**: Images load only when needed for better performance
- **Error handling**: Graceful handling of failed image loads
- **Loading states**: Shows loading indicators while images are being fetched
- **Video support**: Supports both images and videos from Google Drive

### 6. Performance Optimization

The system includes:
- Image preloading for critical assets
- Lazy loading for non-critical images
- Automatic error recovery with fallbacks
- Optimized Drive URLs for faster loading

### 7. Usage Examples

```typescript
// Get a Drive URL for an image
const imageUrl = getDriveUrl('your-file-id', 'image');

// Get a Drive URL for a video
const videoUrl = getDriveUrl('your-file-id', 'video');

// Get an asset by ID
const asset = getAssetById('manoj-profile-main');

// Get all assets in a category
const projectAssets = getAssetsByCategory('project');
```

### 8. Troubleshooting

If images don't load:
1. Verify the file ID is correct
2. Ensure the file is shared publicly ("Anyone with the link can view")
3. Check that the file type is supported (JPG, PNG, GIF for images; MP4, WebM for videos)
4. The fallback images will display if Drive images fail

## New Features Added

### 1. Official Technology Logos
- Replaced emoji icons with official technology logos from CDN
- Uses devicons and official brand assets
- Automatic fallback to default icons if logos fail to load

### 2. Rotating Role Text with Icons
- Role text now rotates around the profile photo
- Each role has its own technology icon
- Smooth animations with GSAP
- Icons appear at the bottom of the photo and rotate through different roles

### 3. Google Drive Integration
- Dedicated folder structure for Drive assets
- Dynamic loading of photos and videos
- Automatic fallback to placeholder images
- Performance optimized with lazy loading and preloading

### 4. Enhanced Performance
- Image preloading for critical assets
- Lazy loading for better page speed
- Error handling and graceful degradation
- Optimized Drive URLs for faster access

The portfolio now supports dynamic content loading from your Google Drive while maintaining excellent performance and user experience!