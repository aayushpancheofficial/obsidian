#### Array Processors in CSA / COA

##### Meaning

**Array Processor** ek special type ka processor hota hai jo **large amount of data par same operation simultaneously** perform karta hai.

Simple words me:

> Jab same instruction ko multiple data elements par ek saath apply kiya jata hai, use Array Processing kehte hain.

Example:

```text
A = [1, 2, 3, 4]
B = [5, 6, 7, 8]

C = A + B
C = [6, 8, 10, 12]
```

Yahan addition operation same hai, but data elements multiple hain.

---

#### Definition

##### Array Processor

An **array processor** is a processor that performs computations on large arrays or vectors of data by applying the same operation to multiple data elements simultaneously.

---

#### Why Array Processor is Needed?

Normal processor ek time par mostly ek operation karta hai.

But scientific and engineering applications me large data hota hai, jaise:

- Matrix multiplication
    
- Image processing
    
- Weather forecasting
    
- Signal processing
    
- Scientific simulations
    
- AI / ML computations
    

In sab me same type ke operations baar-baar repeat hote hain.

So, speed badhane ke liye **Array Processor** use hota hai.

---

#### Basic Idea of Array Processor

##### Normal Processing

```text
A1 + B1
A2 + B2
A3 + B3
A4 + B4
```

Normal CPU ye operations one by one karega.

##### Array Processing

```text
A1 + B1
A2 + B2
A3 + B3
A4 + B4
```

Array processor ye operations parallel me kar sakta hai.

---

#### Block Diagram of Array Processor

```text
                Control Unit
                     |
                     v
        ----------------------------
        |                          |
        v                          v
   Processing Element 1       Processing Element 2
        |                          |
        v                          v
      Data 1                     Data 2

        ----------------------------
        |                          |
        v                          v
   Processing Element 3       Processing Element 4
        |                          |
        v                          v
      Data 3                     Data 4
```

##### Main Components

###### 1. Control Unit

- Instructions ko control karta hai.
    
- Sabhi processing elements ko same instruction bhejta hai.
    

###### 2. Processing Elements

- Ye small processors hote hain.
    
- Har processing element ek data item par operation perform karta hai.
    

###### 3. Memory Unit

- Data arrays store karta hai.
    
- Input aur output data memory me rakha jata hai.
    

###### 4. Interconnection Network

- Processing elements aur memory ke beech communication provide karta hai.
    

---

#### Working of Array Processor

Array processor me ek **Control Unit** hota hai jo same instruction ko multiple **Processing Elements** ko send karta hai.

Har processing element different data item par same operation perform karta hai.

Example:

```text
Instruction: ADD

PE1: A1 + B1
PE2: A2 + B2
PE3: A3 + B3
PE4: A4 + B4
```

Final result:

```text
C1, C2, C3, C4
```

---

#### Types of Array Processors

Array processors mainly 2 types ke hote hain:

```text
1. Attached Array Processor
2. SIMD Array Processor
```

---

### 1. Attached Array Processor

##### Meaning

Attached array processor ek auxiliary processor hota hai jo main computer ke saath attach hota hai.

Ye main CPU ki help karta hai high-speed mathematical calculations perform karne me.

##### Explanation

Main CPU general-purpose tasks perform karta hai, aur array processor special numerical computations perform karta hai.

```text
Main CPU  --->  Attached Array Processor  --->  Result
```

##### Features

- Main CPU ke saath connected hota hai.
    
- Scientific calculations ke liye useful hota hai.
    
- Main CPU ka workload reduce karta hai.
    
- Large arrays aur vectors par fast computation karta hai.
    

##### Example

Floating point calculations, matrix operations, vector operations.

---

### 2. SIMD Array Processor

##### SIMD Meaning

**SIMD = Single Instruction Multiple Data**

##### Meaning

SIMD array processor me ek single control unit hota hai jo same instruction ko multiple processing elements ko send karta hai.

Har processing element different data par same instruction execute karta hai.

```text
Single Instruction → Multiple Data
```

##### Example

```text
Instruction: ADD

PE1: A1 + B1
PE2: A2 + B2
PE3: A3 + B3
PE4: A4 + B4
```

##### Features

- Same instruction multiple data par apply hoti hai.
    
- Multiple processing elements hote hain.
    
- Highly parallel processing provide karta hai.
    
- Vector and matrix operations ke liye best hota hai.
    

---

#### SIMD Array Processor Diagram

```text
                 Control Unit
                      |
          Same Instruction Broadcast
                      |
    -------------------------------------
    |           |           |           |
    v           v           v           v
   PE1         PE2         PE3         PE4
    |           |           |           |
   D1          D2          D3          D4
```

---

#### Array Processor and Vector Processor Difference

|Basis|Array Processor|Vector Processor|
|---|---|---|
|Operation|Multiple processing elements use karta hai|Vector registers use karta hai|
|Execution|Parallel execution|Pipelined execution|
|Data|Array data|Vector data|
|Hardware|Many processing elements|Vector functional units|
|Speed|Very high for parallel tasks|High for vector operations|
|Example|SIMD machine|Vector supercomputer|

---

#### Advantages of Array Processor

- High-speed computation
    
- Parallel processing support
    
- Large data handling
    
- Best for scientific applications
    
- CPU workload reduce karta hai
    
- Matrix and vector operations fast karta hai
    
- Image and signal processing me useful
    

---

#### Disadvantages of Array Processor

- Hardware cost high hoti hai
    
- Programming complex ho sakti hai
    
- General-purpose tasks ke liye suitable nahi hota
    
- Memory management difficult ho sakta hai
    
- Sabhi problems parallel form me solve nahi hoti
    

---

#### Applications of Array Processor

- Scientific computing
    
- Weather forecasting
    
- Image processing
    
- Signal processing
    
- Matrix multiplication
    
- Artificial Intelligence
    
- Machine Learning
    
- Computer graphics
    
- Medical imaging
    
- Simulation systems
    

---

#### Important Exam Points

##### Short Answer

Array processor is a processor that performs the same operation on multiple data elements simultaneously using parallel processing.

##### Key Words

- Parallel processing
    
- SIMD
    
- Processing elements
    
- Control unit
    
- Multiple data
    
- Vector and matrix operations
    
- Scientific computation
    

##### 5 Marks Answer Structure

1. Definition
    
2. Need
    
3. Diagram
    
4. Working
    
5. Types
    
6. Advantages
    
7. Applications
    

---

#### Simple Example for Exam

Suppose two arrays are:

```text
A = [10, 20, 30, 40]
B = [1, 2, 3, 4]
```

Instruction:

```text
ADD A and B
```

Array processor performs:

```text
PE1: 10 + 1 = 11
PE2: 20 + 2 = 22
PE3: 30 + 3 = 33
PE4: 40 + 4 = 44
```

Result:

```text
C = [11, 22, 33, 44]
```

---

#### Final Summary

Array Processor ek parallel processing system hai jo same instruction ko multiple data items par simultaneously apply karta hai. Isme multiple processing elements hote hain jo ek control unit ke under kaam karte hain. Ye scientific, engineering, image processing, matrix calculation aur AI applications me high-speed computation ke liye use hota hai.