
## title: Magic of Prototype in JavaScript tags: [javascript, prototype, prototype-chain, inheritance, chai-aur-code] source: "http://www.youtube.com/watch?v=uMI5cNeHTOc"

# Magic of Prototype in JavaScript

> [!info] Source Chai aur #javascript series — Prototype, prototype chain aur prototypal inheritance ke notes.

---

### 1️⃣ JavaScript ki Core Prototypal Nature

- **Fundamental Behavior:** JavaScript mainly ek **prototypal-based language** hai. Properties ya methods dhundhte waqt uska default behavior hota hai ki agar turant kuch nahi milta, to woh continuously **upar (upward)** dekhta rehta hai.
- **The Prototype Chain:** Agar current instance me koi property/method missing hai, to JS uske parent object me dekhega, phir grandparent object me, aur aise hi aage. Yeh tab tak haar nahi maanta jab tak chain ke end tak nahi pahunch jaata, jo directly **`null`** ko point karta hai.
- **Everything is an Object:** Under the hood, arrays, functions, aur strings — sab structurally base JavaScript **`Object`** ke upar bane hote hain.

---

### 2️⃣ Functions bhi Objects ki Tarah Behave Karte Hain

Chunki sab kuch master `Object` se inherit hota hai, functions JS me unique entities hain — woh executable routines bhi hote hain _aur_ standard objects ki tarah bhi behave karte hain.

```javascript
function multiplyByFive(num) {
    return num * 5;
}

multiplyByFive.power = 2; // Function pe directly ek property inject ki!

console.log(multiplyByFive(5));        // 25
console.log(multiplyByFive.power);     // 2
console.log(multiplyByFive.prototype); // {} (Ek empty prototype object)
```

> [!tip] Takeaway JavaScript functions pe custom direct property assignments allow karti hai kyunki functions fundamentally objects se hi derive hote hain.

---

### 3️⃣ Prototype ke Through Custom Methods Inject Karna

Native global wrappers (`Object`, `Array`, `String`) me directly custom behaviors inject kar sakte ho, jisse woh saare downstream child instances ke liye globally accessible ho jaate hain.

#### A. Top-Level Injection (Universal `Object` ko Target Karna)

Global `Object.prototype` pe directly method append karne se, **har single variable structure** (Arrays, Strings, Functions) turant us capability ko inherit kar leta hai.

```javascript
let myHeroes = ["thor", "spiderman"];
let heroPower = { thor: "hammer", spiderman: "sling" };

// Directly ultimate top-level Object prototype me inject kiya
Object.prototype.hitesh = function() {
    console.log(`Hitesh is present in all objects.`);
};

heroPower.hitesh(); // Kaam karega!
myHeroes.hitesh();  // Kaam karega! Arrays bhi Object se inherit karte hain.
```

#### B. Lower-Level Specific Injection (`Array` ya `String` ko Target Karna)

Agar prototype injection ko specific child wrapper tak restrict kar do, to sibling categories use share nahi kar sakti.

```javascript
Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello to arrays!`);
};

myHeroes.heyHitesh();   // Perfectly kaam karega!
// heroPower.heyHitesh(); // Error! Standard objects ko Array-specific prototypes ka pata nahi hota
```

---

### 4️⃣ Prototypal Inheritance Mechanics

Inheritance kisi object ko ek bilkul alag object structure ki properties aur methods **borrow** karne ya unse linkage banane deta hai.

```javascript
const User = { username: "chai", email: "chai@google.com" };
const Teacher = { makeVideo: true };
const TeachingSupport = { isAvailable: false };
const TASupport = {
    assignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // Purana, direct internal prototype lookup assignment
};

// Legacy syntax — Teacher ki fallback chain ko User se link kiya
Teacher.__proto__ = User;
```

#### Modern Integration Alternative

`__proto__` wala structural syntax kaafi outdated maana jaata hai aur engine readability kam karta hai. Modern codebases unified API utility **`Object.setPrototypeOf()`** use karte hain:

```javascript
// Modern Syntax: TeachingSupport ko Teacher ke fallback parent ke roop me link kiya
Object.setPrototypeOf(TeachingSupport, Teacher);
```

---

### 5️⃣ Practical Problem Solving: `.trueLength` Method Banana

**Goal:** Ek global custom string method `trueLength()` banao jo _kisi bhi_ string instance ka accurate character count automatically log kare — leading/trailing whitespaces strip karke, bina baar-baar `.trim().length` manually likhe.

```javascript
// Step 1: Native String proto-layer me globally apna structural method inject karo
String.prototype.trueLength = function() {
    // 'this' contextually us exact instance ko map karta hai jo is handler ko execute kar raha hai
    console.log(`Current context string reference: ${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

// Step 2: Test cases chala ke check karo
let anotherUser = "ChaiAurCode     ";

anotherUser.trueLength();
// Logs: "Current context string reference: ChaiAurCode     "
// Logs: "True length is: 11"

"hitesh   ".trueLength(); // Logs: "True length is: 6"
```

> [!tip] Yaad Rakho ("Jiska Matlab This") Method call initiate karne wali execution target string, dynamically internal **`this`** keyword reference se perfectly map hoti hai.

---

### 📌 Quick Recap

- JS **prototypal-based** hai — property na milne pe upward search karta hai, chain ke end me `null` milta hai
- Functions bhi objects hote hain — unpe custom properties directly assign ki ja sakti hain (`fn.power = 2`)
- `Object.prototype` pe method add karo → sab (arrays, strings, functions) ko milega
- `Array.prototype` jaisi specific injection sirf usi type ke liye accessible hoti hai, siblings ko nahi
- Inheritance ke liye legacy way = `__proto__`, modern way = **`Object.setPrototypeOf(child, parent)`**
- Practical use-case: `String.prototype.trueLength` jaisa custom reusable method banana — `this` current string instance ko refer karta hai

---

> [!question] Next Series ka koi aur advance topic (jaise **Classes in JS**, **Closures**, ya **`this` binding deep-dive**) ke notes bhi chahiye?