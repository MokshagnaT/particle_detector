// Modules

const r = require("raylib");

const window = require("./window.js");

const d1 = require("./d1.js");
const d2 = require("./d2.js");
const d3 = require("./d3.js");

const detector = require("./detector_functions.js");

// Particle Field Variables

const field1_start = 100;
const field1_end = 150;
const field1_width = field1_end - field1_start;

const field2_start = 200;
const field2_end = 205;
const field2_width = field2_end - field2_start;

const field3_start = 100;
const field3_end = 140;
const field3_height = field3_end - field3_start;


function running() {

    return !r.WindowShouldClose();

}

function setup() {

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(window.width, window.height, "Particle Detectors");
    r.SetTargetFPS(50);

}


function update() {

    const d1_max_start = d1.upper_boundary - d1.width;
    d1.start = detector.position(d1.start, d1.lower_boundary, d1.upper_boundary, d1.width, d1.speed);
    d1.speed = detector.speed_changer(d1.start, d1.lower_boundary, d1_max_start, d1.speed);

    const d2_max_start = d2.upper_boundary - d2.width;
    d2.start = detector.position(d2.start, d2.lower_boundary, d2.upper_boundary, d2.width, d2.speed);
    d2.speed = detector.speed_changer(d2.start, d2.lower_boundary, d2_max_start, d2.speed);

    const d3_max_start = d3.upper_boundary - d3.height;
    d3.start = detector.position(d3.start, d3.lower_boundary, d3.upper_boundary, d3.height, d3.speed);
    d3.speed = detector.speed_changer(d3.start, d3.lower_boundary, d3_max_start, d3.speed);

}


function draw() {

    const d1_color = detector.color(d1.start, d1.width, field1_start, field1_end, field2_start, field2_end); // For Vertical Detector(1)
    const d2_color = detector.color(d2.start, d2.width, field1_start, field1_end, field2_start, field2_end); // For Vertical Detector(2)
    const d3_color = detector.color(d3.start, d3.height, field3_start, field3_end); // For Horizontal Detector(3)

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    draw_field(field1_start, window.vertical_y, field1_width, window.vertical_height);
    draw_field(field2_start, window.vertical_y, field2_width, window.vertical_height);
    draw_field(window.horizontal_x, field3_start, window.horizontal_width, field3_height);

    detector.draw(d1.start, window.vertical_y, d1.width, window.vertical_height, d1_color);
    detector.draw(d2.start, window.vertical_y, d2.width, window.vertical_height, d2_color);
    detector.draw(window.horizontal_x, d3.start, window.horizontal_width, d3.height, d3_color);

    r.EndDrawing();

}

function draw_field(x, y, width, height) {
    r.DrawRectangle(x, y, width, height, r.SKYBLUE);
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};