christianFunction = (points) => {
  let question = prompt(
    "What is the abreviation of Utah State University",
  ).toLowerCase();

  if (question === "usu") {
    points += 10;
  }

  return points;
};
