const r = require("raylib");

const window_width = 300;
const window_height = 200;


// Vertical Detectors' and Fields' variables

const vertical_y = 0;
const vertical_height = window_height;

const detector1_width = 5;
let detector1_start = 0;
const detector1_end_boundary = window_width / 2;
let detector1_speed = 1;

const detector2_width = 20;
let detector2_start = window_width / 2;
const detector2_end_boundary = window_width;
let detector2_speed = 3;

const field1_start = 100;
const field1_end = 150;
const field1_width = field1_end - field1_start;

const field2_start = 200;
const field2_end = 205;
const field2_width = field2_end - field2_start;


// Horizontal Detector and Field variables

const horizontal_x = 0;
const horizontal_width = window_width;

const detector3_height = 20;
let detector3_start = 0;
const detector3_end_boundary = window_height;
let detector3_speed = 3;

const field3_start = 100;
const field3_end = 140;
const field3_height = field3_end - field3_start;


// Function to change detector color based on whether it's overlapping with a particle field
function detector_color(detector_start, detector_width, pf1_start, pf1_end, pf2_start, pf2_end) {

    detector_end = detector_start + detector_width;
    const pf1_overlap = detector_end >= pf1_start && detector_start <= pf1_end;
    const pf2_overlap = detector_end >= pf2_start && detector_start <= pf2_end;

    return pf1_overlap || pf2_overlap ? r.RED : r.WHITE;

}

function running() {

    return !r.WindowShouldClose();

}

function setup() {

    r.InitWindow(window_width, window_height, "Particle Detectors");
    r.SetTargetFPS(50);

}


function update() {

    // Vertical Detectors

    detector1_start += detector1_speed;

    const detector1_max_start = detector1_end_boundary - detector1_width;

    if (detector1_start > detector1_max_start)
        detector1_start = detector1_max_start;
    if (detector1_start < 0)
        detector1_start = 0;
    if (detector1_start === 0 || detector1_start === detector1_max_start) {
        detector1_speed = -(detector1_speed);
    }

    detector2_start += detector2_speed;

    const detector2_max_start = detector2_end_boundary - detector2_width;

    if (detector2_start > detector2_max_start)
        detector2_start = detector2_max_start;
    if (detector2_start < window_width / 2)
        detector2_start = window_width / 2;
    if (detector2_start === window_width / 2 || detector2_start === detector2_max_start) {
        detector2_speed = -(detector2_speed);
    }

    // Horizontal Detector

    detector3_start += detector3_speed;

    const detector3_max_start = detector3_end_boundary - detector3_height;

    if (detector3_start > detector3_max_start)
        detector3_start = detector3_max_start;
    if (detector3_start < 0)
        detector3_start = 0;
    if (detector3_start === 0 || detector3_start === detector3_max_start)
        detector3_speed = -(detector3_speed);

}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const detector1_color = detector_color(detector1_start, detector1_width, field1_start, field1_end, field2_start, field2_end); // For Vertical Detector(1)
    const detector2_color = detector_color(detector2_start, detector2_width, field1_start, field1_end, field2_start, field2_end); // For Vertical Detector(2)
    const detector3_color = detector_color(detector3_start, detector3_height, field3_start, field3_end); // For Horizontal Detector(3)

    r.DrawRectangle(field1_start, vertical_y, field1_width, vertical_height, r.BLUE);
    r.DrawRectangle(field2_start, vertical_y, field2_width, vertical_height, r.BLUE);
    r.DrawRectangle(horizontal_x, field3_start, horizontal_width, field3_height, r.BLUE);

    r.DrawRectangle(detector1_start, vertical_y, detector1_width, vertical_height, detector1_color);
    r.DrawRectangle(detector2_start, vertical_y, detector2_width, vertical_height, detector2_color);
    r.DrawRectangle(horizontal_x, detector3_start, horizontal_width, detector3_height, detector3_color);

    r.EndDrawing();

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