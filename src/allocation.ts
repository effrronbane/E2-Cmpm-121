export {};

const canvas = document.querySelector<HTMLCanvasElement>("#allocation-canvas")!;
const ctx = canvas.getContext("2d")!;
const readout = document.querySelector<HTMLParagraphElement>(
  "#allocation-readout",
)!;
let start = 2;

function move() {
  const rate = start * 3;
  const mult = 6;
  const fin = rate - mult;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = i < start ? "#27766b" : "#c9d2c9";
    ctx.fillRect(18 + i * 45, 16, 36, 36);
    ctx.fillStyle = i < start ? "#ffffff" : "#233e43";
    ctx.font = "16px system-ui";
    ctx.fillText(String(i + 1), 31 + i * 45, 40);
  }
  ctx.fillStyle = "#233e43";
  ctx.font = "14px system-ui";
  ctx.fillText(`Producers: ${start} / 6`, 18, 76);
  ctx.fillText(`Production: ${rate}`, 18, 102);
  ctx.fillStyle = "#27766b";
  ctx.fillRect(18, 110, rate * 14, 20);
  ctx.fillStyle = "#233e43";
  ctx.fillText(`Consumption: ${mult}`, 18, 154);
  ctx.fillStyle = "#a44d23";
  ctx.fillRect(18, 162, mult * 14, 20);
  readout.textContent =
    `Assigned: ${start}/6 · Production: ${rate} · Consumption: ${mult} · Balance: ${
      fin > 0 ? "+" : ""
    }${fin}`;
}

document.querySelector<HTMLButtonElement>("#allocation-less")!.onclick = () => {
  start = Math.max(0, start - 1);
  move();
};
document.querySelector<HTMLButtonElement>("#allocation-more")!.onclick = () => {
  start = Math.min(6, start + 1);
  move();
};
document.querySelector<HTMLButtonElement>("#allocation-reset")!.onclick =
  () => {
    start = 2;
    move();
  };
move();
