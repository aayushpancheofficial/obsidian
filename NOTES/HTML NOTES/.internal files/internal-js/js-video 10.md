````markdown
#### Stack and Heap Memory in JavaScript

##### JavaScript Memory Management

JavaScript mein memory management mostly automatic hota hai.

Purani languages jaise C mein developer ko memory manually allocate aur free karni padti thi.  
JavaScript mein garbage collection automatically unused memory clean karta hai.

---

#### Memory Types in JavaScript

JavaScript mein memory mainly 2 parts mein divide hoti hai:

- Stack Memory
- Heap Memory

---

#### Stack Memory

##### Meaning

Stack memory primitive data types ke liye use hoti hai.

##### Primitive Data Types

- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

##### Mechanism

Stack memory mein value ki copy milti hai.  
Isse **Call by Value** kehte hain.

---

##### Example

```javascript
let myYoutubeName = "hiteshchoudharydotcom";

let anotherName = myYoutubeName;

anotherName = "chai aur code";

console.log(myYoutubeName);
console.log(anotherName);
````

##### Output

```javascript
hiteshchoudharydotcom
chai aur code
```

##### Explanation

`anotherName` ko `myYoutubeName` ki copy mili thi.  
Isliye `anotherName` change karne se `myYoutubeName` change nahi hua.

---

#### Heap Memory

##### Meaning

Heap memory non-primitive data types ke liye use hoti hai.

##### Non-Primitive Data Types

- Objects
    
- Arrays
    
- Functions
    

##### Mechanism

Heap memory mein original reference milta hai.  
Isse **Call by Reference** kehte hain.

---

##### Example

```javascript
let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);
```

##### Output

```javascript
hitesh@google.com
hitesh@google.com
```

##### Explanation

`userOne` aur `userTwo` dono same object ke reference ko point kar rahe the.  
Isliye `userTwo.email` change karne par `userOne.email` bhi change ho gaya.

---

#### Stack vs Heap Memory

|Point|Stack Memory|Heap Memory|
|---|---|---|
|Data Type|Primitive|Non-Primitive|
|Examples|String, Number, Boolean|Object, Array, Function|
|Access|Copy milti hai|Reference milta hai|
|Called As|Call by Value|Call by Reference|
|Change Effect|Original value change nahi hoti|Original value change ho sakti hai|
|Speed|Fast|Comparatively slower|

---

#### Quick Revision

##### Stack

- Primitive data store karta hai
    
- Copy milti hai
    
- Original value safe rehti hai
    

##### Heap

- Non-primitive data store karta hai
    
- Reference milta hai
    
- Ek jagah change karne par dusri jagah bhi effect ho sakta hai
    

---

#### Short Summary

Stack memory primitive values ke liye hoti hai.  
Heap memory objects, arrays aur functions ke liye hoti hai.

Primitive values copy hoti hain.  
Non-primitive values reference se access hoti hain.

Isliye primitive value change karne se original variable affect nahi hota, lekin object ya array change karne se original data affect ho sakta hai.