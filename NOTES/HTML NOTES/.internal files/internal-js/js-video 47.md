
## title: Now You Know Objects in JavaScript tags: [javascript, objects, property-descriptors, immutability, chai-aur-code] source: "http://www.youtube.com/watch?v=jss2rL9kv6s"

# Now You Know Objects in JavaScript

> [!info] Source Chai aur #javascript series — Property Descriptors, immutability, aur `enumerable`/`writable` flags ke notes.

---

### 1️⃣ Core Interview Question (Senior Developer Level)

> [!question] The Question `Math.PI` ki value JS me universally hardcoded hai `3.141592653589793`. Kya isse overwrite ya change karna possible hai (jaise `Math.PI = 4` set karna)? Agar nahi, to kyun?

**Quick Answer:** Nahi, isko modify nahi kar sakte. Yeh standard `const` assignments ki wajah se block nahi hai, balki engine runtime context ke andar chhupe **low-level property flags** ki wajah se block hai.

---

### 2️⃣ Hidden Flags: Property Descriptors

JS object ke andar declare kiya gaya har key-value pair ke saath hidden configurations judi hoti hain, jinhe **Property Descriptors** kehte hain. Ye descriptors associated key ka behavior, mutability, aur scannability control karte hain.

#### Core Descriptor Flags

|Flag|Kaam|
|---|---|
|`value`|Property se associated actual data payload|
|`writable`|Agar `true` hai, to value ko standard assignment se modify kar sakte ho|
|`enumerable`|Agar `true` hai, to property loops (`for...in`, `Object.keys()`) me dikhegi|
|`configurable`|Agar `true` hai, to descriptor type ko modify ya delete kar sakte ho parent container se|

#### `Math.PI` ko Inspect Karna

Ye metadata traits dekhne ke liye JS **`Object.getOwnPropertyDescriptor(object, propertyName)`** provide karta hai:

```javascript
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/* Output:
{
  value: 3.141592653589793,
  writable: false,       <-- Engine architecture ke andar hard-blocked!
  enumerable: false,
  configurable: false
}
*/
```

> [!warning] Behind-The-Scenes Chunki `writable` V8 engine architecture ke gehre andar `false` hardcoded hai, isliye `Math.PI` ko overwrite karne ki koi bhi koshish **silently fail** ho jaati hai — bina koi explicit error throw kiye.

---

### 3️⃣ Custom Objects pe Immutable Properties Banana

Yahi strict behavior apne custom objects pe bhi enforce kar sakte ho, **`Object.defineProperty(object, property, descriptorObject)`** use karke.

```javascript
const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailable: true
};

// 'name' property ke descriptor parameters modify kiye
Object.defineProperty(chai, "name", {
    writable: false,       // Modify nahi ho sakta
    enumerable: false      // Object iterations/loops ke dauran hidden rahega!
});

// Value ko overwrite karne ki koshish
chai.name = "Oolong Chai";
console.log(chai.name); // Output: "Ginger Chai" (Silent block success!)
```

---

### 4️⃣ `enumerable: false` ka Impact Samajhna

`enumerable: false` set karne se property execution loops se cleanly cut ho jaati hai — layout loops se poori tarah hide ho jaati hai.

```javascript
// Illustration ke liye object me ek custom method add kiya
chai.orderChai = function() { console.log("Chai is not ready."); };

// Object ko safely iterate karna
for (let [key, value] of Object.entries(chai)) {
    // Defensive engineering check: methods key calculations ko break na karein
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

/* Loop Output:
   price : 250
   isAvailable : true
*/
```

> [!note] Observation Dhyan do ki `name : Ginger Chai` output loop se **poori tarah missing** hai. Property still exist karti hai aur `chai.name` se directly access ho sakti hai, lekin uski enumerability flag ko `false` set karne se loops ke dauran woh entirely hide ho jaati hai.

---

### 📌 Quick Recap

- Har object property ke saath hidden **Property Descriptors** attach hote hain: `value`, `writable`, `enumerable`, `configurable`
- `Math.PI` change nahi hota kyunki uska `writable: false` hai — engine level pe hardcoded
- `Object.getOwnPropertyDescriptor(obj, key)` se kisi property ke descriptors inspect kar sakte ho
- `Object.defineProperty(obj, key, {...})` se custom immutable/hidden properties bana sakte ho
- `writable: false` → value silently overwrite nahi hoti (error nahi aata, bas change ignore ho jaata hai)
- `enumerable: false` → property `for...in`, `Object.keys()`, `Object.entries()` jaise loops me nahi dikhti, lekin direct access (`obj.key`) tab bhi kaam karta hai

---

> [!question] Next Series ka agla topic (jaise **Getters/Setters**, **Object.freeze() vs Object.seal()**, ya **Closures**) ke notes bhi chahiye?