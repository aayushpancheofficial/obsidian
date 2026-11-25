# Unit IV: Top 10 Important PYQ Questions — Complete 8-Mark Answers

---

## Q1. Pandas DataFrame (Repeated 4 times)

**Q. Define a DataFrame and explain how to create one with an example.**

### Definition (2 marks)
A **DataFrame** is a two-dimensional, size-mutable, and heterogeneous tabular data structure in Pandas. It consists of rows and columns (like a spreadsheet or SQL table), where each column can have a different data type. It has both a **row index** and **column labels**.

**Key features:**
- 2D labeled data structure (rows + columns)
- Columns can be of different types (int, float, string)
- Size-mutable (can add/delete rows and columns)
- Supports arithmetic operations on rows/columns

### Creating a DataFrame (3 marks)

**Method 1: From a dictionary of lists**
```python
import pandas as pd

data = {
    'Name': ['Amit', 'Priya', 'Rahul', 'Sneha'],
    'Age': [21, 22, 20, 23],
    'Marks': [85, 90, 75, 88]
}

df = pd.DataFrame(data)
print(df)
```

**Method 2: From a list of dictionaries**
```python
data = [
    {'Name': 'Amit', 'Age': 21, 'Marks': 85},
    {'Name': 'Priya', 'Age': 22, 'Marks': 90},
    {'Name': 'Rahul', 'Age': 20, 'Marks': 75}
]
df = pd.DataFrame(data)
```

**Method 3: From a CSV file**
```python
df = pd.read_csv('students.csv')
```

### Explanation (3 marks)
| Component | Description |
|-----------|-------------|
| `data` | Dictionary/list/array containing the data |
| `df` | The DataFrame object |
| `df.index` | Row labels (default: 0, 1, 2...) |
| `df.columns` | Column names |
| `df.shape` | Returns (rows, columns) |

**Useful attributes:** `df.head()`, `df.tail()`, `df.info()`, `df.describe()`

---

## Q2. Pandas Series (Repeated 2 times)

**Q. What is a Series in Pandas? Explain its features with an example.**

### Definition (2 marks)
A **Series** is a one-dimensional labeled array in Pandas that can hold data of any type (integer, float, string, etc.). It is like a single column of a DataFrame with an associated index.

### Features (3 marks)
1. **Labeled index** — each element has a label (default: 0, 1, 2...)
2. **Homogeneous data** — all elements are of the same type
3. **Size-immutable** — size cannot be changed after creation
4. **Supports vectorized operations** — arithmetic applies to all elements
5. **Can be created from lists, dictionaries, NumPy arrays, scalars**

### Example (3 marks)
```python
import pandas as pd

# Create a Series from a list
marks = pd.Series([85, 90, 75, 88])

# Create a Series with custom index
marks = pd.Series([85, 90, 75, 88],
                  index=['Amit', 'Priya', 'Rahul', 'Sneha'],
                  name='Marks')
print(marks)

# Accessing elements
print(marks['Priya'])       # by label → 90
print(marks[1])             # by position → 90

# Vectorized operation
print(marks + 5)            # adds 5 to every element
```

### Key Attributes
| Attribute | Purpose |
|-----------|---------|
| `s.values` | Returns NumPy array of values |
| `s.index` | Returns index labels |
| `s.name` | Returns the Series name |
| `s.dtype` | Data type of elements |

---

## Q3. Categorical Data (Repeated 2 times)

**Q. Explain categorical data in Pandas with a suitable example.**

### Definition (2 marks)
**Categorical data** in Pandas refers to data that takes on a **limited, fixed set of values** (categories), such as gender, blood group, city, or grade. Pandas provides the `Categorical` type to store such data efficiently — using integer codes internally instead of repeating strings.

### Why use Categorical? (2 marks)
1. **Memory efficient** — stores repeated strings as integer codes
2. **Faster operations** — sorting and grouping are quicker
3. **Ordered categories** — can define a logical order (e.g., Small < Medium < Large)
4. **Semantic clarity** — signals that data is categorical

### Example (4 marks)
```python
import pandas as pd

# Create categorical data
sizes = pd.Series(['Small', 'Medium', 'Large', 'Medium', 'Small'],
                  dtype='category')
print(sizes)

# Define ordered categories
sizes = pd.Series(['Small', 'Medium', 'Large', 'Medium', 'Small'],
                  dtype=pd.CategoricalDtype(
                      categories=['Small', 'Medium', 'Large'],
                      ordered=True))
print(sizes)

# Check categories
print(sizes.cat.categories)   # Index(['Small', 'Medium', 'Large'])

# Convert a column to categorical
df = pd.DataFrame({'Grade': ['A', 'B', 'A', 'C', 'B']})
df['Grade'] = df['Grade'].astype('category')
print(df.dtypes)
```

### Key Methods
| Method | Purpose |
|--------|---------|
| `astype('category')` | Convert column to categorical |
| `s.cat.categories` | View categories |
| `s.cat.codes` | View integer codes |
| `s.cat.ordered` | Check if ordered |
| `pd.CategoricalDtype()` | Define custom categories with order |

---

## Q4. Window / Rolling Functions (Repeated 2 times)

**Q. Explain the window or window-statistics functions in Pandas with an example.**

### Definition (2 marks)
**Window functions** (also called **rolling functions**) perform calculations on a **sliding window** of data. They are used for time-series analysis to compute moving averages, sums, and other statistics over a fixed number of observations.

### Purpose (2 marks)
1. **Smooth out short-term fluctuations** — reveal trends
2. **Compute moving averages** — common in stock/financial analysis
3. **Detect patterns over time** — seasonality, cycles
4. **Handle noisy data** — reduce random variation

### Common Window Functions (2 marks)
| Function | Purpose |
|----------|---------|
| `rolling(n).mean()` | Moving average over n periods |
| `rolling(n).sum()` | Moving sum |
| `rolling(n).std()` | Moving standard deviation |
| `rolling(n).min()/max()` | Moving min/max |
| `expanding()` | Expanding window (grows over time) |
| `ewm()` | Exponentially weighted moving average |

### Example (2 marks)
```python
import pandas as pd

# Daily temperatures
temps = pd.Series([22, 24, 23, 25, 27, 26, 28, 30, 29, 31])

# 3-day rolling mean
rolling_mean = temps.rolling(window=3).mean()
print(rolling_mean)

# 3-day rolling sum
rolling_sum = temps.rolling(window=3).sum()
print(rolling_sum)

# Expanding window mean
expanding_mean = temps.expanding().mean()
print(expanding_mean)
```

**Output interpretation:** `rolling(3).mean()` averages every 3 consecutive values. The first 2 values become `NaN` because a full window of 3 is not available.

---

## Q5. Functions by Row and Column (Repeated 3 times)

**Q. Explain how functions can be applied by element, row, or column in a DataFrame.**

### Overview (2 marks)
Pandas provides three main methods to apply functions to a DataFrame:
- **`apply()`** — apply a function along an axis (rows or columns)
- **`applymap()`** — apply a function element-wise (to every cell)
- **`map()`** — apply a function element-wise on a Series

### 1. Applying by Element (2 marks)
**`applymap()`** applies a function to **every individual element** of a DataFrame.
```python
import pandas as pd
import numpy as np

df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})

# Square every element
result = df.applymap(lambda x: x ** 2)
print(result)
```

### 2. Applying by Column (2 marks)
**`apply()`** with `axis=0` (default) applies a function to **each column**.
```python
# Sum of each column
col_sum = df.apply(np.sum, axis=0)
print(col_sum)

# Mean of each column
col_mean = df.apply(lambda col: col.mean(), axis=0)
```

### 3. Applying by Row (2 marks)
**`apply()`** with `axis=1` applies a function to **each row**.
```python
# Sum of each row
row_sum = df.apply(np.sum, axis=1)
print(row_sum)

# Custom function per row
def row_stats(row):
    return row.max() - row.min()

df.apply(row_stats, axis=1)
```

### Summary Table (1 mark? included above)
| Method | Applies to | Example |
|--------|-----------|---------|
| `applymap(func)` | Every element | `df.applymap(lambda x: x*2)` |
| `apply(func, axis=0)` | Each column | `df.apply(np.sum, axis=0)` |
| `apply(func, axis=1)` | Each row | `df.apply(np.sum, axis=1)` |
| `map(func)` | Each element of a Series | `s.map(lambda x: x+1)` |

---

## Q6. Reading CSV Files (Repeated 2 times)

**Q. How do you load a CSV file into a Pandas DataFrame? Explain with code.**

### Definition (2 marks)
A **CSV (Comma-Separated Values)** file is a plain-text file where data is separated by commas. Pandas provides the **`pd.read_csv()`** function to load CSV data directly into a DataFrame.

### Syntax (1 mark)
```python
pd.read_csv(filepath_or_buffer, sep=',', header='infer', names=None)
```

### Example (3 marks)
```python
import pandas as pd

# Basic loading
df = pd.read_csv('students.csv')
print(df.head())

# With custom separator (e.g., tab-separated)
df = pd.read_csv('data.tsv', sep='\t')

# Without header row — assign column names
df = pd.read_csv('data.csv', header=None,
                 names=['Name', 'Age', 'Marks'])

# Skip first 2 rows and set index
df = pd.read_csv('data.csv', skiprows=2, index_col=0)

# Read specific columns only
df = pd.read_csv('data.csv', usecols=['Name', 'Marks'])
```

### Key Parameters (2 marks)
| Parameter | Purpose |
|-----------|---------|
| `filepath` | Path to CSV file |
| `sep` | Delimiter (default `','`) |
| `header` | Row number for column names (`None` if no header) |
| `names` | List of column names to assign |
| `usecols` | Subset of columns to read |
| `skiprows` | Rows to skip at the beginning |
| `index_col` | Column to use as row index |
| `na_values` | Values to treat as NaN |

---

## Q7. Adding a Column and GroupBy (Repeated 2 times)

**Q. How do you add a column to an existing DataFrame? Explain the use of `groupby()` with an example.**

### Part A: Adding a Column (3 marks)

**Method 1: Direct assignment**
```python
import pandas as pd

df = pd.DataFrame({
    'Name': ['Amit', 'Priya', 'Rahul', 'Sneha'],
    'Marks': [85, 90, 75, 88]
})

# Add a new column directly
df['Grade'] = ['A', 'A', 'B', 'A']
print(df)
```

**Method 2: From existing columns**
```python
# Create a column from calculations on other columns
df['Marks_Plus5'] = df['Marks'] + 5
```

**Method 3: Using `insert()`**
```python
# Insert at a specific position
df.insert(1, 'Age', [21, 22, 20, 23])
```

**Method 4: Using `assign()`**
```python
df = df.assign(Percentage=df['Marks'] / 100 * 100)
```

### Part B: GroupBy (5 marks)

**Definition:** `groupby()` splits the data into groups based on some criteria, applies a function to each group, and combines the results (Split–Apply–Combine pattern).

**Example:**
```python
import pandas as pd

# Sample data
df = pd.DataFrame({
    'Department': ['IT', 'HR', 'IT', 'HR', 'IT', 'Finance'],
    'Employee': ['Amit', 'Priya', 'Rahul', 'Sneha', 'Kiran', 'Neha'],
    'Salary': [50000, 45000, 55000, 48000, 60000, 52000]
})

# Group by Department and calculate mean salary
result = df.groupby('Department')['Salary'].mean()
print(result)

# Multiple aggregations
result = df.groupby('Department')['Salary'].agg(['mean', 'sum', 'count'])
print(result)

# Group by multiple columns
df.groupby(['Department', 'Employee'])['Salary'].sum()
```

**Common aggregate functions:**
| Function | Purpose |
|----------|---------|
| `.mean()` | Average per group |
| `.sum()` | Total per group |
| `.count()` | Count per group |
| `.max()` / `.min()` | Max/min per group |
| `.agg([...])` | Multiple functions at once |

---

## Q8. Pandas Library (Repeated 2 times)

**Q. Explain the Pandas library and describe some of its functions with examples.**

### Introduction (2 marks)
**Pandas** is an open-source Python library for data manipulation and analysis. It provides high-performance, easy-to-use data structures — **Series** (1D) and **DataFrame** (2D) — for working with structured data. It is built on top of NumPy and is widely used in data science, finance, and analytics.

### Key Data Structures (1 mark)
- **Series** — 1D labeled array
- **DataFrame** — 2D labeled table

### Common Pandas Functions (4 marks)

**1. Data creation & loading**
```python
import pandas as pd

df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
df = pd.read_csv('data.csv')
```

**2. Viewing data**
```python
df.head()      # first 5 rows
df.tail()      # last 5 rows
df.info()      # data types, memory usage
df.describe()  # statistical summary
```

**3. Selection & filtering**
```python
df['A']                      # select column
df[['A', 'B']]               # select multiple columns
df[df['A'] > 1]              # filter rows
df.loc[0]                    # by label
df.iloc[0]                   # by position
```

**4. Data manipulation**
```python
df['C'] = df['A'] + df['B']  # add column
df.drop('A', axis=1)         # drop column
df.sort_values('B')          # sort by column
df.groupby('A').sum()        # group and aggregate
```

**5. Handling missing data**
```python
df.isnull()        # detect missing values
df.dropna()        # drop rows with NaN
df.fillna(0)       # fill NaN with 0
```

**6. Statistics & sorting**
```python
df.mean()          # column means
df.corr()          # correlation matrix
df.sort_values(by='A', ascending=False)
```

### Summary (1 mark)
Pandas is a powerful toolkit for:
- Loading data from CSV, Excel, SQL, JSON
- Cleaning and transforming data
- Grouping and aggregating
- Merging and joining datasets
- Time-series analysis

---

## Q9. Statistics and Sorting (Repeated 1 time)

**Q. Explain statistical functions in Python/Pandas and the available sorting options.**

### Statistical Functions (4 marks)

| Function | Purpose |
|----------|---------|
| `df.mean()` | Average of each column |
| `df.median()` | Median value |
| `df.mode()` | Most frequent value |
| `df.sum()` | Sum of values |
| `df.std()` | Standard deviation |
| `df.var()` | Variance |
| `df.min()` / `df.max()` | Minimum/maximum |
| `df.count()` | Count of non-null values |
| `df.describe()` | Summary of all stats |
| `df.corr()` | Correlation between columns |
| `df.quantile(0.25)` | 25th percentile |

**Example:**
```python
import pandas as pd

df = pd.DataFrame({
    'Math': [85, 90, 75, 88],
    'Science': [80, 92, 70, 85]
})

print(df.mean())
print(df.describe())
print(df.corr())
```

### Sorting Options (4 marks)

**1. Sort by values — `sort_values()`**
```python
df.sort_values(by='Math')                  # ascending (default)
df.sort_values(by='Math', ascending=False) # descending
df.sort_values(by=['Math', 'Science'])     # multiple columns
```

**2. Sort by index — `sort_index()`**
```python
df.sort_index()                    # ascending index
df.sort_index(ascending=False)     # descending
```

**3. Sort with missing values — `na_position`**
```python
df.sort_values(by='Math', na_position='first')   # NaN first
df.sort_values(by='Math', na_position='last')    # NaN last (default)
```

**4. Stable sorting — `kind` parameter**
```python
df.sort_values(by='Math', kind='mergesort')      # stable sort
```

### Example
```python
df = pd.DataFrame({
    'Name': ['Amit', 'Priya', 'Rahul', 'Sneha'],
    'Marks': [85, 90, 75, 88]
})

# Sort by Marks descending
print(df.sort_values(by='Marks', ascending=False))
```

---

## Q10. Dropping Rows and Columns (Repeated 1 time)

**Q. Explain how to drop rows and columns from a Pandas DataFrame.**

### Function (1 mark)
The **`drop()`** function is used to remove rows or columns from a DataFrame.

**Syntax:**
```python
df.drop(labels, axis=0, inplace=False)
```
- `axis=0` → drop rows
- `axis=1` → drop columns

### Dropping Columns (3 marks)
```python
import pandas as pd

df = pd.DataFrame({
    'Name': ['Amit', 'Priya', 'Rahul', 'Sneha'],
    'Age': [21, 22, 20, 23],
    'Marks': [85, 90, 75, 88],
    'City': ['Delhi', 'Mumbai', 'Pune', 'Chennai']
})

# Drop a single column
df.drop('Age', axis=1, inplace=True)

# Drop multiple columns
df.drop(['Age', 'City'], axis=1, inplace=True)
```

### Dropping Rows (3 marks)
```python
# Drop a single row by index
df.drop(0, axis=0, inplace=True)

# Drop multiple rows by index
df.drop([0, 2], axis=0, inplace=True)

# Drop rows using a condition
df = df[df['Marks'] >= 80]     # keep only marks >= 80

# Drop rows with missing values
df.dropna(inplace=True)

# Drop duplicate rows
df.drop_duplicates(inplace=True)
```

### Key Parameters (1 mark)
| Parameter | Purpose |
|-----------|---------|
| `labels` | Row index labels or column names to drop |
| `axis` | `0` = rows, `1` = columns |
| `inplace` | `True` = modify original, `False` = return new DataFrame |
| `errors` | `'raise'` (default) or `'ignore'` if label not found |

### Important Note
- Use `inplace=True` to modify the DataFrame directly; otherwise assign the result: `df = df.drop(...)`
- Dropping does **not** reindex by default — use `df.reset_index(drop=True)` if needed

---

**End of Unit IV — All 10 questions answered in exam-ready 8-mark format. Prioritize Q1, Q5, Q7, and Q8 as advised.**
