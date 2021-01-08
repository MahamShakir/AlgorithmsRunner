export default function longestCommonSubsequence(s1, s2, updateLogs, updateOutput) {
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

    console.log(matrix);
    
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
    updateLogs(`Longest length: ${index}`);
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
        updateLogs(currStr);
        if(currStr.length == longestLen) break;
    }
    
    let answer = lcs.join("");
    updateOutput(answer);
    return answer;
}