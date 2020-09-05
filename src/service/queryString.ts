export const stringifyObjectSearchParams = <T>(obj: T): string => {
  let result = new URLSearchParams('');
  let concatNestedObjParams = '';

  const setResult = (obj: T) => {
    for (const key in obj) {
      let value = obj[key];

      if (
        typeof value !== 'undefined' &&
        //* because {key: ()=>} is an object TS
        typeof value !== 'function' &&
        //* because typeof null === 'object'
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
            setResult((value as unknown) as T);
          }
        } else {
          result.set(
            concatNestedObjParams ? `${concatNestedObjParams}.${key}` : key,
            (value as unknown) as string
          );
          concatNestedObjParams = '';
        }
      }
    }
  };

  Object.keys(obj).length && setResult(obj);

  return result.toString();
};
