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
const serialLength = 20;
let serial = "";
let done = false;

function generate() {
  serial = "";
  for (let i = 0; i < serialLength; i++) {
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
  done = true;
  serialCon.classList.add("done");
}

generateSerial.addEventListener("click", generate);
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") generate();
});

serialCon.addEventListener("click", () => {
  if (done) {
    navigator.clipboard
      .writeText(serial)
      .then(() => {
        serialCon.textContent = "Copied";
        setTimeout(() => {
          serialCon.textContent = serial;
        }, 1000);
      })
      .catch(() => {
        serialCon.textContent = "Copy Failed";
        setTimeout(() => {
          serialCon.textContent = serial;
        }, 1000);
      });
  }
});
