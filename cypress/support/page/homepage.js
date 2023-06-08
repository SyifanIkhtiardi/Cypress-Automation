class homepage {

    elements = {
        searchBar : () => cy.get('#search'),
    }

    enterSearch(word) {
        this.elements.searchBar().clear();
        this.elements.searchBar().type(word);
    }


}

export default homepage;