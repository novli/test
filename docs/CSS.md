# Стили
Для описания стилей спользуется PostCSS с парсером SugarSS. Синтаксис и функционал близки к SASS, функционал расширен плагинами.
## PostCSS
### Парсер SugarSS
В синтаксисе отсутствуют ; и фигурные скобки, вложенность реализуется с помощью отступов.

Пример:
```sugarss
.sugarSs
  div
    color: #ff0000
```
### Плагины
#### postcss-nested
```sugarss
.withNesting
  &_element
    color: #ff0000
```
#### postcss-nested-selectors
```sugarss
.withNestedSelector
  &_element
    ^&.-modifier &
      color: #ff0000
```
#### postcss-import
```sugarss
@import 'style.sss'
```
#### postcss-simple-vars
```sugarss
$g-color: #ff0000
$g-name: variableBlockName

.$(g-name)
  color: $g-color
```
#### postcss-mixins
```sugarss
@define-mixin mixin $m-color: #ff0000, $m-font-size: 16px
  color: $m-color
  font-size: $m-font-size

  @mixin-content

.withMixin
  @mixin mixin
    background: $g-color
```
#### postcss-for
```sugarss
@for $f-index from 1 to 7 by 2
  .withFor$(f-index)
    z-index: $f-index
```
#### postcss-each
```sugarss
@each $e-name, $e-color in (Red, Green, Blue), (#ff0000, #00ff00, #0000ff)
  .withEach$(e-name)
    color: $e-color
```
#### postcss-conditionals
```sugarss
.withConditionals
  $color: 'Red'

  @if $color == 'Red'
    color: #ff0000

  @else if $color == 'Green'
    color: #00ff00

  @else
    color: #0000ff
```
#### postcss-easy-media-query
```sugarss
.withEasyQuery
  @below 1024px
    color: #ff0000
```
#### postcss-calc
```sugarss
.withCalc
  height: calc(10px * 3)
```
#### postcss-media-fn
```sugarss
.withMedia
  width: media(
    1024px,
    (max-width: 1024px) 100%
  )
```
#### postcss-media-minmax
```sugarss
.withMinMax
  width: media(
    1024px,
    (width <= 1024px) 100%
  )
```
#### postcss-functions
```sugarss
.withFunction
  color: alpha(#ffffff, .5)
```
#### postcss-quantity-queries
```sugarss
.withQuantity:at-most(4)
  color: #ff0000
```
#### postcss-selector-not
```sugarss
.withNot:not(:first-child, :last-child)
  color: #ff0000
```
#### postcss-selector-matches
```sugarss
.withMatches:matches(:first-child, :last-child)
  color: #ff0000
```

## Основные принципы
**Принципы основаны на BEM с упрощением в пользу удобства написания классов и использования модификаторов. Строгие правила именования и сортировки нужны для улучшения сохранения и предсказуемости в тексте.**
## Термины
### Блок
* Определяет собственные правила.
* Может быть модифицирован типом или модификатором.
* Может быть модифицирован блоком-предком, его типом или модификатором.

Правило:
```regexp
.[a-z][a-z0-9]{1,11}([A-Z][a-z0-9]{1,11}){0,2}
```
Пример:
```sugarss
.withNothing
  color: #ff0000

  a&
    color: #00ff00

  &.-someColorModifier
    color: #00ff00

  .someAncestorBlock &
    color: #00ff00

  a.someAncestorBlock &
    color: #00ff00

  .someAncestorBlock.-someColorModifier &
    color: #0000ff
```
### Модификатор
* Определеляет правила изменения блока.
* Может быть модифицирован типом или модификатором.
* Может быть модифицирован блоком-предком, его типом или модификатором.

Правило:
```regexp
.-{1,2}[a-z][a-z0-9]{1,11}([A-Z][a-z0-9]{1,11}){0,2}
```
Пример:
```sugarss
.withModifier
  &.-someColorModifier
    color: #ff0000

    a&
      color: #00ff00

    &.-anotherColorModifier
      color: #00ff00

    .someAncestorBlock &
      color: #00ff00

    a.someAncestorBlock &
      color: #00ff00

    .someAncestorBlock.-someColorModifier &
      color: #00ff00
```
### Элемент
* Определеляет правила отображения контента и расположения блоков-потомков внутри блока.
* Может быть модифицирован типом или модификатором блока.
* Может быть модифицирован блоком-предком, его типом или модификатором.

Правило:
```regexp
_{1,2}[a-z][a-z0-9]{1,11}([A-Z][a-z0-9]{1,11}){0,2}
```
Пример:
```sugarss
.withElements
  &_elementForBlock
    align-items: center

    .someAncestorBlock &
      color: #00ff00

    a.someAncestorBlock &
      color: #00ff00

    .someAncestorBlock.-someColorModifier &
      color: #00ff00
```
### Блок-потомок
Является обычным блоком, наследующим имя предка.

Правило:
```regexp
([A-Z][a-z0-9]{1,11}){0,2}
```
Пример:
```sugarss
.someBlock
  color: #ff0000

  &Successor
    color: #00ff00

    ^&.-someColorModifier &
      color: #0000ff
```

## Композиция
Интерфейс состоит из блоков. Блоки разделяются логически для определенных для них целей.

Блок в разметке может иметь соответствующий компонент в React, иначе говоря, любой блок может быть вынесен в отдельный компонент, если это необходимо, и использован незавиимо в любом месте приложения.

Блоки должны располагаться в отдельных элементах блоков-предков.

Пример:
```jsx
<div className="card">
  <div className="card_columns">
    <div className="cardColumns">
      <div className="cardColumns_item">
        <div className="cardPicture">
          <img className="cardPicture_img">
        </div>
      </div>
      <div className="cardColumns_item">
        <div className="cardColumn">
          <div className="cardColumn_heading">
            <div className="cardHeading">
              <div className="cardHeading_content">Название</div>
            </div>
          </div>
          <div className="cardColumn_text">
            <div className="cardText">
              <div className="cardText_content">Содержание</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
```sugarss
.block
  &_columns
    padding: 0 20px

  &Columns
    flex-direction: row

    &_item
      width: 50%

  &Column
    align-items: center

    &_heading
      padding: 0 20px

    &_text
      margin: 20px 0 0
      padding: 0 20px
      width: 100%

  &Heading
    text-align: center

    &_content
      font-size: 24px

  &Text
    text-align: justify

    &_content
      font-size: 16px

```
