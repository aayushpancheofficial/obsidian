

## title: Object Oriented in JavaScript tags: [javascript, oop, this-keyword, constructor-function, prototype, chai-aur-code] source: "http://www.youtube.com/watch?v=pN-Qmv4zBcI"

# Object Oriented in JavaScript

> [!info] Source Chai aur #javascript series — OOP concepts, `this` keyword, aur Constructor Functions ke notes.

---

### 1️⃣ Kya JavaScript me Actually Classes Hoti Hain?

- **Reality:** Technically aur fundamentally, **JavaScript me true classes nahi hoti** jaisi traditional OOP languages (Java ya C++) me hoti hain.
- **Syntactic Sugar:** **ES6 (ECMAScript 2015)** me aaya `class` keyword mainly _syntactic sugar_ hai JS ke existing core design ke upar. Isse add kiya gaya taaki class-based languages se aane wale developers ko familiar syntax mil sake.
- **Core Nature:** Under the hood, JavaScript hamesha ek **prototypal-based language** hi rehti hai.

---

### 2️⃣ JS me OOP Kya Hai?

- **Programming Paradigm:** OOP koi tool nahi hai, balki ek _programming style/paradigm_ hai jo define karta hai ki code kaise structure aur organize hoga.
- **The Object:** Object JS ka fundamental building block hai. Yeh simply **properties** (variables/constants) aur **methods** (functions) ka ek **collection** hai.

#### OOP ke 4 Pillars (Quick Overview)

1. **Abstraction:** Complex implementation details ko hide karke sirf essentials dikhana. _(Example: `fetch()` saare underlying TCP/IP aur network streaming operations ko hide kar deta hai)_
2. **Encapsulation:** Data aur functions ko ek single unit (wrapper) me wrap karna, aur external direct mutation ko restrict karna
3. **Inheritance:** Parent structure se child structure me features pass karna (JS me _Prototypes_ ke through handle hota hai)
4. **Polymorphism:** Ek single method ka context ke hisaab se multiple forms/behaviors le sakna

---

### 3️⃣ Object Literals aur `this` Keyword

Ek **Object Literal** exactly wahi hai jo naam se lagta hai — key-value pairs ka direct collection, jo absolute base unit represent karta hai.

```javascript
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log(`Username: ${username}`); // ReferenceError throw karega!
        console.log(`Username: ${this.username}`); // Ye kaam karega
    }
}
```

#### `this` ke saath Execution Context Samajhna

- **`this` ki zaroorat kyun hai?** Agar multiple execution spaces same property names share karte hain, to JS ko samajhna padta hai ki kis specific block ke against execute karna hai. `this` keyword directly **current context** ko point karta hai.
    
- **Global Context Variations:**
    
    - **Node.js** file ke andar `console.log(this);` chalane pe ek **empty object `{}`** return hota hai
    - **Web Browser console** me `console.log(this);` chalane pe global **`window` object** return hota hai, jisme DOM details, event hooks, aur web APIs hote hain

---

### 4️⃣ Constructor Functions aur `new` Keyword

Object literals se manually objects banana, jab bhi naye datasets instantiate karne ho, redundant code repetition force karta hai. **Constructor Functions** ek instantiable structural layout ki tarah kaam karte hain.

```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    };

    return this; // Default me implicitly return hota hai, chahe likho ya na likho
}
```

#### `new` Keyword Kyun Critical Hai

Agar constructor function ko `new` keyword ke **bina** call karo:

```javascript
const userOne = User("Hitesh", 12, true);
const userTwo = User("ChaiAurCode", 11, false);
console.log(userOne.username); // Print hoga: "ChaiAurCode"
```

> [!warning] `new` ke bina, values global reference se pass hoti hain. `userTwo` implicitly `userOne` ke properties ko globally **overwrite/corrupt** kar dega.

#### `new` ke Saath Under the Hood Kya Hota Hai?

Jab call ke pehle `new` keyword lagate ho, to internally ek **4-step process** hota hai:

1. **Step 1:** Ek bilkul naya, blank empty object create hota hai (jise instance kehte hain)
2. **Step 2:** Constructor function automatically call hota hai
3. **Step 3:** `this` keyword ka reference completely is nayi banayi gayi empty instance object se bind ho jaata hai, aur jo bhi argument variables hain woh inject ho jaate hain
4. **Step 4:** Populated instance object aapke variable assignment me wapas return ho jaata hai

---

### 5️⃣ Helpful OOP Inspectors

- **`.constructor` Property:** Ek built-in reference property jo object instance ke paas hoti hai, jo directly uske original creating constructor function ko point karti hai
- **`instanceof` Operator:** Ek conditional testing operator jo check karta hai ki koi instance kisi specific base creator type se match karta hai ya nahi

```javascript
console.log(userOne instanceof User); // true
```

---

### 📌 Quick Recap

- JS me true classes nahi hoti — `class` sirf ES6 ka syntactic sugar hai, core me JS **prototypal** hai
- OOP ke 4 Pillars: **Abstraction, Encapsulation, Inheritance, Polymorphism**
- Object literal me method ke andar property access karne ke liye `this.propertyName` use karo, direct variable name nahi
- Node.js me `this` = `{}` (empty object), Browser me `this` = `window` object
- **Constructor Function** = reusable object blueprint, but `new` keyword ke bina use karna dangerous hai (global overwrite)
- `new` ka 4-step process: **naya object bana → constructor call → `this` bind → object return**
- `.constructor` aur `instanceof` se object ka origin/type check kar sakte ho

---

> [!question] Next Series ka koi aur advance topic (jaise **Prototypal Inheritance**, **Classes in JS**, ya **Closures**) ke notes bhi chahiye?