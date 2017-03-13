"user strict";

function Robot() {
    this.x = null;
    this.y = null;
    this.orientation = null;
    this.maze = null;
}

Robot.prototype.setMaze = function (maze) {
    this.maze = maze;
    this.x = maze.startX;
    this.y = maze.startY;
    this.orientation = maze.startOrientation;
}

Robot.prototype.turnRight = function () {
    if (!this.maze) {
        return false
    }
    const rights = {
        north: "east",
        east: "south",
        south: "west",
        west: "north"
    };
    this.orientation = rights[this.orientation];
    return true;
}

Robot.prototype.turnLeft = function () {
    if (!this.maze) {
        return false
    }
    const lefts = {
        north: "west",
        east: "north",
        south: "east",
        west: "south"
    };

    this.orientation = lefts[this.orientation];
    return true;
}

Robot.prototype.moveForward = function () {
    // if (!this.canMoveForward()) {
    //     return false;
    // }

    switch(this.orientation) {
        case "north":
            this.y++;
            break;
        case "south":
            this.y--;
            break;
        case "east":
            this.x++;
            break;
        case "west":
            this.x--;
            break;
    }

    return true;
}

Robot.prototype.canMoveForward = function () {
    if (!this.maze){
        return false;
    }
    return this.maze.canMove(this.x, this.y, this.orientation);
}

Robot.prototype.exitMaze = function (steps) {
    if (this.maze) {
        while (!steps) {
            if (this.x !== this.maze.endX || this.y !== this.maze.endY) {
                return true;
                break;
            } else if (this.canMoveForward) {
               this.moveForward();
               this.turnLeft();
            } else {
                this.turnRight();
            }
            steps--;
            return false;
        }
    }

}