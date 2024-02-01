import { useEffect, useState } from "react";

const isFalsy = (value: unknown) => (value === 0 ? false : !value);
// 在一个函数里，改变传入的对象本身是不对的
export const cleanObject = (object: object) => {
  // object.assign({},object)
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// 后面用泛型来规范类型
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

export interface UseList {
  name: string;
  age: number;
}
// interface ArrayProps {
//   value: UseList[];
//   clear: () => [];
//   removeIndex: (i: number) => UseList[];
//   add: (user: UseList) => UseList[];
// }

export const useArray = (arrayProps: UseList[]) => {
  // hello，请把作业写在这里吧，写完记得再对照作业要求检查一下
  let value: UseList[];
  value = arrayProps;
  const clear = () => value.splice(0, value.length);
  const removeIndex = (i: number) => value.splice(i, 1);
  const add = (user: UseList) => {
    console.log(user);
    value.push(user);
    console.log(value);
  };
  return { value, clear, removeIndex, add };
};
