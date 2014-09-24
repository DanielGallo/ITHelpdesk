Ext.define('Helpdesk', {
    singleton: true,
    
    config: {
        userId: null,
        baseUrl: 'http://192.168.0.18/ITHelpdesk'
    },
    
    constructor: function(config) {
        this.initConfig(config);
        
        return this;
    }
});