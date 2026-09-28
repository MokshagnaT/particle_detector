const r = require("raylib");

function overlap(detector_start, detector_end, pf_start, pf_end) {

    return detector_end >= pf_start && detector_start <= pf_end;

}


function color(detector_start, detector_width, pf1_start, pf1_end, pf2_start, pf2_end) {

    detector_end = detector_start + detector_width;
    const pf1_overlap = overlap(detector_start, detector_end, pf1_start, pf1_end)
    const pf2_overlap = overlap(detector_start, detector_end, pf2_start, pf2_end)

    return pf1_overlap || pf2_overlap ? r.RED : r.WHITE;

}


function position(detector_start, detector_lower_boundary, detector_upper_boundary, detector_width, detector_speed) {

    detector_start += detector_speed;

    const detector_max_start = detector_upper_boundary - detector_width;

    if (out_of_bounds(detector_start, detector_max_start, detector_lower_boundary))
        detector_start -= ((detector_upper_boundary - detector_lower_boundary) % detector_speed);

    return detector_start;

}


function out_of_bounds(detector_start, detector_max_start, detector_lower_boundary) {

    return detector_start > detector_max_start || detector_start < detector_lower_boundary;

}


function speed_changer(detector_start, detector_lower_boundary, detector_max_start, detector_speed) {

    if (detector_start === detector_lower_boundary || detector_start === detector_max_start)
        return -(detector_speed);

    return detector_speed;

}

function draw(x, y, width, height, color) {

    r.DrawRectangle(x, y, width, height, color);
}


module.exports = {
    overlap, color, position, out_of_bounds, speed_changer, draw
}