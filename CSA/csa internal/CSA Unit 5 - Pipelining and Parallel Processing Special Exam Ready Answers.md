# CSA Unit 5 - Pipelining and Parallel Processing Special Exam Ready Answers

## How to Use This Note

- Questions are written with `###` headings.
- Answers are written with `#### Answer` headings.
- Important exam points are highlighted using `==highlight==`.
- For numericals, always write formula first.

---

### Q1. Describe Flynn's Classification of Parallel Processing with diagram.

#### Answer

==Flynn's classification== classifies computer architectures based on the number of instruction streams and data streams.

#### Diagram

```text
                 Flynn's Classification
                         |
        +----------------+----------------+
        |                                 |
 Instruction Stream                 Data Stream
        |
+-------+-------+-------+-------+
| SISD  | SIMD  | MISD  | MIMD  |
+-------+-------+-------+-------+
```

#### Types

| Type | Full Form | Meaning | Example |
|---|---|---|---|
| SISD | Single Instruction Single Data | One instruction works on one data stream | Traditional single CPU |
| SIMD | Single Instruction Multiple Data | Same instruction works on many data items | Vector processor, GPU |
| MISD | Multiple Instruction Single Data | Many instructions work on same data | Rare, fault-tolerant systems |
| MIMD | Multiple Instruction Multiple Data | Many processors execute different instructions on different data | Multiprocessor systems |

#### SISD

SISD is a traditional sequential computer. It executes one instruction stream on one data stream.

```text
Instruction -> Processor -> Data
```

#### SIMD

SIMD executes the same instruction on multiple data items at the same time.

Example: adding two arrays element by element.

#### MISD

MISD has multiple instruction streams operating on the same data stream. It is rarely used.

#### MIMD

MIMD has multiple processors executing different instructions on different data.

Example: multicore processor.

#### Conclusion

Flynn's classification is important for understanding parallel computer architecture. The four categories are SISD, SIMD, MISD, and MIMD.

---

### Q2. Explain Arithmetic Pipeline with suitable example.

#### Answer

==Arithmetic pipeline== is a pipeline used to perform arithmetic operations by dividing the operation into different stages.

It allows multiple arithmetic operations to be overlapped, increasing throughput.

#### Example: Floating Point Addition Pipeline

Floating point addition can be divided into stages:

1. Compare exponents.
2. Align mantissas.
3. Add/subtract mantissas.
4. Normalize result.
5. Round result.

#### Diagram

```text
Input Numbers
     |
     v
+-------------------+
| Compare Exponents |
+-------------------+
     |
     v
+-------------------+
| Align Mantissas   |
+-------------------+
     |
     v
+-------------------+
| Add/Sub Mantissas |
+-------------------+
     |
     v
+-------------------+
| Normalize Result  |
+-------------------+
     |
     v
+-------------------+
| Round Result      |
+-------------------+
```

#### Pipeline Timing Example

| Clock | Op1 | Op2 | Op3 |
|---|---|---|---|
| 1 | S1 | - | - |
| 2 | S2 | S1 | - |
| 3 | S3 | S2 | S1 |
| 4 | S4 | S3 | S2 |
| 5 | S5 | S4 | S3 |
| 6 | - | S5 | S4 |
| 7 | - | - | S5 |

#### Advantages

- Increases throughput.
- Better utilization of arithmetic units.
- Useful for floating point operations.

#### Conclusion

Arithmetic pipeline improves performance by dividing arithmetic operations into stages and processing multiple operations simultaneously.

---

### Q3. Pipeline numerical — Calculate Speedup Factor, Efficiency, Throughput.

#### Answer

Common PYQ:

```text
Number of instructions = 15000
Pipeline stages = 5
Clock frequency = 25 MHz
```

#### Given

```text
n = 15000 instructions
k = 5 stages
Clock frequency = 25 MHz
Clock cycle time = 1 / 25 MHz = 40 ns
```

#### Non-pipeline Time

```text
T_non_pipeline = n x k x clock cycle time
T_non_pipeline = 15000 x 5 x 40 ns
T_non_pipeline = 3,000,000 ns
T_non_pipeline = 3 ms
```

#### Pipeline Time

Formula:

```text
T_pipeline = (k + n - 1) x clock cycle time
```

Substitution:

```text
T_pipeline = (5 + 15000 - 1) x 40 ns
T_pipeline = 15004 x 40 ns
T_pipeline = 600160 ns
T_pipeline = 0.60016 ms
```

#### Speedup

```text
Speedup = T_non_pipeline / T_pipeline
Speedup = 3 / 0.60016
Speedup ≈ 4.998
```

So speedup is approximately:

```text
Speedup ≈ 5
```

#### Efficiency

```text
Efficiency = Speedup / Number of stages
Efficiency = 4.998 / 5
Efficiency ≈ 0.9996 = 99.96%
```

#### Throughput

```text
Throughput = Number of instructions / Pipeline time
Throughput = 15000 / 0.00060016 seconds
Throughput ≈ 24.99 million instructions/second
```

#### Final Answer

```text
Speedup ≈ 5
Efficiency ≈ 99.96%
Throughput ≈ 24.99 MIPS
```

---

### Q4. Describe Pipeline Processing / Instruction Pipeline in detail.

#### Answer

==Pipeline processing== is a technique in which execution of instructions is divided into stages and multiple instructions are processed simultaneously in different stages.

It is similar to an assembly line.

#### Five-Stage Instruction Pipeline

| Stage | Full Form | Work |
|---|---|---|
| IF | Instruction Fetch | Fetch instruction from memory |
| ID | Instruction Decode | Decode instruction and read registers |
| EX | Execute | ALU operation/address calculation |
| MEM | Memory Access | Read/write memory |
| WB | Write Back | Store result in register |

#### Diagram

```text
Instruction -> IF -> ID -> EX -> MEM -> WB -> Result
```

#### Timing Table

| Clock | I1 | I2 | I3 | I4 |
|---|---|---|---|---|
| 1 | IF | - | - | - |
| 2 | ID | IF | - | - |
| 3 | EX | ID | IF | - |
| 4 | MEM | EX | ID | IF |
| 5 | WB | MEM | EX | ID |
| 6 | - | WB | MEM | EX |
| 7 | - | - | WB | MEM |
| 8 | - | - | - | WB |

#### Advantages

- Increases instruction throughput.
- Improves CPU utilization.
- Reduces average execution time for many instructions.

#### Limitations

- Pipeline hazards can reduce performance.
- Branch instructions may disturb flow.
- Requires additional hardware.

#### Conclusion

Instruction pipeline improves CPU performance by overlapping instruction execution stages.

---

### Q5. Explain Vector Processor and Array Processor with examples.

#### Answer

#### Vector Processor

A ==vector processor== performs operations on entire vectors or arrays of data using a single instruction.

Example:

```text
C[i] = A[i] + B[i]
```

One vector instruction can add all corresponding elements of arrays A and B.

#### Features

- Uses vector registers.
- Performs same operation on many data items.
- Suitable for scientific and engineering applications.

#### Array Processor

An ==array processor== contains multiple processing elements that operate in parallel on different data items.

#### Diagram

```text
Control Unit
     |
+----+----+----+----+
| PE1 | PE2 | PE3 | PE4 |
+----+----+----+----+
```

#### Difference Table

| Basis | Vector Processor | Array Processor |
|---|---|---|
| Operation | Works on vectors using vector instructions | Uses multiple processing elements |
| Control | Single control unit | Common control for many PEs |
| Use | Vector calculations | Parallel data processing |
| Example | Vector supercomputer | SIMD array machine |

#### Applications

- Matrix operations
- Image processing
- Weather forecasting
- Scientific simulations

#### Conclusion

Vector and array processors improve performance by applying operations to multiple data items in parallel.

---

### Q6. Explain pipelining hazards and methods to remove them.

#### Answer

==Pipeline hazards== are problems that prevent the next instruction from executing in the next clock cycle.

#### Types of Hazards

| Hazard | Meaning | Example |
|---|---|---|
| Structural hazard | Hardware resource conflict | Two instructions need memory at same time |
| Data hazard | Instruction depends on previous result | `ADD R1,R2,R3` then `SUB R4,R1,R5` |
| Control hazard | Branch changes instruction flow | Conditional jump |

#### 1. Structural Hazard

Occurs when hardware resources are insufficient.

Solution:

- Add separate instruction/data memory.
- Duplicate hardware resources.
- Insert stalls.

#### 2. Data Hazard

Occurs when an instruction needs data that is not yet available.

Solution:

- Data forwarding.
- Pipeline stall.
- Compiler scheduling.

#### 3. Control Hazard

Occurs due to branch and jump instructions.

Solution:

- Branch prediction.
- Delayed branching.
- Pipeline flushing.

#### Conclusion

Pipeline hazards reduce pipeline efficiency. They can be handled using forwarding, stalls, branch prediction, and additional hardware.

---

### Q7. Non-pipeline vs Pipeline speedup: 50ns task, 6-stage pipeline, 10ns clock, 100 tasks.

#### Answer

Given:

```text
Non-pipeline task time = 50 ns
Pipeline stages = 6
Pipeline clock = 10 ns
Number of tasks = 100
```

#### Non-pipeline Time

```text
T_non_pipeline = 100 x 50 ns = 5000 ns
```

#### Pipeline Time

Formula:

```text
T_pipeline = (k + n - 1) x clock time
```

Substitution:

```text
T_pipeline = (6 + 100 - 1) x 10 ns
T_pipeline = 105 x 10 ns
T_pipeline = 1050 ns
```

#### Speedup

```text
Speedup = T_non_pipeline / T_pipeline
Speedup = 5000 / 1050
Speedup = 4.76
```

#### Maximum Speedup

For ideal pipeline:

```text
Maximum speedup = number of stages = 6
```

#### Final Answer

```text
Actual speedup = 4.76
Maximum speedup = 6
```

---

### Q8. Explain Processor-Level Parallelism.

#### Answer

==Processor-level parallelism== means using multiple processors or cores to execute multiple tasks at the same time.

#### Types

- Multiprocessor systems
- Multicore processors
- Cluster systems
- SIMD and MIMD systems

#### Advantages

- Faster execution.
- Better resource utilization.
- Supports multitasking.
- Useful for large computations.

#### Example

A multicore CPU can run browser, music player, and compiler at the same time using different cores.

#### Conclusion

Processor-level parallelism improves performance by using multiple processors or cores for simultaneous execution.

---

### Q9. Explain RISC Pipeline.

#### Answer

==RISC pipeline== is a pipeline used in Reduced Instruction Set Computer architecture where simple fixed-length instructions are executed in stages.

#### Why RISC is suitable for pipelining

- Simple instructions.
- Fixed instruction length.
- Few instruction formats.
- Load/store architecture.
- Most instructions complete in one cycle.

#### Five Stages

```text
IF -> ID -> EX -> MEM -> WB
```

| Stage | Work |
|---|---|
| IF | Fetch instruction |
| ID | Decode instruction and read registers |
| EX | Execute ALU operation |
| MEM | Access memory if needed |
| WB | Write result back |

#### Conclusion

RISC pipeline is efficient because simple and uniform instructions can be easily divided into fixed stages.

---

### Q10. How to improve throughput in pipelining? Mechanisms to remove collisions.

#### Answer

==Throughput== is the number of instructions completed per unit time.

Pipelining improves throughput by overlapping execution of multiple instructions.

#### Methods to Improve Throughput

- Increase pipeline stages carefully.
- Reduce pipeline stalls.
- Use data forwarding.
- Use branch prediction.
- Use separate instruction and data memory.
- Use compiler scheduling.
- Use multiple functional units.

#### Pipeline Collision

Collision occurs when two tasks require the same pipeline stage/resource at the same time.

#### Methods to Remove Collisions

- Insert delay/stall.
- Use reservation table.
- Use collision vector.
- Schedule instructions properly.
- Add extra hardware resources.

#### Conclusion

Throughput can be improved by reducing stalls and hazards. Collisions can be removed using scheduling, stalls, forwarding, and additional resources.

---

## Final 60+ Marks Revision Priority

1. Arithmetic pipeline with example
2. Flynn's classification diagram
3. Instruction pipeline stages and timing table
4. Vector and array processors
5. Pipeline numerical: speedup, efficiency, throughput
6. Pipeline hazards and solutions
7. RISC pipeline
8. Processor-level parallelism

## Last-Minute Formula Sheet

| Topic | Formula / Must Remember |
|---|---|
| Pipeline time | (k + n - 1) x clock cycle |
| Non-pipeline time | n x k x clock cycle |
| Speedup | Non-pipeline time / Pipeline time |
| Efficiency | Speedup / number of stages |
| Throughput | Number of instructions / total time |
| Max speedup | Number of stages |
| Pipeline stages | IF, ID, EX, MEM, WB |
| Hazards | Structural, data, control |
| Flynn classes | SISD, SIMD, MISD, MIMD |

## Exam Writing Tip

For Unit 5, timing tables and formulas are scoring. Draw Flynn classification, pipeline stage diagram, arithmetic pipeline diagram, and write speedup formulas clearly.
