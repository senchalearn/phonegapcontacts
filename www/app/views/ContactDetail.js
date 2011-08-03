app.views.ContactDetail = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'View contact',
        items: [
            {
                text: 'Back',
                ui: 'back',
                listeners: {
                    'tap': function () {
                        //Ext.dispatch({
                        //    controller: app.controllers.contacts,
                        //    action: 'index',
                        //    animation: {type:'slide', direction:'right'}
                        //});
                    }
                }
            },
            {xtype:'spacer'},
            {
                id: 'edit',
                text: 'Edit',
                ui: 'action',
                listeners: {
                    'tap': function () {
                        //Ext.dispatch({
                        //    controller: app.controllers.contacts,
                        //    action: 'edit',
                        //    id: this.record.getId()
                        //});
                    }
                }
            }
        ]
    }],
    styleHtmlContent:true,
    scroll: 'vertical',
    items: []
});