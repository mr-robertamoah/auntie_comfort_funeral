# 🎯 Quick Start Guide

## ✅ What's Done

- ✅ Memorial website created with all content and photos
- ✅ Docker setup complete and running
- ✅ QR code generator ready (with text below QR code)
- ✅ Sample QR code generated

## 🌐 View Your Site Locally

Open your browser: **http://localhost:3000**

## 📤 Deploy to Vercel (3 Simple Steps)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Memorial website"

# Create repo at https://github.com/new then:
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to **https://vercel.com**
2. Sign in with GitHub
3. Click **"Add New..." → "Project"**
4. Import your repository
5. Click **"Deploy"**

Wait 2-3 minutes. You'll get a URL like:
`https://memorial-comfort-serwaa.vercel.app`

### Step 3: Generate Final QR Code

1. Edit `generate-qr.js` - replace URL:
   ```javascript
   const websiteURL = 'https://YOUR-VERCEL-URL.vercel.app';
   ```

2. Generate QR code:
   ```bash
   docker-compose exec web node generate-qr.js
   ```

3. Find your QR code: `qr-code.png` (ready to print!)

## 📱 QR Code Features

Your QR code includes:
- The QR code itself
- Text below: "Scan to view the biography of"
- Text below: "Mrs. Comfort Akua Serwaa"

Perfect for printing on funeral programs!

## 🔄 Common Commands

```bash
# Start site
docker-compose up -d

# Stop site
docker-compose down

# View site
http://localhost:3000

# Generate QR code
docker-compose exec web node generate-qr.js

# View logs
docker-compose logs -f web
```

## 📝 Making Changes

1. Edit files (e.g., `app/page.tsx`)
2. Save - site auto-reloads
3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
4. Vercel auto-deploys in ~2 minutes

## 📞 Need Help?

See **DEPLOYMENT_GUIDE.md** for detailed instructions and troubleshooting.
