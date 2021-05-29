function getPilihanComputer() {
  const computer = Math.random();

  if (computer < 0.34) {
    return "semut";
  } else if (computer > 0.34 && computer < 0.67) {
    return "orang";
  } else {
    return "gajah";
  }
}

function getHasil(computer, player) {
  if (player == computer) return "SERI";
  if (player == "semut") return computer == "orang" ? "KALAH!" : "MENANG!";
  if (player == "orang") return computer == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "gajah") return computer == "semut" ? "KALAH!" : "MENANG!";
}

function putar() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

let computerScore = 0;
let playerScore = 0;
function getScore(hasil) {
  if (hasil == "MENANG!") return playerScore++;
  if (hasil == "KALAH!") return computerScore++;
  if (hasil == "SERI") return playerScore, computerScore;
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector(".img-computer");
    imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);

    putar();

    setTimeout(() => {
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
      getScore(hasil);

      const scoreComputer = document.querySelector(".score-computer");
      scoreComputer.innerHTML = computerScore;

      const scorePlayer = document.querySelector(".score-player");
      scorePlayer.innerHTML = playerScore;
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {});
