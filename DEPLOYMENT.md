# 🚀 Deployment Guide - D'pur D'jadjan Website

## ✅ Git Repository Setup Complete!

Your local Git repository has been initialized with:
- ✅ `.gitignore` - Excludes system and cache files
- ✅ `README.md` - Project documentation
- ✅ `vercel.json` - Vercel deployment configuration
- ✅ `index.html` - Your website
- ✅ Initial commit created

## 📋 Next Steps to Deploy

### Step 1: Create GitHub Repository

1. Go to **[GitHub](https://github.com/new)**
2. Create a new repository with these settings:
   - **Repository name**: `dpur-djadjan-website` (or any name you prefer)
   - **Visibility**: Public or Private (either works with Vercel)
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
3. Click **"Create repository"**

### Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```powershell
# Navigate to your project (if not already there)
cd d:\HBB\WEBDD

# Rename branch to main (if needed)
git branch -M main

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/dpur-djadjan-website.git

# Push your code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

### Step 3: Deploy to Vercel

#### Option A: Deploy via Vercel Website (Recommended)

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**
4. After logging in, click **"Add New..."** → **"Project"**
5. Click **"Import"** next to your `dpur-djadjan-website` repository
6. Configure your project:
   - **Framework Preset**: Leave as detected or select "Other"
   - **Root Directory**: `.` (leave default)
   - **Build Command**: Leave empty (static site)
   - **Output Directory**: Leave empty
7. Click **"Deploy"**
8. Wait 30-60 seconds... 🎉 **Your site is live!**

#### Option B: Deploy via Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project directory)
cd d:\HBB\WEBDD
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - What's your project's name? dpur-djadjan-website
# - In which directory is your code located? ./
# - Want to override the settings? No

# For production deployment
vercel --prod
```

## 🌐 Your Live Website

After deployment, Vercel will provide:
- **Preview URL**: `https://dpur-djadjan-website-xxxxx.vercel.app`
- **Production URL**: `https://dpur-djadjan-website.vercel.app`

### Custom Domain (Optional)

Add your own domain:
1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `www.dpurdadjan.com`)
4. Follow Vercel's DNS configuration instructions

## 🔄 Continuous Deployment

Every time you push changes to GitHub, Vercel will **automatically deploy** them!

```powershell
# Make changes to your website
# Then commit and push:
git add .
git commit -m "Updated products and prices"
git push origin main

# Vercel automatically deploys! ✨
```

## 📊 Vercel Dashboard Features

After deployment, you can:
- ✅ View deployment logs
- ✅ Monitor website analytics
- ✅ Set environment variables
- ✅ Configure custom domains
- ✅ Enable preview deployments for branches

## 🆘 Troubleshooting

### Issue: "git: command not found"
**Solution**: Install Git from [git-scm.com](https://git-scm.com/download/win)

### Issue: "Permission denied (publickey)"
**Solution**: 
1. Use HTTPS instead of SSH: `https://github.com/username/repo.git`
2. Or set up SSH keys: [GitHub SSH Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Issue: Vercel deployment fails
**Solution**: 
- Check that `index.html` is in the root directory
- Verify `vercel.json` is properly formatted
- Check Vercel deployment logs for specific errors

## 📞 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **Git Tutorial**: [git-scm.com/doc](https://git-scm.com/doc)

## ✨ What You Get

- ✅ **Global CDN** - Fast loading worldwide
- ✅ **Free SSL** - HTTPS by default
- ✅ **Auto-scaling** - Handles traffic spikes
- ✅ **99.99% Uptime** - Reliable hosting
- ✅ **Free hosting** - For personal projects
- ✅ **Automatic deployments** - Push to deploy

---

## 🎯 Quick Command Reference

```powershell
# Check Git status
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature-name

# Push changes
git add .
git commit -m "Your message"
git push origin main

# Pull latest changes
git pull origin main
```

---

**Ready to deploy? Follow the steps above and your website will be live in minutes! 🚀**
