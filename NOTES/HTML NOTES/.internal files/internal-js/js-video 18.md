# 🟨 Object Destructuring & JSON API Intro

> [!info] Source [Chai aur Code by Hitesh Choudhary](https://www.youtube.com/watch?v=AViTh83k-IE)

#javascript #objects #json #api #revision

---

### 1️⃣ Object Destructuring

Object se specific properties nikal kar **direct use** karna — code clean rehta hai, baar-baar `objectName.propertyName` nahi likhna padta.

```javascript
const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
};

// 1. Traditional Way
console.log(course.courseInstructor);

// 2. Destructuring Way (Clean & Short)
const { courseInstructor } = course;
console.log(courseInstructor); // Hitesh

// 3. Destructuring with Renaming (Alias)
const { courseInstructor: instructor } = course;
console.log(instructor);       // Hitesh
```

> [!tip] React Connect React mein `props` ko baar-baar `props.company` likhne ki jagah functional argument mein hi destructure kar lete hain: `function Navbar({ company }) { ... }`

---

### 2️⃣ API (Application Programming Interface) — Intro

API ka matlab: **apna kaam kisi aur ke sar par daal dena.**

> [!example] Real-life Analogy Restaurant mein menu se order karte ho — kitchen mein khana kaise banta hai woh tumhari head-ache nahi. Waise hi "Login with Google" mein backend verification **Google ki API** sambhalti hai.

---

### 3️⃣ JSON Structure (JavaScript Object Notation)

Pehle data **XML** format mein aata tha (complex). Aaj maximum APIs **JSON** format use karti hain.

- JSON object jaisa dikhta hai, par **iska koi naam nahi hota**
- **Strict Rule:** Keys **aur** Values dono `""` (strings) mein wrap — sirf numbers/booleans exception hain

**Object Format JSON:**

```json
{
    "name": "Hitesh",
    "courseName": "JS in Hindi",
    "price": "free"
}
```

**Array Format JSON:**

```json
[
    { "id": 1, "username": "Aayush" },
    { "id": 2, "username": "Hitesh" }
]
```

---

### 4️⃣ API Response Tools & Handling

Real APIs (jaise [RandomUser API](https://randomuser.me/), GitHub Users API) ka raw data directly samajh nahi aata.

- **Tool Tip:** Raw JSON ko hierarchy/tree mein dekhne ke liye online **JSON Formatter** tools use karo
- **Flow:** `fetch()` se API URL hit karo → response ko Object mein convert karo → bracket/dot notation se extract karo

---

### ⚠️ Common Mistakes to Avoid

> [!warning]
> 
> - **JSON keys without quotes:** JS object mein `{ name: "Hitesh" }` chalta hai, par **strict JSON** mein keys bina `""` ke invalid hoti hain → `{ "name": "Hitesh" }`
> - **Destructuring name mismatch:** `{ variable }` ka naam object ki **exact** original key se match hona chahiye, warna `undefined` milega (jab tak custom renaming `:` na use karo)

---

### ⚡ Quick Revision (5-Min Recap)

> [!tip] Cheat Sheet
> 
> - **Destructuring:** `const { keyName } = obj`
> - **Renaming:** `const { longKeyName: shortName } = obj`
> - **API:** Backend ↔ Frontend data sharing ka tareeka
> - **JSON Syntax:** No object name; `{}` ya `[]` bound; keys aur string-values strictly `""` mein
> - **Array vs Object JSON:** Single object `{}` ya array of objects `[{},{}]` — structure identify karke `.map()` jaise loops lagao

---

#### 🔗 Related

- [[JS_Objects_Part1|JavaScript Objects Part 1]]
- [[JS_Objects_Part2|JavaScript Objects Part 2]]