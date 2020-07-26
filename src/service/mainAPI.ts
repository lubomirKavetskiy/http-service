import {HttpClient} from './httpClient';

export abstract class MainAPI extends HttpClient {
  constructor(public baseURL: string, public authToken?: string) {
    super(baseURL, authToken);
  }

  public get<T>(path: string, params?: object, config?: object): Promise<T> {
    return this.instance.get(`${this.baseURL}${path}`, {
      params,
      ...config,
    });
  }

  public post<T>(path: string, body: object, config?: object): Promise<T> {
    return this.instance.post(`${this.baseURL}${path}`, body, {
      ...config,
    });
  }

  public put<T>(path: string, body: object, config?: object): Promise<T> {
    return this.instance.put(`${this.baseURL}${path}`, body, {
      ...config,
    });
  }

  public patch<T>(path: string, body: object, config?: object): Promise<T> {
    return this.instance.patch(`${this.baseURL}${path}`, body, {
      ...config,
    });
  }

  public delete<T>(path: string, config?: object): Promise<T> {
    return this.instance.patch(`${this.baseURL}${path}`, {
      ...config,
    });
  }
}
