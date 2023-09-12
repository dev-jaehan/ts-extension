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

  it("deepCopy() 함수가 호출되면 새로운 메모리힙에 할당되어 복사된 배열이 반환되어야 한다", () => {
    const arr = [1, 2, [3, 4], { a: 5, b: 6 }];
    const result = arr.deepCopy();
    expect(result === arr).toEqual(false);
  });

  it("deepCopy() 함수는 복사 대상 배열의 오브젝트 인덱스의 메소드까지 정상적으로 복사되어 반환되어야 한다", () => {
    const arr = [
      1.1,
      22.1,
      [3, 4],
      {
        a: () => 20,
        b: () => "hi",
      },
    ];
    const result = arr.deepCopy();
    expect(
      (result[3] as { a: () => number }).a() === 20 &&
        (result[3] as { b: () => string }).b() === "hi"
    ).toEqual(true);
  });
});
