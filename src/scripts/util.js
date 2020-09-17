const Util = {

  // Pairs of (X, Y) coordinates can denote points on canvas coordinate basis
  //  but they can also denote vectors (speed in a direction, in this case).

  // Determine distance between two points [x1, y1], [x2, y2]
  distance(xy1, xy2) {
    return Math.sqrt(
      Math.pow(xy1[0] - xy2[0], 2) + Math.pow(xy1[1] - xy2[1], 2)
    );
  },

  // Determine speed (the length of the vector [x, y])
  speed(vector) {
    return Util.distance([0, 0], vector);
  },

  // Scale the speed of a vector [x, y] by a magnitude
  scaleVector(vector, magnitude) {
    return [vector[0] * magnitude, vector[1] * magnitude];
  },

  // Determine direction of a vector [x, y] at a normalized speed of 1
  direction(vector) {
    const norm = Util.speed(vector);
    return Util.scaleVector(vector, 1 / norm);
  },

  // Inheritance function
  inherits(ChildClass, BaseClass) {
    ChildClass.prototype = Object.create(BaseClass.prototype);
    ChildClass.prototype.constructor = ChildClass;
  }
};

module.exports = Util;