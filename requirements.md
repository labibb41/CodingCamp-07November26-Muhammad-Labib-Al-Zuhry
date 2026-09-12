# To-Do List Life Dashboard - Requirements

## Project Overview
Building a simple life dashboard web application to help users organize their day. The dashboard displays current time, greeting based on time of day, a to-do list, a focus timer, and quick links to favorite websites.

**Duration:** 5 days (24 August - 30 August 2026)  
**Deadline:** Saturday 11:59 PM WIB  
**Repository Format:** `CodingCamp-24August26-[YourName]`

## Technical Constraints

### TC-1: Technology Stack
- **HTML5** untuk structure
- **CSS3** untuk styling  
- **Vanilla JavaScript** (no frameworks: React, Vue, Angular, etc.)
- **No backend server** - fully client-side application

### TC-2: Data Storage
- **Browser Local Storage API** for all persistence
- All data stored client-side only
- No database required

### TC-3: Browser Compatibility
- Must work in modern browsers: Chrome, Firefox, Edge, Safari
- Can be used as standalone web app or browser extension
- Responsive design required (desktop, tablet, mobile)

### TC-4: Code Organization
- **Single HTML file:** `index.html`
- **Single CSS file:** `css/style.css`
- **Single JavaScript file:** `js/script.js`
- Keep code clean and modular with clear comments

## Non-Functional Requirements

### NFR-1: Simplicity
- Clean, minimal interface
- Easy to understand and use
- No complex setup required
- No test framework required
- Works out of the box

### NFR-2: Performance
- Fast initial load time
- Responsive UI interactions
- No noticeable lag when updating data
- Smooth animations and transitions

### NFR-3: Visual Design
- User-friendly, professional aesthetic
- Clear visual hierarchy
- Readable typography with good contrast
- Consistent spacing and alignment

### NFR-4: Accessibility
- Semantic HTML structure
- Proper color contrast ratios
- Keyboard navigation support
- Clear focus states

## Required Features (MVP)

### 1. Greeting & Time Display
- **Greeting Message**: Shows context-aware greeting based on time of day
  - 5:00 - 11:00: "Good Morning"
  - 11:00 - 15:00: "Good Afternoon"
  - 15:00 - 18:00: "Good Evening"
  - 18:00 - 5:00: "Good Night"
- **Current Time**: Displays time in HH:MM:SS format, updates every second
- **Current Date**: Displays date in readable format (e.g., "Friday, September 11, 2026")
- **Location**: Header section at top of dashboard

### 2. Focus Timer (Pomodoro)
- **Default Duration**: 25 minutes
- **Display Format**: MM:SS (e.g., "25:00")
- **Start Button**: Begins countdown
- **Stop Button**: Pauses the timer (can resume from same position)
- **Reset Button**: Returns timer to 25:00 (or current configured time)
- **Timer Logic**: Countdown by 1 second, accurate to the second
- **Visual Feedback**: Clear indication of timer running/paused state
- **Optional**: Sound notification when timer completes

### 3. To-Do List Management
- **Add Tasks**
  - Input field to enter new task
  - "Add" button or Enter key to submit
  - Input validation (no empty tasks)
  - Clear input field after successful add
  
- **Display Tasks**
  - List view of all tasks with checkboxes
  - Show task completion status
  - Display number of total/completed tasks (optional)
  
- **Edit Tasks**
  - Ability to edit task text after creation
  - Click edit button or double-click to edit
  - Modal or inline editing
  - Save and cancel options
  
- **Mark as Done**
  - Checkbox to toggle completion status
  - Completed tasks show visual difference (strikethrough, opacity, color change)
  
- **Delete Tasks**
  - Delete button for each task
  - Remove task from list
  - Optional: Confirmation before delete
  
- **Data Persistence**
  - All tasks automatically saved to Local Storage
  - Tasks load from Local Storage on page refresh
  - Data persists after browser close/reopen

### 4. Quick Links Section
- **Link Display**: Buttons or cards for quick access
- **Functionality**:
  - Click opens website in new tab/window
  - Can contain URL, title, and optional icon/emoji
  
- **Data Persistence**:
  - Quick links stored in Local Storage
  - Load automatically on page load
  
- **Default Quick Links** (examples):
  - Google, GitHub, YouTube, Gmail, LinkedIn, etc.
  
- **Optional**: Add/edit/delete quick links (UI for management)

## Challenges (Choose 3 of 5)

### Challenge Option 1: Light / Dark Mode Toggle
- Toggle button in header or settings
- Switch between light and dark CSS themes
- Smooth transition between themes
- Save user's theme preference to Local Storage
- Load saved preference on page reload
- Ensure proper contrast in both themes

### Challenge Option 2: Custom Name in Greeting
- Input field for user's name (modal, header, or settings)
- Save name to Local Storage
- Update greeting to include name: "Good Morning, [Name]"
- Show default greeting if name not set
- Allow editing name later
- Input validation (not empty, max 50 characters)

### Challenge Option 3: Change Pomodoro Time
- Input field or slider to set timer duration
- Validate input (minimum 1 minute, maximum 60 minutes)
- Save preference to Local Storage
- Load saved preference on page reload
- Reset timer display when duration changes
- Show current duration in UI

### Challenge Option 4: Prevent Duplicate Tasks
- When adding task, check for duplicates
- Case-insensitive comparison
- Trim whitespace before comparing
- Show error message if duplicate detected
- Prevent task from being added if it's a duplicate
- Let user know existing task already in list

### Challenge Option 5: Sort Tasks
- Sort buttons or dropdown to choose sort method:
  - **By Status**: Undone first, then done
  - **Alphabetical**: A-Z or Z-A
  - **By Date**: Newest or oldest first
- Save sort preference to Local Storage
- Apply selected sort when rendering tasks
- Update display immediately when sort changes
- Show current sort method in UI

## Folder Structure

```
CodingCamp-24August26-[YourName]/
├── index.html              # Single HTML file
├── css/
│   └── style.css          # Single CSS file only
├── js/
│   └── script.js          # Single JavaScript file only
├── requirements.md         # This file
├── design.md              # Design documentation
├── tasks.md               # Implementation tasks
└── .kiro/                 # Kiro configuration (for submission)
    └── steering/          # Optional: Kiro steering files
```

## GitHub & Deployment

### Repository Setup
- Create GitHub repository: `CodingCamp-24August26-[YourName]`
- Include `.kiro` folder in repository
- Use GitHub Desktop or command line

### GitHub Pages Deployment
- Enable GitHub Pages in repository settings
- Select main branch as source
- Website automatically published at: `https://[username].github.io/CodingCamp-24August26-[YourName]/`
- Verify website is live and accessible

### Verification Checklist
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled and published
- [ ] Website loads and functions correctly
- [ ] All features work in published version
- [ ] Local Storage working in production
- [ ] Responsive design on different screen sizes

## Submission Requirements

### What to Submit (via Paperform)
1. **AWS Builder ID**: Your unique Builder ID from Kiro signup
2. **GitHub Repository URL**: Full link to your repository
   - Format: `https://github.com/[username]/CodingCamp-24August26-[YourName]`
3. **Published Website URL**: GitHub Pages URL
   - Format: `https://[username].github.io/CodingCamp-24August26-[YourName]/`

### Submission Timeline
- **Paperform opens:** Wednesday
- **Submission deadline:** Saturday 11:59 PM WIB
- **Incomplete submissions** (missing any of the 3 links) will not be valid

### Pre-Submission Checklist
- [ ] All 3 MVP features implemented and working
- [ ] 3 challenges completed
- [ ] Code pushed to GitHub
- [ ] GitHub Pages published and working
- [ ] Website responsive and works in multiple browsers
- [ ] Local Storage data persisting correctly
- [ ] `.kiro` folder included in repository
- [ ] Ready to submit Paperform

## Success Criteria

Your project will be considered complete when:
1. ✅ All 4 MVP features fully implemented
2. ✅ 3 chosen challenges completed
3. ✅ Website published on GitHub Pages
4. ✅ Code is clean and well-organized
5. ✅ Application works in modern browsers
6. ✅ Data persists with Local Storage
7. ✅ Design is user-friendly and responsive
8. ✅ All submission links provided
