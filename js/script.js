// ===== STATE & INITIALIZATION =====

// Timer state
let timerState = {
    minutes: 25,
    seconds: 0,
    isRunning: false,
    intervalId: null,
    totalMinutes: 25  // CHALLENGE 5: Custom Pomodoro Time
};

// Task state
let taskState = {
    tasks: [],
    nextId: 1,
    sortType: 'date' // default sort
};

// Quick links state
let quicklinksState = {
    links: [
        { id: 1, name: 'Google', url: 'https://google.com', icon: '🔍' },
        { id: 2, name: 'GitHub', url: 'https://github.com', icon: '🐙' },
        { id: 3, name: 'YouTube', url: 'https://youtube.com', icon: '📺' },
        { id: 4, name: 'Gmail', url: 'https://gmail.com', icon: '📧' },
        { id: 5, name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' }
    ],
    nextId: 6
};

// Modal state (replaces window.pendingDeleteTaskId and window.currentEditingTaskId)
let modalState = {
    pendingDeleteTaskId: null,
    currentEditingTaskId: null
};

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', () => {
    // Load all data
    loadTasks();
    loadQuicklinks();
    loadUserSettings();
    
    // CHALLENGE 4: Initialize theme
    initTheme();
    
    // CHALLENGE 5: Initialize Pomodoro time
    initPomodoroTime();
    
    // Initialize displays
    updateClock();
    updateGreeting();
    renderTasks();
    renderQuicklinks();
    updateTimerDisplay();
    
    // Setup intervals
    setInterval(updateClock, 1000);
    setInterval(updateGreeting, 60000);
    
    // Setup event listeners
    setupEventListeners();
});

// ===== CLOCK & GREETING =====

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
    
    document.getElementById('time').textContent = timeStr;
    document.getElementById('date').textContent = dateStr;
}

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
    
    // CHALLENGE 1: Custom Name in Greeting
    const userName = localStorage.getItem('userName');
    if (userName && userName.trim()) {
        greeting += ', ' + userName;
    }
    
    document.getElementById('greeting').textContent = greeting;
}

// ===== CHALLENGE 4: LIGHT / DARK MODE =====

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeButton();
    }
}

function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeButton();
}

function updateThemeButton() {
    const button = document.getElementById('themeToggle');
    const isDarkMode = document.body.classList.contains('dark-mode');
    button.textContent = isDarkMode ? '☀️' : '🌙';
}

// ===== CHALLENGE 5: CUSTOM POMODORO TIME =====

function initPomodoroTime() {
    const savedTime = localStorage.getItem('pomodoroTime');
    if (savedTime) {
        timerState.totalMinutes = parseInt(savedTime);
        timerState.minutes = timerState.totalMinutes;
        document.getElementById('pomodoroTimeInput').value = timerState.totalMinutes;
    }
}

function changePomodoroTime() {
    const input = document.getElementById('pomodoroTimeInput');
    let time = parseInt(input.value);
    
    // Validation
    if (isNaN(time) || time < 1) time = 1;
    if (time > 60) time = 60;
    
    // Update state
    timerState.totalMinutes = time;
    timerState.minutes = time;
    timerState.seconds = 0;
    
    // Save preference
    localStorage.setItem('pomodoroTime', time);
    
    // Update input in case it was out of range
    input.value = time;
    
    // Update display
    updateTimerDisplay();
    
    // Stop timer if running
    if (timerState.isRunning) {
        stopTimer();
    }
}

// ===== CHALLENGE 1: CUSTOM NAME IN GREETING =====

function openNameModal() {
    const modal = document.getElementById('nameModal');
    const nameInput = document.getElementById('nameInput');
    const savedName = localStorage.getItem('userName') || '';
    nameInput.value = savedName;
    modal.classList.add('show');
    nameInput.focus();
}

function closeNameModal() {
    const modal = document.getElementById('nameModal');
    modal.classList.remove('show');
}

function saveName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    
    if (!name) {
        alert('Please enter a name');
        return;
    }
    
    if (name.length > 50) {
        alert('Name must be less than 50 characters');
        return;
    }
    
    try {
        localStorage.setItem('userName', name);
        updateGreeting();
        closeNameModal();
    } catch (error) {
        console.error('Failed to save name:', error);
        alert('Failed to save name. Please try again.');
    }
}

function loadUserSettings() {
    try {
        const userName = localStorage.getItem('userName');
        if (!userName) {
            localStorage.setItem('userName', '');
        }
    } catch (error) {
        console.error('Failed to load user settings:', error);
    }
}

// ===== TIMER =====

function startTimer() {
    if (timerState.isRunning) return;
    
    // Clear any existing interval to prevent race condition
    if (timerState.intervalId) {
        clearInterval(timerState.intervalId);
    }
    
    timerState.isRunning = true;
    document.getElementById('startBtn').disabled = true;
    
    timerState.intervalId = setInterval(() => {
        if (timerState.seconds === 0) {
            if (timerState.minutes === 0) {
                // Timer complete
                stopTimer();
                alert('⏱️ Time\'s up! Take a break.');
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

function stopTimer() {
    timerState.isRunning = false;
    clearInterval(timerState.intervalId);
    document.getElementById('startBtn').disabled = false;
}

function resetTimer() {
    stopTimer();
    timerState.minutes = timerState.totalMinutes;
    timerState.seconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const display = 
        String(timerState.minutes).padStart(2, '0') + ':' +
        String(timerState.seconds).padStart(2, '0');
    document.getElementById('timerDisplay').textContent = display;
}

// ===== LOCAL STORAGE - TASKS =====

function loadTasks() {
    try {
        const saved = localStorage.getItem('tasks');
        if (saved) {
            taskState.tasks = JSON.parse(saved);
            // Calculate next ID
            if (taskState.tasks.length > 0) {
                const validIds = taskState.tasks
                    .map(t => typeof t.id === 'number' ? t.id : 0)
                    .filter(id => id > 0);
                taskState.nextId = Math.max(...validIds, 0) + 1;
            }
        }
    } catch (error) {
        console.error('Failed to load tasks:', error);
        taskState.tasks = [];
        taskState.nextId = 1;
    }
    
    // Load sort preference
    try {
        const savedSort = localStorage.getItem('taskSortType');
        if (savedSort) {
            taskState.sortType = savedSort;
            document.getElementById('sortSelect').value = savedSort;
        }
    } catch (error) {
        console.error('Failed to load sort preference:', error);
    }
}

function saveTasks() {
    try {
        localStorage.setItem('tasks', JSON.stringify(taskState.tasks));
    } catch (error) {
        console.error('Failed to save tasks:', error);
        if (error.name === 'QuotaExceededError') {
            alert('Storage quota exceeded. Please delete some tasks.');
        }
    }
}

function saveSortPreference(sortType) {
    try {
        taskState.sortType = sortType;
        localStorage.setItem('taskSortType', sortType);
    } catch (error) {
        console.error('Failed to save sort preference:', error);
    }
}

// ===== CHALLENGE 2: PREVENT DUPLICATE TASKS =====

function isDuplicateTask(text) {
    return taskState.tasks.some(t => 
        t.text.toLowerCase().trim() === text.toLowerCase().trim()
    );
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        errorDiv.classList.remove('show');
    }, 3000);
}

// ===== TASK OPERATIONS =====

function addTask(text) {
    // Validate input
    if (!text || !text.trim()) {
        showError('❌ Please enter a task');
        return;
    }
    
    // CHALLENGE 2: Check for duplicates
    if (isDuplicateTask(text)) {
        showError('❌ This task already exists!');
        return;
    }
    
    // Create task object
    const task = {
        id: taskState.nextId++,
        text: text.trim(),
        done: false,
        createdAt: new Date().toISOString(),
        schedule: null // New: schedule info
    };
    
    // Add to array and save
    taskState.tasks.push(task);
    saveTasks();
    
    // Clear input and re-render
    document.getElementById('taskInput').value = '';
    renderTasks();
}

function deleteTask(id) {
    const task = taskState.tasks.find(t => t.id === id);
    if (!task) return;
    
    modalState.pendingDeleteTaskId = id;
    document.getElementById('deleteTaskName').textContent = `"${task.text}"`;
    
    const modal = document.getElementById('deleteConfirmModal');
    modal.classList.add('show');
}

function confirmDelete() {
    const id = modalState.pendingDeleteTaskId;
    taskState.tasks = taskState.tasks.filter(t => t.id !== id);
    saveTasks();
    closeDeleteConfirmModal();
    renderTasks();
}

function closeDeleteConfirmModal() {
    const modal = document.getElementById('deleteConfirmModal');
    modal.classList.remove('show');
    modalState.pendingDeleteTaskId = null;
}

function toggleTaskDone(id) {
    const task = taskState.tasks.find(t => t.id === id);
    if (task) {
        task.done = !task.done;
        saveTasks();
        renderTasks();
    }
}

function openEditTaskModal(id) {
    const task = taskState.tasks.find(t => t.id === id);
    if (!task) return;
    
    // Set current task in edit modal
    modalState.currentEditingTaskId = id;
    
    // Populate fields
    document.getElementById('editTaskText').value = task.text;
    
    // Populate schedule fields if exist
    if (task.schedule) {
        document.getElementById('editTaskStartDay').value = task.schedule.startDay || '';
        document.getElementById('editTaskStartTime').value = task.schedule.startTime || '';
        document.getElementById('editTaskEndDay').value = task.schedule.endDay || '';
        document.getElementById('editTaskEndTime').value = task.schedule.endTime || '';
    } else {
        document.getElementById('editTaskStartDay').value = '';
        document.getElementById('editTaskStartTime').value = '';
        document.getElementById('editTaskEndDay').value = '';
        document.getElementById('editTaskEndTime').value = '';
    }
    
    // Show modal
    const modal = document.getElementById('editTaskModal');
    modal.classList.add('show');
    document.getElementById('editTaskText').focus();
}

function closeEditTaskModal() {
    const modal = document.getElementById('editTaskModal');
    modal.classList.remove('show');
    modalState.currentEditingTaskId = null;
}

function saveEditTask() {
    const taskId = modalState.currentEditingTaskId;
    const task = taskState.tasks.find(t => t.id === taskId);
    
    if (!task) return;
    
    const newText = document.getElementById('editTaskText').value.trim();
    
    if (!newText) {
        alert('Task cannot be empty');
        return;
    }
    
    // CHALLENGE 2: Check for duplicates (excluding current task)
    if (isDuplicateTask(newText) && newText.toLowerCase() !== task.text.toLowerCase()) {
        showError('❌ This task already exists!');
        return;
    }
    
    task.text = newText;
    
    // Get schedule fields
    const startDay = document.getElementById('editTaskStartDay').value;
    const startTime = document.getElementById('editTaskStartTime').value;
    const endDay = document.getElementById('editTaskEndDay').value;
    const endTime = document.getElementById('editTaskEndTime').value;
    
    // If all schedule fields are filled, save them
    if (startDay && startTime && endDay && endTime) {
        // Validate times (simplified - just check if both times exist)
        task.schedule = {
            startDay: startDay,
            startTime: startTime,
            endDay: endDay,
            endTime: endTime
        };
    } else {
        // Clear schedule if not all fields are filled
        task.schedule = null;
    }
    
    saveTasks();
    closeEditTaskModal();
    renderTasks();
}

function editTask(id) {
    openEditTaskModal(id);
}

// ===== CHALLENGE 3: SORT TASKS =====

function sortTasks(sortType) {
    let sortedTasks = [...taskState.tasks];
    
    if (sortType === 'status') {
        // Sort by done status (undone first)
        sortedTasks.sort((a, b) => a.done - b.done);
    } else if (sortType === 'alphabetic') {
        // Sort alphabetically
        sortedTasks.sort((a, b) => 
            a.text.toLowerCase().localeCompare(b.text.toLowerCase())
        );
    } else if (sortType === 'date') {
        // Sort by date (newest first)
        sortedTasks.sort((a, b) => 
            new Date(b.createdAt) - new Date(a.createdAt)
        );
    }
    
    return sortedTasks;
}

function handleSortChange(sortType) {
    saveSortPreference(sortType);
    renderTasks();
}

// ===== RENDER TASKS =====

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    // Get sorted tasks based on current sort preference
    const sortedTasks = sortTasks(taskState.sortType);
    
    if (sortedTasks.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No tasks yet. Add one to get started!';
        li.style.textAlign = 'center';
        li.style.color = 'var(--text-light)';
        li.style.padding = '20px';
        taskList.appendChild(li);
        return;
    }
    
    sortedTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item' + (task.done ? ' done' : '');
        
        // Schedule badge if exists
        let scheduleHtml = '';
        if (task.schedule) {
            const { startDay, startTime, endDay, endTime } = task.schedule;
            if (startDay && startTime && endDay && endTime) {
                // Check if same day or different day
                const sameDay = startDay === endDay;
                if (sameDay) {
                    scheduleHtml = `
                        <div class="task-schedule">
                            <span class="schedule-day">${escapeHtml(startDay)}</span>
                            <span class="schedule-time">${escapeHtml(startTime)} - ${escapeHtml(endTime)}</span>
                        </div>
                    `;
                } else {
                    scheduleHtml = `
                        <div class="task-schedule">
                            <span class="schedule-range">${escapeHtml(startDay)} ${escapeHtml(startTime)} → ${escapeHtml(endDay)} ${escapeHtml(endTime)}</span>
                        </div>
                    `;
                }
            }
        }
        
        li.innerHTML = `
            <div class="task-content">
                <input 
                    type="checkbox" 
                    class="task-checkbox"
                    ${task.done ? 'checked' : ''}
                    onchange="toggleTaskDone(${task.id})"
                >
                <div class="task-text-container">
                    <span class="task-text">${escapeHtml(task.text)}</span>
                    ${scheduleHtml}
                </div>
            </div>
            <div class="task-buttons">
                <button class="btn-edit" onclick="editTask(${task.id})">✏️ Edit</button>
                <button class="btn-delete" onclick="deleteTask(${task.id})">🗑️ Delete</button>
            </div>
        `;
        
        taskList.appendChild(li);
    });
}

// ===== QUICK LINKS =====

function loadQuicklinks() {
    try {
        const saved = localStorage.getItem('quicklinks');
        if (saved) {
            quicklinksState.links = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Failed to load quick links:', error);
        quicklinksState.links = [
            { id: 1, name: 'Google', url: 'https://google.com', icon: '🔍' },
            { id: 2, name: 'GitHub', url: 'https://github.com', icon: '🐙' },
            { id: 3, name: 'YouTube', url: 'https://youtube.com', icon: '📺' },
            { id: 4, name: 'Gmail', url: 'https://gmail.com', icon: '📧' },
            { id: 5, name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' }
        ];
    }
}

function saveQuicklinks() {
    try {
        localStorage.setItem('quicklinks', JSON.stringify(quicklinksState.links));
    } catch (error) {
        console.error('Failed to save quick links:', error);
    }
}

function renderQuicklinks() {
    const container = document.getElementById('quicklinksContainer');
    container.innerHTML = '';
    
    quicklinksState.links.forEach(link => {
        const btn = document.createElement('button');
        btn.className = 'quicklink-btn';
        btn.innerHTML = `
            <span class="quicklink-icon">${link.icon}</span>
            <span class="quicklink-name">${escapeHtml(link.name)}</span>
        `;
        btn.onclick = (e) => {
            e.preventDefault();
            window.open(link.url, '_blank');
        };
        container.appendChild(btn);
    });
}

// ===== UTILITY FUNCTIONS =====

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== EVENT LISTENERS SETUP =====

function setupEventListeners() {
    // Timer buttons
    document.getElementById('startBtn').addEventListener('click', startTimer);
    document.getElementById('stopBtn').addEventListener('click', stopTimer);
    document.getElementById('resetBtn').addEventListener('click', resetTimer);
    
    // CHALLENGE 5: Pomodoro time input
    document.getElementById('pomodoroTimeInput').addEventListener('change', changePomodoroTime);
    
    // Task input
    document.getElementById('addBtn').addEventListener('click', () => {
        addTask(document.getElementById('taskInput').value);
    });
    
    document.getElementById('taskInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(e.target.value);
        }
    });
    
    // CHALLENGE 3: Sort dropdown
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        handleSortChange(e.target.value);
    });
    
    // CHALLENGE 4: Dark mode toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // CHALLENGE 1: Name modal
    document.getElementById('setNameBtn').addEventListener('click', openNameModal);
    document.getElementById('saveName').addEventListener('click', saveName);
    document.getElementById('cancelName').addEventListener('click', closeNameModal);
    document.getElementById('nameInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveName();
        }
    });
    
    // Close modal when clicking outside
    document.getElementById('nameModal').addEventListener('click', (e) => {
        if (e.target.id === 'nameModal') {
            closeNameModal();
        }
    });
    
    // Edit Task Modal - Buttons
    document.getElementById('saveEditTask').addEventListener('click', saveEditTask);
    document.getElementById('cancelEditTask').addEventListener('click', closeEditTaskModal);
    
    document.getElementById('editTaskText').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveEditTask();
        }
    });
    
    // Close modal when clicking outside
    document.getElementById('editTaskModal').addEventListener('click', (e) => {
        if (e.target.id === 'editTaskModal') {
            closeEditTaskModal();
        }
    });
    
    // Delete Confirmation Modal - Buttons
    document.getElementById('confirmDelete').addEventListener('click', confirmDelete);
    document.getElementById('cancelDelete').addEventListener('click', closeDeleteConfirmModal);
    
    // Close modal when clicking outside
    document.getElementById('deleteConfirmModal').addEventListener('click', (e) => {
        if (e.target.id === 'deleteConfirmModal') {
            closeDeleteConfirmModal();
        }
    });
    
    // Escape key support for all modals (Task #9)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const nameModal = document.getElementById('nameModal');
            const editTaskModal = document.getElementById('editTaskModal');
            const deleteConfirmModal = document.getElementById('deleteConfirmModal');
            
            if (nameModal.classList.contains('show')) {
                closeNameModal();
            }
            if (editTaskModal.classList.contains('show')) {
                closeEditTaskModal();
            }
            if (deleteConfirmModal.classList.contains('show')) {
                closeDeleteConfirmModal();
            }
        }
    });
}
