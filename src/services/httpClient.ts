import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import { getToken } from 'services';
import { handleError } from 'services';

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

  //* add request interceptor
  //* it's private method, used '#methodOrPropertyTitle' instead of private 'methodOrPropertyTitle'
  #initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this.#handleRequest,
      this.#handleError
    );
  };

  //* add response interceptor
  #initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.#handleResponse,
      this.#handleError
    );
  };

  #handleRequest = (config: AxiosRequestConfig) => ({
    ...config,
    headers: {
      ...config.headers,
      ['X-Token']: `Bearer ${getToken()}`
    },
  });

  //* *here can bea added servise for global storing data
  #handleResponse = ({ data }: AxiosResponse) => data;

  //* global handle such errors as:
  // - no internet
  // - incorrect URL
  // - incorrect endpoint
  // - doesn't exist serche user's id
  #handleError = (error: AxiosError) => handleError(error);
}
