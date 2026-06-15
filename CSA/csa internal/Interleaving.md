# Interleaving

## Definition

Memory interleaving distributes consecutive memory addresses among different memory modules.

## Formula

```text
Module number = Address mod Number of modules
```

## Example

For 4 modules:

| Address | Module |
|---|---|
| 0 | M0 |
| 1 | M1 |
| 2 | M2 |
| 3 | M3 |
| 4 | M0 |

## Exam Answer

Interleaving increases memory speed by allowing consecutive accesses to use different modules, so memory operations can overlap.
