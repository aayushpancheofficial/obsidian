# 🟨 JavaScript — Filter, Map & Reduce

> [!info] Source [Chai aur Code by Hitesh Choudhary](http://www.youtube.com/watch?v=9MfwYoWKKVE)

#javascript #arrays #filter #map #reduce #revision

---

### 1️⃣ `forEach` Ki Limitation — Return Nahi Karta

> [!warning] Yaad rakho `forEach` kabhi bhi kuch **return nahi karta** — andar `return` likho ya na likho, result hamesha `undefined` hoga.

```javascript
const coding = ["js", "ruby", "java"];
const values = coding.forEach((item) => { return item; });
console.log(values); // undefined ← kuch nahi mila
```

Jab filtered ya transformed **naya array chahiye** → `filter()` ya `map()` use karo.

---

### 2️⃣ `filter()` — Condition Pass Karne Wale Elements Ka Naya Array

Har element par condition lagao — jo **true** ho wahi naye array mein aaye.

```javascript
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Implicit return (bina curly braces)
const newNums1 = myNums.filter((num) => num > 4);

// Explicit return (curly braces ke saath — return ZAROORI)
const newNums2 = myNums.filter((num) => {
    return num > 4; // ← return bhool gaye → [] khali array milega
});

console.log(newNums1); // [ 5, 6, 7, 8, 9, 10 ]
```

> [!tip] Golden Rule — `{}` aur `return`
> 
> - **Bina `{}`** → implicit return, `return` mat likho
> - **`{}` ke saath** → `return` likhna **zaroori** hai, warna `[]` milega

**Real-world — Array of Objects Filter karo 🔥**

```javascript
const books = [
    { title: 'Book One',   genre: 'Fiction',     publish: 1981, edition: 2004 },
    { title: 'Book Two',   genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History',     publish: 1999, edition: 2007 },
    { title: 'Book Four',  genre: 'Non-Fiction', publish: 1889, edition: 2010 },
    { title: 'Book Five',  genre: 'Science',     publish: 2009, edition: 2014 },
];

// Case A: Sirf 'History' genre
const historyBooks = books.filter((bk) => bk.genre === 'History');

// Case B: 1995 ke baad publish + 'History' genre — dono conditions
const filtered = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
});
// Output: [ { title: 'Book Three', genre: 'History', publish: 1999, ... } ]
```

---

### 3️⃣ `map()` — Har Element Ko Transform Karo

`filter` elements hatata hai — `map` **saare elements ko transform** karta hai aur naya array deta hai.

```javascript
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((num) => { return num + 10; });
console.log(newNums); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
```

---

### 4️⃣ Method Chaining — Ek Ke Baad Ek 🚀

Pehle method ka output doosre ka input ban jaata hai — chain karte jao.

```javascript
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = myNumbers
    .map((num) => num * 10)      // Step 1: [10, 20, 30...100]
    .map((num) => num + 1)       // Step 2: [11, 21, 31...101]
    .filter((num) => num >= 40); // Step 3: sirf 40+ wale

console.log(result); // [ 41, 51, 61, 71, 81, 91, 101 ]
```

---

### 5️⃣ `reduce()` — Saare Elements Mila Ke Ek Value Banao

Pura array "reduce" hokar **ek single final value** banta hai (jaise shopping cart ka total bill).

**3 main parts:**

|Part|Kya hai|
|---|---|
|`acc` (Accumulator)|Khali dibba — har iteration ka result yahan jama hota rehta hai|
|`curr` (Current Value)|Array ka abhi wala element|
|`initialValue`|`acc` ki starting value (aksar `0`)|

```javascript
const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function(acc, currval) {
    console.log(`acc: ${acc}, currval: ${currval}`);
    return acc + currval;
}, 0); // ← 0 = initialValue

// acc: 0, currval: 1
// acc: 1, currval: 2
// acc: 3, currval: 3
console.log(`Total: ${myTotal}`); // Total: 6
```

**Real-world — Shopping Cart Total 🔥**

```javascript
const shoppingCart = [
    { itemName: "js course",          price: 2999 },
    { itemName: "py course",          price: 999  },
    { itemName: "mobile dev course",  price: 5999 },
    { itemName: "data science course",price: 12999},
];

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`Total: ₹${total}`); // Total: ₹22996
```

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **`forEach`** → return nahi karta — sirf loop ke liye
> - **`filter`** → condition true wale elements → naya array
> - **`map`** → har element transform → naya array (same size)
> - **`reduce`** → pura array → ek single value (sum, total, etc.)
> - **`{}`** ke saath `return` likhna zaroori — warna `[]` ya `undefined`
> - **Chaining:** `.map().map().filter()` — ek ka output doosre ka input
> - **`reduce` remember:** `(acc, curr) => acc + curr, initialValue`

---

#### 🔗 Related

- [[JS_HighOrder_Array_Loops|Higher Order Array Loops — forEach, for...of, for...in]]
- [[JS_ForLoop_Break_Continue|For Loop, Break & Continue]]
- [[JS_Objects_Part2|JS Objects Part 2]]