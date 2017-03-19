const led = size =>
    cube({ size: [size, size, 1], center: true })
    .rotateZ(45);

const main = () =>
    led(8).translate([6,0,0])
    .union(led(8).translate([-6,0,0]))
    .union(sphere(1));
