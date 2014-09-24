function _6716c82a56a82d784fc509b4c116cddc215142bf(){};Ext.define('Helpdesk.override.field.Checkbox', {
    override: 'Ext.field.Checkbox',
    
    getSubmitValue: function() {
        // Always return a true or false value, rather than 'null' for unchecked
        return this.getChecked();
    }    
});