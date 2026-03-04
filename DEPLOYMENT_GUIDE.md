# 🚀 Complete Deployment & QR Code Guide

## Step 1: Push to GitHub

First, let's get your code on GitHub:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Memorial website for Mrs. Comfort Akua Serwaa"
```

Now create a repository on GitHub:
1. Go to https://github.com/new
2. Name it: `memorial-comfort-serwaa` (or any name you prefer)
3. Don't initialize with README (we already have files)
4. Click "Create repository"

Then push your code:

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/memorial-comfort-serwaa.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest - Recommended)

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with your GitHub account
3. **Click "Add New..."** → "Project"
4. **Import your repository**:
   - Find `memorial-comfort-serwaa` in the list
   - Click "Import"
5. **Configure project** (Vercel auto-detects Next.js):
   - Project Name: `memorial-comfort-serwaa` (or customize)
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `next build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
6. **Click "Deploy"**

⏱️ Deployment takes ~2-3 minutes

7. **Get your URL**: After deployment, you'll see something like:
   ```
   https://memorial-comfort-serwaa.vercel.app
   ```
   or
   ```
   https://memorial-comfort-serwaa-xyz123.vercel.app
   ```

### Option B: Using Vercel CLI (From Docker)

```bash
# Install Vercel CLI in container
docker-compose exec web npm install -g vercel

# Login to Vercel
docker-compose exec web vercel login

# Deploy to production
docker-compose exec web vercel --prod
```

Follow the prompts and you'll get your deployment URL.

## Step 3: Generate QR Code with Your Vercel URL

Once deployed, update the QR code generator:

1. **Edit `generate-qr.js`** and replace the URL:
   ```javascript
   // Change this line:
   const websiteURL = 'https://your-site-name.vercel.app';
   
   // To your actual Vercel URL:
   const websiteURL = 'https://memorial-comfort-serwaa.vercel.app';
   ```

2. **Rebuild the Docker container** (to install canvas dependencies):
   ```bash
   docker-compose down
   docker-compose up --build -d
   ```

3. **Generate the QR code**:
   ```bash
   docker-compose exec web node generate-qr.js
   ```

4. **Find your QR code**:
   - `qr-code.png` - Ready to print! Includes text below QR code
   - `qr-code.svg` - Vector version for high-quality printing

## Step 4: Print and Use

The QR code will look like this:
```
┌─────────────────┐
│                 │
│   [QR CODE]     │
│                 │
└─────────────────┘
  Scan to view the biography of
  Mrs. Comfort Akua Serwaa
```

**Printing tips:**
- Use `qr-code.png` for quick printing
- Use `qr-code.svg` for professional printing (scales without quality loss)
- Print size: 2-3 inches works well for funeral programs
- Test scan before mass printing!

## 🔄 Making Updates After Deployment

If you need to update content:

1. **Edit files locally** (e.g., `app/page.tsx`)
2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. **Vercel auto-deploys** - Your site updates in ~2 minutes!

## 📱 Testing the QR Code

Before printing:
1. Open `qr-code.png` on your computer
2. Scan it with your phone camera
3. Verify it opens the correct website
4. Test on both iPhone and Android if possible

## 🎯 Quick Reference

```bash
# View local site
http://localhost:3000

# Start Docker
docker-compose up -d

# Stop Docker
docker-compose down

# Rebuild after changes
docker-compose up --build -d

# Generate QR code
docker-compose exec web node generate-qr.js

# View logs
docker-compose logs -f web
```

## ✅ Checklist

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Got Vercel URL
- [ ] Updated `generate-qr.js` with real URL
- [ ] Rebuilt Docker container
- [ ] Generated QR code
- [ ] Tested QR code with phone
- [ ] Printed QR code for funeral programs

## 🆘 Troubleshooting

**QR code generation fails:**
```bash
# Rebuild with canvas dependencies
docker-compose down
docker-compose up --build -d
```

**Site not updating on Vercel:**
- Check GitHub - commits pushed?
- Check Vercel dashboard - deployment succeeded?
- Clear browser cache

**QR code doesn't scan:**
- Ensure URL in `generate-qr.js` is correct
- Regenerate QR code
- Print larger (3+ inches)
- Ensure good contrast when printing

## 📞 Need Help?

- Vercel docs: https://vercel.com/docs
- Check deployment logs in Vercel dashboard
- Test locally first: http://localhost:3000
