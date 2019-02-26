var count = 0;
var visited = {};

var floodFill = (list, row, column, is2D) => {
    row = parseInt(row);
    column = parseInt(column);
    if (is2D) {
        if (!list[row] || !list[row][column])
            return;        
        if (list[row][column] === 0)
            return;
    } else {
        if (!list[column] || list[column] === 0)
            return;
    }
    if (typeof visited[row + ',' + column] !== 'undefined' && visited[row + ',' + column])
        return;
    count++;
    visited[row + ',' + column] = true;
    floodFill(list, row, column-1, is2D);
    floodFill(list, row, column+1, is2D);

    if (is2D) {
        floodFill(list, row-1, column, is2D);
        floodFill(list, row+1, column, is2D);
    }
    return count;
}

export default function (array, row, column) {
    count = 0;
    visited = {};
    let list = Array.isArray(array) ? array : JSON.parse(array);
    let is2D = false;
    if (list[0].constructor === Array)
        is2D = true;
    let res = floodFill(list, row, column, is2D);
    return res || '0';
};