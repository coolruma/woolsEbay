/**
 * This file is for setting configuration required in test cases
 */

var settings = function () {
    this.config = {
        'SMALLWAITTIME': 3000,
        'WAITTIME': 5000,
        'LONGWAITTIME': 10000,
        'SUPERLONGWAITTIME': 20000,
        'ULTIMATELONGWAITTIME': 60000,
        'STEPTIMEOUT': 60000
    }
}
module.exports = new settings();

