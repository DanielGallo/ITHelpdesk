/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'Ext.MessageBox',
        'Ext.device.Push',
        'Ext.device.Notification',
        'Ext.device.Device',
        'Ext.Menu'
    ],
    baseUrl: 'http://192.168.32.60/ITHelpdesk/',
    userId: null,
    models: [
        'Ticket',
        'Device',
        'User',
        'Login'
    ],
    stores: [
        'Tickets',
        'Users'
    ],
    views: [
        'Intro',
        'LoginForm',
        'CompanyForm',
        'MainView',
        'TicketForm',
        'TicketList'
    ],
    controllers: [
        'Security',
        'Ticket',
        'Navigation'
    ],
    name: 'Helpdesk',

    launch: function() {
        var me = this;

        document.addEventListener("resume", me.resume);

        Ext.Ajax.setDefaultPostHeader('application/json');

        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });

        if (typeof StatusBar !== 'undefined') {
            StatusBar.styleDefault();
            StatusBar.backgroundColorByHexString('#F8F9F9');
        }

        Ext.Ajax.request({
            url: Helpdesk.app.baseUrl + 'api/security/IsAuthenticated',
            withCredentials: true,
            callback: function() {
                Ext.Viewport.setMasked(false);
            },
            success: function(response){
                var userId = Ext.Number.from(response.responseText, 0);

                Helpdesk.app.userId = userId;

                Helpdesk.app.getController('Security').setupPush();
                Helpdesk.app.getController('Security').loginSuccess();
            }
        });

        Ext.util.Format.defaultDateFormat = 'd/m/Y';

        var menu = Ext.create('Ext.Menu', {
            items: [
                {
                    text: 'User Admin',
                    action: 'ShowUserAdmin',
                    iconCls: 'fa-users'
                },
                {
                    text: 'Logout',
                    action: 'Logout',
                    iconCls: 'fa-sign-out'
                }
            ]
         });

         Ext.Viewport.setMenu(menu, {
             side: 'right'
         });
        Ext.create('Helpdesk.view.Intro', {fullscreen: true});
    },

    resume: function() {
        // TODO: Demonstrate something happening when the app resumes from background
        Ext.Msg.alert('Resumed', 'App resumed from running in background.');
    }

});
