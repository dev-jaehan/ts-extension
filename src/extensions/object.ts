interface Object {
  deepCopy(): any;
}

function cloneObject<T>(obj: T): T {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const cp = { ...(obj as { [key: string]: any }) } as {
    [key: string]: any;
  };
  for (const value in obj) {
    if (obj.hasOwnProperty(value)) {
      cp[value] = cloneObject(obj[value]);
    }
  }
  return cp as T;
}

Object.prototype.deepCopy = function (): any {
  return cloneObject(this);
};
