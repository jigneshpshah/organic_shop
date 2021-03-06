$(document).ready(function () {
var FRAPPE_CLIENT = 'frappe.client'

window.cart = (function () {

    return {
       
        list: function (opts) {
            return new Promise(function (resolve, reject) {
                try {
                    frappe.call({
                        method: 'organic_shop.api.get_list_custom',
                        args: {
                            doctype: opts.doctype,
                            fields: opts.fields,
                            filters: opts.filters,
                            order_by: opts.order_by,
                            limit_start: opts.limit_start,
                            limit_page_length: opts.limit_page_length,
                            parent: opts.parent,

                        },
                        callback: resolve
                    });
                } catch (e) { reject(e); }
            });
        },
        get: function (opts) {
            return new Promise(function (resolve, reject) {
                try {
                    frappe.call({
                        method: FRAPPE_CLIENT + '.get',
                        args: {
                            doctype: opts.doctype,
                            name: opts.name,
                            filters: opts.filters,
                            parent: opts.parent
                        },
                        
                        callback: resolve
                    });
                } catch (e) { reject(e); }
            });
        },
        
    }
}());

})