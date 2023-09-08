interface Array<T> {
  first(): T | undefined;
  last(): T | undefined;
  remove(value: T): T | undefined;
  removeBy(index: number): T | undefined;
  uniq(): T[] | undefined;
  shuffle(): T[] | undefined;
}

Array.prototype.first = function <T>(): T | undefined {
  return this[0];
};

Array.prototype.last = function <T>(): T | undefined {
  return this[this.length - 1];
};

Array.prototype.remove = function <T>(value: T): T[] | undefined {
  return this.filter((x) => x !== value);
};

Array.prototype.removeBy = function <T>(index: number): T[] | undefined {
  this.splice(index, 1);
  return this;
};

Array.prototype.uniq = function <T>(): T[] | undefined {
  return Array.from(new Set(this));
};

Array.prototype.shuffle = function <T>(): T[] | undefined {
  for (let i = this.length - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [this[i], this[random]] = [this[random], this[i]];
  }
  return this;
};

console.log("");
