import loginPage from '../support/account/login';
import homepage from '../support/page/homepage';
import itemDetail from '../support/page/itemDetail';
import cartPage from '../support/page/cartPage';

describe('User Journey', () => {
  let loginAccount;

  beforeEach(() => {
    // Visit Luma website
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.fixture('account').then(function(data) {
      loginAccount = data
    })
  })

  it('A user can find product using search feture and add product to cart', () => {
    const loginObj = new loginPage();
    const homeObj = new homepage();
    const itemDetailObj = new itemDetail();
    const cartObj = new cartPage();

    // Login to Luma website
    loginObj.accessLoginPage();
    cy.location("pathname").should("equal", "/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    loginObj.enterEmail(loginAccount.email);
    loginObj.enterPassword(loginAccount.password);
    loginObj.clickSignInButton();

    // Search item
    homeObj.enterSearch('Montana Wind Jacket{enter}');
    cy.contains('Montana Wind Jacket', {timeout:2000});

    // Go to item detail page
    itemDetailObj.goToItemDetail();
  
    // Select item size (XS, S, M, L, XL)
    itemDetailObj.selectMSize({timeout:1000});

    // Select item color
    itemDetailObj.selectColor1()

    // Add item to cart
    itemDetailObj.clickAddToCartButton();

    // Go to cart page
    cartObj.viewCartPage({timeout:2000});

    // Check if item details is existed 
    cartObj.itemDetailExist();

    // Check if item price is existed
    cartObj.itemPrisIsExist();

    // Check if total price is exist
    cartObj.totalPrice();

  })
})