# Memorial Website for Mrs. Comfort Akua Serwaa

A simple, elegant memorial website to honor the life of Mrs. Comfort Akua Serwaa Amoah.

## 🚀 Quick Start with Docker

### 1. Build and Run Locally

```bash
# Build and start the container
docker-compose up --build

# Or run in detached mode
docker-compose up -d
```

Visit: http://localhost:3000

### 2. Stop the Container

```bash
docker-compose down
```

## 📦 Deploy to Vercel

### Option 1: Using Vercel CLI (in Docker)

```bash
# Install Vercel CLI in container
docker-compose exec web npm install -g vercel

# Login and deploy
docker-compose exec web vercel login
docker-compose exec web vercel --prod
```

### Option 2: Using Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

## 🔗 Generate QR Code

After deployment, update the URL in `generate-qr.js`:

```bash
# Run inside Docker container
docker-compose exec web node generate-qr.js
```

This creates:
- `qr-code.png` - Print this for funeral programs
- `qr-code.svg` - Vector version for high-quality printing

## 📱 QR Code Usage

1. Print the QR code on funeral programs/cards
2. Guests scan with their phone camera
3. They're directed to the memorial website

## 🛠️ Project Structure

```
.
├── app/
│   ├── page.tsx          # Main memorial page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Styling
├── public/
│   └── images/           # Memorial photos
├── docker-compose.yml    # Docker setup
├── Dockerfile           # Container config
└── generate-qr.js       # QR code generator
```

## 🎨 Customization

Edit `app/page.tsx` to modify content.
Edit `app/globals.css` to change colors/styling.

## 📝 Notes

- Website is fully responsive (mobile-friendly)
- Static export for fast loading
- All images optimized for web
- Simple, elegant design suitable for memorial service
