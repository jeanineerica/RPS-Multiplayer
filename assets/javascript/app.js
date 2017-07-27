//IF ELSE STATEMENT FOR P1 VS P2
if (playerOne === "p" || playerOne === "r" || playerOne === "s") {
        if (playerOne === playerTwo) {
          tie++;
        }
        else if (playerOne === "p") {
          if (playerTwo === "r") {
            win++;
          }
          else {
            loss++;
          }
        }
        else if (playerOne === "r") {
          if (playerTwo === "s") {
            win++;
          }
          else {
            loss++;
          }  
       }
        else if (playerOne === "s") {
          if (playerTwo === "p") {
            win++;
          }
          else {
            loss++;
          }
        }
      }