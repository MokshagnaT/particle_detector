const window = require("./window.js");

const width = 5;
let start = 0;
const lower_boundary = start;
const upper_boundary = window.width / 2;
let speed = 1;

module.exports = {
    upper_boundary, lower_boundary, speed, start, width,
}
