---
inclusion: auto
name: Project Overview
description: Main project guide with architecture, structure, and workflow
---

# To-Do List Life Dashboard - Project Overview

## Quick Facts
- **Project Type:** Vanilla JavaScript Web Application
- **Duration:** 5 Days (24 Aug - 30 Aug 2026)
- **Technology Stack:** HTML5, CSS3, Vanilla JavaScript
- **Data Storage:** Browser Local Storage API
- **Deployment:** GitHub Pages
- **Deadline:** Saturday 11:59 PM WIB

## Project Goals
Build a functional life dashboard that helps users organize their day with:
- Current time and greeting
- Focus timer (Pomodoro)
- To-do list with CRUD operations
- Quick links to favorite websites

## Key Architecture Decisions

### Single File Approach
- **1 HTML file** (`index.html`) for all structure
- **1 CSS file** (`css/style.css`) for all styling
- **1 JavaScript file** (`js/script.js`) for all logic

**Benefits:**
- Simple deployment
- Easy to manage
- No build tool required
- Works directly in browser

### Client-Side Only
- **No backend server required**
- All data stored in Local Storage
- Application works offline
- No API calls or database queries

### Vanilla JavaScript (No Frameworks)
- No React, Vue, or Angular
- Pure JavaScript for all interactivity
- Direct DOM manipulation
- All event handling in single script file

## Project Structure
```
CodingCamp-24August26-[Name]/
├── index.html              # HTML structure
├── css/style.css          # All styles
├── js/script.js           # All JavaScript logic
├── requirements.md        # Project requirements
├── design.md             # Design documentation
├── tasks.md              # Implementation tasks
└── .kiro/
    ├── steering/
    │   ├── project-overview.md (this file)
    │   ├── implementation-guide.md
    │   └── troubleshooting.md
    └── settings/
        └── mcp.json (optional)
```

## MVP Features (Required)

### 1. Greeting & Time Display
```html
Good Morning, [Name]
Friday, September 11, 2026
14:45:30
```
- Real-time clock (updates every second)
- Dynamic greeting based on time of day
- Readable date format

### 2. Focus Timer (Pomodoro)
```
25:00
[START] [STOP] [RESET]
```
- 25-minute countdown timer
- Start/Stop/Reset controls
- Real-time display update
- Optional: Notification when complete

### 3. To-Do List
- Add new tasks with input validation
- Edit existing tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Persist data in Local Storage
- Visual feedback for completed tasks

### 4. Quick Links
- Buttons for quick website access
- Opens links in new tab
- Stored in Local Storage
- Default or user-configured links

## Challenges (Choose 3 of 5)

Select 3 from:
1. **Light/Dark Mode Toggle** - Theme switching
2. **Custom Name in Greeting** - Personalized greeting
3. **Change Pomodoro Time** - Adjustable timer duration
4. **Prevent Duplicate Tasks** - Duplicate task detection
5. **Sort Tasks** - Multiple sort options

## Implementation Workflow

### Phase 1: Foundation (Day 1)
- Create HTML structure
- Setup CSS with variables and layout
- Link files together
- Create basic styling

### Phase 2: Core Features (Days 2-3)
- Greeting & time display logic
- Focus timer functionality
- To-do list CRUD operations
- Quick links functionality

### Phase 3: Challenges (Day 4)
- Implement 3 chosen challenges
- Test all features together
- Polish UI/UX

### Phase 4: Testing & Deployment (Day 5)
- Cross-browser testing
- Mobile responsiveness check
- GitHub setup
- GitHub Pages deployment
- Submit assignment

## Data Models

### Local Storage Structure
```javascript
// Tasks
{
  "tasks": [
    {
      "id": 1,
      "text": "Task description",
      "done": false,
      "createdAt": "2026-09-11T14:45:00Z"
    }
  ]
}

// Quick Links
{
  "quickLinks": [
    {
      "id": 1,
      "name": "Google",
      "url": "https://google.com",
      "icon": "🔍"
    }
  ]
}

// User Settings
{
  "userSettings": {
    "name": "Muhammad",
    "theme": "light",
    "pomodoroTime": 25
  }
}
```

## Important Constraints

### ✅ ALLOWED
- HTML5 semantic elements
- CSS3 with flexbox/grid
- Vanilla JavaScript (ES6+)
- Local Storage API
- Browser APIs (Date, setTimeout, etc.)
- External fonts (Google Fonts, etc.)

### ❌ NOT ALLOWED
- Frontend frameworks (React, Vue, Angular)
- Build tools (Webpack, Vite, etc.)
- Package managers (npm, yarn)
- Backend services
- External JavaScript libraries (jQuery, etc.)
- Database services

## Browser Compatibility

Target: Modern browsers (last 2 versions)
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Development Workflow

### Using Kiro (Recommended)
1. Use Kiro for code assistance
2. Leverage Kiro for debugging
3. Ask Kiro for help with implementation

### Without Kiro
1. Manual code editing
2. Browser dev tools for debugging
3. Test locally before GitHub

### Git Workflow
```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [repo-url]
git push -u origin main

# Regular commits
git add [file]
git commit -m "Feature: [description]"
git push
```

## GitHub Pages Setup

1. Push code to GitHub
2. Go to repository Settings
3. Enable GitHub Pages
4. Select main branch as source
5. Website automatically published

**Published URL:** `https://[username].github.io/CodingCamp-24August26-[Name]/`

## Submission Checklist

Before submitting, verify:
- ✅ All 4 MVP features working
- ✅ 3 challenges completed
- ✅ Code on GitHub
- ✅ GitHub Pages live
- ✅ Responsive design tested
- ✅ Works in multiple browsers
- ✅ All 3 submission links ready:
  - Builder ID
  - GitHub Repo URL
  - GitHub Pages URL

## Common Pitfalls to Avoid

1. **Using frameworks** - Stick to vanilla JavaScript
2. **Creating multiple CSS/JS files** - Keep to 1 each
3. **Forgetting Local Storage** - Data must persist
4. **Not testing thoroughly** - Test all browsers
5. **Skipping .kiro folder** - Must include for submission
6. **Late deployment** - Deploy early, test thoroughly
7. **Missing submission links** - All 3 links required

## Time Management Suggestion

- **Day 1 (24 Aug):** Setup + Basic styling
- **Day 2 (25 Aug):** Time display + Greeting
- **Day 3 (26 Aug):** To-do list + Timer
- **Day 4 (27 Aug):** Quick links + Challenges
- **Day 5 (28 Aug):** Testing + Deployment
- **Final (29-30 Aug):** Buffer for fixes + Submission

## Resources

- [MDN Web Docs](https://developer.mozilla.org/) - JavaScript & DOM
- [CSS Tricks](https://css-tricks.com/) - CSS help
- [GitHub Pages Docs](https://pages.github.com/) - Deployment
- [Local Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Need Help?

Use Kiro to:
- Understand requirements
- Debug code issues
- Suggest implementations
- Review your code
- Help with Git/GitHub

Ask Kiro by describing your problem clearly with:
- What you're trying to do
- What's happening
- What you expected to happen
