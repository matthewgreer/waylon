const Util = {
  
  // Currently Waylon only moves vertically (y-axis) and Enemies only move
  //  straight horizontally (x-axis). Future updates will have Enemies move
  //  along variable vectors, utilizing the following methods.

  // Determine distance between two points [x1, y1], [x2, y2]
  // distance(xy1, xy2) {
  //   return Math.sqrt(
  //     Math.pow(xy1[0] - xy2[0], 2) + Math.pow(xy1[1] - xy2[1], 2)
  //   );
  // },

  // Determine speed (the length of the vector [x, y])
  // speed(vector) {
  //   return Util.distance([0, 0], vector);
  // },

  // Scale the speed of a vector [x, y] by a magnitude
  // scaleVector(vector, magnitude) {
  //   return [vector[0] * magnitude, vector[1] * magnitude];
  // },

  // Determine direction of a vector [x, y] at a normalized speed of 1
  // direction(vector) {
  //   const norm = Util.speed(vector);
  //   return Util.scaleVector(vector, 1 / norm);
  // }

};

export default Util;