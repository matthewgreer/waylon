function FreqAnalyzer(ctx) {
  this.ctx = ctx;
}



// // THIS FILE IS JUST COPY/PASTED FROM ORIGINAL CSS GAME LOGIC
// // I PLAN TO:
// //  turn it into a class to create an object instance of FreqAnalyzer
// //  make its sole function to collect mic input and output top freq





// if (navigator.mediaDevices === undefined) {
//   navigator.mediaDevices = {};
// }
// if (navigator.mediaDevices.getUserMedia === undefined) {
//   navigator.mediaDevices.getUserMedia = (constraints) => {
//     const getUserMedia =
//       navigator.webkitGetUserMedia ||
//       navigator.mozGetUserMedia ||
//       navigator.msGetUserMedia;
//     if (!getUserMedia) {
//       return Promise.reject(
//         new Error("This browser cannot support this game.")
//       );
//     }
//     return new Promise((resolve, reject) => {
//       getUserMedia.call(navigator, constraints, resolve, reject);
//     });
//   };
// }
// // ==========================================================================

// // create AudioContext. Apparently Safari crashes without << window. >>
// // let audioCtxt = new (window.AudioContext || window.webkitAudioContext)();

// // create & configure Analyser node
// const analyser = audioCtxt.createAnalyser();
// analyser.fftSize = 2048;
// analyser.minDecibels = -50;
// analyser.smoothingTimeConstant = 0.5;

// // create buffer array of length 1/2 fftSize
// let audioArray = new Uint8Array(analyser.frequencyBinCount);

// // get audio stream from user microphone
// if (navigator.mediaDevices.getUserMedia) {
//   const constraints = { audio: true };
//   navigator.mediaDevices
//     .getUserMedia(constraints)
//     .then((stream) => {
//       let source = audioCtxt.createMediaStreamSource(stream);
//       source.connect(analyser);
//       // connecting audioCtxt.destination results in speaker output
//       // analyser.connect(audioCtxt.destination);
//     })
//     .catch((err) => console.log("Encountered getUserMedia error: " + err));
// } else {
//   console.log("This browser doesn't support getUserMedia!");
// }

// // to get index with greatest value
// function indexOfGreatestFrequency(arr) {
//   if (arr.length === 0) return null;
//   let maxVal = arr[0];
//   let maxIdx = 0;
//   // exclude highest 500 frequency indices
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxVal) {
//       maxIdx = i;
//       maxVal = arr[i];
//     }
//   }
//   return maxIdx;
// }
// const outputTopFreq = () => {
//   if (audioCtxt && audioCtxt.state !== "closed") {
//     // start analysing data from audioArray
//     analyser.getByteFrequencyData(audioArray);
//     let nextPitch = indexOfGreatestFrequency(audioArray);
//     moveWaylon(nextPitch);
//     // uncomment below to display numeric output in top right corner
//     // display.textContent = nextPitch;
//   } else {
//     // display.textContent = "No audioCtxt";
//     return null;
//   }
//   window.requestAnimationFrame(outputTopFreq);
// };

// outputTopFreq();

module.exports = FreqAnalyzer;