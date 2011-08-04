app.controllers.contacts = new Ext.Controller({
    index: function(options) {
        app.views.viewport.setActiveItem(
            app.views.contactsList, options.animation
        );
    },
    show: function(options) {
        var id = parseInt(options.id),
            contact = app.stores.contacts.getById(id);
        if (contact) {
            app.views.contactDetail.updateWithRecord(contact);
            app.views.viewport.setActiveItem(
                app.views.contactDetail, options.animation
            );
        }
    },
    edit: function(options) {
        var id = parseInt(options.id),
            contact = app.stores.contacts.getById(id);
        if (contact) {
            app.views.contactForm.updateWithRecord(contact);
            app.views.viewport.setActiveItem(
                app.views.contactForm, options.animation
            );
        }
    }
});