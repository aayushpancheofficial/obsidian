# 🌐 JavaScript — DOM Mein Naye Elements Banana

> [!info] Source [Chai aur Code by Hitesh Choudhary](https://www.youtube.com/watch?v=xAvTgCsCHLs)

#javascript #dom #revision

---

### 1️⃣ DOM Tree Traversal — Rishtedaar Element Pakdna

Ek baar element mil gaya → uske aas-paas ke elements pakdne ke shortcut:

**Parent → Child:**

|Property|Kya milta hai|
|---|---|
|`parent.children`|Saare direct child elements → **HTMLCollection**|
|`parent.firstElementChild`|Pehla child element|
|`parent.lastElementChild`|Aakhri child element|

**Child → Parent & Sibling:**

|Property|Kya milta hai|
|---|---|
|`child.parentElement`|Seedha upar ka parent ⭐|
|`child.nextElementSibling`|Agle bhai ka element|

```javascript
const ul  = document.querySelector('ul');

ul.children[0]           // pehla li
ul.firstElementChild     // pehla li (same)
ul.lastElementChild      // aakhri li

ul.children[0].parentElement       // wapas ul par aa gaye
ul.children[0].nextElementSibling  // doosra li
```

> [!tip] `parentElement` kyun better hai? `querySelector` se baar baar tree traverse karna slow hota hai. `child.parentElement` seedha parent pakadta hai — **optimized!**

---

### 2️⃣ `childNodes` Ka Rahasya — Interview Trap 🚨

```javascript
const parent = document.querySelector('.parent');
console.log(parent.childNodes); // NodeList(9) ← 4 elements hone par bhi!
```

> [!question] 4 elements hain toh 9 nodes kyun aaye?

**Kyunki `childNodes` mein sirf HTML elements nahi, sab kuch count hota hai:**

|Node Type|Kab banta hai|
|---|---|
|**Element Node**|Actual HTML tag (`<div>`, `<li>`)|
|**Text Node**|Code mein **Enter/line break** dabane par!|
|**Comment Node**|HTML comment `` likha ho toh|

```html
<ul>          ← yahan Enter dabaya → text node bana
  <li>One</li>  ← element node
  <li>Two</li>  ← element node
</ul>
```

> [!tip] Safe option Sirf HTML elements chahiye → **`children`** use karo (text nodes skip ho jaate hain) Saare nodes chahiye (text + comment bhi) → **`childNodes`** use karo

---

### 3️⃣ Naya Element Banana — Step by Step 🔥

JS mein naya element banana = 4 kaam karo:

**Step 1 — Memory mein element banao:**

```javascript
const div = document.createElement('div');
```

**Step 2 — Class, ID, Attributes set karo:**

```javascript
div.className = "main";                          // class lagao
div.id        = Math.round(Math.random() * 10); // random ID
div.setAttribute("title", "generated title");   // custom attribute
```

**Step 3 — Style lagao:**

```javascript
div.style.backgroundColor = "green";  // camelCase!
div.style.padding          = "12px";
```

**Step 4 — Text add karo (2 tarike):**

```javascript
// Tarika A — Simple (innerText)
div.innerText = "Chai aur Code"; // pehle purani value lata hai, phir overwrite karta hai

// Tarika B — Optimized ⭐ (createTextNode)
const textNode = document.createTextNode("Chai aur Code");
div.appendChild(textNode); // seedha text node andar daal diya
```

> [!tip] `createTextNode` kyun better hai? `innerText` pehle DOM se purani value fetch karta hai → phir overwrite karta hai (extra trip) `createTextNode` seedha naya node banata hai aur attach karta hai → **zyada fast!**

---

### 4️⃣ Element Ko Page Par Dikhao — `appendChild`

Ab tak ka banaya element sirf **JS memory** mein tha — screen par nahi tha!

```javascript
document.body.appendChild(div); // body ke andar add kiya → ab screen par dikhega!
```

> [!abstract] Pura Flow — Ek Jagah `createElement` → element bana (memory mein) Properties set karo → class, id, style, text `appendChild` → DOM mein attach karo → screen par aaya ✅

---

### 5️⃣ Complete Example — Ek Script Mein Sab 📄

```html
<body style="background-color: #212121; color: #fff;">
<script>
    // 1. Element banao
    const div = document.createElement('div');

    // 2. Properties set karo
    div.className = "main";
    div.id        = "my-box";
    div.setAttribute("title", "generated title");

    // 3. Style lagao
    div.style.backgroundColor = "green";
    div.style.padding          = "12px";
    div.style.borderRadius     = "8px";

    // 4. Text add karo (optimized way)
    const textNode = document.createTextNode("Chai aur Code — Live Element!");
    div.appendChild(textNode);

    // 5. Page par attach karo
    document.body.appendChild(div);
</script>
</body>
```

**Browser Output:** Dark background par neeche ek **green box** appear hoga jisme likha hoga: `"Chai aur Code — Live Element!"`

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet **Tree Traversal:**
> 
> - `parent.children` → child elements (HTMLCollection)
> - `child.parentElement` → parent par jao (optimized)
> - `child.nextElementSibling` → agla bhai
> 
> **`childNodes` trap:**
> 
> - Line breaks = text nodes → isliye 4 elements par bhi 9 nodes aate hain
> - Sirf elements chahiye → `children` use karo
> 
> **Naya element banane ke steps:**
> 
> 1. `createElement('tag')`
> 2. `.className`, `.id`, `setAttribute`
> 3. `.style.property = value`
> 4. `createTextNode` + `appendChild` (text ke liye)
> 5. `document.body.appendChild(div)` → screen par aaya!

---

#### 🔗 Related

- [[JS_DOM_Selectors|DOM Selectors — NodeList & HTMLCollection]]
- [[JS_DOM_Introduction|DOM Introduction]]
- [[JS_DOM_Edit_Remove|DOM — Elements Edit & Remove karna]]