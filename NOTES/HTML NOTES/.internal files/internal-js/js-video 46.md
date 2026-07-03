

## title: Bind in JavaScript tags: [javascript, bind, this-keyword, event-listener, react, chai-aur-code] source: "http://www.youtube.com/watch?v=75dMiOY_4ac"

# Bind in JavaScript

> [!info] Source Chai aur #javascript series — `.bind()` method aur event listeners me `this` hijacking ke notes.

---

### 1️⃣ Historical Context: React & Explicit Binding

> [!note] Legacy Setup Early days ke **React** me (version 1.0 ya modern functional hooks se pehle), components mainly class-based hote the. Developers ko method tracking scopes ko manually manage karna padta tha.

React tab tak JS ke native async event tracking ke upar automatic abstraction layers wrap nahi karta tha, isliye developers heavily `.call()` aur `.bind()` ke through execution targets explicitly manage karne pe depend karte the. Yahi cheez un developers ko alag karti thi jo JS ke core execution contexts sach me samajhte the, un se jo nahi samajhte the.

---

### 2️⃣ Core Problem: Event Listeners `this` ko Overwrite Kar Dete Hain

Jab object ki custom properties reference karne wala method directly ek DOM Event Listener me callback ki tarah attach kiya jaata hai (jaise standard button click), tab current context reference **`this`** contextually **hijack** ho jaata hai.

```html
<button>Button Click</button>
<script>
class ReactComponent {
    constructor() {
        this.server = "https://localhost:3000";

        // Raw method reference ko directly event listener me attach kiya
        document.querySelector("button")
                .addEventListener("click", this.handleClick);
    }

    handleClick() {
        console.log("Button clicked!");
        console.log(this.server); // Trigger hoga: undefined!
    }
}
const app = new ReactComponent();
</script>
```

#### 🤔 `this.server` `undefined` Kyun Return Karta Hai?

> [!warning] Context Hijacking ("Jiska Matlab This") Event listener change kar deta hai ki command ko **kaun execute karta hai**. Master `ReactComponent` class method ko call karne ke bajaye, underlying **HTML DOM Element (`<button>`)** callback function ko trigger karta hai.

**Result:** `handleClick()` ke andar, `this` class properties ko reference karne se shift hokar directly button element ko point karne lagta hai. Chunki HTML button structure me `.server` naam ki koi property hoti hi nahi, isliye yeh `undefined` value error deta hai.

---

### 3️⃣ Solution: `.bind()` se Explicit Connection

Context hijacking se bachne ke liye — bina function ko preemptively run kiye — JavaScript **`.bind()`** method provide karta hai.

|Method|Behavior|
|---|---|
|**`.call()`**|Function ko **turant, spot pe hi** forcefully execute kar deta hai|
|**`.bind()`**|Function ko execute _nahi_ karta — balki ek **bilkul naya function pointer return** karta hai, jiska internal context permanently locked hota hai|

```javascript
class ReactComponent {
    constructor() {
        this.server = "https://localhost:3000";

        // FIX: Class ke explicit context structure ko manually seal aur attach karo
        this.handleClick = this.handleClick.bind(this);

        document.querySelector("button")
                .addEventListener("click", this.handleClick);
    }

    handleClick() {
        console.log(`Successfully connecting to: ${this.server}`);
        // Output: "Successfully connecting to: https://localhost:3000"
    }
}
```

#### ⚙️ `.bind(this)` Ye Kaise Solve Karta Hai

1. **State Wrapper Pass Karta Hai:** Initialization block ke andar `.bind(this)` append karke, hum current outer class execution reference context ko directly naye wrapper loop me pass kar dete hain.
2. **Identity Safely Preserve Karta Hai:** Newly generated function target dono properties successfully retain karta hai — yeh accurately track karta hai _kaunsa_ DOM node action fire kar raha hai, aur saath hi parent class parameters se flawless communication bhi bana ke rakhta hai.

---

### 📌 Quick Recap

- Event listener me method attach karne pe `this` **button element** ko point karta hai, class instance ko nahi
- Isliye class properties access karne pe `undefined` milta hai
- `.call()` → turant execute karta hai | `.bind()` → naya function return karta hai, execute _baad me_ hoga
- Fix: constructor me `this.handleClick = this.handleClick.bind(this)` likho
- `.bind(this)` permanently lock kar deta hai ki method ke andar `this` hamesha class instance ko refer karega — chahe method kahin bhi callback ki tarah pass ho

---

> [!question] Next Series ka agla topic (jaise **`call` vs `apply` vs `bind` detailed comparison**, ya **Closures**) ke notes bhi chahiye?