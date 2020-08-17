// create AudioContext
const audioCtxt = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtxt.createAnalyser();

analyser.fftSize = 2048;