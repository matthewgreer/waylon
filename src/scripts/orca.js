// import colors from "../styles/_colors.scss";
import Enemy from "./enemy";

// Orca model is x:932, y: 463 at 1:1 scale

class Orca extends Enemy {
  constructor(options){
    super(options);
    this.hSize = 932;
    this.vSize = 463;
    this.name = "Orca";
  };

  draw = (ctx) => {
    const x = this.position[0];
    const y = this.position[1];
    const scale = this.sizeScale;

    // Orca Right Pectoral Fin (gray)
    ctx.beginPath();
    ctx.moveTo(x + 239 * scale, y + 347 * scale);
    ctx.bezierCurveTo(
      x + 239 * scale,
      y + 347 * scale,
      x + 270 * scale,
      y + 349 * scale,
      x + 288 * scale,
      y + 357 * scale
    );
    ctx.bezierCurveTo(
      x + 300 * scale,
      y + 369 * scale,
      x + 307 * scale,
      y + 412 * scale,
      x + 292 * scale,
      y + 412 * scale
    );
    ctx.bezierCurveTo(
      x + 283 * scale,
      y + 415 * scale,
      x + 261 * scale,
      y + 401 * scale,
      x + 254 * scale,
      y + 399 * scale
    );
    ctx.bezierCurveTo(
      x + 251 * scale,
      y + 377 * scale,
      x + 239 * scale,
      y + 347 * scale,
      x + 239 * scale,
      y + 347 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.medGray;
    ctx.fillStyle = "rgba(128, 128, 128, 1.0)";
    ctx.fill();
    ctx.lineWidth = 2;
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Inner Jaw
    ctx.beginPath();
    ctx.moveTo(x + 88 * scale, y + 218 * scale);
    ctx.bezierCurveTo(
      x + 88 * scale,
      y + 218 * scale,
      x + 84 * scale,
      y + 246 * scale,
      x + 76 * scale,
      y + 250 * scale
    );
    ctx.bezierCurveTo(
      x + 68 * scale,
      y + 253 * scale,
      x + 63 * scale,
      y + 266 * scale,
      x + 9 * scale,
      y + 284 * scale
    );
    ctx.bezierCurveTo(
      x + 7 * scale,
      y + 284 * scale,
      x + 38 * scale,
      y + 264 * scale,
      x + 63 * scale,
      y + 254 * scale
    );
    ctx.bezierCurveTo(
      x + 89 * scale,
      y + 244 * scale,
      x + 100 * scale,
      y + 235 * scale,
      x + 100 * scale,
      y + 235 * scale
    );
//    ctx.fillStyle = colors.orcaMouthPink;
    ctx.fillStyle = "rgba(251, 223, 223, 1.0)";
    ctx.fill();
    ctx.lineWidth = 2;
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Teeth Right Side

    // Orca Right Tooth #1
    ctx.beginPath();
    ctx.moveTo(x + 31 * scale, y + 270 * scale);
    ctx.bezierCurveTo(
      x + 31 * scale,
      y + 273 * scale,
      x + 35 * scale,
      y + 271 * scale,
      x + 35 * scale,
      y + 270 * scale
    );
    ctx.bezierCurveTo(
      x + 36 * scale,
      y + 269 * scale,
      x + 34 * scale,
      y + 266 * scale,
      x + 33 * scale,
      y + 264 * scale
    );
    ctx.bezierCurveTo(
      x + 33 * scale,
      y + 263 * scale,
      x + 31 * scale,
      y + 269 * scale,
      x + 31 * scale,
      y + 270 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Right Tooth #2
    ctx.beginPath();
    ctx.moveTo(x + 36 * scale, y + 268 * scale);
    ctx.bezierCurveTo(
      x + 36 * scale,
      y + 270 * scale,
      x + 39 * scale,
      y + 269 * scale,
      x + 40 * scale,
      y + 267 * scale
    );
    ctx.bezierCurveTo(
      x + 40 * scale,
      y + 267 * scale,
      x + 39 * scale,
      y + 264 * scale,
      x + 38 * scale,
      y + 262 * scale
    );
    ctx.bezierCurveTo(
      x + 38 * scale,
      y + 261 * scale,
      x + 36 * scale,
      y + 267 * scale,
      x + 36 * scale,
      y + 268 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Right Tooth #3
    ctx.beginPath();
    ctx.moveTo(x + 40 * scale, y + 266 * scale);
    ctx.bezierCurveTo(
      x + 41 * scale,
      y + 268 * scale,
      x + 44 * scale,
      y + 266 * scale,
      x + 44 * scale,
      y + 264 * scale
    );
    ctx.bezierCurveTo(
      x + 45 * scale,
      y + 263 * scale,
      x + 43 * scale,
      y + 261 * scale,
      x + 42 * scale,
      y + 259 * scale
    );
    ctx.bezierCurveTo(
      x + 41 * scale,
      y + 258 * scale,
      x + 40 * scale,
      y + 264 * scale,
      x + 40 * scale,
      y + 266 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Right Tooth #4
    ctx.beginPath();
    ctx.moveTo(x + 45 * scale, y + 263 * scale);
    ctx.bezierCurveTo(
      x + 45 * scale,
      y + 265 * scale,
      x + 49 * scale,
      y + 264 * scale,
      x + 49 * scale,
      y + 262 * scale
    );
    ctx.bezierCurveTo(
      x + 50 * scale,
      y + 261 * scale,
      x + 48 * scale,
      y + 259 * scale,
      x + 47 * scale,
      y + 257 * scale
    );
    ctx.bezierCurveTo(
      x + 47 * scale,
      y + 256 * scale,
      x + 45 * scale,
      y + 261 * scale,
      x + 45 * scale,
      y + 263 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Right Tooth #5
    ctx.beginPath();
    ctx.moveTo(x + 50 * scale, y + 260 * scale);
    ctx.bezierCurveTo(
      x + 50 * scale,
      y + 262 * scale,
      x + 53 * scale,
      y + 260 * scale,
      x + 54 * scale,
      y + 259 * scale
    );
    ctx.bezierCurveTo(
      x + 54 * scale,
      y + 258 * scale,
      x + 52 * scale,
      y + 256 * scale,
      x + 52 * scale,
      y + 253 * scale
    );
    ctx.bezierCurveTo(
      x + 51 * scale,
      y + 252 * scale,
      x + 49 * scale,
      y + 258 * scale,
      x + 50 * scale,
      y + 260 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Right Tooth #6
    ctx.beginPath();
    ctx.moveTo(x + 55 * scale, y + 258 * scale);
    ctx.bezierCurveTo(
      x + 55 * scale,
      y + 260 * scale,
      x + 58 * scale,
      y + 258 * scale,
      x + 59 * scale,
      y + 257 * scale
    );
    ctx.bezierCurveTo(
      x + 59 * scale,
      y + 256 * scale,
      x + 58 * scale,
      y + 254 * scale,
      x + 57 * scale,
      y + 251 * scale
    );
    ctx.bezierCurveTo(
      x + 57 * scale,
      y + 250 * scale,
      x + 55 * scale,
      y + 256 * scale,
      x + 55 * scale,
      y + 258 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Right Tooth #7
    ctx.beginPath();
    ctx.moveTo(x + 63 * scale, y + 256 * scale);
    ctx.bezierCurveTo(
      x + 63 * scale,
      y + 258 * scale,
      x + 66 * scale,
      y + 256 * scale,
      x + 67 * scale,
      y + 255 * scale
    );
    ctx.bezierCurveTo(
      x + 67 * scale,
      y + 254 * scale,
      x + 65 * scale,
      y + 252 * scale,
      x + 65 * scale,
      y + 249 * scale
    );
    ctx.bezierCurveTo(
      x + 64 * scale,
      y + 248 * scale,
      x + 62 * scale,
      y + 254 * scale,
      x + 63 * scale,
      y + 256 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Right Tooth #8
    ctx.beginPath();
    ctx.moveTo(x + 72 * scale, y + 254 * scale);
    ctx.bezierCurveTo(
      x + 72 * scale,
      y + 256 * scale,
      x + 75 * scale,
      y + 254 * scale,
      x + 76 * scale,
      y + 253 * scale
    );
    ctx.bezierCurveTo(
      x + 76 * scale,
      y + 252 * scale,
      x + 74 * scale,
      y + 249 * scale,
      x + 74 * scale,
      y + 247 * scale
    );
    ctx.bezierCurveTo(
      x + 73 * scale,
      y + 246 * scale,
      x + 71 * scale,
      y + 252 * scale,
      x + 72 * scale,
      y + 254 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Teeth Left Side

    // Orca Left Tooth #1

    ctx.beginPath();
    ctx.moveTo(x + 20 * scale, y + 280 * scale);
    ctx.bezierCurveTo(
      x + 20 * scale,
      y + 283 * scale,
      x + 25 * scale,
      y + 280 * scale,
      x + 26 * scale,
      y + 278 * scale
    );
    ctx.bezierCurveTo(
      x + 27 * scale,
      y + 277 * scale,
      x + 24 * scale,
      y + 273 * scale,
      x + 23 * scale,
      y + 269 * scale
    );
    ctx.bezierCurveTo(
      x + 22 * scale,
      y + 268 * scale,
      x + 19 * scale,
      y + 277 * scale,
      x + 20 * scale,
      y + 280 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Left Tooth #2
    ctx.beginPath();
    ctx.moveTo(x + 27 * scale, y + 276 * scale);
    ctx.bezierCurveTo(
      x + 28 * scale,
      y + 279 * scale,
      x + 33 * scale,
      y + 276 * scale,
      x + 34 * scale,
      y + 274 * scale
    );
    ctx.bezierCurveTo(
      x + 35 * scale,
      y + 273 * scale,
      x + 32 * scale,
      y + 269 * scale,
      x + 31 * scale,
      y + 265 * scale
    );
    ctx.bezierCurveTo(
      x + 30 * scale,
      y + 264 * scale,
      x + 27 * scale,
      y + 273 * scale,
      x + 27 * scale,
      y + 276 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Left Tooth #3
    ctx.beginPath();
    ctx.moveTo(x + 35 * scale, y + 274 * scale);
    ctx.bezierCurveTo(
      x + 36 * scale,
      y + 277 * scale,
      x + 41 * scale,
      y + 275 * scale,
      x + 42 * scale,
      y + 273 * scale
    );
    ctx.bezierCurveTo(
      x + 43 * scale,
      y + 271 * scale,
      x + 40 * scale,
      y + 267 * scale,
      x + 39 * scale,
      y + 263 * scale
    );
    ctx.bezierCurveTo(
      x + 38 * scale,
      y + 262 * scale,
      x + 35 * scale,
      y + 271 * scale,
      x + 35 * scale,
      y + 274 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Left Tooth #4
    ctx.beginPath();
    ctx.moveTo(x + 42 * scale, y + 269 * scale);
    ctx.bezierCurveTo(
      x + 43 * scale,
      y + 273 * scale,
      x + 48 * scale,
      y + 270 * scale,
      x + 49 * scale,
      y + 268 * scale
    );
    ctx.bezierCurveTo(
      x + 50 * scale,
      y + 267 * scale,
      x + 47 * scale,
      y + 263 * scale,
      x + 46 * scale,
      y + 259 * scale
    );
    ctx.bezierCurveTo(
      x + 45 * scale,
      y + 257 * scale,
      x + 42 * scale,
      y + 267 * scale,
      x + 42 * scale,
      y + 269 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Left Tooth #5
    ctx.beginPath();
    ctx.moveTo(x + 51 * scale, y + 267 * scale);
    ctx.bezierCurveTo(
      x + 52 * scale,
      y + 270 * scale,
      x + 57 * scale,
      y + 267 * scale,
      x + 58 * scale,
      y + 265 * scale
    );
    ctx.bezierCurveTo(
      x + 58 * scale,
      y + 263 * scale,
      x + 55 * scale,
      y + 260 * scale,
      x + 53 * scale,
      y + 256 * scale
    );
    ctx.bezierCurveTo(
      x + 53 * scale,
      y + 254 * scale,
      x + 50 * scale,
      y + 264 * scale,
      x + 51 * scale,
      y + 267 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Left Tooth #6
    ctx.beginPath();
    ctx.moveTo(x + 58 * scale, y + 262 * scale);
    ctx.bezierCurveTo(
      x + 59 * scale,
      y + 265 * scale,
      x + 64 * scale,
      y + 263 * scale,
      x + 65 * scale,
      y + 261 * scale
    );
    ctx.bezierCurveTo(
      x + 66 * scale,
      y + 259 * scale,
      x + 63 * scale,
      y + 255 * scale,
      x + 61 * scale,
      y + 251 * scale
    );
    ctx.bezierCurveTo(
      x + 61 * scale,
      y + 250 * scale,
      x + 58 * scale,
      y + 259 * scale,
      x + 58 * scale,
      y + 262 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Left Tooth #7
    ctx.beginPath();
    ctx.moveTo(x + 66 * scale, y + 260 * scale);
    ctx.bezierCurveTo(
      x + 66 * scale,
      y + 263 * scale,
      x + 71 * scale,
      y + 261 * scale,
      x + 73 * scale,
      y + 258 * scale
    );
    ctx.bezierCurveTo(
      x + 73 * scale,
      y + 257 * scale,
      x + 70 * scale,
      y + 253 * scale,
      x + 69 * scale,
      y + 249 * scale
    );
    ctx.bezierCurveTo(
      x + 69 * scale,
      y + 248 * scale,
      x + 65 * scale,
      y + 257 * scale,
      x + 66 * scale,
      y + 260 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Eye - Sclera
    ctx.beginPath();
    ctx.moveTo(x + 99 * scale, y + 227 * scale);
    ctx.bezierCurveTo(
      x + 95 * scale,
      y + 228 * scale,
      x + 91 * scale,
      y + 223 * scale,
      x + 90 * scale,
      y + 220 * scale
    );
    ctx.bezierCurveTo(
      x + 90 * scale,
      y + 217 * scale,
      x + 113 * scale,
      y + 213 * scale,
      x + 111 * scale,
      y + 216 * scale
    );
    ctx.bezierCurveTo(
      x + 107 * scale,
      y + 225 * scale,
      x + 104 * scale,
      y + 226 * scale,
      x + 99 * scale,
      y + 227 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.orcaEyeWhite;
    ctx.fillStyle = "rgba(255, 255, 221, 1.0)";
    ctx.fill();

    // Orca Eye - Iris
    ctx.beginPath();
    ctx.moveTo(x + 108 * scale, y + 221 * scale);
    ctx.bezierCurveTo(
      x + 108 * scale,
      y + 226 * scale,
      x + 104 * scale,
      y + 229 * scale,
      x + 99 * scale,
      y + 229 * scale
    );
    ctx.bezierCurveTo(
      x + 94 * scale,
      y + 229 * scale,
      x + 90 * scale,
      y + 226 * scale,
      x + 90 * scale,
      y + 221 * scale
    );
    ctx.bezierCurveTo(
      x + 90 * scale,
      y + 216 * scale,
      x + 94 * scale,
      y + 212 * scale,
      x + 99 * scale,
      y + 212 * scale
    );
    ctx.bezierCurveTo(
      x + 104 * scale,
      y + 212 * scale,
      x + 108 * scale,
      y + 216 * scale,
      x + 108 * scale,
      y + 221 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.orcaEyeDkGray;
    ctx.fillStyle = "rgba(57, 57, 57, 1.0)";
    ctx.fill();
    ctx.lineWidth = 1;
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Eye - Pupil
    ctx.beginPath();
    ctx.moveTo(x + 102 * scale, y + 221 * scale);
    ctx.bezierCurveTo(
      x + 102 * scale,
      y + 224 * scale,
      x + 100 * scale,
      y + 226 * scale,
      x + 97 * scale,
      y + 226 * scale
    );
    ctx.bezierCurveTo(
      x + 94 * scale,
      y + 226 * scale,
      x + 91 * scale,
      y + 224 * scale,
      x + 91 * scale,
      y + 221 * scale
    );
    ctx.bezierCurveTo(
      x + 91 * scale,
      y + 217 * scale,
      x + 94 * scale,
      y + 215 * scale,
      x + 97 * scale,
      y + 215 * scale
    );
    ctx.bezierCurveTo(
      x + 100 * scale,
      y + 215 * scale,
      x + 102 * scale,
      y + 217 * scale,
      x + 102 * scale,
      y + 221 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonBlack;
    ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
    ctx.fill();
    ctx.lineWidth = 1;
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Eye - Shine
    ctx.beginPath();
    ctx.moveTo(x + 96 * scale, y + 226 * scale);
    ctx.bezierCurveTo(
      x + 96 * scale,
      y + 226 * scale,
      x + 96 * scale,
      y + 226 * scale,
      x + 95 * scale,
      y + 226 * scale
    );
    ctx.bezierCurveTo(
      x + 95 * scale,
      y + 226 * scale,
      x + 94 * scale,
      y + 226 * scale,
      x + 94 * scale,
      y + 226 * scale
    );
    ctx.bezierCurveTo(
      x + 94 * scale,
      y + 225 * scale,
      x + 95 * scale,
      y + 225 * scale,
      x + 95 * scale,
      y + 225 * scale
    );
    ctx.bezierCurveTo(
      x + 96 * scale,
      y + 225 * scale,
      x + 96 * scale,
      y + 226 * scale,
      x + 96 * scale,
      y + 226 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.eyeShine;
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x + 103 * scale, y + 217 * scale);
    ctx.bezierCurveTo(
      x + 103 * scale,
      y + 217 * scale,
      x + 102 * scale,
      y + 218 * scale,
      x + 101 * scale,
      y + 217 * scale
    );
    ctx.bezierCurveTo(
      x + 100 * scale,
      y + 217 * scale,
      x + 100 * scale,
      y + 216 * scale,
      x + 100 * scale,
      y + 216 * scale
    );
    ctx.bezierCurveTo(
      x + 100 * scale,
      y + 215 * scale,
      x + 101 * scale,
      y + 215 * scale,
      x + 102 * scale,
      y + 215 * scale
    );
    ctx.bezierCurveTo(
      x + 103 * scale,
      y + 216 * scale,
      x + 103 * scale,
      y + 216 * scale,
      x + 103 * scale,
      y + 217 * scale
    );
    ctx.closePath();
    ctx.fill();

    // Orca - Body (black)
    ctx.beginPath();
    ctx.moveTo(x + 927 * scale, y + 267 * scale);
    ctx.bezierCurveTo(
      x + 900 * scale,
      y + 252 * scale,
      x + 882 * scale,
      y + 208 * scale,
      x + 882 * scale,
      y + 208 * scale
    );
    ctx.bezierCurveTo(
      x + 882 * scale,
      y + 208 * scale,
      x + 879 * scale,
      y + 205 * scale,
      x + 876 * scale,
      y + 205 * scale
    );
    ctx.bezierCurveTo(
      x + 873 * scale,
      y + 205 * scale,
      x + 881 * scale,
      y + 205 * scale,
      x + 882 * scale,
      y + 202 * scale
    );
    ctx.bezierCurveTo(
      x + 883 * scale,
      y + 199 * scale,
      x + 874 * scale,
      y + 198 * scale,
      x + 885 * scale,
      y + 191 * scale
    );
    ctx.bezierCurveTo(
      x + 887 * scale,
      y + 190 * scale,
      x + 884 * scale,
      y + 189 * scale,
      x + 883 * scale,
      y + 189 * scale
    );
    ctx.bezierCurveTo(
      x + 870 * scale,
      y + 184 * scale,
      x + 829 * scale,
      y + 187 * scale,
      x + 829 * scale,
      y + 187 * scale
    );
    ctx.bezierCurveTo(
      x + 790 * scale,
      y + 154 * scale,
      x + 713 * scale,
      y + 137 * scale,
      x + 648 * scale,
      y + 148 * scale
    );
    ctx.bezierCurveTo(
      x + 621 * scale,
      y + 148 * scale,
      x + 514 * scale,
      y + 181 * scale,
      x + 467 * scale,
      y + 172 * scale
    );
    ctx.bezierCurveTo(
      x + 444 * scale,
      y + 151 * scale,
      x + 440 * scale,
      y + 98 * scale,
      x + 431 * scale,
      y + 51 * scale
    );
    ctx.bezierCurveTo(
      x + 434 * scale,
      y + 24 * scale,
      x + 434 * scale,
      y + 0 * scale,
      x + 434 * scale,
      y + 0 * scale
    );
    ctx.bezierCurveTo(
      x + 434 * scale,
      y + 0 * scale,
      x + 423 * scale,
      y - 3 * scale,
      x + 411 * scale,
      y + 21 * scale
    );
    ctx.bezierCurveTo(
      x + 390 * scale,
      y + 59 * scale,
      x + 369 * scale,
      y + 172 * scale,
      x + 348 * scale,
      y + 175 * scale
    );
    ctx.bezierCurveTo(
      x + 310 * scale,
      y + 178 * scale,
      x + 238 * scale,
      y + 178 * scale,
      x + 220 * scale,
      y + 175 * scale
    );
    ctx.bezierCurveTo(
      x + 195 * scale,
      y + 171 * scale,
      x + 179 * scale,
      y + 159 * scale,
      x + 130 * scale,
      y + 157 * scale
    );
    ctx.bezierCurveTo(
      x + 112 * scale,
      y + 156 * scale,
      x + 67 * scale,
      y + 154 * scale,
      x + 47 * scale,
      y + 166 * scale
    );
    ctx.bezierCurveTo(
      x + 41 * scale,
      y + 172 * scale,
      x + 16 * scale,
      y + 162 * scale,
      x + 1 * scale,
      y + 184 * scale
    );
    ctx.bezierCurveTo(
      x - 8 * scale,
      y + 197 * scale,
      x + 33 * scale,
      y + 208 * scale,
      x + 41 * scale,
      y + 211 * scale
    );
    ctx.bezierCurveTo(
      x + 108 * scale,
      y + 232 * scale,
      x + 72 * scale,
      y + 196 * scale,
      x + 156 * scale,
      y + 320 * scale
    );
    ctx.bezierCurveTo(
      x + 159 * scale,
      y + 320 * scale,
      x + 156 * scale,
      y + 329 * scale,
      x + 159 * scale,
      y + 344 * scale
    );
    ctx.bezierCurveTo(
      x + 161 * scale,
      y + 377 * scale,
      x + 165 * scale,
      y + 389 * scale,
      x + 179 * scale,
      y + 412 * scale
    );
    ctx.bezierCurveTo(
      x + 200 * scale,
      y + 448 * scale,
      x + 221 * scale,
      y + 463 * scale,
      x + 233 * scale,
      y + 463 * scale
    );
    ctx.bezierCurveTo(
      x + 280 * scale,
      y + 445 * scale,
      x + 242 * scale,
      y + 356 * scale,
      x + 239 * scale,
      y + 347 * scale
    );
    ctx.bezierCurveTo(
      x + 446 * scale,
      y + 406 * scale,
      x + 624 * scale,
      y + 270 * scale,
      x + 642 * scale,
      y + 267 * scale
    );
    ctx.bezierCurveTo(
      x + 654 * scale,
      y + 261 * scale,
      x + 698 * scale,
      y + 237 * scale,
      x + 731 * scale,
      y + 225 * scale
    );
    ctx.bezierCurveTo(
      x + 772 * scale,
      y + 217 * scale,
      x + 817 * scale,
      y + 210 * scale,
      x + 826 * scale,
      y + 214 * scale
    );
    ctx.bezierCurveTo(
      x + 844 * scale,
      y + 230 * scale,
      x + 870 * scale,
      y + 247 * scale,
      x + 891 * scale,
      y + 258 * scale
    );
    ctx.bezierCurveTo(
      x + 921 * scale,
      y + 275 * scale,
      x + 942 * scale,
      y + 273 * scale,
      x + 927 * scale,
      y + 267 * scale
    );
    ctx.closePath();
    ctx.moveTo(x + 99 * scale, y + 227 * scale);
    ctx.bezierCurveTo(
      x + 95 * scale,
      y + 228 * scale,
      x + 91 * scale,
      y + 223 * scale,
      x + 90 * scale,
      y + 220 * scale
    );
    ctx.bezierCurveTo(
      x + 90 * scale,
      y + 217 * scale,
      x + 113 * scale,
      y + 213 * scale,
      x + 111 * scale,
      y + 216 * scale
    );
    ctx.bezierCurveTo(
      x + 107 * scale,
      y + 225 * scale,
      x + 104 * scale,
      y + 226 * scale,
      x + 99 * scale,
      y + 227 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonBlack;
    ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
    ctx.fill();

    // Orca Belly (white)
    ctx.beginPath();
    ctx.moveTo(x + 233 * scale, y + 338 * scale);
    ctx.lineTo(x + 239 * scale, y + 347 * scale);
    ctx.bezierCurveTo(
      x + 239 * scale,
      y + 347 * scale,
      x + 393 * scale,
      y + 389 * scale,
      x + 516 * scale,
      y + 329 * scale
    );
    ctx.bezierCurveTo(
      x + 545 * scale,
      y + 315 * scale,
      x + 590 * scale,
      y + 298 * scale,
      x + 653 * scale,
      y + 261 * scale
    );
    ctx.bezierCurveTo(
      x + 592 * scale,
      y + 282 * scale,
      x + 598 * scale,
      y + 288 * scale,
      x + 526 * scale,
      y + 317 * scale
    );
    ctx.bezierCurveTo(
      x + 513 * scale,
      y + 317 * scale,
      x + 526 * scale,
      y + 303 * scale,
      x + 568 * scale,
      y + 282 * scale
    );
    ctx.bezierCurveTo(
      x + 627 * scale,
      y + 255 * scale,
      x + 664 * scale,
      y + 216 * scale,
      x + 589 * scale,
      y + 234 * scale
    );
    ctx.bezierCurveTo(
      x + 460 * scale,
      y + 265 * scale,
      x + 502 * scale,
      y + 305 * scale,
      x + 455 * scale,
      y + 338 * scale
    );
    ctx.bezierCurveTo(
      x + 362 * scale,
      y + 387 * scale,
      x + 215 * scale,
      y + 323 * scale,
      x + 233 * scale,
      y + 338 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
    ctx.lineWidth = 3;
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Chin (white)
    ctx.beginPath();
    ctx.moveTo(x + 26 * scale, y + 295 * scale);
    ctx.bezierCurveTo(
      x - 1 * scale,
      y + 287 * scale,
      x + 2 * scale,
      y + 284 * scale,
      x + 28 * scale,
      y + 277 * scale
    );
    ctx.bezierCurveTo(
      x + 46 * scale,
      y + 272 * scale,
      x + 68 * scale,
      y + 257 * scale,
      x + 82 * scale,
      y + 244 * scale
    );
    ctx.bezierCurveTo(
      x + 90 * scale,
      y + 237 * scale,
      x + 89 * scale,
      y + 236 * scale,
      x + 97 * scale,
      y + 231 * scale
    );
    ctx.bezierCurveTo(
      x + 109 * scale,
      y + 248 * scale,
      x + 108 * scale,
      y + 227 * scale,
      x + 115 * scale,
      y + 228 * scale
    );
    ctx.bezierCurveTo(
      x + 127 * scale,
      y + 231 * scale,
      x + 119 * scale,
      y + 234 * scale,
      x + 134 * scale,
      y + 237 * scale
    );
    ctx.bezierCurveTo(
      x + 154 * scale,
      y + 264 * scale,
      x + 169 * scale,
      y + 282 * scale,
      x + 172 * scale,
      y + 300 * scale
    );
    ctx.bezierCurveTo(
      x + 151 * scale,
      y + 300 * scale,
      x + 163 * scale,
      y + 315 * scale,
      x + 159 * scale,
      y + 319 * scale
    );
    ctx.bezierCurveTo(
      x + 113 * scale,
      y + 285 * scale,
      x + 88 * scale,
      y + 314 * scale,
      x + 26 * scale,
      y + 295 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();
    ctx.lineWidth = 3;
//    ctx.strokeStyle = colors.waylonBlack;
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    ctx.stroke();

    // Orca Eye Patch (white)
    ctx.beginPath();
    ctx.moveTo(x + 184 * scale, y + 220 * scale);
    ctx.bezierCurveTo(
      x + 169 * scale,
      y + 205 * scale,
      x + 128 * scale,
      y + 191 * scale,
      x + 107 * scale,
      y + 208 * scale
    );
    ctx.bezierCurveTo(
      x + 107 * scale,
      y + 211 * scale,
      x + 122 * scale,
      y + 214 * scale,
      x + 125 * scale,
      y + 220 * scale
    );
    ctx.bezierCurveTo(
      x + 128 * scale,
      y + 228 * scale,
      x + 197 * scale,
      y + 233 * scale,
      x + 184 * scale,
      y + 220 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.waylonWhite;
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    ctx.fill();

    // Orca Saddle (gray)
    ctx.beginPath();
    ctx.moveTo(x + 506 * scale, y + 178 * scale);
    ctx.bezierCurveTo(
      x + 482 * scale,
      y + 190 * scale,
      x + 473 * scale,
      y + 193 * scale,
      x + 461 * scale,
      y + 220 * scale
    );
    ctx.bezierCurveTo(
      x + 449 * scale,
      y + 246 * scale,
      x + 434 * scale,
      y + 264 * scale,
      x + 423 * scale,
      y + 258 * scale
    );
    ctx.bezierCurveTo(
      x + 426 * scale,
      y + 255 * scale,
      x + 444 * scale,
      y + 246 * scale,
      x + 414 * scale,
      y + 219 * scale
    );
    ctx.bezierCurveTo(
      x + 384 * scale,
      y + 193 * scale,
      x + 494 * scale,
      y + 166 * scale,
      x + 506 * scale,
      y + 178 * scale
    );
    ctx.closePath();
//    ctx.fillStyle = colors.medGray;
    ctx.fillStyle = "rgba(128, 128, 128, 1.0)";
    ctx.fill();
  };
};

export default Orca;