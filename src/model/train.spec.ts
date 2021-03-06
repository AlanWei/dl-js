import train from './train';

test('train', () => {
  const ro = train(
    [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
    [[1, 1, 0]],
    {
      W1: [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
      b1: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      activation1: 'relu',
      W2: [[1, 1, 1]],
      b2: [[0, 0, 0]],
      activation2: 'sigmoid',
    },
    "cross-entropy",
    0.005,
  );
  expect(ro.cost).toEqual(3.000123402189504);
  expect(ro.parameters.W1).toEqual([
    [0.9950018509186398, 0.9950018509186398, 0.9950018509186398],
    [0.9950018509186398, 0.9950018509186398, 0.9950018509186398],
    [0.9950018509186398, 0.9950018509186398, 0.9950018509186398],
  ]);
  expect(ro.parameters.W2).toEqual([[
    0.9850055527559194,
    0.9850055527559194,
    0.9850055527559194,
  ]]);
  expect(ro.parameters.b1).toEqual([
    [6.169728799315655e-7, 6.169728799315655e-7, -0.004999383027120069],
    [6.169728799315655e-7, 6.169728799315655e-7, -0.004999383027120069],
    [6.169728799315655e-7, 6.169728799315655e-7, -0.004999383027120069],
  ]);
  expect(ro.parameters.b2).toEqual([
    [6.169728799315655e-7, 6.169728799315655e-7, -0.004999383027120069],
  ]);
});