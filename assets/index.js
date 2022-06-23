let myPick = null;
let round = null;
let outcome = null;

document.querySelector("#head-tail").addEventListener("click", () => {
  round++;

  let coins = ["heads", "tails"]

  let random = Math.round(Math.random() % 2); // if random is 0 then tails else if random is 1 then heads
  console.log(`random: ${random}`);

  let computer = coins[random];
  console.log(`Computer Choice: ${computer}`);
  console.log(`My Pick: ${myPick}`);

  document.getElementById("round").innerHTML = ` - Round: ${round}`;

  if (round == 5) {
    document.getElementById("head-tail").style.display = "none";
    reset();
  }

  if (computer === "tails" && myPick === "heads") {
    outcome = "heads"
  } else if (computer === "heads" && myPick === "heads") {
    outcome = "heads"
  } else if (computer === "tails" && myPick === "tails") {
    outcome = "tails"
  } else if (computer === "heads" && myPick === "tails") {
    outcome = "heads"
  }

  console.log(`Round: ${round}`);
  console.log(`Outcome: ${outcome}`)
})

document.querySelector("#heads").addEventListener("click", () => myPick = "heads");
document.querySelector("#tails").addEventListener("click", () => myPick = "tails");

const reset = () => {
  const resetBtn = document.createElement("button");
  const text = document.createTextNode("Reset");
  resetBtn.appendChild(text);

  const container = document.getElementById("container");
  const child = document.getElementById("desc");
  container.insertBefore(resetBtn,child);
}

