const book = Array.from(document.querySelectorAll(".book"));
const bookChoice = Array.from(document.querySelectorAll(".book_choice"));
const grphicItem = Array.from(document.querySelectorAll(".grphic_item"));

const grphicFrame = Array.from(document.querySelectorAll(".graphic_frame"));
const grphic = Array.from(document.querySelectorAll(".graphic"));
const grphicCloseBtn = Array.from(
  document.querySelectorAll(".graphic_close_btn")
);
bookChoice[0].style.opacity = "1";
book[0].style.marginTop = "-3vh";
console.log(grphic);
function bookClick(event) {
  //*책장 변화
  for (el of bookChoice) {
    el.style.opacity = "0";
  }
  for (el of grphicItem) {
    el.style.display = "none";
  }
  for (el of book) {
    el.style.marginTop = "0vh";
  }

  let value = book.indexOf(this);
  grphicItem[value].style.display = "flex";
  bookChoice[value].style.opacity = "1";
  book[value].style.marginTop = "-3vh";
}
function grphicOpen(event) {
  let value = grphicFrame.indexOf(this);
  grphic[value].style.display = "flex";
  //*팝업시 뒤부분 스크롤 제거
  scrollPosition = window.pageYOffset;
  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.top = `-${scrollPosition}px`;
  body.style.width = "100%";
}

function grphicClose(event) {
  //*팝업시 뒤부분 스크롤 제거
  body.style.removeProperty("overflow");
  body.style.removeProperty("position");
  body.style.removeProperty("top");
  body.style.removeProperty("width");
  window.scrollTo(0, scrollPosition);
  for (el of grphic) {
    el.style.display = "none";
  }
}

for (el of book) {
  el.addEventListener("click", bookClick);
}
for (el of grphicFrame) {
  el.addEventListener("click", grphicOpen);
}
for (el of grphicCloseBtn) {
  el.addEventListener("click", grphicClose);
}
