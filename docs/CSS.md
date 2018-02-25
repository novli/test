# Styling
## PostCSS
### Parser: postcss-sugarss
```less
#id
  .class
    color: red
```
### Plugins:
#### postcss-import
```less
@import 'style.sss'
```
#### postcss-nested
```less
.block
  &_element
    color: red
```
#### postcss-nested-selectors
```less
.block
  &_element
    ^&:first-child &
      color: red
```
#### postcss-mixins
```less
@define-mixin mixin $class, $color
  .$(class)
    color: $color

    @mixin-content

@mixin mixin class, red
  background: blue
```
#### postcss-simple-vars
```less
$class: class
$color: red

.$(class)
  color: $color
```
#### postcss-conditionals
```less
$color: 1

.class
  @if $color == 1
    color: red
  @else if $color == 2
    color: green
  @else
    color: blue
```
#### postcss-each
```less
@each $color in red, green, blue
  .class
    color: $color
```
#### postcss-for
```less
@for $i from 1 to 3
  .class$(i)
    z-index: $i
```
#### postcss-easy-media-query
```less
@below 1024px
  color: red
```
#### postcss-math
```less
.class
  height: math(10px * 3)
```
#### postcss-media-fn
```less
.class
  width: media(
    1024px,
    (max-width: 1024px) 100%
  )
```
#### postcss-media-minmax
```less
.class
  width: media(
    1024px,
    (width <= 1024px) 100%
  )
```
#### postcss-functions
```less
.class
  color: alpha(#fff, .5)
```
#### postcss-quantity-queries
```less
.class:at-most(4)
  color: red
```
#### postcss-selector-not
```less
.class:not(:first-child, :last-child)
  color: red
```
#### postcss-selector-matches
```less
.class:matches(:first-child, :last-child)
  color: red
```
