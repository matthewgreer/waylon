import "./styles/index.scss";

document.addEventListener("DOMContentLoaded", () => {
  // upon loading, user is presented with story/instructions modal(s)
  //   which they can click through to play. User input is required
  //   to initiate request for microphone access
  return document.addEventListener("click", startApp);
});

function startApp() {
  document.removeEventListener("click", startApp);

  // hide modal and begin -- eventually have '?' button to re-open
  const modal = document.getElementById("modal");

  function closeModal() {
    modal.style.display = "none";
  }
  closeModal();

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
  let audioCtxt = new (window.AudioContext || window.webkitAudioContext)();

  // create & configure Analyser node
  const analyser = audioCtxt.createAnalyser();
  analyser.fftSize = 2048;
  analyser.minDecibels = -50;
  analyser.smoothingTimeConstant = 0.5;
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
  const blow = document.getElementById("thar-she-blows");
  let currentPitch = 0;
  let currentPosition = 0;
  let currentRotation = 0;

  const moveWaylon = (newPitch) => {
    if (newPitch > currentPitch) {
      currentPosition -= 3;
      currentRotation -= 5;
    } else if (newPitch < currentPitch) {
      currentPosition += 3;
      currentRotation += 5;
    }
    if (currentPosition < 1) {
      currentPosition = 0;
      currentRotation = 0;
      blow.style.opacity = 0.8;
    } else {
      blow.style.opacity = 0;
    }
    if (currentPosition > 80) {
      currentPosition = 80;
      currentRotation = 0;
    }
    if (currentRotation > 35) currentRotation = 35;
    if (currentRotation < -25) currentRotation = -25;
    currentPitch = newPitch;

    waylon.style.top = currentPosition + "%";
    waylon.style.transform = `rotate(${currentRotation}deg)`;
  };

  const outputTopFreq = () => {
    if (audioCtxt && audioCtxt.state !== "closed") {
      // start analysing data from audioArray
      analyser.getByteFrequencyData(audioArray);
      let nextPitch = indexOfGreatestFrequency(audioArray);
      moveWaylon(nextPitch);
      // uncomment below to display numeric output in top right corner
      // display.textContent = nextPitch;
    } else {
      // display.textContent = "No audioCtxt";
      return null;
    }
    window.requestAnimationFrame(outputTopFreq);
  };

  outputTopFreq();

  document.getElementById("stop-button").onclick = () => {
    window.cancelAnimationFrame;
    audioCtxt.close();
  };

  document.getElementById("start-button").onclick = () => {
    startApp();
  };
}