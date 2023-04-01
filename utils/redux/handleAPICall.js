// // import { setLoadingFalse, setLoadingTrue } from 'redux/slices/loading/slice';
// // import { store } from 'redux/store';
import { delay } from 'utils/functions'

const handleAPICall = async ({
  apiCall,
  rejectWithValue,
  successCallback,
  errorCallback,
  delayDuration,
  silence,
}) => {
  try {
    // // !silence && store.dispatch(setLoadingTrue());
    const response = await apiCall()
    // Wait response for successCallback. It escapes async run of successCallback.
    const successCallbackData =
      successCallback && (await successCallback(response?.data))
    delayDuration && (await delay(delayDuration))
    if (successCallbackData !== null && successCallbackData !== undefined) {
      response.data['successCallbackData'] = successCallbackData
    }
    // // store.dispatch(setLoadingFalse());
    return response.data
  } catch (error) {
    // // store.dispatch(setLoadingFalse());

    //Switch state created for avoiding elseif chain. This approach can be found on:
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#an_alternative_to_if...else_chains
    switch (true) {
      case error?.response !== undefined:
        // The request was made and the server responded with a status code
        console.log(
          'Error: Server responded with status code: ' +
            error?.response?.status +
            ' api uri: ' +
            error?.config?.url +
            '\n \n full error: ' +
            JSON.stringify(error?.response?.data)
        )
        ;(errorCallback &&
          errorCallback()?.badServerResponse({
            message: error?.response?.data?.message,
            errors: error?.response?.data?.errors,
          })) ||
          errorCallback()
        break
      case error?.request !== undefined:
        // The request was made but no response was received
        console.log('Error: No server response: ' + error?.request)
        ;(errorCallback && errorCallback()?.noServerResponse()) ||
          errorCallback()
        break
      default:
        // Something happened in setting up the request that triggered an Error
        console.log(
          'Error occured while apiCall. Message:' +
            error?.message +
            ' full error: ' +
            error
        )
        ;(errorCallback && errorCallback()?.default()) || errorCallback()
        break
    }

    if (rejectWithValue) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.message,
        errors: error?.response?.data?.errors,
      })
    }

    console.warn('invalid rejectWithValue parameter!')
    return 'rejectedAction'
  }
}

export default handleAPICall
