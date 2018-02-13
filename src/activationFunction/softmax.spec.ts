import { Array2D } from '../data/';
import softmax from './softmax';
test('softmax', () => {
  const test = new Array2D(
    [3, 3],
    [1.2, 1.2, 1.2, 0.9, 0.9, 0.9, 0.4, 0.4, 0.4],
  );
  const ro = softmax(test);
  const expected = new Array2D([3, 3], [
    0.4565903181944378,
    0.4565903181944378,
    0.4565903181944378,
    0.3382504271053028,
    0.3382504271053028,
    0.3382504271053028,
    0.20515925470025934,
    0.20515925470025934,
    0.20515925470025934,
  ]);
  ro.A.subtract(expected);
  expect(ro.A.subtract(expected).norm()).toBeLessThan(0.001);
});
