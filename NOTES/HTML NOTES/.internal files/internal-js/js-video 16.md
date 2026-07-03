# 🟨 JavaScript Objects — Part 1

> [!info] Source [Chai aur Code by Hitesh Choudhary](https://www.youtube.com/watch?v=vVYOHmqQDCU)

#javascript #objects #revision

---

### 1️⃣ Object Declaration & Singleton Concept

Objects declare karne ke **2 tarike**:

- **Object Literal `{}`** → Singleton **nahi** banta
- **`Object.create()`** (Constructor method) → Singleton banta hai (apna unique instance)

```javascript
// 1. Object Literal (No Singleton)
const JsUser = {
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    isLoggedIn: false
};

// 2. Constructor Method (Singleton)
// const SingletonUser = Object.create(null);
```

---

### 2️⃣ Accessing Keys: Dot `.` vs Square Brackets `[]`

Object keys background mein **Strings** ki tarah treat hoti hain.

|Notation|Kab use karein|
|---|---|
|`.key`|Common case, simple keys|
|`["key"]`|Key mein **space** ho ya key ko string/symbol ki tarah access karna ho|

```javascript
const User = {
    name: "Aayush",
    "full name": "Aayush Panche" // space wali key
};

console.log(User.name);          // Aayush
// console.log(User.full name);  // ❌ ERROR

console.log(User["full name"]);  // ✅ Aayush Panche
```

---

### 3️⃣ Interview Special: Symbol as Object Key

> [!question] Common interview question "Ek Symbol lo, use object ki key banao aur print karke dikhao."

- ❌ **Mistake:** `mySym: "mykey1"` likhna → yeh normal **String key** ban jaata hai
- ✅ **Correct:** Symbol ko `[mySym]` (square brackets) ke andar wrap karo

```javascript
const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    [mySym]: "myKey1Value"   // ✅ correct syntax
};

console.log(JsUser[mySym]);          // myKey1Value
console.log(typeof JsUser[mySym]);   // key type background mein Symbol hi rehta hai
```

---

### 4️⃣ Modifying Values & `Object.freeze()`

- **Value change:** normal `=` operator se overwrite ho jaati hai
- **Lock object:** `Object.freeze(obj)` → values ab change nahi hongi, **no error**, silently fail hoga

```javascript
const JsUser = { email: "hitesh@google.com" };

JsUser.email = "hitesh@chatgpt.com";   // ✅ changed
console.log(JsUser.email);             // hitesh@chatgpt.com

Object.freeze(JsUser);                 // 🔒 object locked

JsUser.email = "hitesh@microsoft.com"; // ❌ won't apply
console.log(JsUser.email);             // still hitesh@chatgpt.com
```

---

### 5️⃣ Adding Functions/Methods & `this` Keyword

Functions JS mein **first-class citizens** hain — variables/keys jaise treat hote hain.

- `JsUser.greeting` → sirf function ka **reference** milta hai
- `JsUser.greeting()` → function **execute** hota hai
- `this` → same object ki properties access karne ke liye use hota hai

```javascript
const JsUser = {
    name: "Hitesh",
    age: 18
};

JsUser.greeting = function () {
    console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`); // 'this' → current object
};

console.log(JsUser.greeting);   // [Function (anonymous)] → reference
JsUser.greeting();              // Hello JS User
JsUser.greetingTwo();           // Hello JS User, Hitesh
```

---

### ⚠️ Common Mistakes to Avoid

> [!warning]
> 
> - **Bracket notation without quotes:** `obj["email"]` ✅ vs `obj[email]` ❌ (jab tak `email` koi defined variable/Symbol na ho)
> - **Frozen object editing:** `Object.freeze()` ke baad change **silently fail** hota hai — crash nahi karta, debugging mein dhyaan rakho

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **Declaration:** `{}` → No singleton | `Object.create()` → Singleton
> - **Access:** `obj.key` ya `obj["key"]` (space wali key ke liye bracket zaroori)
> - **Symbol key:** Define `{[mySym]: "value"}` → Access `obj[mySym]`
> - **Immutability:** `Object.freeze(obj)` → poora object lock
> - **Context:** Object ke andar property access karne ke liye `this` zaroori

---

