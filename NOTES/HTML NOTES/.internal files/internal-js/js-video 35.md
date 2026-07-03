# 🛠️ JavaScript — 4 Beginner Projects (DOM Practice)

> [!info] Source [Chai aur Code by Hitesh Choudhary](https://www.youtube.com/watch?v=EGqHVjU-fas)

#javascript #dom #projects #revision

> [!abstract] Is video mein kya seekhein? Yahan 4 projects hain — teeno mein naye concepts hain jo notes mein highlight kiye hain. Code yaad karna zaroori nahi — **logic aur concepts** samjho.

---

## 🎨 Project 1 — Color Switcher (Background Change on Click)

**Goal:** Button click karo → poore page ka background color badal jaaye.

### Naye Concepts:

> [!tip] `e.target` — Kahan se Click Hua? Jab ek hi function multiple buttons par kaam kare, `e.target` batata hai ki **exactly kaun sa button** click hua. `e.target.id` → us button ki ID milti hai

```javascript
const buttons = document.querySelectorAll('.button'); // NodeList → forEach chalega ✅
const body    = document.querySelector('body');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // e.target.id = clicked button ki ID (grey / white / blue / yellow)
        if (e.target.id === 'grey')   body.style.backgroundColor = e.target.id;
        if (e.target.id === 'white')  body.style.backgroundColor = e.target.id;
        if (e.target.id === 'blue')   body.style.backgroundColor = e.target.id;
        if (e.target.id === 'yellow') body.style.backgroundColor = e.target.id;
    });
});
```

**Logic Flow:**

```
Button click → e.target.id check → body ka backgroundColor set
```

---

## ⚖️ Project 2 — BMI Calculator (Form Handling)

**Goal:** Height (cm) + Weight (kg) input lo → BMI calculate karo → result dikhao.

### Naye Concepts:

> [!tip] `e.preventDefault()` — Page Reload Rokna Form submit hone par browser default mein **page reload** karta hai ya server par data bhejta hai. `e.preventDefault()` ye rokta hai → hum khud JS se handle karte hain.

> [!warning] Input value hamesha `submit` ke andar lo! Agar input value **bahar** (page load par) li → empty string milegi. Hamesha **event ke andar** lo → tab user ki filled value milegi. ✅

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // ← page reload band

    // ✅ Values andar lo — submit ke baad
    const height  = parseInt(document.querySelector('#height').value);
    const weight  = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Validation
    if (isNaN(height) || height < 0) {
        results.innerHTML = `Please give a valid height: ${height}`;
    } else if (isNaN(weight) || weight < 0) {
        results.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        // BMI Formula: weight / (height in meters)²
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI: ${bmi}</span>`;
    }
});
```

**Key Functions:**

|Function|Kaam|
|---|---|
|`parseInt()`|Input string → integer number mein convert|
|`isNaN()`|Check karo ki value number hai ya nahi|
|`.toFixed(2)`|2 decimal places tak round karo|

---

## ⏰ Project 3 — Digital Clock (Real-time)

**Goal:** Screen par live clock dikhao — har second update ho.

### Naya Concept:

> [!tip] `setInterval()` — Baar Baar Chalao Koi bhi function **fixed time interval** par baar baar chalana ho → `setInterval` use karo. `setInterval(function, milliseconds)` → 1000ms = 1 second

```javascript
const clock = document.getElementById('clock');

setInterval(function() {
    const date = new Date();               // har second naya time object
    clock.innerHTML = date.toLocaleTimeString(); // "03:45:10 PM" format
}, 1000); // ← har 1 second baad chalega
```

**Useful Date Methods:**

|Method|Output|
|---|---|
|`new Date()`|Current date + time object|
|`.toLocaleTimeString()`|`"3:45:10 PM"` format|
|`.toLocaleDateString()`|`"7/3/2026"` format|

---

## 🎲 Project 4 — Number Guessing Game

**Goal:** 1-100 ke beech random number guess karo — 10 attempts milenge.

### State Variables — Game Ki Memory:

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1); // secret number
let prevGuess    = [];    // purane guesses ka array
let numGuess     = 1;     // attempt counter
let playGame     = true;  // game chal rahi hai ya nahi
```

> [!tip] State Variables kya hote hain? Ye woh variables hain jo **game ki current situation** track karte hain. Inhe update karke game aage badhti hai — ye concept React mein bhi use hota hai!

### Game Ka Logic Flow:

```
User input → validateGuess()
                ↓
         Sahi number hai?
         ↙            ↘
      checkGuess()   Error message
         ↓
   Correct / Too Low / Too High
         ↓
     10 attempts? → endGame()
                        ↓
                  "Start New Game" button
                        ↓
                    newGame() → sab reset
```

### Key Functions:

```javascript
// 1. Validate — sahi input hai?
function validateGuess(guess) {
    if (isNaN(guess))              { alert('Valid number do'); }
    else if (guess < 1 || guess > 100) { alert('1-100 ke beech do'); }
    else {
        prevGuess.push(guess);
        numGuess === 10 ? endGame() : (displayGuess(guess), checkGuess(guess));
    }
}

// 2. Check — high / low / correct?
function checkGuess(guess) {
    if (guess === randomNumber)   displayMessage('You guessed it right! 🎉');
    else if (guess < randomNumber) displayMessage('Number is TOO low ⬆️');
    else                           displayMessage('Number is TOO high ⬇️');
}

// 3. Display — screen update karo
function displayGuess(guess) {
    userInput.value         = '';              // input clear
    guessSlot.innerHTML    += `${guess}, `;   // history mein add
    numGuess++;
    remaining.innerHTML     = `${11 - numGuess}`; // attempts remaining
}

// 4. End — game khatam
function endGame() {
    displayMessage(`Game Over! Number was ${randomNumber}`);
    userInput.setAttribute('disabled', '');   // input band karo
    // "Start New Game" button add karo
    playGame = false;
}

// 5. New Game — sab reset
function newGame() {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []; numGuess = 1; playGame = true;
    userInput.removeAttribute('disabled');    // input wapas on
}
```

---

## ⚡ Quick Revision — Saare Naye Concepts

> [!tip] Cheat Sheet — Is Video Se Seekha
> 
> |Concept|Matlab|
> |---|---|
> |`e.target`|Exactly kaun sa element click hua|
> |`e.target.id`|Us element ki ID|
> |`e.preventDefault()`|Form ka default behavior (reload) rokna|
> |Input value `submit` ke andar lo|Bahar lene se empty string milegi|
> |`parseInt(input.value)`|String → Number convert|
> |`isNaN(value)`|Number nahi hai? → true|
> |`.toFixed(2)`|2 decimal tak round off|
> |`setInterval(fn, 1000)`|Har 1 second baad function chalao|
> |**State Variables**|Game ki current situation track karne wale variables|
> |`input.setAttribute('disabled', '')`|Input field band karo|
> |`input.removeAttribute('disabled')`|Input field wapas on karo|

---

#### 🔗 Related

- [[JS_DOM_Edit_Remove|DOM — Edit & Remove Elements]]
- [[JS_DOM_Selectors|DOM Selectors]]
- [[JS_Control_Flow|Control Flow — if/else]]
- [[JS_Functions_Parameters|Functions & Parameters]]