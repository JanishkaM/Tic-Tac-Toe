const userCharacter = ["🤓", "😎", "🤩"]; //icons
const computerCharacter = ["🤖", "👾", "☠️"];
const startPopup = document.getElementById("start");
const welcomeText = document.getElementById("welcome-text");
const restartBtn = document.getElementById("restart");
const characterHolder = document.getElementById("character");
const gameAreaBox = document.querySelectorAll("#box");

let boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayIndex = 8;
let iconInBoxes = document.createElement("div");
iconInBoxes.classList.add("user");
let userCharacterElemNum;

// render character for start poppup
for (let i = 0; i < userCharacter.length; i++) {
  const characterEl = document.createElement("button");
  characterEl.id = `charselect`;
  characterEl.setAttribute("data-value", i);
  characterEl.textContent = userCharacter[i];
  characterHolder.appendChild(characterEl);
}

// get javascript added buttons id, for icons
const characterElDom = document.querySelectorAll("#charselect");
const charselect = document.getElementById("charselect");
// add eventlistner for start poppup
characterElDom.forEach(function (elemNum) {
  elemNum.addEventListener("click", function () {
    userCharacterElemNum = parseInt(elemNum.getAttribute("data-value"));
    startPopup.style.display = "none";
    addIconsforBoxes();
  });
});

// add restart button
restartBtn.addEventListener("click", () => {
  startPopup.style.display = "block";
  welcomeText.style.display = "none";
  gameAreaBox.forEach(function (boxNum) {
    location.reload();
  });
});

// add EventListener for boxes
function addIconsforBoxes() {
  gameAreaBox.forEach(function (boxNum) {
    boxNum.addEventListener("click", function () {
      boxNum.textContent = userCharacter[userCharacterElemNum];

      let userPlace = parseInt(boxNum.getAttribute("data-box"));
      //   console.log(typeof userPlace);

      console.log(userPlace);

      const indexOfFiveUserPlace = boxArray.indexOf(userPlace);

      if (indexOfFiveUserPlace !== -1) {
        boxArray.splice(indexOfFiveUserPlace, 1);

        let computerPlaceIndex =
          boxArray[Math.round(Math.random() * boxArray.length - 1)];

        if (computerPlaceIndex !== -1) {
          boxArray.splice(computerPlaceIndex, 1);
        }

        console.log("Com" + computerPlaceIndex);


        
        let computerPlace = document.querySelector(
          `[data-box="${computerPlaceIndex}"]`
        );

        computerPlace.textContent = computerCharacter[2];
        computerPlace.style = "pointer-events: none;";
        console.log(computerPlace);
      }

      console.log(boxArray);

      boxNum.style = "pointer-events: none;";

      //   let computerPlace = Math.round(Math.random() * 9);
      //   console.log(computerPlace);
    });
  });
}
