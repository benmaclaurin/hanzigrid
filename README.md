# Hanzi Grid
###### JS module for creating hanzi grids/tables

This is a simple module which generates SVG-based hanzi grids/tables for Chinese language learners. You can use [Browserify](http://browserify.org) to require this module on the web.

## Install
```
npm install @benmaclaurin/hanzigrid
```

## Usage
```javascript
const grid = require('@benmaclaurin/hanzigrid');

document.getElementById('grid').innerHTML = grid.generate(14, 10, options = {
  dashes: 20,
  opacity: 0.1,
  lines: 4
});
```
Generates a new grid with 14 rows and 10 columns. Options:
- dashes - dash density of guidelines
- opacity - opacity of guidelines
- lines - number of guidelines (2 or 4)

## generateWithCharacter
```javascript
document.getElementById('grid').innerHTML = grid.generateWithCharacter(14, 10, '好', options = {
  dashes: 20,
  opacity: 0.1,
  lines: 4,
  charOpacity: 0.2
});
```
Generates grid with a specified character in each box. Options:
- charOpacity - the character opacity

## Requirements
###### Browserify (or alternatives)
```
npm install -g browserify
```
Read the [documentation](http://browserify.org) for usage.

###### HTML <meta> charset Attribute
```HTML
<head>
  <meta charset="UTF-8">
</head>
```
This is required to encode and display the characters.

More options/features to come.
