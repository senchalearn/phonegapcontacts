app.views.ContactForm = Ext.extend(Ext.form.FormPanel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Edit contact',
        items: [
            {
                id: 'cancel',
                text: 'Cancel',
                ui: 'back',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: app.controllers.contacts,
                            action: 'show',
                            id: this.record.getId(),
                            animation: {type:'slide', direction:'right'}
                        });
                    }
                }
            },
            {xtype:'spacer'},
            {
                id: 'apply',
                text: 'Apply',
                ui: 'action',
                listeners: {
                    'tap': function () {
                        this.form.updateRecord(this.record, true);
                        this.record.save();
                        Ext.dispatch({
                            controller: app.controllers.contacts,
                            action: 'show',
                            id: this.record.getId(),
                            animation: {type:'slide', direction:'right'}
                        });
                    }
                }
            }
        ]
    }],
    submitOnAction: false,
    items: [{
        name : 'givenName',
        label: 'Given',
        xtype: 'textfield'
    }, {
        name : 'familyName',
        label: 'Family',
        xtype: 'textfield'
    }],
    updateWithRecord: function(record) {
        this.load(record);
        var toolbar = this.getDockedItems()[0];
        toolbar.getComponent('cancel').record = record;
        toolbar.getComponent('apply').record = record;
        toolbar.getComponent('apply').form = this;
    }
});