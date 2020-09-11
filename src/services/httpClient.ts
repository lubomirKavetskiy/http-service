import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, Cancel } from 'axios';

import { getToken, errorHandler } from 'services';


export abstract class HttpClient {
  //assigned it like a protected for accessible it in inherited classes as well
  protected readonly instance: AxiosInstance;

  constructor(public baseURL: string) {
    this.instance = axios.create({
      baseURL
    });

    this.#initializeRequestInterceptor();
    this.#initializeResponseInterceptor();
  }

  obj: object = {};

  //* add request interceptor
  //* it's private method, used '#methodOrPropertyTitle' instead of private 'methodOrPropertyTitle'
  #initializeRequestInterceptor = (): void => {
    this.instance.interceptors.request.use(
      this.#handleRequest,
      this.#handleError
    );
  };

  //* add response interceptor
  #initializeResponseInterceptor = (): void => {
    this.instance.interceptors.response.use(
      this.#handleResponse,
      this.#handleError
    );
  };

  #handleRequest = (config: AxiosRequestConfig): AxiosRequestConfig =>
    ({
      ...config,
      headers: {
        ...config.headers,
        'X-Token': `Bearer ${getToken()}`
      },
    });

  //* *here can bea added servise for global storing data
  #handleResponse = <T>({ data }: AxiosResponse<T>): T => data;

  //* global handle errors
  #handleError = (error: AxiosError | { isCanceled: boolean; }): Promise<AxiosError | { isCanceled: boolean; }> => {
    if (axios.isCancel(error)) error = { ...error, isCanceled: true };

    return errorHandler(error);
  };
}
