# To-Do List Life Dashboard - Design Document

## Architecture Overview

This application will be built with a simple, single-file approach:
- **Single HTML file** (`index.html`) for structure
- **Single CSS file** (`css/style.css`) for styling
- **Single JavaScript file** (`js/script.js`) for all logic

**Data Flow:**
```
User Input → JavaScript Logic → DOM Update + Local Storage Save → Persisted Data
```

**Technology Stack:**
- HTML5 for semantic structure
- CSS3 for responsive styling (Flexbox/Grid)
- Vanilla JavaScript (ES6+) for interactivity
- Browser Local Storage API for data persistence

## UI Components

### 1. Header Section - Greeting & Time

**Visual:**
```
┌────────────────────────────────────────┐
│                                        │
│  Good Morning, Muhammad                │
│  Friday, September 11, 2026            │
│  14:45:30                              │
│                                        │
└────────────────────────────────────────┘
```

**Elements:**
- **Greeting Text** - Dynamic based on time of day
  - 5:00-11:00: "Good Morning"
  - 11:00-15:00: "Good Afternoon"
  - 15:00-18:00: "Good Evening"
  - 18:00-5:00: "Good Night"
- **Date Display** - Full date (e.g., "Friday, September 11, 2026")
- **Time Display** - Real-time clock (HH:MM:SS format, updates every second)
- **Custom Name** (Optional Challenge) - Shows name in greeting

**CSS Styling:**
- Centered alignment
- Large, readable font sizes (h1 for greeting, p for date/time)
- Light background with high contrast text
- Subtle shadow for depth
- Padding and spacing for visual hierarchy

---

### 2. Focus Timer Section
```
┌─────────────────────────────────────┐
│         FOCUS TIMER                 │
│                                     │
│           25:00                     │
│                                     │
│  [START] [STOP] [RESET]             │
└─────────────────────────────────────┘
```

**Elemen:**
- Display timer besar di tengah
- Tombol Start (mulai timer)
- Tombol Stop (pause timer)
- Tombol Reset (kembali ke 25:00)
- Visual indicator (progress bar atau warna berubah)

**CSS:**
- Large circular display atau card style
- Tombol dengan hover effect
- Color change saat timer berjalan vs idle

**Logic:**
- Timer countdown logic
- Local Storage untuk save state timer jika diperlukan
- Notification/alert saat timer selesai (optional)

---

### 3. To-Do List Section
```
┌─────────────────────────────────────┐
│         TO-DO LIST                  │
│                                     │
│  [Input field] [ADD]                │
│                                     │
│  ☐ Task 1      [EDIT] [DELETE]     │
│  ☑ Task 2      [EDIT] [DELETE]     │
│  ☐ Task 3      [EDIT] [DELETE]     │
│                                     │
└─────────────────────────────────────┘
```

**Elemen:**
- Input field untuk task baru
- Tombol ADD untuk menambah task
- List untuk display tasks
- Checkbox untuk mark as done
- Tombol EDIT untuk ubah task
- Tombol DELETE untuk hapus task
- Visual feedback: completed tasks terlihat berbeda (strikethrough/faded)

**CSS:**
- Card/container style
- Task items dengan padding
- Hover effect pada task items
- Different styling untuk completed tasks

**Logic:**
- Add task ke array & Local Storage
- Edit task dengan modal/inline edit
- Toggle done status
- Delete task dari array & Local Storage
- Load tasks dari Local Storage saat page load
- Auto-save ke Local Storage setiap ada perubahan

---

### 4. Quick Links Section
```
┌─────────────────────────────────────┐
│        QUICK LINKS                  │
│                                     │
│  [YouTube] [GitHub] [Gmail]         │
│  [Google]  [LinkedIn]               │
│                                     │
└─────────────────────────────────────┘
```

**Elemen:**
- Tombol/card untuk setiap website
- Display dengan ikon atau text
- Clickable links yang buka di tab baru
- Opsional: Tombol untuk tambah/edit quick links

**CSS:**
- Grid atau flexbox layout
- Button/card style dengan shadow
- Hover effect (scale up atau shadow increase)
- Responsive pada mobile

**Logic:**
- Array untuk simpan quick links
- Load dari Local Storage
- Click handler untuk open URL di tab baru
- Optional: Modal untuk add/edit quick links

---

## Layout Structure

### Desktop Layout (Default)
```
Full Width
┌────────────────────────────────────┐
│    HEADER (Greeting & Time)        │
├────────────────────────────────────┤
│  TIMER (25%)  │   TO-DO LIST (50%)  │  QUICK LINKS (25%)
│               │                     │
│               │                     │
└────────────────────────────────────┘
```

Atau full width stacked:
```
┌────────────────────────────────────┐
│    HEADER (Greeting & Time)        │
├────────────────────────────────────┤
│         FOCUS TIMER                │
├────────────────────────────────────┤
│         TO-DO LIST                 │
├────────────────────────────────────┤
│         QUICK LINKS                │
└────────────────────────────────────┘
```

### Mobile Layout
- Single column, stacked vertically
- Full width components
- Larger touch targets untuk buttons

---

## Color Scheme (Light Mode)
- **Background**: #f5f5f5 atau #ffffff
- **Primary Card**: #ffffff dengan subtle shadow
- **Text**: #333333 (dark gray)
- **Accent**: #4CAF50 (green untuk completed) atau brand color
- **Button**: #2196F3 (blue) dengan hover darker
- **Completed Task**: #4CAF50 dengan strikethrough

## Color Scheme (Dark Mode - Challenge)
- **Background**: #1a1a1a atau #2d2d2d
- **Primary Card**: #2d2d2d
- **Text**: #e0e0e0 (light gray)
- **Accent**: #4CAF50
- **Button**: #2196F3 dengan hover lighter
- **Completed Task**: #4CAF50 dengan strikethrough

---

## Data Model

### Local Storage Structure

```javascript
// Tasks Array
{
  "tasks": [
    {
      "id": 1,
      "text": "Buy groceries",
      "done": false,
      "createdAt": "2026-09-11T14:45:00Z"
    },
    {
      "id": 2,
      "text": "Finish project",
      "done": true,
      "createdAt": "2026-09-11T10:00:00Z"
    }
  ]
}

// Quick Links Array
{
  "quickLinks": [
    {
      "id": 1,
      "name": "YouTube",
      "url": "https://youtube.com",
      "icon": "📺"
    }
  ]
}

// User Settings
{
  "userSettings": {
    "name": "Muhammad",
    "theme": "light", // light or dark
    "pomodoroTime": 25 // in minutes
  }
}
```

---

## Challenge Features Design

### 1. Light / Dark Mode Toggle
- Toggle button di header atau navbar
- Save preference ke Local Storage
- Apply CSS classes untuk light/dark theme
- Smooth transition antara tema

### 2. Custom Name in Greeting
- Input field di greeting section atau modal
- Save name ke Local Storage
- Update greeting text dengan nama
- Default text jika belum input nama

### 3. Change Pomodoro Time
- Input field atau slider untuk set durasi
- Save ke Local Storage
- Reset timer saat durasi berubah
- Validasi input (min: 1, max: 60 menit)

### 4. Prevent Duplicate Tasks
- Check existing tasks saat user add new task
- Case-insensitive comparison
- Show warning/error message
- Prevent add jika duplikat ditemukan

### 5. Sort Tasks
- Button untuk sort berdasarkan:
  - Status (Done first / Undone first)
  - Alphabet (A-Z)
  - Created date (Newest/Oldest)
- Save sort preference ke Local Storage
- Apply sort saat render tasks

---

## Interaction Flow

### Add Task
1. User input text di input field
2. User click ADD atau press Enter
3. Validate input (tidak kosong, tidak duplikat)
4. Add task ke array dengan unique ID
5. Save ke Local Storage
6. Re-render task list
7. Clear input field

### Edit Task
1. User click EDIT tombol pada task
2. Show modal atau inline edit mode
3. User ubah text
4. User click SAVE
5. Update task di array
6. Save ke Local Storage
7. Re-render task list

### Mark as Done
1. User click checkbox pada task
2. Toggle done property
3. Save ke Local Storage
4. Re-render task list dengan visual feedback

### Delete Task
1. User click DELETE tombol
2. Optional: Show confirmation dialog
3. Remove task dari array
4. Save ke Local Storage
5. Re-render task list

---

## Performance Considerations

- **Real-time Clock**: Update setiap 1 detik (tidak setiap ms)
- **Debounce**: Local Storage save operations
- **Lazy Rendering**: Hanya re-render affected elements jika mungkin
- **Efficient DOM Updates**: Minimize DOM manipulation

---

## Accessibility Notes

- Semantic HTML (button, input, label)
- Proper color contrast untuk readability
- Keyboard navigation support
- ARIA labels untuk screen readers (optional)
- Focus states untuk buttons dan inputs
