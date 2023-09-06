import { it, expect, describe } from "@jest/globals";
import "../extensions";

describe("String extension", () => {
  it("addPrefix()가 호출되면 접두사가 합쳐진 형태로 반환되어야 한다 ", () => {
    const value = "1234";
    const result = value.addPrefix("0x");

    expect(result).toBe("0x1234");
  });

  it("addSuffix()가 호출되면 접미사가 합쳐진 형태로 반환되어야 한다 ", () => {
    const value = "1234";
    const result = value.addSuffix("suffix");

    expect(result).toBe("1234suffix");
  });

  it("capitalize()가 호출되면 첫글자가 대문자로 변환 불가능한 경우, 그대로 반환되어야 한다", () => {
    const value = "1234";
    const result = value.capitalize();

    expect(result).toBe("1234");
  });

  it("capitalize()가 호출되면 첫글자가 대문자로 변환 가능한 경우, 대문자로 변환되어 반환되어야 한다", () => {
    const value = "the";
    const result = value.capitalize();

    expect(result).toBe("The");
  });

  it("capitalize()가 호출되면 첫글자가 이미 대문자인 경우, 그대로 반환되어야 한다", () => {
    const value = "The";
    const result = value.capitalize();

    expect(result).toBe("The");
  });

  it("truncate()가 호출되면 기본값으로 등록된 길이 변수만큼 줄어들어 반환되어야 한다", () => {
    const value = "12345678901234567890";
    const result = value.truncate();

    expect(result).toBe("1234567890...");
  });

  it("truncate()가 호출되면 전달된 길이 매개변수만큼 줄어들어 반환되어야 한다", () => {
    const value = "12345678901234567890";
    const result = value.truncate(11);

    expect(result).toBe("12345678901...");
  });

  it("truncate()가 호출되면 문자열의 길이가 전달된 길이 매개변수보다 작을 경우, 그대로 반환되어야 한다", () => {
    const value = "12345678901234567890";
    const result = value.truncate(30);

    expect(result).toBe("12345678901234567890");
  });
});
