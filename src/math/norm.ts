import { Array2D } from '../data/';

function norm(
  input: Array2D
): number {
    const numRows = input.shape[0];
    const numCols = input.shape[1];    
    let sum = 0;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {          
            sum += input.matrix[i][j]*input.matrix[i][j];
        }
      }
  return Math.sqrt(sum);
}

export default norm;
