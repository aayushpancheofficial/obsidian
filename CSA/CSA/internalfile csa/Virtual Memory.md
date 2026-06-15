# Virtual Memory

## Definition

Virtual memory gives the illusion of large main memory by using secondary storage as an extension of RAM.

## Address Translation

```text
Virtual Address = Page Number + Offset
Physical Address = Frame Number + Offset
```

## Terms

| Term | Meaning |
|---|---|
| Page | Block of virtual memory |
| Frame | Block of physical memory |
| Page table | Maps pages to frames |
| Page fault | Required page not present in RAM |

## Exam Answer

Virtual memory allows execution of programs larger than physical memory. MMU translates virtual address to physical address using page table.
