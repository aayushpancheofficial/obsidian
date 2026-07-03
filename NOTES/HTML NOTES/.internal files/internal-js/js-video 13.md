 markdown
#### Date and Time in JavaScript

##### 1. Date Object

###### Simple Meaning
`Date` JavaScript ka object hai jo date aur time ko handle karta hai.

###### Code
```javascript
let myDate = new Date();
console.log(typeof myDate);
````

###### Output

```javascript
object
```

###### Remember

- Date ka type = `object`
    
- Date internally milliseconds mein store hoti hai
    
- Count start hota hai: `1 January 1970`
    

---

##### 2. Date ko readable banana

|Method|Kya dikhata hai|
|---|---|
|`toString()`|Full date + time + timezone|
|`toDateString()`|Sirf date|
|`toLocaleString()`|Local format mein date + time|

###### Code

```javascript
let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
```

---

##### 3. Custom Date banana

###### Code

```javascript
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());
```

###### Output

```javascript
Mon Jan 23 2023
```

###### Important

Number format mein month `0` se start hota hai.

|Number|Month|
|---|---|
|0|January|
|1|February|
|2|March|

---

##### 4. Date with Time

```javascript
let dateWithTime = new Date(2023, 0, 23, 5, 3);
```

Meaning:

|Value|Meaning|
|---|---|
|2023|Year|
|0|January|
|23|Date|
|5|Hour|
|3|Minute|

---

##### 5. String Date Format

```javascript
let date1 = new Date("2023-01-14");
let date2 = new Date("01-14-2023");
```

###### Note

String format mein month normally `1` se start hota hai.

---

##### 6. Timestamp

###### Meaning

Timestamp ka use time compare karne ke liye hota hai.

###### Use Cases

- quiz timer
    
- booking app
    
- poll
    
- countdown
    
- time tracking
    

###### Current Timestamp

```javascript
console.log(Date.now());
```

###### Specific Date Timestamp

```javascript
let myDate = new Date("2023-01-14");
console.log(myDate.getTime());
```

---

##### 7. Milliseconds to Seconds

```javascript
let seconds = Math.floor(Date.now() / 1000);
console.log(seconds);
```

###### Why Math.floor?

Decimal remove karne ke liye.

---

##### 8. Specific Values nikalna

|Method|Use|
|---|---|
|`getMonth()`|Month number|
|`getDay()`|Week day|
|`getFullYear()`|Year|

###### Code

```javascript
let myDate = new Date();

console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());
console.log(myDate.getFullYear());
```

###### Remember

`getMonth()` ke saath `+1` lagao.

---

##### 9. Custom Locale Format

```javascript
let myDate = new Date();

console.log(
  myDate.toLocaleString("default", {
    weekday: "long",
    timeZone: "Asia/Kolkata"
  })
);
```

###### Output Example

```text
Monday
```

---

##### Final One Look Revision

|Concept|Important Point|
|---|---|
|`Date`|Object hota hai|
|Epoch Time|1 Jan 1970 se count|
|Storage|Milliseconds|
|`Date.now()`|Current timestamp|
|`getTime()`|Specific date timestamp|
|`getMonth()`|0 se start hota hai|
|`toLocaleString()`|Custom readable format|

---

##### Short Summary

`Date` JavaScript ka object hai.  
Ye date aur time ko milliseconds mein handle karta hai.  
Readable format ke liye `toString()`, `toDateString()`, `toLocaleString()` use hote hain.  
Time compare karne ke liye `Date.now()` aur `getTime()` use hote hain.  
Month number format mein 0 se start hota hai.