import './styles/index.scss';

document.addEventListener("DOMContentLoaded", () => {
  // get user input to allow mediaDevices call for microphone access
  return document.addEventListener("click", startApp);
});


function startApp() {
  document.removeEventListener("click", startApp);


  document.getElementById("stop-button").onclick = () => {
    window.cancelAnimationFrame;
    audioCtxt.close();
    stream.getTracks().forEach(function (track) {
      track.stop();
    });
    document.addEventListener("click", startApp);
  };

  document.getElementById("start-button").onclick = () => {
    document.startApp();
  };

  // ==========================================================================
  // manage browsers that don't correctly implement mediaDevices & getUserMedia
  // ==========================================================================
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = (constraints) => {
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
    // exclude highest 500 frequency indices
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxIdx = i;
        maxVal = arr[i];
      }
    }
    return maxIdx;
  }

  const display = document.getElementById("freq");
  const waylon = document.getElementById("waylon");
  let currentPitch = 0;
  let currentPosition = 0;

  const moveWaylon = (newPitch) => {
    if (newPitch > currentPitch) {
      currentPosition -= 3;
    } else if (newPitch < currentPitch) {
      currentPosition += 3;
    }
    if (currentPosition < 0) currentPosition = 0;
    if (currentPosition > 81) currentPosition = 81;
    currentPitch = newPitch;
    return waylon.style.top = currentPosition + "%";
  }

  const outputTopFreq = () => {
    if (audioCtxt && audioCtxt.state !== "closed") {
      // start analysing data from audioArray
      analyser.getByteFrequencyData(audioArray);
      let nextPitch = indexOfGreatestFrequency(audioArray);
      moveWaylon(nextPitch);
      display.textContent = nextPitch;
    } else {
      display.textContent = "No audioCtxt";
    }
    window.requestAnimationFrame(outputTopFreq);
  };

  outputTopFreq();
};



