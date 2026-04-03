// Write your functions here:
// 1) Each function should accept points as an input
// 2) Each function should display a prompt quizzing the user on the correct answer to a piece of USU trivia (You choose the trivia question)
// 3) If they answer correctly, return the input points + however many points you feel they deserve for being correct.
// 4) Otherwise, return the original score
// 5) Name your function according to the guidelines on canvas (e.g. round1, round2, etc.)
// If you need more guidence, feel free to check index.html to see the main flow of the program.

// Tanner - Round 5
export function round5(points) {
    // USU Trivia Question
    const answer = prompt("What is was the name of USU when it first opened in 1888?").toLowerCase();
    // Checks if the answer is correct
    if (answer === "agricultural college of utah") {
        alert("Correct! You earn 10 points.");
        return points + 10; 
    } else {
        alert("Incorrect. The correct answer is 'Agricultural College of Utah'.");
        return points; 
    }
}
// programmed by Christian Sperry
round1 = (points) => {
  let question = prompt(
    "What is the abreviation of Utah State University",
  ).toLowerCase();

  if (question === "usu") {
    points += 10;
  }

  return points;
};

export { round1 };
export function round4(points) {
  const answer = prompt("What is the mascot of Utah State University?");
  if (answer && answer.toLowerCase() === "aggies") {
    const earnedPoints = 10; // points you want to give
    return points + earnedPoints;
  }
  return points;
}
export function round2 (points) {
  const answer = prompt(
    "What is the mascot of Utah State University?"
  );

  if (answer && answer.toLowerCase() === "Big Blue") {
    alert("Correct!");
    return points + 5;
  } else {
    alert("Incorrect. The answer is Big Blue.");
    return points;
  }
}
