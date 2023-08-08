import React, { useState, useEffect } from 'react';// react kütüphanesini alırız ve useState hookunu içe aktarıyoruz. useState bleşende durum yönetimi için kullanıyoruz.
import { Link } from 'react-router-dom';//react-router-dom kütüphanesinden Link bileşenini içe aktarıyoruz.
import './pizzaForm.css';//pizzaForm.css dosyasını içe aktarıyoruz.


const PizzaForm = () => {//fonksiyonu oluşturuyoruz.
  const [selectedSize, setSelectedSize] = useState('orta');//useState kullanarak pizza boyutunu tutuyoruz. başlangıç değeri olarak orta değerini veriyoruz.
  const [selectedCrust, setSelectedCrust] = useState('ince');//useState kullanarak pizza hamurunu tutuyoruz. başlangıç değeri olarak ince değerini veriyoruz.
  const [selectedToppings, setSelectedToppings] = useState([]);//useState kullanarak ek malzemeleri tutuyoruz. başlangıç değeri olarak oboş bir array veriyoruz.
  const [orderNote, setOrderNote] = useState('');//useState kullanarak sipariş notunu tutuyoruz. başlangıç değeri olarak boş bir değer veriyoruz.
  const [count, setCount] = useState(1);
  const [showError, setShowError] = useState(false);

  const sizes = ['Küçük', 'Orta', 'Büyük'];//pizza boyutları için dizi tanımlayıp değerleri veriyoruz.
  const crusts = ['İnce', 'Kalın'];//pizza hamuru için dizi tanımlayıp değerleri veriyoruz.
  const toppings = [
    'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates',
    'Mısır', 'Sucuk', 'Jalepone', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'
  ];//pizza ek malzemeleri için dizi tanımlayıp değerleri veriyoruz.

  const handleSizeChange = (event) => {//farklı boyutlarda pizza seçimi yapmak için fonksiyonu tanımlıyoruz.
    setSelectedSize(event.target.value);
  };

  const handleCrustChange = (event) => {//farklı hamurlarda pizza seçimi yapmak için fonksiyonu tanımlıyoruz.
    setSelectedCrust(event.target.value);
  };

  const handleToppingChange = (event) => {//ek malzemelr seçimi yapmak için fonksiyonu tanımlıyoruz.
    const selectedTopping = event.target.value;
    setSelectedToppings((prevToppings) => {
      if (prevToppings.includes(selectedTopping)) {//seçilen malzeme eklimi değil mi kontrol eder ve seçilen malzeme sayına bakar seçilen malzeme sayısı 10 ise daha fazla ekleme yapmaz.
        return prevToppings.filter((topping) => topping !== selectedTopping);
      } else {
        if (prevToppings.length >= 10) {
          setShowError(true);
          return prevToppings;
        } else {
          setShowError(false);
          return [...prevToppings, selectedTopping];
        }
      }
    });
  };

  const handleOrderNoteChange = (event) => {//fonksiyonu tanımlarız metin giriş alanındaki metni orderNote durumun değişkenine atarız.
    setOrderNote(event.target.value);
  };

  const calculateTotalPrice = () => {//fonksiyonu tanımarız. pizza fiyatını hesaplarız.
    const toppingsPrice = selectedToppings.length * 5;
    const pizzaPrice = (selectedSize === 'küçük' ? 70 : (selectedSize === 'orta' ? 85.50 : 100));
    return (toppingsPrice + pizzaPrice)*count;
  };
  const increment = () => {
    setCount(count + 1); 
  };
  const decrement = () => {
    setCount(Math.max(count - 1, 1)); 
  };
  useEffect(() => {
    if (showError)
      setTimeout(() => {
        setShowError(false);
      }, 3000);
  }, [showError]);

  return (
    <div className="pizza-form-container">
      <div className="pizza-header">
        <h1 className="restaurant-name">Teknolojik Yemekler</h1> 
        <p className="navigation">Anasayfa-Seçenekler-Sipariş Oluştur</p>
      
      </div>
      <div className="pizza-content">
        <h3 className="pizza-title">Position Absolute Acı Pizza</h3>
        <h4 className="pizza-price">KÜÇÜK 70 ₺         ORTA 85.50 ₺         BÜYÜK 100₺</h4>
        <span className="description">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
          geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
          Küçük bir pizzaya bazen pizzetta denir.
        </span>
        <div className="select-options">
          <div className="size">
            <label>Boyut Seçin:</label>
            {sizes.map((size) => (
              <label key={size}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={handleSizeChange}
                />
                {size}
              </label>
            ))}
          </div>
          <div className="crust">
            <label>Hamur Seçin:</label>
            {crusts.map((crust) => (
              <label key={crust}>
                <input
                  type="radio"
                  name="crust"
                  value={crust}
                  checked={selectedCrust === crust}
                  onChange={handleCrustChange}
                />
                {crust}
              </label>
            ))}
          </div>
        </div>
        <div className="toppings">
          <h5 className="toppings-title">Ek Malzemeler</h5>
          <p className="toppings-description">En Fazla 10 Malzeme seçebilirsiniz. Malzeme 5 ₺</p>
          <div className="topping-options">
          {toppings.map((topping) => (
    <React.Fragment key={topping}>
    <label className="topping-option">
                <input
                  type="checkbox"
                  name="toppings"
                  value={topping}
                  checked={selectedToppings.includes(topping)}
                  onChange={handleToppingChange}
                />
                {topping}
              </label>
              
          </React.Fragment>
            ))}
            
          </div>
          {showError && <p className="error">Daha fazla malzeme ekleyemezsiniz.</p>}
        </div>
        <div className="order-note">
          <h5>Sipariş Notu</h5>
          <input
            type="text"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={orderNote}
            onChange={handleOrderNoteChange}
          />
        </div>
      </div>
      <div className="order-total">
      <p className="buttonC">
        <div className="buttonCount">
        <button onClick={decrement.bind(null, 1) }>-</button>
        </div>
        <span className="countS">{count}</span>
        <div className="buttonCount">
        <button onClick={increment.bind(null, 1)}>+</button>
        </div>
        
      </p>
        <div className="order-total-info">
          <p>Seçimler</p>
          <p>Sipariş Toplamı</p>
        </div>
        <div className="order-prices">
          <p>{selectedToppings.length * 5} ₺</p>
          <p>{selectedSize === 'küçük' ? 70 : (selectedSize === 'orta' ? 85.50 : 100)} ₺</p>
        </div>
        <div className="total-price">
          <p>Toplam</p>
          <p>{calculateTotalPrice()} ₺</p>
        </div>
        <Link to="/siparis-alindi" className="order-button">Sipariş Ver</Link>
      </div>
    </div>
  );
};

export default PizzaForm;