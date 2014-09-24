Ext.define('Helpdesk.override.field.Checkbox', {
    override: 'Ext.field.Checkbox',
    
    getSubmitValue: function() {
        // Always return a true or false value, rather than 'null' for unchecked
        return this.getChecked();
    }    
});