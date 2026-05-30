#### RISC Pipeline

##### Meaning

**RISC Pipeline** is a pipeline technique used in **RISC processors** to execute instructions quickly using simple and fixed-length instructions.

**RISC** means **Reduced Instruction Set Computer**.

Simple words:  
RISC processor me instructions simple hoti hain, isliye unhe pipeline me fast execute karna easy hota hai.

##### Definition

**RISC pipeline is a processor pipeline used in RISC architecture where simple instructions are executed in fixed stages, usually one instruction per clock cycle after the pipeline is filled.**

##### Why RISC Pipeline is Efficient?

RISC architecture is designed for pipelining because:

- Instructions are simple
    
- Instruction size is fixed
    
- Few instruction formats are used
    
- Load/store architecture is used
    
- Most instructions complete in one cycle
    
- Control unit design is simple
    

##### Basic 5-Stage RISC Pipeline

|Stage|Full Form|Work|
|---|---|---|
|IF|Instruction Fetch|Instruction memory se instruction fetch karna|
|ID|Instruction Decode|Instruction decode karna aur registers read karna|
|EX|Execute|ALU operation ya address calculation karna|
|MEM|Memory Access|Data memory read/write karna|
|WB|Write Back|Result register me store karna|

##### Diagram

```text
Instruction Flow:

IF → ID → EX → MEM → WB
```

##### Pipeline Execution Example

```text
I1: IF → ID → EX → MEM → WB
I2:      IF → ID → EX → MEM → WB
I3:           IF → ID → EX → MEM → WB
I4:                IF → ID → EX → MEM → WB
```

##### Clock Cycle Table

|Clock Cycle|I1|I2|I3|I4|I5|
|---|---|---|---|---|---|
|1|IF|-|-|-|-|
|2|ID|IF|-|-|-|
|3|EX|ID|IF|-|-|
|4|MEM|EX|ID|IF|-|
|5|WB|MEM|EX|ID|IF|
|6|-|WB|MEM|EX|ID|
|7|-|-|WB|MEM|EX|
|8|-|-|-|WB|MEM|
|9|-|-|-|-|WB|

##### Working of Each Stage

##### 1. Instruction Fetch — IF

Processor memory se next instruction fetch karta hai.

Example:  
Program Counter instruction ka address deta hai.

##### 2. Instruction Decode — ID

Instruction decode hoti hai aur required registers read kiye jate hain.

Example:  
`ADD R1, R2, R3`

Here CPU samajhta hai:  
R2 + R3 ka result R1 me store karna hai.

##### 3. Execute — EX

ALU operation perform karta hai.

Example:

```text
R2 + R3
```

##### 4. Memory Access — MEM

Load/store instructions ke liye memory access hota hai.

Example:

```text
LOAD R1, 100(R2)
STORE R1, 200(R3)
```

##### 5. Write Back — WB

Final result register me write hota hai.

Example:

```text
R1 = result
```

##### Characteristics of RISC Pipeline

###### 1. Fixed-Length Instructions

Instructions same size ki hoti hain.

###### 2. Simple Instruction Format

Instruction decode karna easy hota hai.

###### 3. Load/Store Architecture

Memory access sirf LOAD aur STORE instructions se hota hai.

###### 4. Large Number of Registers

Registers zyada hote hain, memory access kam hota hai.

###### 5. One Instruction Per Cycle

Pipeline fill hone ke baad ideally har clock cycle me ek instruction complete hoti hai.

##### RISC Pipeline Hazards

##### 1. Structural Hazard

Jab hardware resource conflict hota hai.

Example:  
Instruction memory aur data memory same ho, aur dono ko ek time par access karna pade.

##### 2. Data Hazard

Jab ek instruction dusri instruction ke result par depend karti hai.

Example:

```text
I1: ADD R1, R2, R3
I2: SUB R4, R1, R5
```

Here I2 ko R1 ka result chahiye.

##### 3. Control Hazard

Branch/jump instruction ke karan pipeline disturb hoti hai.

Example:

```text
BEQ R1, R2, LABEL
```

Processor ko branch decision ka wait karna pad sakta hai.

##### Solutions to Pipeline Hazards

|Hazard|Solution|
|---|---|
|Structural Hazard|Separate instruction and data memory|
|Data Hazard|Forwarding / bypassing|
|Control Hazard|Branch prediction|
|Load-use Hazard|Pipeline stall|

##### Advantages of RISC Pipeline

###### 1. High Speed

Simple instructions fast execute hoti hain.

###### 2. Easy Pipelining

Fixed instruction format pipeline design ko easy banata hai.

###### 3. High Throughput

Pipeline fill hone ke baad har cycle me ek instruction complete ho sakti hai.

###### 4. Simple Hardware Design

Control unit comparatively simple hota hai.

###### 5. Efficient Compiler Support

Compiler instructions ko optimize kar sakta hai.

##### Disadvantages of RISC Pipeline

###### 1. More Instructions Required

Complex task ke liye zyada instructions lag sakti hain.

###### 2. Compiler Dependency

Performance compiler optimization par depend karti hai.

###### 3. Pipeline Hazards

Dependencies aur branches pipeline performance reduce kar sakti hain.

##### Difference Between RISC and CISC Pipeline

|Basis|RISC Pipeline|CISC Pipeline|
|---|---|---|
|Instruction type|Simple instructions|Complex instructions|
|Instruction length|Fixed|Variable|
|Execution|Mostly one cycle|Multiple cycles|
|Pipeline design|Easy|Complex|
|Memory access|Load/store only|Many instructions can access memory|
|Control unit|Hardwired|Often microprogrammed|
|Speed|High|Comparatively lower|

##### Important Point

RISC pipeline is efficient because RISC instructions are simple, fixed-length, and suitable for overlapped execution.

##### Short Exam Answer

**RISC pipeline is a processor pipeline used in Reduced Instruction Set Computer architecture. It divides instruction execution into fixed stages such as Instruction Fetch, Instruction Decode, Execute, Memory Access, and Write Back. Because RISC instructions are simple and fixed-length, pipelining becomes easier and faster. Ideally, after the pipeline is filled, one instruction completes in every clock cycle.**

##### English Communication Tip

You can say:  
**“RISC pipeline improves processor performance by executing simple fixed-length instructions in overlapped stages.”**

![[Pasted image 20260521105457.png]]