function _a0286ed0abe09ff61fe9092da4ada3e84fcaa886(){};Ext.define('Helpdesk.override.data.proxy.Rest', {
    override: 'Ext.data.proxy.Rest',
    
    buildUrl: function(request) {
        var me = this,
            baseUrl = Helpdesk.app.baseUrl,
            url = me.getUrl(request);
        
        // Prefix the application's base URL (where the web services reside), 
        // rather than hard-coding the full URL on each store's proxy.
        url = baseUrl + url;
        
        request.setUrl(url);

        return me.callParent([request]);
    }
});