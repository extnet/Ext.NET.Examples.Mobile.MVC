Ext.application({
    name: "KitchenSink",
    namespace: "KitchenSink",
    paths: {
        "KitchenSink": "../resources/js"
    },
    controllers: "KitchenSink.controller.phone.Main",
    launch: function () {
        Ext.Viewport.add(App.getMainNestedList());
    }
});