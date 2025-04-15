describe('Order Food Flow - Cash Payment', () => {
    const restaurantName = 'West, Mayer and Wintheiser';
     beforeEach(() => {
      cy.visit('https://pwiddy.interview.tisostudio.com/');
    });
   
    it('Search restaurant, add items, fill address, and checkout with Cash', () => {
      // Step 1: Search for the restaurant
      cy.get("input[placeholder='Search for restaurants...']").type(restaurantName);
      cy.contains(restaurantName).click();
      cy.wait(2000);
      cy.xpath("//div[@class='relative h-48']").click();
      // Step 2: Add a few items to the cart
      cy.get("div[class='mt-4 grid gap-4 grid-cols-1 md:grid-cols-2'] > div")
      .should('have.length.at.least', 2)
      .then((menuItems) => {
        cy.wrap(menuItems[0]).within(() => {
          cy.contains('Add to Cart').click();
        });
    
        cy.wrap(menuItems[1]).within(() => {
          cy.contains('Add to Cart').click();
        });
        
        cy.wrap(menuItems[2]).within(() => {
          cy.contains('Add to Cart').click();
        });
  
        cy.wrap(menuItems[1]).within(() => {
          cy.contains('Add to Cart').click();
        });
  
      });
   
      cy.xpath("//button[normalize-space()='Proceed to Checkout']").click();
      cy.wait(2000);
      // Step 4: Fill in address
      cy.get('input[name="address"]').type('Andhra Pradesh, India');
      cy.wait(2000);
      //city
      cy.xpath("//input[@id='city']").type('Nellore');
      cy.wait(2000);
      //zipcode 
      cy.xpath("//input[@id='zipCode']").type('123456');
      cy.wait(2000);
      //phone number
      cy.xpath("//input[@id='phone']").type('1234567890');
      cy.wait(2000);
  
      // Step 6: Submit the order
      cy.xpath("//button[normalize-space()='Place Order']").click();
   
      // Verify order success message
      cy.contains('Thank you for your order').should('be.visible');
    });
  });
  
