# 🌐 JavaScript — DOM Selectors, NodeList & HTMLCollection

> [!info] Source [Chai aur Code by Hitesh Choudhary](https://www.youtube.com/watch?v=Ab6K57WjWTE)

#javascript #dom #selectors #revision

---

### 1️⃣ DOM Selectors — Element Kaise Pakdein?

Teen main selectors hain — teeno ka use alag-alag jagah hota hai:

|Selector|Kya karta hai|Return karta hai|
|---|---|---|
|`getElementById('id')`|Sirf ID se ek element pakdta hai|Single Element|
|`querySelector('css')`|CSS selector se **pehla** match dhundta hai|Single Element|
|`querySelectorAll('css')`|CSS selector se **saare** matches dhundta hai|**NodeList**|

```javascript
// getElementById
const title = document.getElementById('title');

// querySelector — CSS selectors use karo
document.querySelector('h1')               // tag se
document.querySelector('.heading')         // class se (dot lagao)
document.querySelector('#title')           // id se (# lagao)
document.querySelector('input[type="password"]') // attribute se (advance!)

// querySelectorAll — saare milenge
const allLis = document.querySelectorAll('li'); // NodeList → forEach chalega ✅
```

> [!tip] `querySelector` ki power CSS ki tarah likhte hain — ek hi method se tag, class, id, attribute sab select ho jaate hain!

---

### 2️⃣ Content Nikalna — `innerText` vs `textContent` vs `innerHTML`

Ek element ke andar se content padhne ke 3 tarike — teeno mein subtle fark hai:

|Property|Kya deta hai|Hidden text (CSS `display:none`)|
|---|---|---|
|`innerText`|Sirf **screen par dikhne wala** text|❌ nahi deta|
|`textContent`|**Saara text** — hidden bhi|✅ deta hai|
|`innerHTML`|Text + **HTML tags bhi** (jaise `<span>`, `<b>`)|✅ tags ke saath|

```javascript
const box = document.querySelector('.box');

console.log(box.innerText);    // sirf visible text
console.log(box.textContent);  // saara text — hidden bhi
console.log(box.innerHTML);    // "<span>Hello</span> World" — tags ke saath

// Content set bhi kar sakte ho
box.innerText   = "New text";
box.innerHTML   = "<b>Bold text</b>"; // HTML render hoga
```

---

### 3️⃣ Attributes — Padhna aur Badalna

```javascript
const title = document.getElementById('title');

// Padhna
title.getAttribute('class')       // "heading" → current class
title.getAttribute('id')          // "title"

// Badalna / Naya add karna
title.setAttribute('class', 'heading test'); // ← dono likhna zaroori!
```

> [!danger] `setAttribute` Overwrite Karta Hai! `setAttribute('class', 'test')` likhne se purani class **poori hat jaayegi**! Agar purani class rakhni hai toh dono saath likhein: `setAttribute('class', 'purani-class nai-class')`

**`className` shortcut (JS mein class likhne ka tarika):**

```javascript
title.className = "heading dark-theme"; // class attribute directly set
```

---

### 4️⃣ NodeList vs HTMLCollection — Sabse Bada Interview Question 🚨

||**NodeList**|**HTMLCollection**|
|---|---|---|
|**Kaise milta hai**|`querySelectorAll()` se|`getElementsByClassName()` / `getElementsByTagName()` se|
|**`forEach` support**|✅ Direct chalega|❌ Error aayega|
|**`map`, `filter`**|❌ Nahi hoga|❌ Nahi hoga|
|**Index se access**|✅ `list[0]`|✅ `list[0]`|
|**Array mein convert**|`Array.from(nodeList)`|`Array.from(collection)`|

```javascript
// NodeList — querySelectorAll se
const items = document.querySelectorAll('.list-item'); // NodeList
items.forEach((item) => console.log(item)); // ✅ seedha chalega

// HTMLCollection — getElementsByClassName se
const boxes = document.getElementsByClassName('box'); // HTMLCollection
boxes.forEach(...) // ❌ TypeError!

// Fix — Array.from() se convert karo
const boxArray = Array.from(boxes);
boxArray.forEach((box) => {
    box.style.color = 'orange'; // ✅ ab chalega
});
```

> [!tip] Easy Rule — Yaad Karo **`querySelectorAll`** → **NodeList** → `forEach` directly ✅ **`getElements___`** → **HTMLCollection** → pehle `Array.from()` ❌→✅

---

### 5️⃣ Style — JS Se CSS Badalna

```javascript
const heading = document.querySelector('h1');

heading.style.color           = 'red';
heading.style.backgroundColor = 'green';  // camelCase! (background-color nahi)
heading.style.padding         = '10px';
heading.style.fontSize        = '2rem';
```

> [!warning] camelCase Zaroori! CSS mein `background-color` → JS mein `backgroundColor` CSS mein `font-size` → JS mein `fontSize` Hyphen (-) hata ke agle word ko capital karo

---

### 6️⃣ Live Practical — Wikipedia Saari Headings Badlo 🔥

Wikipedia kholke Console mein ye paste karo:

```javascript
// Saari h2 headings ek saath pakdi
const allH2 = document.querySelectorAll('.mw-headline');

// NodeList hai toh forEach seedha chalega ✅
allH2.forEach((h) => {
    h.style.color           = 'red';
    h.style.backgroundColor = 'green';
    h.style.padding         = '10px';
    h.innerText             = "Chai aur Code";
});
```

> [!success] Result Wikipedia ke poore page ki saari headings ek baar mein **"Chai aur Code"** ho jaayengi — laal text, hara background! 🚀

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet **Selectors:**
> 
> - `getElementById` → ek element (ID se)
> - `querySelector` → pehla match (CSS selector)
> - `querySelectorAll` → saare match → **NodeList**
> 
> **Content:**
> 
> - `innerText` → sirf visible text
> - `textContent` → saara text (hidden bhi)
> - `innerHTML` → text + HTML tags
> 
> **Attributes:**
> 
> - `getAttribute('class')` → padhna
> - `setAttribute('class', 'value')` → badalna (**overwrite** hoga!)
> 
> **NodeList vs HTMLCollection:**
> 
> - NodeList → `forEach` ✅ directly
> - HTMLCollection → `Array.from()` se convert karo pehle
> 
> **Style → camelCase:** `backgroundColor`, `fontSize`, `paddingTop`

---

#### 🔗 Related

- [[JS_DOM_Introduction|DOM Introduction]]
- [[JS_DOM_Create_Elements|DOM — Naye Elements Banana]]