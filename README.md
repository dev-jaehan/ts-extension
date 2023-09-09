# @dev-jaehan/ts-extension

Extension methods for TypeScript

</br>

[![Latest Stable Version](https://img.shields.io/npm/v/@dev-jaehan/ts-extension.svg)](https://www.npmjs.com/package/@dev-jaehan/ts-extension)
[![NPM Downloads](https://img.shields.io/npm/dm/@dev-jaehan/ts-extension.svg)](https://www.npmjs.com/package/@dev-jaehan/ts-extension)
[![NPM Downloads](https://img.shields.io/npm/dt/@dev-jaehan/ts-extension.svg)](https://www.npmjs.com/package/@dev-jaehan/ts-extension)
[![Bundlephobia Size](https://img.shields.io/bundlephobia/minzip/@dev-jaehan/ts-extension.svg)](https://www.npmjs.com/package/@dev-jaehan/ts-extension)
[![License](https://img.shields.io/npm/l/utility-types.svg?style=flat)](https://david-dm.org/piotrwitek/utility-types?type=peer)

## Installation

```
npm i @dev-jaehan/ts-extension
```

```
yarn add @dev-jaehan/ts-extension
```

## Usage

Please import the package once from anywhere.

```typescript
import "@dev-jaehan/ts-extension";
```

### Array

```typescript
const arr = [1, 2, 3, 4, 5, 6, 5, 5];
arr.first(); // 1
arr.last(); // 5
arr.remove(5); // [1, 2, 3, 4, 6]
arr.removeBy(1); // [1, 3, 4, 5, 6, 5, 5]
arr.uniq(); // [1, 2, 3, 4, 5, 6]
arr.shuffle(); // [5, 1, 3, 4, 2, 6, 5, 5]
```

### String

```typescript
const string = "abcdefghijklmn";
string.addPrefix("hi"); // hiabcdefghijklmn
string.addSuffix("op"); // abcdefghijklmnop
string.capitalize(); // Abcdefghhijklmn
string.truncate(); // abcdefghij...
```

### Object

```typescript
const obj = {
  a: 1,
  b: "a",
  c: 24,
};
const newObj = obj.deepCopy();
/*
newObj = {
  a: 1,
  b: 'a',
  c: 24,
}
*/
```

### Number

```typescript
const num1 = 1.1234567;
num1.isInt(); // false
num2.isFloat(); // true
num2.toFixedNumber(); // 1.12 (return type: number)

const timeStamp = 1694242562;
timeStamp.toLocaleDateTime(); // 2023. 9. 9. 오후 3:56:02
const date = timeStamp.convertUnixTimestamp();
/*
date = {
  yyyy: '2023',
  yy: '23',
  MM: '11',
  dd: '09',
  HH: '15',
  hh: '03',
  mm: '56',
  ss: '02',
  day: '목'
}
*/
```
