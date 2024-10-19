let isbutton = false;
let dateofbirth;
const setting = document.getElementById("toggle_icon");
const iconcontent = document.getElementById("iconcontent");
const initialtext = document.getElementById("initialtext");
const afterDOB = document.getElementById("afterDOBBtnTxt");
const button = document.getElementById("dobbutton");
const inputDob = document.getElementById("dob");
const yearEI = document.getElementById("year");
const monthEI = document.getElementById("month");
const daysEI = document.getElementById("day");
const hoursEI = document.getElementById("hour");
const minutesEI = document.getElementById("minute");
const secEI = document.getElementById("second");
const maketwo = (number) => {
  return number > 9 ? number : `0${number}`;
};
const toggle = function () {
  if (isbutton) {
    iconcontent.classList.add("hide");
  } else {
    iconcontent.classList.remove("hide");
  }
  isbutton = !isbutton;
};
const update = () => {
  const current = new Date();
  const diff = current - dateofbirth;
  const year = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // Account for leap years
  const month = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
  ); // Approximate average month length
  const day = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((diff % (1000 * 60)) / 1000);
  yearEI.innerHTML = maketwo(year);
  monthEI.innerHTML = maketwo(month);
  daysEI.innerHTML = maketwo(day);
  hoursEI.innerHTML = maketwo(hours);
  minutesEI.innerHTML = maketwo(minutes);
  secEI.innerHTML = maketwo(second);
};
const setdob = () => {
  const dateString = inputDob.value;
  dateofbirth = dateString ? new Date(dateString) : null;
  if (dateofbirth) {
    initialtext.classList.add("hide");
    afterDOB.classList.remove("hide");
    update();
    setInterval(() => update(), 1000);
  } else {
    afterDOB.classList.add("hide");
    initialtext.classList.remove("hide");
  }
};
setdob();

setting.addEventListener("click", toggle);
button.addEventListener("click", setdob);
