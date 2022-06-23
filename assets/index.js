let myPick = null;
let computerPick = null;
let round = null;
let person = null;
let computer = null;

let flipBtn = document.querySelector("#head-tail");

flipBtn.addEventListener("click", () => {
  round++;
  document.getElementById("round").innerHTML = ` - Round: ${round}`;

  computerChoice();
  myChoice();

  myPick === 'heads' ? person++ : null;
  computerPick === 'heads' ? computer++ : null;

  if (round == 5) {
    disableBtn();
    person >= computer ? alert('You win!') : alert('You lose!');
  }
});

const computerChoice = () => {
  let coins = ["tails", "heads"];
  let random = Math.round(Math.random() % 2);
  computerPick = coins[random];

  console.log(`Computer Choice: ${computerPick}`);
};

const myChoice = () => {
  document.getElementById("heads").checked == true ? (myPick = "heads") : (myPick = "tails");
  console.log(`My Pick: ${myPick}`);
};

const disableBtn = () => {
  flipBtn.setAttribute("disabled", "disabled");
};

const resetBtn = document.getElementById("reset");

reset.addEventListener("click", () => {
  myPick = null;
  computerPick = null;
  round = null;
  computer = null;
  person = null;
  flipBtn.removeAttribute("disabled");
  document.getElementById("round").innerHTML = "";
});