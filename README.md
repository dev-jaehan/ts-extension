# @dev-jaehan/ts-extension

Extension methods for TypeScript

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
