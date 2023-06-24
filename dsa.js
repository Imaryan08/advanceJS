// 1. Marks and Distinction 

function solve(n, arr) {
  let stk = [];
  let ans = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stk.length !== 0 && stk[stk.length - 1] <= arr[i]) {
      stk.pop();
    }
    if (stk.length === 0) ans.push(arr[i]);
    stk.push(arr[i]);
  }
  console.log(ans.reverse().join(" "));
}
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  solve(n, arr);
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

// 2. Anagram Detector

function isAnagram(word1, word2) {
  // Convert the words to lowercase and remove any non-alphabetic characters
  const processedWord1 = word1.toLowerCase().replace(/[^a-z]/g, "");
  const processedWord2 = word2.toLowerCase().replace(/[^a-z]/g, "");

  // Sort the characters of the processed words
  const sortedWord1 = processedWord1.split("").sort().join("");
  const sortedWord2 = processedWord2.split("").sort().join("");

  // Compare the sorted words
  return sortedWord1 === sortedWord2;
}

//   console.log(isAnagram("silent", "linet")// )

// 3. Distinct again

let arr = [1, 1, 2, 2, 2];

let uniqArr = [...new Set(arr)];

let sum = uniqArr.reduce((ac, cv) => ac + cv, 0);

// console.log(sum);




// 5. Generate Permutations

arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  let res = "";

  for (let j = i; j < arr.length; j++) {
    res += arr[j] + " ";
  }

  for (let j = 0; j < i; j) {
    res += arr[j] + " ";
  }

  console.log(res);
}

// Similar Text

function SimilarTexts_V0(str1, str2) {
  const n = str1.length;
  let prev = new Array(n + 1).fill(0),
    curr = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        curr[j] = 1 + prev[j];
      } else {
        curr[j] = Math.max(prev[j], curr[j - 1]);
      }
    }
    prev = [...curr];
  }

  console.log(curr[n]);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim().split("");
  let str2 = input[1].trim().split("");

  SimilarTexts_V0(str1, str2);
}

// Deleting node

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function deleteNode(head, position) {
  if (position == 0) {
    return head.next;
  }
  let run = true;
  let temp = head;
  let count = 0;
  while (run) {
    temp = temp.next;
    count++;
    if (count == position - 1) {
      run = false;
    }
  }
  let remain = temp.next.next;
  temp.next = remain;
  return head;
}

// Rat in a maze

function TheDeparted(matrix, n, row, col, bag, result) {
  if (row >= n || row < 0 || col >= n || col < 0) {
    return;
  }
  if (matrix[row][col] === 0) {
    return;
  }
  if (row === n - 1 && col === n - 1) {
    result.push(bag);
    return;
  }

  matrix[row][col] = 0;
  TheDeparted(matrix, n, row - 1, col, bag + "U", result);
  TheDeparted(matrix, n, row + 1, col, bag + "D", result);
  TheDeparted(matrix, n, row, col - 1, bag + "L", result);
  TheDeparted(matrix, n, row, col + 1, bag + "R", result);
  matrix[row][col] = 1;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(input[line++].trim().split(" ").map(Number));
  }
  if (matrix[0][0] === 0) {
    console.log(-1);
    return;
  }
  const result = [];
  TheDeparted(matrix, n, 0, 0, "", result);
  if (matrix.length && result.length) {
    console.log(result.sort().join(" "));
  } else if (matrix.length && !result.length) {
    console.log(-1);
  } else {
    console.log("");
  }
}

if (process.env.USER === "") {
  runProgram("");
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgramm(read);
    process.et(0);
  });
}

// N queens variant

function runProgram(input) {
  let n = +input;
  let board = [];
  for (var i = 0; i < n; i++) {
    board.push(new Array(n).fill(0));
  }
  let count = 0;
  check(board, 0, n);
  console.log(count);

  function check(board, row, N) {
    if (row == N) {
      count++;
      return;
    }
    for (let i = 0; i < N; i++) {
      if (check_safe(board, row, i) === true) {
        board[row][i] = 1;
        check(board, row + 1, N);
        board[row][i] = 0;
      }
    }
  }

  function check_safe(board, row, col) {
    for (let i = row - 1; i >= 0; i--) {
      if (board[i][col] == 1) return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] == 1) return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == 1) return false;
    }
    return true;
  }
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
