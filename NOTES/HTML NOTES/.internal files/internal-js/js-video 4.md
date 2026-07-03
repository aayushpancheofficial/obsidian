
#### Let, const and var ki kahani

##### Variables aur Constants kya hote hain?

Programming mein jab humein koi data temporary store karna hota hai, jaise:

- user ka naam
- email
- id
- password
- city

to humein memory mein ek space chahiye hoti hai.  
Us memory space ko naam dena hi **variable declaration** kehlata hai.

JavaScript mein variable declare karne ke 3 main keywords hain:

- `const`
- `let`
- `var`

---

#### `const`

##### Meaning

`const` ka use tab hota hai jab value ek baar assign hone ke baad change nahi karni hoti.

##### Example

```javascript
const accountId = 144553;

// accountId = 2; // Not allowed
````

##### Important Point

Agar `const` variable ko dobara value assign karenge, to error aayega:

```javascript
TypeError: Assignment to constant variable
```

##### Use Case

`const` use karo jab value fixed ho:

- account id
    
- date of birth
    
- API key
    
- fixed configuration value
    

---

#### `let`

##### Meaning

`let` ka use tab hota hai jab value future mein change ho sakti hai.

##### Example

```javascript
let accountEmail = "hitesh@google.com";

accountEmail = "hc@hc.com";
```

##### Important Point

`let` variable ki value ko re-assign kar sakte hain.

##### Use Case

`let` use karo jab value change ho sakti ho:

- email
    
- score
    
- count
    
- username
    
- current status
    

---

#### `var`

##### Meaning

`var` JavaScript mein variable declare karne ka old way hai.

##### Problem

`var` mein scope ka issue hota hai.  
Isliye modern JavaScript mein `var` avoid karna chahiye.

##### Best Practice

```javascript
// Avoid this
var accountPassword = "12345";
```

Modern JavaScript mein prefer karo:

```javascript
let accountPassword = "12345";
```

---

#### Scope

##### Meaning

JavaScript mein curly braces `{}` ke andar jo area hota hai, use scope kehte hain.

Example:

```javascript
{
  let name = "Aayush";
}
```

Yahaan `{}` ke andar ka area scope hai.

---

#### `var` vs `let`

##### `var` ka issue

`var` block scope ko properly follow nahi karta.

Example:

```javascript
var accountPassword = "123";

{
  var accountPassword = "456";
}

console.log(accountPassword);
```

##### Output

```javascript
456
```

##### Problem

Block ke andar value change karne se bahar wali value bhi change ho gayi.

---

##### `let` ka solution

`let` block scope follow karta hai.

Example:

```javascript
let accountPassword = "123";

{
  let accountPassword = "456";
}

console.log(accountPassword);
```

##### Output

```javascript
123
```

##### Meaning

Block ke andar wali value bahar wali value ko disturb nahi karti.

---

#### Bina keyword ke variable banana

JavaScript mein bina `let`, `const`, ya `var` ke bhi variable ban sakta hai.

Example:

```javascript
accountCity = "Jaipur";
```

##### Important Point

Ye allowed ho sakta hai, lekin bad practice hai.  
Production code mein kabhi use nahi karna chahiye.

##### Correct Way

```javascript
let accountCity = "Jaipur";
```

---

#### Undefined

##### Meaning

Agar variable declare kar diya, lekin value assign nahi ki, to JavaScript uski value `undefined` rakhta hai.

##### Example

```javascript
let accountState;

console.log(accountState);
```

##### Output

```javascript
undefined
```

---

#### console.table()

##### Meaning

`console.table()` multiple values ko table format mein show karta hai.

##### Example

```javascript
const accountId = 144553;
let accountEmail = "hitesh@google.com";
let accountPassword = "12345";
let accountCity = "Jaipur";
let accountState;

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
]);
```

##### Benefit

Isse output clean table format mein dikhta hai.

---

#### Final Best Practices

##### Use `const`

Jab value change nahi karni ho.

##### Use `let`

Jab value change ho sakti ho.

##### Avoid `var`

Kyuki `var` mein scope problems hoti hain.

##### Never create variables without keyword

Hamesha `let`, `const`, ya required case mein hi keyword use karo.

---

#### Quick Revision

|Keyword|Reassign Allowed|Scope|Use|
|---|---|---|---|
|`const`|No|Block scope|Fixed value|
|`let`|Yes|Block scope|Changeable value|
|`var`|Yes|Function scope|Avoid|

---

#### Short Summary

`const` fixed values ke liye use hota hai.  
`let` changeable values ke liye use hota hai.  
`var` old way hai aur avoid karna chahiye.  
Agar variable declare karke value assign nahi karte, to uski value `undefined` hoti hai.  
Multiple values ko clean format mein dekhne ke liye `console.table()` use karte hain.

---

