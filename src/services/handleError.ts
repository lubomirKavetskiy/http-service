type DataError = {
  code: number,
  data: { message: string; },
  [x: string]: any;
};

interface Error extends Response, DataError {
  name: string;
}

export const handleError = (error: Error): void => {
  if (error.name === "AbortError") return console.log('Request aborted');
  if (error.status === 404) return console.log('Not Found');

  switch (error.code) {
    case 401:
      console.log("Authentication failed! Please reply correct login and password...");
      break;
    case 403:
      console.log("Access denied likely due to insufficient permissions.");
      break;
    default: console.log(error.message);
  }
};
