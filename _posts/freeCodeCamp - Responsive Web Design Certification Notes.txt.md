---


---

<h1 id="freecodecamp---responsive-web-design-certification-notes">freeCodeCamp - Responsive Web Design Certification Notes</h1>
<h2 id="introduction-to-html-and-html5">Introduction to HTML and HTML5</h2>
<h3 id="html5-comes-with-new-elements-that-help-organize-content">HTML5 comes with new elements that help organize content</h3>
<ul>
<li><code>header</code></li>
<li><code>footer</code></li>
<li><code>nav</code></li>
<li><code>article</code>
<ul>
<li>Used for standalone, independent content</li>
<li>Example: blog posts</li>
</ul>
</li>
<li><code>section</code>
<ul>
<li>Used for content that is thematically related</li>
<li>Example: book chapters</li>
</ul>
</li>
</ul>
<h3 id="heres-the-basics-of-creating-an-html-form">Here’s the basics of creating an HTML form</h3>
<ol>
<li><code>&lt;form action="action"&gt;&lt;/form&gt;</code> creates a form</li>
<li>Inside the form element, <code>&lt;input /&gt;</code> creates an input box
<ul>
<li>Add attribute <code>&lt;input type="type" /&gt;</code> to tell the browser what kind of input it is
<ul>
<li>Types include: radio, checkbox, etc.</li>
</ul>
</li>
<li>Add attribute <code>&lt;input placeholder="text" /&gt;</code> to add instructions inside input</li>
<li>Add attribute <code>&lt;input required /&gt;</code> to make input required</li>
</ul>
</li>
<li>Inside the form element, <code>&lt;button type="submit"&gt;Text&lt;/button&gt;</code>, when clicked, performs the form action</li>
<li>To create input type <code>radio</code> or <code>checkbox</code>, do the following:
<ul>
<li>Create <code>&lt;label for="option1"&gt;&lt;/label&gt;</code></li>
<li>Inside label element, add <code>&lt;input&gt;</code>
<ul>
<li>As a convention, add <code>id="option1"</code> so you know input it’s related to label</li>
<li>Add <code>name="radioGroupName"</code> so every radio button is connected (selecting one de-selects the other)</li>
</ul>
</li>
<li>Inside label element, add <code>optionName</code> so you know what the radio button is for</li>
<li>Repeat for each radio button</li>
</ul>
</li>
</ol>
<h2 id="basic-css">Basic CSS</h2>
<h3 id="how-to-backup-font-in-case-primary-font-fails">How to backup font in case primary font fails</h3>
<p>When setting <code>font-family</code> property, you can provide a backup font by doing the following:<br>
<code>font-family: primaryFont, backupFont;</code></p>
<h3 id="css-inheritance-and-priority">CSS inheritance and priority</h3>
<ul>
<li><strong>Inheritance:</strong> When you style an element, by default every one of its child elements inherits those styles</li>
<li><strong>Priority:</strong> However, some selectors like class selectors or id selectors override styles because they’re higher up in priority</li>
<li>This is the order of priority when the browser reads CSS:
<ol>
<li>!important</li>
<li>Inline styles (HTML style attribute)</li>
<li>ID selectors</li>
<li>Classes selectors (and pseudo-selectors and attribute selectors)</li>
<li>Element selectors</li>
<li>Inheritance</li>
</ol>
</li>
</ul>
<p><em>Note: If you ever repeat the same selector level, the one that appears lower in the CSS file will be applied</em></p>
<h3 id="heres-some-special-selectors">Here’s some special selectors</h3>
<ul>
<li>Attribute selectors <code>[attribute="value"]</code></li>
</ul>
<h3 id="types-of-css-units">Types of CSS units</h3>
<ul>
<li>Absolute units = tied to physical units of  length
<ul>
<li>px = pixels</li>
</ul>
</li>
<li>Relative units = tied to another length value
<ul>
<li>em = based on element’s font</li>
</ul>
</li>
</ul>
<h3 id="all-the-ways-you-can-state-colours">All the ways you can state colours</h3>
<ul>
<li>Hex code <code>#FFA500</code>
<ul>
<li>First 2 numbers represent red, second 2 green, last 2 blue</li>
<li>0 means complete absence of colour; F is maximum possible brightness</li>
<li>Example above: all red mixed with some green</li>
</ul>
</li>
<li>RGB values <code>rgb(255, 0, 100)</code>
<ul>
<li>First is red, second is green, third is blue</li>
<li>0 is complete absence of colour; 255 is max brightness</li>
</ul>
</li>
<li>Hue, saturation, lightness <code>hsl(360, 50%, 100%);</code>
<ul>
<li>Hue is a value from 0 to 360 and represent the colour wheel</li>
<li>Saturation is the amount of gray in the colour from 0% to 100%</li>
<li>Lightness is the amount of black and white in the colour from 0% to 100%</li>
</ul>
</li>
<li>Background gradients <code>background: linear-gradient(gradientDirection, color1, color2, ...);</code>
<ul>
<li>With a direction between <code>0deg</code> and <code>360deg</code>, you can create a gradient</li>
<li>*Bonus: <code>repeating-linear-gradient()</code> repeats the colours</li>
</ul>
</li>
</ul>
<h3 id="using-css-variables-to-bulk-change-properties">Using CSS variables to bulk change properties</h3>
<ol>
<li>Create a CSS variable in a parent element using the format <code>--variable: property;</code></li>
<li>To reference the variable, use the function <code>var(--variable)</code> to apply <code>property</code></li>
<li><code>var(--variable, fallbackValue)</code> allows you to include a <code>fallbackValue</code>  in case <code>--variable</code> doesn’t work due to compatibility issues</li>
</ol>
<p><em>Pro tip: use <code>:root</code> selector to apply CSS variable to the entire HTML document and all its child elements; this is the broadest selector</em></p>
<h3 id="how-to-provide-fallbacks-in-case-css-doesnt-render">How to provide fallbacks in case CSS doesn’t render</h3>
<ul>
<li>Before your intended <code>style: property;</code>, include a <code>fallbackStyle: fallbackProperty;</code> right above it</li>
<li>If the browser understands the intended style, it will override the fallback; otherwise, it will skip over it and use the fallback instead</li>
</ul>
<h2 id="applied-visual-design">Applied Visual Design</h2>
<h3 id="some-useful-style-properties-that-add-visual-flair">Some useful style properties that add visual flair</h3>
<ul>
<li><code>box-shadow: offset-x offset-y blur-radius spread-radius color;</code></li>
<li><code>line-height: value;</code></li>
</ul>
<h3 id="understanding-css-positioning-properties">Understanding CSS positioning properties</h3>
<ul>
<li>CSS follows a <strong>box model</strong>, meaning all elements have an invisible box around them</li>
<li>By default, the next element/box always appears below the previous element/box</li>
<li>Here’s some properties that allow you to play with the positioning of the element:
<ul>
<li><code>position: relative;</code>
<ul>
<li>Combined with <code>top</code> or <code>bottom</code> or <code>left</code> or <code>right</code>, you can push an element away from its original position (without affecting the normal flow)</li>
</ul>
</li>
<li><code>position: absolute;</code>
<ul>
<li>Cocks the element in place relative to its closest positioned parent container, i.e., container positioned as anything other than <code>static</code> (this takes it out of the normal flow, so other elements ignore it)</li>
</ul>
</li>
<li><code>position: fixed;</code>
<ul>
<li>Works just like <code>absolute</code> but is positioned relative to the viewport, i.e., doesn’t move when the user scrolls</li>
</ul>
</li>
<li><code>float: left;</code> and <code>float: right;</code>
<ul>
<li>Pushes the element to the left or right of the parent container (and removes it from the normal flow)</li>
</ul>
</li>
<li><code>z-index: integer;</code>
<ul>
<li>When two elements overlap, the one with the higher z-index wins (by default, it’s always the later element in the HTML file)</li>
<li><code>margin: auto;</code> centers elements</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="functions-for-transforming-elements">Functions for transforming elements</h3>
<ul>
<li><code>transform: scale(integer);</code>
<ul>
<li>Increases size of element by a multiplier</li>
</ul>
</li>
<li><code>transform: skewX(Xdeg);</code> and <code>transform: skewY(Xdeg);</code>
<ul>
<li>Distorts element along its X- or Y-axis</li>
</ul>
</li>
</ul>
<h3 id="how-to-create-css-animations">How to create CSS animations</h3>
<ol>
<li>Add <code>animation-name: animationName;</code> and <code>animation-duration: Xs;</code> to your animated element</li>
<li>Create <code>@keyframes animationName {0% {action} 33% {action} 100% {action}}</code> to tell browser how to animate the elements from start state to end state</li>
<li>Cool things you can do:
<ol start="4">
<li><strong>Adding persistence:</strong> add <code>animation-fill-mode: forwards;</code> to your animated element</li>
<li><strong>Adding a loop:</strong> add <code>animation-iteration-count</code> to create a loop, ranging from <code>1</code> to <code>infinite</code></li>
<li><strong>Adding variable speed:</strong> add <code>animation-timing-function</code> with <code>ease</code>, <code>linear</code>, <code>ease-in</code>, <code>ease-out</code>, or <code>cubic-bezier()</code> as properties</li>
<li><strong>Creating movement:</strong> use <code>top</code> or <code>left</code> or <code>right</code> or <code>bottom</code> properties in <code>@keyframes</code></li>
</ol>
</li>
</ol>
<h2 id="applied-accessibility">Applied Accessibility</h2>
<h3 id="best-practices-for-accessibility">Best practices for accessibility</h3>
<ul>
<li>Add <code>alt="text"</code> attribute to <code>img</code> or <code>audio</code> HTML elements with content-rich images and audio</li>
<li>The use of different <code>h</code> HTML elements should be semantically meaningful, i.e., denote content breakdown</li>
<li>Use these new HTML elements to allow screen readers and browsers to know what content is what
<ul>
<li><code>header</code>, <code>footer</code>, <code>nav</code>, <code>main</code></li>
<li><code>article</code>
<ul>
<li>Used for standalone, independent content</li>
<li>Example: blog posts</li>
</ul>
</li>
<li><code>section</code>
<ul>
<li>Used for content that is thematically related</li>
<li>Example: book chapters</li>
</ul>
</li>
</ul>
</li>
<li><code>&lt;figure&gt;&lt;img&gt;&lt;figcaption&gt;caption&lt;/figcaption&gt;&lt;/figure&gt;</code> is an HTML structure to semantically grouping images with captions</li>
<li>Add <code>&lt;label for="inputId"&gt;input title&lt;/label&gt;</code> around your form input title, so the browser knows it’s related to the <code>&lt;input id="inputId" type="text" /&gt;</code> element</li>
<li><code>&lt;fieldset&gt;</code> can be wrapped around multiple <code>&lt;input type="radio" /&gt;</code> elements to semantically connect radio buttons
<ul>
<li><code>&lt;legend&gt;description&lt;/legend&gt;</code> inside <code>&lt;fieldset&gt;</code> adds even more semantic content about the choices</li>
</ul>
</li>
<li><code>type="date"</code> attribute in <code>&lt;input&gt;</code> element adds ability to choose a date from a calendar</li>
<li><code>&lt;time datetime="2010-10-30"&gt;today&lt;/time&gt;</code> gives screen readers an objective measure of time to add more meaning</li>
<li>It’s best practice to use CSS to position alternative information out of a normal user’s viewport while keeping it accessible for screen readers</li>
<li>WCAG recommends a 4.5:1 contrast ratio for text to background colour (to maximize readability)</li>
<li>When linking text with <code>&lt;a&gt;</code> elements, make the wrapped text semantically meaningful, so screen readers know what the link is about</li>
</ul>
<h3 id="how-to-add-shortcut-keys-to-your-webpage">How to add shortcut keys to your webpage</h3>
<ul>
<li>Add <code>accesskey="key"</code> to an element to create a shortcut key for quick access</li>
<li>Add <code>tabindex="integer"</code> to an element to make it focusable when a user tabs through a page
<ul>
<li>Tab starts with value <code>1</code> and then larger numbers and then goes to value <code>0</code> and default tab-able elements</li>
</ul>
</li>
</ul>
<h2 id="responsive-web-design-principles">Responsive Web Design Principles</h2>
<h3 id="how-to-make-your-page-responsive">How to make your page responsive</h3>
<ul>
<li><strong>Add viewport conditionality:</strong> Use <code>@media (breakpoint: units) { CSS rules }</code> to tell the browser to only apply the following CSS rules <em>if</em> the viewport is within the breakpoint</li>
<li><strong>Make images responsive:</strong> <code>max-width: percentage;</code> property scales the image to fit its container until it reaches full size (and then stops)</li>
<li><strong>Make images retina-ready:</strong> Make images half their original size using <code>height</code> and <code>width</code> properties</li>
<li><strong>Responsive viewport units:</strong>
<ul>
<li><code>10vw</code>, <code>10vh</code>
<ul>
<li>10% of viewport’s width, 10% of viewport’s width</li>
</ul>
</li>
<li><code>10vmin</code>, <code>10vmax</code>
<ul>
<li>10% of viewport’s smaller dimension (height vs. width), 10% of viewport’s larger dimension (height vs. width)</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="css-flexbox">CSS Flexbox</h2>
<h3 id="essential-properties-to-set-up-flexbox-containers">Essential properties to set up flexbox containers</h3>
<ol>
<li>Add <code>display: flex;</code> to a parent container to be able to manipulate its child elements</li>
<li>Add <code>flex-direction: direction;</code> to a parent container to decide the flow of its child elements
<ul>
<li><code>row</code>, <code>column</code>, <code>row-reverse</code>, or <code>column-reverse</code></li>
</ul>
</li>
<li>Add <code>justify-content: type;</code> to a parent container to align child elements along the parent container’s main axis (horizontal when <code>row</code> and vertical when <code>column</code>)
<ul>
<li><code>center</code> means center of container</li>
<li><code>flex-start</code> and <code>flex-end</code> means start of end of container</li>
<li><code>space-between</code> means first and last child element are at edges of container</li>
<li><code>space-around</code> means equal spatial distribution</li>
</ul>
</li>
<li>Add <code>align-items: type;</code>to a parent container to align child elements along the parent container’s cross axis (vertical when <code>row</code> and horizontal when <code>column</code>)
<ul>
<li><code>center</code></li>
<li><code>flex-start</code> and <code>flex-end</code></li>
<li><code>stretch</code> means fill parent container along cross axis</li>
<li><code>baseline</code> means size child elements to their text</li>
</ul>
</li>
<li>Add <code>flex-wrap: wrap;</code> to tell child elements to flow over to the next row (or column) when not all children can fit onto single row (or column)
<ul>
<li><code>wrap-reverse</code> goes the opposite direction</li>
</ul>
</li>
</ol>
<h3 id="properties-for-flexbox-child-elements">Properties for flexbox child elements</h3>
<ul>
<li><code>flex-shrink: integer;</code> shrinks container to match width of parent container (amount shrunk depends on integer value of other child elements)</li>
<li><code>flex-grow: integer;</code> is the opposite of <code>flex-shrink</code></li>
<li><code>flex-basis: sizeProperty;</code> like <code>px</code> sets the initial size of child element before <code>flex-shrink</code> and <code>flex-grow</code> do their work</li>
<li><code>order: integer;</code> orders child elements in parent container by integer value (smaller numbers first)</li>
<li><code>align-self: type;</code> aligns the child element by itself along the cross axis like <code>align-items</code></li>
</ul>
<h2 id="css-grid">CSS Grid</h2>
<h3 id="essential-properties-to-set-up-grid-containers">Essential properties to set up grid containers</h3>
<ol>
<li>Add <code>display: grid;</code> to create grid container</li>
<li>Use these properties to add rows and columns:
<ul>
<li>Add <code>grid-template-rows: sizeProp sizeProp;</code> to add rows (each <code>sizeProp</code> creates a row and defines its height</li>
<li>Add <code>grid-template-columns: sizeProp sizeProp;</code> to add columns (each <code>sizeProp</code> creates a column and defines its width)
<ul>
<li><code>auto</code> sets to width/height of content</li>
<li><code>%</code> sets width/height to percentage of grid container</li>
<li><code>fr</code> sets width/height to fraction of what’s left (assuming other columns/rows use <code>fr</code>)</li>
</ul>
</li>
</ul>
</li>
<li>Add these functions inside <code>grid-template-columns</code> or <code>grid-template-rows</code> for more tricks:
<ul>
<li><em>Function: Use <code>minmax(min, max)</code> for <code>sizeProp</code> to set a range of acceptable sizes for column or row</em></li>
<li><em>Function: Use <code>repeat(amount, sizeProp)</code> to repeat size property instead of manually inputting</em>
<ul>
<li>When <code>amount</code> is set to <code>auto-fill</code>, as you stretch container, grid items are responsively added if there’s enough space; otherwise, they’re pushed to the next column/row; when the container stretches beyond grid items, it keeps adding empty columns/rows</li>
<li>When <code>amount</code> is set to <code>auto-fit</code>, it’s the same thing as <code>auto-fill</code>, but it doesn’t add empty columns/rows when container stretches beyond grid items</li>
</ul>
</li>
</ul>
</li>
<li>Use these properties to add row gaps and column gaps between grid items:
<ul>
<li><code>grid-column-gap: sizeProp;</code></li>
<li><code>grid-row-gap: sizeProp;</code></li>
</ul>
</li>
<li><code>justify-items: type;</code> aligns content of each grid item horizontally; <code>align-items: type;</code> aligns vertically
<ul>
<li><code>stretch</code> stretches content to width of grid item</li>
<li><code>start</code>, <code>center</code>, <code>end</code> are self-explanatory</li>
</ul>
</li>
<li>You can tell a child element where to go in the grid by doing the following:
<ul>
<li>Add <code>grid-template-areas: "header header" "content advert" "footer footer";</code> to parent container to define its areas—row by row</li>
<li>Add <code>grid-area: areaName;</code> to child element to tell it where to go</li>
<li>You can use <code>grid-area: horizontalStart/verticalStart/hStop/vStop;</code> when name isn’t created</li>
</ul>
</li>
<li>Add <code>display: grid;</code> in a grid item to create a grid within a grid</li>
</ol>
<h3 id="properties-for-grid-items-children">Properties for grid items (children)</h3>
<ul>
<li><code>grid-column: start / stop;</code> and <code>grid-row: start / stop;</code> allow child elements to span more than one grid item
<ul>
<li><code>1</code> is the top left corner of the grid container</li>
<li>Higher numbers are the next edges between two grid items (for both columns and rows)</li>
<li><code>1 / 4;</code> means make child element span the first 3 grid items (columns or rows)</li>
</ul>
</li>
<li><code>justify-self: type;</code> aligns grid item’s content horizontally, and <code>align-self: type;</code> aligns vertically</li>
</ul>

