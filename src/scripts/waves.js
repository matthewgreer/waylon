function Waves(options) {
  this.sizeScale = options.sizeScale;
  this.position = options.position;
};

Waves.prototype.draw = function draw(ctx) {

  let x = this.position[0];
  let sizeScale = this.sizeScale;

  const skyCrestToTroughGradient = ctx.createLinearGradient(0, 75, 0, 120);
  skyCrestToTroughGradient.addColorStop(0, $skyCrest);
  skyCrestToTroughGradient.addColorStop(0.555555556, $skyHorizon);
  skyCrestToTroughGradient.addColorStop(1, $skyTrough);

  const oceanCrestToTroughGradient = ctx.createLinearGradient(0, 75, 0, 120);
  oceanCrestToTroughGradient.addColorStop(0, $oceanCrest);
  oceanCrestToTroughGradient.addColorStop(0.555555556, $oceanHorizon);
  oceanCrestToTroughGradient.addColorStop(1, $oceanTrough);


  ctx.rect(0, 75, 1200, 45);
  ctx.fillStyle = skyCrestToTroughGradient;
  ctx.fill();
  
  for (let i = 0; i < Math.ceil(3 / sizeScale); i++){
  
    let x = 480 * sizeScale * i;

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
  }
};

module.exports = Waves;