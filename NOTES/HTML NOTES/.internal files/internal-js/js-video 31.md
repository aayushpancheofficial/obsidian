# 🌐 JavaScript — DOM Introduction

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=DcjNkHtDj8A)

#javascript #dom #revision

---

### 1️⃣ DOM Kya Hota Hai?

**Full form → Document Object Model**

> [!abstract] Ek line mein Browser jab HTML file padhta hai → usse ek **JavaScript Object** mein convert kar deta hai → is object ke poore tree structure ko **DOM** kehte hain.

**DOM Manipulation** = JS ki madad se us object ke andar jaana aur:

|Kaam|Example|
|---|---|
|**Change**|Heading ka text badlo, color badlo|
|**Delete**|Koi button ya card hatao|
|**Add**|Naya element page par lagao|

Yahi cheez React, Angular sab internally karti hain — seedha DOM manipulate!

---

### 2️⃣ DOM Tree Structure 🌳

Browser HTML ko ek **family tree** (hierarchy) ki tarah treat karta hai:

```
🌐 Window Object
   └── 📄 document
         └── <html>          ← Root Node (sabka baap)
               │
               ├── <head>    ← Invisible setup
               │     ├── <title> "My Page" </title>
               │     └── <meta charset="UTF-8">
               │
               └── <body>    ← Jo screen par dikhta hai
                     ├── <h1 id="heading"> Hello </h1>
                     ├── <p class="para"> World </p>
                     └── <div>
                           └── <a href="#">Link</a>
```

> [!tip] Node — DOM ki sabse basic unit DOM mein **har cheez ek Node hai:**
> 
> |Node Type|Example|
> |---|---|
> |**Element Node**|`<h1>`, `<div>`, `<p>` — HTML tags|
> |**Attribute Node**|`id="heading"`, `class="box"`|
> |**Text Node**|`<h1>` ke andar ka text "Hello"|

---

### 3️⃣ Window vs Document — Fark Samjho

||`window`|`document`|
|---|---|---|
|**Kya hai**|Browser ka sabse bada global object|HTML page ka entry point|
|**Scope**|JS ki saari global cheezein yahan hain|Sirf HTML structure yahan hai|
|**Example properties**|`window.alert()`, `window.location`|`document.title`, `document.body`|

> [!question] Interview Tip `this` browser mein globally → `window` object hota hai `document` → `window` ka hi ek property hai → `window.document`

---

### 4️⃣ Console Se DOM Explore Karo 💻

Kisi bhi website par → Right Click → **Inspect** → **Console** tab:

```javascript
console.log(window);      // Browser ka poora environment
console.log(document);    // HTML tree structure dikhata hai
console.dir(document);    // ⭐ Document as PURE JS Object — hidden properties bhi dikh jaati hain
                          //    (baseURI, links, location, title, body...)
```

> [!tip] `console.dir()` kyun best hai? `console.log(document)` → HTML tree dikhata hai (tags mein) `console.dir(document)` → JS object dikhata hai (properties mein) — **zyada useful!**

---

### 5️⃣ HTMLCollection — Array Nahi Hai! ⚠️

```javascript
document.links      // → HTMLCollection deta hai
document.images     // → HTMLCollection deta hai
document.forms      // → HTMLCollection deta hai
```

> [!danger] Common Mistake **HTMLCollection ≠ Array**
> 
> ```javascript
> document.links.forEach(...)  // ❌ TypeError — forEach nahi milega
> document.links.map(...)      // ❌ map bhi nahi milega
> ```
> 
> **Fix — pehle Array mein convert karo:**
> 
> ```javascript
> const linksArray = Array.from(document.links);
> linksArray.forEach((link) => console.log(link)); // ✅ ab chalega
> ```

---

### 6️⃣ Live DOM Manipulation — Practical 🔥

Wikipedia ke live page par console kholke ye try karo:

**Step 1 — Element pakdo (ID se):**

```javascript
const heading = document.getElementById('firstHeading');
console.log(heading); // <h1 id="firstHeading">Wikipedia</h1>
```

**Step 2 — JS se live badlo:**

```javascript
heading.innerHTML = "chai aur code";
```

**Step 3 — Style bhi badal sakte ho:**

```javascript
heading.style.color = "green";
heading.style.fontSize = "3rem";
```

> [!success] Result Page par heading **turant** badal jaati hai — koi reload nahi, koi server request nahi! Yehi DOM Manipulation ki power hai. 🚀

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **DOM** = Browser ka HTML → JS Object conversion
> - **Hierarchy:** `Window → document → html → head/body → elements`
> - **Node** = DOM ki basic unit → Element / Attribute / Text
> - **`window`** = sabse bada object | **`document`** = HTML ka entry point
> - **`console.dir(document)`** = document as JS object (best for exploring)
> - **HTMLCollection** ≠ Array → `Array.from()` se convert karo pehle
> - **`getElementById`** + **`.innerHTML`** = sabse basic manipulation

---

#### 🔗 Related

- [[JS_DOM_Selectors|DOM Selectors — NodeList & HTMLCollection]]
- [[JS_Objects_Part1|JavaScript Objects Part 1]]
- [[JS_This_ArrowFunctions|`this` & Arrow Functions — Window Object]]