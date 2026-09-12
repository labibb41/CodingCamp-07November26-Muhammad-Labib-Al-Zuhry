# Quick Start Guide - Life Dashboard

## 🚀 Start Here (2 minutes)

### What You're Building
A simple dashboard with:
- ⏰ Real-time clock & greeting
- ⏱️ 25-minute focus timer
- ✅ To-do list (add, edit, delete, mark done)
- 🔗 Quick links to websites
- 3 challenges (pick any 3)

### Tech Stack
- HTML5 only
- CSS3 only (no frameworks)
- Vanilla JavaScript only
- Local Storage for data
- No npm, no backend needed

### Timeline
- **Days:** 5 days (24-30 Aug 2026)
- **Deadline:** Saturday 11:59 PM WIB
- **Daily Time:** 2-3 hours per day

---

## 📋 Quick Checklist

### What's Ready for You
- ✅ Full requirements document
- ✅ Design specifications
- ✅ Step-by-step implementation guide
- ✅ Troubleshooting solutions
- ✅ Project timeline and tasks
- ✅ Kiro steering files (in `.kiro/steering/`)

### What You Need to Create
- ❌ `index.html` (you'll create)
- ❌ `css/style.css` (you'll create)
- ❌ `js/script.js` (you'll create)
- ✅ `.kiro/` folder (already created)
- ✅ Documentation files (already created)

---

## 📁 First Time Setup

### Step 1: Understand the Project (15 min)
```
Read: PROJECT_SUMMARY.md
- Overview of features
- Timeline
- What's required
```

### Step 2: Learn How to Use This (10 min)
```
Read: SETUP_GUIDE.md
- How to use Kiro
- Daily workflow
- Getting help
```

### Step 3: Get Technical Details (20 min)
```
Read: .kiro/steering/project-overview.md
- Architecture
- Constraints
- Data models
```

### Step 4: Start Building (Follow Phase by Phase)
```
Read: .kiro/steering/implementation-guide.md
- Phase 1: HTML structure (Day 1)
- Phase 2: Styling (Day 1)
- Phase 3: Time & greeting (Day 2)
- Phase 4: Timer (Day 2)
- Phase 5: To-do list (Day 3)
- Phase 6: Quick links (Day 3)
- Phase 7: Challenges (Day 4)
- Phase 8: Testing & deploy (Day 5)
```

---

## 🏗️ Create Project Structure

### Create These Folders
```powershell
# In your project folder:
mkdir css
mkdir js
```

### Create These Files
```powershell
# In your project folder:
New-Item index.html
New-Item css/style.css
New-Item js/script.js
```

### Project Structure
```
CodingCamp-24August26-[Name]/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── .kiro/
│   └── steering/
│       ├── project-overview.md
│       ├── implementation-guide.md
│       └── troubleshooting.md
├── requirements.md
├── design.md
├── tasks.md
├── SETUP_GUIDE.md
├── PROJECT_SUMMARY.md
├── QUICK_START.md (this file)
└── CONFIG_SUMMARY.md
```

---

## 💻 5-Day Implementation Plan

### Day 1: Foundation
**Goal:** Setup and basic styling
- [ ] Create HTML boilerplate
- [ ] Create CSS file with variables
- [ ] Link HTML, CSS, JavaScript
- [ ] Create basic layout
- **Time:** 2-3 hours
- **Reference:** Phase 1-2 in implementation-guide.md

### Day 2: Time & Timer
**Goal:** Clock, greeting, and timer working
- [ ] Implement real-time clock
- [ ] Implement greeting logic
- [ ] Implement focus timer
- [ ] Test all updates correctly
- **Time:** 2-3 hours
- **Reference:** Phase 3-4 in implementation-guide.md

### Day 3: To-Do & Quick Links
**Goal:** Full to-do list and quick links
- [ ] Implement add/edit/delete tasks
- [ ] Implement mark as done
- [ ] Setup Local Storage
- [ ] Implement quick links
- [ ] Test persistence
- **Time:** 3-4 hours
- **Reference:** Phase 5-6 in implementation-guide.md

### Day 4: Challenges
**Goal:** 3 challenges implemented
- [ ] Choose 3 challenges
- [ ] Implement each challenge
- [ ] Test all features together
- [ ] Polish UI/UX
- **Time:** 2-3 hours
- **Reference:** Phase 7 in implementation-guide.md

### Day 5: Testing & Deployment
**Goal:** Live on GitHub Pages
- [ ] Test all browsers
- [ ] Test mobile responsiveness
- [ ] Push to GitHub
- [ ] Enable GitHub Pages
- [ ] Final verification
- **Time:** 1-2 hours
- **Reference:** Phase 8 in implementation-guide.md

---

## 🔧 Essential Functions You'll Need

### Time Display
```javascript
// Update clock every second
setInterval(updateClock, 1000);

// Update greeting
setInterval(updateGreeting, 60000);
```

### Focus Timer
```javascript
startTimer()    // Countdown logic
stopTimer()     // Pause timer
resetTimer()    // Back to 25:00
```

### To-Do List
```javascript
addTask(text)           // Add new task
deleteTask(id)          // Remove task
toggleTaskDone(id)      // Mark complete
renderTasks()           // Display tasks
loadTasks()             // From Local Storage
saveTasks()             // To Local Storage
```

### Quick Links
```javascript
renderQuicklinks()      // Display links
loadQuicklinks()        // From Local Storage
saveQuicklinks()        // To Local Storage
```

---

## 🎨 Key CSS Classes

```css
.container          /* Main wrapper */
.header            /* Greeting section */
.timer-section     /* Timer area */
.todo-section      /* To-do list */
.quicklinks-section/* Quick links */
.btn               /* All buttons */
.task-item         /* Individual task */
.task-item.done    /* Completed task */
.task-list         /* Task list container */
```

---

## 📝 What to Build First

### Minimum Viable Product (MVP)
Day 1-2 Priority:
1. HTML structure + styling
2. Real-time clock
3. Time-based greeting

Day 3 Priority:
4. Focus timer
5. To-do list CRUD
6. Quick links

Day 4:
7. Choose 3 challenges
8. Polish everything

---

## 🆚 Allowed vs Not Allowed

### ✅ YOU CAN USE
- HTML5 `<div>`, `<section>`, `<button>`, etc.
- CSS3 variables, flexbox, grid
- JavaScript `const`, `let`, `=>`, `fetch()`
- Vanilla DOM methods: `document.getElementById()`, etc.
- Local Storage API
- Browser APIs: `Date`, `setTimeout`, etc.

### ❌ YOU CANNOT USE
- React, Vue, Angular
- jQuery
- npm packages
- Build tools (Webpack, Vite)
- Multiple CSS or JS files
- Backend servers
- External frameworks

---

## 🧪 Quick Testing Checklist

Before each day ends, verify:

**Day 1:** HTML loads, CSS styles applied
**Day 2:** Clock updates, greeting changes
**Day 3:** Timer counts, to-dos save
**Day 4:** Quick links work, challenges done
**Day 5:** Works in browsers, lives on GitHub Pages

---

## 🚨 Common Mistakes to Avoid

❌ **Don't:** Use React or Vue
❌ **Don't:** Create multiple CSS/JS files
❌ **Don't:** Use npm or packages
❌ **Don't:** Forget Local Storage
❌ **Don't:** Skip browser testing
❌ **Don't:** Deploy last minute
❌ **Don't:** Miss submission deadline

✅ **Do:** Keep it simple
✅ **Do:** Test frequently
✅ **Do:** Save to GitHub often
✅ **Do:** Read documentation
✅ **Do:** Ask Kiro if stuck
✅ **Do:** Submit early if possible

---

## 📚 Read These in Order

1. **This file** (2 min) - Overview
2. `PROJECT_SUMMARY.md` (10 min) - Details
3. `SETUP_GUIDE.md` (10 min) - How to use Kiro
4. `.kiro/steering/project-overview.md` (20 min) - Architecture
5. `.kiro/steering/implementation-guide.md` (with code) - Code along
6. `requirements.md` - Feature specs
7. `design.md` - UI guidelines
8. `tasks.md` - Track progress
9. `.kiro/steering/troubleshooting.md` - When stuck

---

## 💡 Pro Tips

1. **Start with HTML** - Get structure right first
2. **Add CSS gradually** - Style as you go
3. **Test often** - Don't wait until the end
4. **Save frequently** - Commit to Git daily
5. **Use Kiro** - It has all the answers
6. **Check console** - F12 to debug
7. **Mobile first** - Test responsiveness early
8. **Comment code** - Help your future self

---

## 🆘 When You're Stuck

### Option 1: Check Troubleshooting
```
Read: .kiro/steering/troubleshooting.md
- Common issues
- Solutions
- Debug tips
```

### Option 2: Review Implementation Guide
```
Read: .kiro/steering/implementation-guide.md
- Code examples
- Step-by-step explanations
- Testing procedures
```

### Option 3: Ask Kiro
```
Use #project-overview or #implementation-guide
Be specific about what you're trying to do
Show your code
Describe what you expected vs what happened
```

---

## 📊 Daily Progress Tracking

### Use This Template
```
Day 1: [ ] HTML [ ] CSS [ ] Links [ ] Layout
Day 2: [ ] Clock [ ] Greeting [ ] Timer
Day 3: [ ] Add task [ ] Edit task [ ] Delete [ ] Local Storage
Day 4: [ ] Challenge 1 [ ] Challenge 2 [ ] Challenge 3
Day 5: [ ] Testing [ ] GitHub [ ] Pages [ ] Submit
```

---

## 🎯 Success Formula

**Foundation + Features + Challenges + Testing + Deployment = Success**

1. **Foundation** (Day 1) - Solid structure
2. **Features** (Days 2-3) - All MVP working
3. **Challenges** (Day 4) - Polish and extras
4. **Testing** (Day 5) - Verify everything
5. **Deployment** (Day 5) - Live on web
6. **Submit** (Before Saturday) - Paperform

---

## 🎓 What You'll Learn

✅ HTML5 semantic structure
✅ CSS3 layout and styling
✅ Vanilla JavaScript programming
✅ DOM manipulation
✅ Event handling
✅ Local Storage API
✅ Git and GitHub
✅ GitHub Pages deployment
✅ Responsive web design
✅ Web app architecture

---

## 📞 Important Links

- **GitHub Issues:** Use Kiro or browser DevTools (F12)
- **Ask for Help:** Reference steering files with #
- **Time Display:** Check browser console for errors
- **Deployment:** GitHub Pages setup in project-overview.md
- **Submission:** Instructions in PROJECT_SUMMARY.md

---

## ⏰ Deadline Reminder

- **Date:** Saturday, August 30, 2026
- **Time:** 11:59 PM WIB (West Indonesia Time)
- **What to Submit:** 3 links on Paperform
  1. Builder ID
  2. GitHub Repo URL
  3. GitHub Pages URL

---

## 🚀 Ready to Start?

1. **Create the project structure** (folders and files)
2. **Read** `PROJECT_SUMMARY.md`
3. **Follow** `.kiro/steering/implementation-guide.md`
4. **Build phase by phase**
5. **Test frequently**
6. **Deploy to GitHub**
7. **Submit before deadline**

**You've got this! Good luck! 🎉**

---

*Start with: `PROJECT_SUMMARY.md` → `SETUP_GUIDE.md` → `.kiro/steering/implementation-guide.md`*

**Questions? Check the steering files or ask Kiro!**
