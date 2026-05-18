---
course: Html
link: https://youtube.com/playlist?list=PLgQY_jP76UlqDrM0v85YU0q2DJkgAXZ5u&si=DHoK0mtgCchVTHTb
---
### HTML Boilerplate (Basic Structure)

##### 1. What is an HTML Boilerplate?

An **HTML Boilerplate** is the **basic template or skeleton** of every HTML webpage.  
It defines the **minimum structure required for a browser to understand and render a webpage**.

Every HTML page normally starts with this structure.

---

##### 2. Basic HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Link to CSS files or style blocks can go here -->
</head>
<body>
    <!-- Visible page content goes here -->

    <!-- Link to JavaScript files or script blocks can go here -->
</body>
</html>
```

---

##### Structure of an HTML Document

```
HTML Document
│
├── DOCTYPE Declaration
│
├── <html>
│   ├── <head>
│   │   ├── meta tags
│   │   ├── title
│   │   └── CSS links
│   │
│   └── <body>
│       ├── text
│       ├── images
│       ├── buttons
│       └── scripts
```

---

##### Explanation of Each Part

 1. `<!DOCTYPE html>`

**Purpose**

Tells the browser that the document follows the **HTML5 standard**.

**Why it is important**

Without it, browsers may render the page in **quirks mode**, which causes inconsistent layouts.

Example:

```
<!DOCTYPE html>
```

---

2. `<html>` Tag

This is the **root element** of the HTML document.  
All other HTML elements must be inside it.

Example

```
<html lang="en">
```

##### Attribute

`lang="en"`

This specifies the **language of the webpage**.

Benefits:

- Helps **search engines**
- Helps **screen readers**
- Improves **SEO**

---

 3. `<head>` Section

The `<head>` section contains **metadata** (information about the webpage).

It is **not visible to users**.

Example

```
<head>
</head>
```

Typical contents:

- page title
- meta information
- CSS files
- fonts
- scripts

---

4. `<meta charset="UTF-8">`

Defines the **character encoding**.

```
<meta charset="UTF-8">
```

UTF-8 supports almost all characters including:

- English
- Hindi
- symbols
- emojis

Example:

```
नमस्ते
Hello
© ★ ✓
```

---

5. Viewport Meta Tag

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Purpose:

Makes the website **responsive on mobile devices**.

Meaning:

|Property|Meaning|
|---|---|
|width=device-width|Page width equals device width|
|initial-scale=1.0|Default zoom level|

Without it:

Websites appear **zoomed out on phones**.

---

6. `<title>` Tag

Defines the **title of the webpage**.

```
<title>Document</title>
```

This title appears in:

- browser tab
- search engine results
- bookmarks

Example:

```
<title>My First Website</title>
```

---

7. `<body>` Section

The `<body>` contains **all visible content** on the webpage.

Example:

```
<body>
</body>
```

Inside the body you can place:

- headings
- paragraphs
- images
- videos
- forms
- buttons

Example:

```html
<body>
    <h1>Welcome</h1>
    <p>This is my first webpage</p>
</body>
```

---

 Where to Add CSS

CSS is usually added inside the `<head>`.

Example

```html
<link rel="stylesheet" href="style.css">
```

Or

```html
<style>
h1 {
color: blue;
}
</style>
```

---

##### Where to Add JavaScript

JavaScript is normally added **before the closing body tag**.

Example

```html
<script src="script.js"></script>
```

Reason:

This ensures the **HTML loads first**, improving page performance.

---

##### Complete Example with Content

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My First Website</title>
</head>

<body>

<h1>Hello World</h1>
<p>This is my first webpage.</p>

</body>
</html>
```

Output:

```
Hello World
This is my first webpage.
```

---

##### Quick Summary

|Tag|Purpose|
|---|---|
|`<!DOCTYPE html>`|Defines HTML5 document|
|`<html>`|Root element|
|`<head>`|Metadata|
|`<meta>`|Page information|
|`<title>`|Page title|
|`<body>`|Visible content|

---

If you want, I can also show you **how top developers structure HTML notes in Obsidian (with callouts, folding sections, and diagrams)** so your vault looks **like a professional knowledge base instead of random notes**.

.


### HTML Complete Guide

##### Table of Contents
- [[#What is HTML]]
- [[#HTML Basics]]
- [[#HTML Elements & Tags]]
- [[#HTML Attributes]]
- [[#Text Formatting]]
- [[#Links & Navigation]]
- [[#Images & Media]]
- [[#Lists]]
- [[#Tables]]
- [[#Forms & Input]]
- [[#Semantic HTML]]
- [[#HTML5 Features]]
- [[#Best Practices]]

---

##### What is HTML

HTML (HyperText Markup Language) is the standard language used to create and structure web pages.

It defines:
- Page structure
- Content layout
- Elements like headings, paragraphs, images, links, tables, and forms.

HTML works together with:
- **CSS** → styling
- **JavaScript** → interactivity

###### Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>My Page</title>
</head>

<body>
<h1>Hello World</h1>
<p>This is my first webpage.</p>
</body>
</html>
```

---

##### HTML Basics

###### Important Tags

| Tag | Purpose |
|----|----|
| `<html>` | Root element |
| `<head>` | Metadata |
| `<title>` | Page title |
| `<body>` | Visible content |

###### Metadata Example

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Web page description">
<meta name="author" content="Aayush">
```

---

##### HTML Elements & Tags

An **HTML element** consists of:

```
<tag> content </tag>
```

Example:

```html
<p>This is a paragraph</p>
```

###### Types of Elements

**Block Elements**

- `<div>`
- `<p>`
- `<h1>`
- `<section>`
- `<table>`

Start on new line.

**Inline Elements**

- `<span>`
- `<a>`
- `<img>`
- `<b>`
- `<i>`

Stay in same line.

---

##### HTML Attributes

Attributes give **extra information about elements**.

Example:

```html
<a href="https://google.com" target="_blank">Google</a>
```

###### Common Attributes

| Attribute | Purpose |
|----|----|
| id | unique identifier |
| class | styling group |
| style | inline CSS |
| title | tooltip |
| hidden | hide element |

Example:

```html
<p id="intro" class="text">Hello</p>
```

---

##### Text Formatting

###### Headings

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
```

###### Formatting Tags

| Tag | Meaning |
|----|----|
| `<b>` | bold |
| `<i>` | italic |
| `<u>` | underline |
| `<mark>` | highlight |
| `<sub>` | subscript |
| `<sup>` | superscript |

Example

```html
H<sub>2</sub>O
E = mc<sup>2</sup>
```

---

##### Links & Navigation

###### Anchor Tag

```html
<a href="https://google.com">Visit Google</a>
```

###### Types of Links

External Link

```html
<a href="https://example.com">
```

Internal Link

```html
<a href="about.html">
```

Page Section

```html
<a href="#section1">
```

---

##### Images & Media

###### Image

```html
<img src="image.jpg" alt="Description">
```

###### Audio

```html
<audio controls>
<source src="song.mp3">
</audio>
```

###### Video

```html
<video controls>
<source src="video.mp4">
</video>
```

---

##### Lists

###### Unordered List

```html
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
```

###### Ordered List

```html
<ol>
<li>Step 1</li>
<li>Step 2</li>
</ol>
```

###### Description List

```html
<dl>
<dt>HTML</dt>
<dd>Markup language</dd>
</dl>
```

---

##### Tables

###### Basic Table

```html
<table>
<tr>
<th>Name</th>
<th>Age</th>
</tr>

<tr>
<td>Aayush</td>
<td>20</td>
</tr>
</table>
```

###### Table Tags

| Tag | Purpose |
|----|----|
| `<table>` | table |
| `<tr>` | row |
| `<th>` | header |
| `<td>` | data |

---

##### Forms & Input

Forms collect **user data**.

###### Basic Form

```html
<form>
<label>Name</label>
<input type="text">

<button>Submit</button>
</form>
```

###### Input Types

| Type | Example |
|----|----|
| text | name |
| password | login |
| email | email |
| number | age |
| date | birthday |
| file | upload |

---

##### Semantic HTML

Semantic tags describe **meaning of content**.

Examples

```html
<header>
<nav>
<section>
<article>
<footer>
```

Benefits:

- Better SEO
- Better accessibility
- Clean structure

---

##### HTML5 Features

Important HTML5 additions:

- `<audio>`
- `<video>`
- `<canvas>`
- `<article>`
- `<section>`
- `<localStorage>`

---

##### Best Practices

- Use semantic HTML
- Write clean indentation
- Use meaningful element names
- Always include `alt` for images
- Separate HTML, CSS, and JS,
### HTML — Complete Developer Notes

##### 1. What is HTML

HTML (HyperText Markup Language) is the standard language used to create the structure of web pages.

HTML defines:
- headings
- paragraphs
- images
- links
- tables
- forms
- multimedia

HTML works with:

| Technology | Purpose |
|---|---|
| HTML | Structure |
| CSS | Styling |
| JavaScript | Functionality |

Example

```html
<!DOCTYPE html>
<html>
<head>
<title>My Page</title>
</head>

<body>
<h1>Hello World</h1>
<p>This is my first web page</p>
</body>

</html>
```

---

##### 2. HTML Document Structure

Every HTML page follows this structure.

```html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Website Title</title>

<link rel="stylesheet" href="style.css">
<script src="script.js"></script>

</head>

<body>

<!-- Page content -->

</body>

</html>
```

Explanation

| Tag | Meaning |
|---|---|
| DOCTYPE | Defines HTML version |
| html | Root element |
| head | Metadata |
| body | Visible page content |

---

##### 3. HTML Elements & Tags

An HTML element consists of:

```
<tag> content </tag>
```

Example

```html
<p>This is a paragraph</p>
```

Self-closing tags

```html
<br>
<hr>
<img>
```

Nested Elements

```html
<p>This is <b>bold</b> text</p>
```

---

##### 4. Block vs Inline Elements

Block Elements (start new line)

```
<div>
<p>
<h1>
<section>
<header>
<footer>
```

Example

```html
<div>
<h1>Heading</h1>
<p>Paragraph</p>
</div>
```

Inline Elements (same line)

```
<span>
<a>
<img>
<b>
<i>
```

Example

```html
<p>This is <span>inline text</span></p>
```

---

##### 5. HTML Attributes

Attributes give extra information to elements.

Example

```html
<a href="https://google.com" target="_blank">Google</a>
```

Common Attributes

| Attribute | Purpose |
|---|---|
| id | unique identifier |
| class | CSS class |
| style | inline styling |
| title | tooltip |
| hidden | hide element |

Example

```html
<p id="intro" class="text">Hello</p>
```

---

##### 6. Text Formatting

Important formatting tags

| Tag | Meaning |
|---|---|
| b | bold |
| strong | important text |
| i | italic |
| em | emphasized |
| u | underline |
| mark | highlight |
| sub | subscript |
| sup | superscript |

Example

```html
<p>Water = H<sub>2</sub>O</p>
<p>Energy = mc<sup>2</sup></p>
```

Code formatting

```html
<code>console.log("Hello")</code>

<pre>
Preformatted
Text
</pre>
```

---

##### 7. Links

Anchor tag creates links.

Example

```html
<a href="https://google.com">Visit Google</a>
```

Open link in new tab

```html
<a href="https://example.com" target="_blank">
```

Email link

```html
<a href="mailto:example@email.com">
```

Phone link

```html
<a href="tel:+123456789">
```

Navigation example

```html
<nav>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Contact</a></li>
</ul>
</nav>
```

---

##### 8. Images

Basic image

```html
<img src="image.jpg" alt="Description">
```

Image with size

```html
<img src="photo.jpg" width="400" height="300">
```

Responsive image

```html
<img src="small.jpg"
srcset="medium.jpg 600w, large.jpg 1200w"
alt="Responsive image">
```

Figure example

```html
<figure>
<img src="image.jpg">
<figcaption>Image caption</figcaption>
</figure>
```

---

##### 9. Audio & Video

Audio example

```html
<audio controls>
<source src="song.mp3">
</audio>
```

Video example

```html
<video controls width="600">
<source src="video.mp4">
</video>
```

YouTube embed

```html
<iframe src="https://youtube.com/embed/video"></iframe>
```

---

##### 10. Lists

Unordered list

```html
<ul>
<li>Apple</li>
<li>Banana</li>
<li>Mango</li>
</ul>
```

Ordered list

```html
<ol>
<li>Step 1</li>
<li>Step 2</li>
</ol>
```

Description list

```html
<dl>
<dt>HTML</dt>
<dd>Web structure language</dd>
</dl>
```

---

##### 11. Tables

Basic table

```html
<table>

<tr>
<th>Name</th>
<th>Age</th>
</tr>

<tr>
<td>Aayush</td>
<td>20</td>
</tr>

</table>
```

Advanced table

```html
<table>

<thead>
<tr>
<th>Month</th>
<th>Income</th>
</tr>
</thead>

<tbody>
<tr>
<td>January</td>
<td>$100</td>
</tr>
</tbody>

</table>
```

Merge cells

```html
<td colspan="2">
<td rowspan="2">
```

---

##### 12. Forms

Forms collect user data.

Example

```html
<form>

<label>Name</label>
<input type="text">

<label>Email</label>
<input type="email">

<button type="submit">Submit</button>

</form>
```

Input types

| Type | Use |
|---|---|
| text | name |
| password | login |
| email | email |
| number | age |
| date | birthday |
| file | upload |

Checkbox

```html
<input type="checkbox"> Music
<input type="checkbox"> Sports
```

Radio

```html
<input type="radio" name="gender"> Male
<input type="radio" name="gender"> Female
```

Dropdown

```html
<select>
<option>India</option>
<option>USA</option>
</select>
```

Textarea

```html
<textarea rows="5"></textarea>
```

---

##### 13. Semantic HTML

Semantic tags describe page structure.

Examples

```
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Example

```html
<header>
<h1>My Website</h1>
</header>

<main>
<section>
<p>Content here</p>
</section>
</main>

<footer>
Copyright 2026
</footer>
```

Advantages

- Better SEO
- Better accessibility
- Clean structure

---

##### 14. HTML5 Features

Important HTML5 features

| Feature | Use |
|---|---|
| canvas | graphics |
| svg | vector graphics |
| audio | sound |
| video | video |
| localStorage | browser storage |
| geolocation | location |

Canvas example

```html
<canvas id="canvas"></canvas>
```

Local storage example

```javascript
localStorage.setItem("name","Aayush")
```

---

##### 15. Best Practices

Always follow these rules:

1. Use DOCTYPE

```
<!DOCTYPE html>
```

2. Use semantic tags

3. Write clean indentation

4. Use alt text for images

```html
<img src="dog.jpg" alt="Dog playing">
```

5. Use responsive design

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

6. Optimize performance

- lazy load images
- compress files
- minimize scripts

6. Follow accessibility rules


### uu
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 200px;
  gap: 20px;
}
.item {
  grid-column: span 2;
  grid-row: 1 / 3;
}
```