import { ipcRenderer } from 'electron'
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './components/App';

import { IPCKey } from '../common/Constants'

/**
 * import of store
 */
// import store from './store';

window.addEventListener('load', () => {
  render(
    <div>
      Hello!
      <button onClick={() => {
        ipcRenderer.invoke(IPCKey.showSSTWindow)
      }}>Switch</button>
    </div>,
    // <Provider store={store}>
    //   <App />
    // </Provider>,
    document.getElementById('root'),
  )
})
