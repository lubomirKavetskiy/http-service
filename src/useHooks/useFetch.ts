import { getToken } from 'services';

enum FetchMethods {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  del = 'DELETE',
}

export const useFetch = (baseURL: string) => {
  const customFetch = async <T>(
    method: FetchMethods,
    path: string,
    signal: AbortSignal,
    body: object | null = null,
    headers?: object
  ): Promise<T> => {
    const token = getToken() as string | undefined;
    const defaultHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
    const options: { [x: string]: any; } = { method, headers: headers || defaultHeader };

    if (body) options.body = JSON.stringify(body);
    options.signal = signal;

    try {
      const response = await fetch(`${baseURL}${path}`, options);
      console.log({ response });
      if (response.ok) {
        const result = await response.json();
        if (result.code >= 400 && result.code <= 500) {
          throw result;
        }
        return result;
      } else {
        throw response;
      }
    } catch (error) {
      console.log({ error });
      handleError(error);
      return Promise.reject(error);
    }
  };

  const handleError = (error: any): never => {
    console.log({ error });
    if (error.name === "AbortError") console.log('Request aborted');
    // if (error.status) {

    // }

    throw error;
  };

  const get = <T>(path: string, signal: AbortSignal) =>
    customFetch<T>(FetchMethods.get, path, signal);

  const post = <T>(path: string, body: object, signal: AbortSignal) =>
    customFetch<T>(FetchMethods.post, path, signal, body);

  const put = <T>(path: string, body: object, signal: AbortSignal) =>
    customFetch<T>(FetchMethods.put, path, signal, body);

  const patch = <T>(path: string, body: object, signal: AbortSignal) =>
    customFetch<T>(FetchMethods.patch, path, signal, body);

  const del = <T>(path: string, signal: AbortSignal) =>
    customFetch<T>(FetchMethods.del, path, signal);

  return { get, post, put, patch, del };
};
