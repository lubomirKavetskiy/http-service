import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

// declare module "axios" {
//   export interface AxiosResponse<T = any> extends Promise<T> {}
// }

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  constructor(public baseURL: string, public authToken?: string) {
    this.instance = axios.create({
      baseURL,
    });

    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  // add request interceptor
  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError
    );
  };

  // add response interceptor
  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    config.headers['X-Token'] = `Bearer ${this.authToken}`;

    return config;
  };

  private _handleResponse = <T>({data}: AxiosResponse<T>) => data;

  protected _handleError = (error: any) => Promise.reject(error);
}
