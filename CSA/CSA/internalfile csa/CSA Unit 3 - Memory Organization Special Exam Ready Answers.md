# CSA Unit 3 - Memory Organization Special Exam Ready Answers

## How to Use This Note

- Questions are written with `###` headings.
- Answers are written with `#### Answer` headings.
- Important exam lines are highlighted using `==highlight==`.
- For numericals, write: **given -> formula -> substitution -> final answer**.

---

### Q1. Draw and explain Memory Hierarchy.

#### Answer

==Memory hierarchy== is the arrangement of different types of memory in a computer system according to speed, cost, and capacity.

The main purpose of memory hierarchy is to provide the CPU with fast access to frequently used data while keeping overall storage cost low.

#### Memory Hierarchy Diagram

```text
                Fastest, Smallest, Costliest
                         +-----------+
                         | Registers |
                         +-----------+
                              |
                         +-----------+
                         |   Cache   |
                         +-----------+
                              |
                         +-----------+
                         | Main Mem. |
                         |   RAM     |
                         +-----------+
                              |
                         +-----------+
                         | Secondary |
                         | Storage   |
                         +-----------+
                              |
                         +-----------+
                         | Magnetic  |
                         | Tape/Cloud|
                         +-----------+
                Slowest, Largest, Cheapest
```

#### Explanation

| Level | Example | Speed | Capacity | Cost |
|---|---|---|---|---|
| Registers | CPU registers | Fastest | Very small | Highest |
| Cache memory | L1, L2, L3 cache | Very fast | Small | High |
| Main memory | RAM | Medium | Medium | Medium |
| Secondary memory | SSD, HDD | Slow | Large | Low |
| Tertiary storage | Tape, cloud backup | Slowest | Very large | Lowest |

#### Important Points

- Registers are closest to CPU and fastest.
- Cache stores frequently used data from main memory.
- Main memory stores currently running programs.
- Secondary memory stores data permanently.
- As we move down the hierarchy, ==capacity increases but speed decreases==.
- As we move up the hierarchy, ==speed and cost per bit increase==.

#### Principle of Locality

Memory hierarchy works because of the ==principle of locality==.

| Locality | Meaning |
|---|---|
| Temporal locality | Recently used data may be used again soon |
| Spatial locality | Nearby memory locations may be used soon |

#### Conclusion

Memory hierarchy improves system performance by combining fast, small memories with slow, large memories. It gives the effect of large memory at low cost and fast access for frequently used data.

---

### Q2. Explain Direct Mapping and Set-Associative Mapping used in Cache Organization.

#### Answer

==Cache mapping== is the technique used to decide where a block of main memory will be placed in cache memory.

The three common cache mapping techniques are:

- Direct mapping
- Associative mapping
- Set-associative mapping

This question mainly asks direct and set-associative mapping.

---

#### Direct Mapping

In direct mapping, each main memory block can be placed in only one fixed cache line.

#### Formula

```text
Cache line number = Main memory block number mod Number of cache lines
```

#### Direct Mapping Diagram

```text
Main Memory Blocks              Cache Lines
Block 0 ----------------------> Line 0
Block 1 ----------------------> Line 1
Block 2 ----------------------> Line 2
Block 3 ----------------------> Line 3
Block 4 ----------------------> Line 0
Block 5 ----------------------> Line 1
```

#### Address Format in Direct Mapping

```text
+-------+------------+-------------+
|  Tag  | Line Index | Word Offset |
+-------+------------+-------------+
```

#### Advantages

- Simple hardware.
- Easy to implement.
- Fast searching because location is fixed.

#### Disadvantages

- More conflict misses.
- Two frequently used blocks may map to the same cache line.

---

#### Set-Associative Mapping

In set-associative mapping, cache is divided into sets. A main memory block maps to one set, but it can be placed in any line inside that set.

#### Formula

```text
Set number = Main memory block number mod Number of sets
```

#### Example

If cache is 2-way set associative, each set has 2 cache lines.

```text
Set 0: Line 0, Line 1
Set 1: Line 2, Line 3
Set 2: Line 4, Line 5
```

#### Address Format in Set-Associative Mapping

```text
+-------+-----------+-------------+
|  Tag  | Set Index | Word Offset |
+-------+-----------+-------------+
```

#### Advantages

- Fewer conflict misses than direct mapping.
- More flexible placement.
- Better cache utilization.

#### Disadvantages

- Hardware is more complex.
- Tag comparison is needed within a set.

#### Difference Table

| Basis | Direct Mapping | Set-Associative Mapping |
|---|---|---|
| Placement | Fixed cache line | Fixed set, any line in set |
| Formula | Block mod lines | Block mod sets |
| Speed | Faster | Slightly slower |
| Hardware | Simple | More complex |
| Conflict misses | More | Less |

#### Conclusion

Direct mapping is simple and fast but suffers from more conflict misses. Set-associative mapping gives better flexibility and performance by allowing a block to be placed in any line of a mapped set.

---

### Q3. Explain Virtual Memory — organization, address translation and working.

#### Answer

==Virtual memory== is a memory management technique that gives the user an illusion of a large main memory by using secondary storage as an extension of RAM.

It allows programs larger than physical memory to execute.

#### Need of Virtual Memory

- Allows execution of large programs.
- Increases degree of multiprogramming.
- Uses main memory efficiently.
- Provides memory protection.

#### Virtual Memory Organization

```text
User Program
    |
    v
Virtual Address
    |
    v
Page Table / MMU
    |
    v
Physical Address in Main Memory
    |
    v
If page not present -> Page Fault -> Bring page from disk
```

#### Address Translation Diagram

```text
Virtual Address
+-------------+----------+
| Page Number | Offset   |
+-------------+----------+
       |
       v
   Page Table
       |
       v
Physical Address
+--------------+---------+
| Frame Number | Offset  |
+--------------+---------+
```

#### Important Terms

| Term | Meaning |
|---|---|
| Page | Fixed-size block of virtual memory |
| Frame | Fixed-size block of physical memory |
| Page table | Maps page number to frame number |
| MMU | Hardware unit that translates address |
| Page fault | Occurs when required page is not in main memory |

#### Working

1. CPU generates a virtual address.
2. Virtual address is divided into page number and offset.
3. Page number is checked in page table.
4. If page is present, frame number is obtained.
5. Physical address is formed using frame number and offset.
6. If page is not present, page fault occurs.
7. Required page is brought from disk into main memory.

#### Advantages

- Provides large logical address space.
- Better memory utilization.
- Supports multiprogramming.
- Provides protection between processes.

#### Disadvantages

- Page faults reduce performance.
- Requires page table storage.
- Address translation takes extra time.

#### Conclusion

Virtual memory allows a program to use more memory than physically available. It uses paging and address translation to map virtual addresses to physical addresses.

---

### Q4. Cache Memory numerical — Average access time with hit ratio and write-through.

#### Answer

Given common PYQ values:

```text
Cache access time = 100 ns
Main memory access time = 1000 ns
Hit ratio = 0.9
Miss ratio = 1 - 0.9 = 0.1
Read = 80% = 0.8
Write = 20% = 0.2
```

#### Case 1: Average Memory Access Time without read/write split

Formula:

```text
AMAT = Hit ratio x Cache time + Miss ratio x (Cache time + Main memory time)
```

Substitution:

```text
AMAT = 0.9 x 100 + 0.1 x (100 + 1000)
AMAT = 90 + 110
AMAT = 200 ns
```

So average memory access time is:

```text
AMAT = 200 ns
```

#### Case 2: With Write-through policy and 80% read, 20% write

In write-through, every write updates both cache and main memory.

Read time:

```text
Read average = 0.9 x 100 + 0.1 x (100 + 1000)
Read average = 200 ns
```

Write time in write-through:

```text
Write time = Cache time + Main memory time
Write time = 100 + 1000 = 1100 ns
```

Overall average:

```text
Average = 0.8 x Read average + 0.2 x Write time
Average = 0.8 x 200 + 0.2 x 1100
Average = 160 + 220
Average = 380 ns
```

#### Final Answer

```text
Average access time = 380 ns
```

#### Important Note

==If question does not mention read/write percentage, use normal AMAT formula. If write-through and read/write percentage are given, calculate weighted average.==

---

### Q5. Explain Associative Memory / Content Addressable Memory with block diagram and match logic.

#### Answer

==Associative memory==, also called ==Content Addressable Memory (CAM)==, is a memory in which data is accessed by content rather than by address.

In normal memory, data is accessed using address. In associative memory, a search word is compared with all stored words simultaneously.

#### Block Diagram

```text
             +------------------+
Search Key ->| Argument Register|
             +------------------+
                      |
                      v
             +------------------+
Mask ------->| Mask Register    |
             +------------------+
                      |
                      v
+------------------------------------------------+
|              Associative Memory                |
| +--------+  +--------+  +--------+  +--------+ |
| | Word 0 |  | Word 1 |  | Word 2 |  | Word n | |
| +--------+  +--------+  +--------+  +--------+ |
+------------------------------------------------+
                      |
                      v
             +------------------+
             | Match Register   |
             +------------------+
```

#### Match Logic

Each bit of the search key is compared with corresponding memory bits.

```text
If all selected bits match -> Match bit = 1
If any selected bit differs -> Match bit = 0
```

Mask register is used to ignore some bits during comparison.

#### Working

1. Search data is placed in argument register.
2. Mask register selects which bits should be compared.
3. All memory words are compared in parallel.
4. Matching words are identified by match register.
5. Required word is selected.

#### Advantages

- Very fast searching.
- All words are searched in parallel.
- Useful in cache tag searching.

#### Disadvantages

- Expensive hardware.
- Complex circuit design.
- High power consumption.

#### Applications

- Cache memory tag lookup.
- Translation Lookaside Buffer (TLB).
- Network routers.
- Pattern matching.

#### Conclusion

Associative memory searches data using content instead of address. It is very fast because all words are compared simultaneously, but it is costly and complex.

---

### Q6. Explain Primary and Auxiliary Memory / Types of Memory in Computer Systems.

#### Answer

Computer memory is used to store data, instructions, intermediate results, and final results.

Memory is mainly classified into:

- Primary memory
- Auxiliary memory

#### Primary Memory

==Primary memory== is directly accessible by the CPU. It stores currently running programs and data.

#### Types of Primary Memory

| Type | Meaning |
|---|---|
| RAM | Volatile read/write memory |
| ROM | Non-volatile memory containing permanent instructions |
| Cache | High-speed memory between CPU and RAM |
| Registers | Fastest memory inside CPU |

#### RAM

RAM stores data and programs currently being used by the CPU.

- Volatile memory.
- Read/write memory.
- Faster than secondary storage.

#### ROM

ROM stores permanent instructions such as boot program.

- Non-volatile memory.
- Mostly read-only.

#### Auxiliary Memory

==Auxiliary memory==, also called secondary memory, is used for permanent storage of data and programs.

#### Examples

- Hard disk
- SSD
- CD/DVD
- Pen drive
- Magnetic tape

#### Difference Table

| Basis | Primary Memory | Auxiliary Memory |
|---|---|---|
| Access | Directly accessible by CPU | Accessed through I/O channels |
| Speed | Faster | Slower |
| Capacity | Smaller | Larger |
| Cost | Costly | Cheaper |
| Volatility | RAM is volatile | Usually non-volatile |
| Example | RAM, ROM, cache | HDD, SSD, tape |

#### Conclusion

Primary memory is fast and directly used by the CPU, while auxiliary memory is slower but provides large permanent storage.

---

### Q7. Direct Mapped Cache numerical: Cache size 64 words, block size 4 words, main memory 512 bytes — find address fields.

#### Answer

Given:

```text
Cache size = 64 words
Block size = 4 words
Main memory = 512 bytes
Assume 1 word = 1 byte unless specified
```

#### Step 1: Number of cache lines

```text
Cache lines = Cache size / Block size
Cache lines = 64 / 4 = 16 lines
```

Bits for line number:

```text
Line bits = log2(16) = 4 bits
```

#### Step 2: Block offset

```text
Block size = 4 words
Offset bits = log2(4) = 2 bits
```

#### Step 3: Main memory address bits

```text
Main memory size = 512 bytes
Address bits = log2(512) = 9 bits
```

#### Step 4: Tag bits

Direct mapped address format:

```text
Tag + Line + Word Offset
```

```text
Tag bits = Total address bits - Line bits - Offset bits
Tag bits = 9 - 4 - 2 = 3 bits
```

#### Final Answer

```text
Total physical address = 9 bits
Tag = 3 bits
Line = 4 bits
Block/word offset = 2 bits
```

#### Address Format

```text
+--------+---------+-------------+
| Tag 3  | Line 4  | Offset 2    |
+--------+---------+-------------+
```

---

### Q8. Two-way Set Associative Cache numerical: Blocks of 4 words, cache table 2048 words, main memory 128K x 32.

#### Answer

Given:

```text
Block size = 4 words
Cache size = 2048 words
Main memory = 128K x 32
Set associative = 2-way
```

#### Step 1: Number of cache blocks/lines

```text
Cache lines = Cache size / Block size
Cache lines = 2048 / 4 = 512 lines
```

#### Step 2: Number of sets

In 2-way set associative cache:

```text
Number of sets = Cache lines / 2
Number of sets = 512 / 2 = 256 sets
```

Set index bits:

```text
Set bits = log2(256) = 8 bits
```

#### Step 3: Word offset bits

```text
Block size = 4 words
Offset bits = log2(4) = 2 bits
```

#### Step 4: Main memory address bits

```text
Main memory = 128K words = 128 x 1024 = 131072 words
Address bits = log2(131072) = 17 bits
```

#### Step 5: Tag bits

Set associative address format:

```text
Tag + Set + Word Offset
```

```text
Tag bits = 17 - 8 - 2 = 7 bits
```

#### Final Answer

```text
Total address bits = 17
Tag = 7 bits
Set = 8 bits
Word offset = 2 bits
```

#### Address Format

```text
+--------+--------+-------------+
| Tag 7  | Set 8  | Offset 2    |
+--------+--------+-------------+
```

---

### Q9. How many 128-byte RAM chips are required to provide 2048 bytes? Show connection idea.

#### Answer

Given:

```text
Required memory = 2048 bytes
Each RAM chip = 128 bytes
```

#### Number of Chips

```text
Number of chips = Required memory / Chip capacity
Number of chips = 2048 / 128
Number of chips = 16
```

So, ==16 RAM chips of 128 bytes are required==.

#### Address Lines

Total memory:

```text
2048 bytes = 2^11 bytes
```

So total address lines required:

```text
11 address lines: A0 to A10
```

Each chip:

```text
128 bytes = 2^7 bytes
```

So each chip needs:

```text
7 address lines: A0 to A6
```

#### Chip Selection

Remaining high-order address lines:

```text
A7, A8, A9, A10 = 4 lines
```

These 4 lines are given to a ==4-to-16 decoder== to select one of 16 RAM chips.

#### Connection Diagram

```text
A0-A6  ------------------> Address pins of all RAM chips
Data bus <---------------> Data pins of all RAM chips
A7-A10 ---> 4-to-16 Decoder ---> Chip select CS0 to CS15
Read/Write --------------------> Control pins of all chips
```

#### Conclusion

To construct 2048 bytes using 128-byte RAM chips, 16 chips are required. Lower 7 address lines select location inside each chip, and upper 4 address lines select the chip using a 4-to-16 decoder.

---

### Q10. Explain Multi-module Memories and Interleaving with example.

#### Answer

==Multi-module memory== is a memory organization in which main memory is divided into several independent modules.

==Memory interleaving== is a technique of distributing consecutive memory addresses among different memory modules to increase memory access speed.

#### Need

If memory has only one module, the CPU must wait for one memory access to complete before starting another. In interleaving, multiple modules can work in parallel.

#### Low-order Interleaving Example

Suppose there are 4 memory modules: M0, M1, M2, M3.

| Address | Module |
|---|---|
| 0 | M0 |
| 1 | M1 |
| 2 | M2 |
| 3 | M3 |
| 4 | M0 |
| 5 | M1 |
| 6 | M2 |
| 7 | M3 |

Formula:

```text
Module number = Address mod Number of modules
```

#### Diagram

```text
CPU
 |
 +----> Memory Module M0: 0, 4, 8, 12
 +----> Memory Module M1: 1, 5, 9, 13
 +----> Memory Module M2: 2, 6, 10, 14
 +----> Memory Module M3: 3, 7, 11, 15
```

#### Advantages

- Increases memory bandwidth.
- Reduces memory access waiting time.
- Supports parallel memory access.
- Useful for pipelined processors.

#### Conclusion

Multi-module memory divides memory into modules. Interleaving stores consecutive addresses in different modules so that multiple memory accesses can overlap, improving speed.

---

### Q11. Explain concept of Cache Memory and how it increases speed of computer.

#### Answer

==Cache memory== is a small, high-speed memory placed between CPU and main memory.

It stores frequently used data and instructions so that CPU can access them quickly.

#### Cache Position

```text
CPU <----> Cache Memory <----> Main Memory
```

#### Working

1. CPU requests data.
2. Cache is checked first.
3. If data is found, it is called ==cache hit==.
4. If data is not found, it is called ==cache miss==.
5. On miss, data is brought from main memory to cache.

#### Important Terms

| Term | Meaning |
|---|---|
| Hit | Required data found in cache |
| Miss | Required data not found in cache |
| Hit ratio | Fraction of accesses found in cache |
| Miss ratio | Fraction of accesses not found in cache |
| Cache block | Unit of data transfer between cache and memory |

#### How Cache Increases Speed

- Cache is faster than main memory.
- Frequently used data is available near CPU.
- Reduces average memory access time.
- Uses temporal and spatial locality.

#### Formula

```text
Average Access Time = Hit ratio x Cache time + Miss ratio x Miss penalty
```

#### Conclusion

Cache memory increases computer speed by storing frequently used data close to the CPU and reducing slow main memory accesses.

---

### Q12. CPU has 12-bit address for memory — find memory addressability and word length if total capacity = 16KB.

#### Answer

Given:

```text
Address bits = 12
Total memory capacity = 16 KB
```

#### Step 1: Number of addressable locations

```text
Number of locations = 2^12 = 4096 locations
```

#### Step 2: Total capacity in bytes

```text
16 KB = 16 x 1024 = 16384 bytes
```

#### Step 3: Word size

```text
Word size = Total capacity / Number of locations
Word size = 16384 / 4096
Word size = 4 bytes
```

In bits:

```text
4 bytes = 4 x 8 = 32 bits
```

#### Final Answer

```text
Memory addressability = 4096 locations
Word length = 4 bytes = 32 bits
```

---

## Final 60+ Marks Revision Priority

1. Memory hierarchy diagram and principle of locality
2. Cache mapping: direct + set-associative
3. Virtual memory with address translation diagram
4. Cache average access time numerical
5. Associative memory/CAM diagram and match logic
6. Primary vs auxiliary memory
7. Direct mapped cache numerical
8. Two-way set associative numerical
9. RAM chip requirement numerical
10. Multi-module memory and interleaving

## Last-Minute Formula Sheet

| Topic | Formula / Must Remember |
|---|---|
| Direct mapping | Line = block number mod number of cache lines |
| Set-associative | Set = block number mod number of sets |
| Block offset bits | log2(block size) |
| Line bits | log2(number of cache lines) |
| Set bits | log2(number of sets) |
| Tag bits | Total address bits - index bits - offset bits |
| AMAT | Hit ratio x cache time + miss ratio x miss penalty |
| Miss ratio | 1 - hit ratio |
| RAM chips | Required memory / chip capacity |
| Address lines | log2(number of locations) |
| Interleaving | Module = address mod number of modules |

## Exam Writing Tip

For Unit 3, diagrams and formulas are marks. Draw memory hierarchy, cache mapping, virtual memory translation, and associative memory block diagram neatly. In numericals, always show each bit calculation separately.
