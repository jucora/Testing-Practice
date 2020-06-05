import arrayAnalysis from "./arrayAnalysis";

describe("arrayAnalysis", () => {
  const array = [1, 8, 3, 4, 2, 6];
  it("should return the average of the array values", () => {
    expect(arrayAnalysis(array).average).toEqual(4);
  });
  it("should return min array value", () => {
    expect(arrayAnalysis(array).min).toEqual(1);
  });
  it("should return the max array value", () => {
    expect(arrayAnalysis(array).max).toEqual(8);
  });
  it("should return the array length", () => {
    expect(arrayAnalysis(array).length).toEqual(6);
  });
});
