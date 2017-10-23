//Assignment 4 PART 2
//Player Piano

function playerPiano(pianoRoll) {

  let song = "",
      x = "";

    for(i = 0; i <= pianoRoll.length; i++) {
      x = x + i;
      song = song + String.fromCharCode(x);
    }
    return song;
}

let test = (65,66,67,68)

let odeToJoy = (67,35,67,35,67,35,67,35,68,68,69,69,69,69,68,68,67,35,67,35,65,65,65,65,66,66,67,35,67,35,67,35,67,35,32,66,66,66)

let scotlandTheBrave = [66,98,66,98,32,32,66,98,66,98,67,67,68,68,69,98,68,67,67,68,69,98,70,70,66,98,68,67,66,98,65,66,98]

console.log(playerPiano(test));
