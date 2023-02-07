const progress = document.getElementById(`progress`);
const prev = document.getElementById(`prev`);
const next = document.getElementById(`next`);
const circles = document.querySelectorAll(`.circle`);

let currenActive = 1;

next.addEventListener(`click`, () => {
  currenActive++;

  if (currenActive > circles.length) {
    currenActive = circles.length;
  }
  update();
  console.log(currenActive);
});

prev.addEventListener(`click`, () => {
  currenActive--;

  if (currenActive < 1) {
    currenActive = 1;
  }
  update();
  console.log(currenActive);
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currenActive) {
        circle.classList.add(`active`)
    }else{
        circle.classList.remove(`active`)
    }
  });
}
