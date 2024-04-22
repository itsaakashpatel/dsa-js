//For mental model, check notebook.

function subsequence(processedStr, unProcessedString) {
  if (unProcessedString.length === 0) {
    console.log(processedStr);
    return;
  }

  //Start with unprocessed string and takes first character
  const char = unProcessedString.charAt(0);
  subsequence(processedStr + char, unProcessedString.substring(1));
  subsequence(processedStr, unProcessedString.substring(1));
}

console.log(subsequence("", "abc"));
