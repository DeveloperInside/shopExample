export const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const handleErrors = errors => {
  if (typeof errors === 'string') {
    // errors is a string, so just display it
    return errors
  } else if (Array.isArray(errors)) {
    // errors is an array, so display each element on its own line
    return errors.join('\n')
  } else if (typeof errors === 'object') {
    // errors is an object, so display each key/value pair on its own line
    let output = ''
    for (let key in errors) {
      output = output + `\n ${humanize(key)}: ${errors[key]} `
    }
    return output
  } else {
    // errors is some other type, so just display it as-is
    return errors
  }
}

export const storeLocalAsyncData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
    alert('Error while storing data: ' + key + value + e)
  }
}

export const getLocalAsyncData = async key => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      // value previously stored
      return value
    }
  } catch (e) {
    // error reading value
    alert('Error while reading data: ' + key + e)
  }
}

export const removeLocalAsyncData = async key => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    // remove error
    alert('Error while removing data: ' + key + e)
  }
}
