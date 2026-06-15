# Interrupt Handling Mechanism

## Definition

Interrupt handling is the process by which CPU responds to an interrupt request.

## Steps

```text
Interrupt occurs -> Complete current instruction -> Save PC/status -> Identify source -> Execute ISR -> Restore state -> Return
```

## Terms

- ISR: Interrupt Service Routine
- Interrupt vector: Address of ISR
- Masking: Disabling selected interrupts

## Exam Answer

CPU handles an interrupt by saving current program state, executing the interrupt service routine, and then returning to the interrupted program.
