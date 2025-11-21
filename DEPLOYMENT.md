# LayerForge - Vercel Deployment Guide

## ✅ Build Successful!

Your project builds successfully with **0 errors**. Ready for deployment to Vercel!

---

## 📋 Pre-Deployment Checklist

- [x] Production build passes (`npm run build`)
- [x] All TypeScript errors fixed
- [x] ESLint errors resolved (warnings are okay)
- [x] Environment variables template created (`.env.example`)
- [ ] Google OAuth credentials updated for production
- [ ] Repository pushed to GitHub

---

## 🚀 Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. **Go to [Vercel Dashboard](https://vercel.com/new)**

2. **Import Your Git Repository**
   - Connect your GitHub account
   - Select `progo-3dService` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (keep default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   
   ```
   GOOGLE_CLIENT_ID=your_actual_client_id
   GOOGLE_CLIENT_SECRET=your_actual_secret
   NEXTAUTH_SECRET=your_generated_secret
   NEXTAUTH_URL=https://your-domain.vercel.app
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - Your site will be live!

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: progo-3dservice
# - Deploy? Yes

# Add environment variables
vercel env add GOOGLE_CLIENT_ID
vercel env add GOOGLE_CLIENT_SECRET
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL

# Redeploy with environment variables
vercel --prod
```

---

## 🔐 Update Google OAuth for Production

After deploying, you'll get a URL like: `https://your-project.vercel.app`

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. Navigate to **APIs & Services** → **Credentials**
3. Click on your OAuth 2.0 Client ID
4. Under **Authorized redirect URIs**, add:
   ```
   https://your-project.vercel.app/api/auth/callback/google
   ```
5. Click **Save**

6. **Update Vercel Environment Variable**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Update `NEXTAUTH_URL` to: `https://your-project.vercel.app`
   - Redeploy the project

---

## 📱 Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your custom domain (e.g., `layerforge.com`)
3. Follow DNS configuration instructions
4. Update `NEXTAUTH_URL` to your custom domain
5. Update Google OAuth redirect URI to custom domain

---

## 🔍 Post-Deployment Testing

After deployment, test these features:

- [ ] Home page loads correctly
- [ ] Google Sign-in works
- [ ] File upload to Google Drive works
- [ ] WhatsApp quote link includes file URLs
- [ ] All pages render without errors
- [ ] Mobile responsiveness works

---

## 🐛 Troubleshooting

### Issue: "Callback URL Mismatch"
**Solution**: Make sure the redirect URI in Google Cloud Console exactly matches:
```
https://your-project.vercel.app/api/auth/callback/google
```

### Issue: "NEXTAUTH_URL Mismatch"
**Solution**: Update the environment variable in Vercel:
- Go to Settings → Environment Variables
- Update `NEXTAUTH_URL` to match your deployment URL
- Redeploy

### Issue: "Upload Failed"
**Solution**: 
- Check that Google Drive API is enabled
- Verify OAuth scopes include `https://www.googleapis.com/auth/drive.file`
- Test user is added in Google Cloud Console (if app is in testing mode)

### Issue: Build Fails on Vercel
**Solution**: 
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify `.env` variables are set in Vercel

---

## 📊 Build Information

```
Route (app)                                 Size  First Load JS
┌ ○ /                                     9.3 kB         197 kB
├ ○ /about                               4.25 kB         149 kB
├ ○ /custom-print                        51.9 kB         244 kB
└ ... (all routes optimized)

Build time: ~20 seconds
Total pages: 14
API routes: 2
```

---

## 🎉 Success!

Once deployed, your LayerForge 3D Printing Service will be live at:
- **Vercel URL**: `https://your-project.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (if configured)

**Features Working:**
✅ Google OAuth Authentication
✅ Google Drive File Uploads  
✅ WhatsApp Quote Integration
✅ Dynamic Shopping Cart
✅ Responsive Design
✅ Fast Performance

---

## 📞 Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Google OAuth Setup](https://console.cloud.google.com/)

Happy deploying! 🚀
