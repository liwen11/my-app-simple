import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SetStatePage from './SetStatePage'
import reportWebVitals from './reportWebVitals';
import HocPage from './pages/HocPage'
import FormPage from './pages/FormPage'
import MyFormPage from './pages/MyFormPage'
import DialogPage from './pages/DialogPage'
import Context from './pages/context/Context'
import ReduxPage from './pages/ReduxPage'
import store from './store/index'
import {Provider} from 'react-redux'
import RouterPage from './pages/Router/RouterPage';

ReactDOM.render(
  <React.StrictMode>
    {/* 高阶组件 */}
    {/* <HocPage /> */}

    {/* 表单组件antd */}
    {/* <FormPage /> */}

    {/* 自己实现一个formCreate */}
    {/* <MyFormPage /> */}

    {/* 弹窗组件 */}
    {/* <DialogPage /> */}

    {/* context */}
    {/* <Context></Context> */}

    {/* Redux */}
    {/* <Provider store={store}>
      <ReduxPage num={3}/>
    </Provider> */}

    {/* react-router */}
      <RouterPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
