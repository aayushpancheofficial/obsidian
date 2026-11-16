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

### Q3) Explain Categorical Data in Pandas. How do you create and work with categorical data? Give a suitable example.

#### 1. Introduction

Categorical data is a type of data that represents a limited number of categories or groups. It is used to store values that belong to predefined categories instead of continuous numerical values.

In Pandas, categorical data is represented using the `category` data type. It helps in organizing and analyzing repeated values efficiently.

**Examples:** Gender (Male, Female), Department (CSE, IT, ECE), and Grades (A, B, C).

#### 2. Characteristics of Categorical Data

1. It contains a limited number of unique categories.
2. It is used to represent groups or labels.
3. It requires less memory when values are repeated frequently.
4. It can be nominal or ordinal.
5. It supports operations such as sorting, filtering and counting.

#### 3. Types of Categorical Data

**1. Nominal Data:**

Nominal data represents categories without any specific order.

Example: Gender, City, Department.

**2. Ordinal Data:**

Ordinal data represents categories that have a specific order or ranking.

Example: Low, Medium, High or Poor, Average, Good.

#### 4. How to Create Categorical Data in Pandas

We can create categorical data using the `pd.Categorical()` function or by converting an existing column using `astype('category')`.

**Syntax:**

```python
pd.Categorical(data, categories=None, ordered=False)
```

Where:
- `data` represents the input values.
- `categories` specifies the available categories.
- `ordered` specifies whether categories have an order.

#### 5. Example of Creating Categorical Data

```python
import pandas as pd

data = ['CSE', 'IT', 'CSE', 'ECE', 'IT']

department = pd.Categorical(data)

print(department)
print(department.categories)
print(department.codes)
```

**Output:**

```text
['CSE', 'IT', 'CSE', 'ECE', 'IT']
Categories (3, object): ['CSE', 'ECE', 'IT']

Index(['CSE', 'ECE', 'IT'], dtype='object')

[0, 2, 0, 1, 2]
```

**Explanation:**

1. First, we import the Pandas library.
2. We create a list containing department names.
3. The `pd.Categorical()` function converts the list into categorical data.
4. The `categories` attribute displays unique categories.
5. The `codes` attribute displays the integer codes assigned to each category.

#### 6. Working with Categorical Data

Pandas provides several operations to work with categorical data.

**1. Adding Categories:**

```python
department = department.add_categories(['ME'])
print(department.categories)
```

**2. Removing Unused Categories:**

```python
department = department.remove_unused_categories()
```

**3. Sorting Categories:**

```python
grades = pd.Categorical(
    ['High', 'Low', 'Medium'],
    categories=['Low', 'Medium', 'High'],
    ordered=True
)

print(grades.sort_values())
```

**4. Converting an Existing Column:**

```python
df = pd.DataFrame({
    'Department': ['CSE', 'IT', 'CSE']
})

df['Department'] = df['Department'].astype('category')

print(df.dtypes)
```

#### 7. Advantages of Categorical Data

1. Reduces memory usage when data contains repeated values.
2. Improves data organization.
3. Makes sorting and filtering easier.
4. Helps in statistical analysis.
5. Supports efficient grouping and counting operations.

#### 8. Conclusion

Categorical data in Pandas is used to represent data in the form of predefined categories or groups. It can be created using `pd.Categorical()` or `astype('category')`. It is useful for data organization, memory efficiency and data analysis.

### Q4) Explain Row-wise and Column-wise Operations in Pandas. Describe how to apply functions to rows, columns, and individual elements.
 Row-wise and Column-wise Operations in Pandas

#### 1. Introduction

Pandas is a Python library used for data manipulation and analysis. It provides different methods to perform operations on rows, columns and individual elements of a DataFrame.

Row-wise operations perform calculations across rows, whereas column-wise operations perform calculations down columns.

#### 2. Row-wise Operations

Row-wise operations are performed horizontally across the columns of a DataFrame. They are used to calculate values for each row.

**Example:**

```python
import pandas as pd

data = {
    'Maths': [80, 90, 70],
    'Science': [85, 95, 75]
}

df = pd.DataFrame(data)

df['Total'] = df.sum(axis=1)

print(df)
```

**Output:**

```text
   Maths  Science  Total
0     80       85    165
1     90       95    185
2     70       75    145
```

**Explanation:**

- First, we create a DataFrame containing Maths and Science marks.
- The `sum(axis=1)` function calculates the sum across each row.
- The result is stored in a new column called Total.

#### 3. Column-wise Operations

Column-wise operations are performed vertically on the values of a particular column. They are used to calculate results for each column.

**Example:**

```python
import pandas as pd

data = {
    'Maths': [80, 90, 70],
    'Science': [85, 95, 75]
}

df = pd.DataFrame(data)

print(df.sum(axis=0))
```

**Output:**

```text
Maths      240
Science    255
dtype: int64
```

**Explanation:**

- First, we create a DataFrame with two columns.
- The `sum(axis=0)` function calculates the sum of each column.
- It returns the total marks of Maths and Science separately.

#### 4. Applying Functions to Rows and Columns

Pandas provides the `apply()` function to apply a custom function along rows or columns of a DataFrame.

**Syntax:**

```python
df.apply(function, axis=0)
```

- `axis=0`: Applies the function column-wise.
- `axis=1`: Applies the function row-wise.

**Example:**

```python
import pandas as pd

df = pd.DataFrame({
    'A': [10, 20, 30],
    'B': [5, 10, 15]
})

# Row-wise operation
print(df.apply(sum, axis=1))

# Column-wise operation
print(df.apply(sum, axis=0))
```

**Output:**

```text
Row-wise:
0    15
1    30
2    45

Column-wise:
A    60
B    30
```

#### 5. Applying Functions to Individual Elements

Pandas provides the `map()` and `map`-based element-wise operations, as well as `DataFrame.map()` to apply a function to every individual element of a DataFrame.

**Syntax:**

```python
df.map(function)
```

**Example:**

```python
import pandas as pd

df = pd.DataFrame({
    'A': [10, 20],
    'B': [30, 40]
})

result = df.map(lambda x: x * 2)

print(result)
```

**Output:**

```text
    A   B
0  20  60
1  40  80
```

**Explanation:**

- The `map()` function applies the given function to every individual element.
- The lambda function multiplies each value by 2.
- A new DataFrame containing the modified values is returned.

#### 6. Difference Between Row-wise and Column-wise Operations

| Basis | Row-wise | Column-wise |
|---|---|---|
| Direction | Horizontal | Vertical |
| Axis | axis=1 | axis=0 |
| Operation | Across columns | Down rows |
| Purpose | Calculate values for each row | Calculate values for each column |
| Example | Total marks of each student | Average marks of each subject |

#### 7. Advantages

1. Makes data analysis easier.
2. Reduces manual calculations.
3. Helps perform operations on large datasets.
4. Supports custom functions using `apply()`.
5. Allows efficient element-wise data transformation.

#### 8. Conclusion

Row-wise and column-wise operations are important features of Pandas. The `apply()` function is used to apply functions along rows and columns, while `DataFrame.map()` is used to apply functions to individual elements. These operations make data manipulation and analysis easier and more efficient.

### Q5) How do you drop rows and columns from a pandas DataFrame? Explain with examples.

 Dropping Rows and Columns in Pandas DataFrame

#### 1. Introduction

Pandas is a Python library used for data manipulation and analysis. Sometimes, a DataFrame contains unnecessary or unwanted rows and columns. Pandas provides the `drop()` function to remove specific rows or columns from a DataFrame.

The `drop()` function is used to delete rows or columns based on their labels.

#### 2. Syntax of drop() Function

```python
df.drop(labels, axis=0, inplace=False)
```

**Parameters:**

- `labels`: Specifies the row or column labels to be removed.
- `axis=0`: Used to drop rows.
- `axis=1`: Used to drop columns.
- `inplace=False`: Returns a new DataFrame without modifying the original DataFrame.
- `inplace=True`: Modifies the original DataFrame directly.

#### 3. Creating a Sample DataFrame

```python
import pandas as pd

data = {
    'Name': ['Aman', 'Rahul', 'Ravi'],
    'Age': [20, 21, 22],
    'Marks': [85, 90, 78]
}

df = pd.DataFrame(data)

print(df)
```

**Output:**

```text
    Name  Age  Marks
0   Aman   20     85
1  Rahul   21     90
2   Ravi   22     78
```

#### 4. Dropping Rows from a DataFrame

To remove rows from a DataFrame, we use the `drop()` function with `axis=0`.

**Example:**

```python
df1 = df.drop(1, axis=0)

print(df1)
```

**Output:**

```text
    Name  Age  Marks
0   Aman   20     85
2   Ravi   22     78
```

**Explanation:**

- The `drop()` function removes the row having index label 1.
- `axis=0` indicates row-wise deletion.
- The original DataFrame remains unchanged because the default value of `inplace` is False.

**To remove multiple rows:**

```python
df1 = df.drop([0, 2], axis=0)
print(df1)
```

#### 5. Dropping Columns from a DataFrame

To remove columns from a DataFrame, we use the `drop()` function with `axis=1`.

**Example:**

```python
df2 = df.drop('Age', axis=1)

print(df2)
```

**Output:**

```text
    Name  Marks
0   Aman     85
1  Rahul     90
2   Ravi     78
```

**Explanation:**

- The `drop()` function removes the column named Age.
- `axis=1` indicates column-wise deletion.
- The remaining columns are Name and Marks.

**To remove multiple columns:**

```python
df2 = df.drop(['Age', 'Marks'], axis=1)
print(df2)
```

#### 6. Using inplace Parameter

The `inplace` parameter determines whether changes are made directly to the original DataFrame.

**Example:**

```python
df.drop('Age', axis=1, inplace=True)

print(df)
```

**Explanation:**

- `inplace=True` modifies the original DataFrame.
- The Age column is permanently removed from the current DataFrame object.

#### 7. Advantages of drop() Function

1. Removes unnecessary rows and columns.
2. Helps in cleaning datasets.
3. Makes data analysis easier.
4. Improves data organization.
5. Supports deleting single or multiple rows and columns.

#### 8. Conclusion

The `drop()` function in Pandas is used to remove unwanted rows and columns from a DataFrame. We use `axis=0` to delete rows and `axis=1` to delete columns. The `inplace` parameter determines whether the original DataFrame is modified or a new DataFrame is returned.

### Q6) Explain how to read data from and write data to textual files using pandas. Give examples.
##### Reading and Writing Textual Files Using Pandas
#### 1. Introduction

Pandas is a Python library used for data manipulation and analysis. It provides different functions to read data from textual files and write data into files.

Textual files store data in a readable format, such as CSV (Comma Separated Values) and TSV (Tab Separated Values).

Pandas mainly uses `read_csv()` to read data and `to_csv()` to write data into textual files.

#### 2. Reading Data from Textual Files

Pandas provides the `read_csv()` function to read data from CSV and other delimited text files.

**Syntax:**

```python
pd.read_csv('filename.csv')
```

**Example:**

Suppose we have a file named `students.csv` containing the following data:

```text
Name,Age,Marks
Aman,20,85
Rahul,21,90
Ravi,22,78
```

**Python Program:**

```python
import pandas as pd

df = pd.read_csv('students.csv')

print(df)
```

**Output:**

```text
    Name  Age  Marks
0   Aman   20     85
1  Rahul   21     90
2   Ravi   22     78
```

**Explanation:**

1. First, we import the Pandas library.
2. The `read_csv()` function reads data from the students.csv file.
3. The data is stored in a DataFrame.
4. Finally, we use `print()` to display the data.

#### 3. Writing Data into Textual Files

Pandas provides the `to_csv()` function to write DataFrame data into a CSV file.

**Syntax:**

```python
df.to_csv('filename.csv', index=False)
```

**Example:**

```python
import pandas as pd

data = {
    'Name': ['Aman', 'Rahul', 'Ravi'],
    'Marks': [85, 90, 78]
}

df = pd.DataFrame(data)

df.to_csv('output.csv', index=False)

print("Data successfully written to file.")
```

**Output:**

```text
Data successfully written to file.
```

**Content of output.csv:**

```text
Name,Marks
Aman,85
Rahul,90
Ravi,78
```

**Explanation:**

1. First, we create a DataFrame using a dictionary.
2. The `to_csv()` function writes the DataFrame data into the output.csv file.
3. The `index=False` parameter prevents Pandas from writing row index numbers into the file.
4. Finally, the data is saved in the CSV file.

#### 4. Important Parameters of read_csv()

| Parameter | Description |
|---|---|
| `filepath` | Specifies the file path. |
| `sep` | Specifies the delimiter. |
| `header` | Specifies the row containing column names. |
| `index_col` | Specifies the column to use as an index. |
| `nrows` | Specifies the number of rows to read. |

**Example:**

```python
df = pd.read_csv('students.txt', sep='\t')
```

This reads a tab-separated text file.

#### 5. Important Parameters of to_csv()

| Parameter | Description |
|---|---|
| `path_or_buf` | Specifies the output file path. |
| `sep` | Specifies the separator. |
| `index` | Includes or excludes row indexes. |
| `header` | Includes or excludes column names. |
| `columns` | Specifies the columns to write. |

**Example:**

```python
df.to_csv('students.txt', sep='\t', index=False)
```

This writes DataFrame data into a tab-separated text file.

#### 6. Advantages of Reading and Writing Files Using Pandas

1. Easy handling of large datasets.
2. Saves time in data processing.
3. Supports different text file formats.
4. Makes data storage and retrieval easier.
5. Allows easy conversion of data into DataFrames.

#### 7. Conclusion

Pandas provides useful functions such as `read_csv()` and `to_csv()` to read and write textual files. These functions make data storage, retrieval and manipulation easier and more efficient. They are widely used in data analysis and data science applications.

## Others

### Q1. How do you compute correlation in Pandas? Explain with a suitable example and interpret the result.

#### 1. Introduction

Correlation is a statistical method used to measure the strength and direction of the relationship between two numerical variables.

In Pandas, the `corr()` function is used to calculate the correlation between numerical columns of a DataFrame.

#### 2. Types of Correlation

**1. Positive Correlation:**

When one variable increases, the other variable also tends to increase.

Example: Study hours increase and students' marks also increase.

**2. Negative Correlation:**

When one variable increases, the other variable tends to decrease.

Example: Price increases and demand generally decreases.

**3. Zero Correlation:**

When there is no clear linear relationship between two variables.

Example: Shoe size and examination marks.

#### 3. Correlation Coefficient

The correlation coefficient is represented by `r`. Its value ranges from -1 to +1.

| Value | Meaning |
|---|---|
| +1 | Perfect positive correlation |
| 0 to +1 | Positive correlation |
| 0 | No linear correlation |
| -1 to 0 | Negative correlation |
| -1 | Perfect negative correlation |

#### 4. Syntax

```python
df.corr()
```

By default, Pandas uses the Pearson correlation method.

### 5. Python Program to Calculate Correlation

```python
import pandas as pd

data = {
    'Study_Hours': [1, 2, 3, 4, 5],
    'Marks': [40, 50, 65, 70, 85]
}

df = pd.DataFrame(data)

result = df.corr()

print(result)
```

**Output:**

```text
             Study_Hours     Marks
Study_Hours     1.000000  0.991837
Marks           0.991837  1.000000
```

#### 6. Interpretation of Result

- The correlation between Study_Hours and Marks is approximately 0.99.
- This indicates a very strong positive linear relationship.
- It means students who study more hours tend to obtain higher marks in this dataset.
- Correlation does not necessarily prove causation.

### 7. Other Correlation Methods

Pandas supports three main correlation methods:

1. Pearson – Measures linear correlation.
2. Spearman – Measures rank correlation.
3. Kendall – Measures rank association.

Example:

```python
df.corr(method='spearman')
```

#### 8. Applications of Correlation

1. Used to identify relationships between variables.
2. Helps in statistical data analysis.
3. Used to understand trends and patterns.
4. Useful in business and financial analysis.
5. Used in machine learning and data science.

#### 9. Conclusion

Correlation in Pandas is calculated using the `corr()` function. It helps measure the strength and direction of the relationship between numerical variables. It is useful for understanding relationships and analyzing datasets.

---

### Q2. Explain statistical functions in Pandas, such as sum(), mean(), median(), mode(), min(), max(), count(), std(), and describe(), with examples.

#### 1. Introduction

Statistical functions in Pandas are built-in functions used to perform mathematical and statistical calculations on numerical data.

These functions help calculate totals, averages, minimum values, maximum values, standard deviation and other statistical information.

#### 2. Important Statistical Functions

| Function | Description |
|---|---|
| `sum()` | Calculates the total of values. |
| `mean()` | Calculates the average. |
| `median()` | Finds the middle value. |
| `mode()` | Finds the most frequently occurring value. |
| `min()` | Returns the minimum value. |
| `max()` | Returns the maximum value. |
| `count()` | Counts non-null values. |
| `std()` | Calculates standard deviation. |
| `describe()` | Provides a statistical summary. |

#### 3. Example of Statistical Functions

```python
import pandas as pd

data = {
    'Marks': [60, 70, 80, 90, 100]
}

df = pd.DataFrame(data)

print("Sum:", df['Marks'].sum())
print("Mean:", df['Marks'].mean())
print("Median:", df['Marks'].median())
print("Mode:", df['Marks'].mode().tolist())
print("Minimum:", df['Marks'].min())
print("Maximum:", df['Marks'].max())
print("Count:", df['Marks'].count())
print("Standard Deviation:", df['Marks'].std())

print(df['Marks'].describe())
```

**Output:**

```text
Sum: 400
Mean: 80.0
Median: 80.0
Mode: [60, 70, 80, 90, 100]
Minimum: 60
Maximum: 100
Count: 5
Standard Deviation: 15.811388

count      5.000000
mean      80.000000
std       15.811388
min       60.000000
25%       70.000000
50%       80.000000
75%       90.000000
max      100.000000
```

#### 4. Explanation of Statistical Functions

**1. sum():**

It calculates the sum of all numerical values in a Series or DataFrame.

```python
df['Marks'].sum()
```

**2. mean():**

It calculates the arithmetic average of values.

```python
df['Marks'].mean()
```

**3. median():**

It returns the middle value after arranging the data in ascending order.

```python
df['Marks'].median()
```

**4. mode():**

It returns the most frequently occurring value. It can return multiple values if there are multiple modes.

```python
df['Marks'].mode()
```

**5. min() and max():**

These functions return the smallest and largest values respectively.

```python
df['Marks'].min()
df['Marks'].max()
```

**6. count():**

It counts the number of non-missing values.

```python
df['Marks'].count()
```

**7. std():**

It calculates standard deviation, which measures how much values are spread around the mean.

```python
df['Marks'].std()
```

**8. describe():**

It provides a summary of statistical information such as count, mean, standard deviation, minimum, maximum and quartiles.

```python
df['Marks'].describe()
```

#### 5. Advantages of Statistical Functions

1. Used to analyze numerical datasets.
2. Helps calculate average performance.
3. Identifies minimum and maximum values.
4. Helps understand data distribution.
5. Useful in business, education and scientific research.

#### 6. Conclusion

Statistical functions in Pandas make numerical data analysis easier. Functions such as sum(), mean(), median(), min(), max(), std() and describe() help calculate and understand important statistical information from datasets.

---

### Q3. Explain the different ways to sort data in Pandas. Describe sort_values() and sort_index() with examples.

#### 1. Introduction

Sorting is the process of arranging data in a particular order, such as ascending or descending order.

Pandas provides different functions to sort data in a DataFrame. The two important functions are `sort_values()` and `sort_index()`.

#### 2. Different Ways to Sort Data

Pandas supports the following sorting operations:

1. Sorting by column values.
2. Sorting by multiple columns.
3. Sorting by row index.
4. Sorting by column labels.

#### 3. sort_values() Function

The `sort_values()` function is used to sort a DataFrame according to the values of one or more columns.

**Syntax:**

```python
df.sort_values(by, ascending=True)
```

**Parameters:**

- `by`: Specifies the column name used for sorting.
- `ascending=True`: Sorts data in ascending order.
- `ascending=False`: Sorts data in descending order.

#### 4. Example of sort_values()

```python
import pandas as pd

data = {
    'Name': ['Aman', 'Rahul', 'Ravi', 'Sumit'],
    'Marks': [85, 70, 95, 80]
}

df = pd.DataFrame(data)

result = df.sort_values(by='Marks')

print(result)
```

**Output:**

```text
    Name  Marks
1  Rahul     70
3  Sumit     80
0   Aman     85
2   Ravi     95
```

**Explanation:**

- First, we create a DataFrame containing students' names and marks.
- The `sort_values()` function sorts records according to the Marks column.
- By default, data is arranged in ascending order.
- The result displays students from lowest marks to highest marks.

**Sorting in Descending Order:**

```python
df.sort_values(by='Marks', ascending=False)
```

This arranges students from highest marks to lowest marks.

**Sorting by Multiple Columns:**

We can also sort data using multiple columns.

```python
df.sort_values(
    by=['Marks', 'Name'],
    ascending=[False, True]
)
```

This sorts marks in descending order and names in ascending order when marks are equal.

#### 5. sort_index() Function

The `sort_index()` function is used to sort a DataFrame according to its index labels instead of its actual data values.

**Syntax:**

```python
df.sort_index(axis=0, ascending=True)
```

**Parameters:**

- `axis=0`: Sorts row index labels.
- `axis=1`: Sorts column labels.
- `ascending=True`: Sorts in ascending order.
- `ascending=False`: Sorts in descending order.

#### 6. Example of sort_index()

```python
import pandas as pd

data = {
    'Name': ['Aman', 'Rahul', 'Ravi'],
    'Marks': [85, 90, 78]
}

df = pd.DataFrame(data, index=[3, 1, 2])

result = df.sort_index()

print(result)
```

**Output:**

```text
    Name  Marks
1  Rahul     90
2   Ravi     78
3   Aman     85
```

**Explanation:**

- We create a DataFrame with custom index labels 3, 1 and 2.
- The `sort_index()` function arranges the rows according to their index labels.
- The resulting DataFrame displays rows in ascending index order.

#### 7. Difference Between sort_values() and sort_index()

| Basis | sort_values() | sort_index() |
|---|---|---|
| Purpose | Sorts data by values. | Sorts data by index labels. |
| Sorting Basis | Column or row values. | Index labels. |
| Parameter | `by` | `axis` |
| Example | `df.sort_values('Marks')` | `df.sort_index()` |
| Usage | Arrange students by marks. | Arrange records by index. |

#### 8. Advantages of Sorting

1. Organizes data in a proper order.
2. Makes searching and comparison easier.
3. Helps identify highest and lowest values.
4. Improves data readability.
5. Useful in data analysis and reporting.

#### 9. Conclusion

Sorting is an important operation in Pandas. The `sort_values()` function arranges data according to column values, whereas `sort_index()` arranges data according to index labels. Both functions make data organization and analysis easier.

---

### Q4. What are window functions in Pandas? Explain rolling, expanding, and exponentially weighted window functions with examples.

#### 1. Introduction

Window functions in Pandas are used to perform calculations on a specific group or window of data points.

They are especially useful for analyzing time-series data, calculating moving averages, identifying trends and understanding changes over time.

Pandas provides three main types of window functions:

1. Rolling Window Functions.
2. Expanding Window Functions.
3. Exponentially Weighted Window Functions.

#### 2. Rolling Window Functions

**Definition:**

Rolling window functions perform calculations on a fixed-size window of consecutive observations.

As the window moves forward, old observations are removed and new observations are included.

They are commonly used to calculate moving averages and moving sums.

**Syntax:**

```python
df['column'].rolling(window=3).mean()
```

Here, `window=3` means that the calculation is performed using three consecutive values.

**Example:**

```python
import pandas as pd

data = pd.Series([10, 20, 30, 40, 50])

result = data.rolling(window=3).mean()

print(result)
```

**Output:**

```text
0     NaN
1     NaN
2    20.0
3    30.0
4    40.0
dtype: float64
```

**Explanation:**

- First, we create a Pandas Series containing five values.
- The `rolling(window=3)` function creates a window of three consecutive values.
- The `mean()` function calculates the average of each window.
- The first two results are NaN because three observations are not yet available.

Calculations:

- (10 + 20 + 30) / 3 = 20
- (20 + 30 + 40) / 3 = 30
- (30 + 40 + 50) / 3 = 40

**Applications:**

1. Moving averages.
2. Stock market analysis.
3. Time-series analysis.
4. Identifying short-term trends.

#### 3. Expanding Window Functions

**Definition:**

Expanding window functions perform calculations on all observations from the beginning of the dataset up to the current observation.

Unlike rolling windows, the window size continuously increases as new observations are added.

**Syntax:**

```python
df['column'].expanding().mean()
```

**Example:**

```python
import pandas as pd

data = pd.Series([10, 20, 30, 40, 50])

result = data.expanding().mean()

print(result)
```

**Output:**

```text
0    10.0
1    15.0
2    20.0
3    25.0
4    30.0
dtype: float64
```

**Explanation:**

- First, we create a Pandas Series containing five values.
- The `expanding()` function creates an expanding window.
- The `mean()` function calculates the cumulative average of all values from the beginning up to the current position.

Calculations:

- First value: 10
- First two values: (10 + 20) / 2 = 15
- First three values: (10 + 20 + 30) / 3 = 20
- First four values: (10 + 20 + 30 + 40) / 4 = 25

**Applications:**

1. Cumulative average calculations.
2. Tracking overall performance.
3. Financial data analysis.
4. Analyzing long-term trends.

#### 4. Exponentially Weighted Window Functions (EWM)

**Definition:**

Exponentially Weighted Window functions assign more weight to recent observations and gradually decrease the weight of older observations.

They are useful when recent data is more important than historical data.

Pandas provides the `ewm()` function to perform exponentially weighted calculations.

**Syntax:**

```python
df['column'].ewm(span=3).mean()
```

Here, `span=3` controls the rate at which the weights decrease for older observations.

**Example:**

```python
import pandas as pd

data = pd.Series([10, 20, 30, 40, 50])

result = data.ewm(span=3).mean()

print(result)
```

**Output:**

```text
0    10.000000
1    16.666667
2    24.285714
3    32.666667
4    41.612903
dtype: float64
```

**Explanation:**

- First, we create a Pandas Series containing five values.
- The `ewm(span=3)` function creates an exponentially weighted window.
- The `mean()` function calculates the exponentially weighted average.
- Recent values receive more importance than older values.
- This helps smooth data while responding more quickly to recent changes.

**Applications:**

1. Stock market analysis.
2. Financial forecasting.
3. Time-series data analysis.
4. Monitoring changing trends.

#### 5. Difference Between Rolling, Expanding and EWM Functions

| Basis | Rolling | Expanding | EWM |
|---|---|---|---|
| Window Size | Fixed size. | Continuously increases. | Uses weighted observations. |
| Calculation | Recent fixed number of values. | All values from the beginning. | Recent values receive higher weights. |
| Old Values | Removed when window moves. | Remain included. | Their weights decrease. |
| Function | `rolling()` | `expanding()` | `ewm()` |
| Example | Moving average. | Cumulative average. | Exponential moving average. |
| Usage | Short-term trends. | Overall trends. | Smooth and responsive trends. |

#### 6. Advantages of Window Functions

1. Helps analyze time-series data.
2. Calculates moving and cumulative averages.
3. Helps identify trends and patterns.
4. Useful for financial and stock market analysis.
5. Helps smooth irregular data.

#### 7. Conclusion

Window functions are important features of Pandas used to perform calculations over a group of observations. Rolling functions use a fixed-size window, expanding functions use all previous observations, and exponentially weighted functions give more importance to recent observations. These functions are widely used in time-series analysis and data science.
