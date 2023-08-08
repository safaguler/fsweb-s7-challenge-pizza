import React from 'react';// react kütüphanesini alır
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //react-router-dom kütüphanesinden BrowserRouter, Route ve Routes öğelerini içe aktarıyoruz.
import Home from './Home';//uygulamanın Home bileşenini içe aktaarıyoruz.
import PizzaForm from './PizzaForm';//uygulamanın PizzaForm bileşenini içe aktaarıyoruz.
import './App.css'; //uygulamanın App.css bileşenini içe aktaarıyoruz.
import OrderConfirmation from './OrderConfirmation';//uygulamanın OrderConfirmation bileşenini içe aktaarıyoruz.

const App = () => {//App fonksiyonunu oluşturuyoruz.
  return (
    <Router> {/*router bileşenini sayfa yönlendirmek için kullanıyoruz.*/}
      <div className="App">  {/* className=App içinde Routes bileşeni tanımlıyoruz.*/}
        <Routes>{/*Routes, farklı URL yollarını belirlemek ve her bir yolu belirli bir bileşene eşlemek için kullanıyoruz.*/}
          <Route path="/" element={<Home />} />{/*Route öğeleri, / URL yolunu Home bileşeniyle eşleştirmek için kullanıyoruz. path özelliği, hangi URL yolunun eşleşeceğini belirtir ve element özelliği, o yolu eşleştirdiğimiz bileşeni belirtir.*/}
          <Route path="/pizza" element={<PizzaForm />} />{/*Route öğesi, /pizza URL yolunu PizzaForm bileşeniyle eşleştirir. Bu, PizzaForm bileşenini /pizza yolunda gösterir.*/}
          <Route path="/siparis-alindi" element={<OrderConfirmation />} />{/*Route öğesi, /siparis-alindi URL yolunu OrderConfirmation bileşeniyle eşleştirir. Bu, OrderConfirmation bileşenini /siparis-alindi yolunda gösterir.*/}
        </Routes>
      </div>
    </Router>
  );
};

export default App;//app bileşenini export default ile dışa aktarıyotuz. bu sayede başka dosyalardan bu bileşeni içe aktarabilir ve kullanabiliriz.

