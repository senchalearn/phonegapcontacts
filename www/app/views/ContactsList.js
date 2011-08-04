app.views.ContactsList = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Contacts'
    }],
    layout: 'fit',
    items: [{
        xtype: 'list',
        store: app.stores.contacts,
        itemTpl: '{givenName} {familyName}',
        onItemDisclosure: function (record) {
            Ext.dispatch({
                controller: app.controllers.contacts,
                action: 'show',
                id: record.getId()
            });
        }
    }],
    initComponent: function() {
        app.stores.contacts.load();
        app.views.ContactsList.superclass.initComponent.apply(this, arguments);
    }
});