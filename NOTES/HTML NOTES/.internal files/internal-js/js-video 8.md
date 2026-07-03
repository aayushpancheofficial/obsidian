
#### Comparison of Datatypes in JavaScript

##### Basic Comparison Operators

JavaScript mein comparison operators ka output hamesha boolean hota hai:

- `true`
- `false`

##### Common Operators

| Operator | Meaning |
|---|---|
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |
| `==` | Equal to |
| `!=` | Not equal to |

##### Example

```javascript
console.log(2 > 1);
console.log(2 < 1);
console.log(2 == 2);
````

##### Output

```javascript
true
false
true
```

---

#### Mixed Data Type Comparisons

##### Example

```javascript
console.log("2" > 1);
console.log("02" > 1);
```

##### Output

```javascript
true
true
```

##### Reason

JavaScript automatically string ko number mein convert kar deta hai.

```javascript
"2" > 1
```

Actually ban jata hai:

```javascript
2 > 1
```

##### Best Practice

Comparison karne se pehle dono values ka data type same rakho.

---

#### null Comparison

##### Example

```javascript
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
```

##### Output

```javascript
false
false
true
```

##### Reason

Comparison operators aur equality operator alag tarike se kaam karte hain.

`null >= 0` mein JavaScript `null` ko `0` mein convert kar deta hai.

```javascript
null >= 0
```

Actually ban jata hai:

```javascript
0 >= 0
```

Isliye output:

```javascript
true
```

Lekin:

```javascript
null == 0
```

Output:

```javascript
false
```

Kyuki equality check mein `null` ko `0` mein convert nahi kiya jata.

---

#### undefined Comparison

##### Example

```javascript
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
```

##### Output

```javascript
false
false
false
```

##### Important Point

`undefined` ko number ke saath compare karna avoid karna chahiye.

---

#### Loose Equality vs Strict Equality

##### Loose Equality `==`

`==` sirf value check karta hai.  
Agar data type alag ho, to JavaScript type conversion kar sakta hai.

##### Example

```javascript
console.log("2" == 2);
```

##### Output

```javascript
true
```

---

##### Strict Equality `===`

`===` value aur data type dono check karta hai.

##### Example

```javascript
console.log("2" === 2);
```

##### Output

```javascript
false
```

##### Reason

`"2"` string hai aur `2` number hai.

---

#### Best Practice

JavaScript mein mostly `===` use karo.

##### Avoid

```javascript
console.log("2" == 2);
```

##### Prefer

```javascript
console.log("2" === 2);
```

---

#### Quick Revision Table

|Code|Output|
|---|---|
|`"2" > 1`|`true`|
|`"02" > 1`|`true`|
|`null > 0`|`false`|
|`null == 0`|`false`|
|`null >= 0`|`true`|
|`undefined == 0`|`false`|
|`undefined > 0`|`false`|
|`"2" == 2`|`true`|
|`"2" === 2`|`false`|

---

#### Short Summary

Comparison operators ka output boolean hota hai.

Mixed data type comparison avoid karna chahiye.

`null` aur `undefined` ke comparison confusing results de sakte hain.

`==` type conversion karta hai.

`===` value aur type dono check karta hai.

Best practice: JavaScript mein `===` use karo.