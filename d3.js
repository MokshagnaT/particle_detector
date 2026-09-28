const window = require("./window.js");

const height = 20;
let start = 0;
let lower_boundary = start;
const upper_boundary = window.height;
let speed = 3;

module.exports = {
    upper_boundary, lower_boundary, speed, start, height,
}