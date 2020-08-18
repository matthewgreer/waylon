import './styles/index.scss';
// import './scripts/analyser'

document.addEventListener("DOMContentLoaded", () => {
  // get user input to allow mediaDevices call for microphone access
  return document.addEventListener("click", startApp);
});

// 
const stopButton = document.getElementById("stop-button");
stopButton.onclick(
  stopApp()
  .then(document.addEventListener("click", startApp))
);
const stopApp = () => {
  window.cancelAnimationFrame;
  audioCtxt.close();

};


function startApp() {
  document.removeEventListener("click", startApp);

  // ==========================================================================
  // manage browsers that don't correctly implement mediaDevices & getUserMedia
  // ==========================================================================
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
    // ==========================================================================


  // create AudioContext. Apparently Safari crashes without << window. >>
  const audioCtxt = new (window.AudioContext || window.webkitAudioContext)();

  // create & configure Analyser node
  const analyser = audioCtxt.createAnalyser();
  analyser.fftSize = 2048;
  analyser.minDecibels = -50;
  analyser.smoothingTimeConstant = .5;
    // create buffer array of length 1/2 fftSize
  let audioArray = new Uint8Array(analyser.frequencyBinCount);
  

  // get audio stream from user microphone
  if (navigator.mediaDevices.getUserMedia) {
    const constraints = { audio: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        let source = audioCtxt.createMediaStreamSource(stream);
        source.connect(analyser);
        // connecting audioCtxt.destination results in speaker output
        // analyser.connect(audioCtxt.destination);
      })
      .catch((err) => console.log("Encountered getUserMedia error: " + err));
  } else {
    console.log("This browser doesn't support getUserMedia!");
  }

  // to get index with greatest value
  function indexOfGreatestFrequency(arr) {
    if (arr.length === 0) return null;
    let maxVal = arr[0];
    let maxIdx = 0;
    // exclude highest 156 frequency indices
    for (let i = 1; i < arr.length - 100; i++) {
      if (arr[i] > maxVal) {
        maxIdx = i;
        maxVal = arr[i];
      }
    }
    return maxIdx;
  }

  const display = document.getElementById("freq");

  const outputTopFreq = () => {
    if (audioCtxt && audioCtxt.state !== "closed") {
      // start analysing data from audioArray
      analyser.getByteFrequencyData(audioArray);
      display.textContent = indexOfGreatestFrequency(audioArray);
    } else {
      display.textContent = "No audioCtxt";
    }
    window.requestAnimationFrame(outputTopFreq);
  };

  outputTopFreq();
};



