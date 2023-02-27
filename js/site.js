const vistBtn = Array.from(document.querySelectorAll(".vist_btn"));
const vistLink = [
  "https://jueun11.github.io/hanwha/",
  "https://jueun11.github.io/cafe-loa/",
  "https://jueun11.github.io/mobile_viewer_1/",
];
const codeBtn = Array.from(document.querySelectorAll(".code_btn"));
const codeLink = [
  "https://github.com/jueun11/hanwha",
  "https://github.com/jueun11/cafe-loa",
  "https://github.com/jueun11/lightTest",
];
console.log(vistBtn);
function vistopen(event) {
  let value = vistBtn.indexOf(this);
  window.open(vistLink[value]);
}
function codeopen(event) {
  let value = codeBtn.indexOf(this);
  window.open(codeLink[value]);
}
for (el of vistBtn) {
  el.addEventListener("click", vistopen);
}
for (el of codeBtn) {
  el.addEventListener("click", codeopen);
}
