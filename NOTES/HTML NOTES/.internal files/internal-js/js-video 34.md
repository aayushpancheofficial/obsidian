# 🌐 JavaScript — DOM Mein Elements Edit & Remove Karna

> [!info] Source [Chai aur Code by Hitesh Choudhary](https://www.youtube.com/watch?v=VQlY-X_eeTE)

#javascript #dom #revision

---

### 1️⃣ Elements Add Karna — Simple vs Optimized

**Simple Approach (`innerHTML`):**

```javascript
function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;                          // ← innerHTML
    document.querySelector('.language').appendChild(li);
}
addLanguage("Python");
```

> [!danger] `innerHTML` — Performance Problem `innerHTML` use karne par JS engine **poora DOM tree dobara parse aur traverse** karta hai. Chhote projects mein chalega — **bade projects mein slow ho jaayega!**

**Optimized Approach (`createTextNode`) ⭐:**

```javascript
function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));     // ← seedha text node
    document.querySelector('.language').appendChild(li);
}
addOptiLanguage("GoLang");
```

> [!tip] Kyun Better? `createTextNode` → seedha naya text node banata hai → koi extra tree traversal nahi → **fast!**

---

### 2️⃣ Elements Edit Karna — 3 Tarike

**Tarika 1 — `replaceWith()` ⭐ (Best & Modern):**

Purane element ke reference se seedha naya element uski jagah rakh do.

```javascript
const secondLang = document.querySelector("li:nth-child(2)");

const newLi = document.createElement('li');
newLi.textContent = "Mojo";

secondLang.replaceWith(newLi); // ← purana element gaya, naya aa gaya
```

**Tarika 2 — `innerHTML` se seedha badlo (Shortcut):**

```javascript
const secondLang = document.querySelector("li:nth-child(2)");
secondLang.innerHTML = "Mojo"; // ← sirf andar ka content badla
```

**Tarika 3 — `outerHTML` (Poora Tag Bhi Badal Do):**

```javascript
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = '<li>TypeScript</li>'; // ← tag ke saath poora replace
```

|Method|Kya badalta hai|
|---|---|
|`innerHTML`|Sirf **andar ka content**|
|`outerHTML`|Content + **element ka khud ka tag** bhi|
|`replaceWith()`|Pura element → naye element se replace ⭐|

---

### 3️⃣ Elements Remove Karna — `.remove()`

Seedha simple — element pakdo aur `.remove()` chalao:

```javascript
const lastLang = document.querySelector('li:last-child');
lastLang.remove(); // ← page se hamesha ke liye delete
```

---

### 4️⃣ Useful CSS Selectors — Sahi Element Pakdna

DOM mein sahi element pakdne ke liye ye CSS selectors kaam aate hain:

```javascript
document.querySelector("li:first-child")    // pehla li
document.querySelector("li:last-child")     // aakhri li
document.querySelector("li:nth-child(2)")   // doosra li (1 se count hota hai)
```

---

### 5️⃣ Complete Example — Ek Script Mein Sab 📄

```html
<body style="background-color: #212121; color: #fff;">
    <ul class="language">
        <li>JavaScript</li>
    </ul>
    <script>
        // 1. Add (Optimized)
        function addOptiLanguage(langName) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(langName));
            document.querySelector('.language').appendChild(li);
        }
        addOptiLanguage("Python");
        addOptiLanguage("GoLang");
        // List: JS, Python, GoLang

        // 2. Edit — replaceWith (2nd item Python → Mojo)
        const secondLang = document.querySelector("li:nth-child(2)");
        const newLi = document.createElement('li');
        newLi.textContent = "Mojo";
        secondLang.replaceWith(newLi);
        // List: JS, Mojo, GoLang

        // 3. Edit — outerHTML (1st item JS → TypeScript)
        document.querySelector("li:first-child").outerHTML = '<li>TypeScript</li>';
        // List: TypeScript, Mojo, GoLang

        // 4. Remove — last item GoLang hatao
        document.querySelector('li:last-child').remove();
        // List: TypeScript, Mojo  ← Final Output
    </script>
</body>
```

**Browser mein final list:**

```
• TypeScript
• Mojo
```

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet **Add:**
> 
> - `innerHTML = text` → simple lekin slow (tree re-parse)
> - `createTextNode` + `appendChild` → **optimized** ⭐
> 
> **Edit:**
> 
> - `innerHTML` → sirf andar ka content badlo
> - `outerHTML` → tag ke saath poora badlo
> - `replaceWith(newEl)` → seedha naya element rakh do **⭐ best**
> 
> **Remove:**
> 
> - `element.remove()` → bas itna kafi hai!
> 
> **CSS Selectors trick:**
> 
> - `:first-child` → pehla | `:last-child` → aakhri | `:nth-child(n)` → nth

---

#### 🔗 Related

- [[JS_DOM_Create_Elements|DOM — Naye Elements Banana]]
- [[JS_DOM_Selectors|DOM Selectors — NodeList & HTMLCollection]]