const load = document.getElementById('loading-container');


function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}


wait(1500).then(() => {
  load.style.display = 'none'
});