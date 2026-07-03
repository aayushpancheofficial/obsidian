# 🌐 JavaScript — Events

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=_ALUMTa8BAE)

#javascript #dom #events #revision

---

### 1️⃣ Events Kya Hote Hain?

JS normally ek ke baad ek line chalati hai (sequential). Lekin **Events** is rule ka exception hain.

> [!abstract] Seedha matlab Events **user ki activity** par trigger hote hain — page load par nahi. Click, keypress, drag, hover — ye sab events hain.

---

### 2️⃣ Event Handle Karne Ke 3 Tarike

**Tarika A — HTML mein seedha likho (Inline):**

```html
<img src="owl.jpg" onclick="alert('clicked')">
```

> [!danger] ❌ Anti-pattern — Use mat karo Production code mein bilkul avoid karo. App bade hone par maintain karna mushkil ho jaata hai. _(React ka `onClick` alag hai — use isse confuse mat karo)_

**Tarika B — DOM Property se:**

```javascript
document.getElementById('owl').onclick = function() {
    alert('owl clicked');
}
```

> [!warning] ⚠️ Limited Dikhne mein clean hai, lekin **event propagation** jaise advanced features nahi milte.

**Tarika C — `addEventListener` ⭐ (Best & Modern):**

```javascript
document.getElementById('owl').addEventListener('click', function(e) {
    alert('owl clicked');
}, false); // ← 3rd param: false = bubbling (default)
```

> [!tip] Kyun best hai? Click, keyboard, drag-and-drop — sab kuch handle karta hai. Propagation control milta hai (3rd parameter se). Ek element par **multiple listeners** bhi laga sakte ho.

---

### 3️⃣ Event Object `e` — Andar Kya Hota Hai?

Jab bhi event hota hai → callback function ko ek **Event Object** milta hai.

|Property|Kya batata hai|
|---|---|
|`e.type`|Event ka type: `"click"`, `"keydown"`, `"mouseover"`|
|`e.timestamp`|Exactly kab hua (milliseconds mein)|
|`e.target`|**Kaun sa element** click hua|
|`e.target.id`|Us element ki ID|
|`e.target.tagName`|Us element ka tag (`"IMG"`, `"LI"`, `"BUTTON"`)|
|`e.clientX` / `e.clientY`|Mouse ki screen par X, Y position|
|`e.altKey` / `e.ctrlKey` / `e.shiftKey`|Click ke waqt ye keys dabbi thi? (true/false)|
|`e.keyCode`|Keyboard ka kaun sa button daba|

```javascript
element.addEventListener('click', function(e) {
    console.log(e.type);       // "click"
    console.log(e.target);     // <img id="owl">
    console.log(e.target.id);  // "owl"
    console.log(e.clientX);    // 342 (mouse position)
});
```

---

### 4️⃣ Event Propagation — Bubbling vs Capturing 🚨

**Nested elements** (jaise `ul > li > img`) mein agar sab par listeners lage hain → event **kis order** mein chalega?

```
<ul>          ← outer parent
  <li>        ← middle parent
    <img>     ← clicked element
```

#### 🫧 Bubbling → `false` (Default)

> Direction: **Neeche se Upar** (jaise paani ka bubble)

```
img click → img event → li event → ul event
```

#### 🎣 Capturing → `true`

> Direction: **Upar se Neeche**

```
img click → ul event → li event → img event
```

```javascript
// Bubbling (default - false)
ul.addEventListener('click', handler, false);

// Capturing (true)
ul.addEventListener('click', handler, true);
```

> [!tip] Real mein kya use hota hai? 99% cases mein **Bubbling (false)** hi use hota hai — default hai toh likhna bhi zaroori nahi.

---

### 5️⃣ Propagation Rokna — `e.stopPropagation()`

Inner element ka event upar parent tak **jaane se rokna** ho:

```javascript
document.getElementById('owl').addEventListener('click', function(e) {
    console.log("Sirf owl ka event chala");
    e.stopPropagation(); // ← ab ye event ul/li tak nahi jaayega
}, false);
```

---

### 6️⃣ Default Behavior Rokna — `e.preventDefault()`

Browser ka default action rokna ho (jaise link ka kholna, form ka reload):

```javascript
document.getElementById('google').addEventListener('click', function(e) {
    e.preventDefault(); // ← Google nahi khuega
    console.log("Link clicked but navigation stopped");
});
```

|Situation|Default Behavior|`preventDefault()` baad|
|---|---|---|
|`<a href>` click|Page navigate hota hai|Navigation rukti hai|
|`<form>` submit|Page reload + server request|Sirf JS handle karta hai|
|Right click|Context menu khulta hai|Menu nahi aata|

---

### 7️⃣ Practical Mini-Project — Click Se Image Hatao 🔥

**Goal:** Image click karo → wo list se gayab ho jaaye. Khaali jagah ya `ul` click karo → kuch na ho.

```javascript
document.querySelector('#images').addEventListener('click', function(e) {

    // Sirf tab chale jab IMG click hua ho
    if (e.target.tagName === 'IMG') {
        console.log(`Removing: ${e.target.id}`);

        let li = e.target.parentNode; // img ka parent = li
        li.remove();                  // ✅ Modern way

        // Old way (agar remove() nahi chalti):
        // li.parentNode.removeChild(li);
    }

}, false);
```

**Logic:**

```
ul par click → e.target check karo
→ IMG hai?    → e.target.parentNode (li pakdo) → li.remove()
→ IMG nahi?   → kuch mat karo (ignore)
```

> [!tip] `e.target.tagName` kyun? Agar `ul` par directly click karo → `e.target.tagName` = `"UL"` → condition fail → kuch nahi hoga. Sirf `IMG` par click karo → condition pass → image hategi. Ye technique **Event Delegation** kehlaati hai — parent par ek listener, saare children handle.

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet **3 Tarike:**
> 
> - Inline HTML → ❌ anti-pattern
> - `.onclick` property → ⚠️ limited
> - `addEventListener` → ✅ **always use this**
> 
> **Event Object `e`:**
> 
> - `e.target` → kaun sa element
> - `e.target.tagName` → kaun sa tag
> - `e.clientX/Y` → mouse position
> 
> **Propagation:**
> 
> - `false` → **Bubbling** (neeche se upar) ← default
> - `true` → **Capturing** (upar se neeche)
> - `e.stopPropagation()` → propagation rok do
> 
> **Prevention:**
> 
> - `e.preventDefault()` → default browser action rok do
> 
> **Event Delegation:**
> 
> - Parent par ek listener → `e.target.tagName` se children handle karo

---

#### 🔗 Related

- [[JS_DOM_Projects|4 Beginner Projects — addEventListener intro]]
- [[JS_DOM_Selectors|DOM Selectors]]
- [[JS_Control_Flow|Control Flow — if/else]]