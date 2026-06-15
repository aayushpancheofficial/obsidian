# CSA Unit 1 - Special Exam Ready Answers

## How to Use This Note

- Questions are written with `###` headings.
- Answers are written with `####` headings.
- Important exam points are highlighted using `==highlight==`.
- In the exam, write answers in this order: **definition -> diagram/table -> explanation -> example -> conclusion**.

---

### Q1. Explain various types of Addressing Modes with suitable examples.

#### Answer

==Addressing mode== is the method used by an instruction to specify the location of an operand. It tells the CPU how to find the data required for execution.

In an instruction, the operand may be present directly, may be stored in a register, or may be stored in memory. Addressing modes help the CPU calculate the ==effective address (EA)== of the operand.

#### Effective Address

Effective address is the actual address of the operand in memory.

```text
Effective Address = Actual memory location of operand
```

#### Types of Addressing Modes

| Addressing Mode | Meaning | Example | Effective Address |
|---|---|---|---|
| Immediate | Operand is given directly in instruction | `MOV R1, #50` | No memory address needed |
| Direct | Address field contains operand address | `MOV R1, [400]` | EA = address field |
| Indirect | Address field contains address of address | `MOV R1, [[400]]` | EA = M[address field] |
| Register | Operand is in register | `MOV R1, R2` | Register contains operand |
| Register Indirect | Register contains memory address of operand | `MOV R1, [R2]` | EA = contents of register |
| Indexed | Index register is added to address field | `MOV R1, 400(R2)` | EA = address + index register |
| Relative | PC is added to address field | `BRANCH 50` | EA = PC + offset |
| Base Register | Base register is added to displacement | `MOV R1, 20(BR)` | EA = base register + displacement |
| Auto-increment | Register points to operand, then increments | `(R1)+` | EA = R1, then R1 = R1 + 1 |
| Auto-decrement | Register decrements first, then points to operand | `-(R1)` | R1 = R1 - 1, EA = R1 |

#### 1. Immediate Addressing Mode

In immediate addressing, the operand is directly present in the instruction.

Example:

```text
MOV R1, #25
```

Here, value `25` is directly loaded into register `R1`.

==No memory access is required to fetch the operand.==

#### 2. Direct Addressing Mode

In direct addressing, the address field of the instruction contains the actual memory address of the operand.

Example:

```text
MOV R1, [400]
```

Here, the operand is stored at memory location `400`.

```text
EA = 400
```

#### 3. Indirect Addressing Mode

In indirect addressing, the address field contains the address of a memory location, and that memory location contains the actual address of the operand.

Example:

```text
MOV R1, [[400]]
```

If `M[400] = 700`, then:

```text
EA = M[400] = 700
```

#### 4. Register Addressing Mode

In register addressing, the operand is stored in a CPU register.

Example:

```text
ADD R1, R2
```

Here, the contents of `R2` are added to `R1`.

==It is faster than memory addressing because registers are inside the CPU.==

#### 5. Register Indirect Addressing Mode

In register indirect addressing, a register contains the memory address of the operand.

Example:

```text
MOV R1, [R2]
```

If `R2 = 500`, then operand is taken from memory location `500`.

```text
EA = R2
```

#### 6. Indexed Addressing Mode

In indexed addressing, the effective address is calculated by adding an index register to the address field.

```text
EA = Address field + Index register
```

Example:

```text
MOV R1, 400(R2)
```

If `R2 = 20`, then:

```text
EA = 400 + 20 = 420
```

==Indexed addressing is useful for arrays.==

#### 7. Relative Addressing Mode

In relative addressing, the effective address is calculated by adding the program counter (PC) to the address field or displacement.

```text
EA = PC + Address field
```

It is commonly used in branch instructions.

#### Conclusion

Addressing modes provide flexibility in instruction execution. They help the CPU access operands from registers, memory, immediate values, arrays, and branch locations efficiently.

---

### Q2. Explain the basic Instruction Format / various instruction formats with examples.

#### Answer

==Instruction format== is the arrangement of bits in a machine instruction. It tells the CPU what operation to perform and where operands are located.

A machine instruction generally contains:

- Opcode
- Addressing mode field
- Operand/address field
- Register field

#### Basic Instruction Format

```text
+----------+---------------+----------------+
| Opcode   | Mode/Register | Address/Operand|
+----------+---------------+----------------+
```

#### Fields of Instruction Format

| Field | Meaning |
|---|---|
| Opcode | Specifies operation such as ADD, SUB, LOAD |
| Addressing mode | Specifies how operand address is calculated |
| Register field | Specifies CPU register |
| Address field | Specifies memory address or operand |

#### Types of Instruction Formats

#### 1. Three-Address Instruction

A three-address instruction contains three operands.

Example:

```text
ADD X, A, B
```

Meaning:

```text
X = A + B
```

==It is easy to understand but requires longer instruction size.==

#### 2. Two-Address Instruction

A two-address instruction contains two operands. One operand works as both source and destination.

Example:

```text
ADD A, B
```

Meaning:

```text
A = A + B
```

#### 3. One-Address Instruction

One-address instruction uses an accumulator. One operand is given in the instruction and the other is assumed to be in accumulator.

Example:

```text
ADD B
```

Meaning:

```text
AC = AC + B
```

#### 4. Zero-Address Instruction

Zero-address instruction is used in stack-based computers. Operands are taken from the top of the stack.

Example:

```text
ADD
```

Meaning: pop top two stack values, add them, and push result.

#### Comparison Table

| Format | Example | Meaning | Used In |
|---|---|---|---|
| Three-address | `ADD X,A,B` | X = A + B | General register machines |
| Two-address | `ADD A,B` | A = A + B | Register machines |
| One-address | `ADD B` | AC = AC + B | Accumulator machines |
| Zero-address | `ADD` | Stack top values added | Stack machines |

#### Conclusion

Instruction format defines how an instruction is represented in memory. Different formats affect instruction size, execution speed, memory usage, and CPU design.

---

### Q3. Evaluate effective address for Direct, Immediate, Relative, Register Indirect and Index addressing modes.

#### Answer

Given:

```text
Instruction is stored at location = 300
Address field is at location 301 and contains = 400
R1 = 200
```

Assumption:

After fetching the instruction, the program counter points to the next instruction/location.

```text
PC = 302
Address field = 400
R1 = 200
```

#### Effective Address Table

| Addressing Mode | Formula | Calculation | Effective Address |
|---|---|---|---|
| Direct | EA = address field | EA = 400 | 400 |
| Immediate | Operand = address field | Operand = 400 | No EA |
| Relative | EA = PC + address field | EA = 302 + 400 | 702 |
| Register Indirect | EA = R1 | EA = 200 | 200 |
| Index | EA = address field + R1 | EA = 400 + 200 | 600 |

#### Explanation

#### Direct Addressing

In direct addressing, the address field itself is the effective address.

```text
EA = 400
```

#### Immediate Addressing

In immediate addressing, the value `400` is the operand itself. It is not treated as a memory address.

```text
Operand = 400
No effective address
```

#### Relative Addressing

In relative addressing, the effective address is calculated by adding PC and address field.

```text
EA = PC + address field
EA = 302 + 400 = 702
```

#### Register Indirect Addressing

In register indirect addressing, register contains the address of the operand.

```text
EA = R1 = 200
```

#### Indexed Addressing

In indexed addressing, the effective address is calculated by adding address field and index register.

```text
EA = 400 + 200 = 600
```

#### Important Exam Note

==Immediate addressing has no effective address because the operand is directly present in the instruction.==

---

### Q4. Explain bus architecture / bus structure with suitable diagram.

#### Answer

A ==bus== is a communication path used to transfer data, address, and control signals between different units of a computer.

A computer bus connects:

- CPU
- Memory
- Input devices
- Output devices

#### Types of Buses

| Bus | Function |
|---|---|
| Data bus | Transfers actual data |
| Address bus | Carries address of memory or I/O location |
| Control bus | Carries control signals like read, write, interrupt |

#### Bus Structure Diagram

```text
            +-----------+
            |    CPU    |
            +-----------+
              |   |   |
==============|===|===|================ System Bus
              |   |   |
        Data Bus Address Bus Control Bus
              |   |   |
       +------+   |   +------+
       |          |          |
+-------------+ +-------------+ +-------------+
|   Memory    | | Input Unit  | | Output Unit |
+-------------+ +-------------+ +-------------+
```

#### Explanation

#### Data Bus

The data bus transfers actual data between CPU, memory, and I/O devices. It is usually bidirectional.

#### Address Bus

The address bus carries the address of the memory or I/O location. It is usually unidirectional from CPU to memory/I/O.

#### Control Bus

The control bus carries control signals such as:

- Memory read
- Memory write
- I/O read
- I/O write
- Interrupt
- Clock

#### Advantages

- Simple and low-cost communication structure.
- Easy to connect multiple devices.
- Reduces number of separate connections.

#### Disadvantages

- Only one transfer can happen at a time on a shared bus.
- Bus congestion may reduce speed.

#### Conclusion

Bus architecture provides a common communication path between CPU, memory, and I/O units. It is essential for data transfer and control in a computer system.

---

### Q5. Explain microinstruction format and its fields in detail.

#### Answer

A ==microinstruction== is a binary control word stored in control memory. It specifies one or more micro-operations to be performed by the CPU.

Microinstructions are used in a ==microprogrammed control unit== to generate control signals.

#### Basic Microinstruction Format

```text
+-----------+-----------+-----------+--------------+
| Control   | Condition | Branch    | Address      |
| Field     | Field     | Field     | Field        |
+-----------+-----------+-----------+--------------+
```

#### Fields of Microinstruction

| Field | Meaning |
|---|---|
| Control field | Specifies micro-operations/control signals |
| Condition field | Specifies condition for branching |
| Branch field | Specifies type of branch |
| Address field | Contains next microinstruction address |

#### 1. Control Field

The control field specifies the micro-operations to be performed in the current clock cycle.

Examples:

- Load register
- Enable ALU
- Read memory
- Write memory
- Increment PC

#### 2. Condition Field

The condition field checks a condition for branching.

Examples:

- Zero flag
- Carry flag
- Sign flag
- Interrupt signal

#### 3. Branch Field

The branch field tells how the next microinstruction address is selected.

Types:

- Unconditional branch
- Conditional branch
- Sequential execution

#### 4. Address Field

The address field contains the address of the next microinstruction in control memory.

#### Types of Microinstruction Formats

| Type | Meaning |
|---|---|
| Horizontal microinstruction | Many control signals specified directly; faster but longer |
| Vertical microinstruction | Encoded control signals; shorter but slower |

#### Conclusion

Microinstruction format defines how control information is stored in control memory. It helps in generating control signals for executing machine instructions.

---

### Q6. Evaluate arithmetic statement X = (A+B)*(C+D) using three-address and two-address instructions.

#### Answer

Given arithmetic statement:

```text
X = (A + B) * (C + D)
```

#### Three-Address Instructions

In three-address instructions, each instruction can specify two source operands and one destination operand.

```text
ADD T1, A, B      ; T1 = A + B
ADD T2, C, D      ; T2 = C + D
MUL X, T1, T2     ; X = T1 * T2
```

#### Explanation

- First instruction computes `A + B` and stores result in `T1`.
- Second instruction computes `C + D` and stores result in `T2`.
- Third instruction multiplies `T1` and `T2` and stores result in `X`.

#### Two-Address Instructions

In two-address instructions, one operand acts as both source and destination.

```text
MOV R1, A         ; R1 = A
ADD R1, B         ; R1 = A + B
MOV R2, C         ; R2 = C
ADD R2, D         ; R2 = C + D
MUL R1, R2        ; R1 = R1 * R2
MOV X, R1         ; X = result
```

#### Important Difference

| Three-Address | Two-Address |
|---|---|
| Fewer instructions | More instructions |
| Uses temporary variables | Uses registers/source-destination operands |
| Easier to understand | More compact instruction format |

#### Conclusion

Three-address code is simpler and needs fewer instructions, while two-address code uses shorter instruction format but requires more steps.

---

### Q7. Explain Accumulator-based CPU with proper diagram.

#### Answer

An ==accumulator-based CPU== is a CPU organization in which a special register called accumulator (AC) is used for arithmetic and logical operations.

In this CPU, one operand is usually present in the accumulator and the other operand is taken from memory.

#### Diagram

```text
              +----------------+
              |  Control Unit  |
              +----------------+
                      |
                      v
+----------+    +------------+    +-------------+
|  Memory  |<-->|    ALU     |<-->| Accumulator |
+----------+    +------------+    |    (AC)     |
                                  +-------------+
```

#### Working

1. Operand is fetched from memory.
2. Accumulator holds one operand.
3. ALU performs operation using accumulator and memory operand.
4. Result is stored back in accumulator.
5. Final result may be stored in memory.

#### Example

Instruction:

```text
ADD X
```

Meaning:

```text
AC = AC + M[X]
```

#### Features

- Uses accumulator for intermediate results.
- Simple instruction format.
- Requires fewer address fields.
- More memory access may be needed.

#### Advantages

- Simple CPU design.
- Short instructions.
- Easy control unit design.

#### Disadvantages

- Accumulator becomes a bottleneck.
- More memory references may be required.
- Slower than general register organization for complex programs.

#### Conclusion

Accumulator-based CPU is simple and uses the accumulator as the main working register. It is suitable for simple computer systems but may be slower for complex operations.

---

### Q8. Write short notes on Hardwired Control and Micro-programmed Control.

#### Answer

#### Hardwired Control Unit

A ==hardwired control unit== generates control signals using hardware circuits such as gates, flip-flops, decoders, and counters.

#### Features

- Control signals are generated directly by hardware.
- It is very fast.
- It is difficult to modify.
- It is suitable for RISC processors.

#### Block Idea

```text
Instruction Register + Flags + Clock
              |
              v
      Control Logic Circuit
              |
              v
        Control Signals
```

#### Micro-programmed Control Unit

A ==micro-programmed control unit== generates control signals using microinstructions stored in control memory.

#### Features

- Uses control memory.
- Easy to modify by changing microprogram.
- Slower than hardwired control.
- Suitable for CISC processors.

#### Block Idea

```text
Instruction Register
        |
        v
Control Address Register -> Control Memory -> Control Word
        ^                                      |
        |                                      v
        +--------- Sequencing Logic ----- Control Signals
```

#### Conclusion

Hardwired control is faster but less flexible. Micro-programmed control is slower but easier to design and modify.

---

### Q9. Differentiate between Hardwired Control Unit and Micro-programmed Control Unit / Draw block diagrams of both.

#### Answer

#### Hardwired Control Unit Diagram

```text
+----------------------+     +-------------+
| Instruction Register |---->| Decoder     |
+----------------------+     +-------------+
                                   |
+--------+     +-------+           v
| Clock  |---->| Logic |----> Control Signals
+--------+     +-------+
+--------+         ^
| Flags  |---------+
+--------+
```

#### Micro-programmed Control Unit Diagram

```text
+----------------------+       +--------------------------+
| Instruction Register |------>| Control Address Generator|
+----------------------+       +--------------------------+
                                      |
                                      v
                              +----------------+
                              | Control Memory |
                              +----------------+
                                      |
                                      v
                              +----------------+
                              | Control Word   |
                              +----------------+
                                      |
                                      v
                              Control Signals
```

#### Difference Table

| Basis | Hardwired Control Unit | Micro-programmed Control Unit |
|---|---|---|
| Implementation | Uses hardware logic circuits | Uses microinstructions in control memory |
| Speed | Faster | Slower |
| Flexibility | Less flexible | More flexible |
| Modification | Difficult | Easy |
| Design | Complex for large instruction sets | Easier for complex instruction sets |
| Cost | Less for simple CPU | More due to control memory |
| Suitability | RISC | CISC |
| Control signal generation | Directly by hardware | By executing microprogram |

#### Conclusion

==Hardwired control is fast but difficult to modify. Micro-programmed control is flexible but comparatively slower.==

---

### Q10. Explain Micro-programmed Control Unit with block diagram.

#### Answer

A ==micro-programmed control unit== is a control unit in which control signals are generated by microinstructions stored in control memory.

Each machine instruction is executed by a sequence of microinstructions called a ==microprogram==.

#### Block Diagram

```text
                 +----------------------+
                 | Instruction Register |
                 +----------------------+
                            |
                            v
                 +----------------------+
                 | Mapping Logic        |
                 +----------------------+
                            |
                            v
+------------------+   +----------------------+   +----------------+
| Sequencing Logic |-->| Control Address Reg. |-->| Control Memory |
+------------------+   +----------------------+   +----------------+
          ^                                             |
          |                                             v
          +-------------------------------------+----------------+
                                                | Control Word   |
                                                +----------------+
                                                        |
                                                        v
                                                Control Signals
```

#### Components

| Component | Function |
|---|---|
| Control memory | Stores microinstructions |
| Control address register | Holds address of next microinstruction |
| Sequencing logic | Selects next microinstruction address |
| Mapping logic | Maps opcode to starting microprogram address |
| Control word | Generates control signals |

#### Working

1. Instruction is loaded into instruction register.
2. Opcode is mapped to starting address of microprogram.
3. Control address register sends address to control memory.
4. Control memory outputs a microinstruction.
5. Microinstruction generates control signals.
6. Sequencing logic selects next microinstruction.

#### Advantages

- Easy to design.
- Easy to modify.
- Suitable for complex instruction sets.
- Debugging is easier.

#### Disadvantages

- Slower than hardwired control.
- Requires control memory.

#### Conclusion

Micro-programmed control unit is flexible and suitable for complex CPUs. It generates control signals by reading microinstructions from control memory.

---

### Q11. Explain Instruction Cycle with diagram.

#### Answer

==Instruction cycle== is the complete sequence of steps performed by the CPU to fetch, decode, and execute an instruction.

#### Main Phases

1. Fetch
2. Decode
3. Execute
4. Memory access if required
5. Write back

#### Diagram

```text
+----------------+
| Fetch          |
+----------------+
        |
        v
+----------------+
| Decode         |
+----------------+
        |
        v
+----------------+
| Execute        |
+----------------+
        |
        v
+----------------+
| Memory Access  |
+----------------+
        |
        v
+----------------+
| Write Back     |
+----------------+
        |
        v
+----------------+
| Next Instruction|
+----------------+
```

#### 1. Fetch Cycle

CPU fetches instruction from memory.

Typical micro-operations:

```text
MAR <- PC
MDR <- M[MAR]
IR <- MDR
PC <- PC + 1
```

#### 2. Decode Cycle

Control unit decodes opcode and identifies operation, addressing mode, and operands.

#### 3. Execute Cycle

CPU performs the required operation such as ADD, SUB, LOAD, STORE, or branch.

#### 4. Memory Access

If instruction needs memory operand, memory read or write operation is performed.

#### 5. Write Back

Result is stored in register or memory.

#### Conclusion

Instruction cycle is the basic working cycle of the CPU. Every instruction passes through fetch, decode, execute, and result storing phases.

---

### Q12. Describe various functional units of a computer.

#### Answer

A computer system is made up of different functional units that work together to execute programs.

#### Functional Units Diagram

```text
             +----------------+
             |   Input Unit   |
             +----------------+
                     |
                     v
+------------+  +----------+  +-------------+
| Memory Unit|<>|   CPU    |<>| Output Unit |
+------------+  +----------+  +-------------+
                     |
             +-------+-------+
             |               |
             v               v
          +-----+      +--------------+
          | ALU |      | Control Unit |
          +-----+      +--------------+
```

#### 1. Input Unit

Input unit accepts data and instructions from the user and converts them into machine-readable form.

Examples: keyboard, mouse, scanner.

#### 2. Memory Unit

Memory unit stores data, instructions, intermediate results, and final results.

Types:

- Primary memory: RAM, ROM
- Secondary memory: hard disk, SSD

#### 3. Arithmetic Logic Unit (ALU)

ALU performs arithmetic and logical operations.

Arithmetic operations:

- Addition
- Subtraction
- Multiplication
- Division

Logical operations:

- AND
- OR
- NOT
- Comparison

#### 4. Control Unit

Control unit controls and coordinates all operations of the computer. It generates control signals and manages instruction execution.

#### 5. Output Unit

Output unit displays or produces the final result in human-readable form.

Examples: monitor, printer, speaker.

#### 6. Registers

Registers are small high-speed storage locations inside CPU. They store temporary data and instructions.

Examples:

- Program Counter (PC)
- Instruction Register (IR)
- Memory Address Register (MAR)
- Memory Data Register (MDR)
- Accumulator (AC)

#### Conclusion

The functional units of a computer include input unit, memory unit, ALU, control unit, registers, and output unit. These units work together to process data and execute instructions.

---

## Final 60+ Marks Revision Priority

1. Addressing modes with examples
2. Instruction formats with examples
3. Effective address numerical
4. Hardwired vs micro-programmed control
5. Micro-programmed control unit diagram
6. Instruction cycle diagram
7. Bus architecture diagram
8. Functional units diagram

## Last-Minute Formula Sheet

| Topic | Must Remember |
|---|---|
| Direct addressing | EA = address field |
| Immediate addressing | Operand is inside instruction; no EA |
| Relative addressing | EA = PC + displacement |
| Register indirect | EA = contents of register |
| Indexed addressing | EA = address field + index register |
| Hardwired control | Fast, hardware logic, less flexible |
| Microprogrammed control | Flexible, control memory, slower |
| Instruction cycle | Fetch -> Decode -> Execute -> Memory -> Write back |

## Exam Writing Tip

For CSA Unit 1, diagrams are very important. Draw clean block diagrams and write 4-6 points below each diagram. For numerical effective address questions, always write the formula first, then substitute values.
