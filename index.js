exports.generate = function(rows, columns, options) {
  var box = '';
  if (options != null) {
    box = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.854 335.854"> <defs><style>.cls-1{fill:#f2f2f2}.cls-2{fill:none;stroke:#000;stroke-dasharray:' + options.dashes + ';opacity:' + options.opacity + '}</style></defs> <g id="Group_1" data-name="Group 1" transform="translate(-339 -201)"> <rect id="Rectangle_1" data-name="Rectangle 1" class="cls-1" width="335" height="335" transform="translate(339 201)"/> <line id="Line_2" data-name="Line 2" class="cls-2" x2="335" transform="translate(339.5 368.5)"/>';
    box += setLines(options.lines);
    box += '</g> </svg>';
  } else {
    box = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.854 335.854"> <defs><style>.cls-1{fill:#f2f2f2}.cls-2{fill:none;stroke:#000;stroke-dasharray:10;opacity:0.1}</style></defs> <g id="Group_1" data-name="Group 1" transform="translate(-339 -201)"> <rect id="Rectangle_1" data-name="Rectangle 1" class="cls-1" width="335" height="335" transform="translate(339 201)"/> <line id="Line_2" data-name="Line 2" class="cls-2" x2="335" transform="translate(339.5 368.5)"/> <line id="Line_1" data-name="Line 1" class="cls-2" y2="335" transform="translate(506.5 201.5)"/> <line id="Line_3" data-name="Line 3" class="cls-2" x1="335" y2="335" transform="translate(339.5 201.5)"/> <line id="Line_4" data-name="Line 4" class="cls-2" x2="335" y2="335" transform="translate(339.5 201.5)"/> </g> </svg>';
  }

  return generateTable(box, columns, rows);
};

exports.generateWithCharacter = function(rows, columns, character, options) {
  var box = '';
  if (options != null) {
    box = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.854 335.854"> <defs><style>.cls-1{fill:#f2f2f2}.cls-2{fill:none;stroke:#000;stroke-dasharray:' + options.dashes + ';opacity:' + options.opacity + '}.cls-3{font-size:225px;font-family:STKaitiSC-Regular,Kaiti SC;opacity:' + options.charOpacity + '}</style></defs> <g id="Group_2" data-name="Group 2" transform="translate(-411 -215)"> <g id="Group_1" data-name="Group 1" transform="translate(72 14)"> <rect id="Rectangle_1" data-name="Rectangle 1" class="cls-1" width="335" height="335" transform="translate(339 201)"/>';
    box += setLines(options.lines);
    box += '</g><text id="' + character + '" class="cls-3" transform="translate(424 228)"><tspan x="42" y="238">' + character + '</tspan></text> </g> </svg>';
  } else {
    box = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.854 335.854"> <defs><style>.cls-1{fill:#f2f2f2}.cls-2{fill:none;stroke:#000;stroke-dasharray:10;opacity:0.097}.cls-3{font-size:225px;font-family:STKaitiSC-Regular,Kaiti SC;opacity:0.5}</style></defs> <g id="Group_2" data-name="Group 2" transform="translate(-411 -215)"> <g id="Group_1" data-name="Group 1" transform="translate(72 14)"> <rect id="Rectangle_1" data-name="Rectangle 1" class="cls-1" width="335" height="335" transform="translate(339 201)"/> <line id="Line_2" data-name="Line 2" class="cls-2" x2="335" transform="translate(339.5 368.5)"/> <line id="Line_1" data-name="Line 1" class="cls-2" y2="335" transform="translate(506.5 201.5)"/> <line id="Line_3" data-name="Line 3" class="cls-2" x1="335" y2="335" transform="translate(339.5 201.5)"/> <line id="Line_4" data-name="Line 4" class="cls-2" x2="335" y2="335" transform="translate(339.5 201.5)"/> </g> <text id="' + character + '" class="cls-3" transform="translate(424 228)"><tspan x="42" y="238">' + character + '</tspan></text></g> </svg>';
  }

  return generateTable(box, columns, rows);
};

function setLines(lines) {
  if (lines == 2) {
    return '<line id="Line_1" data-name="Line 1" class="cls-2" y2="335" transform="translate(506.5 201.5)"/> <line id="Line_2" data-name="Line 2" class="cls-2" x2="335" transform="translate(339.5 368.5)"/>';
  } else {
    return '<line id="Line_2" data-name="Line 2" class="cls-2" x2="335" transform="translate(339.5 368.5)"/> <line id="Line_1" data-name="Line 1" class="cls-2" y2="335" transform="translate(506.5 201.5)"/> <line id="Line_3" data-name="Line 3" class="cls-2" x1="335" y2="335" transform="translate(339.5 201.5)"/> <line id="Line_4" data-name="Line 4" class="cls-2" x2="335" y2="335" transform="translate(339.5 201.5)"/>';
  }
}

function generateTable(box, columns, rows) {
  var response = '<table style="width: 100%">';
  var column = '';
  for (i = 0; i < columns; i++) {
    column += '<td>' + box + '</td>';
  }
  for (i = 0; i < rows; i++) {
    response += '<tr>' + column + '</tr>'
  }
  response += '</table>';

  return response;
}