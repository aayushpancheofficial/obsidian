
---
## title: API Request and V8 Engine tags: [javascript, api, xhr, json, v8-engine, chai-aur-code] source: "https://www.youtube.com/watch?v=pDPAcYdSse8"

# API Request and V8 Engine

> [!info] Source Chai aur #javascript series — Network requests aur behind-the-scenes V8 engine architecture ke notes.

---

### 1️⃣ API Kya Hai?

- **Definition:** API (Application Programming Interface) different software systems ya do systems ke beech ek **translator (talking medium)** ki tarah kaam karta hai.
- **Example:** Agar frontend JavaScript me likha hai aur backend Java, Ruby, PHP, ya Python me, to ye dono languages directly baat nahi kar sakti. Woh ek-dusre se communicate karne ke liye **API** use karte hain.

---

### 2️⃣ API Response — JSON Data Structure Drilling 🧩

Modern time me API ka response data mainly **JSON (JavaScript Object Notation)** format me aata hai. Yeh ek bade object jaisa dikhta hai, lekin usse parse karke hi specific properties tak pahuncha ja sakta hai.

#### 🛠️ JSON Parsing Technique

[RandomUser API](https://randomuser.me/) ki structure ka visualization:

- Main response ek object `{}` hai, jiske andar do main properties hain: `results` aur `info`
- `results` actually ek array `[]` hai, jiske andar phir se kai objects closed hain
- **Data nikalne ka exact path:** Agar final variable `data` hai, to user ke first name tak pahunchne ka syntax hoga:

```
data.results[0].name.first
```

---

### 3️⃣ Legacy Requests: `XMLHttpRequest` (AJAX History) ⏳

Modern time me use hone wale `fetch()` ke aane se pehle, JS me network request bhejne ke liye **`XMLHttpRequest` (XHR)** use hota tha. Yeh poori tarah **AJAX (Asynchronous JavaScript and XML)** aur different states pe based hai.

#### 🔹 XHR ke 5 Main Ready States

JS request ki state track karne ke liye total 5 numbers (0 se 4) use karti hai:

|State No.|Naam (MDN Docs)|Description|
|---|---|---|
|**0**|`UNSENT`|Client (Object) ban chuka hai, lekin `open()` method abhi call nahi hua|
|**1**|`OPENED`|`open()` method call ho chuka hai, request ka rasta khul gaya hai|
|**2**|`HEADERS_RECEIVED`|Request send ho chuki hai aur server se headers aur status mil chuke hain|
|**3**|`LOADING`|Server se response ka data download/load ho raha hai|
|**4**|`DONE`|Operation poori tarah complete ho chuka hai, data poora aa gaya hai|

---

### 4️⃣ XHR API Request ka Full Coding Example 🔥

Yeh legacy JS ka classic code hai, jahan `onreadystatechange` event ke through continuously status monitor kiya jaata hai:

```javascript
const requestUrl = 'https://api.github.com/users/hiteshchoudhary'; // GitHub API

// 1. XMLHttpRequest ka naya object (class constructor) banaya
const xhr = new XMLHttpRequest();

// 2. Request ko initialize kiya (GET method ke saath)
xhr.open('GET', requestUrl);

// 3. Callback function ke saath ready state change ko sunna (Continuous Monitor)
xhr.onreadystatechange = function() {
    console.log(`Current ReadyState: ${xhr.readyState}`); // Ready state track karne ke liye

    if (xhr.readyState === 4) { // 👈 Sirf tabhi run hoga jab state 4 (DONE) ho jaaye

        // ⚠️ Dhyan de: Server se aane wala response hamesha STRING format me hota hai
        // console.log(this.responseText); // 'this' current context ko darshata hai

        // 🛠️ String ko JSON object me parse (convert) kiya
        const data = JSON.parse(this.responseText);

        console.log(`Type after parsing: ${typeof data}`); // object
        console.log(`GitHub Followers Count: ${data.followers}`); // 👑 Followers ki sankhya
    }
}

// 4. Request ko server pe live send (bheja) kiya
xhr.send();
```

#### 💻 Chrome Console ka Exact Output

Jaise hi yeh HTML file browser me load hoti hai, network request ke dauran console me ye logs dikhte hain:

```bash
Current ReadyState: 2
Current ReadyState: 3
Current ReadyState: 4
Type after parsing: object
GitHub Followers Count: 23500
```

---

### 5️⃣ Google V8 Engine aur `console.log()` ka Behavior (Under the Hood) ⚙️

- **Surprising Fact:** Core JavaScript ki standard guidelines (ECMAScript) me kahin bhi `console.log()` ya `document` jaisi cheezon ka koi mention nahi hai.
- Ye JS ke features nahi hain — balki yeh browser ka developer tool (`DevTools`) aur runtime environment hai jo JS me inhe inject karta hai.

#### C++ Source Code Visualization (Google V8 Repository)

Google ka V8 engine poori tarah **C++** me likha gaya hai. Agar hum iski official GitHub repository me `src/d8/d8-console.cc` file dekhe, to JS ka `console.log()` parde ke peeche C++ ke is special namespace aur function dwara execute hota hai:

```cpp
// Google V8 Engine Internal C++ Code Snippet (d8-console.cc)
void D8Console::WriteToFile(const char* prefix, ...) {
    // 👑 JS se bheje gaye data ko browser ke DevTools console me write karne ka kaam
    // Yeh directly file ya output stream pe write karta hai
}
```

> [!tip] Conclusion JavaScript ek bahut hi powerful language hai kyunki yeh basically C++ ke upar bana ek khoobsurat aur easy **Wrapper** hai.

---

### 📌 Quick Recap

- **API** = do systems ke beech translator, JSON format me data aata hai
- JSON drilling: `data.results[0].name.first` jaise nested path se access karo
- **XHR** = legacy way network request bhejne ka, 5 ready states (0–4) track karta hai
- `readyState === 4` (DONE) hone pe hi response ready hota hai
- Response hamesha **string** hota hai → `JSON.parse()` se object me convert karna padta hai
- `console.log()`, `document` — ye JS ke native features nahi, Browser/V8 engine provide karta hai
- V8 engine **C++** me likha gaya hai, JS uske upar ek wrapper hai

---

> [!question] Next Series ka agla advance aur interview-favorite video hai **"Promise in JavaScript"** — uske notes bhi chahiye?