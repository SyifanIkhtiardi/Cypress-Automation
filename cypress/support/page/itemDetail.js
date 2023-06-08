class itemDetail {

    elements = {
        searchedItemLink : () => cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link'),
        xsSize : () => cy.get('#option-label-size-143-item-166'),
        sSize : () => cy.get('#option-label-size-143-item-167'),
        mSize : () => cy.get('#option-label-size-143-item-168'),
        lSize : () => cy.get('#option-label-size-143-item-169'),
        xlSize : () => cy.get('#option-label-size-143-item-170'),
        color1 : () => cy.get('#option-label-color-93-item-49'),
        color2 : () => cy.get('#option-label-color-93-item-53'),
        color3 : () => cy.get('#option-label-color-93-item-58'),
        addToCartButton : () => cy.get('#product-addtocart-button'),
        successMessage : () => cy.get('.message-success')
    }

    goToItemDetail() {
        this.elements.searchedItemLink().click();
    }

    selectXsSize() {
        this.elements.xsSize().click();
    }

    selectSSize() {
        this.elements.sSize().click();
    }

    selectMSize() {
        this.elements.mSize().click();
    }

    selectLSize() {
        this.elements.lSize().click();
    }

    selectXlSize() {
        this.elements.xlSize().click();
    }

    selectColor1() {
        this.elements.color1().click();
    }

    selectColor2() {
        this.elements.color2().click();
    }

    selectColor3() {
        this.elements.color3().click();
    }

    clickAddToCartButton() {
        this.elements.addToCartButton().click();
    }

}

export default itemDetail;