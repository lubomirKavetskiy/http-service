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

    this.#initializeRequestInterceptor();
    this.#initializeResponseInterceptor();
  }

  // add request interceptor
  //it's private method, used '#methodOrPropertyTitle' instead of private 'methodOrPropertyTitle'
  #initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this.#handleRequest,
      this.#handleError
    );
  };

  // add response interceptor
  #initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.#handleResponse,
      this.#handleError
    );
  };

  #handleRequest = (config: AxiosRequestConfig) => {
    config.headers['X-Token'] = `Bearer ${this.authToken}`;

    return config;
  };

  #handleResponse = <T>({data}: AxiosResponse<T>) => data;

  #handleError = (error: any) => Promise.reject(error);
}
