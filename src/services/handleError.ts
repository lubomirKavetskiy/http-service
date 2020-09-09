import { AxiosError } from 'axios';

export const handleError = (
  error: AxiosError
): never => {
  const { response } = error;

  if (response?.status) {
    if (response.status >= 400 && response.status <= 500 && response.data) {
      //* here can be added notification
      //* temporary solution
      console.log('ERROR', response.data.message);

      //* here can be handled errors with status code as: 401 (authentication), 403 (authorization), etc
      //* it depence on future Back- and front-end logic (e.g. you can implement HOC for checking user's permission to the page or you can use this checking for uploading such data as a file or adding comment by that user...)
      // if (response?.status === 401) {
      //   console.log(
      //     'ERROR',
      //     'Authentication failed! Please reply correct login and password...'
      //   );
      // }

      if (response?.status === 403) {
        //* here can be added redirect to the main page or just restrict user to make some action...
        console.log(
          'ERROR',
          'Access denied likely due to insufficient permissions.'
        );
      }
    }
  }

  throw error;
};
