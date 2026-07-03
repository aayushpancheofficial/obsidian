# 🟨 JavaScript Functions — Objects, Arrays & Rest Operator

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=t7ZHPhgdA4U)

#javascript #functions #arrays #objects #revision

---

### 1️⃣ Rest Operator `...`

Jab pata nahi kitne arguments aayenge (jaise shopping cart mein prices add hoti rehti hain) — tab **Rest Operator** use karo.

- **Syntax:** `...` (teen dots)
- **Kaam:** Saare loose arguments ko ek **Array** mein bundle karke function ko deta hai

```javascript
function calculateCartPrice(...num1) {
    return num1;
}

calculateCartPrice(200, 400, 500, 2000);
// Output: [200, 400, 500, 2000] ← Array milta hai
```

#### 💡 Interview Special — Rest + Normal Parameters Saath

Agar `...` se pehle normal variables likhe ho:

```javascript
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

calculateCartPrice(200, 400, 500, 2000);
// Output: [500, 2000]
```

> [!tip] Kyun? `200` → `val1` mein gaya `400` → `val2` mein gaya **Baaki sab (rest)** → `num1` array mein chale gaye

---

### 2️⃣ Function mein Object Pass Karna

Object ko function ka parameter bana ke uski properties access kar sakte ho.

**Tarika 1 — Pehle object banao, phir pass karo:**

```javascript
const user = {
    username: "hitesh",
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user); // Username is hitesh and price is 199
```

**Tarika 2 — Seedha object pass karo (variable banane ki zarurat nahi):**

```javascript
handleObject({
    username: "sam",
    price: 399
}); // Username is sam and price is 399
```

> [!warning] Type Safety Check Agar key ka naam galat likha (jaise `price` ki jagah `prices`) → value `undefined` aayegi. Real projects mein `if-else` ya **TypeScript** se type checking karte hain.

---

### 3️⃣ Function mein Array Pass Karna

Object ki tarah poora **Array** bhi function mein pass ho sakta hai.

```javascript
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1]; // index 1 = second value
}

// Tarika 1: Variable ke zariye
returnSecondValue(myNewArray);       // Output: 400

// Tarika 2: Seedha array pass karo
returnSecondValue([200, 1000, 500]); // Output: 1000
```

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **Rest Operator `...`** → multiple arguments ko ek **Array** mein bundle karta hai
> - **Normal + Rest:** `(val1, val2, ...rest)` → pehle wale named params mein jaate hain, baaki `rest` mein
> - **Object in Function** → variable se ya seedha `{}` pass kar sakte ho
> - **Array in Function** → variable se ya seedha `[]` pass kar sakte ho
> - **Wrong key name** → `undefined` aata hai, crash nahi hota — dhyan rakho!

---

#### 🔗 Related

- [[JS_Functions_Parameters|Functions & Parameters]]
- [[JS_Objects_Part1|JavaScript Objects Part 1]]
- [[JS_Objects_Part2|JavaScript Objects Part 2]]