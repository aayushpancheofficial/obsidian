#### Flynn’s Classification

##### Definition

Flynn’s Classification is a method used to classify computer architectures based on the number of **instruction streams** and **data streams**.

##### Important Terms

###### Instruction Stream

Set of instructions executed by the processor.

###### Data Stream

Set of data on which instructions are performed.

---

#### Types of Flynn’s Classification

##### 1. SISD

###### Full Form

**Single Instruction Single Data**

###### Meaning

In SISD, one processor executes **one instruction on one data item** at a time.

###### Example

Traditional single-core computer.

###### Key Point

- One instruction
    
- One data
    
- Sequential processing
    
![[Pasted image 20260520203013.png]]
---

##### 2. SIMD

###### Full Form

**Single Instruction Multiple Data**

###### Meaning

In SIMD, one instruction is applied to **multiple data items at the same time**.

###### Example

GPU, vector processor.

###### Key Point

- One instruction
    
- Multiple data
    
- Used in graphics and array processing
- 
    ![[Pasted image 20260520203131.png]]

---

##### 3. MISD

###### Full Form

**Multiple Instruction Single Data**

###### Meaning

In MISD, multiple instructions operate on the **same data stream**.

###### Example

Fault-tolerant systems.

###### Key Point

- Multiple instructions
    
- One data
    
- Rarely used
    
![[Pasted image 20260520203102.png]]
---

##### 4. MIMD

###### Full Form

**Multiple Instruction Multiple Data**

###### Meaning

In MIMD, multiple processors execute **different instructions on different data** at the same time.

###### Example

Multi-core processors, distributed systems.

###### Key Point

- Multiple instructions
    
- Multiple data
    
- Most commonly used in modern systems
    
![[Pasted image 20260520203212.png]]
---

#### Flynn’s Classification Table

|Type|Full Form|Instruction|Data|Example|
|---|---|---|---|---|
|SISD|Single Instruction Single Data|Single|Single|Single-core CPU|
|SIMD|Single Instruction Multiple Data|Single|Multiple|GPU|
|MISD|Multiple Instruction Single Data|Multiple|Single|Fault-tolerant system|
|MIMD|Multiple Instruction Multiple Data|Multiple|Multiple|Multi-core CPU|

---

#### Short Exam Answer

Flynn’s Classification classifies computer architectures according to the number of instruction streams and data streams. It has four types: SISD, SIMD, MISD, and MIMD.

#### One-Line Answer

Flynn’s Classification divides computer systems into SISD, SIMD, MISD, and MIMD based on instruction and data streams.

