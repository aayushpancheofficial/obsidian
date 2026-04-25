Table of Contents

- [[# Introduction to C++ and Setup]]
- [[# Writing Your First C++ Program]]
- [[# Variables and Data Types]]
- [[# Constants and the const Keyword]]
- [[# Namespaces]]
- [[# Type Definitions and Aliases]]
- [[# Arithmetic Operators]]
- [[# Type Conversion]]
- [[# User Input in C++]]
- [[# Math Functions]]
- [[# Practice Project: Hypotenuse Calculation]]
- [[# Conditional Statements: If, Else If, Else]]
- [[# Switch Statements]]
- [[# Calculator Program Using Switch]]
- [[# Ternary Operator]]
- [[# Logical Operators: AND, OR, NOT]]
- [[# Temperature Conversion Program]]
- [[# String Methods]]
- [[# While Loops]]
- [[# Do While Loops]]
- [[# For Loops]]
- [[# Break and Continue Keywords]]
- [[# Nested Loops]]
- [[# Random Numbers]]
- [[# Random Event Generator]]
- [[# Number Guessing Game]]
- [[# Functions]]
- [[# The Return Keyword]]
- [[# Function Overloading]]
- [[# Variable Scope]]
- [[# Banking Program Practice]]
- [[# Rock Paper Scissors Game]]
- [[# Arrays]]
- [[# Sizeof Operator]]
- [[# Iterating Over Arrays]]
- [[# For Each Loop]]
- [[# Passing Arrays to Functions]]
- [[# Searching an Array]]
- [[# Sorting an Array (Bubble Sort)]]
- [[# Fill Function]]
- [[# Accepting User Input into Arrays]]
- [[# Multi-Dimensional Arrays]]
- [[# Quiz Game]]
- [[# Memory Addresses]]
- [[# Pass By Value vs Pass By Reference]]
- [[# Const Parameters]]
- [[# Credit Card Validation Program]]
- [[# Pointers]]
- [[# Null Pointers]]
- [[# Tic Tac Toe Game]]
- [[# Dynamic Memory]]
- [[# Recursion]]
- [[# Function Templates]]
- [[# Structs]]
- [[# Passing Structs to Functions]]
- [[# Enums]]
- [[# Introduction to Object-Oriented Programming]]
- [[# Constructors]]
- [[# Overloaded Constructors]]
- [[# Getters and Setters]]
- [[# Inheritance]]

---

#### Introduction to C++ and Setup

Explanation

- C++ is a fast, middle-level programming language used extensively in graphics, embedded systems, and video games.
- It balances low-level hardware interaction with higher-level human readability.
- C++ is faster than languages like Python or Java but has a steeper learning curve.
- To start programming in C++, you'll need a text editor or IDE (VS Code, CodeBlocks) and a compiler (GCC for Linux/Windows, Clang for Mac).
- VS Code extensions like C/C++ and Code Runner enhance development.
- Setting up compilers differs by OS, with Windows requiring additional setup (MinGW).

Key Points

- C++ is fast and versatile for system and game development.
- Requires text editor + compiler.
- VS Code with extensions recommended.
- Compiler setup varies across OS.

---

#### Writing Your First C++ Program

Explanation

- Begin with including header files like `<iostream>` for input/output.
- The `main` function is the program entry point and returns an integer; returning zero means success.
- Output uses `std::cout` with the insertion operator `<<`.
- Use `std::endl` or `\n` for new lines; `endl` flushes the output buffer.
- Comments: single line with `//`, multi-line with `/* ... */`.

Example

```cpp
#include <iostream>

int main() {
    std::cout << "I like pizza" << std::endl;
    std::cout << "It's really good" << std::endl;
    return 0;
}
```

Key Points

- Use `#include <iostream>` for IO.
- Program starts at `int main()`.
- Use `std::cout` for output.
- Semicolons end statements.
- Comments help annotate code.

---

#### Variables and Data Types

Explanation

- Variables store data; declaration defines type and identifier, assignment sets a value.
- Common data types:
  - `int` for whole numbers.
  - `double` for floating-point numbers.
  - `char` for single characters (use single quotes).
  - `bool` for true/false.
  - `std::string` for sequences of text.
- Variables can be declared and assigned separately or combined.
- Assigning incompatible types truncates values (e.g., double to int).
- Boolean variables represent two states, useful for flags.
- Strings can be concatenated and manipulated.

Example

```cpp
int x = 5;
double price = 10.99;
char grade = 'A';
bool isStudent = true;
std::string name = "Bro";
```

Key Points

- Declare variables with type and name.
- Use appropriate types for data.
- String literals in double quotes; chars in single quotes.
- Boolean values are true or false.
- Variables must match their data type.

---

#### Constants and the const Keyword

Explanation

- `const` keyword makes variables read-only after initialization.
- Protects important values from accidental modification.
- Commonly used for fixed values like Pi, speed of light, screen resolution.
- Naming convention: constants often use uppercase letters.
- Attempting to modify a const variable results in a compilation error.

Example

```cpp
const double PI = 3.14159;
// PI = 4.0; // Error: assignment of read-only variable 'PI'
```

Key Points

- Use `const` for unchangeable values.
- Helps maintain data integrity.
- Naming conventions improve readability.
- Prevents accidental reassignment.

---

#### Namespaces

Explanation

- Namespaces prevent name conflicts by grouping entities under unique identifiers.
- Allows same variable or function names to exist in different namespaces.
- Use scope resolution operator `::` to access specific namespace members.
- `using namespace` directive imports all members from a namespace but can cause conflicts.
- Safer alternatives: use selective `using std::cout` or prefix with namespace.

Example

```cpp
namespace first {
    int x = 1;
}

namespace second {
    int x = 2;
}

int main() {
    std::cout << first::x << std::endl;  // 1
    std::cout << second::x << std::endl; // 2
}
```

Key Points

- Prevents naming collisions in large projects.
- Use `namespace::entity` to specify.
- Avoid `using namespace std;` to reduce conflicts.
- Use selective import for clarity.

---

#### Type Definitions and Aliases

Explanation

- `typedef` creates an alias for a data type, improving readability.
- `using` is a modern alternative, better suited for templates.
- Useful for long or complex types, e.g., vectors of pairs.
- Aliases simplify code and reduce typing errors.

Example

```cpp
typedef std::string text_t;
using number_t = int;

text_t name = "Bro";
number_t age = 21;
```

Key Points

- `typedef` and `using` create type aliases.
- `using` preferred in modern C++.
- Improves code clarity and maintainability.

---

#### Arithmetic Operators

Explanation

- Basic operators: `+`, `-`, `*`, `/` for addition, subtraction, multiplication, division.
- Shorthand operators: `+=`, `-=`, `*=`, `/=`.
- Increment `++` and decrement `--` operators add or subtract one.
- Modulus `%` returns remainder of division, useful for checking even/odd.
- Operator precedence: parentheses > multiplication/division > addition/subtraction.

Example

```cpp
int students = 20;
students += 2;    // 22
students++;       // 23
int remainder = students % 2; // 1 (odd)
```

Key Points

- Use appropriate operators for arithmetic.
- Modulus for remainder calculations.
- Use parentheses to enforce precedence.
- Increment/decrement useful in loops.

---

#### Type Conversion

Explanation

- Implicit conversion happens automatically between compatible types.
- Explicit conversion (casting) uses syntax `(type)value`.
- Important when converting between integers and floating-point to avoid truncation.
- Useful for precise calculations like percentages.

Example

```cpp
int x = (int)3.14;    // explicit cast, x = 3
double score = (double)8 / 10 * 100; // 80.0%
```

Key Points

- Implicit and explicit type conversions exist.
- Casting prevents data loss issues.
- Use when mixing different numeric types.

---

#### User Input in C++

Explanation

- Use `std::cin` with extraction operator `>>` to accept input.
- For strings with spaces, use `std::getline(std::cin, variable)`.
- In VS Code, enable "Run in Terminal" to accept input properly.
- Clear input buffer using `std::ws` to handle new line characters before `getline`.

Example

```cpp
std::string name;
std::cout << "What's your name? ";
std::getline(std::cin >> std::ws, name);
std::cout << "Hello " << name << std::endl;
```

Key Points

- `cin` reads input but stops at whitespace.
- Use `getline` for full line input including spaces.
- Manage input buffer carefully.

---

#### Math Functions

Explanation

- C++ `<cmath>` header provides math functions like `max`, `min`, `pow`, `sqrt`, `abs`, `round`, `ceil`, `floor`.
- Useful for common mathematical operations.
- `pow(base, exponent)` calculates power.
- `sqrt(x)` calculates square root.
- `abs(x)` returns absolute value.
- `round(x)`, `ceil(x)`, `floor(x)` handle rounding.

Example

```cpp
#include <cmath>

double x = 3.14;
double rounded = round(x);  // 3
double root = sqrt(9);      // 3
```

Key Points

- Use `<cmath>` for math utilities.
- Provides powerful built-in functions.
- Helpful in numeric computations.

---

#### Practice Project: Hypotenuse Calculation

Explanation

- Calculates the hypotenuse of a right triangle using the Pythagorean theorem.
- Accepts user input for sides `a` and `b`.
- Uses `pow` and `sqrt` from `<cmath>` to compute.
- Output is the hypotenuse length.

Example

```cpp
double a, b, c;
std::cout << "Enter side a: ";
std::cin >> a;
std::cout << "Enter side b: ";
std::cin >> b;
c = sqrt(pow(a, 2) + pow(b, 2));
std::cout << "Hypotenuse is: " << c << std::endl;
```

Key Points

- Demonstrates user input, math functions.
- Shows formula implementation in code.

---

#### Conditional Statements: If, Else If, Else

Explanation

- `if` executes code if condition is true.
- `else` executes if `if` condition is false.
- `else if` checks additional conditions.
- Conditions use comparison operators: `==`, `!=`, `<`, `>`, `<=`, `>=`.
- Order of conditions matters; first true condition executes.

Example

```cpp
if (age >= 100) {
    std::cout << "Too old to enter\n";
} else if (age >= 18) {
    std::cout << "Welcome to the site\n";
} else if (age < 0) {
    std::cout << "You haven't been born yet\n";
} else {
    std::cout << "Not old enough\n";
}
```

Key Points

- Use `if/else if/else` for branching logic.
- Careful with condition order.
- Use comparison operators properly.

---

#### Switch Statements

Explanation

- Alternative to multiple `else if` statements.
- Matches a value against multiple `case`s.
- Use `break` to exit after a match.
- `default` case handles unmatched values.
- Efficient and easier to read for multiple discrete options.

Example

```cpp
switch(month) {
    case 1: std::cout << "January\n"; break;
    case 2: std::cout << "February\n"; break;
    default: std::cout << "Invalid month\n";
}
```

Key Points

- Use for discrete value checking.
- Breaks prevent fall-through.
- Default handles unexpected input.

---

#### Calculator Program Using Switch

Explanation

- Accepts operator and two numbers.
- Uses switch on operator char ('+', '-', '*', '/').
- Performs calculation and prints result.
- Handles invalid operators with default.

Example

```cpp
char op;
double num1, num2, result;
std::cin >> op >> num1 >> num2;
switch(op) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num1 / num2; break;
    default: std::cout << "Invalid operator\n"; return 1;
}
std::cout << "Result: " << result << std::endl;
```

Key Points

- Demonstrates switch with calculations.
- Handles invalid input gracefully.

---

#### Ternary Operator

Explanation

- Shorthand for simple `if-else` statements.
- Syntax: `condition ? expr_if_true : expr_if_false`.
- Evaluates `condition`, executes one of two expressions.
- Useful for concise conditional assignments or outputs.

Example

```cpp
int grade = 75;
std::cout << (grade >= 60 ? "You pass" : "You fail") << std::endl;
```

Key Points

- Compact alternative to `if-else`.
- Use for simple true/false choices.
- Improves code brevity.

---

#### Logical Operators: AND, OR, NOT

Explanation

- `&&` (AND): true if both conditions true.
- `||` (OR): true if at least one condition true.
- `!` (NOT): inverts boolean value.
- Combine conditions for complex logic.
- Used in `if` statements and loops.

Example

```cpp
if (temp > 0 && temp < 30) {
    std::cout << "Temperature is good\n";
}
if (temp <= 0 || temp >= 30) {
    std::cout << "Temperature is bad\n";
}
if (!sunny) {
    std::cout << "It is cloudy\n";
}
```

Key Points

- Combine conditions with logical operators.
- Use NOT to invert booleans.
- Essential for decision making.

---

#### Temperature Conversion Program

Explanation

- Converts temperature between Celsius and Fahrenheit.
- User selects target unit ('C' or 'F').
- Uses formulas: F = 1.8*C + 32, C = (F - 32)/1.8.
- Handles uppercase/lowercase input.
- Validates input unit.

Example

```cpp
char unit;
double temp;
std::cout << "Convert to C or F? ";
std::cin >> unit;
if (unit == 'F' || unit == 'f') {
    std::cout << "Enter Celsius: ";
    std::cin >> temp;
    temp = 1.8 * temp + 32;
    std::cout << "Temperature is " << temp << " F\n";
} else if (unit == 'C' || unit == 'c') {
    std::cout << "Enter Fahrenheit: ";
    std::cin >> temp;
    temp = (temp - 32) / 1.8;
    std::cout << "Temperature is " << temp << " C\n";
} else {
    std::cout << "Please enter only C or F\n";
}
```

Key Points

- Uses conditionals to branch conversions.
- Input validation included.
- Demonstrates practical use of math.

---

#### String Methods

Explanation

- Strings have useful methods like `.length()`, `.empty()`, `.clear()`, `.append()`, `.at()`, `.insert()`, `.find()`, `.erase()`.
- `.length()` returns number of characters.
- `.empty()` checks if string is empty.
- `.clear()` empties the string.
- `.append()` adds text to end.
- `.at(index)` accesses character at position.
- `.insert(position, text)` inserts text.
- `.find(character)` returns index of first occurrence.
- `.erase(start, count)` removes characters.

Example

```cpp
std::string name = "Bro";
if (!name.empty()) {
    std::cout << "Length: " << name.length() << std::endl;
}
name.append("@gmail.com");
std::cout << "Email: " << name << std::endl;
```

Key Points

- String methods simplify text manipulation.
- Useful for input validation and formatting.
- Indexing starts at zero.

---

#### While Loops

Explanation

- Executes code repeatedly while condition is true.
- Checks condition before each iteration.
- Useful for input validation or repeated actions.
- Can cause infinite loops if no exit condition.

Example

```cpp
std::string name;
while (name.empty()) {
    std::cout << "Enter your name: ";
    std::getline(std::cin, name);
}
std::cout << "Hello " << name << std::endl;
```

Key Points

- Repeat code while condition holds.
- Ensure loop exit conditions to avoid infinite loops.
- Great for user input validation.

---

#### Do While Loops

Explanation

- Executes code block at least once, then repeats while condition true.
- Checks condition after each iteration.
- Useful when code must run once before checking.

Example

```cpp
int number;
do {
    std::cout << "Enter positive number: ";
    std::cin >> number;
} while (number < 0);
```

Key Points

- Code runs once before condition check.
- Perfect for menu-driven programs or input prompts.

---

#### For Loops

Explanation

- Repeat code a fixed number of times.
- Syntax includes initialization, condition, increment/decrement.
- Commonly used for iterating over arrays or counting.

Example

```cpp
for (int i = 1; i <= 5; i++) {
    std::cout << "Happy New Year\n";
}
```

Key Points

- Convenient for known iteration counts.
- Indexing usually starts at 0 or 1.
- Flexible increments (i+=2, i--).

---

#### Break and Continue Keywords

Explanation

- `break` exits the nearest loop immediately.
- `continue` skips current iteration and proceeds to next.
- Useful to control loop behavior.

Example

```cpp
for (int i = 1; i <= 20; i++) {
    if (i == 13) continue; // skip unlucky number
    std::cout << i << std::endl;
}
```

Key Points

- Use `break` to exit loops early.
- Use `continue` to skip iterations.
- Improves loop control and readability.

---

#### Nested Loops

Explanation

- Loop inside another loop.
- Outer loop controls rows, inner loop controls columns often.
- Common for 2D data like grids or matrices.

Example

```cpp
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 6; j++) {
        std::cout << "@";
    }
    std::cout << std::endl;
}
```

Key Points

- Inner loop runs fully for each outer loop iteration.
- Useful for multi-dimensional data.

---

#### Random Numbers

Explanation

- Use `rand()` function to generate pseudo-random numbers.
- Seed random generator with current time via `srand(time(0))`.
- Use modulus operator to limit range.
- Add offset to change range start.

Example

```cpp
#include <cstdlib>
#include <ctime>

srand(time(0));
int dice = rand() % 6 + 1; // 1 to 6
```

Key Points

- Seed once using `srand`.
- Modulus controls range.
- Not truly random but sufficient for most uses.

---

#### Random Event Generator

Explanation

- Uses random numbers and switch statements to select random events.
- Useful for games or simulations.

Example

```cpp
int event = rand() % 5 + 1;
switch(event) {
    case 1: std::cout << "Win a bumper sticker\n"; break;
    case 2: std::cout << "Win a T-shirt\n"; break;
    // Other cases...
}
```

Key Points

- Randomness adds variability.
- Switch handles multiple outcomes.
- Great for game mechanics.

---

#### Number Guessing Game

Explanation

- Generates a random number.
- User guesses until correct.
- Provides feedback on each guess.
- Counts number of attempts.

Example

```cpp
int num = rand() % 100 + 1, guess, tries = 0;
do {
    std::cout << "Guess a number: ";
    std::cin >> guess;
    tries++;
    if (guess > num) std::cout << "Too high\n";
    else if (guess < num) std::cout << "Too low\n";
} while (guess != num);
std::cout << "Correct! Tries: " << tries << std::endl;
```

Key Points

- Demonstrates loops, conditionals, input/output.
- User interaction with feedback.

---

#### Functions

Explanation

- Blocks of reusable code.
- Declared with return type, function name, parameters.
- Called (invoked) using function name and arguments.
- Can accept arguments and return values.
- Variables inside functions are local (scope).

Example

```cpp
void happyBirthday(std::string name) {
    std::cout << "Happy Birthday, " << name << "!\n";
}

int main() {
    happyBirthday("Bro");
}
```

Key Points

- Promote code reuse.
- Parameters pass data into functions.
- Return values pass data back.

---

#### The Return Keyword

Explanation

- Returns a value from a function to the caller.
- Function return type must match returned value.
- Allows capturing results from functions.

Example

```cpp
double square(double length) {
    return length * length;
}

double area = square(5.0);
```

Key Points

- Functions can return values.
- Return ends function execution.
- Return type declaration important.

---

#### Function Overloading

Explanation

- Multiple functions with same name but different parameters.
- Compiler selects appropriate function based on arguments.
- Improves readability and flexibility.

Example

```cpp
void bakePizza() {
    std::cout << "Here is your pizza\n";
}
void bakePizza(std::string topping) {
    std::cout << "Here is your " << topping << " pizza\n";
}
```

Key Points

- Same function name, different parameter lists.
- Enables varied behavior.

---

#### Variable Scope

Explanation

- Local variables declared inside functions or blocks.
- Global variables declared outside all functions.
- Local variables shadow globals with same name.
- Access to variables depends on scope visibility.
- Use scope resolution operator `::` to access global variable if shadowed.

Example

```cpp
int myNum = 3; // global

void printNum() {
    int myNum = 2; // local shadows global
    std::cout << myNum << std::endl; // prints 2
    std::cout << ::myNum << std::endl; // prints 3
}
```

Key Points

- Scope controls variable visibility.
- Prefer local variables for security and clarity.
- Use `::` to access global when needed.

---

#### Banking Program Practice

Explanation

- Simulates bank account with balance.
- Functions to show balance, deposit, withdraw.
- Validates transactions (e.g., no negative deposits, no overdrafts).
- Uses do-while loop for menu-driven interface.
- Uses `iomanip` for decimal precision.

Key Points

- Practice with functions, conditionals, loops.
- Input validation critical.
- User-friendly menu implementation.

---

#### Rock Paper Scissors Game

Explanation

- User selects rock, paper, or scissors.
- Computer randomly selects choice.
- Determine winner with conditional logic.
- Uses functions to modularize code.
- Validates user input.

Key Points

- Combines random numbers, input, conditionals.
- Modular design enhances readability.

---

#### Arrays

Explanation

- Data structure holding multiple values of the same type.
- Access elements via zero-based index.
- Fixed size (static).
- Can declare and initialize simultaneously or separately.
- Arrays cannot hold mixed types.

Example

```cpp
std::string cars[3] = {"Corvette", "Mustang", "Camry"};
std::cout << cars[0] << std::endl; // Corvette
```

Key Points

- Fixed size, homogeneous types.
- Zero-based indexing.
- Use `[]` brackets for declaration and access.

---

#### Sizeof Operator

Explanation

- Returns size in bytes of a variable or data type.
- Useful for memory calculations.
- Can calculate number of elements in an array by dividing total size by element size.

Example

```cpp
int numbers[5];
int size = sizeof(numbers) / sizeof(numbers[0]); // 5
```

Key Points

- Measures memory footprint.
- Helps in array manipulations.

---

#### Iterating Over Arrays

Explanation

- Use `for` loops to traverse arrays.
- Calculate array length dynamically with `sizeof`.
- Access each element by index.

Example

```cpp
for (int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++) {
    std::cout << arr[i] << std::endl;
}
```

Key Points

- Avoid hardcoding array sizes.
- Loop from 0 to size - 1.

---

#### For Each Loop

Explanation

- Simplified loop to iterate over all elements.
- Syntax: `for (data_type var : container)`.
- Less flexible than `for` (no index control).

Example

```cpp
for (std::string student : students) {
    std::cout << student << std::endl;
}
```

Key Points

- Minimal syntax.
- Use when only iteration is needed.

---

#### Passing Arrays to Functions

Explanation

- Pass array name (no brackets) to function.
- Array decays to pointer; size info lost.
- Pass array size as separate parameter.
- Use size to iterate safely inside function.

Example

```cpp
double getTotal(double prices[], int size) {
    double total = 0;
    for (int i = 0; i < size; i++) total += prices[i];
    return total;
}
```

Key Points

- Always pass size with array.
- Functions work with pointers, not full array.

---

#### Searching an Array

Explanation

- Linear search iterates through array to find element.
- Return index if found or -1 if not.
- Works with any data type (int, string).

Example

```cpp
int search(int arr[], int size, int elem) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == elem) return i;
    }
    return -1;
}
```

Key Points

- Simple, straightforward search.
- Returns position or sentinel (-1).

---

#### Sorting an Array (Bubble Sort)

Explanation

- Bubble sort compares adjacent elements, swapping if out of order.
- Repeats passes until array is sorted.
- Nested loops used: outer loop for passes, inner loop for comparisons.
- Not efficient for large arrays but good for learning.

Example

```cpp
void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size-1; i++) {
        for (int j = 0; j < size-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp;
            }
        }
    }
}
```

Key Points

- Simple sorting algorithm.
- Nested loops with swapping.
- Educational but inefficient.

---

#### Fill Function

Explanation

- Fills a range of elements in an array with a given value.
- Requires start pointer, end pointer, and value.
- Useful for initializing large arrays.

Example

```cpp
std::fill(arr, arr + size, "pizza");
```

Key Points

- Efficient array initialization.
- Avoid manual repetitive assignments.

---

#### Accepting User Input into Arrays

Explanation

- Use a loop to accept inputs for each array element.
- Use temporary variable to validate inputs.
- Break loop early if user quits input (e.g., inputs 'Q').
- Avoid adding quit signal to array.

Example

```cpp
std::string temp;
for (int i = 0; i < size; i++) {
    std::getline(std::cin, temp);
    if (temp == "Q") break;
    arr[i] = temp;
}
```

Key Points

- Handle user quit input gracefully.
- Validate inputs before assignment.

---

#### Multi-Dimensional Arrays

Explanation

- Arrays of arrays (e.g., 2D arrays).
- Represent grids or matrices with rows and columns.
- Access elements with two indices `[row][column]`.
- Nested loops iterate rows and columns.

Example

```cpp
std::string cars[3][3] = {
    {"Mustang", "Escape", "F150"},
    {"Corvette", "Equinox", "Silverado"},
    {"Challenger", "Durango", "Ram1500"}
};
std::cout << cars[0][0] << std::endl; // Mustang
```

Key Points

- Two indices required.
- Useful for tabular data.
- Iterate with nested loops.

---

#### Quiz Game

Explanation

- Uses arrays and 2D arrays for questions and options.
- Accepts user answers and checks correctness.
- Calculates score and percentage.
- Handles uppercase input for answers.

Key Points

- Combines arrays, loops, and conditionals.
- Good example of a text-based game.

---

#### Memory Addresses

Explanation

- Variables reside at memory addresses.
- Use `&` operator to get address.
- Addresses shown in hexadecimal.
- Data types have different sizes in memory.

Key Points

- Understanding addresses important for pointers.
- Size differences affect memory layout.

---

#### Pass By Value vs Pass By Reference

Explanation

- Pass by value copies argument; function works on copy.
- Pass by reference uses memory address; function modifies original.
- Use `&` in parameters to pass by reference.
- Addresses differ for pass by value; same for pass by reference.

Example

```cpp
void swap(int &x, int &y) { int temp = x; x = y; y = temp; }
```

Key Points

- Pass by reference allows modifying caller's variables.
- Pass by value is safer but less flexible.

---

#### Const Parameters

Explanation

- `const` parameters prevent modification inside function.
- Improves security and code clarity.
- Especially important for references and pointers.

Example

```cpp
void printInfo(const std::string &name, const int age) { ... }
```

Key Points

- Use `const` to protect parameters.
- Signals intent to other developers.

---

#### Credit Card Validation Program

Explanation

- Implements Luhn algorithm to validate credit card numbers.
- Steps:
  1. Double every second digit from right.
  2. Sum digits (split double digits).
  3. Sum odd digits.
  4. Add sums and check divisibility by 10.
- Uses string processing and helper functions.

Key Points

- Practical algorithm implementation.
- Involves string and numeric manipulation.

---

#### Pointers

Explanation

- Variables storing memory addresses of other variables.
- Use `&` to get address, `*` to dereference.
- Useful for managing dynamic memory, arrays, data structures.
- Arrays decay to pointers when passed to functions.

Example

```cpp
int x = 5;
int* p = &x;
std::cout << *p << std::endl; // prints 5
```

Key Points

- Pointers hold addresses.
- Dereferencing accesses pointed value.
- Essential for advanced C++ programming.

---

#### Null Pointers

Explanation

- Null pointer means pointer points to nothing.
- Use `nullptr` to initialize or reset pointers.
- Check against `nullptr` before dereferencing to avoid errors.
- Helps avoid undefined behavior.

Example

```cpp
int* p = nullptr;
if (p != nullptr) { std::cout << *p; }
```

Key Points

- Always initialize pointers.
- Check for valid address before use.

---

#### Tic Tac Toe Game

Explanation

- Implements tic tac toe with arrays and functions.
- Uses pointers (arrays decay to pointers).
- Handles player and computer moves.
- Checks win conditions, ties.
- Uses loops, conditionals, random numbers.

Key Points

- Combines many programming concepts.
- Good example of game logic implementation.

---

#### Dynamic Memory

Explanation

- Memory allocated at runtime using `new`.
- Useful when size unknown at compile-time.
- Must `delete` allocated memory to avoid leaks.
- Works with pointers.

Example

```cpp
int* arr = new int[size];
// Use arr
delete[] arr;
```

Key Points

- Dynamic memory increases flexibility.
- Requires careful memory management.

---

#### Recursion

Explanation

- Functions calling themselves to solve problems.
- Requires base case to stop recursion.
- Can simplify some algorithms (factorials, tree traversals).
- Uses more memory and processing time than loops.

Example

```cpp
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

Key Points

- Recursive calls reduce complex problems.
- Must handle base cases.
- Trade-off between clarity and performance.

---

#### Function Templates

Explanation

- Template functions work with multiple data types.
- Define once, generate multiple versions during compilation.
- Supports overloading with different parameter types.

Example

```cpp
template <typename T>
T max(T x, T y) {
    return (x > y) ? x : y;
}
```

Key Points

- Avoids repetitive code.
- Supports generic programming.

---

#### Structs

Explanation

- Group related variables of different types under one name.
- Members accessed via dot operator.
- Can represent complex data like student info.

Example

```cpp
struct Student {
    std::string name;
    double GPA;
    bool enrolled;
};

Student s1 = {"Bro", 3.5, true};
std::cout << s1.name << std::endl;
```

Key Points

- Simple custom data types.
- Access members with dot.

---

#### Passing Structs to Functions

Explanation

- Structs passed by value (copied) or by reference.
- Passing by reference allows modifications.
- Use `&` to pass by reference.

Example

```cpp
void printCar(const Car& car) {
    std::cout << car.model << std::endl;
}
```

Key Points

- Passing by value copies struct.
- Passing by reference more efficient for large structs.

---

#### Enums

Explanation

- Enumerations define named integer constants.
- Easier to manage sets of related values.
- Enums improve code readability and safety.
- Default values start at 0 unless specified.

Example

```cpp
enum Day { Sunday, Monday, Tuesday };
Day today = Sunday;
```

Key Points

- Use for fixed sets of options.
- Prevent invalid values.

---

#### Introduction to Object-Oriented Programming

Explanation

- Objects combine attributes (data) and methods (functions).
- Classes act as blueprints for objects.
- Objects model real-world entities.
- Access members with dot operator.
- Methods invoked with parentheses.

Example

```cpp
class Human {
public:
    std::string name;
    int age;
    void eat() { std::cout << "Eating\n"; }
};

Human h;
h.name = "Rick";
h.eat();
```

Key Points

- Organizes code around objects.
- Combines data and behavior.

---

#### Constructors

Explanation

- Special class methods called upon object creation.
- Initialize attributes with parameters.
- Same name as class.
- Can have multiple constructors (overloading).

Example

```cpp
class Student {
public:
    std::string name;
    int age;
    Student(std::string n, int a) : name(n), age(a) {}
};

Student s("Bro", 21);
```

Key Points

- Automate object initialization.
- Improve code clarity.

---

#### Overloaded Constructors

Explanation

- Multiple constructors with different parameter lists.
- Allow flexible object creation.
- Support default, single, or multiple arguments.

Example

```cpp
class Pizza {
public:
    Pizza() { /* no toppings */ }
    Pizza(std::string t1) { /* one topping */ }
    Pizza(std::string t1, std::string t2) { /* two toppings */ }
};
```

Key Points

- Provide multiple ways to create objects.
- Enhance class flexibility.

---

#### Getters and Setters

Explanation

- Control access to private class members.
- Getters return attribute values.
- Setters assign values with validation.
- Promote encapsulation.

Example

```cpp
class Stove {
private:
    int temperature;
public:
    int getTemperature() { return temperature; }
    void setTemperature(int t) {
        if (t < 0) temperature = 0;
        else if (t > 10) temperature = 10;
        else temperature = t;
    }
};
```

Key Points

- Protect data integrity.
- Hide implementation details.

---

#### Inheritance

Explanation

- Child classes inherit attributes and methods from parent classes.
- Enables code reuse and hierarchy modeling.
- Child classes can add or override members.

Example

```cpp
class Animal {
public:
    bool alive = true;
    void eat() { std::cout << "Eating\n"; }
};

class Dog : public Animal {
public:
    void bark() { std::cout << "Woof\n"; }
};
```

Key Points

- Simplifies class hierarchies.
- Avoids code duplication.
- Supports polymorphism (future topic).

---

### Key Takeaways

- C++ is a powerful language blending low-level control and high-level abstraction.
- Setting up the environment requires a text editor and compiler.
- Core concepts: variables, data types, control structures, functions.
- Input/output handling essential for user interaction.
- Arrays and loops enable data management and iteration.
- Functions promote modular, reusable code; templates add flexibility.
- Pointers and dynamic memory provide advanced control.
- Object-oriented programming organizes code into classes and objects.
- Inheritance and encapsulation improve code reuse and safety.
- Practice projects reinforce understanding of concepts.

---

These notes comprehensively cover the entire video content, structured for easy revision and Obsidian use.