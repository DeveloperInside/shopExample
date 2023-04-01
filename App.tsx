if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import Navigation from './navigation/Navigation'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigation />
      </ApplicationProvider>
    </Provider>
  )
}

export default App
