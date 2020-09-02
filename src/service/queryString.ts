export type Params = {
  [x: string]:
    | undefined
    | null
    | number
    | string
    | boolean
    | object
    | (string | number)[];
};

export const stringifyObjectSearchParams = (obj: Params): string => {
  let result = new URLSearchParams('');
  let concatNestedObjParams = '';

  const setResult = (obj: Params) => {
    for (const key in obj) {
      const value = obj[key];

      if (
        typeof value !== 'undefined' &&
        //because {key: ()=>} is an object TS
        typeof value !== 'function' &&
        //because typeof null === 'object'
        value !== null
      ) {
        if (typeof value === 'object') {
          if (Array.isArray(value)) {
            const arr = value;

            for (const val of arr) {
              result.append(key, val.toString());
            }
          } else {
            concatNestedObjParams = concatNestedObjParams
              ? `${concatNestedObjParams}.${key}`
              : key;
            setResult(value as Params);
          }
        } else {
          result.set(
            concatNestedObjParams ? `${concatNestedObjParams}.${key}` : key,
            value.toString()
          );
          concatNestedObjParams = '';
        }
      }
    }
  };

  Object.keys(obj).length && setResult(obj);

  return result.toString();
};
