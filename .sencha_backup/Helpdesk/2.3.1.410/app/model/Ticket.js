/*
 * File: app/model/Ticket.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Helpdesk.model.Ticket', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest'
    ],

    config: {
        idProperty: 'ID',
        fields: [
            {
                name: 'Title'
            },
            {
                name: 'Description'
            },
            {
                dateFormat: 'c',
                name: 'DateCreated',
                type: 'date'
            },
            {
                name: 'UserID',
                type: 'int'
            },
            {
                name: 'Notes'
            },
            {
                name: 'Closed',
                type: 'boolean'
            },
            {
                dateFormat: 'c',
                name: 'DateClosed',
                type: 'date'
            },
            {
                name: 'AssetTag'
            }
        ],
        proxy: {
            type: 'rest',
            url: 'api/ticket',
            withCredentials: true
        }
    }
});