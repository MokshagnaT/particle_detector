const r = require("raylib");

const window_width = 300;
const window_height = 200;

const vertical_y = 0;
const vertical_height = window_height;

const detector1_width = 20;
let detector1_start = 0;
const detector1_end_boundary = window_width / 2;

const detector2_width = 40;
let detector2_start = window_width / 2;
const detector2_end_boundary = window_width;

const field1_start = 100;
const field1_end = 150;
const field1_width = field1_end - field1_start;

const field2_start = 200;
const field2_end = 205;
const field2_width = field2_end - field2_start;


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


let direction_decider1 = 1;
let direction_decider2 = 1;

function update() {

    detector1_start += direction_decider1;
    const detector1_end = detector1_start + detector1_width;
    if (detector1_start === 0 || detector1_end === detector1_end_boundary) {
        direction_decider1 = -(direction_decider1);
    }

    detector2_start += direction_decider2;
    const detector2_end = detector2_start + detector2_width;
    if (detector2_start === window_width / 2 || detector2_end === detector2_end_boundary) {
        direction_decider2 = -(direction_decider2);
    }

}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const detector1_color = detector_color(detector1_start, detector1_width, field1_start, field1_end, field2_start, field2_end);
    const detector2_color = detector_color(detector2_start, detector2_width, field1_start, field1_end, field2_start, field2_end);

    r.DrawRectangle(field1_start, vertical_y, field1_width, vertical_height, r.BLUE);
    r.DrawRectangle(field2_start, vertical_y, field2_width, vertical_height, r.BLUE);

    r.DrawRectangle(detector1_start, vertical_y, detector1_width, vertical_height, detector1_color);
    r.DrawRectangle(detector2_start, vertical_y, detector2_width, vertical_height, detector2_color);

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