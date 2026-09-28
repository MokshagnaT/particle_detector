const window = require("./window.js");

const width = 20;
let start = (window.width / 2) + 1;
let lower_boundary = start;
const upper_boundary = window.width;
let speed = 3;

module.exports = {
    upper_boundary, lower_boundary, speed, start, width,
}