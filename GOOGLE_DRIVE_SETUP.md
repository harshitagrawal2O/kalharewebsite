# Google Drive Upload Setup Guide

## Overview
Your app now uses Google Drive for file uploads with OAuth authentication. This provides:
- ✅ **15GB free storage** with Google Drive
- ✅ **No single file size restrictions**
- ✅ **Secure OAuth authentication**
- ✅ **Free forever** (no credit card needed)

## Setup Steps

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name: `LayerForge 3D Printing` (or any name)
4. Click "Create"

### 2. Enable Google Drive API

1. In your project, go to **"APIs & Services"** → **"Library"**
2. Search for **"Google Drive API"**
3. Click on it and press **"Enable"**

### 3. Create OAuth 2.0 Credentials

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"Create Credentials"** → **"OAuth client ID"**
3. If prompted, configure the consent screen:
   - User Type: **External**
   - App name: **LayerForge**
   - User support email: Your email
   - Developer contact: Your email
   - Click **"Save and Continue"**
   - Scopes: Click **"Add or Remove Scopes"**
     - Add: `.../auth/drive.file` (View and manage Google Drive files created by this app)
   - Click **"Save and Continue"**
   - Test users: Add your email
   - Click **"Save and Continue"**

4. Back to **"Create OAuth client ID"**:
   - Application type: **Web application**
   - Name: `LayerForge Web Client`
   - Authorized redirect URIs:
     - Add: `http://localhost:3000/api/auth/callback/google`
     - For production, add: `https://yourdomain.com/api/auth/callback/google`
   - Click **"Create"**

5. Copy the **Client ID** and **Client Secret**

### 4. Update .env File

Open `.env` and update:

```env
GOOGLE_CLIENT_ID=your_actual_client_id_here
GOOGLE_CLIENT_SECRET=your_actual_client_secret_here

# Generate a secret with: openssl rand -base64 32
# Or use any random 32+ character string
NEXTAUTH_SECRET=your_random_secret_here
NEXTAUTH_URL=http://localhost:3000
```

To generate `NEXTAUTH_SECRET`, run in PowerShell:
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

### 5. Start Development Server

```bash
npm run dev
```

### 6. Test the Upload

1. Go to `http://localhost:3000/custom-print`
2. Click **"Sign in with Google"**
3. Allow permissions for Google Drive access
4. Upload your 3D files (.stl, .obj, .3mf, .step, .stp)
5. Files will be uploaded to your Google Drive and shareable links generated

## How It Works

1. **User Authentication**: Users sign in with their Google account
2. **OAuth Flow**: App requests permission to access Google Drive
3. **File Upload**: Files are uploaded to the user's Google Drive
4. **Public Links**: Files are made publicly accessible for download
5. **WhatsApp Quote**: Download links are included in WhatsApp messages

## File Storage

- Files are stored in the user's Google Drive (not yours)
- Each file gets a unique shareable link
- Links format: `https://drive.google.com/uc?export=download&id={fileId}`
- No storage costs for you!

## For Production

When deploying to production:

1. Update OAuth redirect URI in Google Cloud Console:
   - Add: `https://yourdomain.com/api/auth/callback/google`

2. Update `.env`:
   ```env
   NEXTAUTH_URL=https://yourdomain.com
   ```

3. Verify the consent screen in Google Cloud Console
4. Consider publishing the app (move from Testing to Production)

## Troubleshooting

### "Error: Unauthorized"
- Make sure you've signed in with Google
- Check that Google Drive API is enabled
- Verify OAuth credentials are correct in `.env`

### "Error: redirect_uri_mismatch"
- Add the correct redirect URI in Google Cloud Console
- Format: `http://localhost:3000/api/auth/callback/google`

### Files not uploading
- Check browser console for errors
- Verify the user granted Drive permissions
- Check file format is supported (.stl, .obj, .3mf, .step, .stp)

## Security Notes

- Never commit `.env` file to Git (it's in `.gitignore`)
- Keep your `GOOGLE_CLIENT_SECRET` private
- Users can only access their own uploaded files
- Files are automatically made public for download links

---

Need help? The implementation is complete and ready to use once you add your Google OAuth credentials!
