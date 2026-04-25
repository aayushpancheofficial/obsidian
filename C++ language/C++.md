# C++ Complete Notes with Code

## Table of Contents

1. [Introduction to C++ and Setup](#Introduction)
2. [Writing Your First C++ Program](#first-program)
3. [Variables and Data Types](#variables)
4. [Constants and the const Keyword](#constants)
5. [Namespaces](#namespaces)
6. [Type Definitions and Aliases](#typedefs)
7. [Arithmetic Operators](#arithmetic)
8. [Type Conversion](#type-conversion)
9. [User Input in C++](#user-input)
10. [Math Functions](#math)
11. [Hypotenuse Calculation](#hypotenuse)
12. [Conditional Statements](#conditionals)
13. [Switch Statements](#switch)
14. [Calculator Program Using Switch](#calculator)
15. [Ternary Operator](#ternary)
16. [Logical Operators](#logical)
17. [Temperature Conversion Program](#temperature)
18. [String Methods](#strings)
19. [While Loops](#while)
20. [Do While Loops](#dowhile)
21. [For Loops](#for)
22. [Break and Continue](#break-continue)
23. [Nested Loops](#nested-loops)
24. [Random Numbers](#random)
25. [Random Event Generator](#random-event)
26. [Number Guessing Game](#guessing-game)
27. [Functions](#functions)
28. [The Return Keyword](#return)
29. [Function Overloading](#overloading)
30. [Variable Scope](#scope)
31. [Banking Program Practice](#banking)
32. [Rock Paper Scissors Game](#rps)
33. [Arrays](#arrays)
34. [Sizeof Operator](#sizeof)
35. [Iterating Over Arrays](#iterate-arrays)
36. [For Each Loop](#foreach)
37. [Passing Arrays to Functions](#pass-arrays)
38. [Searching an Array](#search)
39. [Sorting an Array (Bubble Sort)](#bubble-sort)
40. [Fill Function](#fill)
41. [Accepting User Input into Arrays](#input-arrays)
42. [Multi-Dimensional Arrays](#multi-dim)
43. [Quiz Game](#quiz)
44. [Memory Addresses](#memory)
45. [Pass By Value vs Pass By Reference](#pass-ref)
46. [Const Parameters](#const-params)
47. [Credit Card Validation Program](#credit-card)
48. [Pointers](#pointers)
49. [Null Pointers](#null-pointers)
50. [Tic Tac Toe Game](#tictactoe)
51. [Dynamic Memory](#dynamic-memory)
52. [Recursion](#recursion)
53. [Function Templates](#templates)
54. [Structs](#structs)
55. [Passing Structs to Functions](#pass-structs)
56. [Enums](#enums)
57. [Introduction to OOP](#oop)
58. [Constructors](#constructors)
59. [Overloaded Constructors](#overloaded-constructors)
60. [Getters and Setters](#getters-setters)
61. [Inheritance](#inheritance)

---

## 1. Introduction to C++ and Setup

- C++ is a fast, middle-level language used in graphics, embedded systems, and video games.
- Requires a text editor (VS Code, CodeBlocks) and a compiler (GCC for Linux/Windows, Clang for Mac).
- Windows users need MinGW for GCC setup.
- VS Code extensions: C/C++ and Code Runner.

---

## 2. Writing Your First C++ Program <a name="first-program"></a>

```cpp
#include <iostream>

int main() {
    // Single line comment
    /* Multi-line
       comment */
    std::cout << "I like pizza" << std::endl;
    std::cout << "It's really good" << std::endl;
    return 0;
}
```

**Key Points:**
- `#include <iostream>` for input/output
- Program starts at `int main()`
- `std::cout` for output, `<<` is insertion operator
- `std::endl` or `\n` for new line
- Semicolons end every statement

---

## 3. Variables and Data Types <a name="variables"></a>

```cpp
#include <iostream>
#include <string>

int main() {
    int x = 5;
    double price = 10.99;
    char grade = 'A';       // single quotes for char
    bool isStudent = true;
    std::string name = "Bro"; // double quotes for string

    std::cout << x << std::endl;
    std::cout << price << std::endl;
    std::cout << grade << std::endl;
    std::cout << isStudent << std::endl;  // prints 1
    std::cout << name << std::endl;
    return 0;
}
```

**Key Points:**
- `int` → whole numbers
- `double` → floating point
- `char` → single character (single quotes)
- `bool` → true/false
- `std::string` → text (double quotes)

---

## 4. Constants and the const Keyword <a name="constants"></a>

```cpp
#include <iostream>

int main() {
    const double PI = 3.14159;
    const int LIGHT_SPEED = 299792458;
    const std::string NAME = "Bro";

    // PI = 4.0;  // ERROR: cannot modify const variable

    std::cout << "PI = " << PI << std::endl;
    return 0;
}
```

**Key Points:**
- `const` makes a variable read-only
- Convention: use UPPERCASE for constant names
- Prevents accidental modification

---

## 5. Namespaces <a name="namespaces"></a>

```cpp
#include <iostream>

namespace first {
    int x = 1;
    void hello() { std::cout << "Hello from first\n"; }
}

namespace second {
    int x = 2;
    void hello() { std::cout << "Hello from second\n"; }
}

int main() {
    std::cout << first::x << std::endl;   // 1
    std::cout << second::x << std::endl;  // 2
    first::hello();
    second::hello();
    return 0;
}
```

**Key Points:**
- Namespaces prevent name conflicts
- Use `::` (scope resolution) to access members
- Avoid `using namespace std;` to reduce conflicts
- Safer: `using std::cout;` selectively

---

## 6. Type Definitions and Aliases <a name="typedefs"></a>

```cpp
#include <iostream>
#include <string>

typedef std::string text_t;   // old style
using number_t = int;          // modern C++ style

int main() {
    text_t name = "Bro";
    number_t age = 21;

    std::cout << name << std::endl;
    std::cout << age << std::endl;
    return 0;
}
```

**Key Points:**
- `typedef` creates an alias for a type
- `using` is preferred in modern C++
- Simplifies long or complex type names

---

## 7. Arithmetic Operators <a name="arithmetic"></a>

```cpp
#include <iostream>

int main() {
    int students = 20;
    students += 2;    // 22
    students -= 3;    // 19
    students *= 2;    // 38
    students /= 2;    // 19
    students++;       // 20
    students--;       // 19

    int remainder = 10 % 3;  // 1
    std::cout << "Students: " << students << std::endl;
    std::cout << "Remainder: " << remainder << std::endl;

    // Precedence: parentheses > * / > + -
    int result = (5 + 3) * 2;   // 16
    std::cout << "Result: " << result << std::endl;
    return 0;
}
```

**Key Points:**
- `+`, `-`, `*`, `/`, `%` — basic operators
- `+=`, `-=`, `*=`, `/=` — shorthand assignment
- `++`, `--` — increment / decrement
- `%` — modulus (remainder)

---

## 8. Type Conversion <a name="type-conversion"></a>

```cpp
#include <iostream>

int main() {
    // Implicit conversion
    double myDouble = 3;     // int 3 becomes 3.0

    // Explicit cast
    int myInt = (int)3.99;   // truncates to 3
    char myChar = (char)65;  // 65 = 'A'

    // Practical: percentage calculation
    int correct = 8;
    int total = 10;
    double score = (double)correct / total * 100;  // 80.0

    std::cout << myInt << std::endl;    // 3
    std::cout << myChar << std::endl;   // A
    std::cout << score << "%" << std::endl; // 80%
    return 0;
}
```

**Key Points:**
- Implicit: automatic between compatible types
- Explicit: `(type)value` syntax
- Important when mixing int and double to avoid truncation

---

## 9. User Input in C++ <a name="user-input"></a>

```cpp
#include <iostream>
#include <string>

int main() {
    int age;
    std::cout << "Enter your age: ";
    std::cin >> age;
    std::cout << "Your age is: " << age << std::endl;

    // For string with spaces, use getline
    std::string fullName;
    std::cout << "Enter your full name: ";
    std::getline(std::cin >> std::ws, fullName);  // std::ws clears newline
    std::cout << "Hello, " << fullName << std::endl;

    return 0;
}
```

**Key Points:**
- `std::cin >> var` reads input (stops at whitespace)
- `std::getline(std::cin, var)` reads full line including spaces
- `std::ws` clears leftover newline from input buffer

---

## 10. Math Functions <a name="math"></a>

```cpp
#include <iostream>
#include <cmath>

int main() {
    double x = 3.14;

    std::cout << std::max(5, 10) << std::endl;      // 10
    std::cout << std::min(5, 10) << std::endl;      // 5
    std::cout << pow(2, 8) << std::endl;            // 256
    std::cout << sqrt(144) << std::endl;            // 12
    std::cout << abs(-15) << std::endl;             // 15
    std::cout << round(x) << std::endl;             // 3
    std::cout << ceil(x) << std::endl;              // 4
    std::cout << floor(x) << std::endl;             // 3

    return 0;
}
```

**Key Points:**
- Include `<cmath>` for math functions
- `pow(base, exp)`, `sqrt(x)`, `abs(x)`, `round(x)`, `ceil(x)`, `floor(x)`

---

## 11. Practice Project: Hypotenuse Calculation <a name="hypotenuse"></a>

```cpp
#include <iostream>
#include <cmath>

int main() {
    double a, b, c;

    std::cout << "Enter side a: ";
    std::cin >> a;
    std::cout << "Enter side b: ";
    std::cin >> b;

    c = sqrt(pow(a, 2) + pow(b, 2));  // Pythagorean theorem

    std::cout << "Hypotenuse c = " << c << std::endl;
    return 0;
}
```

---

## 12. Conditional Statements: If, Else If, Else <a name="conditionals"></a>

```cpp
#include <iostream>

int main() {
    int age;
    std::cout << "Enter your age: ";
    std::cin >> age;

    if (age >= 100) {
        std::cout << "Too old to enter\n";
    } else if (age >= 18) {
        std::cout << "Welcome to the site\n";
    } else if (age < 0) {
        std::cout << "You haven't been born yet\n";
    } else {
        std::cout << "Not old enough\n";
    }
    return 0;
}
```

**Key Points:**
- Comparison operators: `==`, `!=`, `<`, `>`, `<=`, `>=`
- First true condition executes; rest are skipped
- Order of conditions matters!

---

## 13. Switch Statements <a name="switch"></a>

```cpp
#include <iostream>

int main() {
    int month;
    std::cout << "Enter month number: ";
    std::cin >> month;

    switch (month) {
        case 1:  std::cout << "January\n";   break;
        case 2:  std::cout << "February\n";  break;
        case 3:  std::cout << "March\n";     break;
        case 4:  std::cout << "April\n";     break;
        case 5:  std::cout << "May\n";       break;
        case 6:  std::cout << "June\n";      break;
        case 7:  std::cout << "July\n";      break;
        case 8:  std::cout << "August\n";    break;
        case 9:  std::cout << "September\n"; break;
        case 10: std::cout << "October\n";   break;
        case 11: std::cout << "November\n";  break;
        case 12: std::cout << "December\n";  break;
        default: std::cout << "Invalid month\n";
    }
    return 0;
}
```

**Key Points:**
- `break` prevents fall-through to next case
- `default` handles unmatched values
- More readable than multiple `else if` for discrete values

---

## 14. Calculator Program Using Switch <a name="calculator"></a>

```cpp
#include <iostream>

int main() {
    char op;
    double num1, num2, result;

    std::cout << "Enter operator (+, -, *, /): ";
    std::cin >> op;
    std::cout << "Enter two numbers: ";
    std::cin >> num1 >> num2;

    switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/':
            if (num2 == 0) {
                std::cout << "Cannot divide by zero\n";
                return 1;
            }
            result = num1 / num2;
            break;
        default:
            std::cout << "Invalid operator\n";
            return 1;
    }
    std::cout << "Result: " << result << std::endl;
    return 0;
}
```

---

## 15. Ternary Operator <a name="ternary"></a>

```cpp
#include <iostream>

int main() {
    int grade = 75;
    std::cout << (grade >= 60 ? "You pass!" : "You fail!") << std::endl;

    int age = 20;
    std::string status = (age >= 18) ? "Adult" : "Minor";
    std::cout << "Status: " << status << std::endl;

    // Nested ternary (use sparingly)
    int num = 5;
    std::string type = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
    std::cout << type << std::endl;
    return 0;
}
```

**Key Points:**
- Syntax: `condition ? value_if_true : value_if_false`
- Compact alternative to simple if-else
- Use for simple true/false choices

---

## 16. Logical Operators: AND, OR, NOT <a name="logical"></a>

```cpp
#include <iostream>

int main() {
    int temp = 25;
    bool sunny = false;

    // AND: both conditions must be true
    if (temp > 0 && temp < 30) {
        std::cout << "Temperature is comfortable\n";
    }

    // OR: at least one condition true
    if (temp <= 0 || temp >= 30) {
        std::cout << "Temperature is extreme\n";
    }

    // NOT: inverts boolean
    if (!sunny) {
        std::cout << "It is cloudy\n";
    }

    // Combined
    if (temp >= 20 && temp <= 30 && !sunny) {
        std::cout << "Cool and cloudy day\n";
    }
    return 0;
}
```

---

## 17. Temperature Conversion Program <a name="temperature"></a>

```cpp
#include <iostream>

int main() {
    char unit;
    double temp;

    std::cout << "Convert to (C)elsius or (F)ahrenheit? ";
    std::cin >> unit;

    if (unit == 'F' || unit == 'f') {
        std::cout << "Enter temperature in Celsius: ";
        std::cin >> temp;
        temp = 1.8 * temp + 32;
        std::cout << "Temperature in Fahrenheit: " << temp << " F\n";
    } else if (unit == 'C' || unit == 'c') {
        std::cout << "Enter temperature in Fahrenheit: ";
        std::cin >> temp;
        temp = (temp - 32) / 1.8;
        std::cout << "Temperature in Celsius: " << temp << " C\n";
    } else {
        std::cout << "Please enter only C or F\n";
    }
    return 0;
}
```

---

## 18. String Methods <a name="strings"></a>

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name = "Bro";

    // Length
    std::cout << "Length: " << name.length() << std::endl;  // 3

    // Empty check
    if (!name.empty()) {
        std::cout << name << " is not empty\n";
    }

    // Append
    name.append("@gmail.com");
    std::cout << "Email: " << name << std::endl;

    // Access character
    std::cout << "First char: " << name.at(0) << std::endl;  // B

    // Insert
    name.insert(0, "Hello, ");

    // Find
    int pos = name.find('@');
    std::cout << "@ at position: " << pos << std::endl;

    // Erase
    name.erase(0, 7);  // remove "Hello, "
    std::cout << "After erase: " << name << std::endl;

    // Clear
    // name.clear();
    // std::cout << name.empty() << std::endl;  // 1

    return 0;
}
```

**Key Points:**
- `.length()` — number of characters
- `.empty()` — checks if empty
- `.clear()` — empties string
- `.append(str)` — adds to end
- `.at(i)` — access char at index
- `.insert(pos, str)` — insert text
- `.find(ch)` — returns index of first occurrence
- `.erase(start, count)` — removes characters

---

## 19. While Loops <a name="while"></a>

```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;

    // Loop until valid input
    while (name.empty()) {
        std::cout << "Enter your name: ";
        std::getline(std::cin, name);
    }
    std::cout << "Hello, " << name << "!\n";

    // Countdown
    int count = 5;
    while (count > 0) {
        std::cout << count << "\n";
        count--;
    }
    std::cout << "Blast off!\n";
    return 0;
}
```

**Key Points:**
- Checks condition BEFORE each iteration
- Use for input validation
- Always ensure loop has exit condition to avoid infinite loop

---

## 20. Do While Loops <a name="dowhile"></a>

```cpp
#include <iostream>

int main() {
    int number;

    // Runs at least once
    do {
        std::cout << "Enter a positive number: ";
        std::cin >> number;
    } while (number < 0);

    std::cout << "You entered: " << number << std::endl;
    return 0;
}
```

**Key Points:**
- Checks condition AFTER each iteration
- Always executes at least once
- Perfect for menus and input prompts

---

## 21. For Loops <a name="for"></a>

```cpp
#include <iostream>

int main() {
    // Basic for loop
    for (int i = 1; i <= 5; i++) {
        std::cout << "Happy New Year!\n";
    }

    // Counting down
    for (int i = 10; i >= 0; i--) {
        std::cout << i << "\n";
    }

    // Step by 2
    for (int i = 0; i <= 20; i += 2) {
        std::cout << i << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

**Key Points:**
- Syntax: `for (init; condition; update)`
- Best when iteration count is known
- Flexible increment: `i++`, `i--`, `i+=2`, etc.

---

## 22. Break and Continue Keywords <a name="break-continue"></a>

```cpp
#include <iostream>

int main() {
    // break: exits loop immediately
    for (int i = 0; i <= 10; i++) {
        if (i == 5) {
            std::cout << "Breaking at 5\n";
            break;
        }
        std::cout << i << "\n";
    }

    // continue: skips current iteration
    for (int i = 1; i <= 20; i++) {
        if (i == 13) continue;  // skip unlucky 13
        std::cout << i << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

---

## 23. Nested Loops <a name="nested-loops"></a>

```cpp
#include <iostream>

int main() {
    // Rectangle pattern
    int rows = 3, cols = 6;
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= cols; j++) {
            std::cout << "@";
        }
        std::cout << "\n";
    }

    // Multiplication table
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            std::cout << i * j << "\t";
        }
        std::cout << "\n";
    }

    return 0;
}
```

**Key Points:**
- Inner loop runs completely for each iteration of outer loop
- Useful for 2D grids, matrices, patterns

---

## 24. Random Numbers <a name="random"></a>

```cpp
#include <iostream>
#include <cstdlib>   // rand(), srand()
#include <ctime>     // time()

int main() {
    srand(time(0));  // seed with current time (call ONCE)

    int dice = rand() % 6 + 1;       // 1 to 6
    int coin = rand() % 2;           // 0 or 1
    int range = rand() % 100 + 1;    // 1 to 100

    std::cout << "Dice: " << dice << std::endl;
    std::cout << "Coin (0=tails, 1=heads): " << coin << std::endl;
    std::cout << "Random 1-100: " << range << std::endl;

    return 0;
}
```

**Key Points:**
- `srand(time(0))` — seeds the random number generator (once!)
- `rand() % N` — gives 0 to N-1
- `rand() % N + offset` — shifts the range

---

## 25. Random Event Generator <a name="random-event"></a>

```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    srand(time(0));
    int event = rand() % 5 + 1;

    switch (event) {
        case 1: std::cout << "You win a bumper sticker!\n"; break;
        case 2: std::cout << "You win a T-shirt!\n";        break;
        case 3: std::cout << "You win free pizza!\n";       break;
        case 4: std::cout << "You win a car!\n";            break;
        case 5: std::cout << "You win nothing. Better luck next time!\n"; break;
    }
    return 0;
}
```

---

## 26. Number Guessing Game <a name="guessing-game"></a>

```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    srand(time(0));
    int secretNum = rand() % 100 + 1;  // 1 to 100
    int guess = 0;
    int tries = 0;

    std::cout << "=== Number Guessing Game ===\n";
    std::cout << "Guess the number between 1 and 100\n";

    do {
        std::cout << "Guess: ";
        std::cin >> guess;
        tries++;

        if (guess > secretNum) {
            std::cout << "Too high!\n";
        } else if (guess < secretNum) {
            std::cout << "Too low!\n";
        } else {
            std::cout << "Correct! The number was " << secretNum << "\n";
            std::cout << "You got it in " << tries << " tries!\n";
        }
    } while (guess != secretNum);

    return 0;
}
```

---

## 27. Functions <a name="functions"></a>

```cpp
#include <iostream>
#include <string>

// Function declaration / definition
void happyBirthday(std::string name, int age) {
    std::cout << "Happy Birthday, " << name << "!\n";
    std::cout << "You are " << age << " years old!\n";
}

void printSeparator() {
    std::cout << "--------------------\n";
}

int main() {
    happyBirthday("Bro", 21);
    printSeparator();
    happyBirthday("Alice", 30);
    return 0;
}
```

**Key Points:**
- Functions promote code reuse
- Declared before `main()` or use forward declaration
- `void` means no return value

---

## 28. The Return Keyword <a name="return"></a>

```cpp
#include <iostream>

double square(double length) {
    return length * length;
}

double cube(double side) {
    return side * side * side;
}

int add(int a, int b) {
    return a + b;
}

int main() {
    double area = square(5.0);
    double volume = cube(3.0);
    int sum = add(4, 7);

    std::cout << "Area: " << area << std::endl;
    std::cout << "Volume: " << volume << std::endl;
    std::cout << "Sum: " << sum << std::endl;
    return 0;
}
```

**Key Points:**
- Return type must match declaration
- `return` ends function execution immediately
- Returned value can be stored or used directly

---

## 29. Function Overloading <a name="overloading"></a>

```cpp
#include <iostream>
#include <string>

void bakePizza() {
    std::cout << "Here is your plain pizza!\n";
}

void bakePizza(std::string topping1) {
    std::cout << "Here is your " << topping1 << " pizza!\n";
}

void bakePizza(std::string topping1, std::string topping2) {
    std::cout << "Here is your " << topping1 << " and " << topping2 << " pizza!\n";
}

int main() {
    bakePizza();
    bakePizza("pepperoni");
    bakePizza("mushrooms", "peppers");
    return 0;
}
```

**Key Points:**
- Same function name, different parameter lists
- Compiler picks correct version based on arguments
- Must differ in number or type of parameters

---

## 30. Variable Scope <a name="scope"></a>

```cpp
#include <iostream>

int myNum = 3;  // global variable

void printNum() {
    int myNum = 2;            // local variable shadows global
    std::cout << myNum << std::endl;    // 2
    std::cout << ::myNum << std::endl;  // 3 (global via ::)
}

int main() {
    int x = 10;  // local to main

    {
        int y = 20;  // local to this block
        std::cout << x << " " << y << std::endl;
    }
    // y is not accessible here

    printNum();
    std::cout << myNum << std::endl;  // 3 (global)
    return 0;
}
```

**Key Points:**
- Local variables exist only inside their `{}` block
- Global variables accessible everywhere
- `::variable` to access global when shadowed by local

---

## 31. Banking Program Practice <a name="banking"></a>

```cpp
#include <iostream>
#include <iomanip>  // for setprecision

double balance = 0.0;

void showBalance() {
    std::cout << "Balance: $" << std::fixed << std::setprecision(2) << balance << std::endl;
}

void deposit(double amount) {
    if (amount <= 0) {
        std::cout << "Invalid deposit amount\n";
    } else {
        balance += amount;
        std::cout << "$" << amount << " deposited\n";
    }
}

void withdraw(double amount) {
    if (amount <= 0) {
        std::cout << "Invalid withdrawal amount\n";
    } else if (amount > balance) {
        std::cout << "Insufficient funds\n";
    } else {
        balance -= amount;
        std::cout << "$" << amount << " withdrawn\n";
    }
}

int main() {
    int choice;
    double amount;

    do {
        std::cout << "\n=== Banking Menu ===\n";
        std::cout << "1. Show Balance\n";
        std::cout << "2. Deposit\n";
        std::cout << "3. Withdraw\n";
        std::cout << "0. Exit\n";
        std::cout << "Choice: ";
        std::cin >> choice;

        switch (choice) {
            case 1: showBalance(); break;
            case 2:
                std::cout << "Deposit amount: $";
                std::cin >> amount;
                deposit(amount);
                break;
            case 3:
                std::cout << "Withdraw amount: $";
                std::cin >> amount;
                withdraw(amount);
                break;
            case 0: std::cout << "Goodbye!\n"; break;
            default: std::cout << "Invalid choice\n";
        }
    } while (choice != 0);

    return 0;
}
```

---

## 32. Rock Paper Scissors Game <a name="rps"></a>

```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>

std::string getComputerChoice() {
    srand(time(0));
    int num = rand() % 3;
    if (num == 0) return "rock";
    if (num == 1) return "paper";
    return "scissors";
}

std::string getPlayerChoice() {
    std::string choice;
    std::cout << "Enter (rock/paper/scissors): ";
    std::cin >> choice;
    return choice;
}

void determineWinner(std::string player, std::string computer) {
    std::cout << "Player: " << player << " | Computer: " << computer << "\n";
    if (player == computer) {
        std::cout << "It's a tie!\n";
    } else if ((player == "rock" && computer == "scissors") ||
               (player == "scissors" && computer == "paper") ||
               (player == "paper" && computer == "rock")) {
        std::cout << "You WIN!\n";
    } else {
        std::cout << "You LOSE!\n";
    }
}

int main() {
    std::string player = getPlayerChoice();
    std::string computer = getComputerChoice();
    determineWinner(player, computer);
    return 0;
}
```

---

## 33. Arrays <a name="arrays"></a>

```cpp
#include <iostream>
#include <string>

int main() {
    // Declaration and initialization
    std::string cars[3] = {"Corvette", "Mustang", "Camry"};
    int numbers[5] = {1, 2, 3, 4, 5};

    // Access by index (zero-based)
    std::cout << cars[0] << std::endl;   // Corvette
    std::cout << numbers[4] << std::endl; // 5

    // Modify element
    cars[0] = "Tesla";
    std::cout << cars[0] << std::endl;   // Tesla

    return 0;
}
```

**Key Points:**
- Fixed size, same data type
- Zero-based indexing
- Cannot mix types in an array

---

## 34. Sizeof Operator <a name="sizeof"></a>

```cpp
#include <iostream>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};

    std::cout << "Size of array (bytes): " << sizeof(numbers) << std::endl;      // 20
    std::cout << "Size of one element: " << sizeof(numbers[0]) << std::endl;     // 4
    std::cout << "Number of elements: " << sizeof(numbers)/sizeof(numbers[0]) << std::endl;  // 5

    // Different type sizes
    std::cout << "int: " << sizeof(int) << " bytes\n";
    std::cout << "double: " << sizeof(double) << " bytes\n";
    std::cout << "char: " << sizeof(char) << " byte\n";

    return 0;
}
```

---

## 35. Iterating Over Arrays <a name="iterate-arrays"></a>

```cpp
#include <iostream>
#include <string>

int main() {
    std::string cars[] = {"Corvette", "Mustang", "Camry", "Tesla"};
    int size = sizeof(cars) / sizeof(cars[0]);

    // Forward
    for (int i = 0; i < size; i++) {
        std::cout << cars[i] << std::endl;
    }

    // Reverse
    for (int i = size - 1; i >= 0; i--) {
        std::cout << cars[i] << std::endl;
    }

    return 0;
}
```

---

## 36. For Each Loop <a name="foreach"></a>

```cpp
#include <iostream>
#include <string>

int main() {
    std::string students[] = {"Alice", "Bob", "Charlie", "Diana"};
    int scores[] = {85, 92, 78, 95};

    // Range-based for loop
    for (std::string student : students) {
        std::cout << student << "\n";
    }

    for (int score : scores) {
        std::cout << score << "\n";
    }

    return 0;
}
```

**Key Points:**
- Syntax: `for (type var : container)`
- Simpler than for loop when index not needed
- Cannot modify index

---

## 37. Passing Arrays to Functions <a name="pass-arrays"></a>

```cpp
#include <iostream>

double getTotal(double prices[], int size) {
    double total = 0;
    for (int i = 0; i < size; i++) {
        total += prices[i];
    }
    return total;
}

void doubleAll(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;  // modifies original array (arrays pass by reference)
    }
}

int main() {
    double prices[] = {10.5, 20.0, 5.75, 15.25};
    int size = sizeof(prices) / sizeof(prices[0]);

    std::cout << "Total: $" << getTotal(prices, size) << std::endl;

    int numbers[] = {1, 2, 3, 4, 5};
    int n = sizeof(numbers) / sizeof(numbers[0]);
    doubleAll(numbers, n);
    for (int x : numbers) std::cout << x << " ";
    std::cout << std::endl;

    return 0;
}
```

**Key Points:**
- Pass array name (no brackets) + size
- Arrays decay to pointers — modifications affect original
- Always pass size separately

---

## 38. Searching an Array <a name="search"></a>

```cpp
#include <iostream>
#include <string>

int linearSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) return i;  // return index
    }
    return -1;  // not found
}

int stringSearch(std::string arr[], int size, std::string target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}

int main() {
    int nums[] = {3, 7, 15, 9, 22, 5};
    int size = sizeof(nums) / sizeof(nums[0]);

    int result = linearSearch(nums, size, 9);
    if (result != -1) {
        std::cout << "Found at index: " << result << std::endl;
    } else {
        std::cout << "Not found\n";
    }

    std::string foods[] = {"pizza", "burger", "sushi", "tacos"};
    int fsize = sizeof(foods) / sizeof(foods[0]);
    int found = stringSearch(foods, fsize, "sushi");
    std::cout << "Sushi at index: " << found << std::endl;

    return 0;
}
```

---

## 39. Sorting an Array (Bubble Sort) <a name="bubble-sort"></a>

```cpp
#include <iostream>

void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int size = sizeof(arr) / sizeof(arr[0]);

    std::cout << "Before: ";
    printArray(arr, size);

    bubbleSort(arr, size);

    std::cout << "After:  ";
    printArray(arr, size);

    return 0;
}
```

**Key Points:**
- Compares adjacent elements and swaps if out of order
- Nested loops: outer for passes, inner for comparisons
- Simple but O(n²) — not efficient for large arrays

---

## 40. Fill Function <a name="fill"></a>

```cpp
#include <iostream>
#include <algorithm>  // fill

int main() {
    int numbers[10];
    std::fill(numbers, numbers + 10, 0);   // fill with 0

    std::string foods[5];
    std::fill(foods, foods + 5, "pizza");  // fill with "pizza"

    for (int n : numbers) std::cout << n << " ";
    std::cout << std::endl;

    for (std::string f : foods) std::cout << f << " ";
    std::cout << std::endl;

    // Fill partial array (first 3 elements)
    std::fill(numbers, numbers + 3, 99);
    for (int n : numbers) std::cout << n << " ";
    std::cout << std::endl;

    return 0;
}
```

---

## 41. Accepting User Input into Arrays <a name="input-arrays"></a>

```cpp
#include <iostream>
#include <string>

int main() {
    const int SIZE = 5;
    std::string names[SIZE];
    std::string temp;

    std::cout << "Enter up to " << SIZE << " names (Q to quit):\n";

    for (int i = 0; i < SIZE; i++) {
        std::cout << "Name " << i + 1 << ": ";
        std::getline(std::cin, temp);
        if (temp == "Q" || temp == "q") break;
        names[i] = temp;
    }

    std::cout << "\n--- Entered Names ---\n";
    for (int i = 0; i < SIZE; i++) {
        if (!names[i].empty()) {
            std::cout << names[i] << "\n";
        }
    }
    return 0;
}
```

---

## 42. Multi-Dimensional Arrays <a name="multi-dim"></a>

```cpp
#include <iostream>
#include <string>

int main() {
    // 2D array: rows x cols
    std::string cars[3][3] = {
        {"Mustang", "Escape",   "F150"},
        {"Corvette", "Equinox", "Silverado"},
        {"Challenger", "Durango", "Ram1500"}
    };

    // Access: [row][column]
    std::cout << cars[0][0] << std::endl;  // Mustang
    std::cout << cars[1][2] << std::endl;  // Silverado

    // Iterate with nested loops
    int rows = 3, cols = 3;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            std::cout << cars[i][j] << "\t";
        }
        std::cout << "\n";
    }

    return 0;
}
```

---

## 43. Quiz Game <a name="quiz"></a>

```cpp
#include <iostream>
#include <string>

int main() {
    std::string questions[5] = {
        "What year was C++ created? (A)1983 (B)1995 (C)2000",
        "Who created C++? (A)Linus Torvalds (B)Bjarne Stroustrup (C)Dennis Ritchie",
        "C++ is based on which language? (A)Java (B)Python (C)C",
        "Which is the correct string type in C++? (A)String (B)STRING (C)std::string",
        "What does OOP stand for? (A)Object Oriented Programming (B)Ordered Object Protocol (C)Output Object Process"
    };

    char correctAnswers[5] = {'A', 'B', 'C', 'C', 'A'};
    int score = 0;
    char answer;

    std::cout << "=== C++ Quiz ===\n\n";

    for (int i = 0; i < 5; i++) {
        std::cout << "Q" << i + 1 << ": " << questions[i] << "\n";
        std::cout << "Your answer: ";
        std::cin >> answer;
        answer = toupper(answer);

        if (answer == correctAnswers[i]) {
            std::cout << "Correct!\n\n";
            score++;
        } else {
            std::cout << "Wrong! Correct answer: " << correctAnswers[i] << "\n\n";
        }
    }

    std::cout << "Score: " << score << "/5 ";
    std::cout << "(" << (double)score / 5 * 100 << "%)\n";
    return 0;
}
```

---

## 44. Memory Addresses <a name="memory"></a>

```cpp
#include <iostream>

int main() {
    int a = 10;
    double b = 3.14;
    char c = 'X';

    // & operator returns memory address
    std::cout << "Value of a: " << a << std::endl;
    std::cout << "Address of a: " << &a << std::endl;
    std::cout << "Address of b: " << &b << std::endl;
    std::cout << "Address of c: " << (void*)&c << std::endl;  // cast to show address

    std::cout << "\nSize of int: " << sizeof(int) << " bytes\n";
    std::cout << "Size of double: " << sizeof(double) << " bytes\n";
    std::cout << "Size of char: " << sizeof(char) << " byte\n";

    return 0;
}
```

---

## 45. Pass By Value vs Pass By Reference <a name="pass-ref"></a>

```cpp
#include <iostream>

// Pass by value (copy) - original not changed
void incrementByValue(int x) {
    x++;
    std::cout << "Inside function: " << x << std::endl;
}

// Pass by reference - modifies original
void incrementByRef(int &x) {
    x++;
    std::cout << "Inside function: " << x << std::endl;
}

// Swap using pass by reference
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int num = 5;
    incrementByValue(num);
    std::cout << "After byValue: " << num << std::endl;  // still 5

    incrementByRef(num);
    std::cout << "After byRef: " << num << std::endl;    // now 6

    int x = 10, y = 20;
    std::cout << "Before swap: x=" << x << " y=" << y << "\n";
    swap(x, y);
    std::cout << "After swap:  x=" << x << " y=" << y << "\n";

    return 0;
}
```

---

## 46. Const Parameters <a name="const-params"></a>

```cpp
#include <iostream>
#include <string>

// const reference: efficient (no copy) + safe (no modification)
void printInfo(const std::string &name, const int age) {
    // name = "Other";  // ERROR: const cannot be modified
    std::cout << "Name: " << name << ", Age: " << age << std::endl;
}

double calculateArea(const double radius) {
    const double PI = 3.14159;
    return PI * radius * radius;
}

int main() {
    std::string myName = "Bro";
    printInfo(myName, 21);
    std::cout << "Area: " << calculateArea(5.0) << std::endl;
    return 0;
}
```

---

## 47. Credit Card Validation Program (Luhn Algorithm) <a name="credit-card"></a>

```cpp
#include <iostream>
#include <string>

bool luhnCheck(std::string cardNum) {
    int sum = 0;
    bool alternate = false;

    for (int i = cardNum.length() - 1; i >= 0; i--) {
        int n = cardNum[i] - '0';

        if (alternate) {
            n *= 2;
            if (n > 9) n -= 9;
        }

        sum += n;
        alternate = !alternate;
    }
    return (sum % 10 == 0);
}

int main() {
    std::string cardNum;
    std::cout << "Enter credit card number (digits only): ";
    std::cin >> cardNum;

    if (luhnCheck(cardNum)) {
        std::cout << "VALID card number\n";
    } else {
        std::cout << "INVALID card number\n";
    }
    return 0;
}
```

---

## 48. Pointers <a name="pointers"></a>

```cpp
#include <iostream>

int main() {
    int age = 21;
    int* pAge = &age;   // pointer stores address of age

    std::cout << "Value: " << age << std::endl;
    std::cout << "Address: " << &age << std::endl;
    std::cout << "Pointer: " << pAge << std::endl;     // same address
    std::cout << "Dereferenced: " << *pAge << std::endl;  // value at address

    // Modify via pointer
    *pAge = 30;
    std::cout << "New age: " << age << std::endl;  // 30

    // Pointer arithmetic
    int nums[] = {10, 20, 30};
    int* ptr = nums;
    std::cout << *ptr << std::endl;       // 10
    std::cout << *(ptr + 1) << std::endl; // 20
    std::cout << *(ptr + 2) << std::endl; // 30

    return 0;
}
```

**Key Points:**
- `int* p` — declares pointer to int
- `&var` — gets address of variable
- `*p` — dereferences (accesses value at address)
- Arrays decay to pointers

---

## 49. Null Pointers <a name="null-pointers"></a>

```cpp
#include <iostream>

int main() {
    int* p = nullptr;  // null pointer — points to nothing

    // Always check before dereferencing
    if (p != nullptr) {
        std::cout << *p << std::endl;
    } else {
        std::cout << "Pointer is null — cannot dereference\n";
    }

    // Assign later
    int x = 42;
    p = &x;
    if (p != nullptr) {
        std::cout << "Value: " << *p << std::endl;  // 42
    }

    // Reset pointer
    p = nullptr;

    return 0;
}
```

---

## 50. Tic Tac Toe Game <a name="tictactoe"></a>

```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>

char board[3][3] = {{'1','2','3'},{'4','5','6'},{'7','8','9'}};
char currentPlayer = 'X';

void drawBoard() {
    std::cout << "\n";
    for (int i = 0; i < 3; i++) {
        std::cout << " " << board[i][0] << " | " << board[i][1] << " | " << board[i][2] << "\n";
        if (i < 2) std::cout << "---+---+---\n";
    }
    std::cout << "\n";
}

bool checkWin(char player) {
    for (int i = 0; i < 3; i++) {
        if (board[i][0]==player && board[i][1]==player && board[i][2]==player) return true;
        if (board[0][i]==player && board[1][i]==player && board[2][i]==player) return true;
    }
    if (board[0][0]==player && board[1][1]==player && board[2][2]==player) return true;
    if (board[0][2]==player && board[1][1]==player && board[2][0]==player) return true;
    return false;
}

bool checkTie() {
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
            if (board[i][j] != 'X' && board[i][j] != 'O') return false;
    return true;
}

bool makeMove(int pos) {
    int row = (pos - 1) / 3;
    int col = (pos - 1) % 3;
    if (board[row][col] != 'X' && board[row][col] != 'O') {
        board[row][col] = currentPlayer;
        return true;
    }
    return false;
}

int main() {
    int move;
    std::cout << "=== Tic Tac Toe ===\n";

    while (true) {
        drawBoard();
        std::cout << "Player " << currentPlayer << " — Enter position (1-9): ";
        std::cin >> move;

        if (move < 1 || move > 9 || !makeMove(move)) {
            std::cout << "Invalid move! Try again.\n";
            continue;
        }

        if (checkWin(currentPlayer)) {
            drawBoard();
            std::cout << "Player " << currentPlayer << " WINS!\n";
            break;
        }
        if (checkTie()) {
            drawBoard();
            std::cout << "It's a TIE!\n";
            break;
        }
        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    }
    return 0;
}
```

---

## 51. Dynamic Memory <a name="dynamic-memory"></a>

```cpp
#include <iostream>

int main() {
    // Allocate single variable
    int* p = new int;
    *p = 42;
    std::cout << "Value: " << *p << std::endl;
    delete p;  // free memory
    p = nullptr;

    // Allocate array dynamically
    int size;
    std::cout << "Enter array size: ";
    std::cin >> size;

    int* arr = new int[size];
    for (int i = 0; i < size; i++) arr[i] = i * 10;
    for (int i = 0; i < size; i++) std::cout << arr[i] << " ";
    std::cout << std::endl;

    delete[] arr;  // free array memory (use delete[])
    arr = nullptr;

    return 0;
}
```

**Key Points:**
- `new` allocates on heap at runtime
- `delete` / `delete[]` frees memory
- Not freeing causes **memory leaks**
- Useful when size is unknown at compile time

---

## 52. Recursion <a name="recursion"></a>

```cpp
#include <iostream>

// Factorial
int factorial(int n) {
    if (n <= 1) return 1;       // base case
    return n * factorial(n - 1); // recursive case
}

// Fibonacci
int fibonacci(int n) {
    if (n <= 1) return n;        // base cases: 0 and 1
    return fibonacci(n-1) + fibonacci(n-2);
}

// Power
double power(double base, int exp) {
    if (exp == 0) return 1;     // base case
    return base * power(base, exp - 1);
}

int main() {
    std::cout << "5! = " << factorial(5) << std::endl;       // 120
    std::cout << "fib(7) = " << fibonacci(7) << std::endl;   // 13
    std::cout << "2^10 = " << power(2, 10) << std::endl;     // 1024
    return 0;
}
```

**Key Points:**
- Must have a **base case** to stop recursion
- Each call reduces the problem
- Uses more memory (call stack) than loops

---

## 53. Function Templates <a name="templates"></a>

```cpp
#include <iostream>
#include <string>

// Template function works with any type T
template <typename T>
T getMax(T x, T y) {
    return (x > y) ? x : y;
}

template <typename T>
void swapValues(T &a, T &b) {
    T temp = a;
    a = b;
    b = temp;
}

template <typename T>
void printPair(T a, T b) {
    std::cout << a << " and " << b << std::endl;
}

int main() {
    std::cout << getMax(5, 10) << std::endl;          // int: 10
    std::cout << getMax(3.14, 2.71) << std::endl;     // double: 3.14
    std::cout << getMax('A', 'Z') << std::endl;       // char: Z

    int x = 1, y = 2;
    swapValues(x, y);
    std::cout << x << " " << y << std::endl;  // 2 1

    printPair(10, 20);
    printPair(std::string("Hello"), std::string("World"));

    return 0;
}
```

---

## 54. Structs <a name="structs"></a>

```cpp
#include <iostream>
#include <string>

struct Student {
    std::string name;
    double GPA;
    bool enrolled;
};

struct Car {
    std::string make;
    std::string model;
    int year;
    double price;
};

int main() {
    Student s1 = {"Bro", 3.5, true};
    Student s2;
    s2.name = "Alice";
    s2.GPA = 3.9;
    s2.enrolled = false;

    std::cout << s1.name << " GPA: " << s1.GPA << std::endl;
    std::cout << s2.name << " GPA: " << s2.GPA << std::endl;

    Car car1 = {"Toyota", "Camry", 2022, 25000.00};
    std::cout << car1.year << " " << car1.make << " " << car1.model << std::endl;
    std::cout << "Price: $" << car1.price << std::endl;

    return 0;
}
```

---

## 55. Passing Structs to Functions <a name="pass-structs"></a>

```cpp
#include <iostream>
#include <string>

struct Car {
    std::string make;
    std::string model;
    int year;
};

// Pass by value (copy)
void printCar(Car car) {
    std::cout << car.year << " " << car.make << " " << car.model << std::endl;
}

// Pass by reference (efficient, can modify)
void updateYear(Car &car, int newYear) {
    car.year = newYear;
}

// Pass by const reference (efficient, no modification)
void displayCar(const Car &car) {
    std::cout << car.make << " " << car.model << " (" << car.year << ")\n";
}

int main() {
    Car myCar = {"Toyota", "Supra", 2020};
    printCar(myCar);
    updateYear(myCar, 2024);
    displayCar(myCar);
    return 0;
}
```

---

## 56. Enums <a name="enums"></a>

```cpp
#include <iostream>

// Basic enum (values: 0, 1, 2, ...)
enum Day { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };

// Enum with custom values
enum Direction { NORTH = 0, SOUTH = 1, EAST = 2, WEST = 3 };

// Enum class (scoped, modern C++)
enum class Color { RED, GREEN, BLUE };

int main() {
    Day today = Wednesday;
    std::cout << "Day number: " << today << std::endl;  // 3

    if (today == Wednesday) {
        std::cout << "It's hump day!\n";
    }

    Direction dir = NORTH;
    std::cout << "Direction: " << dir << std::endl;  // 0

    Color c = Color::GREEN;
    // Scoped enum needs explicit cast to print
    std::cout << "Color: " << (int)c << std::endl;  // 1

    return 0;
}
```

---

## 57. Introduction to Object-Oriented Programming (OOP) <a name="oop"></a>

```cpp
#include <iostream>
#include <string>

class Human {
public:
    std::string name;
    int age;

    void eat() {
        std::cout << name << " is eating\n";
    }

    void sleep() {
        std::cout << name << " is sleeping\n";
    }

    void introduce() {
        std::cout << "Hi, I'm " << name << " and I'm " << age << " years old\n";
    }
};

int main() {
    Human h1;
    h1.name = "Rick";
    h1.age = 30;
    h1.eat();
    h1.sleep();
    h1.introduce();

    Human h2;
    h2.name = "Morty";
    h2.age = 14;
    h2.introduce();

    return 0;
}
```

---

## 58. Constructors <a name="constructors"></a>

```cpp
#include <iostream>
#include <string>

class Student {
public:
    std::string name;
    int age;
    double GPA;

    // Constructor
    Student(std::string n, int a, double g) : name(n), age(a), GPA(g) {}

    void display() {
        std::cout << name << " | Age: " << age << " | GPA: " << GPA << std::endl;
    }
};

class Car {
public:
    std::string make;
    std::string model;
    int year;

    Car(std::string ma, std::string mo, int y) {
        make = ma;
        model = mo;
        year = y;
    }

    void display() {
        std::cout << year << " " << make << " " << model << std::endl;
    }
};

int main() {
    Student s1("Bro", 21, 3.5);
    Student s2("Alice", 19, 3.9);
    s1.display();
    s2.display();

    Car c1("Toyota", "Supra", 2022);
    c1.display();

    return 0;
}
```

---

## 59. Overloaded Constructors <a name="overloaded-constructors"></a>

```cpp
#include <iostream>
#include <string>

class Pizza {
public:
    std::string topping1;
    std::string topping2;
    std::string topping3;

    // Default constructor (no toppings)
    Pizza() {
        topping1 = "";
        topping2 = "";
        topping3 = "";
        std::cout << "Plain pizza ordered\n";
    }

    // One topping
    Pizza(std::string t1) {
        topping1 = t1;
        std::cout << "Pizza with " << t1 << "\n";
    }

    // Two toppings
    Pizza(std::string t1, std::string t2) {
        topping1 = t1;
        topping2 = t2;
        std::cout << "Pizza with " << t1 << " and " << t2 << "\n";
    }

    // Three toppings
    Pizza(std::string t1, std::string t2, std::string t3) {
        topping1 = t1;
        topping2 = t2;
        topping3 = t3;
        std::cout << "Pizza with " << t1 << ", " << t2 << ", and " << t3 << "\n";
    }
};

int main() {
    Pizza p1;
    Pizza p2("pepperoni");
    Pizza p3("mushrooms", "peppers");
    Pizza p4("olives", "onions", "sausage");
    return 0;
}
```

---

## 60. Getters and Setters <a name="getters-setters"></a>

```cpp
#include <iostream>

class Stove {
private:
    int temperature;  // private — cannot access directly

public:
    // Default constructor
    Stove() : temperature(0) {}

    // Getter
    int getTemperature() {
        return temperature;
    }

    // Setter with validation
    void setTemperature(int t) {
        if (t < 0) {
            temperature = 0;
            std::cout << "Temperature cannot be negative. Set to 0.\n";
        } else if (t > 10) {
            temperature = 10;
            std::cout << "Max temperature is 10. Set to 10.\n";
        } else {
            temperature = t;
        }
    }
};

class BankAccount {
private:
    double balance;
    std::string owner;

public:
    BankAccount(std::string name, double initial) : owner(name), balance(initial) {}

    double getBalance() { return balance; }
    std::string getOwner() { return owner; }

    void setBalance(double amount) {
        if (amount < 0) std::cout << "Balance cannot be negative\n";
        else balance = amount;
    }
};

int main() {
    Stove s;
    s.setTemperature(5);
    std::cout << "Temp: " << s.getTemperature() << std::endl;  // 5
    s.setTemperature(15);  // exceeds max
    std::cout << "Temp: " << s.getTemperature() << std::endl;  // 10
    s.setTemperature(-3);  // below min
    std::cout << "Temp: " << s.getTemperature() << std::endl;  // 0

    BankAccount acc("Alice", 1000.0);
    std::cout << acc.getOwner() << ": $" << acc.getBalance() << std::endl;
    acc.setBalance(2500.0);
    std::cout << "New balance: $" << acc.getBalance() << std::endl;

    return 0;
}
```

---

## 61. Inheritance <a name="inheritance"></a>

```cpp
#include <iostream>
#include <string>

// Base (parent) class
class Animal {
public:
    bool alive = true;
    std::string name;

    Animal(std::string n) : name(n) {}

    void eat() {
        std::cout << name << " is eating\n";
    }

    void breathe() {
        std::cout << name << " is breathing\n";
    }
};

// Derived (child) classes
class Dog : public Animal {
public:
    std::string breed;

    Dog(std::string n, std::string b) : Animal(n), breed(b) {}

    void bark() {
        std::cout << name << " says: Woof!\n";
    }

    void fetch() {
        std::cout << name << " fetches the ball!\n";
    }
};

class Cat : public Animal {
public:
    Cat(std::string n) : Animal(n) {}

    void meow() {
        std::cout << name << " says: Meow!\n";
    }
};

class GuideDog : public Dog {
public:
    GuideDog(std::string n, std::string b) : Dog(n, b) {}

    void guide() {
        std::cout << name << " is guiding the owner\n";
    }
};

int main() {
    Dog d("Rex", "Labrador");
    d.eat();      // inherited from Animal
    d.breathe();  // inherited from Animal
    d.bark();     // Dog's own method
    d.fetch();    // Dog's own method

    Cat c("Whiskers");
    c.eat();
    c.meow();

    GuideDog gd("Buddy", "Golden Retriever");
    gd.eat();    // from Animal
    gd.bark();   // from Dog
    gd.guide();  // GuideDog's own method

    std::cout << "Is Rex alive? " << d.alive << std::endl;  // 1 (true)

    return 0;
}
```

---

## Key Takeaways

- C++ is powerful — blends low-level control with high-level abstraction
- Core building blocks: variables, data types, operators, control flow, functions
- Arrays + loops = data management and iteration
- Functions promote modular, reusable code; templates add generic flexibility
- Pointers and dynamic memory provide advanced runtime control
- OOP (classes, constructors, getters/setters, inheritance) organizes code into objects
- Practice projects (Calculator, Bank, RPS, TicTacToe, Quiz) reinforce all concepts

---
*Notes cover complete C++ fundamentals — from Hello World to Object-Oriented Programming with Inheritance.*
