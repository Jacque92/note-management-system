export const getNextIndex = (allThoughts, thisIndex = 0) => {
  let maxNumber = 0;
  let letter = "a";
  let regExp = new RegExp(/[a-z]/);
  let number;

  if (thisIndex) {
    number = thisIndex.split("(")[0];
    allThoughts
      .filter((thought) => {
        return thought.index.split("(")[0] === number;
      })
      .map((thought) => {
        if (thought.index.match(regExp)[0] > letter) {
          letter = thought.index.match(regExp)[0];
        }
      });
    let nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
    return number + "(" + nextLetter + ")";
  } else {
    allThoughts.map((thought) => {
      let number = thought.index.split("(")[0];
      if (number > maxNumber) {
        maxNumber = number;
      }
    });
    maxNumber++;
    return maxNumber + "(a)";
  }
};

export const submitNote = async (noteInfo, url) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(noteInfo),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, requestOptions);
  if (response.ok) {
    return { message: "Note Saved!" };
  }
};
