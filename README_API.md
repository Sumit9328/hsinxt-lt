# API Routes Documentation

This Next.js application includes all backend APIs integrated as App Router API routes.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

## API Endpoints

### Packages

- `GET /api/packages` - Get all packages
- `GET /api/packages/[slug]` - Get a single package by slug

### India Packages

- `GET /api/india` - Get all India packages
- `GET /api/india/[slug]` - Get a single India package by slug

### Asia Packages

- `GET /api/asia` - Get all Asia packages
- `GET /api/asia/[slug]` - Get a single Asia package by slug

### International Packages

- `GET /api/international` - Get all international packages
- `GET /api/international/[slug]` - Get a single international package by slug

### Upload

- `POST /api/upload` - Upload an image to Cloudinary (travel-packages folder)
- `POST /api/upload/india` - Upload an image to Cloudinary (india-travel folder)

#### Upload Request Format

```javascript
const formData = new FormData();
formData.append('image', file);

const response = await fetch('/api/upload', {
  method: 'POST',
  body: formData,
});
```

## Data Files

All package data is stored in `lib/data/`:
- `packages.json` - All packages
- `india-packages.json` - India packages
- `asia-packages.json` - Asia packages
- `international-packages.json` - International packages

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file with your Cloudinary credentials

3. Run the development server:
```bash
npm run dev
```

The API routes will be available at `http://localhost:3000/api/...`

