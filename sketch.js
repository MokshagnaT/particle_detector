const r = require("raylib");

const window_width = 300;
const window_height = 200;

const detector_width = 50;
const detector_height = window_height;
let detector_start = 0;
let detector_y = 0;

const particle_field_start = 100;
const particle_field_end = 150;
const particle_field_y = 0;
const particle_field_width = particle_field_end - particle_field_start;
const particle_field_height = window_height;

function overlap(range1_start, range1_end, range2_start, range2_end) {
    range1 = range1_end - range1_start;
    // range2 = range2_end - range2_start;

    if (range1_end < range2_end + range1 - 1 && range1_end > range2_start - 1)
        return r.RED;
    else
        return r.WHITE;
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

    if (detector_start < window_width - detector_width && flag === 0) {
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

    let detector_end = detector_start + detector_width;
    let color = overlap(detector_start, detector_end, particle_field_start, particle_field_end);
    r.DrawRectangle(particle_field_start, particle_field_y, particle_field_width, particle_field_height, r.BLUE);

    r.DrawRectangle(detector_start, detector_y, detector_width, detector_height, color);


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