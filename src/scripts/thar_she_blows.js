import colors from "../styles/_colors.scss";

function TharSheBlows(options) {
  this.sizeScale = options.sizeScale;
  this.position = options.position;
  this.rainbowOpacity = 0.3;
}

TharSheBlows.prototype.move = function move(velocityScale) {
  // him no move
};

TharSheBlows.prototype.draw = function draw(ctx) {
  const x = this.position[0];
  let y = this.position[1];
  const sizeScale = this.sizeScale;
  const inverseScale = 1 - sizeScale;
  
  y += 100 * inverseScale;
  ctx.beginPath();
  ctx.moveTo(x + 312 * sizeScale, y + -100 * sizeScale);
  ctx.bezierCurveTo(
    x + 320 * sizeScale,
    y + -100 * sizeScale,
    x + 327 * sizeScale,
    y + -95 * sizeScale,
    x + 328 * sizeScale,
    y + -89 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 343 * sizeScale,
    y + -97 * sizeScale,
    x + 361 * sizeScale,
    y + -98 * sizeScale,
    x + 376 * sizeScale,
    y + -92 * sizeScale
  );

  ctx.bezierCurveTo(
    x + 383 * sizeScale,
    y + -89 * sizeScale,
    x + 390 * sizeScale,
    y + -82 * sizeScale,
    x + 387 * sizeScale,
    y + -76 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 395 * sizeScale,
    y + -78 * sizeScale,
    x + 409 * sizeScale,
    y + -87 * sizeScale,
    x + 413 * sizeScale,
    y + -80 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 417 * sizeScale,
    y + -73 * sizeScale,
    x + 404 * sizeScale,
    y + -75 * sizeScale,
    x + 422 * sizeScale,
    y + -75 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 438 * sizeScale,
    y + -75 * sizeScale,
    x + 431 * sizeScale,
    y + -59 * sizeScale,
    x + 429 * sizeScale,
    y + -47 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 436 * sizeScale,
    y + -43 * sizeScale,
    x + 431 * sizeScale,
    y + -35 * sizeScale,
    x + 434 * sizeScale,
    y + -27 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 437 * sizeScale,
    y + -20 * sizeScale,
    x + 437 * sizeScale,
    y + -19 * sizeScale,
    x + 433 * sizeScale,
    y + -4 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 432 * sizeScale,
    y + -2 * sizeScale,
    x + 431 * sizeScale,
    y + 0 * sizeScale,
    x + 430 * sizeScale,
    y + 2 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 429 * sizeScale,
    y + 5 * sizeScale,
    x + 430 * sizeScale,
    y + 9 * sizeScale,
    x + 430 * sizeScale,
    y + 13 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 430 * sizeScale,
    y + 21 * sizeScale,
    x + 425 * sizeScale,
    y + 28 * sizeScale,
    x + 417 * sizeScale,
    y + 31 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 415 * sizeScale,
    y + 32 * sizeScale,
    x + 412 * sizeScale,
    y + 33 * sizeScale,
    x + 409 * sizeScale,
    y + 34 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 404 * sizeScale,
    y + 37 * sizeScale,
    x + 401 * sizeScale,
    y + 44 * sizeScale,
    x + 397 * sizeScale,
    y + 49 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 388 * sizeScale,
    y + 58 * sizeScale,
    x + 373 * sizeScale,
    y + 56 * sizeScale,
    x + 360 * sizeScale,
    y + 59 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 359 * sizeScale,
    y + 59 * sizeScale,
    x + 358 * sizeScale,
    y + 60 * sizeScale,
    x + 356 * sizeScale,
    y + 61 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 354 * sizeScale,
    y + 62 * sizeScale,
    x + 354 * sizeScale,
    y + 65 * sizeScale,
    x + 353 * sizeScale,
    y + 68 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 350 * sizeScale,
    y + 78 * sizeScale,
    x + 335 * sizeScale,
    y + 80 * sizeScale,
    x + 335 * sizeScale,
    y + 91 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 335 * sizeScale,
    y + 98 * sizeScale,
    x + 327 * sizeScale,
    y + 103 * sizeScale,
    x + 327 * sizeScale,
    y + 103 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 327 * sizeScale,
    y + 105 * sizeScale,
    x + 314 * sizeScale,
    y + 107 * sizeScale,
    x + 312 * sizeScale,
    y + 101 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 309 * sizeScale,
    y + 94 * sizeScale,
    x + 303 * sizeScale,
    y + 92 * sizeScale,
    x + 298 * sizeScale,
    y + 87 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 294 * sizeScale,
    y + 81 * sizeScale,
    x + 287 * sizeScale,
    y + 74 * sizeScale,
    x + 280 * sizeScale,
    y + 71 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 267 * sizeScale,
    y + 65 * sizeScale,
    x + 254 * sizeScale,
    y + 67 * sizeScale,
    x + 245 * sizeScale,
    y + 58 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 237 * sizeScale,
    y + 51 * sizeScale,
    x + 241 * sizeScale,
    y + 37 * sizeScale,
    x + 232 * sizeScale,
    y + 33 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 228 * sizeScale,
    y + 31 * sizeScale,
    x + 220 * sizeScale,
    y + 30 * sizeScale,
    x + 217 * sizeScale,
    y + 27 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 214 * sizeScale,
    y + 24 * sizeScale,
    x + 206 * sizeScale,
    y + 21 * sizeScale,
    x + 206 * sizeScale,
    y + 6 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 206 * sizeScale,
    y + 2 * sizeScale,
    x + 211 * sizeScale,
    y + -2 * sizeScale,
    x + 212 * sizeScale,
    y + -6 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 215 * sizeScale,
    y + -18 * sizeScale,
    x + 207 * sizeScale,
    y + -10 * sizeScale,
    x + 206 * sizeScale,
    y + -28 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 206 * sizeScale,
    y + -34 * sizeScale,
    x + 213 * sizeScale,
    y + -49 * sizeScale,
    x + 218 * sizeScale,
    y + -44 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 217 * sizeScale,
    y + -59 * sizeScale,
    x + 217 * sizeScale,
    y + -62 * sizeScale,
    x + 220 * sizeScale,
    y + -68 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 223 * sizeScale,
    y + -72 * sizeScale,
    x + 236 * sizeScale,
    y + -72 * sizeScale,
    x + 242 * sizeScale,
    y + -69 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 244 * sizeScale,
    y + -75 * sizeScale,
    x + 247 * sizeScale,
    y + -89 * sizeScale,
    x + 251 * sizeScale,
    y + -86 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 257 * sizeScale,
    y + -94 * sizeScale,
    x + 268 * sizeScale,
    y + -98 * sizeScale,
    x + 277 * sizeScale,
    y + -98 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 281 * sizeScale,
    y + -96 * sizeScale,
    x + 285 * sizeScale,
    y + -92 * sizeScale,
    x + 289 * sizeScale,
    y + -92 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 291 * sizeScale,
    y + -93 * sizeScale,
    x + 293 * sizeScale,
    y + -94 * sizeScale,
    x + 295 * sizeScale,
    y + -95 * sizeScale
  );
  ctx.bezierCurveTo(
    x + 300 * sizeScale,
    y + -97 * sizeScale,
    x + 306 * sizeScale,
    y + -100 * sizeScale,
    x + 312 * sizeScale,
    y + -100 * sizeScale
  );
  ctx.closePath();
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.fill();
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = colors.shadowBlack;
  ctx.stroke();
  ctx.clip();

  ctx.beginPath();
  ctx.transform(1, 0, 0, 1.4, 0, 0);
  ctx.arc(x + 376 * sizeScale, 118 * sizeScale, 122 * sizeScale, 0, 2 * Math.PI);
  ctx.closePath();
  const gradient = ctx.createRadialGradient(
    x + 405 * sizeScale,
    0,
    0,
    x + 376 * sizeScale,
    118 * sizeScale,
    122 * sizeScale
  );
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.0)");
  gradient.addColorStop(0.74, "rgba(255, 255, 255, 0.0)");
  gradient.addColorStop(0.77, "rgba(255, 0, 255, 0.3)");
  gradient.addColorStop(0.79, "rgba(127, 0, 255, 0.3)");
  gradient.addColorStop(0.82, "rgba(0, 0, 255, 0.3)");
  gradient.addColorStop(0.85, "rgba(0, 127, 127, 0.3)");
  gradient.addColorStop(0.87, "rgba(0, 255, 0, 0.3)");
  gradient.addColorStop(0.91, "rgba(255, 255, 0, 0.3)");
  gradient.addColorStop(0.96, "rgba(255, 187, 0, 0.3)");
  gradient.addColorStop(0.99, "rgba(255, 0, 0, 0.3)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0.0)");
  // gradient.addColorStop(0, colors.transparent);
  // gradient.addColorStop(0.74, colors.transparent);
  // gradient.addColorStop(0.77, colors.rainbowViolet);
  // gradient.addColorStop(0.79, colors.rainbowIndigo);
  // gradient.addColorStop(0.82, colors.rainbowBlue);
  // gradient.addColorStop(0.85, colors.rainbowAqua);
  // gradient.addColorStop(0.87, colors.rainbowGreen);
  // gradient.addColorStop(0.91, colors.rainbowYellow);
  // gradient.addColorStop(0.96, colors.rainbowOrange);
  // gradient.addColorStop(0.99, colors.rainbowRed);
  // gradient.addColorStop(1, colors.transparent);

  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.transform(1, 0, 0, 1, 0, 0);

};

export default TharSheBlows;