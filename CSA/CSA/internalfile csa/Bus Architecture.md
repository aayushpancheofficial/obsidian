# Bus Architecture

## Meaning

Bus architecture describes how CPU, memory, and I/O units are connected through buses.

## Diagram

```text
CPU ---- Data Bus ---- Memory / I/O
CPU ---- Address Bus - Memory / I/O
CPU ---- Control Bus - Memory / I/O
```

## Explanation

- Data bus transfers actual data.
- Address bus selects memory or I/O location.
- Control bus sends read/write and timing signals.

## Advantages

- Simple design.
- Reduces wiring.
- Easy device connection.

## Limitation

Only one transfer can use a shared bus at a time.
