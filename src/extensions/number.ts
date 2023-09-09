interface Number {
  isInt(): boolean;
  isFloat(): boolean;
  toFixedNumber(dec?: number): number;
  toLocaleDateTime(): string;
  convertUnixTimestamp(): object;
  randomInt(min: number, max: number): number;
  randomFloat(min: number, max: number): number;
}

Number.prototype.isInt = function (): boolean {
  return this.valueOf() % 1 === 0;
};

Number.prototype.isFloat = function (): boolean {
  return this.valueOf() % 1 !== 0;
};

Number.prototype.toFixedNumber = function (dec: number = 2): number {
  return Number(this.valueOf().toFixed(dec));
};

Number.prototype.toLocaleDateTime = function (): string {
  const date = new Date(this.valueOf());
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

Number.prototype.convertUnixTimestamp = function (): object {
  const date = new Date(1694240477 * 1000);
  const obj = {
    date,
    year: date.getFullYear(),
    month: "0" + (date.getMonth() + 1),
    day: "0" + date.getDate(),
    hour: "0" + date.getHours(),
    minute: "0" + date.getMinutes(),
    second: "0" + date.getSeconds(),
  };
  return obj;
};
