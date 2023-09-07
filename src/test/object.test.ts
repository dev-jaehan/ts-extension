import { it, expect, describe } from "@jest/globals";
import "../extensions";

describe("Object extension", () => {
  it("deepCopy() 함수가 호출되면 매개변수를 참조하지 않고 복사된 오브젝트가 반환되어야 한다", () => {
    const obj = {
      a: {
        a1: {
          a2: {
            a3: () => {
              return 1234;
            },
          },
        },
      },
      b: "2",
      c: 3,
    };
    const newObj = obj.deepCopy();
    expect(
      obj !== newObj &&
        obj.a.a1.a2.a3() === 1234 &&
        obj.b === newObj.b &&
        obj.c === newObj.c
    ).toBe(true);
  });
});
