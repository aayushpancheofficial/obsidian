````markdown
#### Strings in JavaScript

##### String Declaration Types

JavaScript mein string declare karne ke 2 main tarike hote hain:

- Primitive Method
- Object Construction Method

---

#### Primitive Method

##### Meaning

Single quotes `''` ya double quotes `""` ka use karke string declare kar sakte hain.

##### Example

```javascript
const name = "hitesh";
````

##### Note

Single quotes aur double quotes dono same tarike se kaam karte hain.

---

#### Object Construction Method

##### Meaning

`new String()` ka use karke string object banaya ja sakta hai.

##### Example

```javascript
const gameName = new String("hitesh-hc");
```

##### Explanation

Is method mein string ek object ban jati hai.  
Characters key-value pair ki tarah store hote hain.

Example:

```javascript
0: "h"
1: "i"
2: "t"
```

---

#### Concatenation

##### Meaning

`+` operator se strings ko jodna concatenation kehlata hai.

##### Example

```javascript
const name = "hitesh";
const count = 50;

console.log(name + count + " value");
```

##### Note

Ye old way hai. Modern code mein avoid karna better hai.

---

#### String Interpolation

##### Meaning

Backticks `` ` ` `` aur `${}` ka use karke string ke andar variables add karna string interpolation kehlata hai.

##### Example

```javascript
const name = "hitesh";
const count = 50;

console.log(`Hello my name is ${name} and my repo count is ${count}`);
```

##### Benefit

Code clean aur readable banta hai.

---

#### String Methods

##### `.length`

String ke total characters count karta hai.

```javascript
const gameName = "hitesh-hc";

console.log(gameName.length);
```

---

##### `.toUpperCase()`

String ko uppercase mein convert karta hai.

```javascript
console.log(gameName.toUpperCase());
```

---

##### `.toLowerCase()`

String ko lowercase mein convert karta hai.

```javascript
console.log(gameName.toLowerCase());
```

---

##### `.charAt()`

Specific index par kaunsa character hai, ye batata hai.

```javascript
console.log(gameName.charAt(2));
```

---

##### `.indexOf()`

Koi character pehli baar kis index par aaya hai, ye batata hai.

```javascript
console.log(gameName.indexOf("t"));
```

---

#### substring()

##### Meaning

String ka ek part extract karta hai.

##### Example

```javascript
const newString = gameName.substring(0, 4);

console.log(newString);
```

##### Note

End index include nahi hota.

---

#### slice()

##### Meaning

`slice()` bhi string ka part extract karta hai.

##### Example

```javascript
const anotherString = gameName.slice(0, 4);

console.log(anotherString);
```

##### Special Point

`slice()` negative values accept karta hai.

```javascript
console.log(gameName.slice(-8, 4));
```

---

#### trim()

##### Meaning

String ke starting aur ending spaces remove karta hai.

##### Example

```javascript
const newStringOne = "   hitesh   ";

console.log(newStringOne.trim());
```

---

#### replace()

##### Meaning

String ke andar kisi value ko replace karta hai.

##### Example

```javascript
const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));
```

##### Output

```javascript
https://hitesh.com/hitesh-choudhary
```

---

#### includes()

##### Meaning

Check karta hai ki string ke andar koi word ya character present hai ya nahi.

##### Example

```javascript
console.log(url.includes("hitesh"));
```

##### Output

```javascript
true
```

---

#### split()

##### Meaning

String ko separator ke basis par array mein convert karta hai.

##### Example

```javascript
const str = "hitesh-hc-com";

console.log(str.split("-"));
```

##### Output

```javascript
["hitesh", "hc", "com"]
```

---

#### Quick Revision Table

|Method|Use|
|---|---|
|`.length`|characters count|
|`.toUpperCase()`|uppercase convert|
|`.toLowerCase()`|lowercase convert|
|`.charAt()`|index par character|
|`.indexOf()`|character ka index|
|`.substring()`|string ka part|
|`.slice()`|string ka part, negative allowed|
|`.trim()`|extra spaces remove|
|`.replace()`|value replace|
|`.includes()`|value check|
|`.split()`|string to array|

---

#### Short Summary

String text data ko store karti hai.

Modern JavaScript mein string interpolation use karna better hai.

String methods ka use text ko modify, search, clean aur split karne ke liye hota hai.