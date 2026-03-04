const QRCode = require('qrcode');
const fs = require('fs');
const { createCanvas, Image } = require('canvas');

// Replace this URL with your actual Vercel deployment URL after deployment
const websiteURL = 'https://your-site-name.vercel.app';

async function generateQRCodeWithText() {
  try {
    // Generate QR code as buffer
    const qrBuffer = await QRCode.toBuffer(websiteURL, {
      width: 400,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });
    
    // Create canvas with extra space for text
    const canvas = createCanvas(500, 580);
    const ctx = canvas.getContext('2d');
    
    // White background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 500, 580);
    
    // Load QR code as image
    const img = new Image();
    img.onload = () => {
      // Draw QR code centered
      ctx.drawImage(img, 50, 30, 400, 400);
      
      // Add border around QR code
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.strokeRect(50, 30, 400, 400);
      
      // Add text below QR code - using default font
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // First line - larger font
      ctx.font = '22px sans-serif';
      ctx.fillText('Scan to view the biography of', 250, 470);
      
      // Second line - even larger
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('Mrs. Comfort Akua Serwaa', 250, 510);
      
      // Save as PNG
      const buffer = canvas.toBuffer('image/png');
      fs.writeFileSync('qr-code.png', buffer);
      
      console.log('✅ QR Code with text generated: qr-code.png');
      console.log(`📱 QR Code points to: ${websiteURL}`);
    };
    
    img.onerror = (err) => {
      console.error('❌ Error loading QR image:', err);
    };
    
    img.src = qrBuffer;
    
    // Also generate plain SVG version
    const svg = await QRCode.toString(websiteURL, { type: 'svg', width: 400 });
    fs.writeFileSync('qr-code.svg', svg);
    console.log('✅ Plain SVG QR Code generated: qr-code.svg');
    
  } catch (err) {
    console.error('❌ Error generating QR code:', err);
    console.error(err.stack);
  }
}

generateQRCodeWithText();
