"user strict";

function Maze(width, height) {
    this.width = width;
    this.height = height;

    this.startX             = null;
    this.startY             = null;
    this.startOrientation   = null;
    this.endX               = null;
    this.endY               = null;

    this.spaces = [];
    for (let x = 1; x <= width; x++) {
        this.spaces[x] = [];
        for (let y = 1; y <= height; y++) {
            this.spaces[x][y] = new MazeSpace();
        }
    }
}

Maze.prototype.setStart = function (x, y, orientation) {
    this.startX = x;
    this.startY = y;
    this.startOrientation = orientation;
}

Maze.prototype.setEnd = function (x, y) {
    this.endX = x;
    this.endY = y;
}

/* our main program passes our maze objects
   coordinates of a space that needs a wall
   then maze chooses that individual space
   and passes it the  wall direction through setWall method.
*/

Maze.prototype.setWall = function(x,y,direction) {
    this.spaces[x][y].setWall(direction);
}

