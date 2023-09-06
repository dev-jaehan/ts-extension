interface String {
  capitalize(): string;
  truncate(len?: number): string;
  addPrefix(prefix: string): string;
  addSuffix(suffix: string): string;
}

String.prototype.addPrefix = function (prefix: string) {
  return prefix + this;
};

String.prototype.addSuffix = function (suffix: string) {
  return this + suffix;
};

String.prototype.capitalize = function (): string {
  return this[0].toUpperCase() + this.slice(1).toLowerCase();
};

String.prototype.truncate = function (len = 10): string {
  return this.substring(0, len) + (this.length > len ? "..." : "");
};
