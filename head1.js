const main = (size) =>
    cube([10,10,1])
    .translate([-10,-5, -.5])
    .union(
        cube([20, 1, 1])
        .translate([0, 2.5, -.5])
        .rotateZ(45)
    )
    .union(
        cube([20, 1, 1])
        .translate([0, -3.5, -0.5])
        .rotateZ(-45)
    )
    .subtract(sphere(3))
    .union(sphere(1));
