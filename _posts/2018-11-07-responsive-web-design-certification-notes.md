---
layout: post
title: freeCodeCamp - Responsive Web Design Certification Notes
categories: [frontend]
tags: [html,css]
---

# freeCodeCamp - Responsive Web Design Certification Notes

## Introduction to HTML and HTML5

### HTML5 comes with new elements that help organize content
* `header`
* `footer`
* `nav`
* `article`
	* Used for standalone, independent content
	* Example: blog posts
* `section`
	* Used for content that is thematically related 
	* Example: book chapters

### Here's the basics of creating an HTML form

1. `<form action="action"></form>` creates a form
2. Inside the form element, `<input />` creates an input box
	* Add attribute `<input type="type" />` to tell the browser what kind of input it is
		* Types include: radio, checkbox, etc.
	* Add attribute `<input placeholder="text" />` to add instructions inside input
	* Add attribute `<input required />` to make input required
3. Inside the form element, `<button type="submit">Text</button>`, when clicked, performs the form action
4. To create input type `radio` or `checkbox`, do the following:
	* Create `<label for="option1"></label>`
	* Inside label element, add `<input>`
		* As a convention, add `id="option1"` so you know input it's related to label
		* Add `name="radioGroupName"` so every radio button is connected (selecting one de-selects the other)
	* Inside label element, add `optionName` so you know what the radio button is for
	* Repeat for each radio button

## Basic CSS

### How to backup font in case primary font fails

When setting `font-family` property, you can provide a backup font by doing the following:
`font-family: primaryFont, backupFont;`

### CSS inheritance and priority

* **Inheritance:** When you style an element, by default every one of its child elements inherits those styles
* **Priority:** However, some selectors like class selectors or id selectors override styles because they're higher up in priority
* This is the order of priority when the browser reads CSS:
	1. !important
	2. Inline styles (HTML style attribute)
	3. ID selectors
	4. Classes selectors (and pseudo-selectors and attribute selectors)
	5. Element selectors
	6. Inheritance

*Note: If you ever repeat the same selector level, the one that appears lower in the CSS file will be applied*

### Here's some special selectors

* Attribute selectors `[attribute="value"]`

### Types of CSS units

* Absolute units = tied to physical units of  length
	* px = pixels
* Relative units = tied to another length value
	* em = based on element's font

### All the ways you can state colours

* Hex code `#FFA500`
	* First 2 numbers represent red, second 2 green, last 2 blue
	* 0 means complete absence of colour; F is maximum possible brightness
	* Example above: all red mixed with some green
* RGB values `rgb(255, 0, 100)`
	* First is red, second is green, third is blue
	* 0 is complete absence of colour; 255 is max brightness
* Hue, saturation, lightness `hsl(360, 50%, 100%);`
	* Hue is a value from 0 to 360 and represent the colour wheel
	* Saturation is the amount of gray in the colour from 0% to 100%
	* Lightness is the amount of black and white in the colour from 0% to 100%
* Background gradients `background: linear-gradient(gradientDirection, color1, color2, ...);`
	* With a direction between `0deg` and `360deg`, you can create a gradient
	* *Bonus: `repeating-linear-gradient()` repeats the colours

### Using CSS variables to bulk change properties

1. Create a CSS variable in a parent element using the format `--variable: property;`
2. To reference the variable, use the function `var(--variable)` to apply `property`
3. `var(--variable, fallbackValue)` allows you to include a `fallbackValue`  in case `--variable` doesn't work due to compatibility issues

*Pro tip: use `:root` selector to apply CSS variable to the entire HTML document and all its child elements; this is the broadest selector*

### How to provide fallbacks in case CSS doesn't render

* Before your intended `style: property;`, include a `fallbackStyle: fallbackProperty;` right above it
* If the browser understands the intended style, it will override the fallback; otherwise, it will skip over it and use the fallback instead

## Applied Visual Design

### Some useful style properties that add visual flair

* `box-shadow: offset-x offset-y blur-radius spread-radius color;`
* `line-height: value;`

### Understanding CSS positioning properties

* CSS follows a **box model**, meaning all elements have an invisible box around them
* By default, the next element/box always appears below the previous element/box
* Here's some properties that allow you to play with the positioning of the element:
	* `position: relative;`
		* Combined with `top` or `bottom` or `left` or `right`, you can push an element away from its original position (without affecting the normal flow)
	* `position: absolute;`
		* Cocks the element in place relative to its closest positioned parent container, i.e., container positioned as anything other than `static` (this takes it out of the normal flow, so other elements ignore it)
	* `position: fixed;`
		* Works just like `absolute` but is positioned relative to the viewport, i.e., doesn't move when the user scrolls
	* `float: left;` and `float: right;`
		* Pushes the element to the left or right of the parent container (and removes it from the normal flow)
	* `z-index: integer;`
		* When two elements overlap, the one with the higher z-index wins (by default, it's always the later element in the HTML file)
		* `margin: auto;` centers elements

### Functions for transforming elements

* `transform: scale(integer);`
	* Increases size of element by a multiplier
* `transform: skewX(Xdeg);` and `transform: skewY(Xdeg);`
	* Distorts element along its X- or Y-axis

### How to create CSS animations

1. Add `animation-name: animationName;` and `animation-duration: Xs;` to your animated element
2. Create `@keyframes animationName {0% {action} 33% {action} 100% {action}}` to tell browser how to animate the elements from start state to end state
3. Cool things you can do:
	4. **Adding persistence:** add `animation-fill-mode: forwards;` to your animated element
	5. **Adding a loop:** add `animation-iteration-count` to create a loop, ranging from `1` to `infinite`
	6. **Adding variable speed:** add `animation-timing-function` with `ease`, `linear`, `ease-in`, `ease-out`, or `cubic-bezier()` as properties
	7. **Creating movement:** use `top` or `left` or `right` or `bottom` properties in `@keyframes`

## Applied Accessibility

### Best practices for accessibility

* Add `alt="text"` attribute to `img` or `audio` HTML elements with content-rich images and audio
* The use of different `h` HTML elements should be semantically meaningful, i.e., denote content breakdown
* Use these new HTML elements to allow screen readers and browsers to know what content is what
	* `header`, `footer`, `nav`, `main`
	* `article`
		* Used for standalone, independent content
		* Example: blog posts
	* `section`
		* Used for content that is thematically related
		* Example: book chapters
* `<figure><img><figcaption>caption</figcaption></figure>` is an HTML structure to semantically grouping images with captions
* Add `<label for="inputId">input title</label>` around your form input title, so the browser knows it's related to the `<input id="inputId" type="text" />` element
* `<fieldset>` can be wrapped around multiple `<input type="radio" />` elements to semantically connect radio buttons
	* `<legend>description</legend>` inside `<fieldset>` adds even more semantic content about the choices
* `type="date"` attribute in `<input>` element adds ability to choose a date from a calendar
* `<time datetime="2010-10-30">today</time>` gives screen readers an objective measure of time to add more meaning
* It's best practice to use CSS to position alternative information out of a normal user's viewport while keeping it accessible for screen readers
* WCAG recommends a 4.5:1 contrast ratio for text to background colour (to maximize readability)
* When linking text with `<a>` elements, make the wrapped text semantically meaningful, so screen readers know what the link is about

### How to add shortcut keys to your webpage

* Add `accesskey="key"` to an element to create a shortcut key for quick access
* Add `tabindex="integer"` to an element to make it focusable when a user tabs through a page
	* Tab starts with value `1` and then larger numbers and then goes to value `0` and default tab-able elements

## Responsive Web Design Principles

### How to make your page responsive
* **Add viewport conditionality:** Use `@media (breakpoint: units) { CSS rules }` to tell the browser to only apply the following CSS rules *if* the viewport is within the breakpoint
* **Make images responsive:** `max-width: percentage;` property scales the image to fit its container until it reaches full size (and then stops)
* **Make images retina-ready:** Make images half their original size using `height` and `width` properties
* **Responsive viewport units:**
	* `10vw`, `10vh`
		* 10% of viewport's width, 10% of viewport's width
	* `10vmin`, `10vmax`
		* 10% of viewport's smaller dimension (height vs. width), 10% of viewport's larger dimension (height vs. width)

## CSS Flexbox

### Essential properties to set up flexbox containers

1. Add `display: flex;` to a parent container to be able to manipulate its child elements
2. Add `flex-direction: direction;` to a parent container to decide the flow of its child elements
	* `row`, `column`, `row-reverse`, or `column-reverse`
3. Add `justify-content: type;` to a parent container to align child elements along the parent container's main axis (horizontal when `row` and vertical when `column`)
	* `center` means center of container
	* `flex-start` and `flex-end` means start of end of container
	* `space-between` means first and last child element are at edges of container
	* `space-around` means equal spatial distribution
4. Add `align-items: type;`to a parent container to align child elements along the parent container's cross axis (vertical when `row` and horizontal when `column`)
	* `center`
	* `flex-start` and `flex-end`
	* `stretch` means fill parent container along cross axis
	* `baseline` means size child elements to their text
5. Add `flex-wrap: wrap;` to tell child elements to flow over to the next row (or column) when not all children can fit onto single row (or column)
	* `wrap-reverse` goes the opposite direction

### Properties for flexbox child elements

* `flex-shrink: integer;` shrinks container to match width of parent container (amount shrunk depends on integer value of other child elements)
* `flex-grow: integer;` is the opposite of `flex-shrink`
* `flex-basis: sizeProperty;` like `px` sets the initial size of child element before `flex-shrink` and `flex-grow` do their work
* `order: integer;` orders child elements in parent container by integer value (smaller numbers first)
* `align-self: type;` aligns the child element by itself along the cross axis like `align-items`

## CSS Grid

### Essential properties to set up grid containers

1. Add `display: grid;` to create grid container
2. Use these properties to add rows and columns:
	* Add `grid-template-rows: sizeProp sizeProp;` to add rows (each `sizeProp` creates a row and defines its height
	* Add `grid-template-columns: sizeProp sizeProp;` to add columns (each `sizeProp` creates a column and defines its width)
		* `auto` sets to width/height of content
		* `%` sets width/height to percentage of grid container
		* `fr` sets width/height to fraction of what's left (assuming other columns/rows use `fr`)
3. Add these functions inside `grid-template-columns` or `grid-template-rows` for more tricks:
	* *Function: Use `minmax(min, max)` for `sizeProp` to set a range of acceptable sizes for column or row*
	* *Function: Use `repeat(amount, sizeProp)` to repeat size property instead of manually inputting*
		* When `amount` is set to `auto-fill`, as you stretch container, grid items are responsively added if there's enough space; otherwise, they're pushed to the next column/row; when the container stretches beyond grid items, it keeps adding empty columns/rows
		*  When `amount` is set to `auto-fit`, it's the same thing as `auto-fill`, but it doesn't add empty columns/rows when container stretches beyond grid items
4. Use these properties to add row gaps and column gaps between grid items:
	* `grid-column-gap: sizeProp;`
	* `grid-row-gap: sizeProp;`
5. `justify-items: type;` aligns content of each grid item horizontally; `align-items: type;` aligns vertically
	* `stretch` stretches content to width of grid item
	* `start`, `center`, `end` are self-explanatory
6. You can tell a child element where to go in the grid by doing the following:
	* Add `grid-template-areas: "header header" "content advert" "footer footer";` to parent container to define its areas—row by row
	* Add `grid-area: areaName;` to child element to tell it where to go
	* You can use `grid-area: horizontalStart/verticalStart/hStop/vStop;` when name isn't created
7. Add `display: grid;` in a grid item to create a grid within a grid

### Properties for grid items (children)

* `grid-column: start / stop;` and `grid-row: start / stop;` allow child elements to span more than one grid item
	* `1` is the top left corner of the grid container
	* Higher numbers are the next edges between two grid items (for both columns and rows)
	* `1 / 4;` means make child element span the first 3 grid items (columns or rows)
* `justify-self: type;` aligns grid item's content horizontally, and `align-self: type;` aligns vertically
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcwMDc1NjU1MCwtMTY2OTMzOTc1MCwxNz
k0OTI1MDU4LDgwMTkzMjU3NCwxMTI5OTcyMzQ2LDEyMjAzMjU2
MzRdfQ==
-->
