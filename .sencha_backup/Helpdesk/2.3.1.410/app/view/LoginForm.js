/*
 * File: app/view/LoginForm.js
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

Ext.define('Helpdesk.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: 110
                },
                title: 'Login',
                items: [
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        name: 'EmailAddress',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        name: 'Password'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        action: 'Login',
                        centered: true,
                        margin: 20,
                        width: 120,
                        iconCls: 'fa-sign-in',
                        text: 'Login'
                    }
                ]
            }
        ]
    }

});