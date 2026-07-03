
#### Datatype Conversion Confusion

##### Type Conversion ki zaroorat kyun hoti hai?

Real-world applications mein data hamesha expected type mein nahi aata.

Example:

- form input se data mostly `string` mein aata hai
- backend request mein value unknown type ki ho sakti hai
- calculation ke liye string ko number mein convert karna padta hai

Example:

```javascript
let score = "33";
````

Yahaan `"33"` dekhne mein number lag raha hai, lekin actually ye string hai.

---

#### String to Number Conversion

##### Number()

Kisi value ko number mein convert karne ke liye `Number()` use hota hai.

```javascript
let score = "33";
let valueInNumber = Number(score);

console.log(valueInNumber);
console.log(typeof valueInNumber);
```

##### Output

```javascript
33
number
```

---

#### Number Conversion Examples

##### `"33"` to Number

```javascript
let score = "33";
console.log(Number(score));
```

Output:

```javascript
33
```

---

##### `"33abc"` to Number

```javascript
let score = "33abc";
console.log(Number(score));
```

Output:

```javascript
NaN
```

Meaning:

`"33abc"` pure number nahi hai, isliye output `NaN` aata hai.

---

##### `null` to Number

```javascript
let score = null;
console.log(Number(score));
```

Output:

```javascript
0
```

---

##### `undefined` to Number

```javascript
let score = undefined;
console.log(Number(score));
```

Output:

```javascript
NaN
```

---

##### `true` and `false` to Number

```javascript
console.log(Number(true));
console.log(Number(false));
```

Output:

```javascript
1
0
```

---

##### `"Hitesh"` to Number

```javascript
let score = "Hitesh";
console.log(Number(score));
```

Output:

```javascript
NaN
```

---

#### NaN

##### Full Form

`NaN` ka full form hai:

```text
Not a Number
```

##### Important Point

```javascript
console.log(typeof NaN);
```

Output:

```javascript
number
```

Yeh JavaScript ka confusing behavior hai.

---

#### Number Conversion Table

|Input|Output|typeof|
|---|---|---|
|`"33"`|`33`|`number`|
|`"33abc"`|`NaN`|`number`|
|`null`|`0`|`number`|
|`undefined`|`NaN`|`number`|
|`true`|`1`|`number`|
|`false`|`0`|`number`|
|`"Hitesh"`|`NaN`|`number`|

---

#### Any Type to Boolean Conversion

##### Boolean()

Kisi value ko `true` ya `false` mein convert karne ke liye `Boolean()` use hota hai.

```javascript
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);
```

Output:

```javascript
true
boolean
```

---

#### Boolean Conversion Rules

##### Number to Boolean

```javascript
console.log(Boolean(1));
console.log(Boolean(0));
```

Output:

```javascript
true
false
```

---

##### String to Boolean

```javascript
console.log(Boolean(""));
console.log(Boolean("Hitesh"));
```

Output:

```javascript
false
true
```

---

#### Boolean Conversion Table

|Input|Output|
|---|---|
|`1`|`true`|
|`0`|`false`|
|`""`|`false`|
|`"Hitesh"`|`true`|
|`"anyText"`|`true`|

---

#### Any Type to String Conversion

##### String()

Kisi value ko string mein convert karne ke liye `String()` use hota hai.

```javascript
let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);
```

Output:

```javascript
33
string
```

---

#### Important Point

Output screen par `33` hi dikhega, lekin memory mein ab ye string ban chuka hai.

---

#### String Conversion Examples

```javascript
console.log(String(33));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
```

Output:

```javascript
33
true
false
null
undefined
```

---

#### Summary Cheat Sheet

##### Number Conversion

```javascript
"33"      => 33
"33abc"   => NaN
"Hitesh"  => NaN
null      => 0
undefined => NaN
true      => 1
false     => 0
```

##### Boolean Conversion

```javascript
1         => true
0         => false
""        => false
"Hitesh"  => true
"anyText" => true
```

##### String Conversion

```javascript
33        => "33"
true      => "true"
false     => "false"
null      => "null"
undefined => "undefined"
```

---

#### Final Summary

Type conversion ka use tab hota hai jab data ek type se dusre type mein badalna ho.

- `Number()` value ko number mein convert karta hai
    
- `Boolean()` value ko true/false mein convert karta hai
    
- `String()` value ko string mein convert karta hai
    

JavaScript mein kuch conversions confusing hote hain, jaise:

- `"33abc"` number mein convert hone par `NaN`
    
- `null` number mein convert hone par `0`
    
- `undefined` number mein convert hone par `NaN`
    
- `typeof NaN` ka output `number`