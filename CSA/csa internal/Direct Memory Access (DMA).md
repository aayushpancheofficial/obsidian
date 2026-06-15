# Direct Memory Access (DMA)

## Definition

DMA allows direct data transfer between I/O device and main memory without continuous CPU involvement.

## Working

1. CPU initializes DMA controller.
2. DMA requests bus control.
3. CPU grants bus.
4. DMA transfers data directly.
5. DMA interrupts CPU after completion.

## Modes

- Burst mode
- Cycle stealing
- Transparent mode

## Exam Answer

DMA improves I/O speed by allowing block data transfer directly between device and memory. During transfer, DMA controller controls the system bus after CPU grants it.
