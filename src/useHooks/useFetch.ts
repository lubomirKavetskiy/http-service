enum EFetchMethods {
  get = 'GET',
  // post = 'POST',
  // put = 'PUT',
  // patch = 'PATCH',
  // delete = 'DELETE',
}

export const useFetch = (baseURL: string, token?: string) =>
  // {
  //   [key in keyof typeof EFetchMethods]
  // }
  {
    const defaultHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && {Authorization: `Bearer ${token}`}),
    };

    const customFetch = async <T>(
      method: EFetchMethods,
      path: string,
      controller?: AbortController,
      headers: object = defaultHeader,
      body: object | null = null
    ): Promise<T> => {
      const options: any = {method, headers};

      if (body) options.body = JSON.stringify(body);
      if (controller) options.signal = controller.signal;

      try {
        const response = await fetch(`${baseURL}${path}`, options);
        console.log({response});

        const result = await response.json();
        console.log({result});

        return result;
      } catch (err) {
        alert('catch');
        throw new Error(err);
      }
    };

    // GET //
    // const get = <T>(
    //   id: string | number,
    //   endpoint: (id: string | number) => string,
    //   controller: AbortController
    // ) => customFetch<T>(EFetchMethods.get, endpoint(id), controller);
    const get = <T>(path: string, controller: AbortController) =>
      customFetch<T>(EFetchMethods.get, path, controller);

    return {get};
  };

// type obj = {
//   get: 'GET',
//   post: 'POST',
//   put: 'PUT',
//   patch: 'PATCH',
//   delete: 'DELETE',
// }
