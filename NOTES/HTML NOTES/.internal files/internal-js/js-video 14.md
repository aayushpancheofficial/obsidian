
#### Array in JavaScript

##### 1. Array kya hota hai?

###### Simple Meaning
Array ek single variable hota hai jisme multiple values store kar sakte hain.

###### Example
```javascript
const myArr = [0, 1, 2, true, "Hitesh"];
````

###### Remember

- Array multiple elements store karta hai
    
- Mixed data types allowed hain
    
- Array resizable hota hai
    
- Index `0` se start hota hai
    

---

##### 2. Zero-Based Indexing

###### Example

```javascript
const myArr = [10, 20, 30];

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
```

###### Output

```javascript
10
20
30
```

###### Remember

|Index|Value|
|---|---|
|0|10|
|1|20|
|2|30|

---

##### 3. Shallow Copy vs Deep Copy

###### Shallow Copy

Shallow copy same reference share karti hai.

Agar copied array mein change karoge, to original array bhi affect ho sakta hai.

###### Deep Copy

Deep copy original reference share nahi karti.

Dono arrays independent hote hain.

---

##### 4. Basic Array Methods

###### push()

Array ke end mein element add karta hai.

```javascript
const arr = [1, 2, 3];

arr.push(4);

console.log(arr);
```

###### Output

```javascript
[1, 2, 3, 4]
```

---

###### pop()

Array ke last element ko remove karta hai.

```javascript
const arr = [1, 2, 3];

arr.pop();

console.log(arr);
```

###### Output

```javascript
[1, 2]
```

---

###### unshift()

Array ke start mein element add karta hai.

```javascript
const arr = [1, 2, 3];

arr.unshift(0);

console.log(arr);
```

###### Output

```javascript
[0, 1, 2, 3]
```

###### Note

`unshift()` thoda unoptimized hota hai kyuki baaki elements ko shift karna padta hai.

---

###### shift()

Array ke first element ko remove karta hai.

```javascript
const arr = [1, 2, 3];

arr.shift();

console.log(arr);
```

###### Output

```javascript
[2, 3]
```

---

##### 5. Search Methods

###### includes()

Check karta hai ki value array mein hai ya nahi.

```javascript
const arr = [1, 2, 3];

console.log(arr.includes(2));
```

###### Output

```javascript
true
```

###### Return Type

```text
boolean
```

---

###### indexOf()

Element ka index return karta hai.

```javascript
const arr = [1, 2, 3];

console.log(arr.indexOf(3));
console.log(arr.indexOf(9));
```

###### Output

```javascript
2
-1
```

###### Remember

Agar element nahi milta, to `-1` return hota hai.

---

##### 6. join()

###### Meaning

`join()` array ke elements ko string mein convert karta hai.

###### Example

```javascript
const arr = [1, 2, 3];

const newArr = arr.join();

console.log(newArr);
console.log(typeof newArr);
```

###### Output

```javascript
1,2,3
string
```

---

##### 7. slice() vs splice()

###### Main Difference

| Feature        | slice()           | splice()                            |
| -------------- | ----------------- | ----------------------------------- |
| Original array | Change nahi hota  | Change ho jata hai                  |
| End index      | Include nahi hota | Count ke hisaab se remove karta hai |
| Return         | Selected part     | Removed part                        |

---

###### slice()

```javascript
const myArr = [0, 1, 2, 3, 4, 5];

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log(myArr);
```

###### Output

```javascript
[1, 2]
[0, 1, 2, 3, 4, 5]
```

###### Remember

`slice()` original array ko change nahi karta.

---

###### splice()

```javascript
const myArr = [0, 1, 2, 3, 4, 5];

const myn2 = myArr.splice(1, 3);

console.log(myn2);
console.log(myArr);
```

###### Output

```javascript
[1, 2, 3]
[0, 4, 5]
```

###### Remember

`splice()` original array ko change kar deta hai.

---

##### 8. Quick Revision Table

| Method       | Use                           |
| ------------ | ----------------------------- |
| `push()`     | end mein add                  |
| `pop()`      | last element remove           |
| `unshift()`  | start mein add                |
| `shift()`    | first element remove          |
| `includes()` | value exist karti hai ya nahi |
| `indexOf()`  | value ka index                |
| `join()`     | array to string               |
| `slice()`    | part copy, original safe      |
| `splice()`   | part remove, original change  |

---

##### Short Summary

Array ek variable mein multiple values store karta hai.

Array zero-based indexing follow karta hai.

JavaScript arrays mixed data types store kar sakte hain.

`push`, `pop`, `shift`, `unshift` array modify karte hain.

`includes` aur `indexOf` search ke liye use hote hain.

`join()` array ko string mein convert karta hai.

`slice()` original array ko change nahi karta.

`splice()` original array ko change kar deta hai.