CSS
===

#### How to make Left and Right Half Layout

There are some solutions, as you can see on this article [Left Half and Right Half Layout - Many Different Ways | CSS-Tricks](https://css-tricks.com/left-and-right/) from CSS-Tricks.

Solution with flexbox.

```html
<div style="display: flex; justify-content: space-around;">
	<div style="flex: 1;"></div>
	<div style="flex: 1;"></div>
</div>
```
