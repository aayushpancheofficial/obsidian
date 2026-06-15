# Associative Memory

## Definition

Associative memory, or content addressable memory, searches data by content instead of address.

## Diagram

```text
Search Key -> Argument Register -> Associative Memory -> Match Register
Mask Register controls selected bits
```

## Features

- Parallel search.
- Very fast lookup.
- Expensive hardware.
- Used in cache tag search and TLB.

## Exam Answer

Associative memory compares the search key with all stored words simultaneously. Matching words are indicated using match logic and match register.
