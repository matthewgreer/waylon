import colors from "../styles/_colors.scss";

class Waves {
  constructor(sizeScale, position) {
    this.sizeScale = sizeScale;
    this.position = position;
  };

  move = () => {
    if (this.position[0] <= -480 * this.sizeScale) {
      this.position = [0, this.position[1]];
    } else {
      this.position = [this.position[0] - 2, this.position[1]];
    }
  };

  draw = (ctx) => {

    let x = this.position[0];
    let sizeScale = this.sizeScale;

    const skyCrestToTroughGradient = ctx.createLinearGradient(0, 75, 0, 120);
    skyCrestToTroughGradient.addColorStop(0, "rgba(147, 189, 244, 1.0)");
    skyCrestToTroughGradient.addColorStop(
      0.555555556,
      "rgba(151, 202, 243, 1.0)"
    );
    skyCrestToTroughGradient.addColorStop(1, "rgba(154, 210, 243, 1.0)");
    // skyCrestToTroughGradient.addColorStop(0, colors.skyCrest);
    // skyCrestToTroughGradient.addColorStop(0.555555556, colors.skyHorizon);
    // skyCrestToTroughGradient.addColorStop(1, colors.skyTrough);

    const oceanCrestToTroughGradient = ctx.createLinearGradient(0, 75, 0, 120);
    oceanCrestToTroughGradient.addColorStop(0, "rgba(90, 255, 255, 1.0)");
    oceanCrestToTroughGradient.addColorStop(
      0.555555556,
      "rgba(87, 247, 250, 1.0)"
    );
    oceanCrestToTroughGradient.addColorStop(1, "rgba(85, 242, 247, 1.0)");
    // oceanCrestToTroughGradient.addColorStop(0, colors.oceanCrest);
    // oceanCrestToTroughGradient.addColorStop(0.555555556, colors.oceanHorizon);
    // oceanCrestToTroughGradient.addColorStop(1, colors.oceanTrough);


    ctx.rect(0, 75, 1200, 45);
    ctx.fillStyle = skyCrestToTroughGradient;
    ctx.fill();
    
    for (let i = 0; i < Math.ceil(3 / sizeScale); i++){
    
      let x = (480 * sizeScale * i) + this.position[0];
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x + 0 * sizeScale, 120 - 45 * sizeScale);
      ctx.bezierCurveTo(
        x + 100 * sizeScale,
        120 - 45 * sizeScale,
        x + 140 * sizeScale,
        120,
        x + 240 * sizeScale,
        120
      );
      ctx.bezierCurveTo(
        x + 340 * sizeScale,
        120,
        x + 380 * sizeScale,
        120 - 45 * sizeScale,
        x + 480 * sizeScale,
        120 - 45 * sizeScale
      );
      ctx.lineTo(x + 480 * sizeScale, 120);
      ctx.lineTo(x + 0 * sizeScale, 120);
      ctx.lineTo(x + 0 * sizeScale, 120 - 45 * sizeScale);
      ctx.closePath();
      ctx.fillStyle = oceanCrestToTroughGradient;
      ctx.fill();
      ctx.restore();
    }
  };
};
export default Waves;