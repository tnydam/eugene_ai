# Eugene AI - Deployment Guide

Complete guide to deploy Eugene AI to GitHub Pages with custom domain eugeneai.tech

---

## 📋 Prerequisites

- GitHub account
- Domain: eugeneai.tech (or your custom domain)
- Node.js 18+ installed locally

---

## 🚀 Step 1: Push to GitHub

### Create Repository

```bash
# Initialize git if not already
cd eugene-web
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Eugene AI web app"

# Create repo on GitHub
# Go to: https://github.com/new
# Name: eugene-ai
# Public repository
# Don't initialize with README (you already have one)

# Add remote
git remote add origin https://github.com/tatiana-nydam/eugene-ai.git

# Push
git push -u origin main
```

---

## 🔧 Step 2: Configure GitHub Pages

### Enable GitHub Pages

1. Go to your repository: `https://github.com/tatiana-nydam/eugene-ai`

2. Click **Settings**

3. Scroll to **Pages** (left sidebar)

4. Under **Source**, select:
   - Source: **GitHub Actions**

5. Click **Save**

---

## 🔐 Step 3: Add Secrets (Optional)

### For Email Notifications

1. Go to **Settings** → **Secrets and variables** → **Actions**

2. Click **New repository secret**

3. Add these secrets:

```
Name: VITE_GOOGLE_CLIENT_ID
Value: [your Google OAuth client ID]

Name: VITE_SENDGRID_API_KEY  
Value: [your SendGrid API key]

Name: VITE_STRIPE_PUBLIC_KEY
Value: [your Stripe public key]
```

---

## 🌐 Step 4: Connect Custom Domain (eugeneai.tech)

### Option A: Using GitHub Pages Custom Domain

1. In your repo **Settings** → **Pages**

2. Under **Custom domain**, enter: `eugeneai.tech`

3. Click **Save**

4. Check **Enforce HTTPS** (wait a few minutes for cert)

### Option B: Using CNAME File

1. Create file: `public/CNAME`
   ```bash
   echo "eugeneai.tech" > public/CNAME
   ```

2. Commit and push:
   ```bash
   git add public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

---

## 🔗 Step 5: Configure DNS

### DNS Settings at Your Domain Registrar

**Add these records:**

**A Records (for root domain):**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**CNAME Record (for www):**
```
Type: CNAME
Name: www
Value: tatiana-nydam.github.io
TTL: 3600
```

### Wait for DNS Propagation

DNS changes can take 24-48 hours. Check status:

```bash
# Check A records
dig eugeneai.tech

# Check CNAME
dig www.eugeneai.tech

# Check propagation globally
https://www.whatsmydns.net/#A/eugeneai.tech
```

---

## ✅ Step 6: Verify Deployment

### Check GitHub Actions

1. Go to **Actions** tab in your repo

2. You should see a workflow running: "Deploy to GitHub Pages"

3. Wait for it to complete (green checkmark ✓)

### Test the Site

1. Visit: `https://tatiana-nydam.github.io/eugene-ai`
   - Should show Eugene landing page

2. Visit: `https://eugeneai.tech` (after DNS propagates)
   - Should show same page

3. Visit: `https://www.eugeneai.tech`
   - Should redirect to `https://eugeneai.tech`

---

## 🛠️ Troubleshooting

### Build Fails

**Check logs:**
1. Go to **Actions** tab
2. Click failed workflow
3. Expand steps to see error

**Common issues:**
- Missing dependencies: Run `npm install` locally first
- TypeScript errors: Run `npm run build` locally to catch errors
- Missing secrets: Add in repo settings

### Custom Domain Not Working

**Symptoms:** 404 on eugeneai.tech

**Fixes:**
1. Check DNS propagation: `dig eugeneai.tech`
2. Verify CNAME file exists in deployed site
3. Check GitHub Pages settings
4. Wait 24 hours for DNS
5. Try clearing browser cache

### HTTPS Certificate Error

**Symptoms:** "Not Secure" warning

**Fixes:**
1. Wait 15-30 minutes after adding custom domain
2. Check "Enforce HTTPS" in Settings → Pages
3. May take up to 24 hours for cert

---

## 🔄 Making Updates

### Deploy New Changes

```bash
# Make changes
git add .
git commit -m "Description of changes"
git push origin main

# GitHub Actions automatically:
# 1. Builds the app
# 2. Runs tests
# 3. Deploys to GitHub Pages
# 4. Available at eugeneai.tech in ~2 minutes
```

---

## 📊 Monitoring

### Check Site Status

**GitHub Status Badge:**
Add to README:
```markdown
[![Deploy Status](https://github.com/tatiana-nydam/eugene-ai/workflows/Deploy/badge.svg)](https://github.com/tatiana-nydam/eugene-ai/actions)
```

**Uptime Monitoring:**
- Use: [UptimeRobot](https://uptimerobot.com) (free)
- Monitor: https://eugeneai.tech
- Get alerts if site goes down

---

## 🎯 Custom Deployment Options

### Deploy to Vercel (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add custom domain
vercel domains add eugeneai.tech
```

### Deploy to Netlify (Alternative)

1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add custom domain: eugeneai.tech

---

## 📝 Environment-Specific Builds

### Production Build

```bash
# Set production environment
NODE_ENV=production npm run build

# Preview production build
npm run preview
```

### Development vs Production

**Development (localhost:3000):**
- Hot reload
- Source maps
- Debug mode

**Production (eugeneai.tech):**
- Minified code
- Optimized assets
- No source maps
- Analytics enabled

---

## 🔐 Security Checklist

Before deploying:

- [ ] Environment variables in GitHub Secrets (not in code)
- [ ] HTTPS enabled and enforced
- [ ] Dependencies up to date: `npm audit`
- [ ] No API keys in frontend code
- [ ] CORS configured properly
- [ ] Rate limiting on API endpoints

---

## 📈 Post-Deployment

### Add Analytics

**Google Analytics:**
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**Plausible (Privacy-friendly):**
```html
<script defer data-domain="eugeneai.tech" src="https://plausible.io/js/script.js"></script>
```

### Set Up Email

**SendGrid for notifications:**
1. Create account: https://sendgrid.com
2. Get API key
3. Add to GitHub Secrets: `VITE_SENDGRID_API_KEY`
4. Verify sender domain: eugene@eugeneai.tech

---

## 🎉 Success Checklist

- [x] Code pushed to GitHub
- [x] GitHub Actions workflow running
- [x] Site deployed to GitHub Pages
- [x] Custom domain configured (eugeneai.tech)
- [x] DNS records added
- [x] HTTPS certificate working
- [x] Site accessible at eugeneai.tech
- [x] Email notifications configured
- [x] Analytics added
- [x] Monitoring set up

---

## 📞 Support

**Deployment Issues:**
- GitHub Pages Docs: https://docs.github.com/pages
- Community: https://github.community

**DNS Issues:**
- DNS Checker: https://www.whatsmydns.net
- DNS Propagation: https://dnschecker.org

**General Help:**
- Email: support@eugeneai.tech
- GitHub Issues: https://github.com/tatiana-nydam/eugene-ai/issues

---

**Estimated deployment time:** 30 minutes + DNS propagation (24-48 hours)

**Cost:** $0 (GitHub Pages is free for public repos)

**Maintenance:** Automatic via GitHub Actions on every push
