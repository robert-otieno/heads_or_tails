let heads = 0;
let tails = 0;
let counter = 1;

document.getElementById("head-tail").onclick = function () {
  counter === 5 ? (document.getElementById("head-tail").style.display = "none") : counter++;

  document.getElementById("toss").style.display = "none"; // hide default coin

  const random = Math.round(Math.random() % 2); // if random is 0 then tails else if random is 1 then heads

  if (random === 0) {
    tails += 1;
    document.getElementById("tails").style.display = "block";
    document.getElementById("heads").style.display = "none";
  } else {
    heads += 1;
    document.getElementById("heads").style.display = "block";
    document.getElementById("tails").style.display = "none";
  }

  if (heads > tails) {
    document.getElementById("desc").innerHTML = "😆";
  } else {
    document.getElementById("desc").innerHTML = "😞";
  }

  console.log(`heads: ${heads}`);
  console.log(`tails: ${tails}`);
};
