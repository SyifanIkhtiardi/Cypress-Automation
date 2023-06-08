class cartPage {

    elements = {
        cartLink : () => cy.get('.message-success > div > a'),
        itemDetails : () => cy.get('.item > .product-item-details'),
        itemPrice : () => cy.get('.item-info > .col.price'),
        subtotal : () => cy.get('.subtotal > .price-excluding-tax > .cart-price > .price')
    }

    viewCartPage() {
        this.elements.cartLink().click();
    }

    itemDetailExist() {
        this.elements.itemDetails().should('exist');
    }

    itemPrisIsExist() {
        this.elements.itemPrice().should('exist');
    }

    totalPrice() {
        this.elements.subtotal().should('exist');
    }
}

export default cartPage;