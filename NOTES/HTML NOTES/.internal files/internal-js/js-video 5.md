markdown
#### Datatypes and ECMA Standards

##### JavaScript Standards aur Evolution

###### ECMA Standard

JavaScript ke starting time mein alag-alag browsers ke apne standards the.  
Is wajah se ek browser mein code chal jata tha aur dusre browser mein problem aa sakti thi.

Is problem ko solve karne ke liye **ECMA International** standard banaya gaya.

###### TC39

**TC39** ek committee hai jo JavaScript ke naye features aur ECMAScript specifications ko manage karti hai.

###### Documentation Sources

- **TC39 ECMA Specification**: Official aur technical documentation
- **MDN Web Docs**: Easy aur industry-preferred documentation

---

##### `"use strict";` Mode

###### Meaning

`"use strict";` JavaScript ko modern rules ke according run karne ke liye use hota hai.

###### Example

```javascript
"use strict";
````

###### Purpose

Isse JavaScript old bad practices ko allow nahi karti aur errors clearly show karti hai.

###### Note

Modern tools aur frameworks mein strict mode mostly automatic hota hai.

---

##### Environment Rules

###### alert()

`alert()` browser mein kaam karta hai, Node.js mein nahi.

###### Example

```javascript
alert(3 + 3);
```

###### Reason

Browser ke paas `window` object hota hai.  
Node.js standalone runtime hai, isliye browser popup support nahi karta.

---

##### Code Readability

###### Important Point

JavaScript semicolon aur new lines ko automatic handle kar sakti hai, lekin code readable hona chahiye.

###### Bad Practice

```javascript
console.log("hello"); console.log("world")
```

###### Good Practice

```javascript
console.log("hello");
console.log("world");
```

---

#### Data Types in JavaScript

##### Primitive Data Types

JavaScript mein main primitive data types ye hain:

- `string`
    
- `number`
    
- `bigint`
    
- `boolean`
    
- `null`
    
- `undefined`
    
- `symbol`
    

---

##### string

###### Meaning

Textual data store karne ke liye `string` use hota hai.

###### Example

```javascript
let name = "Hitesh";
```

---

##### number

###### Meaning

Numeric values store karne ke liye `number` use hota hai.

###### Example

```javascript
let age = 18;
```

###### Note

JavaScript number ki safe range approx `2^53` tak hoti hai.

---

##### bigint

###### Meaning

Bahut bade numbers ke liye `bigint` use hota hai.

###### Example

```javascript
let bigNum = 9007199254740991n;
```

---

##### boolean

###### Meaning

Boolean sirf do values represent karta hai:

- `true`
    
- `false`
    

###### Example

```javascript
let isLoggedIn = true;
```

---

##### null

###### Meaning

`null` ek intentional empty value hoti hai.

###### Example

```javascript
let temperature = null;
```

###### Use Case

Agar data intentionally empty dikhana ho, to `null` use karte hain.

---

##### undefined

###### Meaning

Agar variable declare ho gaya hai lekin value assign nahi hui, to uski value `undefined` hoti hai.

###### Example

```javascript
let state;

console.log(state);
```

###### Output

```javascript
undefined
```

---

##### symbol

###### Meaning

`symbol` unique value create karne ke liye use hota hai.

###### Example

```javascript
let id = Symbol("123");
```

---

#### Non-Primitive Data Type

##### object

###### Meaning

`object` complex data store karne ke liye use hota hai.

###### Example

```javascript
let user = {
  name: "Hitesh",
  age: 18
};
```

---

#### typeof Operator

##### Meaning

`typeof` operator kisi value ya variable ka data type check karne ke liye use hota hai.

##### Syntax

```javascript
typeof value
```

Ya:

```javascript
typeof(value)
```

##### Example

```javascript
console.log(typeof "Hitesh");
console.log(typeof 18);
console.log(typeof true);
```

##### Output

```javascript
string
number
boolean
```

---

#### Important Interview Points

##### typeof null

```javascript
console.log(typeof null);
```

##### Output

```javascript
object
```

###### Note

`typeof null` ka output `object` aata hai.  
Ye JavaScript ka old behavior hai.

---

##### typeof undefined

```javascript
console.log(typeof undefined);
```

##### Output

```javascript
undefined
```

---

#### null vs undefined

##### undefined

###### Meaning

Variable declare hai, lekin value assign nahi hui.

###### Example

```javascript
let state;
```

---

##### null

###### Meaning

Variable mein intentionally empty value rakhi gayi hai.

###### Example

```javascript
let temperature = null;
```

---

#### Quick Revision Table

|Data Type|Meaning|Example|
|---|---|---|
|`string`|Text data|`"Hitesh"`|
|`number`|Numeric data|`18`|
|`bigint`|Very large number|`9007199254740991n`|
|`boolean`|true/false|`true`|
|`null`|Intentional empty value|`null`|
|`undefined`|Value not assigned|`undefined`|
|`symbol`|Unique value|`Symbol("123")`|
|`object`|Complex data|`{ name: "Hitesh" }`|

---

#### Short Summary

JavaScript ke standards ECMA International aur TC39 manage karte hain.  
Modern JavaScript mein `"use strict";` better error handling ke liye use hota hai.  
JavaScript mein primitive data types hote hain: `string`, `number`, `bigint`, `boolean`, `null`, `undefined`, aur `symbol`.  
Non-primitive data type mein main `object` aata hai.  
`typeof` operator data type check karne ke liye use hota hai.  
`typeof null` ka output `object` aata hai, aur `typeof undefined` ka output `undefined` hota hai.