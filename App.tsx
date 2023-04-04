if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'redux/store'

import ThemeProvider from 'theme/ThemeProvider'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider />
      </PersistGate>
    </Provider>
  )
}

export default App
