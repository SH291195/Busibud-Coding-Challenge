function ArrayChallenge(strArr) {
  const children = {};
  const parents = {};
  
  for (let pair of strArr) {
    const [child, parent] = pair.match(/\d+/g).map(Number);
    
    // Track number of children for each parent
    if (!children[parent]) children[parent] = [];
    children[parent].push(child);
    
    // Check for more than 2 children
    if (children[parent].length > 2) return "false";

    // Track parent of each child
    if (parents[child]) return "false"; // child already has a parent
    parents[child] = parent;
  }

  // Find the root (node that is not a child)
  let rootCount = 0;
  for (let parent in children) {
    if (!parents[parent]) rootCount++;
    if (rootCount > 1) return "false"; // multiple roots
  }

  return "true";
}

//test input
const testInput = ["(1,2)", "(2,4)", "(5,7)", "(7,8)", "(9,5)"];
console.log(ArrayChallenge(testInput));
