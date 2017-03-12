"user strict";

function MazeSpace() {
    this.north = false;
    this.east = false;
    this.west = false;
    this.south = false;
}

MazeSpace.prototype.setWall() = function(direction) {
    this.[direction] = true;
}