````markdown
#### Number and Maths in JavaScript

##### Numbers in JavaScript

JavaScript mein numbers ko 2 tarike se declare kar sakte hain:

- Implicitly
- Explicitly

---

#### Implicit Number

##### Meaning

JavaScript automatically number type detect kar leta hai.

##### Example

```javascript
const score = 400;
````

---

#### Explicit Number

##### Meaning

`new Number()` ka use karke number ko object ki tarah define kar sakte hain.

##### Example

```javascript
const balance = new Number(100);

console.log(balance);
```

---

#### Number Methods

##### toString()

Number ko string mein convert karta hai.

```javascript
const balance = 100;

console.log(balance.toString());
console.log(balance.toString().length);
```

---

##### toFixed()

Decimal ke baad kitne digits chahiye, ye set karta hai.

```javascript
const price = 99.876;

console.log(price.toFixed(2));
```

##### Use

E-commerce, billing, GST calculation mein useful.

---

##### toPrecision()

Total digits ke according value ko round karke string return karta hai.

```javascript
const value = 123.8966;

console.log(value.toPrecision(4));
```

---

##### toLocaleString()

Large numbers ko readable comma format mein convert karta hai.

```javascript
const hundreds = 1000000;

console.log(hundreds.toLocaleString("en-IN"));
```

##### Output

```javascript
10,00,000
```

---

#### Math Library

##### Meaning

`Math` JavaScript ka built-in object hai.

##### Important Point

`Math` ka `M` capital hota hai.

---

#### Math Methods

##### Math.abs()

Negative value ko positive banata hai.

```javascript
console.log(Math.abs(-4));
```

##### Output

```javascript
4
```

---

##### Math.round()

Normal round-off karta hai.

```javascript
console.log(Math.round(4.3));
console.log(Math.round(4.6));
```

##### Output

```javascript
4
5
```

---

##### Math.ceil()

Hamesha upper value leta hai.

```javascript
console.log(Math.ceil(4.2));
```

##### Output

```javascript
5
```

---

##### Math.floor()

Hamesha lower value leta hai.

```javascript
console.log(Math.floor(4.9));
```

##### Output

```javascript
4
```

---

##### Math.min()

Smallest value return karta hai.

```javascript
console.log(Math.min(4, 3, 6, 8));
```

##### Output

```javascript
3
```

---

##### Math.max()

Largest value return karta hai.

```javascript
console.log(Math.max(4, 3, 6, 8));
```

##### Output

```javascript
8
```

---

#### Math.random()

##### Meaning

`Math.random()` 0 aur 1 ke beech random decimal value deta hai.

```javascript
console.log(Math.random());
```

##### Range

```text
0 inclusive
1 exclusive
```

---

#### Random Integer Formula

##### Formula

```javascript
const min = 10;
const max = 20;

const randomValue = Math.floor((Math.random() * (max - min + 1)) + min);

console.log(randomValue);
```

##### Explanation

`max - min + 1` range ka total count deta hai.

`+ min` ensure karta hai ki value minimum se kam na ho.

`Math.floor()` decimal ko integer mein convert karta hai.

---

#### Quick Revision Table

|Method|Use|
|---|---|
|`toString()`|number to string|
|`toFixed()`|decimal digits fix|
|`toPrecision()`|total digits precision|
|`toLocaleString("en-IN")`|Indian comma format|
|`Math.abs()`|negative to positive|
|`Math.round()`|normal round-off|
|`Math.ceil()`|upper value|
|`Math.floor()`|lower value|
|`Math.min()`|smallest value|
|`Math.max()`|largest value|
|`Math.random()`|random decimal|

---

#### Short Summary

JavaScript mein numbers normal value ya `new Number()` object ke through declare kiye ja sakte hain.

Number methods values ko string, fixed decimal, precision aur readable format mein convert karne ke liye use hote hain.

`Math` JavaScript ka built-in object hai jo calculations ke liye useful methods deta hai.

Random number generate karne ke liye `Math.random()` use hota hai.