// -----------------------counter--------------------------
// const scrollTop = window.scrollY || document.documentElement.scrollTop;???????????
let count1 = document.querySelector(".count1 .number");
let count2 = document.querySelector(".count2 .number");
let count3 = document.querySelector(".count3 .number");

function count(elem, to, content, counter) {
  let count = 0;
  let time = 100; // số lần nhảy số
  let step = to / time;

  let counting = setInterval(() => {
    count += step;
    count = Math.round(count);

    if (counter == 1) {
      if (count > to) {
        clearInterval(counting);
        elem.innerText = `0${to}+`;
      } else {
        elem.innerText = `0${count}+`;
      }
    } else {
      if (count > to) {
        clearInterval(counting);
        elem.innerText = `${to}${content}`;
      } else if (count < 10) {
        elem.innerText = `0${count}${content}`;
      } else {
        elem.innerText = `${count}${content}`;
      }
    }
  }, 2);
}

count(count1, 7, "", 1);
count(count2, 250, "k", 2);
count(count3, 50, "+", 3);

// ----------------------cirle-direct---------------------------
