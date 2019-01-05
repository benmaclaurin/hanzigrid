exports.box = function(rows, columns) {
  var box = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.854 335.854"> <defs><style>.cls-1{fill:#f2f2f2}.cls-2{fill:none;stroke:#c7c7c7;stroke-dasharray:10}</style></defs> <g id="Group_1" data-name="Group 1" transform="translate(-339 -201)"> <rect id="Rectangle_1" data-name="Rectangle 1" class="cls-1" width="335" height="335" transform="translate(339 201)"/> <line id="Line_2" data-name="Line 2" class="cls-2" x2="335" transform="translate(339.5 368.5)"/> <line id="Line_1" data-name="Line 1" class="cls-2" y2="335" transform="translate(506.5 201.5)"/> <line id="Line_3" data-name="Line 3" class="cls-2" x1="335" y2="335" transform="translate(339.5 201.5)"/> <line id="Line_4" data-name="Line 4" class="cls-2" x2="335" y2="335" transform="translate(339.5 201.5)"/> </g> </svg>';
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
};