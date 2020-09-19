function tharSheBlows(ctx) {
  this.ctx = ctx;

}

tharSheBlows.prototype.draw = function draw(ctx, scale) {
  const breathOpacity = 0.6;
  const rainbowOpacity = 0.1;

  // tharsheblows/breath

  ctx.beginPath();
  ctx.moveTo(x + 326 * scale, 104 - scale * 93);
  ctx.bezierCurveTo(
    x + 318 * scale,
    104 - scale * 100,
    x + 306 * scale,
    104 - scale * 101,
    x + 297 * scale,
    104 - scale * 95
  );
  ctx.bezierCurveTo(
    x + 297 * scale,
    104 - scale * 94,
    x + 296 * scale,
    104 - scale * 94,
    x + 295 * scale,
    104 - scale * 94
  );
  ctx.bezierCurveTo(
    x + 294 * scale,
    104 - scale * 93,
    x + 293 * scale,
    104 - scale * 94,
    x + 292 * scale,
    104 - scale * 94
  );
  ctx.bezierCurveTo(
    x + 285 * scale,
    104 - scale * 97,
    x + 276 * scale,
    104 - scale * 97,
    x + 268 * scale,
    104 - scale * 94
  );
  ctx.bezierCurveTo(
    x + 264 * scale,
    104 - scale * 93,
    x + 260 * scale,
    104 - scale * 90,
    x + 261 * scale,
    104 - scale * 86
  );
  ctx.bezierCurveTo(
    x + 258 * scale,
    104 - scale * 86,
    x + 255 * scale,
    104 - scale * 87,
    x + 251 * scale,
    104 - scale * 87
  );
  ctx.bezierCurveTo(
    x + 248 * scale,
    104 - scale * 87,
    x + 244 * scale,
    104 - scale * 87,
    x + 241 * scale,
    104 - scale * 85
  );
  ctx.bezierCurveTo(
    x + 238 * scale,
    104 - scale * 84,
    x + 236 * scale,
    104 - scale * 80,
    x + 237 * scale,
    104 - scale * 77
  );
  ctx.bezierCurveTo(
    x + 232 * scale,
    104 - scale * 74,
    x + 226 * scale,
    104 - scale * 71,
    x + 221 * scale,
    104 - scale * 68
  );
  ctx.bezierCurveTo(
    x + 217 * scale,
    104 - scale * 67,
    x + 213 * scale,
    104 - scale * 65,
    x + 210 * scale,
    104 - scale * 61
  );
  ctx.bezierCurveTo(
    x + 208 * scale,
    104 - scale * 58,
    x + 207 * scale,
    104 - scale * 53,
    x + 209 * scale,
    104 - scale * 50
  );
  ctx.bezierCurveTo(
    x + 211 * scale,
    104 - scale * 47,
    x + 214 * scale,
    104 - scale * 46,
    x + 217 * scale,
    104 - scale * 45
  );
  ctx.bezierCurveTo(
    x + 226 * scale,
    104 - scale * 42,
    x + 235 * scale,
    104 - scale * 39,
    x + 244 * scale,
    104 - scale * 36
  );
  ctx.bezierCurveTo(
    x + 241 * scale,
    104 - scale * 33,
    x + 242 * scale,
    104 - scale * 28,
    x + 244 * scale,
    104 - scale * 25
  );
  ctx.bezierCurveTo(
    x + 247 * scale,
    104 - scale * 21,
    x + 250 * scale,
    104 - scale * 19,
    x + 254 * scale,
    104 - scale * 17
  );
  ctx.bezierCurveTo(
    x + 260 * scale,
    104 - scale * 15,
    x + 266 * scale,
    104 - scale * 13,
    x + 273 * scale,
    104 - scale * 13
  );
  ctx.bezierCurveTo(
    x + 274 * scale,
    104 - scale * 9,
    x + 278 * scale,
    104 - scale * 7,
    x + 282 * scale,
    104 - scale * 8
  );
  ctx.bezierCurveTo(
    x + 286 * scale,
    104 - scale * 8,
    x + 290 * scale,
    104 - scale * 10,
    x + 293 * scale,
    104 - scale * 12
  );
  ctx.bezierCurveTo(
    x + 297 * scale,
    104 - scale * 13,
    x + 301 * scale,
    104 - scale * 14,
    x + 305 * scale,
    104 - scale * 12
  );

  // anchor point at blowhole  y = 104
  ctx.bezierCurveTo(
    x + 308 * scale,
    104 - scale * 11,
    x + 313 * scale,
    104 - scale * 5,
    x + 311 * scale,
    104 - scale * 0
  );

  ctx.bezierCurveTo(
    x + 310 * scale,
    104 - scale * -4,
    x + 328 * scale,
    104 - scale * -3,
    x + 328 * scale,
    104 - scale * 1
  );
  ctx.bezierCurveTo(
    x + 328 * scale,
    104 - scale * 6,
    x + 334 * scale,
    104 - scale * 5,
    x + 333 * scale,
    104 - scale * 10
  );
  ctx.bezierCurveTo(
    x + 339 * scale,
    104 - scale * 4,
    x + 349 * scale,
    104 - scale * 3,
    x + 358 * scale,
    104 - scale * 6
  );
  ctx.bezierCurveTo(
    x + 362 * scale,
    104 - scale * 8,
    x + 367 * scale,
    104 - scale * 13,
    x + 365 * scale,
    104 - scale * 17
  );
  ctx.bezierCurveTo(
    x + 370 * scale,
    104 - scale * 18,
    x + 375 * scale,
    104 - scale * 17,
    x + 381 * scale,
    104 - scale * 17
  );
  ctx.bezierCurveTo(
    x + 386 * scale,
    104 - scale * 16,
    x + 392 * scale,
    104 - scale * 16,
    x + 396 * scale,
    104 - scale * 19
  );
  ctx.bezierCurveTo(
    x + 401 * scale,
    104 - scale * 21,
    x + 404 * scale,
    104 - scale * 27,
    x + 402 * scale,
    104 - scale * 32
  );
  ctx.bezierCurveTo(
    x + 409 * scale,
    104 - scale * 33,
    x + 416 * scale,
    104 - scale * 32,
    x + 423 * scale,
    104 - scale * 33
  );
  ctx.bezierCurveTo(
    x + 430 * scale,
    104 - scale * 35,
    x + 437 * scale,
    104 - scale * 41,
    x + 436 * scale,
    104 - scale * 48
  );
  ctx.bezierCurveTo(
    x + 435 * scale,
    104 - scale * 53,
    x + 431 * scale,
    104 - scale * 57,
    x + 427 * scale,
    104 - scale * 58
  );
  ctx.bezierCurveTo(
    x + 422 * scale,
    104 - scale * 60,
    x + 417 * scale,
    104 - scale * 60,
    x + 413 * scale,
    104 - scale * 59
  );
  ctx.bezierCurveTo(
    x + 415 * scale,
    104 - scale * 67,
    x + 417 * scale,
    104 - scale * 74,
    x + 419 * scale,
    104 - scale * 81
  );
  ctx.bezierCurveTo(
    x + 419 * scale,
    104 - scale * 84,
    x + 420 * scale,
    104 - scale * 88,
    x + 418 * scale,
    104 - scale * 90
  );
  ctx.bezierCurveTo(
    x + 417 * scale,
    104 - scale * 92,
    x + 416 * scale,
    104 - scale * 93,
    x + 414 * scale,
    104 - scale * 94
  );
  ctx.bezierCurveTo(
    x + 404 * scale,
    104 - scale * 98,
    x + 392 * scale,
    104 - scale * 93,
    x + 384 * scale,
    104 - scale * 85
  );
  ctx.bezierCurveTo(
    x + 382 * scale,
    104 - scale * 90,
    x + 380 * scale,
    104 - scale * 94,
    x + 377 * scale,
    104 - scale * 98
  );
  ctx.bezierCurveTo(
    x + 374 * scale,
    104 - scale * 101,
    x + 370 * scale,
    104 - scale * 104,
    x + 366 * scale,
    104 - scale * 104
  ); // top (104 * scale) + (n * scale))
  ctx.bezierCurveTo(
    x + 361 * scale,
    104 - scale * 104,
    x + 356 * scale,
    104 - scale * 101,
    x + 353 * scale,
    104 - scale * 98
  );
  ctx.bezierCurveTo(
    x + 349 * scale,
    104 - scale * 95,
    x + 346 * scale,
    104 - scale * 91,
    x + 343 * scale,
    104 - scale * 88
  );
  ctx.bezierCurveTo(
    x + 343 * scale,
    104 - scale * 92,
    x + 340 * scale,
    104 - scale * 96,
    x + 336 * scale,
    104 - scale * 97
  );
  ctx.bezierCurveTo(
    x + 332 * scale,
    104 - scale * 98,
    x + 327 * scale,
    104 - scale * 96,
    x + 325 * scale,
    104 - scale * 92
  );
  ctx.fillStyle = `rgba(255, 255, 255, ${breathOpacity}`;
  ctx.fill();

  // tharsheblows/red
  ctx.beginPath();
  ctx.moveTo(x + 367 * scale, 104 - scale * 98);
  ctx.bezierCurveTo(
    x + 367 * scale,
    104 - scale * 98,
    x + 285 * scale,
    104 - scale * 130,
    x + 283 * scale,
    104 - scale * 9
  );
  ctx.lineTo(x + 287 * scale, 104 - scale * 9);
  ctx.bezierCurveTo(
    x + 287 * scale,
    104 - scale * 9,
    x + 280 * scale,
    104 - scale * 115,
    x + 368 * scale,
    104 - scale * 98
  );
  ctx.lineTo(x + 367 * scale, 104 - scale * 98);
  ctx.closePath();
  ctx.fillStyle = `rgba(255, 0, 0, ${rainbowOpacity}`;
  ctx.fill();

  // tharsheblows/orange
  ctx.beginPath();
  ctx.moveTo(x + 369 * scale, 104 - scale * 98);
  ctx.bezierCurveTo(
    x + 369 * scale,
    104 - scale * 98,
    x + 289 * scale,
    104 - scale * 127,
    x + 287 * scale,
    104 - scale * 9
  );
  ctx.lineTo(x + 291 * scale, 104 - scale * 9);
  ctx.bezierCurveTo(
    x + 291 * scale,
    104 - scale * 9,
    x + 287 * scale,
    104 - scale * 114,
    x + 369 * scale,
    104 - scale * 97
  );
  ctx.lineTo(x + 369 * scale, 104 - scale * 98);
  ctx.closePath();
  ctx.fillStyle = `rgba(255, 164, 0, ${rainbowOpacity}`;
  ctx.fill();

  // tharsheblows/yellow
  ctx.beginPath();
  ctx.moveTo(x + 370 * scale, 104 - scale * 97);
  ctx.bezierCurveTo(
    x + 370 * scale,
    104 - scale * 97,
    x + 293 * scale,
    104 - scale * 123,
    x + 291 * scale,
    104 - scale * 9
  );
  ctx.lineTo(x + 295 * scale, 104 - scale * 9);
  ctx.bezierCurveTo(
    x + 295 * scale,
    104 - scale * 9,
    x + 292 * scale,
    104 - scale * 114,
    x + 371 * scale,
    104 - scale * 97
  );
  ctx.lineTo(x + 370 * scale, 104 - scale * 97);
  ctx.closePath();
  ctx.fillStyle = `rgba(255, 255, 0, ${rainbowOpacity}`;
  ctx.fill();

  // tharsheblows/green
  ctx.beginPath();
  ctx.moveTo(x + 372 * scale, 104 - scale * 97);
  ctx.bezierCurveTo(
    x + 372 * scale,
    104 - scale * 97,
    x + 296 * scale,
    104 - scale * 120,
    x + 295 * scale,
    104 - scale * 9
  );
  ctx.lineTo(x + 298 * scale, 104 - scale * 9);
  ctx.bezierCurveTo(
    x + 298 * scale,
    104 - scale * 9,
    x + 292 * scale,
    104 - scale * 110,
    x + 372 * scale,
    104 - scale * 97
  );
  ctx.lineTo(x + 372 * scale, 104 - scale * 97);
  ctx.closePath();
  ctx.fillStyle = `rgba(0, 255, 0, ${rainbowOpacity}`;
  ctx.fill();

  // tharsheblows/blue
  ctx.beginPath();
  ctx.moveTo(x + 372 * scale, 104 - scale * 97);
  ctx.bezierCurveTo(
    x + 372 * scale,
    104 - scale * 97,
    x + 299 * scale,
    104 - scale * 116,
    x + 297 * scale,
    104 - scale * 9
  );
  ctx.lineTo(x + 301 * scale, 104 - scale * 9);
  ctx.bezierCurveTo(
    x + 301 * scale,
    104 - scale * 9,
    x + 294 * scale,
    104 - scale * 103,
    x + 373 * scale,
    104 - scale * 96
  );
  ctx.lineTo(x + 372 * scale, 104 - scale * 97);
  ctx.closePath();
  ctx.fillStyle = `rgba(0, 0, 255, ${rainbowOpacity}`;
  ctx.fill();

  // tharsheblows/indigo
  ctx.beginPath();
  ctx.moveTo(x + 374 * scale, 104 - scale * 96);
  ctx.bezierCurveTo(
    x + 374 * scale,
    104 - scale * 96,
    x + 299 * scale,
    104 - scale * 110,
    x + 301 * scale,
    104 - scale * 9
  );
  ctx.lineTo(x + 304 * scale, 104 - scale * 9);
  ctx.bezierCurveTo(
    x + 304 * scale,
    104 - scale * 9,
    x + 300 * scale,
    104 - scale * 102,
    x + 374 * scale,
    104 - scale * 96
  );
  ctx.lineTo(x + 374 * scale, 104 - scale * 96);
  ctx.closePath();
  ctx.fillStyle = `rgba(74, 0, 129, ${rainbowOpacity}`;
  ctx.fill();

  // tharsheblows/violet
  ctx.beginPath();
  ctx.moveTo(x + 375 * scale, 104 - scale * 96);
  ctx.bezierCurveTo(
    x + 375 * scale,
    104 - scale * 96,
    x + 306 * scale,
    104 - scale * 109,
    x + 304 * scale,
    104 - scale * 9
  );
  ctx.lineTo(x + 307 * scale, 104 - scale * 9);
  ctx.bezierCurveTo(
    x + 307 * scale,
    104 - scale * 9,
    x + 305 * scale,
    104 - scale * 98,
    x + 375 * scale,
    104 - scale * 95
  );
  ctx.lineTo(x + 375 * scale, 104 - scale * 96);
  ctx.closePath();
  ctx.fillStyle = `rgba(255, 0, 255, ${rainbowOpacity}`;
  ctx.fill();
  ctx.restore();
}

  module.exports = tharSheBlows;