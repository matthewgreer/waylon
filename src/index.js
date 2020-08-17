import './styles/index.scss';
// import './scripts/analyser'

document.addEventListener("DOMContentLoaded", () => {
  // get user input to allow mediaDevices call for microphone access
  return document.addEventListener("click", startApp);
});

// const startButton = document.getElementById("start-button");
// const stopButton = document.getElementById("stop-button");

const stopApp = () => {
  window.cancelAnimationFrame;
  audioCtxt.close().then(document.addEventListener("click", startApp));
};

// stopButton.onclick(stopApp);

function startApp() {
  document.removeEventListener("click", startApp);

  // need to manage browsers that don't correctly implement mediaDevices & getUserMedia
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

  // create AudioContext. Apparently Safari crashes without << window. >>
  const audioCtxt = new (window.AudioContext || window.webkitAudioContext)();

  // create Analyser node
  const analyser = audioCtxt.createAnalyser();

  // get audio stream from user microphone
  if (navigator.mediaDevices.getUserMedia) {
    const constraints = { audio: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        let source = audioCtxt.createMediaStreamSource(stream);
        source.connect(analyser);
        analyser.connect(audioCtxt.destination);
      })
      .catch((err) => console.log("Encountered getUserMedia error: " + err));
  } else {
    console.log("This browser doesn't support getUserMedia!");
  }

  // configure Analyser
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  analyser.smoothingTimeConstant = 0.8;
  let audioArray = new Uint8Array(bufferLength);

  // get frequency data from audioArray
  analyser.getByteFrequencyData(audioArray);

  // to get index with greatest value
  function indexOfGreatestFrequency(arr) {
    if (arr.length === 0) return null;
    let maxVal = arr[0];
    let maxIdx = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxIdx = i;
        max = arr[i];
      }
    }
    return maxIdx;
  }

  const display = document.getElementById("freq");

  const outputTopFreq = () => {
    if (audioCtxt && audioCtxt.state !== "closed") {
      display.textContent = indexOfGreatestFrequency(audioArray);
    } else {
      display.textContent = "No audioCtxt";
    }
    window.requestAnimationFrame(outputTopFreq);
  };

  outputTopFreq();
};



