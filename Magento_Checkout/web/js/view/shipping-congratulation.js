/**
 * Copyright © Vaimo. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'uiElement',
    'knockout',
    'Magento_Checkout/js/model/quote',
], function(
    Element,
    ko,
    quote,
) {
    'use strict';

    return Element.extend({
        defaults: {
            template: 'Magento_Checkout/shipping',
        },

        initObservable: function() {
            this._super();
            this.visible = ko.computed(function() {
                var shippingAddress = quote.shippingAddress(),
                    countryId = shippingAddress && shippingAddress.countryId;

                return countryId === 'AE';
            });

            return this;
        },
    });
});
