
## title: Now You Know Fetch in JavaScript tags: [javascript, fetch, microtask-queue, promise, chai-aur-code] source: "https://www.youtube.com/watch?v=Rive84an6Lc"

# Now You Know Fetch in JavaScript

> [!info] Source Chai aur #javascript series — `fetch()` ka deep internal architecture aur behavior ke notes.

---

### 1️⃣ `fetch()` ka History aur Evolution

JS me network request bhejne ke tareekon me time ke saath revolutionary changes aaye hain:

1. **`XMLHttpRequest` (XHR):** Internet Explorer 5 (IE5) ke time aaya. Iske saath kaam karna bahut complex tha, kyunki isme kai ready states (`readyState`) track karna aur Callback Hell handle karna padta tha.
2. **`fetch()` API ka Aagman:** Isse XHR ke successor ke roop me laaya gaya, jo **Promises** based hai. Iska syntax `.then().catch()` ke saath bahut clean aur easy hai.
3. **Node.js me Native Support (2022):** Shuruaat me `fetch()` sirf browser me available tha. February 2022 me **Node.js v17.5/18** core team ne apni khud ki stream API (`Web Stream API`) aur `AbortController` banayi aur `fetch()` ko **Node.js ke andar natively (in-built)** shamil kar diya, jisse external dependency poori tarah khatam ho gayi.

---

### 2️⃣ Microtask Queue aur `fetch()` ki Sabse Badi Priority 🚀

Pichle architecture video me humne seekha tha ki normal async tasks (`setTimeout`) complete hone pe **Task Queue / Callback Queue** me jaate hain. Lekin `fetch()` aur promises ke liye JS me ek special queue hoti hai jise **Microtask Queue** ya **High Priority Queue** kehte hain.

> [!warning] 🌟 Interview ka Sabse Bada Rule (The VIP Line Fact)
> 
> - Microtask Queue ko JS engine ke andar ek **VIP Line** maana jaata hai.
> - Agar `setTimeout` aur `fetch()` dono ka time ek saath poora hota hai, to **Event Loop hamesha pehle Microtask Queue (`fetch` ka callback) ko utha ke Call Stack me bhejega**. `setTimeout` ko tab tak wait karna padega jab tak Microtask Queue poori tarah khaali nahi ho jaati.

---

### 3️⃣ `fetch()` se Juda Important Interview Question 🎯

> **Question:** Agar hum `fetch()` se koi request bhejte hain aur server se `404 Not Found` ya `500 Internal Server Error` ka response aata hai, to woh promise ke `.then()` (Resolve) me jaayega ya `.catch()` (Reject) me?

**Answer:** Woh hamesha **`resolve` / `.then()`** block ke andar hi jaayega!

**Logical Reason:** `fetch()` ke liye error ya rejection sirf aur sirf usi situation me hota hai jab **network request poori hi na ho paayi ho** (jaise: user ka internet band ho jaana, ya domain ka exist na karna). Agar request server tak pahunch gayi aur server ne koi bhi status code (chahe woh 200 ho, 404 ho, ya 500 ho) wapas kiya hai, to woh `fetch` ke liye ek successful response mana jaata hai.

---

### 4️⃣ `fetch()` Behavior ka Internal Mechanism (Under the Hood) ⚙️

Jab code me sirf ek line likhte ho: `fetch('https://api.com')`, to parde ke peeche JS engine ise turant **do parallel tracks** me divide kar deta hai.

#### Track 1: Data/Memory Space Reservation

JS ki main memory me turant response ko hold karne ke liye ek space (default empty/undefined) book kar diya jaata hai. Iske andar do internal (private) aur inaccessible arrays hote hain:

- **`onFulfilled []`:** Yeh promise ke successful hone pe `resolve` se juda hota hai
- **`onRejected []`:** Yeh promise ke fail hone pe `reject` se juda hota hai

> [!note] Ye poori tarah private fields hote hain — inhe apne code me directly access nahi kar sakte.

#### Track 2: Network Request Handling

Yeh part directly aapke operating system/browser ya Node environment ki network capability se judke actual **network request** fire karta hai.

- **Case A:** Agar network se data successfully aa jaata hai (chahe woh 404 hi kyun na ho), woh turant **`onFulfilled`** array me jaata hai
- **Case B:** Agar request fail ho jaati hai (jaise internet crash), to woh **`onRejected`** array me jaata hai

#### 👑 Final Step

Jaise hi in dono me se kisi bhi array me data aata hai, inki internal responsibility hoti hai ki woh turant memory me book kiya gaya main `Response` variable ko us data se fulfil kar dein. Ek baar variable bharne ke baad, woh aapke global code (Global Memory) me aapke response ke roop me available ho jaata hai.

---

### 5️⃣ Advance Usage: `fetch()` me Options Bhejna (Headers & Post Data) 🛠️

`fetch()` sirf data mangwane (GET) ke kaam nahi aata — dusre parameter me ek **object `{}`** pass karke aap headers, token, ya body data bhi send kar sakte ho:

```javascript
// Real API request with configuration
fetch('https://api.example.com/v1/posts', {
    method: 'POST', // 👈 Request ka type badla
    headers: {
        'Content-Type': 'application/json', // Header set kiya
        'Authorization': 'Bearer my-secret-token'
    },
    body: JSON.stringify({ // 👈 Object data ko string me convert karke bheja
        title: 'Chai aur Code Post',
        content: 'This is internal fetch details'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
```

---

### 📌 Quick Recap

- `XHR` (complex, readyState-based) → `fetch()` (Promise-based, clean syntax)
- Node.js me `fetch()` natively support 2022 (v17.5/18) se aaya
- **Microtask Queue (fetch/promises) > Task Queue (setTimeout)** — priority ke hisaab se hamesha pehle
- `fetch()` sirf tab **reject/catch** hota hai jab network request hi fail ho jaaye (internet down, invalid domain) — 404/500 bhi `.then()` me hi jaate hain
- Internally `fetch()` do parallel tracks banata hai: Memory space reservation (`onFulfilled[]`/`onRejected[]`) + actual Network request
- `fetch()` ka 2nd parameter object → `method`, `headers`, `body` set karne ke liye use hota hai
- `body` me data bhejne se pehle `JSON.stringify()` se convert karna zaroori hai

---

> [!question] Next Series ka agla aur bahu-prateekshit advance section hai **"Object Oriented in JavaScript"** (OOPs) — uske notes bhi isi tarah tayar karne chahiye?