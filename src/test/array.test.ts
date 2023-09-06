import { it, expect, describe } from "@jest/globals";
import "../extensions";

describe("Array extension", () => {
  it("first() 함수가 호출되면 배열의 첫번째 인덱스가 반환되어야 한다", () => {
    const arr = [1, 2, 3];
    const result = arr.first();
    expect(result).toBe(1);
  });

  it("last() 함수가 호출되면 배열의 마지막 인덱스가 반환되어야 한다", () => {
    const arr = [1, 2, 3];
    const result = arr.last();
    expect(result).toBe(3);
  });

  it("remove() 함수가 호출되면 배열의 해당 값을 제거하여 반환되어야 한다", () => {
    const arr = [3, 1, 2, 3, 3, 3, 3];
    const result = arr.remove(3);
    expect(result).toEqual([1, 2]);
  });

  it("removeBy() 함수가 호출되면 배열의 해당 인덱스를 제거하여 반환되어야 한다", () => {
    const arr = [3, 1, 2];
    const result = arr.removeBy(1);
    expect(result).toEqual([3, 2]);
  });

  it("uniq() 함수가 호출되면 배열 내 중복값이 제거되어 반환되어야 한다", () => {
    const arr = [3, 1, 2, 3, 4, 3, 4, 3];
    const result = arr.uniq();
    expect(result).toEqual([3, 1, 2, 4]);
  });
});
