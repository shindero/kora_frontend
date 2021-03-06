import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './index.css';
import { configStore } from './store/store';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { ConfirmProvider } from 'material-ui-confirm';

import './i18n';
import { App } from 'App';
import moment from "moment";
import 'moment/locale/lt';
moment().locale('lt');

const { store, persistor } = configStore({} as never);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfirmProvider>
        <ToastContainer position='bottom-right' />
        <App />
      </ConfirmProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
