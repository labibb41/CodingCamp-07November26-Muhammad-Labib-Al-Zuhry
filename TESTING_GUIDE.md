# Life Dashboard - Testing Guide

## 🧪 How to Test the Website

### Step 1: Open in Browser
1. Navigate to your project folder
2. Open `index.html` in your browser (right-click → Open with Browser)
3. Or open in VS Code and use Live Server extension

### Step 2: Test MVP Features

#### ✅ Feature 1: Time Display & Greeting
- [ ] Greeting displays (Good Morning/Afternoon/Evening/Night based on time)
- [ ] Time updates every second (watch the seconds)
- [ ] Date displays in correct format
- [ ] Time is accurate

**How to Test:**
1. Open the page at different times (or change system time)
2. Watch the time display update in real-time
3. Verify greeting changes based on hour

#### ✅ Feature 2: Focus Timer
- [ ] Timer displays "25:00" initially
- [ ] START button starts countdown
- [ ] Timer counts down every second
- [ ] STOP button pauses the timer
- [ ] RESET button goes back to 25:00
- [ ] Alert appears when timer reaches 00:00

**How to Test:**
1. Click START → Timer should countdown
2. Click STOP → Timer should pause
3. Click START again → Timer resumes from where it stopped
4. Click RESET → Timer goes back to 25:00
5. Let timer count down to test notification (or manually change browser time)

#### ✅ Feature 3: To-Do List
- [ ] Can add new tasks
- [ ] Task appears in list
- [ ] Can mark task as done (checkbox)
- [ ] Completed tasks show strikethrough
- [ ] Can edit task text
- [ ] Can delete task
- [ ] Tasks persist after page refresh

**How to Test:**
1. Type task text in input → Click ADD
2. Task should appear in list
3. Click checkbox → Task should be marked as done (strikethrough)
4. Click ✏️ Edit → Change text → Verify change
5. Click 🗑️ Delete → Task disappears
6. Refresh page (F5) → All tasks should still be there
7. Open DevTools (F12) → Application → Local Storage → Verify "tasks" key has data

#### ✅ Feature 4: Quick Links
- [ ] Quick links display as buttons
- [ ] Each button shows icon + name
- [ ] Clicking button opens link in new tab
- [ ] Links work correctly

**How to Test:**
1. Look at Quick Links section
2. Should see: Google, GitHub, YouTube, Gmail, LinkedIn
3. Click each one → Should open in new tab
4. Verify links are correct

---

## 🎯 Test Challenge 1: Custom Name in Greeting

### Feature: Personalized Greeting

**How to Test:**
1. Look for the ✏️ button next to the greeting
2. Click the pencil button → Modal should appear
3. Type your name (e.g., "Muhammad")
4. Click "Save" → Greeting should now show "Good [Time], Muhammad"
5. Refresh page → Name should still be there
6. Verify in DevTools → Local Storage → "userName" key

**Test Cases:**
- [ ] Can set name
- [ ] Greeting updates with name
- [ ] Name persists after refresh
- [ ] Name max 50 characters (try longer)
- [ ] Empty name shows error
- [ ] Clicking cancel closes modal without saving

**Expected Behavior:**
```
Before: "Good Morning"
After:  "Good Morning, Muhammad"
```

---

## 🎯 Test Challenge 2: Prevent Duplicate Tasks

### Feature: No Duplicate Tasks Allowed

**How to Test:**
1. Add task: "Buy groceries"
2. Try adding same task again: "Buy groceries"
3. Should see error: "❌ This task already exists!"
4. Task should NOT be added

**Test Cases:**
- [ ] Same text shows error
- [ ] Case-insensitive: "buy GROCERIES" = "Buy groceries" (should error)
- [ ] With spaces: " Buy groceries " = "Buy groceries" (should error)
- [ ] Different text works fine
- [ ] Error disappears after 3 seconds
- [ ] Can add task after error is gone

**Expected Behavior:**
```
Add: "Buy groceries" ✅ Success
Add: "Buy groceries" ❌ Error: "This task already exists!"
Add: "buy groceries" ❌ Error: "This task already exists!" (case-insensitive)
Add: "Buy milk" ✅ Success (different task)
```

---

## 🎯 Test Challenge 3: Sort Tasks

### Feature: Sort Tasks by Different Methods

**How to Test:**
1. Add several tasks:
   - "Zebra task"
   - "Apple task"
   - "Banana task"
2. Mark some as done
3. Look at "Sort by" dropdown

**Test Cases:**

#### Sort by Date (Newest First)
- [ ] Click "Date (Newest First)"
- [ ] Tasks should be in order added (latest first)
- [ ] Refresh page → Order should persist

#### Sort by Alphabetic (A-Z)
- [ ] Click "Alphabetic (A-Z)"
- [ ] Tasks should be in alphabetical order: Apple, Banana, Zebra
- [ ] Refresh page → Order should persist

#### Sort by Status (Undone First)
- [ ] Click "Status (Undone First)"
- [ ] All undone tasks appear first
- [ ] All done tasks appear below
- [ ] Refresh page → Order should persist

**Expected Behavior:**
```
Tasks added: Zebra, Apple, Banana

Sort by Date:       Banana, Apple, Zebra (newest first)
Sort by Alphabetic: Apple, Banana, Zebra
Sort by Status:     [Undone tasks] then [Done tasks]
```

**Advanced Test:**
1. Add: Z, B, A
2. Mark B as done
3. Sort by Status → A, Z (undone), then B (done)
4. Change to Alphabetic → A, B, Z (alphabetical)
5. Change back to Status → A, Z, B (status again)
6. Refresh → Should still be Status sort

---

## 📝 Complete Testing Checklist

### MVP Features (4/4)
- [ ] Time & Greeting: Displays and updates correctly
- [ ] Focus Timer: Starts, stops, resets, alerts
- [ ] To-Do List: Add, edit, delete, mark done, persists
- [ ] Quick Links: All links work and open in new tab

### Challenge 1: Custom Name (3/3)
- [ ] Click ✏️ button opens modal
- [ ] Can type and save name
- [ ] Greeting shows personalized message
- [ ] Name persists after refresh
- [ ] Can edit name again

### Challenge 2: Prevent Duplicates (5/5)
- [ ] Same text blocked
- [ ] Case-insensitive duplicate detection
- [ ] Whitespace trimmed before comparison
- [ ] Error message shows for 3 seconds
- [ ] Can add different tasks

### Challenge 3: Sort Tasks (6/6)
- [ ] Sort by Date works
- [ ] Sort by Alphabetic works
- [ ] Sort by Status works
- [ ] Sort preference persists after refresh
- [ ] Switching sorts updates display correctly
- [ ] Adding new task respects current sort

### Local Storage (3/3)
- [ ] Tasks saved in Local Storage
- [ ] Task sort preference saved
- [ ] User name saved

### Responsive Design (3/3)
- [ ] Desktop view looks good (1920x1080)
- [ ] Tablet view responsive (768x1024)
- [ ] Mobile view responsive (375x667)

### Browser Compatibility (3/3)
- [ ] Chrome/Edge works
- [ ] Firefox works
- [ ] Safari works (if available)

---

## 🔍 DevTools Inspection

### Check Local Storage
1. Open DevTools (F12)
2. Go to: Application → Local Storage → http://localhost:... or file://
3. Should see 3 keys:
   - `tasks` - JSON array of tasks
   - `taskSortType` - Current sort method
   - `userName` - User's name

### Check Console
1. Open DevTools Console (F12)
2. Should have NO errors (red messages)
3. Green "✓" for successful operations

### Inspect Elements
1. Right-click on element → Inspect
2. Verify HTML structure is semantic
3. Check CSS classes are applied correctly

---

## 🐛 Troubleshooting

### Issue: Timer doesn't start
**Solution:** Check if START button is disabled. Click STOP first, then START.

### Issue: Duplicate task not detected
**Solution:** Check console for errors. Verify case sensitivity is working.

### Issue: Sort doesn't work
**Solution:** Add multiple tasks first. Make sure tasks have different dates or text.

### Issue: Name doesn't save
**Solution:** Check that modal closes after save. Verify in DevTools Local Storage.

### Issue: Tasks disappear after refresh
**Solution:** Check Local Storage in DevTools. Should have "tasks" key with data.

### Issue: Page looks broken on mobile
**Solution:** Reduce browser window size. Check that media queries work (F12 → Responsive mode).

---

## ✅ Final Verification

Before considering it done, verify:

1. **All MVP Features Working**
   - [ ] Time updates every second
   - [ ] Greeting changes with time
   - [ ] Timer counts down accurately
   - [ ] To-do CRUD works
   - [ ] Quick links open correctly

2. **All 3 Challenges Working**
   - [ ] Custom name in greeting
   - [ ] Duplicate prevention
   - [ ] Task sorting

3. **Data Persistence**
   - [ ] Tasks saved after refresh
   - [ ] Sort preference remembered
   - [ ] Name remembered

4. **No Errors**
   - [ ] No red errors in console
   - [ ] No visual glitches
   - [ ] All buttons clickable

5. **Responsive Design**
   - [ ] Looks good on desktop
   - [ ] Looks good on tablet
   - [ ] Looks good on mobile

6. **Browser Support**
   - [ ] Works in Chrome
   - [ ] Works in Firefox
   - [ ] Works in Edge

---

## 🎉 Success!

If all checkboxes are ✓, your website is ready for:
1. Pushing to GitHub
2. Enabling GitHub Pages
3. Submitting for evaluation

Good luck! 🚀
