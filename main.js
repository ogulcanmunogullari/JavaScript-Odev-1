const userName = prompt("Adınız nedir?");

const minute = () => {
  const date = new Date();
  let m = date.getMinutes();
  m = m < 10 ? "0" + m : m;
  m == "00" ? hour() : m;
  takeMinute.innerHTML = m;
};
const second = () => {
  const date = new Date();
  let s = date.getSeconds();
  s = s < 10 ? "0" + s : s;
  s == "00" ? minute() : s;
  takeSecond.innerHTML = s;
  setTimeout(second, 1000);
};
const hour = () => {
  const date = new Date();
  let h = date.getHours();
  h = h < 10 ? "0" + h : h;
  takeHour.innerHTML = h;
};
hour();
minute();
second();
takeId.innerHTML = `Hoşgeldin ${userName}`;
