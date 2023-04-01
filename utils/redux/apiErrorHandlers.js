import { handleErrors } from "utils/functions";

export const errorCallback = () => ({
  badServerResponse: ({ message, errors }) => {
    // works when server sends bad response
    alert(`${message} \n ${handleErrors(errors || '')}`);
  },
  noServerResponse: () => {
    // works when server doesn't response
    alert('Server is not responding.');
  },
  default: () => {
    // something happened in setting up the request that triggered an Error
    alert('Something gone wrong.');
  },
});
