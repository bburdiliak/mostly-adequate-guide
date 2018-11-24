// Refactor `fastestCar` using `compose()` and other functions in pointfree-style.
// Hint, the `flip` function may come in handy.

// fastestCar :: [Car] -> String
const fastestCar = compose(
  // flip,
  curry(flip(concat))(' is the fastest'),

  // Car -> String
  prop('name'),

  // [Car] -> Car
  last,

  // [Car] -> [Car]
  sortBy(prop('horsepower'))
);

