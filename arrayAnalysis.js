const arrayAnalysis = (array) => {
  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min.apply(null, array),
    max: Math.max.apply(null, array),
    length: array.length,
  };
};

export default arrayAnalysis;
