## 📘 Inner Classes (Java) — Exam-Oriented Notes

---

### 🔹 Definition

An **Inner Class** is a class defined **inside another class** in Java.  
It helps in **logical grouping**, **encapsulation**, and **access to outer class members**.

---

### 🔹 Key Points (Very Important)

- Inner class is **associated with outer class**
- Can access **private members** of outer class
- Improves **code readability & security**
- Used when a class is **only relevant to another class**

---

## 🔹 Types of Inner Classes

---

### 1️⃣ Member Inner Class (Non-static)

#### ✔ Definition:

A class defined **inside another class (not static)**

#### ✔ Syntax:

```java
class Outer {
    int x = 10;

    class Inner {
        void display() {
            System.out.println(x); // accessing outer class
        }
    }
}
```

#### ✔ Object Creation:

```java
Outer obj = new Outer();
Outer.Inner in = obj.new Inner();
in.display();
```

#### ✔ Key Points:

- Requires **outer class object**
- Can access **all members of outer class**

---

### 2️⃣ Static Nested Class

#### ✔ Definition:

Inner class declared with `static`

#### ✔ Syntax:

```java
class Outer {
    static int x = 20;

    static class Inner {
        void show() {
            System.out.println(x);
        }
    }
}
```

#### ✔ Object Creation:

```java
Outer.Inner obj = new Outer.Inner();
obj.show();
```

#### ✔ Key Points:

- No need of outer class object
- Can access only **static members**

---

### 3️⃣ Local Inner Class

#### ✔ Definition:

Defined **inside a method**

#### ✔ Syntax:

```java
class Outer {
    void display() {
        class Inner {
            void msg() {
                System.out.println("Hello");
            }
        }
        Inner obj = new Inner();
        obj.msg();
    }
}
```

#### ✔ Key Points:

- Scope limited to **method**
- Cannot be accessed outside method
- Can use **final or effectively final variables**

---

### 4️⃣ Anonymous Inner Class

#### ✔ Definition:

Class **without name**, used for **one-time use**

#### ✔ Syntax:

```java
abstract class Animal {
    abstract void sound();
}

class Test {
    public static void main(String[] args) {
        Animal obj = new Animal() {
            void sound() {
                System.out.println("Dog barks");
            }
        };
        obj.sound();
    }
}
```

#### ✔ Key Points:

- No class name
- Used for **quick implementation**
- Mostly used with **interfaces & abstract classes**

---

## 🔹 Advantages

- Better **encapsulation**
- Improves **code organization**
- Reduces **namespace pollution**
- Useful in **event handling (GUI, listeners)**

---

## 🔹 Disadvantages

- Makes code **complex** if overused
- Harder to **read & debug**

---

## 🔹 Important Exam Questions

### 🔸 Short Questions

1. What is an inner class in Java?
2. List types of inner classes
3. Difference between inner class and static nested class
4. What is anonymous inner class?

### 🔸 Long Questions

1. Explain all types of inner classes with examples
2. Write a program using member inner class
3. Compare static nested class and non-static inner class
4. Explain anonymous class with real example

---

## 🔹 Quick Revision (Last Day)

- 4 Types → **Member, Static, Local, Anonymous**
- Member → needs object
- Static → no object
- Local → inside method
- Anonymous → no name

---

If you want, I can convert this into:

- 📄 **PDF notes**
- 🧠 **Mind map**
- ✍️ **Handwritten notes (paper style)**

Next topic bhejo 👍