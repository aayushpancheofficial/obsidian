````markdown
#### Data Types of JavaScript Summary

##### JavaScript Data Types Classification

JavaScript ke data types ko mainly 2 categories mein divide kiya jata hai:

- Primitive Data Types
- Non-Primitive / Reference Data Types

---

#### Primitive Data Types

##### Meaning

Primitive data types ko **call by value** kaha jata hai.

Jab primitive value ko ek variable se dusre variable mein copy karte hain, to original value ka reference nahi milta.  
Uski ek copy create hoti hai.

##### Primitive Types

JavaScript mein 7 primitive data types hote hain:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

---

#### string

##### Meaning

Text data store karne ke liye `string` use hota hai.

##### Example

```javascript
let name = "Hitesh";
````

---

#### number

##### Meaning

Integer aur decimal dono values ke liye `number` use hota hai.

##### Example

```javascript
let score = 100;
let temperature = 33.4;
```

---

#### boolean

##### Meaning

Boolean sirf do values store karta hai:

- `true`
    
- `false`
    

##### Example

```javascript
let isLoggedIn = false;
```

---

#### null

##### Meaning

`null` ek standalone value hai jo empty value ko represent karti hai.

##### Example

```javascript
let outsideTemp = null;
```

---

#### undefined

##### Meaning

Variable declare ho gaya hai, lekin value assign nahi hui.

##### Example

```javascript
let userEmail;
```

---

#### symbol

##### Meaning

`symbol` unique value create karne ke liye use hota hai.

##### Example

```javascript
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);
```

##### Output

```javascript
false
```

##### Reason

Dono symbols ka description same hai, lekin dono unique values hain.

---

#### bigint

##### Meaning

Bahut bade integer values ke liye `bigint` use hota hai.

##### Example

```javascript
const bigNumber = 437648325642n;
```

---

#### Non-Primitive / Reference Data Types

##### Meaning

Non-primitive data types ko **call by reference** kaha jata hai.

Inme actual value ki jagah memory reference ka use hota hai.

##### Types

- Array
    
- Object
    
- Function
    

---

#### Array

##### Meaning

Array list type data store karne ke liye use hota hai.

##### Example

```javascript
const heros = ["shaktiman", "naagraj", "doga"];
```

---

#### Object

##### Meaning

Object key-value pair ke form mein data store karta hai.

##### Example

```javascript
let myObj = {
  name: "hitesh",
  age: 22
};
```

---

#### Function

##### Meaning

JavaScript mein function ko variable ki tarah store kiya ja sakta hai.

##### Example

```javascript
const myFunction = function () {
  console.log("Hello World");
};
```

---

#### typeof Operator

##### Meaning

`typeof` operator kisi value ka data type check karne ke liye use hota hai.

##### Example

```javascript
console.log(typeof "Hitesh");
console.log(typeof 100);
console.log(typeof true);
```

---

#### typeof Return Values

|Value|typeof Output|
|---|---|
|`undefined`|`"undefined"`|
|`null`|`"object"`|
|`true`|`"boolean"`|
|`100`|`"number"`|
|`437648325642n`|`"bigint"`|
|`"Hitesh"`|`"string"`|
|`Symbol("123")`|`"symbol"`|
|`[]`|`"object"`|
|`{}`|`"object"`|
|`function(){}`|`"function"`|

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

##### Note

`typeof null` ka output `"object"` aata hai.  
Ye JavaScript ka old behavior hai.

---

##### typeof function

```javascript
console.log(typeof function () {});
```

##### Output

```javascript
function
```

##### Note

Function ka typeof `"function"` aata hai, lekin internally function bhi object behavior rakhta hai.

---

#### JavaScript Dynamic Typed Language

##### Meaning

JavaScript ek dynamically typed language hai.

Iska matlab variable declare karte time data type batana zaroori nahi hota.

##### Example

```javascript
let score = 100;
score = "hundred";
```

Yahaan same variable pehle number tha, baad mein string ban gaya.

---

#### Quick Revision Table

|Category|Data Types|
|---|---|
|Primitive|string, number, boolean, null, undefined, symbol, bigint|
|Non-Primitive|array, object, function|

---

#### Primitive vs Non-Primitive

|Feature|Primitive|Non-Primitive|
|---|---|---|
|Memory|Copy value|Reference|
|Called as|Call by value|Call by reference|
|Examples|string, number, boolean|array, object, function|
|Change effect|Original value affect nahi hoti|Original reference affect ho sakta hai|

---

#### Short Summary

JavaScript data types do categories mein divide hote hain:

- Primitive
    
- Non-Primitive
    

Primitive data types call by value hote hain.  
Non-primitive data types call by reference hote hain.

JavaScript ke 7 primitive data types hain:

- string
    
- number
    
- boolean
    
- null
    
- undefined
    
- symbol
    
- bigint
    

Non-primitive data types hain:

- array
    
- object
    
- function
    

JavaScript dynamically typed language hai, isliye variable declare karte time data type mention karna zaroori nahi hota.