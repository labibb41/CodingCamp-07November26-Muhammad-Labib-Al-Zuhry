# Deployment Guide - GitHub Pages

## 🚀 Step-by-Step Deployment

### Prerequisites
- [ ] GitHub account created
- [ ] GitHub Desktop installed
- [ ] Code files ready (index.html, css/style.css, js/script.js)
- [ ] All features tested and working

---

## Step 1: Create GitHub Repository

### Option A: Using GitHub Desktop (Recommended)

1. **Create New Repository**
   - Open GitHub Desktop
   - Click "File" → "New Repository"
   - **Name:** `CodingCamp-24August26-[YourName]`
     - Example: `CodingCamp-24August26-Muhammad`
   - **Description:** Life Dashboard - To-Do List Application
   - **Local Path:** Choose your project folder
   - Click "Create Repository"

2. **Add Existing Files**
   - GitHub Desktop will automatically detect your files
   - All files should show as "Changes"

### Option B: Using Web Browser

1. Go to https://github.com/new
2. **Repository name:** `CodingCamp-24August26-[YourName]`
3. **Description:** Life Dashboard - To-Do List Application
4. **Visibility:** Public (required for GitHub Pages)
5. **Initialize with:**
   - [ ] Add .gitignore (No, keep empty)
   - [ ] Add license (No, not needed)
6. Click "Create Repository"

---

## Step 2: Push Code to GitHub

### Using GitHub Desktop (Recommended)

1. **Add Files**
   - All your files should already be listed as "Changes"
   - They appear in the left panel

2. **Commit Changes**
   - Bottom left: Enter commit message
   - Message: `Initial commit: Life Dashboard with challenges`
   - Click "Commit to main"

3. **Publish Repository**
   - Top: Click "Publish repository"
   - **Name:** `CodingCamp-24August26-[YourName]`
   - **Keep private:** Uncheck (must be public)
   - Click "Publish repository"

4. **Verify**
   - GitHub Desktop should show "No local changes"
   - Your code is now on GitHub!

### Using Command Line

```powershell
# Navigate to project folder
cd c:\Users\user\Downloads\CodingCamp-Muhammad Labib

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Life Dashboard with challenges"

# Add remote repository
git remote add origin https://github.com/[YourUsername]/CodingCamp-24August26-[YourName].git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## Step 3: Enable GitHub Pages

### Steps

1. **Go to Repository Settings**
   - Open your repository on GitHub (https://github.com/[YourUsername]/CodingCamp-24August26-[YourName])
   - Click "Settings" (top right, gear icon)

2. **Navigate to Pages**
   - Left sidebar: Click "Pages"
   - Or scroll down to find "GitHub Pages" section

3. **Configure Pages**
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select "main"
   - **Folder:** Select "/" (root)
   - Click "Save"

4. **Wait for Deployment**
   - GitHub will process (usually 1-2 minutes)
   - You'll see a notification: "Your site is live at..."
   - Or refresh page to see green checkmark

### Your Website URL

```
https://[YourUsername].github.io/CodingCamp-24August26-[YourName]/
```

Example:
```
https://muhammadlabib.github.io/CodingCamp-24August26-Muhammad/
```

---

## Step 4: Verify Deployment

### Test Your Website

1. **Open Your Website**
   - Copy the URL from GitHub Pages settings
   - Open in browser (http://... or https://...)

2. **Test All Features**
   - [ ] Time displays and updates
   - [ ] Greeting shows your name (if set)
   - [ ] Timer works (start, stop, reset)
   - [ ] Can add, edit, delete tasks
   - [ ] Duplicate prevention works
   - [ ] Sorting works
   - [ ] Data persists (refresh page)
   - [ ] Quick links work

3. **Check Multiple Browsers**
   - [ ] Chrome/Edge
   - [ ] Firefox
   - [ ] Safari (if available)

4. **Test Mobile**
   - Resize browser window
   - Or use DevTools responsive mode (F12)
   - Should look good on mobile

### If Something Doesn't Work

1. **Check Files Are Uploaded**
   - Go to repository
   - Click "Code" tab
   - Should see: index.html, css/, js/, and markdown files

2. **Check File Structure**
   - index.html should be in root
   - css/style.css should exist
   - js/script.js should exist

3. **Check Local Storage**
   - Open DevTools (F12)
   - Application → Local Storage
   - Should work fine (Local Storage is local to your browser)

4. **Hard Refresh Browser**
   - Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Clears cache and reloads

5. **Check GitHub Pages Status**
   - Go to Settings → Pages
   - Look for any error messages
   - Wait longer if showing "Building..."

---

## Step 5: Get Your Submission Links

### Gather These 3 Links

1. **AWS Builder ID**
   - From your Kiro signup
   - Format: Usually alphanumeric (e.g., "user-12345")

2. **GitHub Repository URL**
   - Format: `https://github.com/[Username]/CodingCamp-24August26-[YourName]`
   - Example: `https://github.com/muhammadlabib/CodingCamp-24August26-Muhammad`

3. **Published Website URL**
   - From GitHub Pages settings
   - Format: `https://[Username].github.io/CodingCamp-24August26-[YourName]/`
   - Example: `https://muhammadlabib.github.io/CodingCamp-24August26-Muhammad/`

### Example Submission

```
Builder ID: user-abc123
GitHub Repo: https://github.com/muhammadlabib/CodingCamp-24August26-Muhammad
Website URL: https://muhammadlabib.github.io/CodingCamp-24August26-Muhammad/
```

---

## Step 6: Daily Updates (After Deployment)

### Push Updates to GitHub

After making changes:

#### Using GitHub Desktop
1. GitHub Desktop will show your changes
2. Enter commit message in bottom left
3. Click "Commit to main"
4. Click "Push origin"
5. Changes live automatically (1-2 min)

#### Using Command Line
```powershell
# Add changes
git add .

# Commit with message
git commit -m "Fix: [description of change]"

# Push to GitHub
git push
```

### Verify Updates Live
- Website updates automatically after push
- Refresh to see changes (hard refresh Ctrl+Shift+R if cached)

---

## Troubleshooting Deployment

### Issue: "Settings page not found"
**Solution:** Make sure you're on the main repository page, not a fork

### Issue: "GitHub Pages not showing up"
**Solution:** 
1. Check branch is "main"
2. Check folder is "/" (root)
3. Wait 2-3 minutes
4. Hard refresh browser

### Issue: "404 - Not Found"
**Solution:**
1. Check URL is correct
2. Verify files exist in repository
3. Hard refresh (Ctrl+Shift+R)
4. Check file structure (must be index.html in root)

### Issue: "CSS/JS not loading"
**Solution:**
1. Check file paths in HTML are correct
2. Should be: `href="css/style.css"` and `src="js/script.js"`
3. NOT: `href="/css/style.css"` (don't use leading slash)
4. Hard refresh

### Issue: "Local Storage not working"
**Solution:**
- Local Storage works the same on GitHub Pages
- Check DevTools → Application → Local Storage
- Verify URL matches what you're testing

### Issue: "Repository is private"
**Solution:**
- Go to Settings
- Scroll to "Danger zone"
- Click "Change repository visibility"
- Select "Public"
- Confirm

---

## ✅ Pre-Submission Checklist

### Code Quality
- [ ] All files uploaded to GitHub
- [ ] index.html in root
- [ ] css/style.css exists
- [ ] js/script.js exists
- [ ] .kiro folder included
- [ ] No errors in console (F12)

### Features Working
- [ ] Time display updates
- [ ] Greeting shows (with or without name)
- [ ] Timer works
- [ ] To-do CRUD works
- [ ] Duplicates prevented
- [ ] Sorting works
- [ ] Quick links work
- [ ] Data persists

### Website Published
- [ ] GitHub Pages enabled
- [ ] Website is live (can access URL)
- [ ] All features work on live site
- [ ] Mobile responsive

### Ready for Submission
- [ ] Builder ID confirmed
- [ ] Repository URL copied
- [ ] Website URL copied
- [ ] All 3 links ready to submit

---

## 📝 Final Submission

### When You're Ready

1. Go to Paperform (link opens Wednesday)
2. Enter your information:
   - **AWS Builder ID:** [Your Builder ID]
   - **GitHub Repository URL:** [Your Repo URL]
   - **Published Website URL:** [Your GitHub Pages URL]
3. Submit
4. Save confirmation

### Deadline
- **Date:** Saturday, August 30, 2026
- **Time:** 11:59 PM WIB
- **Do not submit after deadline!**

---

## 🎉 Congratulations!

Your website is now live on the internet! 🚀

**You can share it with:**
- Friends
- Family
- Social media
- Anywhere!

The link is: `https://[Username].github.io/CodingCamp-24August26-[YourName]/`

Good luck with your submission! 💪
