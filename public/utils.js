/**
 * @description converts index of vector to array index given vector and width of rows.
 * (row-major ordering)
 * @param {x} x cordinate of vector
 * @param {*} y coordinate of vector
 * @param {*} w width of rows
 * @returns array index of vector
 */
export const VectorToIndex = (x, y, w) => (y - 1) * w + x - 1