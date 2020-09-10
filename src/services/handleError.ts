import { AxiosError } from "axios";

export const handleError = (
  error: AxiosError
): Promise<AxiosError> => {
  const { response } = error;

  if (response?.status) {
    const { status } = response;

    if (status >= 400 && status <= 500) {
      //* here can be added notification
      //* these are just temporary solutions
      //* you can just implement HOC for checking user's permission to the page or you can use this checking for uploading such data as a file or adding comment by that user...)
      if (status === 401) {
        console.log(
          "ERROR",
          "Authentication failed! Please reply correct login and password..."
        );
      } else if (status === 403) {
        //* here can be added redirect to the main page or just restrict user to make some action...
        console.log(
          "ERROR",
          "Access denied likely due to insufficient permissions."
        );
      } else if (status === 404) {
        //* here can be added redirect to the 404 page
        console.log(
          "ERROR",
          "The API endpoint doesn't exist"
        );
      } else {
        console.log("ERROR", response.data.message);
      }
    }
  }

  // throw error;
  return Promise.reject(error);
};
