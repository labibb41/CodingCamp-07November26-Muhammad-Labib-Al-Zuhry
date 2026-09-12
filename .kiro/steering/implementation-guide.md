---
inclusion: auto
name: Implementation Guide
description: Step-by-step guide for implementing each feature
---

# Implementation Guide - To-Do List Life Dashboard

## Getting Started

### Step 1: Project Setup
1. Create folder: `CodingCamp-24August26-[YourName]`
2. Create files:
   - `index.html`
   - `css/style.css` (create css folder first)
   - `js/script.js` (create js folder first)
3. Link CSS and JS in HTML head and before closing body tag
4. Test: Open index.html in browser (should see blank page)

### Step 2: HTML Boilerplate
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Life Dashboard</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Content goes here -->
    <script src="js/script.js"></script>
</body>
</html>
```

---

## Phase 1: Structure & Basic Styling (Day 1)

### 1.1 Create HTML Sections

```html
<div class="container">
    <!-- Header: Greeting & Time -->
    <header class="header">
        <h1 id="greeting">Good Morning</h1>
        <p id="date">Friday, September 11, 2026</p>
        <p id="time">14:45:30</p>
    </header>

    <!-- Focus Timer -->
    <section class="timer-section">
        <h2>Focus Timer</h2>
        <div class="timer-display" id="timerDisplay">25:00</div>
        <div class="timer-controls">
            <button id="startBtn" class="btn">START</button>
            <button id="stopBtn" class="btn">STOP</button>
            <button id="resetBtn" class="btn">RESET</button>
        </div>
    </section>

    <!-- To-Do List -->
    <section class="todo-section">
        <h2>To-Do List</h2>
        <div class="todo-input-area">
            <input 
                type="text" 
                id="taskInput" 
                placeholder="Add a new task..."
                class="input-field"
            >
            <button id="addBtn" class="btn">ADD</button>
        </div>
        <ul id="taskList" class="task-list"></ul>
    </section>

    <!-- Quick Links -->
    <section class="quicklinks-section">
        <h2>Quick Links</h2>
        <div class="quicklinks-container" id="quicklinksContainer"></div>
    </section>
</div>
```

### 1.2 Create Basic CSS Structure

```css
/* CSS Variables */
:root {
    --primary-color: #2196F3;
    --success-color: #4CAF50;
    --danger-color: #f44336;
    --bg-color: #f5f5f5;
    --card-bg: #ffffff;
    --text-color: #333333;
    --text-light: #666666;
}

/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Header */
.header {
    text-align: center;
    padding: 40px 20px;
    background-color: var(--card-bg);
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.header p {
    font-size: 1.1rem;
    color: var(--text-light);
    margin: 5px 0;
}

/* Sections */
section {
    background-color: var(--card-bg);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

section h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 10px;
}

/* Buttons */
.btn {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 4px;
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #1976D2;
}

/* Input Fields */
.input-field {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
    margin-bottom: 10px;
}

/* Timer Display */
.timer-display {
    font-size: 4rem;
    text-align: center;
    font-weight: bold;
    margin: 30px 0;
    font-family: 'Courier New', monospace;
}

/* Task List */
.task-list {
    list-style: none;
}

.task-item {
    padding: 15px;
    margin: 10px 0;
    background-color: #f9f9f9;
    border-left: 4px solid var(--primary-color);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-item.done {
    opacity: 0.6;
    text-decoration: line-through;
}

/* Quick Links */
.quicklinks-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 15px;
}

.quicklink-btn {
    padding: 20px;
    background-color: #f0f0f0;
    border: 2px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s;
}

.quicklink-btn:hover {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
    transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
    .header h1 {
        font-size: 2rem;
    }
    
    .timer-display {
        font-size: 3rem;
    }
    
    .quicklinks-container {
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    }
}
```

### 1.3 Test
- Open `index.html` in browser
- Should see structure with styling
- Check responsive design (resize browser)

---

## Phase 2: Time & Greeting (Day 2 - Part 1)

### 2.1 Time Display Logic

```javascript
// Update time display every second
function updateClock() {
    const now = new Date();
    
    // Format time (HH:MM:SS)
    const timeStr = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // Format date
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Update DOM
    document.getElementById('time').textContent = timeStr;
    document.getElementById('date').textContent = dateStr;
}

// Update greeting based on hour
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    
    if (hour >= 5 && hour < 11) {
        greeting = 'Good Morning';
    } else if (hour >= 11 && hour < 15) {
        greeting = 'Good Afternoon';
    } else if (hour >= 15 && hour < 18) {
        greeting = 'Good Evening';
    } else {
        greeting = 'Good Night';
    }
    
    document.getElementById('greeting').textContent = greeting;
}

// Call functions
setInterval(updateClock, 1000);
setInterval(updateGreeting, 60000); // Update every minute
updateClock();
updateGreeting();
```

### 2.2 Test
- Open page, verify time updates every second
- Verify date format is correct
- Verify greeting changes at correct times

---

## Phase 3: Focus Timer (Day 2 - Part 2)

### 3.1 Timer Logic

```javascript
// Timer state
let timerState = {
    minutes: 25,
    seconds: 0,
    isRunning: false,
    intervalId: null
};

// Start timer
function startTimer() {
    if (timerState.isRunning) return;
    
    timerState.isRunning = true;
    document.getElementById('startBtn').disabled = true;
    
    timerState.intervalId = setInterval(() => {
        if (timerState.seconds === 0) {
            if (timerState.minutes === 0) {
                // Timer complete
                stopTimer();
                alert('Time\'s up! Take a break.');
                return;
            }
            timerState.minutes--;
            timerState.seconds = 59;
        } else {
            timerState.seconds--;
        }
        
        updateTimerDisplay();
    }, 1000);
}

// Stop timer
function stopTimer() {
    timerState.isRunning = false;
    clearInterval(timerState.intervalId);
    document.getElementById('startBtn').disabled = false;
}

// Reset timer
function resetTimer() {
    stopTimer();
    timerState.minutes = 25;
    timerState.seconds = 0;
    updateTimerDisplay();
}

// Update display
function updateTimerDisplay() {
    const display = 
        String(timerState.minutes).padStart(2, '0') + ':' +
        String(timerState.seconds).padStart(2, '0');
    document.getElementById('timerDisplay').textContent = display;
}

// Attach event listeners
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

// Initialize display
updateTimerDisplay();
```

### 3.2 Test
- Click START - timer should countdown
- Click STOP - timer should pause
- Click RESET - timer should go back to 25:00
- Verify display updates every second

---

## Phase 4: To-Do List - Add Tasks (Day 3 - Part 1)

### 4.1 Task Storage & CRUD

```javascript
// Task data
let taskState = {
    tasks: [],
    nextId: 1
};

// Load tasks from Local Storage
function loadTasks() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
        taskState.tasks = JSON.parse(saved);
        // Calculate next ID
        if (taskState.tasks.length > 0) {
            taskState.nextId = Math.max(...taskState.tasks.map(t => t.id)) + 1;
        }
    }
}

// Save tasks to Local Storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(taskState.tasks));
}

// Add task
function addTask(text) {
    // Validate input
    if (!text.trim()) {
        alert('Please enter a task');
        return;
    }
    
    // Create task object
    const task = {
        id: taskState.nextId++,
        text: text.trim(),
        done: false,
        createdAt: new Date().toISOString()
    };
    
    // Add to array and save
    taskState.tasks.push(task);
    saveTasks();
    
    // Clear input and re-render
    document.getElementById('taskInput').value = '';
    renderTasks();
}

// Delete task
function deleteTask(id) {
    taskState.tasks = taskState.tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
}

// Toggle task done status
function toggleTaskDone(id) {
    const task = taskState.tasks.find(t => t.id === id);
    if (task) {
        task.done = !task.done;
        saveTasks();
        renderTasks();
    }
}

// Render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    taskState.tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item' + (task.done ? ' done' : '');
        
        li.innerHTML = `
            <div>
                <input 
                    type="checkbox" 
                    ${task.done ? 'checked' : ''}
                    onchange="toggleTaskDone(${task.id})"
                >
                <span>${task.text}</span>
            </div>
            <button class="btn" onclick="deleteTask(${task.id})">DELETE</button>
        `;
        
        taskList.appendChild(li);
    });
}

// Initialize
document.getElementById('addBtn').addEventListener('click', () => {
    addTask(document.getElementById('taskInput').value);
});

document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask(e.target.value);
    }
});

loadTasks();
renderTasks();
```

### 4.2 Test
- Type task and click ADD
- Task should appear in list
- Verify data persists after refresh
- Test delete functionality
- Test mark as done

---

## Phase 5: Quick Links (Day 3 - Part 2)

### 5.1 Quick Links Logic

```javascript
// Quick links state
let quicklinksState = {
    links: [
        { id: 1, name: 'Google', url: 'https://google.com', icon: '🔍' },
        { id: 2, name: 'GitHub', url: 'https://github.com', icon: '🐙' },
        { id: 3, name: 'YouTube', url: 'https://youtube.com', icon: '📺' },
        { id: 4, name: 'Gmail', url: 'https://gmail.com', icon: '📧' }
    ],
    nextId: 5
};

// Load quick links from Local Storage
function loadQuicklinks() {
    const saved = localStorage.getItem('quicklinks');
    if (saved) {
        quicklinksState.links = JSON.parse(saved);
    } else {
        saveQuicklinks();
    }
}

// Save quick links to Local Storage
function saveQuicklinks() {
    localStorage.setItem('quicklinks', JSON.stringify(quicklinksState.links));
}

// Render quick links
function renderQuicklinks() {
    const container = document.getElementById('quicklinksContainer');
    container.innerHTML = '';
    
    quicklinksState.links.forEach(link => {
        const btn = document.createElement('button');
        btn.className = 'quicklink-btn';
        btn.innerHTML = `${link.icon}<br>${link.name}`;
        btn.addEventListener('click', () => {
            window.open(link.url, '_blank');
        });
        container.appendChild(btn);
    });
}

// Initialize
loadQuicklinks();
renderQuicklinks();
```

### 5.2 Test
- Click each quick link
- Should open in new tab
- Verify links are saved in Local Storage

---

## Phase 6: Challenges (Day 4)

### Challenge 1: Light/Dark Mode

```css
/* Dark mode theme */
body.dark-mode {
    --primary-color: #64B5F6;
    --bg-color: #1a1a1a;
    --card-bg: #2d2d2d;
    --text-color: #e0e0e0;
    --text-light: #b0b0b0;
}
```

```javascript
// Theme toggle
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme
function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

loadTheme();
```

### Challenge 2: Custom Name

```javascript
function saveName() {
    const name = prompt('Enter your name:');
    if (name && name.trim()) {
        localStorage.setItem('userName', name.trim());
        updateGreeting();
    }
}

function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    
    if (hour >= 5 && hour < 11) greeting = 'Good Morning';
    else if (hour >= 11 && hour < 15) greeting = 'Good Afternoon';
    else if (hour >= 15 && hour < 18) greeting = 'Good Evening';
    else greeting = 'Good Night';
    
    const name = localStorage.getItem('userName');
    if (name) {
        greeting += ', ' + name;
    }
    
    document.getElementById('greeting').textContent = greeting;
}
```

### Challenge 3: Change Pomodoro Time

```javascript
function setPomodoroTime() {
    const time = prompt('Enter timer minutes (1-60):', '25');
    const minutes = parseInt(time);
    
    if (minutes >= 1 && minutes <= 60) {
        localStorage.setItem('pomodoroTime', minutes);
        timerState.minutes = minutes;
        timerState.seconds = 0;
        updateTimerDisplay();
    } else {
        alert('Please enter a number between 1 and 60');
    }
}

function loadPomodoroTime() {
    const saved = localStorage.getItem('pomodoroTime');
    if (saved) {
        timerState.minutes = parseInt(saved);
    }
    updateTimerDisplay();
}
```

### Challenge 4: Prevent Duplicates

```javascript
function isDuplicateTask(text) {
    return taskState.tasks.some(t => 
        t.text.toLowerCase() === text.trim().toLowerCase()
    );
}

function addTask(text) {
    if (!text.trim()) {
        alert('Please enter a task');
        return;
    }
    
    if (isDuplicateTask(text)) {
        alert('This task already exists!');
        return;
    }
    
    // ... rest of addTask logic
}
```

### Challenge 5: Sort Tasks

```javascript
function sortTasks(sortType) {
    if (sortType === 'status') {
        taskState.tasks.sort((a, b) => a.done - b.done);
    } else if (sortType === 'alphabetic') {
        taskState.tasks.sort((a, b) => 
            a.text.localeCompare(b.text)
        );
    } else if (sortType === 'date') {
        taskState.tasks.sort((a, b) => 
            new Date(b.createdAt) - new Date(a.createdAt)
        );
    }
    
    localStorage.setItem('sortType', sortType);
    renderTasks();
}
```

---

## Phase 7: Testing & Deployment (Day 5)

### 7.1 Test Checklist
- [ ] Time updates in real-time
- [ ] Greeting changes at correct hours
- [ ] Timer counts down accurately
- [ ] Tasks persist after refresh
- [ ] Quick links work
- [ ] Challenges implemented
- [ ] Responsive on mobile
- [ ] Works in Chrome, Firefox, Edge, Safari

### 7.2 Deploy to GitHub Pages

```bash
# Initialize git
git init

# Add files
git add .

# Initial commit
git commit -m "Initial commit: Life Dashboard"

# Create main branch
git branch -M main

# Add remote
git remote add origin https://github.com/[username]/CodingCamp-24August26-[Name].git

# Push
git push -u origin main
```

### 7.3 Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages"
3. Select "Deploy from a branch"
4. Select "main" branch
5. Save
6. Website live in ~1 minute

---

## Tips for Success

1. **Test frequently** - Test after each feature
2. **Use console** - Check for errors with F12
3. **Save often** - Commit to Git regularly
4. **Keep it simple** - Don't overcomplicate
5. **Mobile first** - Test responsive design early
6. **Use Local Storage wisely** - Save when data changes
7. **Comment code** - Help yourself and others
8. **Ask Kiro** - When stuck, use Kiro for help
