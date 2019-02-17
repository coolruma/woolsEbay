var myStepDefinitionsWrapper = function () {

    var ebayPage = require('../../pages/ebayPage');
    var settings = require('../../common/settings');
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var EC = protractor.ExpectedConditions;



this.Given(/^the user is on ebay home page$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
            browser.wait(EC.visibilityOf(element(ebayPage.ebayPlusLink)), settings.config.WAITTIME).then(function () {
                callback();
            });
});

this.When(/^the user enters first Product as '(.*?)' and Click on serach button$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         browser.findElement(ebayPage.ebaySerachTextBox).isDisplayed().then(function () {
            browser.findElement(ebayPage.ebaySerachTextBox).click().then(function () {
            	browser.sleep(settings.config.WAITTIME).then(function () {
                    browser.findElement(ebayPage.ebaySearchTextBoxById).sendKeys(arg1).then(function () {
                	    browser.findElement(ebayPage.ebaySearchButton).click().then(function () {
                        browser.findElement(ebayPage.ebayFirstProductImage).click().then(function () {
                    	    browser.sleep(settings.config.WAITTIME).then(function () {
                    		    browser.findElement(ebayPage.ebayFirstProductImage).click().then(function () {
                    			    browser.sleep(settings.config.WAITTIME).then(function () {
                    	                browser.findElement(ebayPage.ebayAddToCartButton).click().then(function () {
                    		                callback();
                    	                });
                    		        });
                    	        });
                    	    });
                        });
                    });
                });
            });
         });
       });
     });


this.When(/^the user enters second Product as '(.*?)' and Click on serach button$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         browser.findElement(ebayPage.ebaySerachTextBox).isDisplayed().then(function () {
            browser.findElement(ebayPage.ebaySerachTextBox).click().then(function () {
                browser.sleep(settings.config.WAITTIME).then(function () {
                    browser.findElement(ebayPage.ebaySearchTextBoxById).sendKeys(arg1).then(function () {
                        browser.findElement(ebayPage.ebaySearchButton).click().then(function () {
                        browser.findElement(ebayPage.ebayFirstProductImage).click().then(function () {
                            browser.sleep(settings.config.WAITTIME).then(function () {
                                    browser.sleep(settings.config.WAITTIME).then(function () {
                                        browser.findElement(ebayPage.ebayAddToCartButton).click().then(function () {
                                            callback();
                                        });
                                    });
                            });
                        });
                    });
                });
            });
         });
       });
     });


this.Then(/^the user should see the product added in the cart$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions

        browser.refresh() ;
        callback();

     //     browser.findElement(ebayPage.ebayCloseIconInCart).isDisplayed().then(function () {
     //        browser.findElement(ebayPage.ebayCloseIconInCart).click().then(function () {
     //           callback();
     //     });
     // });
});

}
module.exports = myStepDefinitionsWrapper;