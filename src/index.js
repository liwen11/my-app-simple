import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SetStatePage from './SetStatePage'
import reportWebVitals from './reportWebVitals';
import HocPage from './pages/HocPage'
import FormPage from './pages/FormPage'
import MyFormPage from './pages/MyFormPage'

ReactDOM.render(
  <React.StrictMode>
    {/* 高阶组件 */}
    {/* <HocPage /> */}

    {/* 表单组件antd */}
    {/* <FormPage /> */}

    {/* formCreate */}
    <MyFormPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
