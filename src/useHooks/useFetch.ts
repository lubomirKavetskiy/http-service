import React from 'react';
import { getToken } from 'services';
// import { useDidUpdEffect } from 'useHooks';

enum FetchMethods {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  del = 'DELETE',
}

export const useFetch = (baseURL: string) => {
  // [key in keyof typeof FetchMethods]: ;

  const customFetch = async <T>(
    method: FetchMethods,
    path: string,
    controller?: AbortController,
    body: object | null = null,
    headers?: object
  ): Promise<T> => {
    const token = getToken() as string | undefined;
    const defaultHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
    const options: any = { method, headers: headers || defaultHeader };

    if (body) options.body = JSON.stringify(body);
    if (controller) options.signal = controller.signal;

    try {
      const response = await fetch(`${baseURL}${path}`, options);
      console.log({ response });

      const result = await response.json();
      console.log({ result });

      return result;
    } catch (err) {
      alert('catch');
      throw new Error(err);
    }
  };

  const get = <T>(path: string, controller: AbortController) =>
    customFetch<T>(FetchMethods.get, path, controller);

  const post = <T>(path: string, body: object, controller: AbortController) =>
    customFetch<T>(FetchMethods.post, path, controller, body);

  const put = <T>(path: string, body: object, controller: AbortController) =>
    customFetch<T>(FetchMethods.put, path, controller, body);

  const patch = <T>(path: string, body: object, controller: AbortController) =>
    customFetch<T>(FetchMethods.put, path, controller, body);

  const del = <T>(path: string, controller: AbortController) =>
    customFetch<T>(FetchMethods.del, path, controller);

  return { get, post, put, patch, del };
};
