// import colors from "../styles/_colors.scss";
import TharSheBlows from "./thar_she_blows";

class Waylon{
  constructor(options) {
    this.game = options.game;
    this.freqAnalyzer = options.freqAnalyzer;
    this.position = options.position;
    this.sizeScale = options.sizeScale;
    this.hitBox = {
      frontX: 0,
      midFrX: 0,
      midRrX: 0,
      rearX: 0,
      dorsalY: 0,
      midY: 0,
      ventralY: 0
    }
    this.calculateHitBox();
    this.velocity = options.velocity;
    
    // NOTE: rotation in Canvas is disappointing, and can wreak havoc with my
    //   collision logic. Hopefully I can improve this in future updates.
    // 
    // this.centerOfRotation = [
    //   this.position[0] + this.sizeScale * 180,
    //   this.position[1] + this.sizeScale * 116
    // ]
    // this.currentRotation = 0;

    this.currentPitch = 0;
  };

  calculateHitBox = () => {
    // Waylon model is x:466, y:233 at 1:1 scale
    this.hitBox.frontX = this.position[0] + (this.sizeScale * 466);
    this.hitBox.midFrX = this.position[0] + (this.sizeScale * 365);
    this.hitBox.midRrX = this.position[0] + (this.sizeScale * 170);
    this.hitBox.rearX = this.position[0];
    this.hitBox.dorsalY = this.position[1];
    this.hitBox.midY = this.position[1] + (this.sizeScale * 100);
    this.hitBox.ventralY = this.position[1] + (this.sizeScale * 170);
  }

  move = (velocityScale) => {
    let newPitch = this.freqAnalyzer.outputTopFreq();
    let offsetY = this.velocity * velocityScale;
    
    if (newPitch > this.currentPitch) {
      this.position = [this.position[0], this.position[1] - offsetY];
      // level out near the surface
        // if (this.position[1] <= 75 && this.currentRotation < 0) {
        //   this.currentRotation++;
        // }
      // this.currentRotation--;
    } else if (newPitch < this.currentPitch) {
      this.position = [this.position[0], this.position[1] + offsetY];
      // level out at depth limit
      //   if (this.position[1] >= 675 && this.currentRotation > 0) {
      //     this.currentRotation--;
      //   } 
      // this.currentRotation++;
    }

    // set hard surface and depth limits
    if (this.position[1] <= 125) {this.position = [this.position[0], 110]}
    if (this.position[1] >= 749) {this.position = [this.position[0],  750]}
    
    // // set rotation limits
    // if (this.currentRotation <= -15) {this.currentRotation = -15}
    // if (this.currentRotation >= 30) {this.currentRotation = 30}

    // hold breath underwater -- always a good idea for mammals
    if (this.position[1] >= 115) { this.game.tharSheBlows = [] }

    // breathe when on the surface
    if (this.position[1] <= 115 && !this.game.tharSheBlows.length) {
      this.game.add(
        new TharSheBlows([this.position[0], 10], this.sizeScale)
      );
    }
    // update hitBox with current position
    this.calculateHitBox();
    return this.currentPitch = newPitch;
  };

  draw = (ctx) => {
    const x = this.position[0];
    const y = this.position[1];
    const scale = this.sizeScale;
    const scaledLineWidth = function (lineW) {
      return Math.floor(lineW * scale);
    };

    // ctx.translate(this.centerofRotation[0], this.centerOfRotation[1]);
    // ctx.rotate((this.currentRotation * Math.PI) / 180);
    // ctx.translate(-(this.centerofRotation[0]), -(this.centerOfRotation[1]));


    // Waylon Left Pectoral Fin
    ctx.beginPath();
    ctx.moveTo(x + 224 * scale, y + 209 * scale);
    ctx.bezierCurveTo(
      x + 224 * scale,
      y + 209 * scale,
      x + 210 * scale,
      y + 178 * scale,
      x + 231 * scale,
      y + 147 * scale
    );
    ctx.bezierCurveTo(
      x + 234 * scale,
      y + 143 * scale,
      x + 236 * scale,
      y + 135 * scale,
      x + 236 * scale,
      y + 135 * scale
    );
    ctx.bezierCurveTo(
      x + 236 * scale,
      y + 135 * scale,
      x + 239 * scale,
      y + 112 * scale,
      x + 258 * scale,
      y + 110 * scale
    );
    ctx.bezierCurveTo(
      x + 258 * scale,
      y + 102 * scale,
      x + 270 * scale,
      y + 83 * scale,
      x + 277 * scale,
      y + 88 * scale
    );
    ctx.bezierCurveTo(
      x + 285 * scale,
      y + 93 * scale,
      x + 290 * scale,
      y + 109 * scale,
      x + 287 * scale,
      y + 117 * scale
    );
    ctx.bezierCurveTo(
      x + 283 * scale,
      y + 126 * scale,
      x + 264 * scale,
      y + 149 * scale,
      x + 260 * scale,
      y + 151 * scale
    );
    ctx.bezierCurveTo(
      x + 256 * scale,
      y + 154 * scale,
      x + 249 * scale,
      y + 169 * scale,
      x + 249 * scale,
      y + 169 * scale
    );
    ctx.bezierCurveTo(
      x + 249 * scale,
      y + 169 * scale,
      x + 249 * scale,
      y + 174 * scale,
      x + 244 * scale,
      y + 175 * scale
    );
    ctx.bezierCurveTo(
      x + 239 * scale,
      y + 175 * scale,
      x + 235 * scale,
      y + 210 * scale,
      x + 224 * scale,
      y + 209 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(225, 228, 235, 1.0)";
    // ctx.fillStyle = colors.waylonDkrGray;
    ctx.fill();
    ctx.lineWidth = scaledLineWidth(3);
    ctx.stroke();

    // Waylon Body Blue Fill
    ctx.beginPath();
    ctx.moveTo(x + 388 * scale, y + 103 * scale);
    ctx.bezierCurveTo(
      x + 374 * scale,
      y + 106 * scale,
      x + 354 * scale,
      y + 114 * scale,
      x + 336 * scale,
      y + 134 * scale
    );
    ctx.bezierCurveTo(
      x + 305 * scale,
      y + 171 * scale,
      x + 207 * scale,
      y + 176 * scale,
      x + 183 * scale,
      y + 171 * scale
    );
    ctx.bezierCurveTo(
      x + 154 * scale,
      y + 165 * scale,
      x + 119 * scale,
      y + 155 * scale,
      x + 70 * scale,
      y + 138 * scale
    );
    ctx.bezierCurveTo(
      x + 69 * scale,
      y + 137 * scale,
      x + 68 * scale,
      y + 137 * scale,
      x + 68 * scale,
      y + 138 * scale
    );
    ctx.bezierCurveTo(
      x + 64 * scale,
      y + 142 * scale,
      x + 58 * scale,
      y + 142 * scale,
      x + 56 * scale,
      y + 141 * scale
    );
    ctx.bezierCurveTo(
      x + 55 * scale,
      y + 141 * scale,
      x + 54 * scale,
      y + 141 * scale,
      x + 54 * scale,
      y + 142 * scale
    );
    ctx.bezierCurveTo(
      x + 49 * scale,
      y + 148 * scale,
      x + 17 * scale,
      y + 183 * scale,
      x + 2 * scale,
      y + 159 * scale
    );
    ctx.bezierCurveTo(
      x + 2 * scale,
      y + 159 * scale,
      x + 16 * scale,
      y + 148 * scale,
      x + 16 * scale,
      y + 143 * scale
    );
    ctx.bezierCurveTo(
      x + 15 * scale,
      y + 133 * scale,
      x + 23 * scale,
      y + 129 * scale,
      x + 26 * scale,
      y + 127 * scale
    );
    ctx.bezierCurveTo(
      x + 34 * scale,
      y + 124 * scale,
      x + 23 * scale,
      y + 118 * scale,
      x + 35 * scale,
      y + 112 * scale
    );
    ctx.bezierCurveTo(
      x + 36 * scale,
      y + 112 * scale,
      x + 36 * scale,
      y + 110 * scale,
      x + 37 * scale,
      y + 110 * scale
    );
    ctx.bezierCurveTo(
      x + 42 * scale,
      y + 111 * scale,
      x + 39 * scale,
      y + 110 * scale,
      x + 38 * scale,
      y + 109 * scale
    );
    ctx.bezierCurveTo(
      x + 37 * scale,
      y + 109 * scale,
      x + 37 * scale,
      y + 109 * scale,
      x + 37 * scale,
      y + 109 * scale
    );
    ctx.bezierCurveTo(
      x + 40 * scale,
      y + 107 * scale,
      x + 33 * scale,
      y + 104 * scale,
      x + 45 * scale,
      y + 98 * scale
    );
    ctx.bezierCurveTo(
      x + 43 * scale,
      y + 95 * scale,
      x + 45 * scale,
      y + 93 * scale,
      x + 50 * scale,
      y + 90 * scale
    );
    ctx.bezierCurveTo(
      x + 46 * scale,
      y + 87 * scale,
      x + 54 * scale,
      y + 84 * scale,
      x + 51 * scale,
      y + 82 * scale
    );
    ctx.bezierCurveTo(
      x + 53 * scale,
      y + 80 * scale,
      x + 69 * scale,
      y + 97 * scale,
      x + 68 * scale,
      y + 109 * scale
    );
    ctx.bezierCurveTo(
      x + 57 * scale,
      y + 113 * scale,
      x + 57 * scale,
      y + 113 * scale,
      x + 57 * scale,
      y + 113 * scale
    );
    ctx.bezierCurveTo(
      x + 68 * scale,
      y + 108 * scale,
      x + 99 * scale,
      y + 103 * scale,
      x + 117 * scale,
      y + 85 * scale
    );
    ctx.bezierCurveTo(
      x + 116 * scale,
      y + 81 * scale,
      x + 116 * scale,
      y + 80 * scale,
      x + 121 * scale,
      y + 77 * scale
    );
    ctx.bezierCurveTo(
      x + 115 * scale,
      y + 64 * scale,
      x + 125 * scale,
      y + 61 * scale,
      x + 139 * scale,
      y + 68 * scale
    );
    ctx.bezierCurveTo(
      x + 177 * scale,
      y + 26 * scale,
      x + 231 * scale,
      y + 21 * scale,
      x + 286 * scale,
      y + 12 * scale
    );
    ctx.bezierCurveTo(
      x + 286 * scale,
      y + 12 * scale,
      x + 286 * scale,
      y + 12 * scale,
      x + 286 * scale,
      y + 12 * scale
    );
    ctx.bezierCurveTo(
      x + 309 * scale,
      y,
      x + 329 * scale,
      y - 1 * scale,
      x + 360 * scale,
      y + 13 * scale
    );
    ctx.bezierCurveTo(
      x + 363 * scale,
      y + 12 * scale,
      x + 435 * scale,
      y + 21 * scale,
      x + 439 * scale,
      y + 24 * scale
    );
    ctx.bezierCurveTo(
      x + 447 * scale,
      y + 24 * scale,
      x + 450 * scale,
      y + 26 * scale,
      x + 448 * scale,
      y + 33 * scale
    );
    ctx.bezierCurveTo(
      x + 448 * scale,
      y + 33 * scale,
      x + 449 * scale,
      y + 34 * scale,
      x + 449 * scale,
      y + 34 * scale
    );
    ctx.bezierCurveTo(
      x + 453 * scale,
      y + 35 * scale,
      x + 465 * scale,
      y + 41 * scale,
      x + 462 * scale,
      y + 48 * scale
    );
    ctx.bezierCurveTo(
      x + 459 * scale,
      y + 57 * scale,
      x + 457 * scale,
      y + 49 * scale,
      x + 461 * scale,
      y + 60 * scale
    );
    ctx.bezierCurveTo(
      x + 461 * scale,
      y + 60 * scale,
      x + 461 * scale,
      y + 60 * scale,
      x + 461 * scale,
      y + 60 * scale
    );
    ctx.bezierCurveTo(
      x + 461 * scale,
      y + 66 * scale,
      x + 456 * scale,
      y + 66 * scale,
      x + 454 * scale,
      y + 65 * scale
    );
    ctx.bezierCurveTo(
      x + 454 * scale,
      y + 65 * scale,
      x + 454 * scale,
      y + 65 * scale,
      x + 454 * scale,
      y + 66 * scale
    );
    ctx.bezierCurveTo(
      x + 452 * scale,
      y + 66 * scale,
      x + 444 * scale,
      y + 70 * scale,
      x + 444 * scale,
      y + 84 * scale
    );
    ctx.bezierCurveTo(
      x + 444 * scale,
      y + 85 * scale,
      x + 444 * scale,
      y + 85 * scale,
      x + 443 * scale,
      y + 86 * scale
    );
    ctx.bezierCurveTo(
      x + 439 * scale,
      y + 88 * scale,
      x + 438 * scale,
      y + 93 * scale,
      x + 438 * scale,
      y + 94 * scale
    );
    ctx.bezierCurveTo(
      x + 438 * scale,
      y + 94 * scale,
      x + 438 * scale,
      y + 94 * scale,
      x + 438 * scale,
      y + 95 * scale
    );
    ctx.bezierCurveTo(
      x + 437 * scale,
      y + 96 * scale,
      x + 435 * scale,
      y + 99 * scale,
      x + 429 * scale,
      y + 98 * scale
    );
    ctx.bezierCurveTo(
      x + 429 * scale,
      y + 98 * scale,
      x + 428 * scale,
      y + 98 * scale,
      x + 428 * scale,
      y + 98 * scale
    );
    ctx.bezierCurveTo(
      x + 418 * scale,
      y + 106 * scale,
      x + 410 * scale,
      y + 102 * scale,
      x + 408 * scale,
      y + 101 * scale
    );
    ctx.bezierCurveTo(
      x + 408 * scale,
      y + 101 * scale,
      x + 408 * scale,
      y + 101 * scale,
      x + 408 * scale,
      y + 101 * scale
    );
    ctx.bezierCurveTo(
      x + 406 * scale,
      y + 101 * scale,
      x + 399 * scale,
      y + 101 * scale,
      x + 388 * scale,
      y + 103 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(50, 102, 158, 1.0)";
    // ctx.fillStyle = colors.waylonBlue;
    ctx.fill();

    // Waylon Ventral Gray Fill
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x + 220 * scale, y + 172 * scale);
    ctx.bezierCurveTo(
      x + 218 * scale,
      y + 172 * scale,
      x + 224 * scale,
      y + 121 * scale,
      x + 244 * scale,
      y + 108 * scale
    );
    ctx.bezierCurveTo(
      x + 284 * scale,
      y + 80 * scale,
      x + 283 * scale,
      y + 91 * scale,
      x + 304 * scale,
      y + 85 * scale
    );
    ctx.bezierCurveTo(
      x + 313 * scale,
      y + 80 * scale,
      x + 360 * scale,
      y + 59 * scale,
      x + 373 * scale,
      y + 47 * scale
    );
    ctx.bezierCurveTo(
      x + 395 * scale,
      y + 27 * scale,
      x + 449 * scale,
      y + 33 * scale,
      x + 449 * scale,
      y + 33 * scale
    );
    ctx.bezierCurveTo(
      x + 452 * scale,
      y + 35 * scale,
      x + 464 * scale,
      y + 40 * scale,
      x + 462 * scale,
      y + 48 * scale
    );
    ctx.bezierCurveTo(
      x + 459 * scale,
      y + 57 * scale,
      x + 456 * scale,
      y + 49 * scale,
      x + 460 * scale,
      y + 59 * scale
    );
    ctx.bezierCurveTo(
      x + 460 * scale,
      y + 59 * scale,
      x + 460 * scale,
      y + 59 * scale,
      x + 460 * scale,
      y + 60 * scale
    );
    ctx.bezierCurveTo(
      x + 460 * scale,
      y + 65 * scale,
      x + 455 * scale,
      y + 65 * scale,
      x + 454 * scale,
      y + 65 * scale
    );
    ctx.bezierCurveTo(
      x + 454 * scale,
      y + 65 * scale,
      x + 453 * scale,
      y + 65 * scale,
      x + 453 * scale,
      y + 65 * scale
    );
    ctx.bezierCurveTo(
      x + 451 * scale,
      y + 66 * scale,
      x + 443 * scale,
      y + 69 * scale,
      x + 444 * scale,
      y + 83 * scale
    );
    ctx.bezierCurveTo(
      x + 444 * scale,
      y + 84 * scale,
      x + 443 * scale,
      y + 85 * scale,
      x + 443 * scale,
      y + 85 * scale
    );
    ctx.bezierCurveTo(
      x + 438 * scale,
      y + 87 * scale,
      x + 437 * scale,
      y + 92 * scale,
      x + 437 * scale,
      y + 93 * scale
    );
    ctx.bezierCurveTo(
      x + 437 * scale,
      y + 94 * scale,
      x + 437 * scale,
      y + 94 * scale,
      x + 437 * scale,
      y + 94 * scale
    );
    ctx.bezierCurveTo(
      x + 437 * scale,
      y + 95 * scale,
      x + 434 * scale,
      y + 98 * scale,
      x + 429 * scale,
      y + 97 * scale
    );
    ctx.bezierCurveTo(
      x + 428 * scale,
      y + 97 * scale,
      x + 428 * scale,
      y + 97 * scale,
      x + 427 * scale,
      y + 97 * scale
    );
    ctx.bezierCurveTo(
      x + 418 * scale,
      y + 105 * scale,
      x + 409 * scale,
      y + 102 * scale,
      x + 408 * scale,
      y + 101 * scale
    );
    ctx.bezierCurveTo(
      x + 408 * scale,
      y + 101 * scale,
      x + 407 * scale,
      y + 101 * scale,
      x + 407 * scale,
      y + 101 * scale
    );
    ctx.bezierCurveTo(
      x + 403 * scale,
      y + 100 * scale,
      x + 366 * scale,
      y + 99 * scale,
      x + 336 * scale,
      y + 134 * scale
    );
    ctx.bezierCurveTo(
      x + 304 * scale,
      y + 170 * scale,
      x + 245 * scale,
      y + 170 * scale,
      x + 220 * scale,
      y + 172 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(226, 232, 247, 1.0)";
    // ctx.fillStyle = colors.waylonGray;
    ctx.fill();

    // Waylon Ventral Area - Lower Wrinkle, Shadow
    ctx.beginPath();
    ctx.moveTo(x + 231 * scale, y + 153 * scale);
    ctx.bezierCurveTo(
      x + 235 * scale,
      y + 152 * scale,
      x + 252 * scale,
      y + 154 * scale,
      x + 280 * scale,
      y + 148 * scale
    );
    ctx.bezierCurveTo(
      x + 296 * scale,
      y + 150 * scale,
      x + 325 * scale,
      y + 135 * scale,
      x + 340 * scale,
      y + 120 * scale
    );
    ctx.bezierCurveTo(
      x + 367 * scale,
      y + 95 * scale,
      x + 419 * scale,
      y + 57 * scale,
      x + 433 * scale,
      y + 65 * scale
    );
    ctx.lineWidth = scaledLineWidth(3);
    ctx.strokeStyle = "rgba(191, 192, 193, 1.0)";
    // ctx.strokeStyle = colors.waylonWrinkShd;
    ctx.stroke();

    // Waylon Ventral Area - Lower Wrinkle, Highlight
    ctx.beginPath();
    ctx.moveTo(x + 228 * scale, y + 153 * scale);
    ctx.bezierCurveTo(
      x + 269 * scale,
      y + 155 * scale,
      x + 253 * scale,
      y + 153 * scale,
      x + 280 * scale,
      y + 148 * scale
    );
    ctx.bezierCurveTo(
      x + 312 * scale,
      y + 150 * scale,
      x + 340 * scale,
      y + 123 * scale,
      x + 353 * scale,
      y + 109 * scale
    );
    ctx.bezierCurveTo(
      x + 386 * scale,
      y + 86 * scale,
      x + 416 * scale,
      y + 61 * scale,
      x + 437 * scale,
      y + 65 * scale
    );
    ctx.lineWidth = scaledLineWidth(4);
    ctx.strokeStyle = "rgba(226, 232, 247, 0.9)";
    // ctx.strokeStyle = colors.waylonWrinkHlt;
    ctx.stroke();

    // Waylon Ventral Area - Middle Wrinkle, shadow
    ctx.beginPath();
    ctx.moveTo(x + 230 * scale, y + 147 * scale);
    ctx.bezierCurveTo(
      x + 329 * scale,
      y + 147 * scale,
      x + 368 * scale,
      y + 61 * scale,
      x + 417 * scale,
      y + 63 * scale
    );
    ctx.lineWidth = scaledLineWidth(3);
    ctx.strokeStyle = "rgba(191, 192, 193, 1.0)";
    // ctx.strokeStyle = colors.waylonWrinkShd;
    ctx.stroke();

    // Waylon Ventral Area - Middle Wrinkle, Highlight
    ctx.beginPath();
    ctx.moveTo(x + 226 * scale, y + 147 * scale);
    ctx.bezierCurveTo(
      x + 328 * scale,
      y + 153 * scale,
      x + 378 * scale,
      y + 55 * scale,
      x + 416 * scale,
      y + 63 * scale
    );
    ctx.lineWidth = scaledLineWidth(4);
    ctx.strokeStyle = "rgba(226, 232, 247, 0.9)";
    // ctx.strokeStyle = colors.waylonWrinkHlt;
    ctx.stroke();

    // Waylon Ventral Area - Top Wrinkle, Shadow
    ctx.beginPath();
    ctx.moveTo(x + 241 * scale, y + 125 * scale);
    ctx.bezierCurveTo(
      x + 254 * scale,
      y + 132 * scale,
      x + 293 * scale,
      y + 126 * scale,
      x + 304 * scale,
      y + 115 * scale
    );
    ctx.bezierCurveTo(
      x + 315 * scale,
      y + 104 * scale,
      x + 375 * scale,
      y + 63 * scale,
      x + 392 * scale,
      y + 65 * scale
    );
    ctx.lineWidth = scaledLineWidth(3);
    ctx.strokeStyle = "rgba(191, 192, 193, 1.0)";
    // ctx.strokeStyle = colors.waylonWrinkShd;
    ctx.stroke();

    // Waylon Ventral Area - Top Wrinkle, Highlight
    ctx.beginPath();
    ctx.moveTo(x + 238 * scale, y + 122 * scale);
    ctx.bezierCurveTo(
      x + 251 * scale,
      y + 137 * scale,
      x + 298 * scale,
      y + 125 * scale,
      x + 309 * scale,
      y + 114 * scale
    );
    ctx.bezierCurveTo(
      x + 323 * scale,
      y + 103 * scale,
      x + 374 * scale,
      y + 65 * scale,
      x + 396 * scale,
      y + 64 * scale
    );
    ctx.lineWidth = scaledLineWidth(4);
    ctx.strokeStyle = "rgba(226, 232, 247, 0.9)";
    // ctx.strokeStyle = colors.waylonWrinkHlt;
    ctx.stroke();

    // Waylon Body Outline
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(x + 389 * scale, y + 103 * scale);
    ctx.bezierCurveTo(
      x + 374 * scale,
      y + 106 * scale,
      x + 355 * scale,
      y + 114 * scale,
      x + 337 * scale,
      y + 134 * scale
    );
    ctx.bezierCurveTo(
      x + 305 * scale,
      y + 171 * scale,
      x + 208 * scale,
      y + 176 * scale,
      x + 184 * scale,
      y + 171 * scale
    );
    ctx.bezierCurveTo(
      x + 155 * scale,
      y + 165 * scale,
      x + 120 * scale,
      y + 155 * scale,
      x + 70 * scale,
      y + 138 * scale
    );
    ctx.bezierCurveTo(
      x + 70 * scale,
      y + 137 * scale,
      x + 69 * scale,
      y + 137 * scale,
      x + 68 * scale,
      y + 138 * scale
    );
    ctx.bezierCurveTo(
      x + 65 * scale,
      y + 142 * scale,
      x + 59 * scale,
      y + 142 * scale,
      x + 56 * scale,
      y + 141 * scale
    );
    ctx.bezierCurveTo(
      x + 56 * scale,
      y + 141 * scale,
      x + 55 * scale,
      y + 141 * scale,
      x + 55 * scale,
      y + 142 * scale
    );
    ctx.bezierCurveTo(
      x + 50 * scale,
      y + 148 * scale,
      x + 17 * scale,
      y + 183 * scale,
      x + 3 * scale,
      y + 159 * scale
    );
    ctx.bezierCurveTo(
      x + 2 * scale,
      y + 159 * scale,
      x + 16 * scale,
      y + 148 * scale,
      x + 16 * scale,
      y + 143 * scale
    );
    ctx.bezierCurveTo(
      x + 16 * scale,
      y + 133 * scale,
      x + 23 * scale,
      y + 129 * scale,
      x + 27 * scale,
      y + 127 * scale
    );
    ctx.bezierCurveTo(
      x + 34 * scale,
      y + 124 * scale,
      x + 23 * scale,
      y + 118 * scale,
      x + 36 * scale,
      y + 112 * scale
    );
    ctx.bezierCurveTo(
      x + 36 * scale,
      y + 112 * scale,
      x + 37 * scale,
      y + 110 * scale,
      x + 38 * scale,
      y + 110 * scale
    );
    ctx.bezierCurveTo(
      x + 42 * scale,
      y + 111 * scale,
      x + 39 * scale,
      y + 110 * scale,
      x + 39 * scale,
      y + 109 * scale
    );
    ctx.bezierCurveTo(
      x + 41 * scale,
      y + 107 * scale,
      x + 34 * scale,
      y + 104 * scale,
      x + 46 * scale,
      y + 98 * scale
    );
    ctx.bezierCurveTo(
      x + 43 * scale,
      y + 95 * scale,
      x + 46 * scale,
      y + 93 * scale,
      x + 50 * scale,
      y + 90 * scale
    );
    ctx.bezierCurveTo(
      x + 47 * scale,
      y + 87 * scale,
      x + 54 * scale,
      y + 84 * scale,
      x + 52 * scale,
      y + 82 * scale
    );
    ctx.bezierCurveTo(
      x + 54 * scale,
      y + 80 * scale,
      x + 69 * scale,
      y + 97 * scale,
      x + 69 * scale,
      y + 109 * scale
    );
    ctx.bezierCurveTo(
      x + 57 * scale,
      y + 113 * scale,
      x + 57 * scale,
      y + 113 * scale,
      x + 57 * scale,
      y + 113 * scale
    );
    ctx.bezierCurveTo(
      x + 68 * scale,
      y + 108 * scale,
      x + 100 * scale,
      y + 103 * scale,
      x + 117 * scale,
      y + 85 * scale
    );
    ctx.bezierCurveTo(
      x + 117 * scale,
      y + 81 * scale,
      x + 116 * scale,
      y + 80 * scale,
      x + 121 * scale,
      y + 77 * scale
    );
    ctx.bezierCurveTo(
      x + 115 * scale,
      y + 64 * scale,
      x + 125 * scale,
      y + 61 * scale,
      x + 139 * scale,
      y + 68 * scale
    );
    ctx.bezierCurveTo(
      x + 177 * scale,
      y + 26 * scale,
      x + 231 * scale,
      y + 21 * scale,
      x + 286 * scale,
      y + 12 * scale
    );
    ctx.bezierCurveTo(
      x + 286 * scale,
      y + 12 * scale,
      x + 286 * scale,
      y + 12 * scale,
      x + 287 * scale,
      y + 12 * scale
    );
    ctx.bezierCurveTo(
      x + 309 * scale,
      y,
      x + 330 * scale,
      y - 1 * scale,
      x + 360 * scale,
      y + 13 * scale
    );
    ctx.bezierCurveTo(
      x + 364 * scale,
      y + 12 * scale,
      x + 435 * scale,
      y + 21 * scale,
      x + 439 * scale,
      y + 24 * scale
    );
    ctx.bezierCurveTo(
      x + 447 * scale,
      y + 24 * scale,
      x + 450 * scale,
      y + 26 * scale,
      x + 449 * scale,
      y + 33 * scale
    );
    ctx.bezierCurveTo(
      x + 449 * scale,
      y + 33 * scale,
      x + 449 * scale,
      y + 34 * scale,
      x + 450 * scale,
      y + 34 * scale
    );
    ctx.bezierCurveTo(
      x + 453 * scale,
      y + 35 * scale,
      x + 465 * scale,
      y + 41 * scale,
      x + 463 * scale,
      y + 48 * scale
    );
    ctx.bezierCurveTo(
      x + 460 * scale,
      y + 57 * scale,
      x + 457 * scale,
      y + 49 * scale,
      x + 461 * scale,
      y + 60 * scale
    );
    ctx.bezierCurveTo(
      x + 461 * scale,
      y + 60 * scale,
      x + 461 * scale,
      y + 60 * scale,
      x + 461 * scale,
      y + 60 * scale
    );
    ctx.bezierCurveTo(
      x + 461 * scale,
      y + 66 * scale,
      x + 456 * scale,
      y + 66 * scale,
      x + 455 * scale,
      y + 65 * scale
    );
    ctx.bezierCurveTo(
      x + 455 * scale,
      y + 65 * scale,
      x + 454 * scale,
      y + 65 * scale,
      x + 454 * scale,
      y + 66 * scale
    );
    ctx.bezierCurveTo(
      x + 452 * scale,
      y + 66 * scale,
      x + 444 * scale,
      y + 70 * scale,
      x + 445 * scale,
      y + 84 * scale
    );
    ctx.bezierCurveTo(
      x + 445 * scale,
      y + 85 * scale,
      x + 444 * scale,
      y + 85 * scale,
      x + 444 * scale,
      y + 86 * scale
    );
    ctx.bezierCurveTo(
      x + 439 * scale,
      y + 88 * scale,
      x + 439 * scale,
      y + 93 * scale,
      x + 438 * scale,
      y + 94 * scale
    );
    ctx.bezierCurveTo(
      x + 438 * scale,
      y + 94 * scale,
      x + 438 * scale,
      y + 94 * scale,
      x + 438 * scale,
      y + 95 * scale
    );
    ctx.bezierCurveTo(
      x + 438 * scale,
      y + 96 * scale,
      x + 435 * scale,
      y + 99 * scale,
      x + 430 * scale,
      y + 98 * scale
    );
    ctx.bezierCurveTo(
      x + 429 * scale,
      y + 98 * scale,
      x + 429 * scale,
      y + 98 * scale,
      x + 428 * scale,
      y + 98 * scale
    );
    ctx.bezierCurveTo(
      x + 419 * scale,
      y + 106 * scale,
      x + 411 * scale,
      y + 102 * scale,
      x + 409 * scale,
      y + 101 * scale
    );
    ctx.bezierCurveTo(
      x + 409 * scale,
      y + 101 * scale,
      x + 408 * scale,
      y + 101 * scale,
      x + 408 * scale,
      y + 101 * scale
    );
    ctx.bezierCurveTo(
      x + 406 * scale,
      y + 101 * scale,
      x + 399 * scale,
      y + 101 * scale,
      x + 389 * scale,
      y + 103 * scale
    );
    ctx.closePath();
    ctx.lineWidth = scaledLineWidth(4);
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    // ctx.strokeStyle = colors.waylonBlack;
    ctx.stroke();

    // Waylon Mouth
    ctx.beginPath();
    ctx.moveTo(x + 449 * scale, y + 31 * scale);
    ctx.bezierCurveTo(
      x + 448 * scale,
      y + 33 * scale,
      x + 445 * scale,
      y + 37 * scale,
      x + 436 * scale,
      y + 34 * scale
    );
    ctx.bezierCurveTo(
      x + 420 * scale,
      y + 35 * scale,
      x + 404 * scale,
      y + 35 * scale,
      x + 375 * scale,
      y + 35 * scale
    );
    ctx.bezierCurveTo(
      x + 330 * scale,
      y + 34 * scale,
      x + 290 * scale,
      y + 39 * scale,
      x + 284 * scale,
      y + 72 * scale
    );
    ctx.bezierCurveTo(
      x + 289 * scale,
      y + 36 * scale,
      x + 329 * scale,
      y + 28 * scale,
      x + 374 * scale,
      y + 31 * scale
    );
    ctx.bezierCurveTo(
      x + 412 * scale,
      y + 33 * scale,
      x + 427 * scale,
      y + 29 * scale,
      x + 439 * scale,
      y + 31 * scale
    );
    ctx.bezierCurveTo(
      x + 448 * scale,
      y + 32 * scale,
      x + 448 * scale,
      y + 32 * scale,
      x + 449 * scale,
      y + 30 * scale
    );
    ctx.bezierCurveTo(
      x + 449 * scale,
      y + 31 * scale,
      x + 449 * scale,
      y + 31 * scale,
      x + 449 * scale,
      y + 31 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
    // ctx.fillStyle = colors.waylonBlack;
    ctx.fill();
    ctx.lineWidth = scaledLineWidth(2);
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    // ctx.strokeStyle = colors.waylonBlack;
    ctx.stroke();

    // Waylon Blowhole
    ctx.beginPath();
    ctx.moveTo(x + 309 * scale, y + 9 * scale);
    ctx.bezierCurveTo(
      x + 309 * scale,
      y + 9 * scale,
      x + 318 * scale,
      y + 7 * scale,
      x + 332 * scale,
      y + 9 * scale
    );
    ctx.bezierCurveTo(
      x + 318 * scale,
      y + 13 * scale,
      x + 312 * scale,
      y + 11 * scale,
      x + 309 * scale,
      y + 9 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
    // ctx.fillStyle = colors.waylonBlack;
    ctx.fill();
    ctx.lineWidth = scaledLineWidth(1);
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    // ctx.strokeStyle = colors.waylonBlack;
    ctx.stroke();

    // Waylon Eye, Sclera
    ctx.beginPath();
    ctx.moveTo(x + 278 * scale, y + 63 * scale);
    ctx.bezierCurveTo(
      x + 278 * scale,
      y + 78 * scale,
      x + 261 * scale,
      y + 90 * scale,
      x + 242 * scale,
      y + 90 * scale
    );
    ctx.bezierCurveTo(
      x + 222 * scale,
      y + 90 * scale,
      x + 206 * scale,
      y + 78 * scale,
      x + 206 * scale,
      y + 63 * scale
    );
    ctx.bezierCurveTo(
      x + 206 * scale,
      y + 49 * scale,
      x + 222 * scale,
      y + 36 * scale,
      x + 242 * scale,
      y + 36 * scale
    );
    ctx.bezierCurveTo(
      x + 261 * scale,
      y + 36 * scale,
      x + 278 * scale,
      y + 49 * scale,
      x + 278 * scale,
      y + 63 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(253, 253, 255, 1.0)";
    // ctx.fillStyle = colors.waylonWhite;
    ctx.fill();

    // Waylon Eye, Iris
    ctx.beginPath();
    ctx.moveTo(x + 213 * scale, y + 63 * scale);
    ctx.bezierCurveTo(
      x + 213 * scale,
      y + 76 * scale,
      x + 228 * scale,
      y + 87 * scale,
      x + 245 * scale,
      y + 87 * scale
    );
    ctx.bezierCurveTo(
      x + 262 * scale,
      y + 87 * scale,
      x + 276 * scale,
      y + 76 * scale,
      x + 276 * scale,
      y + 63 * scale
    );
    ctx.bezierCurveTo(
      x + 276 * scale,
      y + 49 * scale,
      x + 262 * scale,
      y + 38 * scale,
      x + 245 * scale,
      y + 38 * scale
    );
    ctx.bezierCurveTo(
      x + 228 * scale,
      y + 38 * scale,
      x + 213 * scale,
      y + 49 * scale,
      x + 213 * scale,
      y + 63 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(80, 116, 214, 1.0)";
    // ctx.fillStyle = colors.waylonEye;
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    // ctx.strokeStyle = colors.waylonBlack;
    ctx.stroke();

    // Waylon Eye, Pupil
    ctx.beginPath();
    ctx.moveTo(x + 225 * scale, y + 63 * scale);
    ctx.bezierCurveTo(
      x + 225 * scale,
      y + 73 * scale,
      x + 234 * scale,
      y + 81 * scale,
      x + 245 * scale,
      y + 81 * scale
    );
    ctx.bezierCurveTo(
      x + 256 * scale,
      y + 81 * scale,
      x + 265 * scale,
      y + 73 * scale,
      x + 265 * scale,
      y + 63 * scale
    );
    ctx.bezierCurveTo(
      x + 265 * scale,
      y + 54 * scale,
      x + 256 * scale,
      y + 46 * scale,
      x + 245 * scale,
      y + 46 * scale
    );
    ctx.bezierCurveTo(
      x + 234 * scale,
      y + 46 * scale,
      x + 225 * scale,
      y + 54 * scale,
      x + 225 * scale,
      y + 63 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
    // ctx.fillStyle = colors.waylonBlack;
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    // ctx.strokeStyle = colors.waylonBlack;
    ctx.stroke();

    // Waylon Eye, Bottom Shine
    ctx.beginPath();
    ctx.moveTo(x + 249 * scale, y + 76 * scale);
    ctx.bezierCurveTo(
      x + 250 * scale,
      y + 76 * scale,
      x + 252 * scale,
      y + 76 * scale,
      x + 253 * scale,
      y + 78 * scale
    );
    ctx.bezierCurveTo(
      x + 253 * scale,
      y + 79 * scale,
      x + 252 * scale,
      y + 80 * scale,
      x + 251 * scale,
      y + 81 * scale
    );
    ctx.bezierCurveTo(
      x + 250 * scale,
      y + 82 * scale,
      x + 248 * scale,
      y + 81 * scale,
      x + 247 * scale,
      y + 80 * scale
    );
    ctx.bezierCurveTo(
      x + 247 * scale,
      y + 79 * scale,
      x + 248 * scale,
      y + 77 * scale,
      x + 249 * scale,
      y + 76 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    // ctx.fillStyle = colors.eyeShine;
    ctx.fill();

    // Waylon Eye, Top Shine
    ctx.beginPath();
    ctx.moveTo(x + 236 * scale, y + 44 * scale);
    ctx.bezierCurveTo(
      x + 240 * scale,
      y + 42 * scale,
      x + 244 * scale,
      y + 44 * scale,
      x + 246 * scale,
      y + 47 * scale
    );
    ctx.bezierCurveTo(
      x + 247 * scale,
      y + 50 * scale,
      x + 245 * scale,
      y + 54 * scale,
      x + 241 * scale,
      y + 56 * scale
    );
    ctx.bezierCurveTo(
      x + 238 * scale,
      y + 58 * scale,
      x + 233 * scale,
      y + 56 * scale,
      x + 232 * scale,
      y + 53 * scale
    );
    ctx.bezierCurveTo(
      x + 230 * scale,
      y + 50 * scale,
      x + 232 * scale,
      y + 46 * scale,
      x + 236 * scale,
      y + 44 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    // ctx.fillStyle = colors.eyeShine;
    ctx.fill();

    // Waylon Eyelashes, Masking
    ctx.beginPath();
    ctx.moveTo(x + 241 * scale, y + 34 * scale);
    ctx.bezierCurveTo(
      x + 222 * scale,
      y + 32 * scale,
      x + 204 * scale,
      y + 42 * scale,
      x + 204 * scale,
      y + 62 * scale
    );
    ctx.bezierCurveTo(
      x + 204 * scale,
      y + 76 * scale,
      x + 216 * scale,
      y + 91 * scale,
      x + 241 * scale,
      y + 91 * scale
    );
    ctx.bezierCurveTo(
      x + 259 * scale,
      y + 91 * scale,
      x + 278 * scale,
      y + 81 * scale,
      x + 278 * scale,
      y + 62 * scale
    );
    ctx.bezierCurveTo(
      x + 278 * scale,
      y + 49 * scale,
      x + 263 * scale,
      y + 34 * scale,
      x + 241 * scale,
      y + 34 * scale
    );
    ctx.closePath();
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    // ctx.strokeStyle = colors.waylonBlack;
    ctx.stroke();

    // Waylon Eyelashes
    ctx.moveTo(x + 241 * scale, y + 90 * scale);
    ctx.bezierCurveTo(
      x + 218 * scale,
      y + 90 * scale,
      x + 205 * scale,
      y + 73 * scale,
      x + 207 * scale,
      y + 63 * scale
    );
    ctx.bezierCurveTo(
      x + 211 * scale,
      y + 51 * scale,
      x + 219 * scale,
      y + 51 * scale,
      x + 230 * scale,
      y + 43 * scale
    );
    ctx.bezierCurveTo(
      x + 232 * scale,
      y + 41 * scale,
      x + 234 * scale,
      y + 40 * scale,
      x + 236 * scale,
      y + 39 * scale
    );
    ctx.bezierCurveTo(
      x + 259 * scale,
      y + 34 * scale,
      x + 276 * scale,
      y + 48 * scale,
      x + 276 * scale,
      y + 63 * scale
    );
    ctx.bezierCurveTo(
      x + 277 * scale,
      y + 81 * scale,
      x + 258 * scale,
      y + 90 * scale,
      x + 241 * scale,
      y + 90 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
    // ctx.fillStyle = colors.waylonBlack;
    ctx.fill();

    // Waylon Right Pectoral Fin
    ctx.beginPath();
    ctx.moveTo(x + 160 * scale, y + 230 * scale);
    ctx.bezierCurveTo(
      x + 160 * scale,
      y + 230 * scale,
      x + 147 * scale,
      y + 200 * scale,
      x + 167 * scale,
      y + 169 * scale
    );
    ctx.bezierCurveTo(
      x + 171 * scale,
      y + 165 * scale,
      x + 173 * scale,
      y + 157 * scale,
      x + 173 * scale,
      y + 157 * scale
    );
    ctx.bezierCurveTo(
      x + 173 * scale,
      y + 157 * scale,
      x + 175 * scale,
      y + 134 * scale,
      x + 194 * scale,
      y + 132 * scale
    );
    ctx.bezierCurveTo(
      x + 194 * scale,
      y + 124 * scale,
      x + 206 * scale,
      y + 105 * scale,
      x + 214 * scale,
      y + 110 * scale
    );
    ctx.bezierCurveTo(
      x + 222 * scale,
      y + 115 * scale,
      x + 227 * scale,
      y + 130 * scale,
      x + 223 * scale,
      y + 139 * scale
    );
    ctx.bezierCurveTo(
      x + 220 * scale,
      y + 148 * scale,
      x + 201 * scale,
      y + 171 * scale,
      x + 197 * scale,
      y + 173 * scale
    );
    ctx.bezierCurveTo(
      x + 192 * scale,
      y + 176 * scale,
      x + 186 * scale,
      y + 191 * scale,
      x + 186 * scale,
      y + 191 * scale
    );
    ctx.bezierCurveTo(
      x + 186 * scale,
      y + 191 * scale,
      x + 185 * scale,
      y + 196 * scale,
      x + 180 * scale,
      y + 196 * scale
    );
    ctx.bezierCurveTo(
      x + 176 * scale,
      y + 197 * scale,
      x + 171 * scale,
      y + 232 * scale,
      x + 160 * scale,
      y + 230 * scale
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(234, 237, 244, 1.0)";
    // ctx.fillStyle = colors.waylonLtrGray;
    ctx.fill();
    ctx.lineWidth = scaledLineWidth(3);
    ctx.strokeStyle = "rgba(0, 0, 0, 1.0)";
    // ctx.strokeStyle = colors.waylonBlack;
    ctx.stroke();
    // ctx.restore();
  };
};

export default Waylon;