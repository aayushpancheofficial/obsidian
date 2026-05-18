# HTML & CSS Notes

## Table of Contents

- [[#Getting Started with HTML]]
- [[#Creating a Simple Song Lyrics Page]]
- [[#Creating Hyperlinks in HTML]]
- [[#Adding Images]]
- [[#Embedding Audio]]
- [[#Adding Video]]
- [[#Creating a Favicon]]
- [[#Text Formatting in HTML]]
- [[#Span and Div Tags]]
- [[#Creating Lists]]
	- [[#Unordered and Ordered Lists]]
	- [[#Description Lists]]
- [[#Creating Tables]]
- [[#Creating Buttons and Linking]]
- [[#HTML Forms]]
- [[#Semantic Tags Header Footer Main]]
- [[#CSS Introduction]]
- [[#CSS Colors]]
- [[#Fonts and Google Fonts]]
- [[#Borders Shadows Margins and Float]]
- [[#Display Property]]
- [[#Flexbox]]
- [[#CSS Transformations]]
- [[#CSS Animations]]

---

## Getting Started with HTML

- HTML stands for HyperText Markup Language
- Tags usually come in pairs: `<tag>content</tag>`
- `<!DOCTYPE html>` declares an HTML5 document
- `<html>` is the root element
- `<head>` holds metadata like `<title>`
- `<body>` holds visible content
- Heading tags range from `<h1>` to `<h6>`; `<p>` is for paragraphs
- Self-closing tags: `<br>`, `<hr>`, `<img>`
- Comments use `<!-- comment text -->`

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Website</title>
</head>
<body>
  <h1>This is an H1 heading</h1>
  <p>This is a paragraph of text.</p>
  <br>
  <hr>
  <!-- This is a comment -->
</body>
</html>
```

---

## Creating a Simple Song Lyrics Page

- Create a file called `lyrics.html`
- Use `<h1>` for the song title
- Use `<h3>` or `<h4>` for the artist name
- Use `<hr>` for a horizontal divider
- Use `<pre>` to preserve line-break formatting in lyrics

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Song Lyrics</title>
</head>
<body>
  <h1>Song Title Here</h1>
  <h4>Artist Name</h4>
  <hr>
  <pre>
Line 1 of lyrics

Line 2 of lyrics

Line 3 of lyrics
  </pre>
</body>
</html>
```

---

## Creating Hyperlinks in HTML

- Use the `<a>` anchor tag with the `href` attribute
- `target="_blank"` opens the link in a new tab
- `title` adds a tooltip on hover
- Use relative paths to link internal pages (e.g. `lyrics.html`)
- `mailto:` links open the user's email client

```html
<a href="https://www.google.com" target="_blank" title="Go to Google">Google</a>
<br>
<a href="lyrics.html">Song Lyrics</a>
<br>
<a href="mailto:test@fake.com">Email Me</a>
```

---

## Adding Images

- Use `<img>` with `src` and `alt` attributes
- Set `height` and/or `width` to resize the image
- Wrap `<img>` in `<a>` to make the image a clickable link
- Store images in an `images/` folder and use relative paths

```html
<img src="images/dog.png" alt="Picture of a dog" height="200">
<br>
<a href="https://en.wikipedia.org/wiki/Dog">
  <img src="images/dog.png" alt="Picture of a dog" height="200">
</a>
```

---

## Embedding Audio

- Use the `<audio>` tag with the `controls` attribute to show a player
- Nest `<source>` tags inside for multiple audio formats (mp3, wav)
- Fallback text displays if the browser doesn't support audio
- Store audio files in a `music/` folder

```html
<audio controls>
  <source src="music/song1.mp3" type="audio/mpeg">
  <source src="music/song1.wav" type="audio/wav">
  Your browser does not support the audio element.
</audio>
```

---

## Adding Video

- Use the `<video>` tag with attributes like `controls`, `autoplay`, `muted`, `loop`
- Nest `<source>` tags for multiple video formats (mp4, webm)
- Wrap in `<a>` to make the video a clickable link
- Fallback text shows if the browser doesn't support video

```html
<a href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda" target="_blank">
  <video width="500" controls autoplay muted loop>
    <source src="Zelda.mp4" type="video/mp4">
    <source src="Zelda.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
</a>
```

---

## Creating a Favicon

- Prepare a favicon image (at least 96×96 pixels recommended)
- Place the file inside the `images/` folder
- Link it inside the `<head>` using a `<link>` tag with `rel="icon"`

```html
<link rel="icon" type="image/png" href="images/favicon.png">
```

---

## Text Formatting in HTML

- `<b>` — bold
- `<i>` — italic
- `<u>` — underline
- `<del>` — strikethrough / deleted text
- `<big>` — larger text
- `<small>` — smaller text
- `<sub>` — subscript
- `<sup>` — superscript
- `<tt>` — monospaced font
- `<mark>` — highlighted text

```html
<p>This is <b>bold</b> text.</p>
<p>This is <i>italic</i> text.</p>
<p>This is <mark style="background-color: lightgreen;">highlighted</mark> text.</p>
```

---

## Span and Div Tags

- `<span>` is an **inline** container — wraps text within a line
- `<div>` is a **block-level** container — takes up its own full row
- Both are used to group elements for styling
- Apply styles directly with the `style` attribute

```html
<p>This is a <span style="background-color: tomato;">span container</span>.</p>
<div style="background-color: cyan;">This is a div container.</div>
```

---

## Creating Lists

### Unordered and Ordered Lists

- Unordered list: `<ul>` with `<li>` items (bullet points)
- Ordered list: `<ol>` with `<li>` items (numbered)
- Lists can be nested by placing a new `<ul>` inside an `<li>`

```html
<ul>
  <li>Milk</li>
  <li>Eggs
    <ul>
      <li>Creamer</li>
      <li>Sugar</li>
    </ul>
  </li>
  <li>Bread</li>
</ul>
```

### Description Lists

- `<dl>` wraps the description list
- `<dt>` is the term being defined
- `<dd>` is the definition or description

```html
<dl>
  <dt>Dragon</dt>
  <dd>A mythical monster resembling a giant reptile</dd>
  <dt>Vampire</dt>
  <dd>A creature that drinks blood</dd>
</dl>
```

---

## Creating Tables

- `<table>` wraps the whole table
- `<tr>` defines a row
- `<th>` is a header cell (bold by default)
- `<td>` is a data cell
- Use `border`, `style`, and `align` attributes for basic styling

```html
<table border="1" style="background-color: black;">
  <tr>
    <th style="width: 100px;">Sunday</th>
    <th style="width: 100px;">Monday</th>
  </tr>
  <tr>
    <td>Closed</td>
    <td>9 to 5</td>
  </tr>
</table>
```

---

## Creating Buttons and Linking

- Use the `<button>` tag to create a clickable button
- Style with inline CSS or an external stylesheet
- Wrap the button in `<a>` to make it navigate to a URL

```html
<a href="https://www.google.com">
  <button style="font-size: 25px; background-color: gray; color: lightblue; border-radius: 25px;">
    Click me
  </button>
</a>
```

---

## HTML Forms

- `<form>` uses `action` (destination URL) and `method` (get/post) attributes
- `<label>` paired with `for` attribute matches the input's `id`
- Common input types: `text`, `password`, `email`, `tel`, `number`, `radio`, `checkbox`, `file`
- Validation attributes: `required`, `minlength`, `maxlength`, `pattern`
- `<textarea>` allows multi-line text input
- `type="submit"` and `type="reset"` create form action buttons

```html
<form action="#" method="post">
  <label for="username">Username</label>
  <input type="text" id="username" name="username" placeholder="SpongeBob" required minlength="6" maxlength="15">

  <label for="password">Password</label>
  <input type="password" id="password" name="password" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="example@gmail.com" required>

  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>
```

---

## Semantic Tags Header Footer Main

- `<header>` holds the top section (logo, nav, title)
- `<nav>` holds navigation links
- `<main>` wraps the primary page content
- `<footer>` holds the bottom section (copyright, contact info)
- Semantic tags improve readability and accessibility

```html
<header style="background-color: mediumpurple; text-align: center; padding: 10px;">
  <h1>Welcome to My Website</h1>
  <nav>
    <a href="#">Home</a> |
    <a href="#">About Us</a> |
    <a href="#">Contact Us</a>
  </nav>
</header>

<main>
  <p>Main content goes here.</p>
</main>

<footer style="background-color: mediumpurple; text-align: center; padding: 10px;">
  &copy; 2024 All rights reserved.
</footer>
```

---

## CSS Introduction

- **Inline** CSS: use the `style` attribute directly on an element
- **Internal** CSS: use a `<style>` block inside `<head>`
- **External** CSS: link a separate `.css` file using `<link>`
- Select elements by tag name, `#id`, or `.class`

```css
body { background-color: black; color: white; }
#p1 { color: red; }
.odd { color: red; }
.even { color: blue; }
```

```html
<link rel="stylesheet" href="style.css">
```

---

## CSS Colors

- Named colors: `tomato`, `slategray`, `lightblue`
- RGB: `rgb(255, 0, 0)`
- Hex: `#FF0000`
- HSL: `hsl(0, 100%, 50%)`

---

## Fonts and Google Fonts

- Link a Google Fonts stylesheet in `<head>` to import web fonts
- Apply the font using `font-family` in CSS
- Use `@font-face` to load locally stored font files

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Open+Sans&display=swap" rel="stylesheet">
```

```css
h1 { font-family: 'Roboto', sans-serif; }
p  { font-family: 'Open Sans', sans-serif; }
```

---

## Borders Shadows Margins and Float

- `border` sets style, width, and color; `border-radius` rounds corners
- `text-shadow` adds shadow to text; `box-shadow` adds shadow to elements
- `margin` controls spacing outside an element
- `float` moves an element left or right so content wraps around it

```css
h1 {
  border: 3px solid purple;
  border-radius: 10px;
  text-shadow: 3px 5px 5px red;
}

#box1 { box-shadow: 3px 3px 5px #888888; }

.box { margin: 50px; }

img#img1 {
  float: left;
  margin-right: 10px;
}
```

---

## Display Property

- Block elements take up the full width of the page
- Inline elements take up only as much space as their content
- Override with `display: block`, `inline`, `inline-block`, or `none`
- `none` hides the element completely

---

## Flexbox

- Set `display: flex` on a container to enable flexbox layout
- `flex-wrap: wrap` allows items to wrap to the next line
- `justify-content` controls horizontal alignment (e.g. `space-between`)
- `align-items` controls vertical alignment (e.g. `center`)

```css
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.box {
  width: 150px;
  height: 150px;
  border-radius: 15px;
  text-align: center;
}
```

---

## CSS Transformations

- `translateX` / `translateY` — moves an element horizontally or vertically
- `rotateZ` — rotates an element around the Z axis
- `scale` — shrinks or enlarges an element
- Multiple transforms can be chained in one `transform` property

```css
#box1 {
  transform: translateX(50px) rotateZ(45deg) scale(0.5);
}
```

---

## CSS Animations

- Define animation steps with `@keyframes` using `from` and `to` (or percentage stops)
- Attach the animation using `animation-name` and `animation-duration`
- Additional properties: `animation-delay`, `animation-iteration-count`, `animation-timing-function`

```css
@keyframes slideLeft {
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
}

#box {
  animation-name: slideLeft;
  animation-duration: 2s;
}
```


# syllabus
Here’s a comprehensive **HTML syllabus** covering all essential topics, from beginner to advanced. You can use this as a roadmap to master HTML.

---

## **HTML Complete Syllabus**

### **Module 1: Introduction to HTML**
- What is HTML?
- History & versions (HTML1–HTML5)
- How HTML works with CSS & JavaScript
- Basic structure of an HTML document
- Setting up a code editor (VS Code, Sublime, etc.)
- Creating and saving an `.html` file
- Viewing HTML in a browser

### **Module 2: HTML Document Structure**
- `<!DOCTYPE html>` declaration
- `<html>` (root element)
- `<head>` (metadata, title, links)
- `<body>` (visible content)
- Understanding nesting and hierarchy

### **Module 3: Basic HTML Elements**
- Headings `<h1>` to `<h6>`
- Paragraphs `<p>`
- Line breaks `<br>` and horizontal rules `<hr>`
- Comments `<!-- -->`
- Text formatting:
  - Bold `<b>`, `<strong>`
  - Italic `<i>`, `<em>`
  - Underline `<u>`
  - Small `<small>`, Mark `<mark>`
  - Deleted `<del>`, Inserted `<ins>`
  - Subscript `<sub>`, Superscript `<sup>`

### **Module 4: Links and Navigation**
- Anchor tag `<a>`
- Absolute vs relative URLs
- Target attributes (`_blank`, `_self`, etc.)
- Internal page links (id-based)
- Download links, email links, phone links
- Linking to specific parts of a page

### **Module 5: Images and Multimedia**
- Image tag `<img>` (src, alt, width, height)
- Picture element `<picture>` and responsive images
- Figure and figcaption `<figure>`, `<figcaption>`
- Video `<video>` (controls, autoplay, loop, poster)
- Audio `<audio>`
- Embedding YouTube videos (`<iframe>`)
- Embedding maps, PDFs, other content

### **Module 6: Lists**
- Unordered lists `<ul>` (`<li>`)
- Ordered lists `<ol>` (type, start, reversed)
- Definition lists `<dl>`, `<dt>`, `<dd>`
- Nested lists

### **Module 7: Tables**
- Table structure: `<table>`, `<tr>`, `<td>`, `<th>`
- Table headers, footers, body: `<thead>`, `<tbody>`, `<tfoot>`
- Colspan & rowspan
- Table styling basics (border, padding, background)
- Caption `<caption>`

### **Module 8: Forms (Important)**
- `<form>` (action, method: GET/POST)
- Input types:
  - text, password, email, number, tel, url
  - radio, checkbox
  - submit, reset, button
  - file, hidden, range, color, date, time, datetime-local
  - search, image
- `<label>`, `<fieldset>`, `<legend>`
- `<select>` & `<option>` (dropdown)
- `<textarea>`
- `<datalist>` (autocomplete)
- `<output>`
- Form validation (required, pattern, min, max, etc.)

### **Module 9: Semantic HTML (Important)**
- `<header>`, `<footer>`
- `<nav>`
- `<main>`
- `<article>`, `<section>`
- `<aside>`
- `<figure>`, `<figcaption>`
- `<mark>`, `<time>`, `<details>`, `<summary>`
- Why semantics matter (SEO, accessibility)

### **Module 10: HTML5 New Features**
- New structural elements (already in semantic section)
- Canvas `<canvas>` (basics)
- SVG support (inline SVG)
- Drag & drop API
- Local storage & session storage (brief intro)
- Geolocation API (brief intro)
- Web Workers (brief)

### **Module 11: Accessibility (A11y)**
- ARIA roles and attributes
- Alt text best practices
- Semantic HTML for screen readers
- Skip links
- Focus management
- Color contrast considerations

### **Module 12: HTML & CSS Integration**
- Inline styles (`style` attribute)
- Internal CSS (`<style>` tag)
- External CSS (`<link>`)
- CSS classes and IDs in HTML
- Basic responsive design (viewport meta tag)
- Using `class` and `id` correctly

### **Module 13: HTML & JavaScript**
- `<script>` tag (internal & external)
- Event handlers (onclick, onload, etc.)
- Accessing/modifying HTML with JS (DOM basics)
- Forms and JS validation basics

### **Module 14: Meta Tags & SEO Basics**
- Character encoding (`<meta charset="UTF-8">`)
- Viewport settings
- Description, keywords, author
- Open Graph (OG) tags for social media
- Twitter Cards
- Canonical tag
- Robots meta tag

### **Module 15: Best Practices**
- Indentation and readability
- Lowercase tag names, quoted attributes
- Close all tags properly
- Use semantic tags over generic `<div>` when possible
- Keep accessibility in mind
- Optimize images and media
- Mobile-first approach

### **Module 16: Advanced / Miscellaneous**
- Iframes (`<iframe>`): embedding pages, YouTube, Maps
- Embed vs. object
- Base tag `<base>`
- `data-*` custom attributes
- Contenteditable attribute
- Spellcheck attribute
- Server-sent events (brief)
- Microdata & schema.org (basic)

---

## **Sample Projects to Practice**
1. Personal portfolio page
2. Restaurant menu (using lists & tables)
3. Contact form with validation
4. News article layout (semantic HTML)
5. YouTube video gallery (iframes)
6. Product catalog (images, descriptions, prices)
7. Multi-page website (navigation with relative links)
8. Event invitation page (with date/time, RSVP form)

---

## **Suggested Learning Order**
1. Start with **Modules 1–3** (basics)
2. Learn **links, images, lists** (Modules 4–6)
3. Move to **tables & forms** (Modules 7–8) – forms are very important
4. Understand **semantic HTML** (Module 9)
5. Learn **HTML5 features & accessibility** (Modules 10–11)
6. Then see how HTML works with **CSS & JS** (Modules 12–13)
7. Finally, cover **meta tags, best practices, advanced topics** (Modules 14–16)

---

Would you like me to also provide a **free checklist PDF** version or create a **printable HTML syllabus** for your study?