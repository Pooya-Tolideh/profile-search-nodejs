"user strict";

function Maze(width, height) {
    this.width = width;
    this.height = height;

    this.startX             = null;
    this.startY             = null;
    this.startOrientation   = null;
    this.endX               = null;
    this.endY               = null;
    this.directions = ["north", "south", "east", "west"];
    this.spaces = [];
    for (let x = 1; x <= width; x++) {
        this.spaces[x] = [];
        for (let y = 1; y <= height; y++) {
            this.spaces[x][y] = new MazeSpace(this.directions);
        }
    }
}

Maze.prototype.setStart = function (x, y, orientation) {
    if (this.isValidDir(orientation)) {
        this.startOrientation = orientation;
    }

    if (this.isValidCo(x,y)) {
        this.startX = x;
        this.startY = y;
    }
}

Maze.prototype.setEnd = function (x, y) {
    if (this.isValidCo(x,y)) {
        this.endX = x;
        this.endY = y;
    }
}

/* our main program passes our maze objects
   coordinates of a space that needs a wall
   then maze chooses that individual space
   and passes it the  wall direction through setWall method.
*/

Maze.prototype.setWall = function(x,y,direction) {
    if ( this.isValidCo(x,y) && this.isValidDir(direction)) {
        this.spaces[x][y].setWall(direction);
        return true;
    }
    return false;
}

Maze.prototype.isValidDir = function (direction) {
    return this.directions.indexOf(direction) !== -1;
};

Maze.prototype.isValidCo = function (x,y) {
    return x > 0 && x <= this.width && y > 0 && y <= this.height;
};
