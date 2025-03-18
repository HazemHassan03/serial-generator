const nums = [];
for (let i = 0; i < 10; i++) {
  nums.push(i);
}
const chars = [];
for (let i = 65; i <= 90; i++) {
  chars.push(String.fromCharCode(i));
}
for (let i = 97; i <= 122; i++) {
  chars.push(String.fromCharCode(i));
}

const serialCon = document.querySelector(".serial");
const generateSerial = document.querySelector(".generate");
const length = 20;

function generate() {
  let serial = "";
  for (let i = 0; i < length; i++) {
    const randomNum = Math.trunc(Math.random() * nums.length);
    const randomChar = Math.trunc(Math.random() * chars.length);
    const numOrChar = Math.trunc(Math.random() * 2);
    if (i % 4 === 0 && i !== 0) serial += "-";
    if (numOrChar) {
      serial += nums[randomNum];
    } else {
      serial += chars[randomChar];
    }
  }
  serialCon.textContent = serial;
  return serial;
}

generateSerial.addEventListener("click", generate);
