if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React from 'react'
import { Provider } from 'react-redux'
import store from 'redux/store'

import ThemeProvider from 'theme/ThemeProvider'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider />
    </Provider>
  )
}

export default App
