import {HttpClient} from './httpClient';

export abstract class MainAPI extends HttpClient {
  constructor(public baseURL: string, public authToken?: string) {
    super(baseURL, authToken);
  }

  //don't use here such access modifiers as 'public' because it's by default, e.g. public get
  get<T>(path: string, params?: object, config?: object): Promise<T> {
    return this.instance.get(`${this.baseURL}${path}`, {
      params,
      ...config,
    });
  }

  post<T>(path: string, body: object, config?: object): Promise<T> {
    return this.instance.post(`${this.baseURL}${path}`, body, {
      ...config,
    });
  }

  put<T>(path: string, body: object, config?: object): Promise<T> {
    return this.instance.put(`${this.baseURL}${path}`, body, {
      ...config,
    });
  }

  patch<T>(path: string, body: object, config?: object): Promise<T> {
    return this.instance.patch(`${this.baseURL}${path}`, body, {
      ...config,
    });
  }

  delete<T>(path: string, config?: object): Promise<T> {
    return this.instance.patch(`${this.baseURL}${path}`, {
      ...config,
    });
  }
}
