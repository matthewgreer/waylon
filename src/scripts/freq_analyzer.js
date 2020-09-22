function FreqAnalyzer(ctx) {
  this.ctx = ctx;
  this.audioCtxt;
  this.analyzer;
  this.audioArray;
};



// // THIS FILE IS JUST COPY/PASTED FROM ORIGINAL CSS GAME LOGIC
// // I PLAN TO:
// //  turn it into a class to create an object instance of FreqAnalyzer
// //  make its sole function to collect mic input and output top freq


FreqAnalyzer.prototype.getMediaDevices = function getMediaDevices() {
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }
  // if these stop working, try going back to ES6 arrow functions
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function (constraints) {
      const getUserMedia =
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
      if (!getUserMedia) {
        return Promise.reject(
          new Error("This browser cannot support this game.")
        );
      }
      return new Promise(function (resolve, reject) {
        return getUserMedia.call(navigator, constraints, resolve, reject);
      });
    };
  }
};

FreqAnalyzer.prototype.createAudioContext = function createAudioContext () {
  // Apparently Safari crashes without << window. >>
  this.audioCtxt = new (window.AudioContext || window.webkitAudioContext)();
};

FreqAnalyzer.prototype.createAnalyzerNode = function createAnalyzerNode () {
  this.analyzer = this.audioCtxt.createAnalyser();
  this.analyzer.fftSize = 2048;
  this.analyzer.minDecibels = -50;
  this.analyzer.smoothingTimeConstant = 0.5;
  // create buffer array of length 1/2 fftSize
  this.audioArray = new Uint8Array(this.analyzer.frequencyBinCount);
};

FreqAnalyzer.prototype.getMicStream = function getMicStream () {
  if (navigator.mediaDevices.getUserMedia) {
    const constraints = { audio: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(stream) {
        const source = this.audioCtxt.createMediaStreamSource(stream);
        return source.connect(this.analyzer);
        // to enable speaker output (not currently desired), 
        // connect a destination node; 
        // analyzer.connect(audioCtxt.destination);
      })
      .catch(function(err) {
        return console.log("Encountered getUserMedia error: " + err);
      });
  } else {
    return console.log("This browser doesn't support getUserMedia!");
  }
};

// to get index with greatest value
FreqAnalyzer.prototype.indexOfGreatestFrequency = function indexOfGreatestFrequency(arr) {
  if (arr.length === 0) return null;
  let maxVal = arr[0];
  let maxIdx = 0;
  // exclude highest 500 frequency indices
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxIdx = i;
      maxVal = arr[i];
    }
  }
  return maxIdx;
};

FreqAnalyzer.prototype.outputTopFreq = function outputTopFreq () {
  if (this.audioCtxt && this.audioCtxt.state !== "closed") {
    // start analyzing data from audioArray
    this.analyzer.getByteFrequencyData(this.audioArray);
    let nextPitch = this.indexOfGreatestFrequency(this.audioArray);
    return nextPitch;
    // uncomment below to display numeric output in top right corner
  // } else {
  //   display.textContent = "No audioCtxt";
  //   return null;
  }
};

  
// window.requestAnimationFrame(outputTopFreq);
// moveWaylon(nextPitch);
// outputTopFreq();

module.exports = FreqAnalyzer;