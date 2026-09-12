# To-Do List Life Dashboard - Project Summary

## 📋 Project Overview

Build a life dashboard web application to help users organize their day with time display, to-do list, focus timer, and quick links.

**Duration:** 5 days (24 Aug - 30 Aug 2026)  
**Deadline:** Saturday 11:59 PM WIB  
**Technology:** HTML5, CSS3, Vanilla JavaScript, Local Storage

---

## 🎯 MVP Features (Required)

### 1. Greeting & Time Display ⏰
- Real-time clock (updates every second)
- Current date in readable format
- Dynamic greeting based on time of day
  - 5-11 AM: "Good Morning"
  - 11 AM-3 PM: "Good Afternoon"
  - 3-6 PM: "Good Evening"
  - 6 PM-5 AM: "Good Night"

### 2. Focus Timer (Pomodoro) ⏱️
- 25-minute countdown timer
- Start, Stop, Reset buttons
- Real-time display (MM:SS format)
- Visual feedback for running state
- Optional: Sound notification when complete

### 3. To-Do List Management ✅
- Add tasks with validation
- Edit existing tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Visual feedback for completed tasks
- **Persist all data in Local Storage**

### 4. Quick Links 🔗
- Buttons to open favorite websites in new tab
- Examples: Google, GitHub, YouTube, Gmail, LinkedIn
- Default quick links included
- Persist links in Local Storage
- Optional: Add/edit/delete custom links

---

## 🚀 Challenges (Choose 3 of 5)

Pick 3 challenges to implement:

### Challenge 1: Light / Dark Mode Toggle 🌓
- Toggle button in header
- Switch between light and dark themes
- Smooth theme transitions
- Save preference in Local Storage
- Load saved theme on page reload

### Challenge 2: Custom Name in Greeting 👤
- Input field for user's name
- Personalized greeting (e.g., "Good Morning, Muhammad")
- Save name to Local Storage
- Allow editing name
- Show default greeting if name not set

### Challenge 3: Change Pomodoro Time ⏲️
- Input field or slider to set timer duration
- Valid range: 1-60 minutes
- Reset timer when duration changes
- Save preference to Local Storage
- Show current duration in UI

### Challenge 4: Prevent Duplicate Tasks 🚫
- Check for duplicate tasks before adding
- Case-insensitive comparison
- Show error message if duplicate found
- Prevent adding duplicate task
- Trim whitespace before comparison

### Challenge 5: Sort Tasks 📊
- Sort buttons for different methods:
  - By status (done/undone)
  - Alphabetically (A-Z)
  - By date (newest/oldest)
- Save sort preference to Local Storage
- Apply sort when rendering tasks
- Show current sort method in UI

---

## 📁 Project Structure

```
CodingCamp-24August26-[Name]/
├── index.html              # Single HTML file
├── css/
│   └── style.css          # Single CSS file
├── js/
│   └── script.js          # Single JavaScript file
├── requirements.md         # Project requirements
├── design.md              # Design documentation
├── tasks.md               # Implementation tasks
├── SETUP_GUIDE.md         # This setup guide
├── PROJECT_SUMMARY.md     # Project summary
└── .kiro/
    └── steering/          # Kiro configuration
        ├── project-overview.md
        ├── implementation-guide.md
        └── troubleshooting.md
```

---

## ✅ Technology Stack

### ALLOWED ✅
- HTML5 semantic elements
- CSS3 with Flexbox/Grid
- Vanilla JavaScript (ES6+)
- Local Storage API
- Browser APIs (Date, setTimeout, etc.)
- External fonts (Google Fonts)

### NOT ALLOWED ❌
- React, Vue, Angular
- jQuery or other libraries
- Build tools (Webpack, Vite)
- npm packages
- Backend services
- Multiple CSS/JS files

---

## 📅 Implementation Timeline

### Day 1: Foundation & Styling
- Create HTML boilerplate
- Setup CSS with variables
- Create responsive layout
- Link all files
- Estimated time: 2-3 hours

### Day 2: Time Display & Greeting
- Implement clock logic
- Implement greeting logic
- Real-time updates
- Format date and time
- Estimated time: 1-2 hours

### Day 3: Focus Timer & To-Do List
- Implement timer countdown
- Create to-do CRUD operations
- Setup Local Storage
- Render task list
- Estimated time: 3-4 hours

### Day 4: Quick Links & Challenges
- Implement quick links
- Choose and implement 3 challenges
- Test all features together
- Polish UI
- Estimated time: 2-3 hours

### Day 5: Testing & Deployment
- Cross-browser testing
- Mobile responsiveness check
- Push to GitHub
- Enable GitHub Pages
- Final testing
- Submit via Paperform
- Estimated time: 1-2 hours

**Total Estimated Time:** 10-15 hours

---

## 🔧 Configuration Files Created

### project-overview.md
Complete project guide including:
- Architecture decisions
- Project structure
- MVP features overview
- Implementation workflow
- Data models
- Common pitfalls

### implementation-guide.md
Step-by-step instructions with:
- Code examples for each feature
- Phase-by-phase breakdown
- Testing procedures
- Challenge implementations
- Tips for success

### troubleshooting.md
Solutions for:
- Time display issues
- Timer problems
- To-do list bugs
- Local Storage issues
- CSS styling problems
- JavaScript logic errors
- GitHub Pages deployment

---

## 📊 Data Models

### Local Storage Structure

```javascript
// Tasks Array
localStorage["tasks"] = JSON.stringify([
  {
    id: 1,
    text: "Buy groceries",
    done: false,
    createdAt: "2026-09-11T14:45:00Z"
  }
])

// Quick Links
localStorage["quicklinks"] = JSON.stringify([
  {
    id: 1,
    name: "Google",
    url: "https://google.com",
    icon: "🔍"
  }
])

// User Settings
localStorage["userSettings"] = JSON.stringify({
  name: "Muhammad",
  theme: "light",
  pomodoroTime: 25,
  sortType: "status"
})
```

---

## 🎨 Design Guidelines

### Color Scheme (Light Mode)
- Background: `#f5f5f5`
- Card: `#ffffff`
- Primary: `#2196F3` (blue)
- Success: `#4CAF50` (green)
- Text: `#333333` (dark)
- Text Light: `#666666` (gray)

### Color Scheme (Dark Mode - for Challenge)
- Background: `#1a1a1a`
- Card: `#2d2d2d`
- Primary: `#64B5F6` (light blue)
- Text: `#e0e0e0` (light)
- Text Light: `#b0b0b0` (gray)

### Layout
- Desktop: Multi-column or full-width sections
- Mobile: Single column, stacked vertically
- Full-width responsive design
- Clear visual hierarchy

---

## 🧪 Testing Checklist

Before submitting, verify:
- [ ] Time updates in real-time
- [ ] Greeting changes at correct hours
- [ ] Timer counts down accurately
- [ ] Tasks persist after refresh
- [ ] Quick links open in new tab
- [ ] All 3 challenges working
- [ ] Responsive on mobile/tablet
- [ ] Works in Chrome, Firefox, Edge, Safari
- [ ] No errors in browser console
- [ ] Local Storage data persisting

---

## 🚀 Deployment Checklist

### GitHub Setup
- [ ] Create repository: `CodingCamp-24August26-[Name]`
- [ ] Initialize git
- [ ] Add all files
- [ ] Initial commit
- [ ] Push to GitHub
- [ ] Verify code on GitHub

### GitHub Pages
- [ ] Go to Settings → Pages
- [ ] Select "Deploy from a branch"
- [ ] Choose "main" branch
- [ ] Save
- [ ] Wait 1-2 minutes
- [ ] Test website is live
- [ ] Verify all features work

### Submission
- [ ] Gather AWS Builder ID
- [ ] Copy GitHub Repo URL
- [ ] Copy GitHub Pages URL
- [ ] Fill Paperform (opens Wednesday)
- [ ] Submit before Saturday 11:59 PM WIB
- [ ] Save submission confirmation

---

## 📝 Submission Requirements

### Required Information
1. **AWS Builder ID** - From Kiro signup
2. **GitHub Repository URL** - Full link to repo
3. **Published Website URL** - GitHub Pages URL

### Repository Contents
- ✅ `index.html` - Single HTML file
- ✅ `css/style.css` - Single CSS file
- ✅ `js/script.js` - Single JavaScript file
- ✅ `.kiro/` folder with configuration
- ✅ `requirements.md` - Project requirements
- ✅ `design.md` - Design documentation
- ✅ `tasks.md` - Implementation tasks

### Website Requirements
- ✅ All 4 MVP features implemented
- ✅ 3 challenges completed
- ✅ Works in modern browsers
- ✅ Responsive design
- ✅ Local Storage working
- ✅ GitHub Pages published

---

## 💡 Tips for Success

1. **Test frequently** - Test after each feature
2. **Use browser console** - Check for errors with F12
3. **Save regularly** - Commit to Git every day
4. **Keep it simple** - Don't overcomplicate
5. **Mobile first** - Test responsive early
6. **Comment code** - Help your future self
7. **Ask Kiro** - Use it for help when stuck
8. **Refer to steering files** - They have all answers

---

## 🆘 Need Help?

### Quick Reference
- **Questions about project?** → See `project-overview.md`
- **How to implement feature?** → See `implementation-guide.md`
- **Stuck on a bug?** → See `troubleshooting.md`
- **Ask Kiro** → Type `#` to include steering files

### Common Resources
- [MDN Web Docs](https://developer.mozilla.org/) - JS & DOM
- [CSS Tricks](https://css-tricks.com/) - CSS help
- [GitHub Pages Docs](https://pages.github.com/) - Deployment

---

## 🎓 Learning Outcomes

By completing this project, you'll learn:
- ✅ HTML5 semantic structure
- ✅ CSS3 layout (Flexbox/Grid)
- ✅ Vanilla JavaScript DOM manipulation
- ✅ Event handling and listeners
- ✅ Local Storage API for persistence
- ✅ Array methods and data structures
- ✅ Git and GitHub workflow
- ✅ GitHub Pages deployment
- ✅ Responsive web design
- ✅ Web application architecture

---

## 🏆 Success Criteria

Your project is complete when:
1. ✅ All 4 MVP features fully implemented
2. ✅ 3 chosen challenges working
3. ✅ Code is clean and well-commented
4. ✅ Website works in all modern browsers
5. ✅ Design is user-friendly and responsive
6. ✅ Data persists with Local Storage
7. ✅ Code published on GitHub Pages
8. ✅ All submission information provided

---

**Good luck! You've got this! 🚀**

*Questions? Check the steering files or ask Kiro for help.*
