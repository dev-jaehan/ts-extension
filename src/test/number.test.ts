import { it, expect, describe } from "@jest/globals";
import "../extensions";

describe("Array extension", () => {
  it("isInt() 함수가 호출되면 변수가 정수인지에 대한 결과를 반환해야 한다.", () => {
    const num1 = 1;
    const num2 = 1.1;
    const num3 = -5;
    const num4 = -5.1;
    expect(num1.isInt() && !num2.isInt() && num3.isInt() && !num4.isInt()).toBe(
      true
    );
  });

  it("isFloat() 함수가 호출되면 변수가 실수인지에 대한 결과를 반환해야 한다.", () => {
    const num1 = 1;
    const num2 = 1.1;
    const num3 = -5;
    const num4 = -5.1;
    expect(
      !num1.isFloat() && num2.isFloat() && !num3.isFloat() && num4.isFloat()
    ).toBe(true);
  });

  it("toFixedNumber() 함수가 호출되면 소수점이 절사되어 반환되어야 한다. (return type: number).", () => {
    const num1 = 1.123456789;
    expect(num1.toFixedNumber()).toBe(1.12);
  });
});
