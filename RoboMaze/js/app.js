let m = new Maze(7,5);
let r = new Robot();

m.setStart(1,1,"north");
m.setEnd(7,1);

m.setWall(1,1,"east");
m.setWall(1,3,"north");
m.setWall(2,1,"north");
m.setWall(2,2,"north");
m.setWall(2,4,"north");
m.setWall(2,3,"east");
m.setWall(3,2,"north");
m.setWall(3,4,"north");
m.setWall(3,1,"east");
m.setWall(3,2,"east");
m.setWall(3,1,"east");
m.setWall(3,4,"east");
m.setWall(4,2,"north");
m.setWall(4,3,"north");
m.setWall(4,3,"east");
m.setWall(4,5,"east");
m.setWall(5,1,"north");
m.setWall(5,2,"east");
m.setWall(5,4,"east");
m.setWall(6,1,"east");
m.setWall(6,2,"north");
m.setWall(6,3,"east");
m.setWall(6,4,"north");
m.setWall(7,3,"north");
m.setWall(7,4,"north");


