const drawShark = (x, y, scale) => {
  const ctx = document.getElementById("canvas").getContext("2d");

  // Shark is x:862, y:371 at scale:1

  // Clear by redrawing the ocean
  const oceanGradient = ctx.createLinearGradient(0, 0, 0, 1080);
  oceanGradient.addColorStop(0, "#5AFFFF");
  oceanGradient.addColorStop(1, "#000050");
  ctx.fillStyle = oceanGradient;
  ctx.fillRect(0, 0, 1920, 1080);

  // Shark - Right Pelvic Fin
  ctx.fillStyle = "#97A5AD";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 546 * scale, y + 222 * scale);
  ctx.bezierCurveTo(
    x + 546 * scale,
    y + 225 * scale,
    x + 541 * scale,
    y + 234 * scale,
    x + 544 * scale,
    y + 243 * scale
  );
  ctx.bezierCurveTo(
    x + 547 * scale,
    y + 251 * scale,
    x + 503 * scale,
    y + 225 * scale,
    x + 503 * scale,
    y + 225 * scale
  );
  ctx.lineTo(x + 546 * scale, y + 222 * scale);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Inside Mouth
  ctx.fillStyle = "#7F3C3C";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 100 * scale, y + 191 * scale);
  ctx.bezierCurveTo(
    x + 100 * scale,
    y + 200 * scale,
    x + 47 * scale,
    y + 245 * scale,
    x + 56 * scale,
    y + 256 * scale
  );
  ctx.bezierCurveTo(
    x + 58 * scale,
    y + 259 * scale,
    x + 158 * scale,
    y + 181 * scale,
    x + 140 * scale,
    y + 177 * scale
  );
  ctx.bezierCurveTo(
    x + 140 * scale,
    y + 177 * scale,
    x + 60 * scale,
    y + 104 * scale,
    x + 32 * scale,
    y + 130 * scale
  );
  ctx.bezierCurveTo(
    x + 27 * scale,
    y + 135 * scale,
    x + 69 * scale,
    y + 142 * scale,
    x + 85 * scale,
    y + 167 * scale
  );
  ctx.bezierCurveTo(
    x + 90 * scale,
    y + 174 * scale,
    x + 105 * scale,
    y + 197 * scale,
    x + 100 * scale,
    y + 191 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #1, Light Gray
  ctx.fillStyle = "#B7B7B7";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 59 * scale, y + 248 * scale);
  ctx.bezierCurveTo(
    x + 59 * scale,
    y + 248 * scale,
    x + 59 * scale,
    y + 247 * scale,
    x + 58 * scale,
    y + 248 * scale
  );
  ctx.bezierCurveTo(
    x + 57 * scale,
    y + 248 * scale,
    x + 57 * scale,
    y + 250 * scale,
    x + 55 * scale,
    y + 249 * scale
  );
  ctx.bezierCurveTo(
    x + 53 * scale,
    y + 248 * scale,
    x + 52 * scale,
    y + 247 * scale,
    x + 52 * scale,
    y + 247 * scale
  );
  ctx.bezierCurveTo(
    x + 52 * scale,
    y + 247 * scale,
    x + 54 * scale,
    y + 250 * scale,
    x + 54 * scale,
    y + 250 * scale
  );
  ctx.bezierCurveTo(
    x + 55 * scale,
    y + 251 * scale,
    x + 55 * scale,
    y + 252 * scale,
    x + 55 * scale,
    y + 253 * scale
  );
  ctx.bezierCurveTo(
    x + 55 * scale,
    y + 253 * scale,
    x + 55 * scale,
    y + 254 * scale,
    x + 55 * scale,
    y + 253 * scale
  );
  ctx.bezierCurveTo(
    x + 56 * scale,
    y + 253 * scale,
    x + 59 * scale,
    y + 249 * scale,
    x + 58 * scale,
    y + 248 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #2, Light Gray
  ctx.fillStyle = "#B7B7B7";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 61 * scale, y + 243 * scale);
  ctx.bezierCurveTo(
    x + 61 * scale,
    y + 242 * scale,
    x + 61 * scale,
    y + 242 * scale,
    x + 60 * scale,
    y + 243 * scale
  );
  ctx.bezierCurveTo(
    x + 60 * scale,
    y + 243 * scale,
    x + 59 * scale,
    y + 245 * scale,
    x + 58 * scale,
    y + 244 * scale
  );
  ctx.bezierCurveTo(
    x + 55 * scale,
    y + 242 * scale,
    x + 54 * scale,
    y + 242 * scale,
    x + 54 * scale,
    y + 242 * scale
  );
  ctx.bezierCurveTo(
    x + 54 * scale,
    y + 242 * scale,
    x + 56 * scale,
    y + 245 * scale,
    x + 57 * scale,
    y + 245 * scale
  );
  ctx.bezierCurveTo(
    x + 57 * scale,
    y + 245 * scale,
    x + 58 * scale,
    y + 247 * scale,
    x + 57 * scale,
    y + 248 * scale
  );
  ctx.bezierCurveTo(
    x + 57 * scale,
    y + 248 * scale,
    x + 58 * scale,
    y + 249 * scale,
    x + 58 * scale,
    y + 248 * scale
  );
  ctx.bezierCurveTo(
    x + 58 * scale,
    y + 248 * scale,
    x + 61 * scale,
    y + 244 * scale,
    x + 61 * scale,
    y + 243 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #3, Light Gray
  ctx.fillStyle = "#B7B7B7";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 63 * scale, y + 241 * scale);
  ctx.bezierCurveTo(
    x + 63 * scale,
    y + 240 * scale,
    x + 63 * scale,
    y + 240 * scale,
    x + 63 * scale,
    y + 241 * scale
  );
  ctx.bezierCurveTo(
    x + 62 * scale,
    y + 241 * scale,
    x + 61 * scale,
    y + 242 * scale,
    x + 60 * scale,
    y + 241 * scale
  );
  ctx.bezierCurveTo(
    x + 58 * scale,
    y + 239 * scale,
    x + 57 * scale,
    y + 238 * scale,
    x + 57 * scale,
    y + 238 * scale
  );
  ctx.bezierCurveTo(
    x + 57 * scale,
    y + 238 * scale,
    x + 58 * scale,
    y + 241 * scale,
    x + 58 * scale,
    y + 242 * scale
  );
  ctx.bezierCurveTo(
    x + 59 * scale,
    y + 242 * scale,
    x + 59 * scale,
    y + 244 * scale,
    x + 58 * scale,
    y + 244 * scale
  );
  ctx.bezierCurveTo(
    x + 58 * scale,
    y + 245 * scale,
    x + 58 * scale,
    y + 246 * scale,
    x + 59 * scale,
    y + 245 * scale
  );
  ctx.bezierCurveTo(
    x + 59 * scale,
    y + 245 * scale,
    x + 63 * scale,
    y + 242 * scale,
    x + 63 * scale,
    y + 241 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #4, Light Gray
  ctx.fillStyle = "#B7B7B7";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 65 * scale, y + 237 * scale);
  ctx.bezierCurveTo(
    x + 65 * scale,
    y + 237 * scale,
    x + 65 * scale,
    y + 236 * scale,
    x + 64 * scale,
    y + 237 * scale
  );
  ctx.bezierCurveTo(
    x + 64 * scale,
    y + 237 * scale,
    x + 63 * scale,
    y + 238 * scale,
    x + 62 * scale,
    y + 237 * scale
  );
  ctx.bezierCurveTo(
    x + 59 * scale,
    y + 235 * scale,
    x + 59 * scale,
    y + 235 * scale,
    x + 59 * scale,
    y + 235 * scale
  );
  ctx.bezierCurveTo(
    x + 59 * scale,
    y + 235 * scale,
    x + 60 * scale,
    y + 238 * scale,
    x + 60 * scale,
    y + 238 * scale
  );
  ctx.bezierCurveTo(
    x + 60 * scale,
    y + 238 * scale,
    x + 61 * scale,
    y + 240 * scale,
    x + 60 * scale,
    y + 240 * scale
  );
  ctx.bezierCurveTo(
    x + 60 * scale,
    y + 241 * scale,
    x + 60 * scale,
    y + 242 * scale,
    x + 60 * scale,
    y + 241 * scale
  );
  ctx.bezierCurveTo(
    x + 61 * scale,
    y + 241 * scale,
    x + 65 * scale,
    y + 238 * scale,
    x + 65 * scale,
    y + 237 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #4A, Dark Gray
  ctx.fillStyle = "#595959";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 66 * scale, y + 238 * scale);
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 237 * scale,
    x + 66 * scale,
    y + 237 * scale,
    x + 66 * scale,
    y + 238 * scale
  );
  ctx.bezierCurveTo(
    x + 65 * scale,
    y + 238 * scale,
    x + 64 * scale,
    y + 239 * scale,
    x + 64 * scale,
    y + 238 * scale
  );
  ctx.bezierCurveTo(
    x + 63 * scale,
    y + 237 * scale,
    x + 62 * scale,
    y + 237 * scale,
    x + 62 * scale,
    y + 237 * scale
  );
  ctx.bezierCurveTo(
    x + 62 * scale,
    y + 237 * scale,
    x + 62 * scale,
    y + 239 * scale,
    x + 63 * scale,
    y + 239 * scale
  );
  ctx.bezierCurveTo(
    x + 63 * scale,
    y + 240 * scale,
    x + 62 * scale,
    y + 241 * scale,
    x + 62 * scale,
    y + 241 * scale
  );
  ctx.bezierCurveTo(
    x + 62 * scale,
    y + 242 * scale,
    x + 62 * scale,
    y + 242 * scale,
    x + 62 * scale,
    y + 242 * scale
  );
  ctx.bezierCurveTo(
    x + 63 * scale,
    y + 242 * scale,
    x + 66 * scale,
    y + 239 * scale,
    x + 66 * scale,
    y + 238 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #5, Light Gray
  ctx.fillStyle = "#B7B7B7";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 69 * scale, y + 234 * scale);
  ctx.bezierCurveTo(
    x + 69 * scale,
    y + 233 * scale,
    x + 69 * scale,
    y + 233 * scale,
    x + 68 * scale,
    y + 233 * scale
  );
  ctx.bezierCurveTo(
    x + 67 * scale,
    y + 233 * scale,
    x + 67 * scale,
    y + 235 * scale,
    x + 65 * scale,
    y + 234 * scale
  );
  ctx.bezierCurveTo(
    x + 63 * scale,
    y + 232 * scale,
    x + 62 * scale,
    y + 231 * scale,
    x + 62 * scale,
    y + 231 * scale
  );
  ctx.bezierCurveTo(
    x + 62 * scale,
    y + 231 * scale,
    x + 64 * scale,
    y + 234 * scale,
    x + 64 * scale,
    y + 234 * scale
  );
  ctx.bezierCurveTo(
    x + 64 * scale,
    y + 235 * scale,
    x + 64 * scale,
    y + 236 * scale,
    x + 64 * scale,
    y + 237 * scale
  );
  ctx.bezierCurveTo(
    x + 64 * scale,
    y + 237 * scale,
    x + 64 * scale,
    y + 238 * scale,
    x + 64 * scale,
    y + 238 * scale
  );
  ctx.bezierCurveTo(
    x + 65 * scale,
    y + 238 * scale,
    x + 68 * scale,
    y + 235 * scale,
    x + 69 * scale,
    y + 234 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #5A, Dark Gray
  ctx.fillStyle = "#595959";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 69 * scale, y + 235 * scale);
  ctx.bezierCurveTo(
    x + 69 * scale,
    y + 234 * scale,
    x + 70 * scale,
    y + 234 * scale,
    x + 69 * scale,
    y + 234 * scale
  );
  ctx.bezierCurveTo(
    x + 69 * scale,
    y + 235 * scale,
    x + 68 * scale,
    y + 236 * scale,
    x + 67 * scale,
    y + 235 * scale
  );
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 234 * scale,
    x + 65 * scale,
    y + 234 * scale,
    x + 65 * scale,
    y + 234 * scale
  );
  ctx.bezierCurveTo(
    x + 65 * scale,
    y + 234 * scale,
    x + 66 * scale,
    y + 236 * scale,
    x + 66 * scale,
    y + 236 * scale
  );
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 237 * scale,
    x + 66 * scale,
    y + 238 * scale,
    x + 65 * scale,
    y + 238 * scale
  );
  ctx.bezierCurveTo(
    x + 65 * scale,
    y + 239 * scale,
    x + 65 * scale,
    y + 239 * scale,
    x + 65 * scale,
    y + 239 * scale
  );
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 239 * scale,
    x + 69 * scale,
    y + 236 * scale,
    x + 69 * scale,
    y + 235 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #6, Light Gray
  ctx.fillStyle = "#B7B7B7";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 72 * scale, y + 230 * scale);
  ctx.bezierCurveTo(
    x + 73 * scale,
    y + 230 * scale,
    x + 73 * scale,
    y + 230 * scale,
    x + 72 * scale,
    y + 230 * scale
  );
  ctx.bezierCurveTo(
    x + 71 * scale,
    y + 230 * scale,
    x + 70 * scale,
    y + 231 * scale,
    x + 69 * scale,
    y + 230 * scale
  );
  ctx.bezierCurveTo(
    x + 67 * scale,
    y + 228 * scale,
    x + 66 * scale,
    y + 227 * scale,
    x + 66 * scale,
    y + 228 * scale
  );
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 228 * scale,
    x + 68 * scale,
    y + 231 * scale,
    x + 68 * scale,
    y + 231 * scale
  );
  ctx.bezierCurveTo(
    x + 68 * scale,
    y + 232 * scale,
    x + 68 * scale,
    y + 233 * scale,
    x + 68 * scale,
    y + 234 * scale
  );
  ctx.bezierCurveTo(
    x + 67 * scale,
    y + 234 * scale,
    x + 68 * scale,
    y + 235 * scale,
    x + 68 * scale,
    y + 235 * scale
  );
  ctx.bezierCurveTo(
    x + 69 * scale,
    y + 234 * scale,
    x + 72 * scale,
    y + 231 * scale,
    x + 72 * scale,
    y + 230 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #7, Light Gray
  ctx.fillStyle = "#B7B7B7";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 76 * scale, y + 226 * scale);
  ctx.bezierCurveTo(
    x + 76 * scale,
    y + 225 * scale,
    x + 76 * scale,
    y + 225 * scale,
    x + 75 * scale,
    y + 225 * scale
  );
  ctx.bezierCurveTo(
    x + 75 * scale,
    y + 226 * scale,
    x + 74 * scale,
    y + 227 * scale,
    x + 73 * scale,
    y + 226 * scale
  );
  ctx.bezierCurveTo(
    x + 71 * scale,
    y + 224 * scale,
    x + 70 * scale,
    y + 223 * scale,
    x + 70 * scale,
    y + 223 * scale
  );
  ctx.bezierCurveTo(
    x + 70 * scale,
    y + 223 * scale,
    x + 71 * scale,
    y + 226 * scale,
    x + 71 * scale,
    y + 227 * scale
  );
  ctx.bezierCurveTo(
    x + 71 * scale,
    y + 227 * scale,
    x + 72 * scale,
    y + 229 * scale,
    x + 71 * scale,
    y + 229 * scale
  );
  ctx.bezierCurveTo(
    x + 71 * scale,
    y + 230 * scale,
    x + 71 * scale,
    y + 230 * scale,
    x + 72 * scale,
    y + 230 * scale
  );
  ctx.bezierCurveTo(
    x + 72 * scale,
    y + 230 * scale,
    x + 76 * scale,
    y + 227 * scale,
    x + 76 * scale,
    y + 226 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #8, Light Gray
  ctx.fillStyle = "#B7B7B7";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.miterLimit = "10";
  ctx.beginPath();
  ctx.moveTo(x + 80 * scale, y + 223 * scale);
  ctx.bezierCurveTo(
    x + 80 * scale,
    y + 222 * scale,
    x + 80 * scale,
    y + 222 * scale,
    x + 79 * scale,
    y + 222 * scale
  );
  ctx.bezierCurveTo(
    x + 79 * scale,
    y + 222 * scale,
    x + 78 * scale,
    y + 224 * scale,
    x + 77 * scale,
    y + 223 * scale
  );
  ctx.bezierCurveTo(
    x + 75 * scale,
    y + 221 * scale,
    x + 74 * scale,
    y + 220 * scale,
    x + 74 * scale,
    y + 220 * scale
  );
  ctx.bezierCurveTo(
    x + 74 * scale,
    y + 220 * scale,
    x + 75 * scale,
    y + 223 * scale,
    x + 75 * scale,
    y + 223 * scale
  );
  ctx.bezierCurveTo(
    x + 75 * scale,
    y + 224 * scale,
    x + 76 * scale,
    y + 225 * scale,
    x + 75 * scale,
    y + 226 * scale
  );
  ctx.bezierCurveTo(
    x + 75 * scale,
    y + 226 * scale,
    x + 75 * scale,
    y + 227 * scale,
    x + 76 * scale,
    y + 227 * scale
  );
  ctx.bezierCurveTo(
    x + 76 * scale,
    y + 227 * scale,
    x + 80 * scale,
    y + 224 * scale,
    x + 80 * scale,
    y + 223 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #8A, Dark Gray
  ctx.fillStyle = "#595959";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 80 * scale, y + 222 * scale);
  ctx.bezierCurveTo(
    x + 81 * scale,
    y + 222 * scale,
    x + 81 * scale,
    y + 222 * scale,
    x + 80 * scale,
    y + 222 * scale
  );
  ctx.bezierCurveTo(
    x + 79 * scale,
    y + 222 * scale,
    x + 78 * scale,
    y + 224 * scale,
    x + 78 * scale,
    y + 223 * scale
  );
  ctx.bezierCurveTo(
    x + 76 * scale,
    y + 221 * scale,
    x + 75 * scale,
    y + 221 * scale,
    x + 75 * scale,
    y + 221 * scale
  );
  ctx.bezierCurveTo(
    x + 75 * scale,
    y + 221 * scale,
    x + 76 * scale,
    y + 223 * scale,
    x + 76 * scale,
    y + 223 * scale
  );
  ctx.bezierCurveTo(
    x + 76 * scale,
    y + 224 * scale,
    x + 76 * scale,
    y + 225 * scale,
    x + 76 * scale,
    y + 226 * scale
  );
  ctx.bezierCurveTo(
    x + 75 * scale,
    y + 226 * scale,
    x + 75 * scale,
    y + 226 * scale,
    x + 76 * scale,
    y + 226 * scale
  );
  ctx.bezierCurveTo(
    x + 76 * scale,
    y + 226 * scale,
    x + 80 * scale,
    y + 223 * scale,
    x + 80 * scale,
    y + 222 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #9, Dark Gray
  ctx.fillStyle = "#595959";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 83 * scale, y + 219 * scale);
  ctx.bezierCurveTo(
    x + 83 * scale,
    y + 218 * scale,
    x + 84 * scale,
    y + 218 * scale,
    x + 83 * scale,
    y + 218 * scale
  );
  ctx.bezierCurveTo(
    x + 82 * scale,
    y + 218 * scale,
    x + 81 * scale,
    y + 220 * scale,
    x + 80 * scale,
    y + 219 * scale
  );
  ctx.bezierCurveTo(
    x + 78 * scale,
    y + 217 * scale,
    x + 77 * scale,
    y + 216 * scale,
    x + 77 * scale,
    y + 216 * scale
  );
  ctx.bezierCurveTo(
    x + 77 * scale,
    y + 216 * scale,
    x + 79 * scale,
    y + 219 * scale,
    x + 79 * scale,
    y + 219 * scale
  );
  ctx.bezierCurveTo(
    x + 79 * scale,
    y + 220 * scale,
    x + 79 * scale,
    y + 221 * scale,
    x + 79 * scale,
    y + 222 * scale
  );
  ctx.bezierCurveTo(
    x + 78 * scale,
    y + 222 * scale,
    x + 79 * scale,
    y + 223 * scale,
    x + 79 * scale,
    y + 223 * scale
  );
  ctx.bezierCurveTo(
    x + 80 * scale,
    y + 223 * scale,
    x + 83 * scale,
    y + 219 * scale,
    x + 83 * scale,
    y + 219 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #9A, Dark Gray
  ctx.fillStyle = "#595959";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 84 * scale, y + 218 * scale);
  ctx.bezierCurveTo(
    x + 84 * scale,
    y + 218 * scale,
    x + 85 * scale,
    y + 217 * scale,
    x + 84 * scale,
    y + 218 * scale
  );
  ctx.bezierCurveTo(
    x + 83 * scale,
    y + 218 * scale,
    x + 83 * scale,
    y + 220 * scale,
    x + 81 * scale,
    y + 219 * scale
  );
  ctx.bezierCurveTo(
    x + 79 * scale,
    y + 217 * scale,
    x + 78 * scale,
    y + 217 * scale,
    x + 78 * scale,
    y + 217 * scale
  );
  ctx.bezierCurveTo(
    x + 78 * scale,
    y + 217 * scale,
    x + 80 * scale,
    y + 219 * scale,
    x + 80 * scale,
    y + 220 * scale
  );
  ctx.bezierCurveTo(
    x + 80 * scale,
    y + 220 * scale,
    x + 81 * scale,
    y + 222 * scale,
    x + 81 * scale,
    y + 222 * scale
  );
  ctx.bezierCurveTo(
    x + 80 * scale,
    y + 223 * scale,
    x + 81 * scale,
    y + 223 * scale,
    x + 81 * scale,
    y + 223 * scale
  );
  ctx.bezierCurveTo(
    x + 82 * scale,
    y + 223 * scale,
    x + 84 * scale,
    y + 219 * scale,
    x + 84 * scale,
    y + 218 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #10, Dark Gray
  ctx.fillStyle = "#595959";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 86 * scale, y + 216 * scale);
  ctx.bezierCurveTo(
    x + 87 * scale,
    y + 215 * scale,
    x + 87 * scale,
    y + 215 * scale,
    x + 86 * scale,
    y + 216 * scale
  );
  ctx.bezierCurveTo(
    x + 85 * scale,
    y + 216 * scale,
    x + 85 * scale,
    y + 217 * scale,
    x + 83 * scale,
    y + 216 * scale
  );
  ctx.bezierCurveTo(
    x + 81 * scale,
    y + 214 * scale,
    x + 81 * scale,
    y + 213 * scale,
    x + 81 * scale,
    y + 213 * scale
  );
  ctx.bezierCurveTo(
    x + 81 * scale,
    y + 213 * scale,
    x + 82 * scale,
    y + 216 * scale,
    x + 82 * scale,
    y + 217 * scale
  );
  ctx.bezierCurveTo(
    x + 82 * scale,
    y + 217 * scale,
    x + 82 * scale,
    y + 219 * scale,
    x + 82 * scale,
    y + 219 * scale
  );
  ctx.bezierCurveTo(
    x + 82 * scale,
    y + 220 * scale,
    x + 82 * scale,
    y + 220 * scale,
    x + 82 * scale,
    y + 220 * scale
  );
  ctx.bezierCurveTo(
    x + 83 * scale,
    y + 220 * scale,
    x + 86 * scale,
    y + 217 * scale,
    x + 86 * scale,
    y + 216 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #11, Dark Gray
  ctx.fillStyle = "#595959";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 88 * scale, y + 212 * scale);
  ctx.bezierCurveTo(
    x + 88 * scale,
    y + 212 * scale,
    x + 88 * scale,
    y + 212 * scale,
    x + 87 * scale,
    y + 212 * scale
  );
  ctx.bezierCurveTo(
    x + 87 * scale,
    y + 212 * scale,
    x + 86 * scale,
    y + 213 * scale,
    x + 85 * scale,
    y + 212 * scale
  );
  ctx.bezierCurveTo(
    x + 83 * scale,
    y + 210 * scale,
    x + 82 * scale,
    y + 210 * scale,
    x + 82 * scale,
    y + 210 * scale
  );
  ctx.bezierCurveTo(
    x + 82 * scale,
    y + 210 * scale,
    x + 84 * scale,
    y + 213 * scale,
    x + 84 * scale,
    y + 213 * scale
  );
  ctx.bezierCurveTo(
    x + 84 * scale,
    y + 213 * scale,
    x + 84 * scale,
    y + 215 * scale,
    x + 84 * scale,
    y + 215 * scale
  );
  ctx.bezierCurveTo(
    x + 83 * scale,
    y + 216 * scale,
    x + 84 * scale,
    y + 216 * scale,
    x + 84 * scale,
    y + 216 * scale
  );
  ctx.bezierCurveTo(
    x + 85 * scale,
    y + 216 * scale,
    x + 88 * scale,
    y + 213 * scale,
    x + 88 * scale,
    y + 212 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #12, Dark Gray
  ctx.fillStyle = "#595959";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 91 * scale, y + 209 * scale);
  ctx.bezierCurveTo(
    x + 92 * scale,
    y + 208 * scale,
    x + 92 * scale,
    y + 208 * scale,
    x + 91 * scale,
    y + 208 * scale
  );
  ctx.bezierCurveTo(
    x + 90 * scale,
    y + 209 * scale,
    x + 90 * scale,
    y + 210 * scale,
    x + 88 * scale,
    y + 209 * scale
  );
  ctx.bezierCurveTo(
    x + 86 * scale,
    y + 207 * scale,
    x + 86 * scale,
    y + 206 * scale,
    x + 86 * scale,
    y + 206 * scale
  );
  ctx.bezierCurveTo(
    x + 86 * scale,
    y + 206 * scale,
    x + 87 * scale,
    y + 209 * scale,
    x + 87 * scale,
    y + 210 * scale
  );
  ctx.bezierCurveTo(
    x + 87 * scale,
    y + 210 * scale,
    x + 88 * scale,
    y + 212 * scale,
    x + 87 * scale,
    y + 212 * scale
  );
  ctx.bezierCurveTo(
    x + 87 * scale,
    y + 212 * scale,
    x + 87 * scale,
    y + 213 * scale,
    x + 88 * scale,
    y + 213 * scale
  );
  ctx.bezierCurveTo(
    x + 88 * scale,
    y + 213 * scale,
    x + 91 * scale,
    y + 210 * scale,
    x + 91 * scale,
    y + 209 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #13, Dark Gray
  ctx.fillStyle = "#595959";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 95 * scale, y + 206 * scale);
  ctx.bezierCurveTo(
    x + 95 * scale,
    y + 205 * scale,
    x + 95 * scale,
    y + 205 * scale,
    x + 95 * scale,
    y + 205 * scale
  );
  ctx.bezierCurveTo(
    x + 94 * scale,
    y + 206 * scale,
    x + 93 * scale,
    y + 207 * scale,
    x + 92 * scale,
    y + 206 * scale
  );
  ctx.bezierCurveTo(
    x + 90 * scale,
    y + 204 * scale,
    x + 89 * scale,
    y + 203 * scale,
    x + 89 * scale,
    y + 203 * scale
  );
  ctx.bezierCurveTo(
    x + 89 * scale,
    y + 203 * scale,
    x + 91 * scale,
    y + 206 * scale,
    x + 91 * scale,
    y + 207 * scale
  );
  ctx.bezierCurveTo(
    x + 91 * scale,
    y + 207 * scale,
    x + 91 * scale,
    y + 208 * scale,
    x + 91 * scale,
    y + 209 * scale
  );
  ctx.bezierCurveTo(
    x + 90 * scale,
    y + 209 * scale,
    x + 91 * scale,
    y + 210 * scale,
    x + 91 * scale,
    y + 210 * scale
  );
  ctx.bezierCurveTo(
    x + 92 * scale,
    y + 210 * scale,
    x + 95 * scale,
    y + 207 * scale,
    x + 95 * scale,
    y + 206 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Right Tooth #12-13A, Dark Gray
  ctx.fillStyle = "#595959";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 93 * scale, y + 207 * scale);
  ctx.bezierCurveTo(
    x + 93 * scale,
    y + 206 * scale,
    x + 93 * scale,
    y + 206 * scale,
    x + 92 * scale,
    y + 206 * scale
  );
  ctx.bezierCurveTo(
    x + 92 * scale,
    y + 206 * scale,
    x + 91 * scale,
    y + 208 * scale,
    x + 90 * scale,
    y + 207 * scale
  );
  ctx.bezierCurveTo(
    x + 88 * scale,
    y + 205 * scale,
    x + 87 * scale,
    y + 204 * scale,
    x + 87 * scale,
    y + 204 * scale
  );
  ctx.bezierCurveTo(
    x + 87 * scale,
    y + 204 * scale,
    x + 88 * scale,
    y + 207 * scale,
    x + 88 * scale,
    y + 207 * scale
  );
  ctx.bezierCurveTo(
    x + 89 * scale,
    y + 208 * scale,
    x + 89 * scale,
    y + 209 * scale,
    x + 88 * scale,
    y + 210 * scale
  );
  ctx.bezierCurveTo(
    x + 88 * scale,
    y + 210 * scale,
    x + 88 * scale,
    y + 211 * scale,
    x + 89 * scale,
    y + 211 * scale
  );
  ctx.bezierCurveTo(
    x + 89 * scale,
    y + 211 * scale,
    x + 92 * scale,
    y + 208 * scale,
    x + 93 * scale,
    y + 207 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #1, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 55 * scale, y + 251 * scale);
  ctx.bezierCurveTo(
    x + 55 * scale,
    y + 251 * scale,
    x + 55 * scale,
    y + 251 * scale,
    x + 55 * scale,
    y + 251 * scale
  );
  ctx.bezierCurveTo(
    x + 55 * scale,
    y + 252 * scale,
    x + 55 * scale,
    y + 253 * scale,
    x + 53 * scale,
    y + 253 * scale
  );
  ctx.bezierCurveTo(
    x + 51 * scale,
    y + 253 * scale,
    x + 51 * scale,
    y + 253 * scale,
    x + 51 * scale,
    y + 253 * scale
  );
  ctx.bezierCurveTo(
    x + 51 * scale,
    y + 253 * scale,
    x + 53 * scale,
    y + 254 * scale,
    x + 53 * scale,
    y + 254 * scale
  );
  ctx.bezierCurveTo(
    x + 53 * scale,
    y + 254 * scale,
    x + 54 * scale,
    y + 255 * scale,
    x + 54 * scale,
    y + 256 * scale
  );
  ctx.bezierCurveTo(
    x + 54 * scale,
    y + 256 * scale,
    x + 54 * scale,
    y + 256 * scale,
    x + 55 * scale,
    y + 256 * scale
  );
  ctx.bezierCurveTo(
    x + 55 * scale,
    y + 255 * scale,
    x + 56 * scale,
    y + 252 * scale,
    x + 55 * scale,
    y + 251 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #2A, Light Gray
  ctx.fillStyle = "#A3A3A3";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 66 * scale, y + 249 * scale);
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 249 * scale,
    x + 67 * scale,
    y + 248 * scale,
    x + 65 * scale,
    y + 249 * scale
  );
  ctx.bezierCurveTo(
    x + 65 * scale,
    y + 249 * scale,
    x + 63 * scale,
    y + 250 * scale,
    x + 62 * scale,
    y + 249 * scale
  );
  ctx.bezierCurveTo(
    x + 59 * scale,
    y + 247 * scale,
    x + 58 * scale,
    y + 246 * scale,
    x + 58 * scale,
    y + 246 * scale
  );
  ctx.bezierCurveTo(
    x + 58 * scale,
    y + 246 * scale,
    x + 60 * scale,
    y + 250 * scale,
    x + 60 * scale,
    y + 250 * scale
  );
  ctx.bezierCurveTo(
    x + 60 * scale,
    y + 250 * scale,
    x + 60 * scale,
    y + 252 * scale,
    x + 59 * scale,
    y + 253 * scale
  );
  ctx.bezierCurveTo(
    x + 59 * scale,
    y + 253 * scale,
    x + 59 * scale,
    y + 254 * scale,
    x + 60 * scale,
    y + 254 * scale
  );
  ctx.bezierCurveTo(
    x + 61 * scale,
    y + 254 * scale,
    x + 65 * scale,
    y + 250 * scale,
    x + 66 * scale,
    y + 249 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #2, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 60 * scale, y + 251 * scale);
  ctx.bezierCurveTo(
    x + 60 * scale,
    y + 250 * scale,
    x + 61 * scale,
    y + 250 * scale,
    x + 59 * scale,
    y + 251 * scale
  );
  ctx.bezierCurveTo(
    x + 59 * scale,
    y + 251 * scale,
    x + 58 * scale,
    y + 253 * scale,
    x + 56 * scale,
    y + 252 * scale
  );
  ctx.bezierCurveTo(
    x + 53 * scale,
    y + 250 * scale,
    x + 52 * scale,
    y + 250 * scale,
    x + 52 * scale,
    y + 250 * scale
  );
  ctx.bezierCurveTo(
    x + 52 * scale,
    y + 250 * scale,
    x + 54 * scale,
    y + 253 * scale,
    x + 54 * scale,
    y + 253 * scale
  );
  ctx.bezierCurveTo(
    x + 55 * scale,
    y + 253 * scale,
    x + 55 * scale,
    y + 255 * scale,
    x + 54 * scale,
    y + 256 * scale
  );
  ctx.bezierCurveTo(
    x + 54 * scale,
    y + 256 * scale,
    x + 54 * scale,
    y + 257 * scale,
    x + 55 * scale,
    y + 257 * scale
  );
  ctx.bezierCurveTo(
    x + 56 * scale,
    y + 256 * scale,
    x + 60 * scale,
    y + 252 * scale,
    x + 60 * scale,
    y + 251 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #3, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 67 * scale, y + 252 * scale);
  ctx.bezierCurveTo(
    x + 67 * scale,
    y + 251 * scale,
    x + 68 * scale,
    y + 251 * scale,
    x + 66 * scale,
    y + 251 * scale
  );
  ctx.bezierCurveTo(
    x + 65 * scale,
    y + 251 * scale,
    x + 63 * scale,
    y + 253 * scale,
    x + 61 * scale,
    y + 251 * scale
  );
  ctx.bezierCurveTo(
    x + 59 * scale,
    y + 248 * scale,
    x + 58 * scale,
    y + 247 * scale,
    x + 58 * scale,
    y + 247 * scale
  );
  ctx.bezierCurveTo(
    x + 58 * scale,
    y + 247 * scale,
    x + 58 * scale,
    y + 251 * scale,
    x + 58 * scale,
    y + 252 * scale
  );
  ctx.bezierCurveTo(
    x + 58 * scale,
    y + 253 * scale,
    x + 58 * scale,
    y + 255 * scale,
    x + 57 * scale,
    y + 255 * scale
  );
  ctx.bezierCurveTo(
    x + 56 * scale,
    y + 256 * scale,
    x + 56 * scale,
    y + 257 * scale,
    x + 56 * scale,
    y + 257 * scale
  );
  ctx.bezierCurveTo(
    x + 58 * scale,
    y + 256 * scale,
    x + 66 * scale,
    y + 253 * scale,
    x + 67 * scale,
    y + 252 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #4A, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 68 * scale, y + 249 * scale);
  ctx.bezierCurveTo(
    x + 68 * scale,
    y + 248 * scale,
    x + 69 * scale,
    y + 248 * scale,
    x + 67 * scale,
    y + 248 * scale
  );
  ctx.bezierCurveTo(
    x + 67 * scale,
    y + 249 * scale,
    x + 65 * scale,
    y + 251 * scale,
    x + 63 * scale,
    y + 250 * scale
  );
  ctx.bezierCurveTo(
    x + 61 * scale,
    y + 248 * scale,
    x + 60 * scale,
    y + 247 * scale,
    x + 60 * scale,
    y + 247 * scale
  );
  ctx.bezierCurveTo(
    x + 60 * scale,
    y + 247 * scale,
    x + 61 * scale,
    y + 250 * scale,
    x + 61 * scale,
    y + 251 * scale
  );
  ctx.bezierCurveTo(
    x + 62 * scale,
    y + 251 * scale,
    x + 62 * scale,
    y + 253 * scale,
    x + 61 * scale,
    y + 254 * scale
  );
  ctx.bezierCurveTo(
    x + 61 * scale,
    y + 254 * scale,
    x + 61 * scale,
    y + 255 * scale,
    x + 62 * scale,
    y + 255 * scale
  );
  ctx.bezierCurveTo(
    x + 63 * scale,
    y + 255 * scale,
    x + 68 * scale,
    y + 250 * scale,
    x + 68 * scale,
    y + 249 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #5A, Light Gray
  ctx.fillStyle = "#A3A3A3";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 72 * scale, y + 246 * scale);
  ctx.bezierCurveTo(
    x + 72 * scale,
    y + 245 * scale,
    x + 73 * scale,
    y + 245 * scale,
    x + 71 * scale,
    y + 245 * scale
  );
  ctx.bezierCurveTo(
    x + 71 * scale,
    y + 245 * scale,
    x + 69 * scale,
    y + 247 * scale,
    x + 68 * scale,
    y + 245 * scale
  );
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 243 * scale,
    x + 65 * scale,
    y + 243 * scale,
    x + 65 * scale,
    y + 243 * scale
  );
  ctx.bezierCurveTo(
    x + 65 * scale,
    y + 243 * scale,
    x + 66 * scale,
    y + 246 * scale,
    x + 66 * scale,
    y + 246 * scale
  );
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 247 * scale,
    x + 66 * scale,
    y + 249 * scale,
    x + 66 * scale,
    y + 249 * scale
  );
  ctx.bezierCurveTo(
    x + 65 * scale,
    y + 250 * scale,
    x + 65 * scale,
    y + 250 * scale,
    x + 66 * scale,
    y + 250 * scale
  );
  ctx.bezierCurveTo(
    x + 67 * scale,
    y + 250 * scale,
    x + 72 * scale,
    y + 247 * scale,
    x + 72 * scale,
    y + 246 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #4, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 68 * scale, y + 247 * scale);
  ctx.bezierCurveTo(
    x + 69 * scale,
    y + 247 * scale,
    x + 69 * scale,
    y + 246 * scale,
    x + 68 * scale,
    y + 247 * scale
  );
  ctx.bezierCurveTo(
    x + 67 * scale,
    y + 247 * scale,
    x + 66 * scale,
    y + 249 * scale,
    x + 64 * scale,
    y + 248 * scale
  );
  ctx.bezierCurveTo(
    x + 62 * scale,
    y + 246 * scale,
    x + 61 * scale,
    y + 245 * scale,
    x + 61 * scale,
    y + 245 * scale
  );
  ctx.bezierCurveTo(
    x + 61 * scale,
    y + 245 * scale,
    x + 62 * scale,
    y + 248 * scale,
    x + 63 * scale,
    y + 249 * scale
  );
  ctx.bezierCurveTo(
    x + 63 * scale,
    y + 249 * scale,
    x + 63 * scale,
    y + 251 * scale,
    x + 62 * scale,
    y + 251 * scale
  );
  ctx.bezierCurveTo(
    x + 62 * scale,
    y + 252 * scale,
    x + 62 * scale,
    y + 253 * scale,
    x + 63 * scale,
    y + 252 * scale
  );
  ctx.bezierCurveTo(
    x + 64 * scale,
    y + 252 * scale,
    x + 68 * scale,
    y + 248 * scale,
    x + 68 * scale,
    y + 247 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #5, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 75 * scale, y + 243 * scale);
  ctx.bezierCurveTo(
    x + 75 * scale,
    y + 242 * scale,
    x + 75 * scale,
    y + 242 * scale,
    x + 74 * scale,
    y + 242 * scale
  );
  ctx.bezierCurveTo(
    x + 73 * scale,
    y + 242 * scale,
    x + 72 * scale,
    y + 245 * scale,
    x + 70 * scale,
    y + 243 * scale
  );
  ctx.bezierCurveTo(
    x + 67 * scale,
    y + 241 * scale,
    x + 66 * scale,
    y + 241 * scale,
    x + 66 * scale,
    y + 241 * scale
  );
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 241 * scale,
    x + 68 * scale,
    y + 244 * scale,
    x + 68 * scale,
    y + 245 * scale
  );
  ctx.bezierCurveTo(
    x + 68 * scale,
    y + 245 * scale,
    x + 68 * scale,
    y + 247 * scale,
    x + 67 * scale,
    y + 248 * scale
  );
  ctx.bezierCurveTo(
    x + 70 * scale,
    y + 248 * scale,
    x + 67 * scale,
    y + 249 * scale,
    x + 68 * scale,
    y + 249 * scale
  );
  ctx.bezierCurveTo(
    x + 69 * scale,
    y + 249 * scale,
    x + 74 * scale,
    y + 244 * scale,
    x + 75 * scale,
    y + 243 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #6, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 77 * scale, y + 239 * scale);
  ctx.bezierCurveTo(
    x + 78 * scale,
    y + 238 * scale,
    x + 78 * scale,
    y + 238 * scale,
    x + 77 * scale,
    y + 238 * scale
  );
  ctx.bezierCurveTo(
    x + 76 * scale,
    y + 239 * scale,
    x + 75 * scale,
    y + 240 * scale,
    x + 73 * scale,
    y + 239 * scale
  );
  ctx.bezierCurveTo(
    x + 71 * scale,
    y + 237 * scale,
    x + 70 * scale,
    y + 237 * scale,
    x + 70 * scale,
    y + 237 * scale
  );
  ctx.bezierCurveTo(
    x + 70 * scale,
    y + 237 * scale,
    x + 71 * scale,
    y + 240 * scale,
    x + 72 * scale,
    y + 240 * scale
  );
  ctx.bezierCurveTo(
    x + 72 * scale,
    y + 241 * scale,
    x + 72 * scale,
    y + 243 * scale,
    x + 71 * scale,
    y + 243 * scale
  );
  ctx.bezierCurveTo(
    x + 71 * scale,
    y + 244 * scale,
    x + 71 * scale,
    y + 244 * scale,
    x + 72 * scale,
    y + 244 * scale
  );
  ctx.bezierCurveTo(
    x + 73 * scale,
    y + 244 * scale,
    x + 77 * scale,
    y + 240 * scale,
    x + 77 * scale,
    y + 239 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #7A, Gray
  ctx.fillStyle = "#A3A3A3";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 84 * scale, y + 235 * scale);
  ctx.bezierCurveTo(
    x + 84 * scale,
    y + 235 * scale,
    x + 84 * scale,
    y + 235 * scale,
    x + 83 * scale,
    y + 235 * scale
  );
  ctx.bezierCurveTo(
    x + 82 * scale,
    y + 235 * scale,
    x + 81 * scale,
    y + 237 * scale,
    x + 79 * scale,
    y + 235 * scale
  );
  ctx.bezierCurveTo(
    x + 77 * scale,
    y + 233 * scale,
    x + 76 * scale,
    y + 233 * scale,
    x + 76 * scale,
    y + 233 * scale
  );
  ctx.bezierCurveTo(
    x + 76 * scale,
    y + 233 * scale,
    x + 77 * scale,
    y + 236 * scale,
    x + 77 * scale,
    y + 236 * scale
  );
  ctx.bezierCurveTo(
    x + 78 * scale,
    y + 237 * scale,
    x + 78 * scale,
    y + 238 * scale,
    x + 77 * scale,
    y + 239 * scale
  );
  ctx.bezierCurveTo(
    x + 77 * scale,
    y + 239 * scale,
    x + 77 * scale,
    y + 240 * scale,
    x + 77 * scale,
    y + 240 * scale
  );
  ctx.bezierCurveTo(
    x + 78 * scale,
    y + 240 * scale,
    x + 83 * scale,
    y + 236 * scale,
    x + 84 * scale,
    y + 235 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #7, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 82 * scale, y + 236 * scale);
  ctx.bezierCurveTo(
    x + 82 * scale,
    y + 235 * scale,
    x + 83 * scale,
    y + 235 * scale,
    x + 81 * scale,
    y + 235 * scale
  );
  ctx.bezierCurveTo(
    x + 80 * scale,
    y + 236 * scale,
    x + 79 * scale,
    y + 238 * scale,
    x + 77 * scale,
    y + 236 * scale
  );
  ctx.bezierCurveTo(
    x + 74 * scale,
    y + 234 * scale,
    x + 73 * scale,
    y + 233 * scale,
    x + 73 * scale,
    y + 233 * scale
  );
  ctx.bezierCurveTo(
    x + 73 * scale,
    y + 233 * scale,
    x + 75 * scale,
    y + 237 * scale,
    x + 75 * scale,
    y + 237 * scale
  );
  ctx.bezierCurveTo(
    x + 75 * scale,
    y + 238 * scale,
    x + 76 * scale,
    y + 240 * scale,
    x + 75 * scale,
    y + 241 * scale
  );
  ctx.bezierCurveTo(
    x + 74 * scale,
    y + 241 * scale,
    x + 75 * scale,
    y + 242 * scale,
    x + 75 * scale,
    y + 242 * scale
  );
  ctx.bezierCurveTo(
    x + 76 * scale,
    y + 241 * scale,
    x + 82 * scale,
    y + 237 * scale,
    x + 82 * scale,
    y + 236 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #8, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 88 * scale, y + 231 * scale);
  ctx.bezierCurveTo(
    x + 88 * scale,
    y + 231 * scale,
    x + 88 * scale,
    y + 231 * scale,
    x + 87 * scale,
    y + 231 * scale
  );
  ctx.bezierCurveTo(
    x + 87 * scale,
    y + 231 * scale,
    x + 85 * scale,
    y + 233 * scale,
    x + 84 * scale,
    y + 232 * scale
  );
  ctx.bezierCurveTo(
    x + 81 * scale,
    y + 230 * scale,
    x + 80 * scale,
    y + 229 * scale,
    x + 80 * scale,
    y + 229 * scale
  );
  ctx.bezierCurveTo(
    x + 80 * scale,
    y + 229 * scale,
    x + 82 * scale,
    y + 233 * scale,
    x + 82 * scale,
    y + 233 * scale
  );
  ctx.bezierCurveTo(
    x + 82 * scale,
    y + 233 * scale,
    x + 82 * scale,
    y + 235 * scale,
    x + 82 * scale,
    y + 236 * scale
  );
  ctx.bezierCurveTo(
    x + 81 * scale,
    y + 236 * scale,
    x + 82 * scale,
    y + 237 * scale,
    x + 82 * scale,
    y + 237 * scale
  );
  ctx.bezierCurveTo(
    x + 83 * scale,
    y + 236 * scale,
    x + 88 * scale,
    y + 233 * scale,
    x + 88 * scale,
    y + 231 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #9, Gray
  ctx.fillStyle = "#A8A8A8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 91 * scale, y + 228 * scale);
  ctx.bezierCurveTo(
    x + 92 * scale,
    y + 228 * scale,
    x + 92 * scale,
    y + 228 * scale,
    x + 91 * scale,
    y + 228 * scale
  );
  ctx.bezierCurveTo(
    x + 90 * scale,
    y + 228 * scale,
    x + 88 * scale,
    y + 229 * scale,
    x + 87 * scale,
    y + 228 * scale
  );
  ctx.bezierCurveTo(
    x + 85 * scale,
    y + 225 * scale,
    x + 84 * scale,
    y + 225 * scale,
    x + 84 * scale,
    y + 225 * scale
  );
  ctx.bezierCurveTo(
    x + 84 * scale,
    y + 225 * scale,
    x + 85 * scale,
    y + 228 * scale,
    x + 85 * scale,
    y + 228 * scale
  );
  ctx.bezierCurveTo(
    x + 85 * scale,
    y + 229 * scale,
    x + 85 * scale,
    y + 231 * scale,
    x + 84 * scale,
    y + 231 * scale
  );
  ctx.bezierCurveTo(
    x + 84 * scale,
    y + 231 * scale,
    x + 84 * scale,
    y + 232 * scale,
    x + 84 * scale,
    y + 232 * scale
  );
  ctx.bezierCurveTo(
    x + 85 * scale,
    y + 232 * scale,
    x + 91 * scale,
    y + 229 * scale,
    x + 91 * scale,
    y + 228 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #10, Gray
  ctx.fillStyle = "#A8A8A8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 96 * scale, y + 225 * scale);
  ctx.bezierCurveTo(
    x + 96 * scale,
    y + 224 * scale,
    x + 97 * scale,
    y + 224 * scale,
    x + 95 * scale,
    y + 224 * scale
  );
  ctx.bezierCurveTo(
    x + 94 * scale,
    y + 224 * scale,
    x + 93 * scale,
    y + 225 * scale,
    x + 92 * scale,
    y + 224 * scale
  );
  ctx.bezierCurveTo(
    x + 90 * scale,
    y + 221 * scale,
    x + 89 * scale,
    y + 220 * scale,
    x + 89 * scale,
    y + 220 * scale
  );
  ctx.bezierCurveTo(
    x + 89 * scale,
    y + 220 * scale,
    x + 90 * scale,
    y + 224 * scale,
    x + 90 * scale,
    y + 224 * scale
  );
  ctx.bezierCurveTo(
    x + 90 * scale,
    y + 225 * scale,
    x + 89 * scale,
    y + 226 * scale,
    x + 89 * scale,
    y + 227 * scale
  );
  ctx.bezierCurveTo(
    x + 88 * scale,
    y + 227 * scale,
    x + 88 * scale,
    y + 228 * scale,
    x + 89 * scale,
    y + 228 * scale
  );
  ctx.bezierCurveTo(
    x + 90 * scale,
    y + 228 * scale,
    x + 95 * scale,
    y + 226 * scale,
    x + 96 * scale,
    y + 225 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #11, Gray
  ctx.fillStyle = "#A8A8A8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 98 * scale, y + 218 * scale);
  ctx.bezierCurveTo(
    x + 98 * scale,
    y + 218 * scale,
    x + 98 * scale,
    y + 217 * scale,
    x + 97 * scale,
    y + 218 * scale
  );
  ctx.bezierCurveTo(
    x + 96 * scale,
    y + 218 * scale,
    x + 95 * scale,
    y + 220 * scale,
    x + 94 * scale,
    y + 219 * scale
  );
  ctx.bezierCurveTo(
    x + 91 * scale,
    y + 218 * scale,
    x + 90 * scale,
    y + 217 * scale,
    x + 90 * scale,
    y + 217 * scale
  );
  ctx.bezierCurveTo(
    x + 90 * scale,
    y + 217 * scale,
    x + 92 * scale,
    y + 220 * scale,
    x + 92 * scale,
    y + 220 * scale
  );
  ctx.bezierCurveTo(
    x + 92 * scale,
    y + 221 * scale,
    x + 93 * scale,
    y + 223 * scale,
    x + 92 * scale,
    y + 223 * scale
  );
  ctx.bezierCurveTo(
    x + 92 * scale,
    y + 224 * scale,
    x + 92 * scale,
    y + 224 * scale,
    x + 93 * scale,
    y + 224 * scale
  );
  ctx.bezierCurveTo(
    x + 93 * scale,
    y + 224 * scale,
    x + 97 * scale,
    y + 219 * scale,
    x + 98 * scale,
    y + 218 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #12, Gray
  ctx.fillStyle = "#A3A3A3";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 102 * scale, y + 217 * scale);
  ctx.bezierCurveTo(
    x + 102 * scale,
    y + 216 * scale,
    x + 102 * scale,
    y + 216 * scale,
    x + 101 * scale,
    y + 216 * scale
  );
  ctx.bezierCurveTo(
    x + 101 * scale,
    y + 216 * scale,
    x + 100 * scale,
    y + 218 * scale,
    x + 98 * scale,
    y + 217 * scale
  );
  ctx.bezierCurveTo(
    x + 96 * scale,
    y + 215 * scale,
    x + 96 * scale,
    y + 214 * scale,
    x + 96 * scale,
    y + 214 * scale
  );
  ctx.bezierCurveTo(
    x + 96 * scale,
    y + 214 * scale,
    x + 97 * scale,
    y + 217 * scale,
    x + 97 * scale,
    y + 217 * scale
  );
  ctx.bezierCurveTo(
    x + 97 * scale,
    y + 218 * scale,
    x + 97 * scale,
    y + 219 * scale,
    x + 97 * scale,
    y + 220 * scale
  );
  ctx.bezierCurveTo(
    x + 96 * scale,
    y + 220 * scale,
    x + 96 * scale,
    y + 221 * scale,
    x + 97 * scale,
    y + 220 * scale
  );
  ctx.bezierCurveTo(
    x + 97 * scale,
    y + 220 * scale,
    x + 101 * scale,
    y + 218 * scale,
    x + 102 * scale,
    y + 217 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Lower Jaw Left Tooth #13, Gray
  ctx.fillStyle = "#A3A3A3";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 107 * scale, y + 213 * scale);
  ctx.bezierCurveTo(
    x + 107 * scale,
    y + 212 * scale,
    x + 108 * scale,
    y + 212 * scale,
    x + 106 * scale,
    y + 212 * scale
  );
  ctx.bezierCurveTo(
    x + 105 * scale,
    y + 212 * scale,
    x + 104 * scale,
    y + 214 * scale,
    x + 103 * scale,
    y + 213 * scale
  );
  ctx.bezierCurveTo(
    x + 100 * scale,
    y + 210 * scale,
    x + 99 * scale,
    y + 210 * scale,
    x + 99 * scale,
    y + 210 * scale
  );
  ctx.bezierCurveTo(
    x + 99 * scale,
    y + 210 * scale,
    x + 101 * scale,
    y + 213 * scale,
    x + 101 * scale,
    y + 213 * scale
  );
  ctx.bezierCurveTo(
    x + 101 * scale,
    y + 214 * scale,
    x + 101 * scale,
    y + 216 * scale,
    x + 100 * scale,
    y + 216 * scale
  );
  ctx.bezierCurveTo(
    x + 100 * scale,
    y + 217 * scale,
    x + 100 * scale,
    y + 217 * scale,
    x + 101 * scale,
    y + 217 * scale
  );
  ctx.bezierCurveTo(
    x + 102 * scale,
    y + 217 * scale,
    x + 106 * scale,
    y + 214 * scale,
    x + 107 * scale,
    y + 213 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Right Tooth #8, Gray
  ctx.fillStyle = "#A8A8A8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 84 * scale, y + 156 * scale);
  ctx.bezierCurveTo(
    x + 84 * scale,
    y + 155 * scale,
    x + 78 * scale,
    y + 152 * scale,
    x + 78 * scale,
    y + 152 * scale
  );
  ctx.bezierCurveTo(
    x + 77 * scale,
    y + 153 * scale,
    x + 77 * scale,
    y + 153 * scale,
    x + 77 * scale,
    y + 152 * scale
  );
  ctx.bezierCurveTo(
    x + 77 * scale,
    y + 154 * scale,
    x + 78 * scale,
    y + 157 * scale,
    x + 78 * scale,
    y + 161 * scale
  );
  ctx.bezierCurveTo(
    x + 78 * scale,
    y + 161 * scale,
    x + 81 * scale,
    y + 157 * scale,
    x + 82 * scale,
    y + 157 * scale
  );
  ctx.bezierCurveTo(
    x + 83 * scale,
    y + 157 * scale,
    x + 84 * scale,
    y + 157 * scale,
    x + 84 * scale,
    y + 156 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Right Tooth #7, Gray
  ctx.fillStyle = "#A8A8A8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 79 * scale, y + 152 * scale);
  ctx.bezierCurveTo(
    x + 79 * scale,
    y + 151 * scale,
    x + 72 * scale,
    y + 147 * scale,
    x + 71 * scale,
    y + 147 * scale
  );
  ctx.bezierCurveTo(
    x + 70 * scale,
    y + 148 * scale,
    x + 70 * scale,
    y + 148 * scale,
    x + 71 * scale,
    y + 149 * scale
  );
  ctx.bezierCurveTo(
    x + 72 * scale,
    y + 150 * scale,
    x + 72 * scale,
    y + 158 * scale,
    x + 72 * scale,
    y + 158 * scale
  );
  ctx.bezierCurveTo(
    x + 72 * scale,
    y + 158 * scale,
    x + 75 * scale,
    y + 153 * scale,
    x + 77 * scale,
    y + 153 * scale
  );
  ctx.bezierCurveTo(
    x + 78 * scale,
    y + 153 * scale,
    x + 79 * scale,
    y + 153 * scale,
    x + 79 * scale,
    y + 152 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Right Tooth #6, Gray
  ctx.fillStyle = "#A8A8A8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 72 * scale, y + 147 * scale);
  ctx.bezierCurveTo(
    x + 73 * scale,
    y + 144 * scale,
    x + 66 * scale,
    y + 144 * scale,
    x + 65 * scale,
    y + 143 * scale
  );
  ctx.bezierCurveTo(
    x + 64 * scale,
    y + 143 * scale,
    x + 65 * scale,
    y + 143 * scale,
    x + 65 * scale,
    y + 145 * scale
  );
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 144 * scale,
    x + 66 * scale,
    y + 150 * scale,
    x + 66 * scale,
    y + 154 * scale
  );
  ctx.bezierCurveTo(
    x + 67 * scale,
    y + 151 * scale,
    x + 70 * scale,
    y + 148 * scale,
    x + 71 * scale,
    y + 150 * scale
  );
  ctx.bezierCurveTo(
    x + 72 * scale,
    y + 146 * scale,
    x + 73 * scale,
    y + 146 * scale,
    x + 72 * scale,
    y + 147 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Right Tooth #5, Gray
  ctx.fillStyle = "#A8A8A8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 67 * scale, y + 143 * scale);
  ctx.bezierCurveTo(
    x + 67 * scale,
    y + 142 * scale,
    x + 60 * scale,
    y + 139 * scale,
    x + 59 * scale,
    y + 140 * scale
  );
  ctx.bezierCurveTo(
    x + 58 * scale,
    y + 140 * scale,
    x + 58 * scale,
    y + 141 * scale,
    x + 59 * scale,
    y + 141 * scale
  );
  ctx.bezierCurveTo(
    x + 60 * scale,
    y + 142 * scale,
    x + 61 * scale,
    y + 150 * scale,
    x + 61 * scale,
    y + 150 * scale
  );
  ctx.bezierCurveTo(
    x + 61 * scale,
    y + 150 * scale,
    x + 64 * scale,
    y + 144 * scale,
    x + 65 * scale,
    y + 144 * scale
  );
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 143 * scale,
    x + 67 * scale,
    y + 144 * scale,
    x + 67 * scale,
    y + 143 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Right Tooth #4, Gray
  ctx.fillStyle = "#A8A8A8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 62 * scale, y + 141 * scale);
  ctx.bezierCurveTo(
    x + 62 * scale,
    y + 140 * scale,
    x + 57 * scale,
    y + 137 * scale,
    x + 56 * scale,
    y + 138 * scale
  );
  ctx.bezierCurveTo(
    x + 55 * scale,
    y + 138 * scale,
    x + 55 * scale,
    y + 139 * scale,
    x + 56 * scale,
    y + 139 * scale
  );
  ctx.bezierCurveTo(
    x + 55 * scale,
    y + 139 * scale,
    x + 56 * scale,
    y + 147 * scale,
    x + 55 * scale,
    y + 146 * scale
  );
  ctx.bezierCurveTo(
    x + 56 * scale,
    y + 146 * scale,
    x + 59 * scale,
    y + 142 * scale,
    x + 61 * scale,
    y + 141 * scale
  );
  ctx.bezierCurveTo(
    x + 61 * scale,
    y + 141 * scale,
    x + 61 * scale,
    y + 142 * scale,
    x + 62 * scale,
    y + 141 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Right Tooth #3, Gray
  ctx.fillStyle = "#A8A8A8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 57 * scale, y + 138 * scale);
  ctx.bezierCurveTo(
    x + 57 * scale,
    y + 137 * scale,
    x + 51 * scale,
    y + 134 * scale,
    x + 50 * scale,
    y + 134 * scale
  );
  ctx.bezierCurveTo(
    x + 48 * scale,
    y + 135 * scale,
    x + 49 * scale,
    y + 135 * scale,
    x + 49 * scale,
    y + 136 * scale
  );
  ctx.bezierCurveTo(
    x + 50 * scale,
    y + 136 * scale,
    x + 50 * scale,
    y + 144 * scale,
    x + 50 * scale,
    y + 144 * scale
  );
  ctx.bezierCurveTo(
    x + 50 * scale,
    y + 144 * scale,
    x + 54 * scale,
    y + 139 * scale,
    x + 56 * scale,
    y + 139 * scale
  );
  ctx.bezierCurveTo(
    x + 56 * scale,
    y + 139 * scale,
    x + 58 * scale,
    y + 140 * scale,
    x + 57 * scale,
    y + 138 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Right Tooth #2, Gray
  ctx.fillStyle = "#A8A8A8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 51 * scale, y + 137 * scale);
  ctx.bezierCurveTo(
    x + 51 * scale,
    y + 136 * scale,
    x + 45 * scale,
    y + 134 * scale,
    x + 44 * scale,
    y + 134 * scale
  );
  ctx.bezierCurveTo(
    x + 43 * scale,
    y + 135 * scale,
    x + 43 * scale,
    y + 135 * scale,
    x + 44 * scale,
    y + 136 * scale
  );
  ctx.bezierCurveTo(
    x + 44 * scale,
    y + 136 * scale,
    x + 45 * scale,
    y + 143 * scale,
    x + 45 * scale,
    y + 143 * scale
  );
  ctx.bezierCurveTo(
    x + 45 * scale,
    y + 143 * scale,
    x + 48 * scale,
    y + 138 * scale,
    x + 50 * scale,
    y + 137 * scale
  );
  ctx.bezierCurveTo(
    x + 50 * scale,
    y + 137 * scale,
    x + 51 * scale,
    y + 138 * scale,
    x + 51 * scale,
    y + 137 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Right Tooth #1, Gray
  ctx.fillStyle = "#A8A8A8";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 44 * scale, y + 133 * scale);
  ctx.bezierCurveTo(
    x + 43 * scale,
    y + 132 * scale,
    x + 37 * scale,
    y + 130 * scale,
    x + 36 * scale,
    y + 130 * scale
  );
  ctx.bezierCurveTo(
    x + 35 * scale,
    y + 131 * scale,
    x + 35 * scale,
    y + 131 * scale,
    x + 36 * scale,
    y + 132 * scale
  );
  ctx.bezierCurveTo(
    x + 37 * scale,
    y + 132 * scale,
    x + 37 * scale,
    y + 140 * scale,
    x + 37 * scale,
    y + 140 * scale
  );
  ctx.bezierCurveTo(
    x + 37 * scale,
    y + 140 * scale,
    x + 40 * scale,
    y + 134 * scale,
    x + 42 * scale,
    y + 134 * scale
  );
  ctx.bezierCurveTo(
    x + 43 * scale,
    y + 133 * scale,
    x + 44 * scale,
    y + 134 * scale,
    x + 44 * scale,
    y + 133 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Left Tooth #1, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 40 * scale, y + 129 * scale);
  ctx.bezierCurveTo(
    x + 40 * scale,
    y + 128 * scale,
    x + 32 * scale,
    y + 127 * scale,
    x + 31 * scale,
    y + 128 * scale
  );
  ctx.bezierCurveTo(
    x + 30 * scale,
    y + 129 * scale,
    x + 30 * scale,
    y + 130 * scale,
    x + 31 * scale,
    y + 130 * scale
  );
  ctx.bezierCurveTo(
    x + 32 * scale,
    y + 131 * scale,
    x + 34 * scale,
    y + 139 * scale,
    x + 34 * scale,
    y + 139 * scale
  );
  ctx.bezierCurveTo(
    x + 34 * scale,
    y + 139 * scale,
    x + 36 * scale,
    y + 132 * scale,
    x + 38 * scale,
    y + 131 * scale
  );
  ctx.bezierCurveTo(
    x + 39 * scale,
    y + 130 * scale,
    x + 40 * scale,
    y + 131 * scale,
    x + 40 * scale,
    y + 129 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Left Tooth #2, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 50 * scale, y + 132 * scale);
  ctx.bezierCurveTo(
    x + 50 * scale,
    y + 131 * scale,
    x + 38 * scale,
    y + 127 * scale,
    x + 36 * scale,
    y + 127 * scale
  );
  ctx.bezierCurveTo(
    x + 34 * scale,
    y + 128 * scale,
    x + 35 * scale,
    y + 128 * scale,
    x + 36 * scale,
    y + 129 * scale
  );
  ctx.bezierCurveTo(
    x + 38 * scale,
    y + 130 * scale,
    x + 40 * scale,
    y + 141 * scale,
    x + 40 * scale,
    y + 141 * scale
  );
  ctx.bezierCurveTo(
    x + 40 * scale,
    y + 141 * scale,
    x + 44 * scale,
    y + 133 * scale,
    x + 47 * scale,
    y + 133 * scale
  );
  ctx.bezierCurveTo(
    x + 49 * scale,
    y + 133 * scale,
    x + 51 * scale,
    y + 134 * scale,
    x + 50 * scale,
    y + 132 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Left Tooth #3, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 58 * scale, y + 134 * scale);
  ctx.bezierCurveTo(
    x + 58 * scale,
    y + 133 * scale,
    x + 48 * scale,
    y + 129 * scale,
    x + 46 * scale,
    y + 130 * scale
  );
  ctx.bezierCurveTo(
    x + 44 * scale,
    y + 131 * scale,
    x + 45 * scale,
    y + 132 * scale,
    x + 46 * scale,
    y + 132 * scale
  );
  ctx.bezierCurveTo(
    x + 47 * scale,
    y + 133 * scale,
    x + 49 * scale,
    y + 144 * scale,
    x + 49 * scale,
    y + 144 * scale
  );
  ctx.bezierCurveTo(
    x + 49 * scale,
    y + 144 * scale,
    x + 53 * scale,
    y + 136 * scale,
    x + 56 * scale,
    y + 135 * scale
  );
  ctx.bezierCurveTo(
    x + 57 * scale,
    y + 135 * scale,
    x + 59 * scale,
    y + 136 * scale,
    x + 58 * scale,
    y + 134 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Left Tooth #4, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 68 * scale, y + 136 * scale);
  ctx.bezierCurveTo(
    x + 68 * scale,
    y + 135 * scale,
    x + 58 * scale,
    y + 133 * scale,
    x + 56 * scale,
    y + 134 * scale
  );
  ctx.bezierCurveTo(
    x + 55 * scale,
    y + 135 * scale,
    x + 55 * scale,
    y + 135 * scale,
    x + 56 * scale,
    y + 136 * scale
  );
  ctx.bezierCurveTo(
    x + 58 * scale,
    y + 136 * scale,
    x + 59 * scale,
    y + 146 * scale,
    x + 59 * scale,
    y + 146 * scale
  );
  ctx.bezierCurveTo(
    x + 59 * scale,
    y + 146 * scale,
    x + 63 * scale,
    y + 139 * scale,
    x + 66 * scale,
    y + 138 * scale
  );
  ctx.bezierCurveTo(
    x + 67 * scale,
    y + 137 * scale,
    x + 69 * scale,
    y + 138 * scale,
    x + 68 * scale,
    y + 136 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Left Tooth #5, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 77 * scale, y + 142 * scale);
  ctx.bezierCurveTo(
    x + 77 * scale,
    y + 141 * scale,
    x + 69 * scale,
    y + 137 * scale,
    x + 68 * scale,
    y + 137 * scale
  );
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 137 * scale,
    x + 66 * scale,
    y + 138 * scale,
    x + 67 * scale,
    y + 138 * scale
  );
  ctx.bezierCurveTo(
    x + 68 * scale,
    y + 139 * scale,
    x + 66 * scale,
    y + 148 * scale,
    x + 66 * scale,
    y + 148 * scale
  );
  ctx.bezierCurveTo(
    x + 66 * scale,
    y + 148 * scale,
    x + 72 * scale,
    y + 143 * scale,
    x + 74 * scale,
    y + 143 * scale
  );
  ctx.bezierCurveTo(
    x + 75 * scale,
    y + 143 * scale,
    x + 77 * scale,
    y + 144 * scale,
    x + 77 * scale,
    y + 142 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Left Tooth #6, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 88 * scale, y + 144 * scale);
  ctx.bezierCurveTo(
    x + 88 * scale,
    y + 143 * scale,
    x + 78 * scale,
    y + 139 * scale,
    x + 77 * scale,
    y + 139 * scale
  );
  ctx.bezierCurveTo(
    x + 75 * scale,
    y + 139 * scale,
    x + 76 * scale,
    y + 140 * scale,
    x + 77 * scale,
    y + 141 * scale
  );
  ctx.bezierCurveTo(
    x + 78 * scale,
    y + 142 * scale,
    x + 78 * scale,
    y + 150 * scale,
    x + 78 * scale,
    y + 150 * scale
  );
  ctx.bezierCurveTo(
    x + 78 * scale,
    y + 150 * scale,
    x + 83 * scale,
    y + 145 * scale,
    x + 86 * scale,
    y + 145 * scale
  );
  ctx.bezierCurveTo(
    x + 87 * scale,
    y + 145 * scale,
    x + 88 * scale,
    y + 146 * scale,
    x + 88 * scale,
    y + 144 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Upper Jaw Left Tooth #7, White
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x + 94 * scale, y + 147 * scale);
  ctx.bezierCurveTo(
    x + 93 * scale,
    y + 146 * scale,
    x + 85 * scale,
    y + 144 * scale,
    x + 84 * scale,
    y + 145 * scale
  );
  ctx.bezierCurveTo(
    x + 82 * scale,
    y + 146 * scale,
    x + 83 * scale,
    y + 146 * scale,
    x + 84 * scale,
    y + 147 * scale
  );
  ctx.bezierCurveTo(
    x + 85 * scale,
    y + 147 * scale,
    x + 86 * scale,
    y + 155 * scale,
    x + 86 * scale,
    y + 155 * scale
  );
  ctx.bezierCurveTo(
    x + 86 * scale,
    y + 155 * scale,
    x + 89 * scale,
    y + 149 * scale,
    x + 92 * scale,
    y + 148 * scale
  );
  ctx.bezierCurveTo(
    x + 92 * scale,
    y + 148 * scale,
    x + 94 * scale,
    y + 149 * scale,
    x + 94 * scale,
    y + 147 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Right Pectoral Fin
  ctx.fillStyle = "#CFD1E2";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 206 * scale, y + 210 * scale);
  ctx.bezierCurveTo(
    x + 195 * scale,
    y + 212 * scale,
    x + 176 * scale,
    y + 229 * scale,
    x + 206 * scale,
    y + 227 * scale
  );
  ctx.bezierCurveTo(
    x + 154 * scale,
    y + 236 * scale,
    x + 165 * scale,
    y + 322 * scale,
    x + 172 * scale,
    y + 340 * scale
  );
  ctx.bezierCurveTo(
    x + 179 * scale,
    y + 358 * scale,
    x + 188 * scale,
    y + 370 * scale,
    x + 194 * scale,
    y + 370 * scale
  );
  ctx.bezierCurveTo(
    x + 206 * scale,
    y + 370 * scale,
    x + 205 * scale,
    y + 343 * scale,
    x + 213 * scale,
    y + 326 * scale
  );
  ctx.bezierCurveTo(
    x + 247 * scale,
    y + 255 * scale,
    x + 298 * scale,
    y + 244 * scale,
    x + 300 * scale,
    y + 224 * scale
  );
  ctx.bezierCurveTo(
    x + 281 * scale,
    y + 218 * scale,
    x + 275 * scale,
    y + 216 * scale,
    x + 262 * scale,
    y + 216 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Right Pectoral Fin Black Tip
  ctx.fillStyle = "#333333";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 172 * scale, y + 340 * scale);
  ctx.bezierCurveTo(
    x + 179 * scale,
    y + 358 * scale,
    x + 188 * scale,
    y + 370 * scale,
    x + 194 * scale,
    y + 370 * scale
  );
  ctx.bezierCurveTo(
    x + 206 * scale,
    y + 370 * scale,
    x + 205 * scale,
    y + 343 * scale,
    x + 213 * scale,
    y + 326 * scale
  );
  ctx.bezierCurveTo(
    x + 212 * scale,
    y + 327 * scale,
    x + 206 * scale,
    y + 345 * scale,
    x + 192 * scale,
    y + 344 * scale
  );
  ctx.bezierCurveTo(
    x + 185 * scale,
    y + 344 * scale,
    x + 177 * scale,
    y + 344 * scale,
    x + 172 * scale,
    y + 340 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Anal Fin
  ctx.fillStyle = "#78798C";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 635 * scale, y + 209 * scale);
  ctx.bezierCurveTo(
    x + 640 * scale,
    y + 214 * scale,
    x + 658 * scale,
    y + 223 * scale,
    x + 653 * scale,
    y + 216 * scale
  );
  ctx.quadraticCurveTo(
    x + 648 * scale,
    y + 210 * scale,
    x + 652 * scale,
    y + 205 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Light Gray Ventral Coloration
  ctx.fillStyle = "#E5E5E5";
  ctx.beginPath();
  ctx.moveTo(x + 748 * scale, y + 207 * scale);
  ctx.bezierCurveTo(
    x + 785 * scale,
    y + 238 * scale,
    x + 837 * scale,
    y + 327 * scale,
    x + 862 * scale,
    y + 300 * scale
  );
  ctx.bezierCurveTo(
    x + 827 * scale,
    y + 264 * scale,
    x + 824 * scale,
    y + 215 * scale,
    x + 818 * scale,
    y + 165 * scale
  );
  ctx.bezierCurveTo(
    x + 829 * scale,
    y + 108 * scale,
    x + 854 * scale,
    y + 57 * scale,
    x + 862 * scale,
    y + 18 * scale
  );
  ctx.bezierCurveTo(
    x + 833 * scale,
    y + 48 * scale,
    x + 822 * scale,
    y + 69 * scale,
    x + 802 * scale,
    y + 92 * scale
  );
  ctx.bezierCurveTo(
    x + 772 * scale,
    y + 127 * scale,
    x + 744 * scale,
    y + 157 * scale,
    x + 730 * scale,
    y + 168 * scale
  );
  ctx.bezierCurveTo(
    x + 709 * scale,
    y + 177 * scale,
    x + 649 * scale,
    y + 159 * scale,
    x + 649 * scale,
    y + 159 * scale
  );
  ctx.bezierCurveTo(
    x + 649 * scale,
    y + 159 * scale,
    x + 648 * scale,
    y + 147 * scale,
    x + 645 * scale,
    y + 142 * scale
  );
  ctx.bezierCurveTo(
    x + 642 * scale,
    y + 137 * scale,
    x + 623 * scale,
    y + 152 * scale,
    x + 616 * scale,
    y + 150 * scale
  );
  ctx.bezierCurveTo(
    x + 522 * scale,
    y + 128 * scale,
    x + 470 * scale,
    y + 121 * scale,
    x + 442 * scale,
    y + 109 * scale
  );
  ctx.bezierCurveTo(
    x + 407 * scale,
    y + 94 * scale,
    x + 411 * scale,
    y + 50 * scale,
    x + 408 * scale,
    y + 1 * scale
  );
  ctx.bezierCurveTo(
    x + 359 * scale,
    y + 15 * scale,
    x + 345 * scale,
    y + 76 * scale,
    x + 318 * scale,
    y + 85 * scale
  );
  ctx.bezierCurveTo(
    x + 249 * scale,
    y + 82 * scale,
    x + 213 * scale,
    y + 89 * scale,
    x + 171 * scale,
    y + 88 * scale
  ); // behind head
  ctx.bezierCurveTo(
    x + 92 * scale,
    y + 86 * scale,
    x + 37 * scale,
    y + 63 * scale,
    x + 16 * scale,
    y + 65 * scale
  ); // top of snout
  ctx.bezierCurveTo(
    x + 2 * scale,
    y + 70 * scale,
    x + 18 * scale,
    y + 79 * scale,
    x + 32 * scale,
    y + 103 * scale
  ); // bottom of snout
  ctx.bezierCurveTo(
    x + 39 * scale,
    y + 116 * scale,
    x + 25 * scale,
    y + 130 * scale,
    x + 32 * scale,
    y + 130 * scale
  );
  ctx.bezierCurveTo(
    x + 61 * scale,
    y + 132 * scale,
    x + 69 * scale,
    y + 135 * scale,
    x + 84 * scale,
    y + 146 * scale
  );
  ctx.bezierCurveTo(
    x + 100 * scale,
    y + 157 * scale,
    x + 125 * scale,
    y + 204 * scale,
    x + 122 * scale,
    y + 204 * scale
  );
  ctx.bezierCurveTo(
    x + 104 * scale,
    y + 199 * scale,
    x + 79 * scale,
    y + 250 * scale,
    x + 56 * scale,
    y + 257 * scale
  );
  ctx.bezierCurveTo(
    x + 72 * scale,
    y + 277 * scale,
    x + 102 * scale,
    y + 236 * scale,
    x + 139 * scale,
    y + 247 * scale
  );
  ctx.bezierCurveTo(
    x + 205 * scale,
    y + 266 * scale,
    x + 293 * scale,
    y + 271 * scale,
    x + 359 * scale,
    y + 262 * scale
  );
  ctx.bezierCurveTo(
    x + 506 * scale,
    y + 243 * scale,
    x + 608 * scale,
    y + 210 * scale,
    x + 727 * scale,
    y + 197 * scale
  );
  ctx.bezierCurveTo(
    x + 733 * scale,
    y + 196 * scale,
    x + 748 * scale,
    y + 207 * scale,
    x + 748 * scale,
    y + 207 * scale
  );
  ctx.fill();

  // Shark - Gray Dorsal Coloration
  ctx.fillStyle = "#78798E";
  ctx.beginPath();
  ctx.moveTo(x + 748 * scale, y + 207 * scale); // middle of front edge of lower caudal lobe
  ctx.bezierCurveTo(
    x + 785 * scale,
    y + 238 * scale,
    x + 837 * scale,
    y + 327 * scale,
    x + 862 * scale,
    y + 300 * scale
  ); // bottom-rear point of lower caudal lobe
  ctx.bezierCurveTo(
    x + 827 * scale,
    y + 264 * scale,
    x + 824 * scale,
    y + 215 * scale,
    x + 818 * scale,
    y + 165 * scale
  ); // middle of rear edge of caudal fin
  ctx.bezierCurveTo(
    x + 829 * scale,
    y + 108 * scale,
    x + 854 * scale,
    y + 57 * scale,
    x + 862 * scale,
    y + 18 * scale
  ); // top of upper caudal lobe
  ctx.bezierCurveTo(
    x + 833 * scale,
    y + 48 * scale,
    x + 822 * scale,
    y + 69 * scale,
    x + 802 * scale,
    y + 92 * scale
  ); // middle of front edge of upper caudal lobe
  ctx.bezierCurveTo(
    x + 772 * scale,
    y + 127 * scale,
    x + 744 * scale,
    y + 157 * scale,
    x + 730 * scale,
    y + 168 * scale
  ); // in front of upper caudal lobe
  ctx.bezierCurveTo(
    x + 709 * scale,
    y + 177 * scale,
    x + 649 * scale,
    y + 159 * scale,
    x + 649 * scale,
    y + 159 * scale
  ); // behind second dorsal fin
  ctx.bezierCurveTo(
    x + 649 * scale,
    y + 159 * scale,
    x + 648 * scale,
    y + 147 * scale,
    x + 645 * scale,
    y + 142 * scale
  ); // top of second dorsal fin
  ctx.bezierCurveTo(
    x + 642 * scale,
    y + 137 * scale,
    x + 623 * scale,
    y + 152 * scale,
    x + 616 * scale,
    y + 150 * scale
  ); // in front of second dorsal fin
  ctx.bezierCurveTo(
    x + 522 * scale,
    y + 128 * scale,
    x + 470 * scale,
    y + 121 * scale,
    x + 442 * scale,
    y + 109 * scale
  ); // behind first dorsal fin
  ctx.bezierCurveTo(
    x + 407 * scale,
    y + 94 * scale,
    x + 411 * scale,
    y + 50 * scale,
    x + 408 * scale,
    y + 1 * scale
  ); // top of first dorsal fin
  ctx.bezierCurveTo(
    x + 359 * scale,
    y + 15 * scale,
    x + 345 * scale,
    y + 76 * scale,
    x + 318 * scale,
    y + 85 * scale
  ); // in front of first dorsal fin
  ctx.bezierCurveTo(
    x + 249 * scale,
    y + 82 * scale,
    x + 213 * scale,
    y + 89 * scale,
    x + 171 * scale,
    y + 88 * scale
  ); // behind head
  ctx.bezierCurveTo(
    x + 92 * scale,
    y + 86 * scale,
    x + 36 * scale,
    y + 64 * scale,
    x + 25 * scale,
    y + 65 * scale
  ); // top of snout
  ctx.bezierCurveTo(
    x - 17 * scale,
    y + 69 * scale,
    x + 43 * scale,
    y + 94 * scale,
    x + 68 * scale,
    y + 107 * scale
  ); // behind nostril
  ctx.bezierCurveTo(
    x + 94 * scale,
    y + 121 * scale,
    x + 96 * scale,
    y + 149 * scale,
    x + 126 * scale,
    y + 166 * scale
  ); // cheek
  ctx.bezierCurveTo(
    x + 163 * scale,
    y + 175 * scale,
    x + 200 * scale,
    y + 178 * scale,
    x + 266 * scale,
    y + 180 * scale
  ); // first gill slit
  ctx.bezierCurveTo(
    x + 273 * scale,
    y + 180 * scale,
    x + 293 * scale,
    y + 194 * scale,
    x + 291 * scale,
    y + 198 * scale
  ); // below fourth gill slit
  ctx.bezierCurveTo(
    x + 288 * scale,
    y + 202 * scale,
    x + 267 * scale,
    y + 226 * scale,
    x + 294 * scale,
    y + 219 * scale
  ); // front of pectoral joint
  ctx.bezierCurveTo(
    x + 345 * scale,
    y + 205 * scale,
    x + 451 * scale,
    y + 205 * scale,
    x + 503 * scale,
    y + 210 * scale
  ); // front of pelvic joint
  ctx.bezierCurveTo(
    x + 535 * scale,
    y + 216 * scale,
    x + 526 * scale,
    y + 210 * scale,
    x + 521 * scale,
    y + 206 * scale
  ); // rear of pelvic joint
  ctx.bezierCurveTo(
    x + 519 * scale,
    y + 196 * scale,
    x + 541 * scale,
    y + 183 * scale,
    x + 552 * scale,
    y + 182 * scale
  ); // above pelvic fin
  ctx.bezierCurveTo(
    x + 589 * scale,
    y + 179 * scale,
    x + 644 * scale,
    y + 181 * scale,
    x + 719 * scale,
    y + 192 * scale
  ); // pre-caudal flare
  ctx.bezierCurveTo(
    x + 754 * scale,
    y + 180 * scale,
    x + 747 * scale,
    y + 185 * scale,
    x + 762 * scale,
    y + 182 * scale
  ); // middle-front of caudal fin
  ctx.bezierCurveTo(
    x + 766 * scale,
    y + 181 * scale,
    x + 731 * scale,
    y + 193 * scale,
    x + 748 * scale,
    y + 207 * scale
  ); // middle of front edge of lower caudal lobe
  ctx.closePath();
  ctx.fill();

  // Shark - Body Outline
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 3;
  ctx.miterLimit = "10";
  ctx.beginPath();
  ctx.moveTo(x + 748 * scale, y + 207 * scale);
  ctx.bezierCurveTo(
    x + 785 * scale,
    y + 238 * scale,
    x + 837 * scale,
    y + 327 * scale,
    x + 862 * scale,
    y + 300 * scale
  );
  ctx.bezierCurveTo(
    x + 827 * scale,
    y + 264 * scale,
    x + 824 * scale,
    y + 215 * scale,
    x + 818 * scale,
    y + 165 * scale
  );
  ctx.bezierCurveTo(
    x + 829 * scale,
    y + 108 * scale,
    x + 854 * scale,
    y + 57 * scale,
    x + 862 * scale,
    y + 18 * scale
  );
  ctx.bezierCurveTo(
    x + 833 * scale,
    y + 48 * scale,
    x + 822 * scale,
    y + 69 * scale,
    x + 802 * scale,
    y + 92 * scale
  );
  ctx.bezierCurveTo(
    x + 772 * scale,
    y + 127 * scale,
    x + 744 * scale,
    y + 157 * scale,
    x + 730 * scale,
    y + 168 * scale
  );
  ctx.bezierCurveTo(
    x + 709 * scale,
    y + 177 * scale,
    x + 649 * scale,
    y + 159 * scale,
    x + 649 * scale,
    y + 159 * scale
  );
  ctx.bezierCurveTo(
    x + 649 * scale,
    y + 159 * scale,
    x + 648 * scale,
    y + 147 * scale,
    x + 645 * scale,
    y + 142 * scale
  );
  ctx.bezierCurveTo(
    x + 642 * scale,
    y + 137 * scale,
    x + 623 * scale,
    y + 152 * scale,
    x + 616 * scale,
    y + 150 * scale
  );
  ctx.bezierCurveTo(
    x + 522 * scale,
    y + 128 * scale,
    x + 470 * scale,
    y + 121 * scale,
    x + 442 * scale,
    y + 109 * scale
  );
  ctx.bezierCurveTo(
    x + 407 * scale,
    y + 94 * scale,
    x + 411 * scale,
    y + 50 * scale,
    x + 408 * scale,
    y + 1 * scale
  );
  ctx.bezierCurveTo(
    x + 359 * scale,
    y + 15 * scale,
    x + 345 * scale,
    y + 76 * scale,
    x + 318 * scale,
    y + 85 * scale
  );
  ctx.bezierCurveTo(
    x + 249 * scale,
    y + 82 * scale,
    x + 213 * scale,
    y + 89 * scale,
    x + 171 * scale,
    y + 88 * scale
  );
  ctx.bezierCurveTo(
    x + 92 * scale,
    y + 86 * scale,
    x + 37 * scale,
    y + 63 * scale,
    x + 16 * scale,
    y + 65 * scale
  );
  ctx.bezierCurveTo(
    x + 2 * scale,
    y + 70 * scale,
    x + 18 * scale,
    y + 79 * scale,
    x + 32 * scale,
    y + 103 * scale
  );
  ctx.bezierCurveTo(
    x + 39 * scale,
    y + 116 * scale,
    x + 25 * scale,
    y + 130 * scale,
    x + 32 * scale,
    y + 130 * scale
  );
  ctx.bezierCurveTo(
    x + 61 * scale,
    y + 132 * scale,
    x + 69 * scale,
    y + 135 * scale,
    x + 84 * scale,
    y + 146 * scale
  );
  ctx.bezierCurveTo(
    x + 100 * scale,
    y + 157 * scale,
    x + 125 * scale,
    y + 204 * scale,
    x + 122 * scale,
    y + 204 * scale
  );
  ctx.bezierCurveTo(
    x + 104 * scale,
    y + 199 * scale,
    x + 79 * scale,
    y + 250 * scale,
    x + 56 * scale,
    y + 257 * scale
  );
  ctx.bezierCurveTo(
    x + 72 * scale,
    y + 277 * scale,
    x + 102 * scale,
    y + 236 * scale,
    x + 139 * scale,
    y + 247 * scale
  );
  ctx.bezierCurveTo(
    x + 205 * scale,
    y + 266 * scale,
    x + 293 * scale,
    y + 271 * scale,
    x + 359 * scale,
    y + 262 * scale
  );
  ctx.bezierCurveTo(
    x + 506 * scale,
    y + 243 * scale,
    x + 608 * scale,
    y + 210 * scale,
    x + 727 * scale,
    y + 197 * scale
  );
  ctx.bezierCurveTo(
    x + 733 * scale,
    y + 196 * scale,
    x + 748 * scale,
    y + 207 * scale,
    x + 748 * scale,
    y + 207 * scale
  );
  ctx.lineWidth = 2;
  ctx.moveTo(x + 318 * scale, y + 85 * scale);
  ctx.bezierCurveTo(
    x + 318 * scale,
    y + 85 * scale,
    x + 415 * scale,
    y + 99 * scale,
    x + 442 * scale,
    y + 109 * scale
  );
  ctx.moveTo(x + 616 * scale, y + 150 * scale);
  ctx.lineTo(x + 649 * scale, y + 159 * scale);
  ctx.stroke();

  // Shark - Left Pectoral Fin
  ctx.fillStyle = "#78798E";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 338 * scale, y + 207 * scale);
  ctx.bezierCurveTo(
    x + 352 * scale,
    y + 207 * scale,
    x + 357 * scale,
    y + 209 * scale,
    x + 376 * scale,
    y + 215 * scale
  );
  ctx.bezierCurveTo(
    x + 419 * scale,
    y + 238 * scale,
    x + 447 * scale,
    y + 262 * scale,
    x + 507 * scale,
    y + 278 * scale
  );
  ctx.bezierCurveTo(
    x + 432 * scale,
    y + 290 * scale,
    x + 367 * scale,
    y + 257 * scale,
    x + 294 * scale,
    y + 219 * scale
  );
  ctx.bezierCurveTo(
    x + 267 * scale,
    y + 225 * scale,
    x + 288 * scale,
    y + 203 * scale,
    x + 291 * scale,
    y + 198 * scale
  );
  ctx.fill();
  ctx.stroke();

  // Shark - Left Pelvic Fin
  ctx.fillStyle = "#78798E";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 557 * scale, y + 212 * scale);
  ctx.bezierCurveTo(
    x + 566 * scale,
    y + 210 * scale,
    x + 563 * scale,
    y + 209 * scale,
    x + 564 * scale,
    y + 211 * scale
  );
  ctx.bezierCurveTo(
    x + 565 * scale,
    y + 227 * scale,
    x + 566 * scale,
    y + 225 * scale,
    x + 573 * scale,
    y + 236 * scale
  );
  ctx.bezierCurveTo(
    x + 551 * scale,
    y + 242 * scale,
    x + 527 * scale,
    y + 232 * scale,
    x + 515 * scale,
    y + 222 * scale
  );
  ctx.bezierCurveTo(
    x + 512 * scale,
    y + 220 * scale,
    x + 519 * scale,
    y + 212 * scale,
    x + 503 * scale,
    y + 210 * scale
  );
  ctx.fill();
  ctx.stroke();

  // Shark - Gill Slits
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 262.28 * scale, y + 182.98 * scale);
  ctx.bezierCurveTo(
    x + 265 * scale,
    y + 166 * scale,
    x + 269 * scale,
    y + 140 * scale,
    x + 246 * scale,
    y + 115 * scale
  ); // 1
  ctx.moveTo(x + 274 * scale, y + 192 * scale);
  ctx.bezierCurveTo(
    x + 279 * scale,
    y + 173 * scale,
    x + 281 * scale,
    y + 142 * scale,
    x + 259 * scale,
    y + 115 * scale
  ); // 2
  ctx.moveTo(x + 283 * scale, y + 192 * scale);
  ctx.bezierCurveTo(
    x + 290 * scale,
    y + 174 * scale,
    x + 289 * scale,
    y + 135 * scale,
    x + 277 * scale,
    y + 116 * scale
  ); // 3
  ctx.moveTo(x + 289 * scale, y + 120 * scale);
  ctx.bezierCurveTo(
    x + 297 * scale,
    y + 127 * scale,
    x + 298 * scale,
    y + 182 * scale,
    x + 292 * scale,
    y + 189 * scale
  ); // 4
  ctx.moveTo(x + 301 * scale, y + 127 * scale);
  ctx.bezierCurveTo(
    x + 307 * scale,
    y + 131 * scale,
    x + 308 * scale,
    y + 176 * scale,
    x + 301 * scale,
    y + 187 * scale
  ); // 5
  ctx.stroke();

  // Shark - Eye Iris
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#555555";
  ctx.beginPath();
  ctx.arc(x + 107 * scale, y + 115 * scale, 8 * scale, 0, 2 * Math.PI, false);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Shark - Eye Reflection
  ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
  ctx.beginPath();
  ctx.moveTo(x + 109 * scale, y + 113 * scale);
  ctx.lineTo(x + 107 * scale, y + 112 * scale);
  ctx.closePath();
  ctx.stroke();

  // Shark - Nostril
  ctx.fillStyle = "#2B2B2B";
  ctx.strokeStyle = "#000000";
  ctx.beginPath();
  ctx.moveTo(x + 47 * scale, y + 104 * scale);
  ctx.bezierCurveTo(
    x + 51 * scale,
    y + 107 * scale,
    x + 56 * scale,
    y + 99 * scale,
    x + 54 * scale,
    y + 99 * scale
  );
  ctx.bezierCurveTo(
    x + 52 * scale,
    y + 98 * scale,
    x + 50 * scale,
    y + 102 * scale,
    x + 50 * scale,
    y + 102 * scale
  );
  ctx.bezierCurveTo(
    x + 50 * scale,
    y + 102 * scale,
    x + 45 * scale,
    y + 102 * scale,
    x + 47 * scale,
    y + 104 * scale
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};

// document.addEventListener(
//   "DOMContentLoaded",
//   () => {
//     let x = 1920;
//     let i = 0;
//     let y = Math.floor(Math.random() * 650);
//     let prevY = 0;
//     let reps = 8;
//     let speed = Math.floor(Math.random() * 5) + 3;
//     let scale = Math.random();

//     let tick = setInterval(() => {
//       drawShark(x, y, scale);

//       const stop = () => {
//         clearInterval(tick);
//       };

//       if (i >= reps) {
//         stop();
//       }

//       if (x <= -862) {
//         x = 1920;
//         i = i + 1;
//         speed = Math.floor(Math.random() * 5) + 3;
//         scale = Math.random();
//         if (prevY < 300) {
//           y = prevY + Math.floor(Math.random() * 350);
//         } else {
//           y = Math.floor(Math.random() * 400);
//         }
//       }

//       x = x - speed;
//     });
//   },
//   200
// );
