/*
 * File: app/view/TicketForm.js
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

Ext.define('Helpdesk.view.TicketForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ticketform',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.FieldSet',
        'Ext.field.TextArea',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.Checkbox'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        action: 'SaveTicket',
                        iconCls: 'fa-save',
                        text: 'Save'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        action: 'DeleteTicket',
                        iconCls: 'delete',
                        text: 'Delete'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: 120
                },
                title: 'Ticket Details',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Title',
                        name: 'Title'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Description',
                        name: 'Description'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'User',
                        name: 'UserID',
                        displayField: 'Name',
                        store: 'Users',
                        valueField: 'ID'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Computer Info',
                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'textfield',
                                flex: 1,
                                label: 'Asset ID',
                                labelWidth: 120,
                                name: 'AssetTag'
                            },
                            {
                                xtype: 'button',
                                action: 'ScanBarcode',
                                centered: false,
                                margin: 4,
                                iconCls: 'fa-barcode'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Support Technician Details',
                items: [
                    {
                        xtype: 'textareafield',
                        label: 'Notes',
                        name: 'Notes'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: 140
                },
                title: 'Status',
                items: [
                    {
                        xtype: 'datepickerfield',
                        label: 'Date Created',
                        name: 'DateCreated',
                        readOnly: true
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Closed',
                        name: 'Closed'
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Date Closed',
                        name: 'DateClosed',
                        readOnly: true
                    }
                ]
            }
        ]
    }

});