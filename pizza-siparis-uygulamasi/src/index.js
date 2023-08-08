
import React from 'react';// react kütüphanesini alır
import ReactDOM from 'react-dom/client';// react uygulamasını doma bağlarız.
import './index.css';// index.css dosyasını içe aktarırız.
import App from './App';//app bileşenini içe aktarırız.
import reportWebVitals from './reportWebVitals';//reportWebVitals fonksiyonunu içe aktarırız.

const root = ReactDOM.createRoot(document.getElementById('root'));//uygulamanın çalışacağı root elementini belirler.createRoot fonksiyonu,ReactDomu güncellemeleri yapılandırmak için kullanılır.
root.render(        
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);{/*React.StrictMode içinde app bileşenini renderlarız.*/}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();// fonksiyonu çağırırız.



