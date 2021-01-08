function longestCommonSubsequence(s1, s2) {
  // string to array
  const arr1 = [...s1]
  const arr2 = [...s2]

  // define n x m sized array filled with 0's
  let matrix = [];

  for(let i = 0; i <= arr1.length; i++) {
      matrix[i] = [];
      for(let j = 0; j <= arr2.length; j++) {
          matrix[i][j] = 0;
      }
  }

  // fill the matrix
  for(let i = 1; i <= arr1.length; i++) {
      for(let j = 1; j <= arr2.length; j++) {
          if(arr1[i-1] === arr2[j-1]) { 
              matrix[i][j] = matrix[i-1][j-1] + 1;
          }
          else matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1])
      }
  }
  let index = matrix[matrix.length-1][matrix[0].length-1];
  console.log(index);
  let lcs = [];
  let a = arr1.length;
  let b = arr2.length; 
  let longestLen = index;
  while (a > 0 && b > 0){ 
      // If current character in X[] and Y are same, then 
      // current character is part of LCS 
      if (arr1[a-1] == arr2[b-1]) 
      { 
          lcs[index-1] = arr1[a-1]; // Put current character in result 
          a--; b--;     // reduce values of i, j and index 

          index--;
      } 

      // If not same, then find the larger of two and 
      // go in the direction of larger value 
      else if (matrix[a-1][b] > matrix[a][b-1]) {
          //lcs[index-1] = arr1[a-1];
          a--;
      } else {
          //lcs[index-1] = arr2[b-1];
          b--; 
      }
      let currStr = lcs.join("");
      if(currStr.length == longestLen) break;
  }
  
  let answer = lcs.join("");
  return answer;
}

export default function shortestCommonSupersequence(set1, set2, updateLogs, updateOutput) {
  // Let's first find the longest common subsequence of two sets.
  const lcs = longestCommonSubsequence(set1, set2);
  console.log(lcs);

  // If LCS is empty then the shortest common supersequence would be just
  // concatenation of two sequences.
  if (lcs.length === 1 && lcs[0] === '') {
    return set1.concat(set2);
  }

  // Now let's add elements of set1 and set2 in order before/inside/after the LCS.
  let supersequence = [];

  let setIndex1 = 0;
  let setIndex2 = 0;
  let lcsIndex = 0;
  let setOnHold1 = false;
  let setOnHold2 = false;

  while (lcsIndex < lcs.length) {
    console.log('abcd');
    // Add elements of the first set to supersequence in correct order.
    if (setIndex1 < set1.length) {
      if (!setOnHold1 && set1[setIndex1] !== lcs[lcsIndex]) {
        supersequence.push(set1[setIndex1]);
        updateLogs(supersequence.join(""));
        setIndex1 += 1;
      } else {
        setOnHold1 = true;
      }
    }

    // Add elements of the second set to supersequence in correct order.
    if (setIndex2 < set2.length) {
      if (!setOnHold2 && set2[setIndex2] !== lcs[lcsIndex]) {
        supersequence.push(set2[setIndex2]);
        updateLogs(supersequence.join(""));
        setIndex2 += 1;
      } else {
        setOnHold2 = true;
      }
    }

    // Add LCS element to the supersequence in correct order.
    if (setOnHold1 && setOnHold2) {
      supersequence.push(lcs[lcsIndex]);
      updateLogs(supersequence.join(""));
      lcsIndex += 1;
      setIndex1 += 1;
      setIndex2 += 1;
      setOnHold1 = false;
      setOnHold2 = false;
    }
  }

  // Attach set1 leftovers.
  if (setIndex1 < set1.length) {
    supersequence = supersequence.concat(set1.slice(setIndex1));
    updateLogs(supersequence.join(""));
  }

  // Attach set2 leftovers.
  if (setIndex2 < set2.length) {
    supersequence = supersequence.concat(set2.slice(setIndex2));
    updateLogs(supersequence.join(""));
  }
  let answer = supersequence.join("");
  updateOutput(answer);
  return answer;
}
