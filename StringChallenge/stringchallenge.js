function StringChallenge(str) {
  let maxUnique = 0;
  let maxSubstring = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = str.length - 1; j > i; j--) {
      if (str[i] === str[j]) {
        const substr = str.slice(i + 1, j);
        const uniqueChars = new Set(substr);
        if (uniqueChars.size > maxUnique) {
          maxUnique = uniqueChars.size;
          maxSubstring = substr;
        }
      }
    }
  }

  console.log("Max Substring:", maxSubstring);
  return maxUnique;
}

// Test it
console.log("Unique Count:", StringChallenge("mmmerme"));
