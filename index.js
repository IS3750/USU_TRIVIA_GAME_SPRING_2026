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