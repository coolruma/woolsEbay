var ebayPage = {

    ebayPlusLink: by.css('#gh-plus > a > img'),
    ebaySerachTextBox:by.css('#gh-ac-box2'),
    ebaySearchTextBoxById: by.id('gh-ac'),
    ebaySearchButton:by.css('#gh-btn'),
    // ebaySerachTextBox:by.css('input#gh-ac.gh-tab.ui-autocomplete-input'),
    // ebayFirstProductImage: by.css('#srp-river-results-listing1 > div > div.s-item__image-section > div > a > div > img'),
    ebayFirstProductImage: by.css('#srp-river-results-listing1 > div > div.s-item__image-section > div > a > div > img'),
    //ebayAddToCartButton: by.css('#isCartBtn_btn'),
    ebayAddToCartButton: by.css('#atcRedesignId_btn'),
    ebayCloseIconInCart:by.css('#atcRedesignId_overlay-atc-container > div > div.app-atc-layer-header-wrapper > div.clzBtnSection > div > div'),
    // ebaySelectColorDropDown: by.css('#msku-sel-1'),
    // ebaySelectStorageDropDown: by.css('#msku-sel-2')
};
module.exports = ebayPage;
