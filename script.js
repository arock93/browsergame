var start = document.getElementById("start");
var beginning = document.getElementById("beginning");

function start() {
  if (document.getElementById("startcommand").value === "Start") {
    start.style.display = 'none';
    beginning.style.display = 'block';
  }
}
