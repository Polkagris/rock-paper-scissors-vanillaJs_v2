const options = ["rock", "paper", "scissors"];
const resultArray = ["draw", "win", "lose"];
let result = "";

// emoji
const setEmojiStatus = () => {
  if (result == "win") {
    document.getElementById("emoji").src =
      "https://cdn.icon-icons.com/icons2/3044/PNG/512/smile_pixel_art_emoticon_emoji_icon_189295.png";
  } else if (result == "draw") {
    document.getElementById("emoji").src =
      "https://cdn.icon-icons.com/icons2/3044/PNG/512/bored_pixel_emoticon_emoji_icon_189283.png";
  } else if (result == "lose") {
    document.getElementById("emoji").src =
      "https://cdn.icon-icons.com/icons2/3044/PNG/512/scared_pixel_emoticon_emoji_icon_189285.png";
  }
};

const getComputerChoice = () => {
  const computerRandomNumber = Math.floor(Math.random() * 3);
  const computerChosenOption = options[computerRandomNumber];
  console.log("computerChosenOption", computerChosenOption);
  return computerChosenOption;
};

const gameLogic = (user) => {
  const computer = getComputerChoice();
  // logic
  if (computer == "rock" && user == "rock") {
    result = resultArray[0];
    console.log("result: draw");
  } else if (computer == "scissors" && user == "rock") {
    result = resultArray[1];
    console.log("result: win");
  } else if (computer == "paper" && user == "rock") {
    result = resultArray[2];
    console.log("result: lose");
  } else if (computer == "rock" && user == "paper") {
    result = resultArray[1];
    console.log("result: win");
  } else if (computer == "scissors" && user == "paper") {
    result = resultArray[2];
    console.log("result: lose");
  } else if (computer == "paper" && user == "paper") {
    result = resultArray[0];
    console.log("result: draw");
  } else if (computer == "rock" && user == "scissors") {
    result = resultArray[2];
    console.log("result: lose");
  } else if (computer == "scissors" && user == "scissors") {
    result = resultArray[0];
    console.log("result: draw");
  } else if (computer == "paper" && user == "scissors") {
    result = resultArray[1];
    console.log("result: win");
  }

  console.log("computer choice:", computer);
  document.getElementById("computersChoice").innerHTML = computer;
  document.getElementById("result").innerHTML = result;
};

const rockOption = document
  .getElementById("rock")
  .addEventListener("click", function () {
    console.log("Rock was clicked!");
    document.getElementById("userChoice").innerHTML = "rock";
    gameLogic("rock");
    setEmojiStatus();
  });

const paperOption = document
  .getElementById("paper")
  .addEventListener("click", function () {
    console.log("Paper was clicked!");
    document.getElementById("userChoice").innerHTML = "paper";
    gameLogic("paper");
    setEmojiStatus();
  });

const scissorsOption = document
  .getElementById("scissors")
  .addEventListener("click", function () {
    console.log("Scissors was clicked!");
    document.getElementById("userChoice").innerHTML = "scissors";
    gameLogic("scissors");
    setEmojiStatus();
  });

const reset = document
  .getElementById("reset")
  .addEventListener("click", function () {
    console.log("Reset");
    document.getElementById("computersChoice").innerHTML = "";
    document.getElementById("userChoice").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    // emoji status
    document.getElementById("emoji").src =
      "https://cdn.icon-icons.com/icons2/3044/PNG/512/smile_pixel_art_emoticon_emoji_icon_189295.png";
  });
