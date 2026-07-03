# 🟨 JavaScript Objects — Part 2

> [!info] Source [Chai aur Code by Hitesh Choudhary](https://www.youtube.com/watch?v=4lb2pXWWXJI)

#javascript #objects #revision

---

### 1️⃣ Singleton vs Non-Singleton Object

Dono se same empty `{}` object banta hai (memory bhi same tarah operate hoti hai), par conceptual difference hai:

- **`new Object()`** → **Singleton** (constructor method se banta hai)
- **`{}`** → **Non-Singleton** (object literal)

```javascript
const tinderUser1 = new Object(); // Singleton object
const tinderUser2 = {};           // Non-singleton object

// Dono ka output print karne par {} (empty object) hi aayega
```

---

### 2️⃣ Nested Objects

Objects ko jitna chahe deep nest kar sakte ho. Andar ki value access karne ke liye chain mein `.` lagao.

```javascript
const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname); // Hitesh
```

> [!tip] Optional Chaining API se aaye data mein agar koi nesting path missing ho, code crash se bachane ke liye `?` use karo: `regularUser.fullname?.userfullname?.firstname`

---

### 3️⃣ Combining / Merging Objects

|Method|Syntax|Note|
|---|---|---|
|`Object.assign()`|`Object.assign({}, obj1, obj2)`|Pehla `{}` target — safe merge|
|**Spread `...`**|`{...obj1, ...obj2}`|⭐ Modern & 90% of the time used|

```javascript
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// Method 1: Object.assign
const obj3 = Object.assign({}, obj1, obj2);

// Method 2: Spread Operator (Latest & Recommended)
const obj4 = { ...obj1, ...obj2 };

console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
```

---

### 4️⃣ Array of Objects (Database-Style Data)

Real production mein DB se data **Array of Objects** ke format mein aata hai. Pehle index, phir dot notation.

```javascript
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "a@gmail.com" }
];

console.log(users[1].email); // a@gmail.com
```

---

### 5️⃣ Important Object Methods — `keys`, `values`, `entries`, `hasOwnProperty`

| Method                      | Returns                                             |
| --------------------------- | --------------------------------------------------- |
| `Object.keys(obj)`          | Array of saari **keys**                             |
| `Object.values(obj)`        | Array of saari **values**                           |
| `Object.entries(obj)`       | Array of `[key, value]` pairs (nested array)        |
| `obj.hasOwnProperty('key')` | `true` / `false` — property exist karti hai ya nahi |

```javascript
const tinderUser = { id: "123", name: "Sam", isLoggedIn: false };

console.log(Object.keys(tinderUser));    // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // [ '123', 'Sam', false ]
console.log(Object.entries(tinderUser)); // [ ['id','123'], ['name','Sam'], ... ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true
console.log(tinderUser.hasOwnProperty('isLoggedOut')); // false
```

---

### ⚠️ Common Mistakes to Avoid

> [!warning]
> 
> - **Direct nesting in merge:** `{ obj1, obj2 }` (bina spread/assign) likhne se flat object **nahi** banega — obj1 aur obj2 nested ho jayenge andar
> - **Missing target `{}` in `Object.assign`:** `Object.assign(obj1, obj2)` likhne se `obj2` `obj1` ke andar modify ho jayega → original data alter ho jaata hai (bad practice)

---

### ⚡ Quick Revision (1-Min Recap)

> [!tip] Cheat Sheet
> 
> - **Singleton:** `new Object()` → Singleton | `{}` → Non-Singleton
> - **Nesting:** `obj.layer1.layer2.property` — dot chain se access
> - **Merging:** Modern way → `{...obj1, ...obj2}`
> - **DB Data:** Array of objects `[{}, {}, {}]` → `users[0].email`
> - **Keys/Values:** `Object.keys()` / `Object.values()` → hamesha pure **Array** return karte hain (loop-friendly)
> - **Existence Check:** `obj.hasOwnProperty('key')`

---

#### 🔗 Related

- [[JS_Objects_Part1|JavaScript Objects Part 1]]