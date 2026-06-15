# Vectored Interrupts

## Definition

Vectored interrupt is an interrupt in which the address of the interrupt service routine is supplied or predefined.

## Working

- Interrupt occurs.
- CPU obtains interrupt vector.
- Vector gives ISR address.
- CPU jumps directly to ISR.

## Advantage

Fast interrupt handling because ISR address is directly available.

## Exam Answer

Vectored interrupts reduce interrupt response time because CPU can directly locate the interrupt service routine using the interrupt vector.
