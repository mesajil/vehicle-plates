import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from 'mobx-react'
import rootStore from './stores/Root.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider rootStore={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
