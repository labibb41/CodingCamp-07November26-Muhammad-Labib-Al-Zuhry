# 📊 Life Dashboard

A professional, responsive web application that helps you organize your day with a to-do list, focus timer, real-time clock, and quick links.

## ✨ Features

### Core Features (MVP)
- **⏰ Real-Time Clock** - Shows current time and date with dynamic greeting
- **⌛ Focus Timer** - 25-minute Pomodoro timer with Start/Stop/Reset controls
- **✅ To-Do List** - Add, edit, mark done, and delete tasks
- **🔗 Quick Links** - Quick access to favorite websites

### Extra Features (Challenges)
- **👤 Custom Name** - Personalize your greeting with your name
- **🚫 Duplicate Prevention** - Prevents adding duplicate tasks
- **📊 Smart Sorting** - Sort tasks by date, alphabetically, or by status

### Advanced Features
- **📅 Task Scheduling** - Set start/end times and dates for tasks
- **💾 Local Storage** - All data persists automatically
- **⚡ Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **🎨 Beautiful UI** - Modern design with smooth animations
- **⌨️ Keyboard Support** - Press Escape to close modals

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Responsive design with animations
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Local Storage API** - Client-side data persistence

## 📁 Project Structure

```
Life Dashboard/
├── index.html          # Main HTML (single file)
├── css/
│   └── style.css       # All styling (single file)
├── js/
│   └── script.js       # All functionality (single file)
├── test-browser.html   # Interactive test tool
└── README.md          # This file
```

## 🚀 Quick Start

1. **Open** `index.html` in your browser
2. **No installation** required - works out of the box
3. **Start using** - All data saves automatically

## 🧪 Testing

### Quick Test (5 minutes)
1. Add a task and refresh the page - it should persist
2. Click START on timer and verify it counts down normally
3. Open a modal and press Escape - it should close smoothly
4. Check browser console (F12) - no errors should appear

### Full Test
Open `test-browser.html` for interactive verification of all features.

## 📋 Requirements Met

✅ **Technical Constraints**
- HTML for structure
- CSS for styling
- Vanilla JavaScript (no frameworks)
- Browser Local Storage
- No backend required

✅ **Folder Rules**
- 1 CSS file only (css/style.css)
- 1 JavaScript file only (js/script.js)
- Clean, readable code

✅ **MVP Features**
- Greeting with time & date
- 25-minute focus timer
- Full to-do list management
- Quick links to websites

✅ **Non-Functional Requirements**
- Simple, clean interface
- Fast, responsive performance
- Professional visual design

✅ **All Challenges Completed**
- Custom name in greeting
- Duplicate task prevention
- Smart task sorting

## 🔒 Security & Quality

- ✅ XSS prevention (HTML escaping)
- ✅ Error handling (LocalStorage, private mode)
- ✅ Race condition protection (timer)
- ✅ Keyboard accessibility (Escape key)
- ✅ No global state pollution
- ✅ Smooth animations across all browsers

## 🎯 How to Use

### Add a Task
1. Type task name in the input field
2. Click ADD or press Enter
3. Task appears in your list

### Edit a Task
1. Click EDIT button on any task
2. Modify description and optional schedule
3. Click SAVE

### Delete a Task
1. Click DELETE button
2. Confirm deletion in modal
3. Task removed

### Set Custom Name
1. Click the ✏️ button next to greeting
2. Enter your name
3. Greeting updates automatically

### Manage Timer
1. Click START to begin 25-minute countdown
2. Click STOP to pause (RESUME later)
3. Click RESET to restart from 25:00
4. Alert when timer completes

### Sort Tasks
1. Use dropdown menu "Sort by"
2. Choose: Date, Alphabetic, or Status
3. List updates instantly

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Edge (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 💾 Data

All data stored locally in browser:
- Tasks
- Custom name
- Sort preference
- Quick links

**No data sent to any server.**

## 🔧 Fixes & Improvements

This version includes 9 critical security and reliability fixes:
- Timer race condition fix
- Modal memory leak prevention
- LocalStorage error handling
- XSS vulnerability prevention
- Global state cleanup
- Smooth animations on all browsers
- Keyboard accessibility improvements

See `FIXES_COMPLETE.md` for details.

## 📚 Documentation

- `FINAL_CHECKLIST.md` - Pre-deployment verification
- `FIXES_COMPLETE.md` - Security & reliability fixes
- `TESTING_FIXES.md` - Comprehensive testing guide
- `RINGKASAN_PERBAIKAN.md` - Bahasa Indonesia summary

## 🎓 Learning Outcomes

Building this project teaches:
- Vanilla JavaScript fundamentals
- DOM manipulation
- Local Storage API
- CSS animations
- Responsive design
- Error handling
- Security best practices

## 📝 License

This project is open source and available under the MIT License.

---

**Ready to use!** Just open `index.html` and start organizing your day. 🚀

*Built with care for Coding Camp* ✨
