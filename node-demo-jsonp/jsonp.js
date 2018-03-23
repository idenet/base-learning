function createScriptTag(src) {
  let script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.src = src
  document.body.appendChild(script)
}

window.onload = function() {
  createScriptTag('http://127.0.0.1:3002?format=jsonp&callback=dataJsonp')
}
function dataJsonp(data) {
  console.log(data)
}
