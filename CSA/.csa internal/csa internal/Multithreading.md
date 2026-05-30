## 🧵 Multithreading in Java — Complete Notes (Exam + Practical)

---

## 🔹 1. Thread Concept

A **thread** is the **smallest unit of execution** inside a program.

👉 In Java:

- Each program has at least one thread → **main thread**
- Multiple threads can run **concurrently**

✅ Correct sentence (English boost):  
**“A thread is a lightweight unit of execution within a process.”**

---

## 🔹 2. Thread Class

Java provides a built-in class:

👉 `Thread` class (from `java.lang` package)

### ✅ Methods:

- `start()` → starts thread
- `run()` → contains task
- `sleep(ms)` → pause thread
- `join()` → wait for thread
- `setPriority()` → set importance

---

### 💻 Example (Thread Class)

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();  // start thread
    }
}
```

---

## 🔹 3. Runnable Interface

👉 Java uses **Interface (Java) to achieve multithreading in a better way.

### Why Runnable?

- Java supports **single inheritance**
- So instead of extending Thread → implement Runnable

---

### 💻 Example (Runnable)

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread using Runnable");
    }
}

public class Main {
    public static void main(String[] args) {
        MyRunnable obj = new MyRunnable();
        Thread t1 = new Thread(obj);
        t1.start();
    }
}
```

---

## 🔹 4. Creating Custom Threads

### ✅ Two Ways:

1. Extend `Thread` class
2. Implement `Runnable` interface (Best Practice)

👉 Modern Java also uses:

- Lambda expressions (advanced)

```java
Thread t = new Thread(() -> {
    System.out.println("Custom thread");
});
t.start();
```

---

## 🔹 5. Thread Life Cycle

```
New → Runnable → Running → Waiting → Terminated
```

### Explanation:

- **New** → Created
- **Runnable** → Ready
- **Running** → Executing
- **Waiting** → Sleep/Wait
- **Terminated** → Finished

---

## 🔹 6. Thread Synchronization

👉 Used to **control access to shared resources**

### ⚠️ Problem: Race Condition

```java
// Without synchronization → wrong output
```

---

### ✅ Solution: synchronized

```java
class Counter {
    int count = 0;

    synchronized void increment() {
        count++;
    }
}
```

👉 Only one thread can access method at a time

---

## 🔹 7. Inter-Thread Communication

Methods:

- `wait()`
- `notify()`
- `notifyAll()`

👉 Used when threads depend on each other

---

## 🔹 8. Thread Methods (Important for Exams)

|Method|Use|
|---|---|
|`start()`|Start thread|
|`run()`|Task|
|`sleep()`|Pause|
|`join()`|Wait|
|`isAlive()`|Check running|
|`setPriority()`|Priority|
|`interrupt()`|Stop safely|

---

## 🔹 9. Thread Priority

```java
t1.setPriority(Thread.MAX_PRIORITY);
```

Levels:

- MIN_PRIORITY (1)
- NORM_PRIORITY (5)
- MAX_PRIORITY (10)

---

## 🔹 10. Daemon Thread

👉 Background thread (like garbage collector)

```java
t1.setDaemon(true);
```

---

## 🔹 11. Synchronization Problems

### ⚠️ Deadlock

Two threads waiting forever

### ⚠️ Starvation

Low priority thread never runs

---

## 🔹 12. Real-Life Example

📱 Mobile App:

- UI thread → display
- Background thread → data loading
- Network thread → API calls

---

## 🔹 13. Best Practices

✔ Use Runnable instead of Thread  
✔ Avoid shared data when possible  
✔ Use synchronization carefully  
✔ Use modern APIs (ExecutorService)

---

## 🔹 14. Advanced (For Higher Level 🚀)

- Executor Framework
- Thread Pool
- Callable & Future
- Parallel Streams

---

## 🔹 15. Quick Revision

👉 Multithreading = running multiple threads simultaneously  
👉 Thread = smallest unit of execution  
👉 Two ways → Thread class / Runnable  
👉 Synchronization = avoid data conflict

---

## 🧠 English Communication Upgrade

❌ “Thread run ho raha hai”  
✅ **“The thread is executing.”**

❌ “Do thread ek sath kaam kar rahe hain”  
✅ **“Two threads are running concurrently.”**

---

## 🎯 If you want next step:

I can give you:

- 📒 Handwritten-style notes (exam ready)
- ❓ Viva questions + answers
- 💻 Mini project (Java multithreading)
- 🔥 Deadlock + synchronization visualization

Just tell me 👍