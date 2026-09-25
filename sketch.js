const r = require("raylib");

const window_width = 300;
const window_height = 200;
const detector_width = 20;
const detector_height = window_height;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(window_width, window_height, "Rectangle in the Center");
    r.SetTargetFPS(50);
}

function update() {
    // change the state
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);



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