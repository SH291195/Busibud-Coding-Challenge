function SearchingChallenge(strArr) {
  // Convert strings to arrays of characters
  strArr = strArr.map(row => row.split(""));

  const rows = strArr.length;
  const cols = strArr[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  let count = 0;

  function dfs(r, c) {
    if (
      r < 0 || c < 0 ||
      r >= rows || c >= cols ||
      strArr[r][c] === '1' || visited[r][c]
    ) return;

    visited[r][c] = true;

    dfs(r + 1, c); // down
    dfs(r - 1, c); // up
    dfs(r, c + 1); // right
    dfs(r, c - 1); // left
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (strArr[i][j] === '0' && !visited[i][j]) {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
}

// Test input
console.log(SearchingChallenge(["01111", "01001", "00011", "11110"])); 
