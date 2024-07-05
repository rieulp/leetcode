function convert(s: string, numRows: number): string {
  const board: string[][] = Array.from({ length: numRows }, () => []);
  let flag = 1;
  for (let i = 0, row = 0; i < s.length; i++) {
    board[row % numRows].push(s[i]);
    if (row === 0) flag = 1;
    else if (row === numRows - 1) flag = -1;
    row += flag;
  }
  return board.map((item) => item.join("")).join("");
}
