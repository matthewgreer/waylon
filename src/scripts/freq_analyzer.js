class FreqAnalyzer {
  constructor() {
  this.audioCtxt;
  this.analyzer;
  this.audioArray;
  this.display = document.getElementById("freq-display");
};

  getMediaDevices = () => {
    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
    }

    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia =(constraints) => {
        const getUserMedia =
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia;
        if (!getUserMedia) {
          return Promise.reject(
          new Error("This browser cannot support this game.")
          );
        }
        return new Promise((resolve, reject) => {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }
  };

  createAudioContext = () => {
    // Apparently Safari crashes without << window. >>
    return this.audioCtxt = new (window.AudioContext || window.webkitAudioContext)();
  };

  createAnalyzerNode = () => {
    this.analyzer = this.audioCtxt.createAnalyser();
    this.analyzer.fftSize = 2048;
    this.analyzer.minDecibels = -50;
    this.analyzer.smoothingTimeConstant = 0.5;
    // create buffer array of length 1/2 fftSize
    return this.audioArray = new Uint8Array(this.analyzer.frequencyBinCount);
  };

  getMicStream = () => {
    if (navigator.mediaDevices.getUserMedia) {
      const constraints = { audio: true };
      debugger
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          debugger
          const source = this.audioCtxt.createMediaStreamSource(stream);
          debugger
          return source.connect(this.analyzer);
          // to enable speaker output (not currently desired), 
          // connect a destination node; 
          // analyzer.connect(audioCtxt.destination);
        })
        .catch(err => console.log("Encountered getUserMedia error: " + err));
    } else {
      return console.log("This browser doesn't support getUserMedia!");
    }
  };

  // to get index with greatest value
  indexOfGreatestFrequency = (arr) => {
    if (arr.length === 0) return null;
    let maxVal = arr[0];
    let maxIdx = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxIdx = i;
        maxVal = arr[i];
      }
    }
    return maxIdx;
  };

  outputTopFreq = () => {
    
    if (this.audioCtxt && this.audioCtxt.state !== "closed") {
      // start analyzing data from audioArray
      debugger;
      this.analyzer.getByteFrequencyData(this.audioArray);
      
      // if not displaying numeric output:
      // return this.indexOfGreatestFrequency(this.audioArray);
      
      // display numeric output in top right corner
      let nextPitch = this.indexOfGreatestFrequency(this.audioArray);
      this.display.textContent = nextPitch;
      return nextPitch;
    } else {
      this.display.textContent = "No audioCtxt";
      return null;
    }
  };
};

export default FreqAnalyzer;