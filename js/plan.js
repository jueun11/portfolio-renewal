const planOpenBtn = Array.from(document.querySelectorAll(".plan_btn"));
const planPage = Array.from(document.querySelectorAll(".plan"));
const planCloseBtn = Array.from(document.querySelectorAll(".plan_close_btn"));

console.log(planPage);

function planOpen(event) {
  //*클릭 대상 index 저장
  let value = planOpenBtn.indexOf(this);
  planPage[value].style.display = "flex";
  //*팝업시 뒤부분 스크롤 제거
  scrollPosition = window.pageYOffset;
  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.top = `-${scrollPosition}px`;
  body.style.width = "100%";
}
function planClose(event) {
  //*팝업시 뒤부분 스크롤 제거
  body.style.removeProperty("overflow");
  body.style.removeProperty("position");
  body.style.removeProperty("top");
  body.style.removeProperty("width");
  window.scrollTo(0, scrollPosition);
  for (el of planPage) {
    el.style.display = "none";
  }
}

for (el of planOpenBtn) {
  el.addEventListener("click", planOpen);
}

for (el of planCloseBtn) {
  el.addEventListener("click", planClose);
}
