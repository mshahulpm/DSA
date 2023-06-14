/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
    this.rect = rectangle
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {

    let fill = new Array(this.rect[0].length).fill(newValue)


    for (let i = row1; i <= row2; i++) {

        if (i > row1 && i < row2) {
            this.rect[i] = fill;
            continue
        }

        for (let j = col1; j <= col2; j++) {
            this.rect[i][j] = newValue
        }

    }

};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
    return this.rect[row][col]
};

/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */


// 1828. Queries on Number of Points Inside a Circle

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {

    let res = new Array(queries.length)
    let x1, y1, r;
    let x2, y2;
    for (let i = 0; i < queries.length; i++) {
        [x1, y1, r] = queries[i];
        res[i] = 0

        for (let j = 0; j < points.length; j++) {
            [x2, y2] = points[j]
            if (distanceBtweenPoints(x1, x2, y1, y2) <= r) res[i]++
        }

    }

    return res

};

function distanceBtweenPoints(x1, x2, y1, y2) {
    return Math.sqrt(((x1 - x2) ** 2) + (y1 - y2) ** 2)
}

console.log(distanceBtweenPoints(0, 1, 0, 0));