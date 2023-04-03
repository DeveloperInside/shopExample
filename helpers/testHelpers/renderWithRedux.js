import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react-native'
import { ApplicationProvider } from '@ui-kitten/components'
import { Provider } from 'react-redux'
import * as eva from '@eva-design/eva'

import productsReducer from 'redux/slices/products/slice'
import themeReducer from 'redux/slices/theme/slice'

function renderWithRedux(renderedComponent) {
  const store = configureStore({
    reducer: {
      products: productsReducer,
      theme: themeReducer,
    },
  })

  return render(
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva['light']}>
        {renderedComponent}
      </ApplicationProvider>
    </Provider>
  )
}

export default renderWithRedux
