# Getter, Setter & Stack Overflow (JavaScript)

> 📺 **Source:** Getter Setter and Stack Overflow | Chai aur Code

---

# 🎯 What are Getters & Setters?

Getters and Setters are special methods that control **how a property is read and updated**.

Instead of accessing a variable directly, JavaScript can run a function whenever someone **gets** or **sets** its value.

### Why use them?

- ✅ Validate data
    
- ✅ Modify data before storing
    
- ✅ Format data before returning
    
- ✅ Hide internal implementation
    
- ✅ Add security or business logic
    

---

# Syntax

```javascript
class User {
    get propertyName() {
        // Runs when property is read
    }

    set propertyName(value) {
        // Runs when property is updated
    }
}
```

---

# Example

```javascript
class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        this._name = value;
    }
}

const user = new User("aayush");

console.log(user.name);
// AAYUSH

user.name = "chai";
console.log(user.name);
// CHAI
```

---

# How Getter Works

When we read a property:

```javascript
console.log(user.name);
```

JavaScript actually executes

```javascript
get name()
```

instead of directly returning the variable.

---

# How Setter Works

When we assign

```javascript
user.name = "Hitesh";
```

JavaScript actually executes

```javascript
set name(value)
```

The assigned value becomes

```javascript
value
```

---

# Why Getters & Setters are Useful

### Validation

```javascript
set password(value){
    if(value.length < 8){
        console.log("Weak Password");
        return;
    }

    this._password = value;
}
```

---

### Formatting Output

```javascript
get email(){
    return this._email.toUpperCase();
}
```

Output

```
abc@gmail.com
```

becomes

```
ABC@GMAIL.COM
```

---

### Data Hiding

Users access

```javascript
user.password
```

but internally JavaScript stores

```javascript
_password
```

The user never knows how the value is actually stored.

---

# ⚠️ Common Beginner Mistake

## Maximum Call Stack Size Exceeded

This is one of the most common mistakes while learning getters and setters.

---

# Wrong Code

```javascript
class User {

    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this.password.toUpperCase();
    }

    set password(value){
        this.password = value;
    }

}
```

---

# What Happens?

### Step 1

Constructor runs

```javascript
this.password = password;
```

↓

Calls

```javascript
set password()
```

---

### Step 2

Inside setter

```javascript
this.password = value;
```

↓

Again calls

```javascript
set password()
```

---

### Step 3

Setter keeps calling itself forever.

```
Setter
 ↓
Setter
 ↓
Setter
 ↓
Setter
 ↓
Setter
```

Infinite recursion.

---

# Result

```
RangeError:
Maximum call stack size exceeded
```

Meaning:

The function keeps calling itself until JavaScript's call stack becomes full.

---

# Why Does This Happen?

Because

```javascript
this.password
```

is **not** the real variable.

It is the **property**.

Whenever JavaScript sees

```javascript
this.password = something
```

it automatically calls

```javascript
set password()
```

again.

---

# ✅ Solution: Backing Field

Store data in a **different variable**.

Convention:

```
_property
```

Example

```
_password

_email

_username
```

---

# Correct Code

```javascript
class User {

    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }

}
```

---

# Flow

```
Constructor

↓

this.password = "abc"

↓

Setter Runs

↓

this._password = "abc"

↓

Value Stored

↓

Getter Reads _password

↓

Returns ABC
```

No recursion.

No error.

---

# Output

```javascript
const user = new User("a@gmail.com","abc");

console.log(user.password);
```

Output

```
ABC
```

---

# Modifying Returned Data

Getter can return modified data.

```javascript
get password(){
    return this._password.toUpperCase() + "hitesh";
}
```

Output

```
ABChitesh
```

The original value remains

```
abc
```

Only the returned value changes.

---

# Important Concept

Outside the class

```javascript
user.password
```

Inside the class

```javascript
this._password
```

The outside world never interacts directly with `_password`.

---

# Alternative Method 1

## Object.defineProperty()

Before ES6 Classes, getters and setters were created using `Object.defineProperty()`.

```javascript
function User(email,password){

    this._email = email;
    this._password = password;

    Object.defineProperty(this,"email",{

        get:function(){
            return this._email.toUpperCase();
        },

        set:function(value){
            this._email = value;
        }

    });

}
```

---

# Syntax

```javascript
Object.defineProperty(object, propertyName, {

    get(){},

    set(value){}

})
```

---

# Alternative Method 2

## Object Literal

```javascript
const User = {

    _email:"abc@gmail.com",

    _password:"123",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }

};

const tea = Object.create(User);

console.log(tea.email);
```

Output

```
ABC@GMAIL.COM
```

---

# Private Properties

## Old Way

```javascript
_password
```

This is only a **developer convention**.

It is **not truly private**.

```javascript
console.log(user._password);
```

This still works.

---

# Modern JavaScript Private Fields

ES2022 introduced

```javascript
#
```

for real private properties.

Example

```javascript
class User {

    #password;

    constructor(password){
        this.#password = password;
    }

}
```

Outside the class

```javascript
console.log(user.#password);
```

Output

```
SyntaxError
```

JavaScript completely blocks direct access.

---

# `_` vs `#`

|`_property`|`#property`|
|---|---|
|Convention only|Truly private|
|Accessible outside|Not accessible|
|No compiler restriction|Compiler throws error|
|Older approach|ES2022+ feature|

---

# Getter vs Setter

|Getter|Setter|
|---|---|
|Reads data|Updates data|
|Uses `get`|Uses `set`|
|Takes no parameter|Takes one parameter|
|Returns a value|Usually returns nothing|

---

# Important Rules

- If you create a **getter**, you should also create its corresponding **setter** (when the property needs to be writable).
    
- Never store values inside the same property handled by the setter.
    

❌ Wrong

```javascript
this.password = value;
```

✅ Correct

```javascript
this._password = value;
```

- Use `_property` or `#property` as the internal storage.
    
- Outside the class, always access the public property:
    

```javascript
user.password
```

---

# Interview Questions

### What are getters and setters?

Special methods that control how object properties are read and updated.

---

### Why do we use getters and setters?

- Validation
    
- Data formatting
    
- Encapsulation
    
- Security
    
- Controlled access
    

---

### Why does "Maximum Call Stack Size Exceeded" occur?

Because the setter keeps calling itself recursively by assigning to the same property (`this.password`), creating an infinite loop until the call stack overflows.

---

### What is a Backing Field?

An internal variable (commonly prefixed with `_`) used to store the actual value, preventing recursive getter/setter calls.

Example:

```javascript
_password
```

---

### Difference between `_password` and `#password`?

- `_password` is a naming convention and can still be accessed.
    
- `#password` is a true private field introduced in ES2022 and cannot be accessed outside the class.
    

---

# 📌 Quick Revision

- Getter → Runs when reading a property.
    
- Setter → Runs when updating a property.
    
- Never assign to the same property inside its setter.
    
- Use a backing field (`_property`) to avoid recursion.
    
- `Object.defineProperty()` was the pre-ES6 approach.
    
- `Object.create()` can also define getters and setters on object literals.
    
- `_property` is a convention; `#property` provides real privacy.
    
- The error **"Maximum Call Stack Size Exceeded"** is caused by infinite recursive calls that overflow the call stack.