#### 4. Arithmetic Pipeline

##### Meaning

**Arithmetic Pipeline** is a technique used to perform arithmetic operations in multiple stages.

Simple words:  
Arithmetic pipeline me arithmetic operation ko chhote-chhote steps me divide kiya jata hai, aur har step ko alag stage me perform kiya jata hai.

##### Definition

**Arithmetic pipeline is a pipeline used for arithmetic operations by dividing complex arithmetic tasks into different sub-operations and executing them in overlapped stages.**

##### Basic Idea

Arithmetic operations like:

- Addition
    
- Subtraction
    
- Multiplication
    
- Division
    
- Floating-point operations
    

can be divided into smaller stages.

Example:  
Floating-point addition can be divided into:

1. Compare exponents
    
2. Align mantissas
    
3. Add/Subtract mantissas
    
4. Normalize result
    

##### Diagram

```text
Input Numbers
     ↓
Stage 1: Compare Exponents
     ↓
Stage 2: Align Mantissa
     ↓
Stage 3: Add/Subtract Mantissa
     ↓
Stage 4: Normalize Result
     ↓
Final Result
```

##### Floating-Point Addition Pipeline

|Stage|Operation|
|---|---|
|Stage 1|Compare exponents|
|Stage 2|Align mantissa|
|Stage 3|Add/Subtract mantissa|
|Stage 4|Normalize result|

##### Example

Suppose we want to add two floating-point numbers:

```text
A = 0.456 × 10³
B = 0.789 × 10²
```

###### Step 1: Compare Exponents

A ka exponent = 3  
B ka exponent = 2

So, A ka exponent bada hai.

###### Step 2: Align Mantissa

B ko exponent 3 ke according adjust karte hain:

```text
B = 0.0789 × 10³
```

###### Step 3: Add Mantissas

```text
0.456 + 0.0789 = 0.5349
```

###### Step 4: Normalize Result

```text
Result = 0.5349 × 10³
```

##### Arithmetic Pipeline Working

|Clock Cycle|Operation 1|Operation 2|Operation 3|
|---|---|---|---|
|1|Stage 1|-|-|
|2|Stage 2|Stage 1|-|
|3|Stage 3|Stage 2|Stage 1|
|4|Stage 4|Stage 3|Stage 2|
|5|-|Stage 4|Stage 3|
|6|-|-|Stage 4|

##### Advantages

###### 1. Fast Arithmetic Operations

Complex arithmetic operations quickly perform hoti hain.

###### 2. High Throughput

Ek time par multiple operations process ho sakte hain.

###### 3. Efficient for Floating-Point Operations

Scientific calculation, graphics, AI, and signal processing me useful hota hai.

###### 4. Better Hardware Utilization

Arithmetic unit ke different parts continuously kaam karte hain.

##### Disadvantages

###### 1. Complex Design

Arithmetic pipeline ka design simple ALU se complex hota hai.

###### 2. Pipeline Hazards

Data dependency ke karan delay aa sakta hai.

###### 3. Costly Hardware

Extra registers aur control logic ki need hoti hai.

###### 4. Not Useful for Small Operations

Simple operations ke liye pipeline overhead zyada ho sakta hai.

##### Applications

- Floating-point processors
    
- Digital signal processing
    
- Scientific computing
    
- Graphics processing
    
- AI/ML calculations
    
- Supercomputers
    

##### Difference Between Instruction Pipeline and Arithmetic Pipeline

|Basis|Instruction Pipeline|Arithmetic Pipeline|
|---|---|---|
|Purpose|Instruction execution fast karna|Arithmetic operations fast karna|
|Used For|Fetch, decode, execute instructions|Addition, multiplication, division|
|Stages|IF, ID, EX, MEM, WB|Arithmetic sub-operations|
|Example|CPU instruction execution|Floating-point addition|
|Main Benefit|Increases instruction throughput|Increases arithmetic operation throughput|

##### Important Point

Arithmetic pipeline ek operation ko stages me divide karta hai, aur multiple arithmetic operations ko overlapped manner me execute karta hai.

##### Short Exam Answer

**Arithmetic pipeline is a pipeline technique used to perform arithmetic operations by dividing them into smaller sub-operations. These sub-operations are executed in different pipeline stages in an overlapped manner. It is mainly used in floating-point operations, scientific calculations, graphics processing, and high-speed processors.**

##### English Communication Tip

You can say:  
**“Arithmetic pipelining improves the speed of complex arithmetic operations by dividing them into smaller stages.”**

![[Pasted image 20260521093927.jpg]]