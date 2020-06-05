import arrayAnalysis from "./arrayAnalysis";

describe("arrayAnalysis", () => {
  it("should return the average of the array values", () => {
    const array = [1, 8, 3, 4, 2, 6];
    expect(arrayAnalysis(array).average).toEqual(4);
  });
  it("should return min array value", () => {
    const array = [1, 8, 3, 4, 2, 6];
    expect(arrayAnalysis(array).min).toEqual(1);
  });
  it("should return the max array value", () => {
    const array = [1, 8, 3, 4, 2, 6];
    expect(arrayAnalysis(array).max).toEqual(8);
  });
  it("should return the array length", () => {
    const array = [1, 8, 3, 4, 2, 6];
    expect(arrayAnalysis(array).length).toEqual(6);
  });
});
