var onMicroPressedChange = function (button, pressed) {
    var treelist = App.TreeList1,
        navBtn = App.NavButton;

    treelist.setMicro(pressed);

    if (pressed) {
        navBtn.setPressed(true);
        navBtn.disable();
        treelist.oldWidth = treelist.getWidth();
        treelist.setWidth(44);
    } else {
        treelist.setWidth(treelist.oldWidth);
        navBtn.enable();
    }
};

var onNavPressedChange = function (button, pressed) {
    var treelist = App.TreeList1;

    treelist.setExpanderFirst(!pressed);
    treelist.setUi(pressed ? 'nav' : null);
};

var onSelectionChange = function (treelist, selection) {
    var path, text;

    if (selection) {
        path = selection.getPath("text");
        path = path.replace(/^\/Root/, "");
        text = "Selected: " + path;
    } else {
        text = "No node selected";
    }

    App.TreeListLog.setHtml(text);
};