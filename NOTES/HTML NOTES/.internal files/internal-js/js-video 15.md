
#### Array Part 2 in JavaScript

##### 1. Array Merging

###### push() vs concat()

| Method | Kya karta hai | Original array |
|---|---|---|
| `push()` | Array ko single element ki tarah add karta hai | Change hota hai |
| `concat()` | Arrays ko properly merge karta hai | Change nahi hota |

---

##### 2. push()

###### Meaning
`push()` existing array ke end mein value add karta hai.

Agar ek array ko dusre array mein push karoge, to nested array ban jayega.

###### Code
```javascript
const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

marvel.push(dc);

console.log(marvel);
````

###### Output

```javascript
["Thor", "Ironman", "Spiderman", ["Superman", "Flash", "Batman"]]
```

###### Remember

`push()` original array ko change karta hai.

---
 
##### 3. concat()

###### Meaning

`concat()` arrays ko merge karke naya array return karta hai.

###### Code

```javascript
const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

const allHeroes = marvel.concat(dc);

console.log(allHeroes);
```

###### Output

```javascript
["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]
```

###### Remember

`concat()` original array ko change nahi karta.

---

##### 4. Spread Operator

###### Meaning

Spread operator `...` array ke elements ko spread kar deta hai.

###### Code

```javascript
const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

const allNewHeroes = [...marvel, ...dc];

console.log(allNewHeroes);
```

###### Output

```javascript
["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]
```

###### Remember

Production code mein spread operator zyada use hota hai.

---

##### 5. flat()

###### Meaning

`flat()` nested array ko single array mein convert karta hai.

###### Code

```javascript
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realUsableArray = anotherArray.flat(Infinity);

console.log(realUsableArray);
```

###### Output

```javascript
[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
```

###### Remember

Agar depth nahi pata ho, to `Infinity` use kar sakte hain.

---

##### 6. Array.isArray()

###### Meaning

Check karta hai ki value array hai ya nahi.

###### Code

```javascript
console.log(Array.isArray("Hitesh"));
```

###### Output

```javascript
false
```

###### Return Type

```text
boolean
```

---

##### 7. Array.from()

###### Meaning

Iterable value ko array mein convert karta hai.

###### Code

```javascript
console.log(Array.from("Hitesh"));
```

###### Output

```javascript
["H", "i", "t", "e", "s", "h"]
```

###### Object Edge Case

```javascript
console.log(Array.from({ name: "hitesh" }));
```

###### Output

```javascript
[]
```

###### Reason

Object mein batana padega keys chahiye ya values.

---

##### 8. Array.of()

###### Meaning

Multiple values ko array mein convert karta hai.

###### Code

```javascript
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
```

###### Output

```javascript
[100, 200, 300]
```

---

##### 9. Quick Revision Table

|Method|Use|
|---|---|
|`push()`|original array mein add|
|`concat()`|new merged array|
|`...`|arrays spread/merge|
|`flat()`|nested array flatten|
|`Array.isArray()`|array check|
|`Array.from()`|value to array|
|`Array.of()`|values to array|

---

##### Short Summary

`push()` array ko nested bana sakta hai aur original array change karta hai.

`concat()` arrays ko merge karke new array return karta hai.

Spread operator `...` modern aur clean way hai arrays merge karne ka.

`flat()` nested arrays ko single array mein convert karta hai.

`Array.isArray()` array check karta hai.

`Array.from()` iterable value ko array mein convert karta hai.

`Array.of()` multiple values se array banata hai.