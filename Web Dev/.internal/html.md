# 🌐 HTML (HyperText Markup Language)

> HTML is the standard markup language used to create the structure of web pages.

---

# Table of Contents

1. Introduction
2. HTML Boilerplate
3. HTML Elements
4. Attributes
5. Headings
6. Paragraph
7. Text Formatting
8. Comments
9. Links
10. Images
11. Lists
12. Tables
13. Forms
14. Input Types
15. Semantic HTML
16. Audio & Video
17. Iframe
18. Meta Tags
19. Favicon
20. HTML Entities
21. Accessibility
22. SEO Basics
23. Best Practices
24. Interview Questions

---

# 1. Introduction

## What is HTML?

HTML stands for **HyperText Markup Language**.

It is used to create the structure of websites.

HTML is **not** a programming language.

---

## Features

- Easy to learn
- Platform independent
- Works with CSS & JavaScript
- Supported by all browsers
- Used to create webpage structure

---

# 2. HTML Boilerplate

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>

<body>

</body>

</html>
```

### Explanation

- `<!DOCTYPE html>` → HTML5 document
- `<html>` → Root element
- `<head>` → Metadata
- `<body>` → Visible content

---

# 3. HTML Elements

```html
<p>Hello World</p>
```

- Opening Tag
- Content
- Closing Tag

---

# 4. Attributes

```html
<a href="https://google.com">Google</a>
```

Common attributes

- href
- src
- alt
- id
- class
- title
- style

---

# 5. Headings

```html
<h1>Main Heading</h1>
<h2>Heading</h2>
<h3>Heading</h3>
<h4>Heading</h4>
<h5>Heading</h5>
<h6>Heading</h6>
```

Use only one `<h1>` per page.

---

# 6. Paragraph

```html
<p>This is paragraph.</p>
```

---

# 7. Text Formatting

```html
<b>Bold</b>

<strong>Important</strong>

<i>Italic</i>

<em>Emphasis</em>

<u>Underline</u>

<mark>Highlight</mark>

<small>Small</small>

<del>Deleted</del>

<ins>Inserted</ins>

<sub>Subscript</sub>

<sup>Superscript</sup>
```

---

# 8. Comments

```html
<!-- This is comment -->
```

---

# 9. Links

```html
<a href="https://google.com">Google</a>
```

Open in new tab

```html
<a href="https://google.com" target="_blank">
Google
</a>
```

---

# 10. Images

```html
<img src="image.jpg" alt="Nature">
```

Useful attributes

- src
- alt
- width
- height

---

# 11. Lists

## Ordered List

```html
<ol>
<li>Apple</li>
<li>Mango</li>
</ol>
```

---

## Unordered List

```html
<ul>
<li>Apple</li>
<li>Mango</li>
</ul>
```

---

## Description List

```html
<dl>
<dt>HTML</dt>
<dd>Markup Language</dd>
</dl>
```

---

# 12. Tables

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

Important Tags

- table
- tr
- td
- th
- thead
- tbody
- tfoot

---

# 13. Forms

```html
<form>

<input>

<button>

</form>
```

---

# 14. Input Types

```html
text

password

email

number

date

radio

checkbox

file

color

range

submit

reset

search

url

tel
```

Example

```html
<input type="email">
```

---

# 15. Semantic HTML

Examples

```html
<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>
```

Benefits

- SEO
- Accessibility
- Better code

---

# 16. Audio

```html
<audio controls>

<source src="music.mp3">

</audio>
```

---

# Video

```html
<video controls>

<source src="video.mp4">

</video>
```

---

# 17. Iframe

```html
<iframe src="https://example.com"></iframe>
```

---

# 18. Meta Tags

```html
<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<meta name="description"
content="Website Description">
```

---

# 19. Favicon

```html
<link rel="icon" href="favicon.png">
```

---

# 20. HTML Entities

```
&nbsp;

&lt;

&gt;

&amp;

&copy;

&reg;
```

---

# 21. Accessibility

- Use semantic tags
- Add alt attribute
- Use labels
- Proper heading order

---

# 22. SEO Basics

- Title tag
- Meta description
- Semantic HTML
- Heading hierarchy
- Image alt text

---

# 23. Best Practices

- Use semantic HTML
- Proper indentation
- Use lowercase tags
- Meaningful filenames
- One H1 per page
- Validate HTML
- Add alt to images

---

# 24. Interview Questions

### What is HTML?

HyperText Markup Language.

---

### Difference between HTML and HTML5?

HTML5 introduced

- Audio
- Video
- Semantic Tags
- Canvas
- Local Storage

---

### Inline vs Block Elements

Block

- div
- p
- h1

Inline

- span
- a
- img

---

### id vs class

id

- Unique

class

- Multiple elements

---

### What are Semantic Tags?

Tags that describe content meaning.

Example

- header
- main
- footer
- article
- nav

---

### Empty Tags

- br
- hr
- img
- input
- meta
- link

---

# Mini Projects

- Resume Website
- Portfolio
- Restaurant Page
- Product Card
- Registration Form
- Login Form
- Blog Page
- Landing Page

---

# Cheat Sheet

- Structure → HTML
- Style → CSS
- Logic → JavaScript

HTML = Skeleton

CSS = Design

JavaScript = Brain

---

# Resources

- MDN Web Docs
- W3Schools
- freeCodeCamp
- HTML Living Standard