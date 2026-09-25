const r = require("raylib");

const window_width = 300;
const window_height = 200;

const detector_width = 20;
const detector_height = window_height;
let detector_x = 0;
let detector_y = 0;

const particle_field_start = 100;
const particle_field_end = 150;
const particle_field_y = 0;
const particle_field_width = particle_field_end - particle_field_start;
const particle_field_height = window_height;



function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(window_width, window_height, "Rectangle in the Center");
    r.SetTargetFPS(50);
}

let flag = 0;

function update() {

    if (detector_x < window_width - detector_width && flag === 0) {
        detector_x++;
    }
    else if (detector_x > 0) {
        flag = 1;
        detector_x--;
        if (detector_x === 0) {
            flag = 0;
        }
    }

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(detector_x, detector_y, detector_width, detector_height, r.WHITE);

    r.DrawRectangle(particle_field_x, particle_field_y, particle_field_width, particle_field_height, r.BLUE);

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