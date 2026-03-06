//Name: Katie, Description: This JS file writes a triva question function to put in an HTML file with others

// 1) Each function should accept points as an input
// 5) Name your function according to the guidelines on canvas (e.g. round1, round2, etc.)
export const round3 = (points) => {

    // 2) Each function should display a prompt quizzing the user on the correct answer to a piece of USU trivia (You choose the trivia question)
    let trivQuest = prompt("What was the name of the USU club that started the tradition of True Aggie Night?").toLowerCase();

    // 3) If they answer correctly, return the input points + however many points you feel they deserve for being correct.
    // 4) Otherwise, return the original score
    if (trivQuest === "beno club"){
        alert(`Correct! Your original score was ${points}, and you earned 100 points. Your score is now: ${Number((points+100))}`);
    }else if (trivQuest !== "beno club"){
        alert(`Unfortunately, that is incorrect. The answer was "Beno Club". Your score is: ${Number(points)}`);
    }else{
        alert("Okay, something is definitely wrong with the code.");
    };
};
