const r = require("raylib");

const window_width = 300;
const window_height = 200;

const detector1_width = 20;
const detector_height = window_height;
let detector_start = 0;
let detector_y = 0;


const particle_field1_start = 100;
const particle_field1_end = 150;
const particle_field1_y = 0;
const particle_field1_width = particle_field1_end - particle_field1_start;
const particle_field1_height = window_height;

const particle_field2_start = 200;
const particle_field2_end = 205;
const particle_field2_y = 0;
const particle_field2_width = particle_field2_end - particle_field2_start;
const particle_field2_height = window_height;


function overlap(detector_start, detector_end, pf1_start, pf1_end, pf2_start, pf2_end) {
    detectorWidth = detector_end - detector_start;
    // range2 = pf1_end - pf1_start;

    let pf1_overlap = detector_end < pf1_end + detectorWidth - 1 && detector_end > pf1_start - 1;
    let pf2_overlap = detector_end < pf2_end + detectorWidth - 1 && detector_end > pf2_start - 1;

    return pf1_overlap || pf2_overlap ? r.RED : r.WHITE;
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(window_width, window_height, "Rectangle in the Center");
    r.SetTargetFPS(50);
}

let flag = 0;

function update() {

    if (detector_start < window_width - detector1_width && flag === 0) {
        detector_start++;
    }
    else if (detector_start > 0) {
        flag = 1;
        detector_start--;
        if (detector_start === 0) {
            flag = 0;
        }
    }

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    let detector_end = detector_start + detector1_width;
    let detector_color = overlap(detector_start, detector_end, particle_field1_start, particle_field1_end, particle_field2_start, particle_field2_end);
    r.DrawRectangle(particle_field1_start, particle_field1_y, particle_field1_width, particle_field1_height, r.BLUE);
    r.DrawRectangle(particle_field2_start, particle_field2_y, particle_field2_width, particle_field2_height, r.BLUE);


    r.DrawRectangle(detector_start, detector_y, detector1_width, detector_height, detector_color);


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