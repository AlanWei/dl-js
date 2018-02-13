import norm from './norm';
import { Array2D } from '../data/';
test('matrix norm', () => {
  const ro = new Array2D([2,3], [1, 1.414,0,1, 1.732, 3]);

  expect(Math.abs(ro.norm()-4)).toBeLessThan(0.001);
});
