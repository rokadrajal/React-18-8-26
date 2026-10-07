import {Provider} from 'react-redux'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import storeData from './redux/Store'

createRoot(document.getElementById('root')).render(
  <Provider store={storeData}>
    <App />
  </Provider>
)
