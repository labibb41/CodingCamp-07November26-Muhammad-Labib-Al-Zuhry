---
inclusion: auto
name: Troubleshooting Guide
description: Common issues and solutions for the project
---

# Troubleshooting Guide

## Common Issues & Solutions

### Time & Greeting Issues

#### Problem: Time doesn't update every second
**Solution:**
- Check if `setInterval()` is properly set to 1000ms
- Verify browser console for errors (F12)
- Check that DOM element IDs match: `time`, `date`, `greeting`

```javascript
// Verify this code
setInterval(updateClock, 1000); // 1000ms = 1 second
```

#### Problem: Greeting doesn't match time
**Solution:**
- Check hour range logic in `updateGreeting()`
- Verify your local machine time is correct
- Test with different hours (e.g., use developer tools to modify date)

```javascript
// Check these ranges:
// 5-11: Morning
// 11-15: Afternoon
// 15-18: Evening
// 18-5: Night
```

---

### Timer Issues

#### Problem: Timer doesn't count down
**Solution:**
- Check if `startTimer()` is called
- Verify `setInterval()` is working
- Check browser console for errors

```javascript
// Add debugging
console.log('Timer started:', timerState);
```

#### Problem: Timer stops prematurely
**Solution:**
- Check if another function is calling `clearInterval()`
- Verify `stopTimer()` is not being called accidentally
- Check for duplicate event listeners

#### Problem: Timer displays wrong format (e.g., "5:0" instead of "05:00")
**Solution:**
- Use `padStart()` to add leading zeros

```javascript
// Correct:
const display = 
    String(timerState.minutes).padStart(2, '0') + ':' +
    String(timerState.seconds).padStart(2, '0');

// Wrong:
const display = timerState.minutes + ':' + timerState.seconds;
```

#### Problem: Timer accuracy is off
**Solution:**
- Don't use `setInterval` with values less than 1000ms
- Account for JavaScript execution time
- Use more frequent updates only for display, not logic

---

### To-Do List Issues

#### Problem: Tasks don't save after refresh
**Solution:**
- Verify `saveTasks()` is called after modifications
- Check if Local Storage is enabled in browser
- Check browser console for Local Storage errors

```javascript
// Add debugging
console.log('Saved tasks:', localStorage.getItem('tasks'));
console.log('Loaded tasks:', taskState.tasks);
```

#### Problem: Task input doesn't work
**Solution:**
- Check if button ID is `addBtn`
- Verify input field ID is `taskInput`
- Check event listener is attached

```javascript
// Debug:
console.log('Button:', document.getElementById('addBtn'));
console.log('Input:', document.getElementById('taskInput'));
```

#### Problem: Empty tasks are being added
**Solution:**
- Add trim() and check for empty string

```javascript
// Correct:
if (!text.trim()) {
    alert('Please enter a task');
    return;
}

// Also validate when loading
function addTask(text) {
    if (!text || !text.trim()) return;
}
```

#### Problem: Delete/Edit buttons don't work
**Solution:**
- Check if IDs are being passed correctly to functions
- Verify function names match event handlers
- Make sure functions are defined before HTML uses them

```html
<!-- Make sure onclick references exist -->
<button onclick="deleteTask(${task.id})">DELETE</button>
```

#### Problem: Checkbox toggle doesn't work
**Solution:**
- Check if function is called on change
- Verify task ID is passed correctly
- Ensure DOM updates after toggle

```html
<!-- Correct format -->
<input 
    type="checkbox" 
    ${task.done ? 'checked' : ''}
    onchange="toggleTaskDone(${task.id})"
>
```

#### Problem: Tasks array is not persisting properly
**Solution:**
- Make sure `loadTasks()` is called on page load
- Check JSON stringify/parse works correctly

```javascript
// Debug:
console.log('Raw:', localStorage.getItem('tasks'));
console.log('Parsed:', JSON.parse(localStorage.getItem('tasks')));
```

---

### Quick Links Issues

#### Problem: Quick links don't open in new tab
**Solution:**
- Use `window.open(url, '_blank')`
- Check if URL includes protocol (https://)

```javascript
// Correct:
window.open(link.url, '_blank');

// URLs should start with http:// or https://
{ id: 1, name: 'Google', url: 'https://google.com' }
```

#### Problem: Quick links not loading from Local Storage
**Solution:**
- Verify `loadQuicklinks()` is called on page load
- Check Local Storage key spelling: `quicklinks`

```javascript
// Should be called at page load:
loadQuicklinks();
renderQuicklinks();
```

---

### Local Storage Issues

#### Problem: Data not saving to Local Storage
**Solution:**
- Check browser settings - Local Storage might be disabled
- Use browser DevTools to verify (F12 → Application → Local Storage)
- Check for JSON stringify errors

```javascript
// Test Local Storage:
localStorage.setItem('test', 'value');
console.log(localStorage.getItem('test'));
```

#### Problem: Cannot parse JSON from Local Storage
**Solution:**
- Make sure data is valid JSON before parsing
- Add error handling

```javascript
// Safe parsing:
try {
    const data = JSON.parse(localStorage.getItem('tasks'));
    return data || [];
} catch (e) {
    console.error('JSON parse error:', e);
    return [];
}
```

#### Problem: Local Storage quota exceeded
**Solution:**
- Browser Local Storage limit is typically 5-10MB
- For this project, shouldn't be an issue unless tasks are VERY long
- Can clear old data or compress

```javascript
// Clear if needed:
localStorage.clear();
```

---

### Styling Issues

#### Problem: CSS not loading
**Solution:**
- Check path in HTML: `<link rel="stylesheet" href="css/style.css">`
- Verify CSS file exists in `css/` folder
- Check file name capitalization (case-sensitive on some systems)
- Hard refresh browser (Ctrl+Shift+R)

#### Problem: Layout looks broken on mobile
**Solution:**
- Add viewport meta tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Test with DevTools device emulation (F12 → Device Toolbar)
- Check media queries are working

#### Problem: Buttons don't look right
**Solution:**
- Ensure CSS targets `.btn` class
- Check for conflicting CSS rules
- Use DevTools to inspect (F12 → right-click element → Inspect)

```css
/* Should target all buttons */
.btn {
    padding: 10px 20px;
    background-color: var(--primary-color);
    cursor: pointer;
}

.btn:hover {
    background-color: #1976D2;
}
```

#### Problem: Dark mode doesn't work
**Solution:**
- Check if CSS variables are updated in dark mode
- Verify `document.body.classList.contains('dark-mode')` is true
- Check CSS variables are defined in `body.dark-mode`

```css
/* Verify this exists */
body.dark-mode {
    --bg-color: #1a1a1a;
    --card-bg: #2d2d2d;
    --text-color: #e0e0e0;
}
```

---

### Event Listener Issues

#### Problem: Event listener not firing
**Solution:**
- Verify HTML element ID matches in JavaScript
- Check if `addEventListener` is used correctly
- Make sure JavaScript runs AFTER HTML is loaded (put script at end of body)

```javascript
// Wrong (if script runs before HTML):
document.getElementById('addBtn').addEventListener('click', addTask);

// Right (script at end of body, or use DOMContentLoaded):
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addBtn').addEventListener('click', addTask);
});
```

#### Problem: Multiple event listeners firing
**Solution:**
- Don't call `addEventListener` multiple times
- Use event delegation for dynamic elements
- Check for duplicate script inclusions

```javascript
// Wrong - called multiple times
function renderTasks() {
    taskList.innerHTML = '';
    taskState.tasks.forEach(task => {
        // DON'T add listener here if also in HTML onclick
    });
}

// Right - use onclick in HTML or addEventListener once
```

---

### JavaScript Logic Issues

#### Problem: NaN appears in display
**Solution:**
- Check if variables are numbers, not strings
- Use `parseInt()` or `parseFloat()` to convert

```javascript
// Correct:
const minutes = parseInt(localStorage.getItem('pomodoroTime')) || 25;

// Wrong:
const minutes = localStorage.getItem('pomodoroTime') || 25; // String!
```

#### Problem: Array operations don't work
**Solution:**
- Verify array is initialized before using methods
- Check if objects in array have expected properties
- Use console to inspect array structure

```javascript
// Debug:
console.log('Array:', taskState.tasks);
console.log('Find:', taskState.tasks.find(t => t.id === 1));
```

#### Problem: Conditions never trigger
**Solution:**
- Check comparison operators (=== vs ==)
- Verify data types match
- Log values to console

```javascript
// Debug:
console.log('Value:', value, 'Type:', typeof value);

// Compare carefully:
if (hour === 14) { } // Exact match
if (hour == '14') { } // Type coercion - avoid
```

---

### Browser Compatibility Issues

#### Problem: Works in Chrome but not Firefox/Safari
**Solution:**
- Use standard JavaScript (avoid newer ES features if needed)
- Use vendor prefixes for CSS if needed
- Test in multiple browsers regularly

```css
/* CSS that works everywhere */
display: flex; /* Standard */
display: -webkit-flex; /* Safari (older) */
```

#### Problem: Local Storage works on computer but not phone
**Solution:**
- Check if browser has Local Storage enabled
- Check if in private/incognito mode (Local Storage limited)
- Verify responsive design works on phone (different viewport)

---

### GitHub Pages Issues

#### Problem: Website shows 404 after deployment
**Solution:**
- Verify GitHub Pages is enabled in Settings
- Check branch is set to `main`
- Verify `index.html` is in root directory
- Wait 1-2 minutes for deployment
- Force refresh browser (Ctrl+Shift+R)

#### Problem: CSS/JS not loading on GitHub Pages
**Solution:**
- Check file paths are relative, not absolute
- Correct: `href="css/style.css"` or `href="./css/style.css"`
- Wrong: `href="/css/style.css"` (with leading slash)
- Verify files are committed and pushed

```html
<!-- Correct for subfolder deployment -->
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>

<!-- NOT this for subfolder deployment -->
<link rel="stylesheet" href="/css/style.css">
```

#### Problem: Local Storage works locally but not on GitHub Pages
**Solution:**
- This is likely a private/incognito mode issue on test machine
- Try in regular browser, not private
- Check if third-party cookies are blocked

---

### Performance Issues

#### Problem: Page loads slowly
**Solution:**
- Check for slow functions in `setInterval`
- Minimize DOM manipulation
- Check for memory leaks (open DevTools, check memory)
- Debounce frequent operations

#### Problem: Timer is not accurate (drifts over time)
**Solution:**
- `setInterval` is not perfectly accurate
- For this project, small drift is acceptable
- If critical, use `performance.now()` for more accuracy

```javascript
// Current approach (acceptable for this project):
setInterval(() => { timerLogic }, 1000);

// More accurate (if needed):
let lastTime = Date.now();
setInterval(() => {
    const now = Date.now();
    const elapsed = now - lastTime;
    // Use elapsed time instead of assuming 1 second
}, 100);
```

---

### Getting Help

If you can't find the solution:

1. **Check browser console (F12)** for error messages
2. **Use `console.log()`** to debug variable values
3. **Use browser DevTools** to inspect HTML/CSS
4. **Test with minimal code** - create simple test case
5. **Search MDN** for API documentation
6. **Ask Kiro** - describe what's happening and what you expected

### Useful Console Commands

```javascript
// View all tasks
console.log(taskState.tasks);

// Check Local Storage
console.log(localStorage);
console.log(localStorage.getItem('tasks'));

// Test a function
addTask('test task');

// Check element exists
console.log(document.getElementById('addBtn'));

// Check event listener attached
// (Use DevTools, then right-click element → Inspect → Event Listeners)
```

### Useful DevTools Shortcuts

- **F12** - Open DevTools
- **Ctrl+Shift+I** - Open DevTools (Windows)
- **Cmd+Option+I** - Open DevTools (Mac)
- **Ctrl+Shift+J** - Open Console
- **Ctrl+Shift+M** - Open DevTools in responsive design mode
- **Ctrl+Shift+R** - Hard refresh (clear cache)
