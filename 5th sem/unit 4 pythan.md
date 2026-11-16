### Unit IV: Important Questions

1. Explain pandas Series and DataFrame, their characteristics, and their differences with suitable examples.

2. What is a pandas DataFrame? Explain how to create an empty DataFrame and create a DataFrame from lists and Series.

3. Explain categorical data in pandas. How do you create and work with categorical data? Give a suitable example.

4. Explain row-wise and column-wise operations in pandas. Describe how to apply functions to rows, columns, and individual elements.

5. How do you drop rows and columns from a pandas DataFrame? Explain with examples.

6. Explain how to read data from and write data to textual files using pandas. Give examples.

7. How do you compute correlation in pandas? Explain with a suitable example and interpret the result.

8. Explain statistical functions in pandas, such as `sum()`, `mean()`, `median()`, `mode()`, `min()`, `max()`, `count()`, `std()`, and `describe()`, with examples.

9. Explain the different ways to sort data in pandas. Describe `sort_values()` and `sort_index()` with examples.

10. What are window functions in pandas? Explain rolling, expanding, and exponentially weighted window functions with examples.

### Q1) Difference Between NumPy and Pandas.

#### 1. Introduction

NumPy and Pandas are two popular Python libraries used for scientific computing and data analysis. Both libraries help in handling data, but they are designed for different purposes.

**NumPy:** NumPy stands for Numerical Python. It is a Python library used to perform mathematical and numerical operations on large multidimensional arrays and matrices.

**Pandas:** Pandas is an open-source Python library used for data manipulation and analysis. It provides powerful data structures like Series and DataFrame to handle structured data.

#### 2. Difference Between NumPy and Pandas

| Basis | NumPy | Pandas |
|---|---|---|
| 1. Full Form | Numerical Python. | Panel Data (historical name). |
| 2. Main Purpose | Used for numerical and mathematical calculations. | Used for data analysis and manipulation. |
| 3. Data Structure | Mainly uses ndarray (N-dimensional array). | Mainly uses Series and DataFrame. |
| 4. Data Type | Generally stores elements of the same data type in an array. | Can handle different data types in different columns. |
| 5. Data Handling | Best for numerical and scientific data. | Best for structured and tabular data. |
| 6. Missing Values | Requires additional handling for missing values. | Provides built-in methods to handle missing values. |
| 7. Data Operations | Supports mathematical operations such as addition, multiplication and matrix operations. | Supports filtering, grouping, sorting and merging data. |
| 8. Performance | Generally faster for numerical array operations. | Has additional overhead for labels and data management. |
| 9. Data Representation | Represents data in the form of arrays and matrices. | Represents data in rows and columns like a spreadsheet. |
| 10. Applications | Scientific computing, linear algebra and numerical calculations. | Data cleaning, data analysis and data visualization preparation. |

#### 3. Example of NumPy

```python
import numpy as np

arr = np.array([10, 20, 30, 40])

print(arr.mean())
print(arr.sum())
```

**Output:**
```text
25.0
100
```

Explanation: NumPy is used to perform mathematical operations on arrays easily.

#### 4. Example of Pandas

```python
import pandas as pd

data = {
    'Name': ['Aman', 'Rahul', 'Ravi'],
    'Marks': [80, 90, 75]
}

df = pd.DataFrame(data)

print(df)
```

**Output:**
```text
    Name  Marks
0   Aman     80
1  Rahul     90
2   Ravi     75
```

Explanation: Pandas is used to store and manage structured data in tabular form.

#### 5. Relationship Between NumPy and Pandas

Pandas is built on top of NumPy and uses NumPy functionality internally for many operations. Both libraries are widely used together in Python data science and machine learning.

#### 6. Conclusion

In conclusion, NumPy is mainly used for numerical computations and array operations, whereas Pandas is used for data manipulation and analysis. Both libraries are important tools in Python programming and data science.


### que 2) Explain Pandas Series and DataFrame, their characteristics, and their differences with suitable examples.

#### 1. Introduction

Pandas is an open-source Python library used for data manipulation and analysis. It provides two important data structures: Series and DataFrame. Both are used to store and manage data efficiently.

#### 2. Pandas Series

**Definition:**

A Pandas Series is a one-dimensional labeled data structure that can store data of different types. It consists of data values and their associated index labels.

**Characteristics of Series:**

1. It is a one-dimensional data structure.
2. It contains a sequence of data values.
3. Each element has an associated index label.
4. It can store integers, strings, floating-point values, etc.
5. It supports indexing, slicing and mathematical operations.

**Example of Pandas Series:**

```python
import pandas as pd

marks = pd.Series([85, 90, 78])

print(marks)
```

**Output:**

```text
0    85
1    90
2    78
dtype: int64
```

**Explanation:**

- First, we import the Pandas library.
- We create a Series using `pd.Series()`.
- The values 85, 90 and 78 are stored in the Series.
- By default, Pandas assigns index labels starting from 0.
- Finally, we print the Series.

#### 3. Pandas DataFrame

**Definition:**

A Pandas DataFrame is a two-dimensional, size-mutable and labeled data structure. It consists of rows and columns and can store different data types in different columns.

It is similar to an Excel spreadsheet or a database table.

**Characteristics of DataFrame:**

1. It is a two-dimensional data structure.
2. It consists of rows and columns.
3. Each row and column has an index or label.
4. Different columns can store different data types.
5. It supports data manipulation, filtering and analysis.
6. We can add, delete and modify rows and columns.

**Example of Pandas DataFrame:**

```python
import pandas as pd

data = {
    'Name': ['Aman', 'Rahul', 'Ravi'],
    'Marks': [85, 90, 78]
}

df = pd.DataFrame(data)

print(df)
```

**Output:**

```text
    Name  Marks
0   Aman     85
1  Rahul     90
2   Ravi     78
```

**Explanation:**

- First, we create a dictionary containing student names and marks.
- The `pd.DataFrame()` function converts the dictionary into a DataFrame.
- The DataFrame contains two columns: Name and Marks.
- Finally, we print the DataFrame.

#### 4. Differences Between Series and DataFrame

| Basis | Series | DataFrame |
|---|---|---|
| 1. Dimension | One-dimensional (1D). | Two-dimensional (2D). |
| 2. Structure | Contains a single sequence of values. | Contains rows and columns. |
| 3. Data Storage | Generally stores one data type. | Different columns can store different data types. |
| 4. Labels | Has index labels. | Has row index and column labels. |
| 5. Creation | Created using `pd.Series()`. | Created using `pd.DataFrame()`. |
| 6. Data Representation | Similar to a single column. | Similar to an Excel spreadsheet. |
| 7. Complexity | Simple data structure. | More complex data structure. |
| 8. Usage | Used to store one-dimensional data. | Used to store and analyze tabular data. |

#### 5. Relationship Between Series and DataFrame

A DataFrame is a collection of Series objects. Each column of a DataFrame can be treated as an individual Series.

For example, in a student DataFrame, the Name column and Marks column are separate Series.

#### 6. Conclusion

Pandas Series and DataFrame are important data structures used in Python for data handling and analysis. Series is used for one-dimensional data, whereas DataFrame is used for two-dimensional tabular data. Both are widely used in data science and machine learning.
