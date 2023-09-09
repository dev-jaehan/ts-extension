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
  const date = new Date(this.valueOf() * 1000);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

Number.prototype.convertUnixTimestamp = function (): object {
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const date = new Date(this.valueOf() * 1000);
  const pad = (num: number) => num.toString().padStart(2, "0");

  const obj = {
    yyyy: date.getFullYear().toString(),
    yy: date.getFullYear().toString().slice(-2),
    MM: pad(date.getMonth() + 1),
    dd: pad(date.getDate()),
    HH: pad(date.getHours()),
    hh: pad(date.getHours() % 12 || 12),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),
    day: dayOfWeek[date.getDay()],
  };

  return obj;
};
