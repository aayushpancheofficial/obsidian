
#### Parallel Processing

##### Meaning

Parallel Processing means **using multiple processors or cores to execute tasks at the same time**.

It is used to make a computer system **faster, more powerful, and more efficient**.

##### Definition

**Parallel Processing is a technique in which a large task is divided into smaller subtasks, and these subtasks are processed simultaneously by multiple processors or cores.**

##### Basic Concept

In normal processing, one processor completes tasks one by one.

But in parallel processing:

- A large task is divided into small parts.
    
- Each part is given to a different processor/core.
    
- All processors work at the same time.
    
- Final results are combined together.
    

##### Example

Suppose one big task has 4 parts:

- Part 1
    
- Part 2
    
- Part 3
    
- Part 4
    

###### Sequential Processing

One processor does:

Part 1 → Part 2 → Part 3 → Part 4

###### Parallel Processing

Four processors do:

- Processor 1 → Part 1
    
- Processor 2 → Part 2
    
- Processor 3 → Part 3
    
- Processor 4 → Part 4
    

So, the task completes faster.

##### Diagram

```text
Large Task
    |
    v
Divide into Subtasks
    |
    +----------+----------+----------+----------+
    |          |          |          |          |
    v          v          v          v
 Subtask 1  Subtask 2  Subtask 3  Subtask 4
    |          |          |          |
    v          v          v          v
Processor 1 Processor 2 Processor 3 Processor 4
    |          |          |          |
    +----------+----------+----------+
               |
               v
          Final Result
```

##### Need of Parallel Processing

###### 1. To Increase Speed

Parallel processing reduces the time required to complete a task.

###### 2. To Improve Performance

Multiple processors work together, so system performance increases.

###### 3. To Handle Large Problems

It is useful for complex problems like:

- Artificial Intelligence
    
- Machine Learning
    
- Scientific calculations
    
- Weather forecasting
    
- Graphics processing
    

###### 4. To Support Multitasking

It helps computers run many programs at the same time.

###### 5. To Use Hardware Efficiently

Modern computers have multiple cores. Parallel processing uses them properly.

##### Types of Parallel Processing

##### 1. Bit-Level Parallel Processing

In bit-level parallel processing, more bits are processed at one time.

###### Example

- 8-bit processor processes 8 bits at a time.
    
- 32-bit processor processes 32 bits at a time.
    

So, a 32-bit processor can process more data at once.

##### 2. Instruction-Level Parallel Processing

In instruction-level parallel processing, multiple instructions are executed at the same time.

It is usually achieved by **pipelining**.

###### Example

While one instruction is executing, another instruction is decoding, and another instruction is fetching.

##### 3. Data-Level Parallel Processing

In data-level parallel processing, the same operation is performed on multiple data items simultaneously.

###### Example

Adding two arrays:

A = [1, 2, 3, 4]  
B = [5, 6, 7, 8]

Operations:

- 1 + 5
    
- 2 + 6
    
- 3 + 7
    
- 4 + 8
    

All additions can happen at the same time.

##### 4. Task-Level Parallel Processing

In task-level parallel processing, different tasks are executed simultaneously.

###### Example

A computer can:

- Play music
    
- Download a file
    
- Run browser
    
- Scan for viruses
    

##### Flynn’s Classification

Flynn’s classification is used to classify computer architectures based on instruction and data streams.

##### 1. SISD

**Single Instruction Single Data**

One instruction works on one data item.

###### Example

Traditional single-core computer.

##### 2. SIMD

**Single Instruction Multiple Data**

One instruction works on multiple data items.

###### Example

GPU and vector processor.

##### 3. MISD

**Multiple Instruction Single Data**

Multiple instructions work on the same data.

###### Example

Fault-tolerant systems.

##### 4. MIMD

**Multiple Instruction Multiple Data**

Multiple processors execute different instructions on different data.

###### Example

Multi-core processors and distributed systems.


##### Short Exam Answer

Parallel Processing is a technique in which multiple processors or cores are used to execute different parts of a task simultaneously. A large task is divided into smaller subtasks, and each subtask is processed by a different processor. It improves the speed, performance, and efficiency of a computer system.


##### Key Points

- Parallel processing uses multiple processors or cores.
    
- It divides a large task into smaller subtasks.
    
- Subtasks are executed simultaneously.
    
- It improves speed and performance.
    
- It is useful for AI, gaming, graphics, and scientific computing.
    
- Flynn’s classification includes SISD, SIMD, MISD, and MIMD.
    

