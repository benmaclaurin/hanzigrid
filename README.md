# Hanzi Grid
###### JS module for creating hanzi grids/tables

This is a simple module (my first) which generates SVG-based hanzi grids/tables for Chinese language learners. You can use [Browserify](http://browserify.org) to require this module on the web.

## Install
```
npm install @benmaclaurin/hanzigrid
```

## Usage
```javascript
var grid = require('@benmaclaurin/hanzigrid');

document.getElementById('grid').innerHTML = grid.generate(14, 10, options = {
  dashes: 20,
  opacity: 0.1
});
```
Generates a new grid with 14 rows and 10 columns. Options:
- dashes - dash density of guidelines
- opacity - opacity of guidelines

More options/features to come.
