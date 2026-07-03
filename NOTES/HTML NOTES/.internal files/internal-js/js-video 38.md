

#### title: 2 Projects with Async JS tags: [javascript, async, settimeout, setinterval, dom, chai-aur-code] source: "http://www.youtube.com/watch?v=efrW5-IYoCU"

# 2 Projects with Async JS

> [!info] Source Chai aur #javascript series — Async JS concepts ko practically apply karne wale 2 projects ke notes.

---

### 1️⃣ `setTimeout` ki Basic Science

- **Definition:** `setTimeout()` JS ka ek in-built higher-order function hai, jo diye gaye code block/function ko ek fixed time (milliseconds me) beetne ke baad **sirf ek baar** execute karta hai.
- **Runtime Behavior:** Yeh core JS ka part nahi hai — Browser (`Web APIs`) ya Node.js isko provide karta hai. Jab call hota hai, turant execution thread se bahar nikalke background me chala jaata hai taaki main thread block na ho.

#### 🛑 Timeout Rokna (`clearTimeout`)

Agar decided time poora hone se pehle hi event ko rokna hai, to `setTimeout` se return hui ID ko **`clearTimeout()`** me pass karna hoga.

```javascript
// 1. Change text function banaya
const changeText = function() {
    document.querySelector('h1').innerHTML = "Best JS Series";
}

// 2. setTimeout ko variable me store kiya (2 second ka timer)
const changeMe = setTimeout(changeText, 2000);

// 3. Button click pe timer ko live rokna
document.querySelector('#stop').addEventListener('click', function() {
    clearTimeout(changeMe); // 👈 Timer ruk jaayega aur text nahi badlega
    console.log("STOPPED");
});
```

---

### 2️⃣ `setInterval` aur Advanced Cleanup (Production-Grade Code) 👑

- **Difference:** `setTimeout` sirf ek baar chalta hai, jabki **`setInterval()`** har fixed time interval pe kisi function ko **continuously (baar-baar)** chalata rehta hai jab tak use roka na jaaye.
- **Production Check (Best Practice):** Real coding me jab `clearInterval()` use karke timer rokte ho, to memory management better karne ke liye us ID variable ko **`null`** kar dena chahiye. Iske alawa, safety ke liye hamesha ek **conditional check (`if (!intervalId)`)** lagana chahiye taaki baar-baar 'Start' dabane pe multiple timers ek saath na chalein aur memory leak ya over-utilization ka issue na ho.

---

### 🎨 Project 5: Unlimited Background Color Changer

**Goal:** 'Start' button dabate hi har second web page ka background color randomly badalna chahiye, aur 'Stop' dabate hi wahi rang pe ruk jaana chahiye.

#### 💡 Core Logic (Random Hex Code Generation)

Hex color code `0` se `9` aur `A` se `F` ke characters se milke banta hai (total 16 values).

```javascript
const hex = "0123456789ABCDEF"; // Hex range

// Random 6-digit hex color generator function
const randomColor = function() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        // Math.floor() aur Math.random() * 16 se 0-15 ke beech index milega
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
```

#### 💻 Project 5 ka Full Optimized (Production) Code

```javascript
let intervalId; // 👈 Global scope me ID variable

const startChangingColor = function() {
    // 💡 Safety check: agar timer pehle se chal raha hai, to naya timer na banao
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000); // Har 1 second me badlega
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor(); // 👈 Live background change
    }
};

const stopChangingColor = function() {
    clearInterval(intervalId); // Timer roka
    intervalId = null; // 👑 Best practice: variable ko de-reference (empty) kiya
};

// Event listeners attachment
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
```

---

### ⌨️ Project 6: Keyboard Key Detector

**Goal:** User keyboard pe koi bhi button dabaye, to screen pe live us key ka naam, uska numerical `keyCode`, aur uska systematic `code` ek HTML table me display hona chahiye.

#### 💡 Core Concepts

- **`keydown`:** Keyboard pe button dabane ki event listen karne ke liye use hota hai.
- **Ternary Operator Check ⚠️:** Jab user **Spacebar** dabata hai, to `e.key` ka value ek empty string `" "` aata hai, jise table me clean dikhane ke liye ternary operator se replace karte hain.

#### 💻 Project 6 ka Complete JavaScript Code

```javascript
const insert = document.getElementById('insert'); // 👈 Table inject karne wala div

window.addEventListener('keydown', function(e) { // Pure window pe keydown listener
    // innerHTML me live poori table aur keyboard state inject karna
    insert.innerHTML = `
        <div class="color">
            <table style="border: 1px solid #fff; width: 100%; text-align: left;">
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === ' ' ? 'Space' : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;
});
```

#### 💻 Live Output (Exact Visual State)

Jab user Spacebar dabata hai, DOM manipulation ke baad screen pe render hone wali table ka state:

|Key|Keycode|Code|
|---|---|---|
|Space|32|Space|

---

### 📌 Quick Recap

- `setTimeout` = ek baar chalta hai | `setInterval` = baar-baar chalta hai (interval pe)
- Timer clear karne ke baad ID variable ko `null` karo — memory-safe production practice
- `if (!intervalId)` check laga ke duplicate timers rokna zaroori hai
- Random hex color = `hex[Math.floor(Math.random() * 16)]` loop 6 baar
- `keydown` event → `e.key`, `e.keyCode`, `e.code` teeno milte hain
- Spacebar ke case me `e.key` empty string deta hai → ternary se handle karo

---

> [!question] Next Series ka agla advance network video hai **"API request and V8 engine"** — uske notes bhi chahiye?