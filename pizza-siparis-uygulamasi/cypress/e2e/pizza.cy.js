describe('Sipariş Formu Testleri', () => {
    it('İsim inputuna metin girme testi', () => {
      cy.visit('/pizza');
      const isim = 'John Doe';
  
      cy.get('#name-input').type(isim).should('have.value', isim);
    });
  
    it('Birden fazla malzeme seçme testi', () => {
      cy.visit('/pizza');
  
      cy.get('[name="topping1"]').check().should('be.checked');
      cy.get('[name="topping2"]').check().should('be.checked');
      cy.get('[name="topping3"]').check().should('be.checked');
    });
  
    it('Formu gönderme testi', () => {
      cy.visit('/pizza');
  
      const isim = 'John Doe';
      const boyut = 'Büyük';
      const special = 'Özel seçenek';
  
      cy.get('#name-input').type(isim);
      cy.get('#size-dropdown').select(boyut);
      cy.get('[name="topping1"]').check();
      cy.get('[name="topping2"]').check();
      cy.get('#special-text').type(special);
  
      cy.get('#order-button').click();
  
      // Sipariş onay sayfasına yönlendirildiğini doğrulayın.
      cy.url().should('include', '/order-confirmation');
  
      // Sipariş özetini doğrulayın.
      cy.get('h2').should('contain', 'Siparişiniz alındı!');
      cy.get('p').should('contain', 'İsim: John Doe');
      cy.get('p').should('contain', 'Boyut: Büyük');
      cy.get('p').should('contain', 'Malzemeler: Malzeme 1, Malzeme 2');
      cy.get('p').should('contain', 'Özel: Özel seçenek');
    });
  });