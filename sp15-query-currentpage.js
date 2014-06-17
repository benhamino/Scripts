// init name space
var ben = ben || {};
ben.constants = {
    requestHeaders: { "accept": "application/json;odata=verbose" },
    contentType: "application/json;odata=verbose",
    requestMethod: "GET"
};

ben.sp = {};
ben.sp.services = {
    init: function () {
        // initialisation logic
        ben.sp.services.QueryPageType();
    },
    QueryPageType: function () {
        // get rest url for current page
        var searchUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Pages')/items(" + _spPageContextInfo.pageItemId + ")";

        // get current page data
        jQuery.ajax({
            url: searchUrl,
            method: ben.constants.requestMethod,
            contentType: ben.constants.contentType,
            headers: ben.constants.requestHeaders,
            success: function (data, request) {
                var item = data.d.PublishingPageLayout.Description;
                if (item == "Blank Web Part page") {
                    // logic for blank page
                }
                else {
                    // logic for other page layouts
                }

            },
            error: ben.sp.services.onError
        });
    },
    onError: function (error) {
        console.log(error);
    },
};

jQuery(document).ready(function () {
    ben.sp.services.init();
});