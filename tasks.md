# To-Do List Life Dashboard - Implementation Tasks

## Phase 1: Foundation Setup

### Task 1.1: Project Structure & HTML Boilerplate
- [ ] Create `index.html` dengan HTML5 boilerplate
- [ ] Create `css/style.css` file
- [ ] Create `js/script.js` file
- [ ] Link CSS dan JS ke HTML
- [ ] Setup basic folder structure
- [ ] Test: File dapat diakses tanpa error

### Task 1.2: HTML Structure
- [ ] Create header section untuk greeting & time
- [ ] Create focus timer section dengan display & buttons
- [ ] Create to-do list section dengan input dan list container
- [ ] Create quick links section dengan container
- [ ] Add semantic HTML elements (header, main, section, etc)
- [ ] Add ID dan class untuk CSS & JavaScript targeting
- [ ] Test: HTML terlihat di browser tanpa styling

---

## Phase 2: Styling & Layout

### Task 2.1: Base CSS & Layout
- [ ] Setup CSS variables untuk colors, fonts, spacing
- [ ] Create global styles (body, container, typography)
- [ ] Implement flexbox/grid untuk main layout
- [ ] Create responsive layout untuk desktop & mobile
- [ ] Add reset/normalize CSS
- [ ] Test: Layout terlihat baik dan responsive

### Task 2.2: Component Styling
- [ ] Style header section (greeting, time, date)
- [ ] Style timer section dengan display besar
- [ ] Style to-do list container dan task items
- [ ] Style quick links section
- [ ] Add hover effects untuk buttons dan interactive elements
- [ ] Implement light theme colors
- [ ] Test: Semua component terlihat sesuai design

### Task 2.3: Polish & Details
- [ ] Add shadows, borders, dan spacing
- [ ] Implement typography hierarchy
- [ ] Add transitions & animations untuk interactivity
- [ ] Ensure color contrast untuk accessibility
- [ ] Fine-tune responsive design
- [ ] Test: UI terlihat polished dan professional

---

## Phase 3: Core Functionality

### Task 3.1: Time & Greeting Display
- [ ] Create function untuk get current time
- [ ] Create function untuk format time (HH:MM:SS)
- [ ] Create function untuk get current date
- [ ] Create function untuk determine greeting text berdasarkan jam
  - Pagi: 5-11 → "Good Morning"
  - Siang: 11-15 → "Good Afternoon"
  - Sore: 15-18 → "Good Evening"
  - Malam: 18-5 → "Good Night"
- [ ] Update time display setiap detik dengan setInterval
- [ ] Display greeting + date + time di header
- [ ] Test: Time update real-time, greeting berubah sesuai jam

### Task 3.2: Local Storage Setup & Utility Functions
- [ ] Create function untuk save data ke Local Storage
- [ ] Create function untuk load data dari Local Storage
- [ ] Create function untuk remove data dari Local Storage
- [ ] Setup data structure untuk tasks, settings, quick links
- [ ] Initialize default data jika Local Storage kosong
- [ ] Test: Data dapat disave dan load dengan benar

### Task 3.3: To-Do List - Basic CRUD
- [ ] Create array/object untuk store tasks
- [ ] Create function `addTask(text)` untuk add task baru
  - Generate unique ID
  - Set done status ke false
  - Save ke Local Storage
- [ ] Create function `deleteTask(id)` untuk delete task
  - Remove dari array
  - Save ke Local Storage
- [ ] Create function `toggleTaskDone(id)` untuk toggle done status
  - Update done property
  - Save ke Local Storage
- [ ] Create function `updateTask(id, newText)` untuk edit task
  - Update text property
  - Save ke Local Storage
- [ ] Test: Semua CRUD operation berfungsi dengan benar

### Task 3.4: To-Do List - UI Rendering
- [ ] Create function untuk render task list
- [ ] Create function untuk create task DOM element
- [ ] Render tasks saat page load (dari Local Storage)
- [ ] Update UI saat task ditambah/diedit/delete
- [ ] Show visual feedback untuk completed tasks (strikethrough, opacity)
- [ ] Attach event listeners ke buttons (edit, delete, checkbox)
- [ ] Test: Task list render dengan benar, interaksi berfungsi

### Task 3.5: To-Do List - Input Handling
- [ ] Create input field untuk task baru
- [ ] Create ADD button
- [ ] Attach click handler ke ADD button
- [ ] Allow Enter key untuk submit task
- [ ] Validate input (tidak kosong)
- [ ] Clear input field setelah submit
- [ ] Show error message jika input invalid
- [ ] Test: Input handling dan validation berfungsi

### Task 3.6: Focus Timer - Core Logic
- [ ] Create timer state (minutes, seconds, isRunning)
- [ ] Create function `startTimer()` untuk mulai timer
  - Countdown setiap 1 detik
  - Update display
  - Update state
- [ ] Create function `stopTimer()` untuk pause timer
- [ ] Create function `resetTimer()` untuk reset ke 25 menit
- [ ] Create function untuk format timer display (MM:SS)
- [ ] Test: Timer countdown berfungsi dengan benar

### Task 3.7: Focus Timer - UI & Buttons
- [ ] Create timer display element
- [ ] Create START, STOP, RESET buttons
- [ ] Render timer display dengan format MM:SS
- [ ] Attach click handlers ke buttons
- [ ] Update display setiap detik
- [ ] Add visual feedback (button state, color change)
- [ ] Optional: Add notification saat timer selesai
- [ ] Test: Timer UI dan buttons berfungsi

### Task 3.8: Quick Links - Setup & Storage
- [ ] Create default quick links data
- [ ] Create function `addQuickLink(name, url, icon)` 
- [ ] Create function `deleteQuickLink(id)`
- [ ] Save/load quick links dari Local Storage
- [ ] Initialize quick links saat page load
- [ ] Test: Quick links dapat disave dan load

### Task 3.9: Quick Links - UI & Interaction
- [ ] Create function untuk render quick links
- [ ] Render quick links sebagai buttons/cards
- [ ] Attach click handlers untuk open URL di tab baru
- [ ] Add hover effects
- [ ] Optional: Add edit/delete functionality
- [ ] Test: Quick links clickable dan open di tab baru

---

## Phase 4: Challenges Implementation (Choose 3)

### Challenge 4.1: Light / Dark Mode Toggle
- [ ] Create toggle button di header
- [ ] Create CSS untuk dark theme
- [ ] Create function `toggleTheme()`
- [ ] Save theme preference ke Local Storage
- [ ] Load theme preference saat page load
- [ ] Apply theme ke document
- [ ] Smooth transition antara tema
- [ ] Test: Theme toggle berfungsi, preference tersimpan

### Challenge 4.2: Custom Name in Greeting
- [ ] Create input field untuk input nama
- [ ] Create function `saveName(name)` ke Local Storage
- [ ] Load nama dari Local Storage saat page load
- [ ] Update greeting text dengan nama
- [ ] Show default text jika nama belum diset
- [ ] Add edit functionality (modal atau inline)
- [ ] Validate input nama (tidak kosong, max 50 char)
- [ ] Test: Custom greeting berfungsi, nama tersimpan

### Challenge 4.3: Change Pomodoro Time
- [ ] Create input field untuk durasi timer
- [ ] Create function `setPomodoroTime(minutes)` ke Local Storage
- [ ] Load durasi dari Local Storage saat page load
- [ ] Update timer display dengan durasi baru
- [ ] Reset timer saat durasi berubah
- [ ] Validate input (1-60 menit)
- [ ] Add UI untuk show current durasi
- [ ] Test: Durasi dapat diubah, timer sesuai durasi

### Challenge 4.4: Prevent Duplicate Tasks
- [ ] Create function `isDuplicateTask(text)` untuk check duplikat
  - Case-insensitive comparison
  - Trim whitespace
- [ ] Update `addTask()` untuk check duplikat sebelum add
- [ ] Show error message jika duplikat
- [ ] Prevent add jika duplikat ditemukan
- [ ] Test: Duplikat tasks tidak dapat ditambahkan

### Challenge 4.5: Sort Tasks
- [ ] Create sort buttons (by status, alphabetic, date)
- [ ] Create function `sortTasks(sortType)` 
  - Sort by done status
  - Sort alphabetically
  - Sort by created date
- [ ] Create function untuk update sort preference di Local Storage
- [ ] Apply sort saat render tasks
- [ ] Load sort preference saat page load
- [ ] Update UI saat sort berubah
- [ ] Test: Tasks dapat disort, preference tersimpan

---

## Phase 5: Testing & Optimization

### Task 5.1: Functionality Testing
- [ ] Test semua CRUD operations untuk tasks
- [ ] Test timer countdown accuracy
- [ ] Test time/date display real-time update
- [ ] Test greeting text change sesuai jam
- [ ] Test quick links open di tab baru
- [ ] Test Local Storage persist data
- [ ] Test page refresh tidak lose data
- [ ] Test di multiple browsers (Chrome, Firefox, Edge, Safari)

### Task 5.2: Responsive Design Testing
- [ ] Test di desktop resolution (1920x1080)
- [ ] Test di tablet resolution (768x1024)
- [ ] Test di mobile resolution (375x667)
- [ ] Test portrait dan landscape mode
- [ ] Ensure buttons/inputs mudah diklik di mobile
- [ ] Ensure layout tidak overlap

### Task 5.3: Edge Cases & Error Handling
- [ ] Test add empty task (should fail)
- [ ] Test very long task text (should handle gracefully)
- [ ] Test Local Storage full (should handle)
- [ ] Test delete all tasks dan re-add
- [ ] Test timer continue saat page minimize
- [ ] Test clear Local Storage dan reinitialize

### Task 5.4: Performance Optimization
- [ ] Minimize DOM manipulation
- [ ] Debounce Local Storage saves jika ada banyak operations
- [ ] Lazy load images jika ada (opsional)
- [ ] Check console untuk memory leaks
- [ ] Test page load time
- [ ] Optimize CSS untuk faster rendering

### Task 5.5: Code Quality & Organization
- [ ] Code review untuk readability
- [ ] Add comments untuk complex logic
- [ ] Ensure consistent naming convention
- [ ] Organize functions dengan logical grouping
- [ ] Remove console.log dan debug code
- [ ] Ensure code follows best practices

---

## Phase 6: Deployment & Submission

### Task 6.1: GitHub Setup & Push
- [ ] Initialize git repository
- [ ] Create GitHub repository dengan naming format: `CodingCamp-[batch date]-[name]`
- [ ] Add .gitignore (jika diperlukan)
- [ ] Commit initial code
- [ ] Push code ke GitHub
- [ ] Include .kiro folder dalam commit
- [ ] Verify code terlihat di GitHub

### Task 6.2: GitHub Pages Deployment
- [ ] Enable GitHub Pages di repository settings
- [ ] Select branch (main) untuk publish
- [ ] Verify website live di GitHub Pages URL
- [ ] Test published website berfungsi dengan benar
- [ ] Verify responsive design di live site

### Task 6.3: Final Testing & Verification
- [ ] Test live website di multiple browsers
- [ ] Verify semua features berfungsi di live site
- [ ] Check Local Storage working di live site
- [ ] Verify quick links open dengan benar
- [ ] Check performance di live site

### Task 6.4: Submission
- [ ] Prepare AWS Builder ID
- [ ] Gather GitHub Repository URL
- [ ] Gather published website URL
- [ ] Fill Paperform submission form
- [ ] Submit sebelum deadline (Sabtu 11:59 WIB)
- [ ] Keep submission confirmation

---

## Summary

**Total Tasks**: ~50 tasks
**Estimated Timeline**: 5 days (distributed)

**Daily Breakdown Suggestion**:
- **Day 1**: Phase 1 & 2 (Setup & Styling)
- **Day 2**: Phase 3.1 - 3.5 (Time, Greeting, To-Do List)
- **Day 3**: Phase 3.6 - 3.9 (Timer & Quick Links)
- **Day 4**: Phase 4 (Challenges - Choose 3)
- **Day 5**: Phase 5 & 6 (Testing & Deployment)

**Progress Tracking**:
Mark each task as complete (`[x]`) saat selesai untuk track progress.

---

## Notes

- Pastikan selalu test setiap feature sebelum lanjut ke feature berikutnya
- Save code regularly ke GitHub
- Gunakan Kiro untuk help dengan debugging atau stuck points
- Hubungi mentor jika ada blockers
