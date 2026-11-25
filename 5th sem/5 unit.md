# Unit V: Top 10 PYQ Questions — Complete 8-Mark Answers

---

## Q1. Histogram (Repeated 4 times)

**Q. What is a histogram? Explain its purpose and write Python code to create one using Matplotlib.**

### Definition (2 marks)
A **histogram** is a graphical representation of the distribution of numerical data. It groups data into continuous intervals called **bins** and displays the frequency of observations in each bin as adjacent bars.

- **X-axis:** range of data values (bins)
- **Y-axis:** frequency or density
- Bars are **adjacent** (no gaps), indicating continuous data.

### Purpose (2 marks)
1. Visualize the shape of distribution (normal, skewed, bimodal, uniform)
2. Identify central tendency — where most data is concentrated
3. Detect outliers — values far from the main cluster
4. Assess spread/variability of data
5. Compare distributions across groups
6. Check data quality — detect gaps or anomalies

### Python Code (3 marks)
```python
import matplotlib.pyplot as plt

# Sample dataset
marks = [45, 50, 55, 60, 62, 65, 65, 68, 70, 72,
         72, 75, 75, 78, 80, 82, 85, 88, 90, 95]

# Create histogram
plt.hist(marks, bins=5, color='skyblue', edgecolor='black')

# Labels and title
plt.title('Distribution of Student Marks')
plt.xlabel('Marks')
plt.ylabel('Frequency')

plt.show()
```

### Key Parameters (1 mark)
| Parameter | Purpose |
|-----------|---------|
| `marks` | Input data (list of values) |
| `bins=5` | Number of intervals to divide data into |
| `color` | Fill colour of bars |
| `edgecolor` | Colour of bar borders |

---

## Q2. Pie Chart (Repeated 4 times)

**Q. Create a pie chart using Matplotlib. Show how to add labels, a legend, and explode a wedge.**

### Definition (1 mark)
A **pie chart** is a circular statistical graph divided into slices (wedges) to illustrate numerical proportion. Each slice represents a category's share of the whole (sum = 100%).

### Uses (1 mark)
- Show percentage/proportion of categories
- Compare parts of a whole
- Visualize market share, budget allocation, survey results

### Python Code (5 marks)
```python
import matplotlib.pyplot as plt

# Data
subjects = ['Math', 'Science', 'English', 'History', 'Computer']
marks = [85, 90, 75, 60, 95]

# Explode the 'Computer' wedge (5th index)
explode = [0, 0, 0, 0, 0.1]

# Create pie chart
plt.pie(marks,
        labels=subjects,
        explode=explode,
        autopct='%1.1f%%',
        startangle=90,
        colors=['gold', 'lightgreen', 'lightblue', 'pink', 'orange'],
        shadow=True)

# Add legend
plt.legend(title='Subjects', loc='upper right')

# Title
plt.title('Marks Distribution by Subject')

plt.show()
```

### Explanation of Parameters (1 mark)
| Parameter | Purpose |
|-----------|---------|
| `labels` | Names shown on each slice |
| `explode` | Pulls a wedge outward (0 = no pull, 0.1 = 10% pull) |
| `autopct` | Shows percentage on each slice (`'%1.1f%%'` = 1 decimal) |
| `startangle` | Rotates starting angle (90 = start from top) |
| `colors` | List of slice colours |
| `shadow` | Adds shadow effect |
| `legend()` | Displays category labels separately |
| `loc` | Position of legend (`'upper right'`, `'best'`, etc.) |

---

## Q3. Scatter Plot (Repeated 4 times)

**Q. Explain how to create a scatter plot with a suitable example. Also explain its uses.**

### Definition (2 marks)
A **scatter plot** uses dots to represent values for two different variables. Each dot's position on the **x-axis** and **y-axis** represents one data point. It shows the **relationship or correlation** between two variables.

- **X-axis:** one variable (e.g., hours studied)
- **Y-axis:** another variable (e.g., marks obtained)
- Each **dot** = one observation

### Uses (2 marks)
1. Show correlation between two variables — positive, negative, or none
2. Identify trends and patterns — linear, curved, or clustered
3. Detect outliers — points far from the main group
4. Compare multiple data groups — using different colours/markers
5. Check linearity — before applying regression or correlation analysis

### Python Code with Suitable Example (3 marks)
**Example:** Relationship between **hours studied** and **marks obtained** by students.

```python
import matplotlib.pyplot as plt

# Data: hours studied vs marks obtained
hours = [1, 2, 3, 4, 5, 6, 7, 8]
marks = [35, 40, 50, 55, 65, 72, 80, 88]

# Create scatter plot
plt.scatter(hours, marks, color='red', marker='o', s=100)

# Labels and title
plt.title('Hours Studied vs Marks Obtained')
plt.xlabel('Hours Studied')
plt.ylabel('Marks Obtained')

plt.grid(True)
plt.show()
```

**Interpretation:** The plot shows a **positive correlation** — as hours studied increase, marks obtained also increase.

### Explanation of Key Parameters (1 mark)
| Parameter | Purpose |
|-----------|---------|
| `hours, marks` | x and y data values |
| `color` | Colour of the dots |
| `marker` | Shape of marker (`'o'` = circle, `'s'` = square, `'^'` = triangle) |
| `s` | Size of the marker |
| `alpha` | Transparency of dots (0 to 1) |

---

## Q4. Bar Charts (Repeated 4 times)

**Q. Create vertical and horizontal bar charts using Matplotlib. Explain with Python code.**

### Definition (1 mark)
A **bar chart** is a graphical representation of categorical data using rectangular bars. The **height** (vertical) or **length** (horizontal) of each bar is proportional to the value it represents.

### Uses (1 mark)
- Compare quantities across categories
- Show rankings or frequencies
- Visualize survey results, sales by product, population by country, etc.

### Vertical Bar Chart — Python Code (2 marks)
```python
import matplotlib.pyplot as plt

# Data
subjects = ['Math', 'Science', 'English', 'History']
marks = [85, 90, 75, 60]

# Vertical bar chart using plt.bar()
plt.bar(subjects, marks, color='steelblue', edgecolor='black', width=0.6)

plt.title('Marks by Subject (Vertical Bar Chart)')
plt.xlabel('Subjects')
plt.ylabel('Marks')
plt.show()
```
**Explanation:** `plt.bar(x, height)` takes categories on the x-axis and values as bar height.

### Horizontal Bar Chart — Python Code (2 marks)
```python
import matplotlib.pyplot as plt

# Data
subjects = ['Math', 'Science', 'English', 'History']
marks = [85, 90, 75, 60]

# Horizontal bar chart using plt.barh()
plt.barh(subjects, marks, color='orange', edgecolor='black', height=0.6)

plt.title('Marks by Subject (Horizontal Bar Chart)')
plt.xlabel('Marks')
plt.ylabel('Subjects')
plt.show()
```
**Explanation:** `plt.barh(y, width)` takes categories on the y-axis and values as bar length.

### Key Differences (1 mark)
| Feature | `plt.bar()` — Vertical | `plt.barh()` — Horizontal |
|---------|------------------------|---------------------------|
| Orientation | Bars go up | Bars go right |
| x-axis | Categories | Values |
| y-axis | Values | Categories |
| Size parameter | `width` | `height` |

### Explanation of Key Parameters (1 mark)
| Parameter | Purpose |
|-----------|---------|
| `subjects` | Category labels |
| `marks` | Values (bar height/length) |
| `color` | Fill colour of bars |
| `edgecolor` | Border colour of bars |
| `width` / `height` | Thickness of bars (0 to 1) |

---

## Q5. Line Chart (Repeated 3 times)

**Q. Write Python code to create a line chart and set its properties, such as title, labels, line style, colour, and markers.**

### Definition (1 mark)
A **line chart** displays information as a series of data points connected by straight line segments. It is used to show **trends over time** or continuous data.

### Uses (1 mark)
- Show trends over time (stock prices, temperature)
- Compare multiple series
- Identify patterns like growth, decline, seasonality

### Python Code (5 marks)
```python
import matplotlib.pyplot as plt

# Data: monthly sales
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
sales = [120, 150, 130, 180, 200, 170]

# Create line chart with properties
plt.plot(months, sales,
         color='blue',          # line colour
         linestyle='--',        # dashed line ('-', '--', '-.', ':')
         linewidth=2,           # thickness
         marker='o',            # circle marker
         markersize=8,          # marker size
         markerfacecolor='red',
         label='Sales 2024')

# Title and labels
plt.title('Monthly Sales Trend', fontsize=14)
plt.xlabel('Months')
plt.ylabel('Sales (in units)')

# Legend and grid
plt.legend()
plt.grid(True)

plt.show()
```

### Line Style & Marker Reference (1 mark)
| Line Style | Symbol | Marker | Symbol |
|------------|--------|--------|--------|
| Solid | `'-'` | Circle | `'o'` |
| Dashed | `'--'` | Square | `'s'` |
| Dash-dot | `'-.'` | Triangle | `'^'` |
| Dotted | `':'` | Star | `'*'` |

---

## Q6. Matplotlib Architecture (Repeated 2 times)

**Q. List and explain the layers of Matplotlib architecture.**

Matplotlib is organized into **three layers** (3 marks for listing, 5 marks for explanation):

### 1. Backend Layer (2 marks)
- **Lowest layer** — handles rendering and output.
- Converts the figure into a display or file format (PNG, PDF, SVG).
- Interacts with GUI toolkits (Tkinter, Qt) or non-interactive backends (Agg, PDF).
- Examples: `Agg`, `TkAgg`, `Qt5Agg`, `pdf`, `svg`.

### 2. Artist Layer (2 marks)
- **Middle layer** — contains the objects drawn on the figure.
- Everything visible on a plot is an **Artist**: `Figure`, `Axes`, `Axis`, `Line2D`, `Text`, `Rectangle`.
- Two types:
  - **Primitive Artists** — lines, rectangles, text, markers
  - **Composite Artists** — Figure, Axes (contain other artists)
- The `FigureCanvas` holds the figure; `Figure` holds axes; `Axes` holds the actual plot elements.

### 3. Scripting Layer (pyplot) (2 marks)
- **Topmost layer** — the `matplotlib.pyplot` interface.
- Provides simple, MATLAB-like functions: `plot()`, `bar()`, `hist()`, `title()`, `show()`.
- Internally creates Figure and Axes objects and calls Artist methods.
- Easiest for quick plotting; less control than the OO (Artist) interface.

### Summary (1 mark)
```
┌──────────────────────────────┐
│  Scripting Layer (pyplot)    │  ← plt.plot(), plt.show()
├──────────────────────────────┤
│  Artist Layer (Figure, Axes) │  ← objects drawn
├──────────────────────────────┤
│  Backend Layer (Agg, TkAgg)  │  ← renders to screen/file
└──────────────────────────────┘
```

---

## Q7. Multiple Figures and Axes (Repeated 2 times)

**Q. Explain how to work with multiple figures and axes in Matplotlib, with a Python program.**

### Concept (3 marks)
- **Figure** — the entire canvas/window (like a page).
- **Axes** — a plot area within the figure (contains x-axis, y-axis, data).
- A figure can contain **multiple axes** (subplots) arranged in a grid.
- Multiple **figures** can be open simultaneously — each is an independent window.

**Two approaches:**
1. **`plt.figure()`** — creates a new figure; `plt.subplot()` or `plt.subplots()` adds axes.
2. **Object-Oriented (OO) style** — `fig, ax = plt.subplots(rows, cols)` gives direct control.

### Python Code — Multiple Figures (2 marks)
```python
import matplotlib.pyplot as plt

# Figure 1
plt.figure(1)
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.title('Figure 1: Square')

# Figure 2
plt.figure(2)
plt.plot([1, 2, 3, 4], [1, 8, 27, 64])
plt.title('Figure 2: Cube')

plt.show()   # shows both figures
```

### Python Code — Multiple Axes (Subplots) (3 marks)
```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]

# Create a 2x2 grid of axes
fig, axes = plt.subplots(nrows=2, ncols=2, figsize=(8, 6))

# Plot different data on each axis
axes[0, 0].plot(x, [1, 2, 3, 4])
axes[0, 0].set_title('Linear')

axes[0, 1].plot(x, [1, 4, 9, 16])
axes[0, 1].set_title('Square')

axes[1, 0].plot(x, [1, 8, 27, 64])
axes[1, 0].set_title('Cube')

axes[1, 1].plot(x, [4, 3, 2, 1])
axes[1, 1].set_title('Reverse')

fig.suptitle('Multiple Axes in One Figure')
plt.tight_layout()
plt.show()
```

### Key Functions (1 mark)
| Function | Purpose |
|----------|---------|
| `plt.figure(n)` | Create/activate figure number n |
| `plt.subplot(r, c, i)` | Create subplot at row r, col c, index i |
| `plt.subplots(r, c)` | Create figure + array of axes |
| `tight_layout()` | Prevent overlap of labels |

---

## Q8. Text and Grid (Repeated 2 times)

**Q. Explain how to add text and grid lines to a Matplotlib chart, with examples.**

### Adding Text (2 marks)
Use **`plt.text(x, y, 'string')`** to place text at coordinates (x, y).
Use **`plt.annotate()`** to add text with an arrow pointing to a data point.

| Parameter | Purpose |
|-----------|---------|
| `x, y` | Coordinates of text position |
| `fontsize` | Size of text |
| `color` | Text colour |
| `ha`, `va` | Horizontal/vertical alignment |
| `bbox` | Box around text |

### Adding Grid (2 marks)
Use **`plt.grid(True)`** to display grid lines.
Parameters: `axis='x'/'y'/'both'`, `color`, `linestyle`, `linewidth`, `alpha`.

### Python Code (4 marks)
```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [10, 20, 25, 30, 40]

plt.plot(x, y, marker='o', color='blue')
plt.title('Text and Grid Example')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')

# Add grid
plt.grid(True, color='gray', linestyle='--', linewidth=0.5, alpha=0.7)

# Add plain text at (2, 35)
plt.text(2, 35, 'Peak Region',
         fontsize=12, color='red',
         bbox=dict(facecolor='yellow', alpha=0.5))

# Annotate with arrow
plt.annotate('Highest Value',
             xy=(5, 40), xytext=(3, 42),
             arrowprops=dict(arrowstyle='->', color='green'),
             fontsize=11)

plt.show()
```

### Key Points (2 marks)
- `text()` places plain text at a fixed position.
- `annotate()` adds text with an optional arrow (`xy` = point, `xytext` = label position).
- `grid()` improves readability of charts by adding reference lines.

---

## Q9. Saving a Plot (Repeated 2 times)

**Q. Name and explain the function used to save a plot. Give an example.**

### Function (2 marks)
The function used to save a plot is **`plt.savefig()`** (or `fig.savefig()` in OO style).

It saves the current figure to a file. The **file format is inferred from the extension** (`.png`, `.jpg`, `.pdf`, `.svg`, `.eps`).

### Key Parameters (3 marks)
| Parameter | Purpose |
|-----------|---------|
| `fname` | Filename with extension (e.g., `'plot.png'`) |
| `dpi` | Resolution in dots per inch (e.g., `dpi=300`) |
| `format` | File format (`'png'`, `'pdf'`, `'svg'`) |
| `bbox_inches` | `'tight'` removes extra whitespace |
| `transparent` | `True` for transparent background |

### Example (3 marks)
```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 25, 30]

plt.plot(x, y, marker='o', color='blue')
plt.title('Sample Plot')
plt.xlabel('X')
plt.ylabel('Y')

# Save BEFORE plt.show()
plt.savefig('my_plot.png', dpi=300, bbox_inches='tight')
plt.savefig('my_plot.pdf')   # save as PDF

plt.show()
```

### Important Note (1 mark)
`plt.savefig()` must be called **before `plt.show()`**. After `show()`, the figure is cleared from memory and saving may produce a blank file.

---

## Q10. Monthly Temperature Plots (Repeated 2 times)

**Q. Given monthly temperatures from January to December, write Python code to create a line plot and a bar plot showing quarterly average temperatures.**

### Problem Understanding (1 mark)
- Data: 12 monthly temperatures (Jan–Dec)
- Need: (a) **line plot** of all 12 months, (b) **bar plot** of **quarterly averages**
- Quarters: Q1 = Jan–Mar, Q2 = Apr–Jun, Q3 = Jul–Sep, Q4 = Oct–Dec

### Python Code (6 marks)
```python
import matplotlib.pyplot as plt

# Monthly temperatures (°C)
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
temps = [15, 18, 22, 28, 33, 35,
         32, 30, 28, 24, 19, 16]

# ---- Line Plot (all 12 months) ----
plt.figure(figsize=(8, 4))
plt.plot(months, temps, marker='o', color='red', linestyle='-')
plt.title('Monthly Temperatures')
plt.xlabel('Month')
plt.ylabel('Temperature (°C)')
plt.grid(True)
plt.show()

# ---- Quarterly Averages ----
q1 = sum(temps[0:3]) / 3
q2 = sum(temps[3:6]) / 3
q3 = sum(temps[6:9]) / 3
q4 = sum(temps[9:12]) / 3
quarters = ['Q1', 'Q2', 'Q3', 'Q4']
q_avg = [q1, q2, q3, q4]

# ---- Bar Plot (quarterly averages) ----
plt.figure(figsize=(6, 4))
plt.bar(quarters, q_avg, color='orange', edgecolor='black', width=0.5)
plt.title('Quarterly Average Temperatures')
plt.xlabel('Quarter')
plt.ylabel('Average Temperature (°C)')
plt.show()
```

### Explanation (1 mark)
- **Line plot** shows the full monthly trend (rise in summer, fall in winter).
- **Quarterly averages** are computed by averaging the 3 months in each quarter.
- **Bar plot** compares the 4 quarterly averages side by side.

### Expected Quarterly Averages
- Q1 = (15+18+22)/3 ≈ **18.33°C**
- Q2 = (28+33+35)/3 = **32°C**
- Q3 = (32+30+28)/3 = **30°C**
- Q4 = (24+19+16)/3 ≈ **19.67°C**

---

**End of Unit V — All 10 questions answered in exam-ready 8-mark format. Practice the code for Q1–Q5 and Q10 first as advised.**
