
## title: Call and this in JavaScript tags: [javascript, call, this-keyword, execution-context, chai-aur-code] source: "http://www.youtube.com/watch?v=-owpuf4lbyU"

# Call and this in JavaScript

> [!info] Source Chai aur #javascript series — `call`, `apply`, `bind` aur `this` binding ke notes.

---

### 1️⃣ Core Methods Overview (`call`, `apply`, `bind`)

- **Purpose:** Ye structural routines manage karte hain ki **`this`** context different execution environments ke beech kaise pass aur preserve hota hai.
- **Historical Context:** Early versions of frameworks jaise **React (Version 1)** me, class methods ka lexical scope maintain karne ke liye explicitly `.bind()` ya `.call()` use karna mandatory tha. Modern syntactic sugar ne direct application kam kar diya hai, lekin ye foundational interview topics hain aur JS ke runtime layout samajhne ke liye essential hain.

---

### 2️⃣ Internal Problem: Execution Stacks aur Nested Functions

Har function call apna khud ka **Functional Execution Context** JS call stack ke upar initialize karta hai, jo ek unique implicit context reference (`this`) generate karta hai.

#### The Broken Reference Scenario

Ek function jo dusre function ke andar nested hai, us scenario ko consider karo:

- Jab ek child function parent function ke andar invoke hota hai, to inner child ka explicit context default me upar **Global Execution Context** pe fall back ho jaata hai (`window` web browsers me, ya empty object `{}` Node.js me).
- Jaise hi internal helper function ka execution khatam hota hai, uska execution context stack se pop off ho jaata hai, aur **uske local states poori tarah gayab ho jaate hain** — outer parent layout unhe capture kar paaye usse pehle hi.

---

### 3️⃣ Real-World Practical Bug (`.call` Use Kiye Bina)

Neeche ek scenario hai jahan ek absolute tracking bug hota hai kyunki function reference bina formal binding ke process hota hai:

```javascript
function SetUsername(username) {
    this.username = username; // Apne hi functional 'this' space ko target karta hai!
}

function CreateUser(username, email, password) {
    // Buggy execution attempt: Lagta hai ki call ho raha hai, lekin state store nahi hoti
    SetUsername(username);

    this.email = email;
    this.password = password;
}

const userOne = new CreateUser("chai", "chai@google.com", "123");
console.log(userOne);
// Output: { email: 'chai@google.com', password: '123' }
// WARNING: username COMPLETELY missing/undefined hai!
```

#### Ye Fail Kyun Hota Hai?

`SetUsername(username)` execute hota hai aur ek local state set karta hai, lekin turant stack se pop off ho jaata hai. Uske tracking references evaporate ho jaate hain kyunki kisi ne bhi use instruct nahi kiya tha ki value ko directly parent `CreateUser` context instance pe append kare.

---

### 4️⃣ The Fix: `.call()` se Explicit Binding

Is execution vacuum ko bypass karne ke liye, JS **`.call()`** provide karta hai. Yeh invoke phase ko intercept karta hai aur forcefully ek custom external entity ko primary context controller ki tarah substitute kar deta hai.

```javascript
function SetUsername(username) {
    this.username = username;
}

function CreateUser(username, email, password) {
    // FIX: 'this' (current outer object instance context) ko forcefully forward karo
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const userOne = new CreateUser("chai", "chai@google.com", "123");
console.log(userOne);
// Output: { username: 'chai', email: 'chai@google.com', password: '123' } (SUCCESS!)
```

#### `.call(this, ...args)` ki Mechanics

- **Argument 1 (`this`):** Ye explicitly first parameter ki tarah pass hota hai. Yeh ek wrapper instruction ki tarah kaam karta hai jo targeted function ko batata hai: _"Apna khud ka internal temporary context workspace use mat karo — iske badle meri execution instance block use karo."_
- **Subsequent Arguments:** Normal functional arguments designated context target ke turant baad, ek ke baad ek pass hote hain.

---

### 📌 Quick Recap

- `call`, `apply`, `bind` — teeno `this` context control karne ke liye use hote hain
- Har function call ka apna alag `this` hota hai — nested function ka `this` automatically parent se link nahi hota
- Nested function ke andar `this` default me global context (`window`/`{}`) pe point karta hai, na ki parent instance pe
- Bug: agar helper function ko normal call karo (`SetUsername(username)`), to uska state parent object me store nahi hota
- Fix: `SetUsername.call(this, username)` — `this` ko explicitly pass karke helper function ko force karo ki woh parent ke context pe kaam kare
- `.call()` ka syntax: pehla argument `this` context, uske baad normal function arguments

---

> [!question] Next Series ka agla topic (jaise **apply vs bind ka detailed comparison**, ya **Closures**) ke notes bhi chahiye?