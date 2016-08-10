Ext.define('KitchenSink.model.Base', {
    extend: 'Ext.data.Model',
    schema: {
        namespace: 'KitchenSink.model'
    }
});

Ext.define('KitchenSink.model.Demo', {
    extend: 'KitchenSink.model.Base',

    fields: [
        { name: 'id', type: 'string' },
        { name: 'text', type: 'string' },
        { name: 'source', type: 'string' },
        { name: 'animation', type: 'auto' },
        { name: 'limit', type: 'auto' },
        { name: 'preventHide', type: 'boolean' },
        { name: 'view', type: 'string' },
        { name: 'otherContent' }
    ]
});

Ext.define('KitchenSink.store.Demos', {
    alias: 'store.Demos',
    extend: 'Ext.data.TreeStore',
    requires: ['KitchenSink.model.Demo'],

    config: {
        model: 'KitchenSink.model.Demo',
        defaultRootProperty: 'items',
        root: {
            id: 'root',
            text: 'Ext.NET Mobile',
            items: [{
                text: 'User Interface',
                id: 'ui',
                cls: 'launchscreen',
                items: [{
                    text: 'Tree',
                    leaf: true,
                    view: 'user-interface.TreeList',
                    id: 'tree-list',
                    otherContent: [{
                        type: 'JavaScript',
                        path: 'resources/js/examples/treelist.js'
                    }]
                }, {
                    text: 'Buttons',
                    leaf: true,
                    view: 'user-interface.Buttons',
                    id: 'buttons'
                }, {
                    text: 'Grids',
                    leaf: false,
                    id: 'grids',
                    items: [{
                        text: 'Basic',
                        leaf: true,
                        view: 'user-interface.grids.Basic',
                        id: 'basicgrid'
                    }, {
                        text: 'Editable',
                        leaf: true,
                        view: 'user-interface.grids.Editable',
                        id: 'editablegrid'
                    }, {
                        text: 'Multi Selection',
                        leaf: true,
                        view: 'user-interface.grids.MultiSelection',
                        id: 'multiselectiongrid'
                    }, {
                        text: 'Renderer & Template',
                        leaf: true,
                        view: 'user-interface.grids.RendererTemplate',
                        id: 'gridrenderertemplate'
                    }, {
                        text: 'Columns',
                        leaf: true,
                        view: 'user-interface.grids.Columns',
                        id: 'gridcolumns'
                    }]
                }, {
                    text: 'Forms',
                    leaf: false,
                    id: 'forms',
                    items: [{
                        text: 'Form Panel',
                        leaf: true,
                        view: 'user-interface.forms.FormPanel',
                        id: 'formpanel'
                    }, {
                        text: 'Sliders',
                        leaf: true,
                        view: 'user-interface.forms.Sliders',
                        id: 'sliders'
                    }, {
                        text: 'Toolbar Inputs',
                        leaf: true,
                        view: 'user-interface.forms.ToolbarInput',
                        id: 'toolbarinput'
                    }, {
                        text: 'PlaceHolderLabel',
                        leaf: true,
                        view: 'user-interface.forms.PlaceHolderLabel',
                        id: 'placeholderlabel'
                    }]
                }, {
                    text: 'DataViews',
                    leaf: false,
                    id: 'dataviews',
                    items: [{
                        text: 'Basic',
                        leaf: true,
                        view: 'user-interface.dataviews.Basic',
                        id: 'basicdataview',
                        otherContent: [{
                            type: 'GetFeeds.cs',
                            path: 'Class/GetFeeds.cs'
                        }, {
                            type: 'Speakers.cs',
                            path: 'Models/KitchenSink/Speaker.cs'
                        }]
                    }, {
                        text: 'Horizontal',
                        leaf: true,
                        view: 'user-interface.dataviews.Horizontal',
                        id: 'horizontaldataview',
                        otherContent: [{
                            type: 'GetFeeds.cs',
                            path: 'Class/GetFeeds.cs'
                        }, {
                            type: 'Speakers.cs',
                            path: 'Models/KitchenSink/Speaker.cs'
                        }]
                    }, {
                        text: 'Inline',
                        leaf: true,
                        view: 'user-interface.dataviews.Inline',
                        id: 'inlinedataview',
                        otherContent: [{
                            type: 'GetFeeds.cs',
                            path: 'Class/GetFeeds.cs'
                        }, {
                            type: 'Speakers.cs',
                            path: 'Models/KitchenSink/Speaker.cs'
                        }]
                    }]
                }, {
                    text: 'Lists',
                    leaf: false,
                    id: 'lists',
                    items: [{
                        text: 'Basic',
                        leaf: true,
                        view: 'user-interface.lists.Basic',
                        id: 'basiclist'
                    }, {
                        text: 'Grouped',
                        leaf: true,
                        view: 'user-interface.lists.Grouped',
                        id: 'groupedlist'
                    }, {
                        text: 'Disclosure',
                        leaf: true,
                        view: 'user-interface.lists.Disclosure',
                        id: 'disclosurelist'
                    }, {
                        text: 'Paging',
                        leaf: true,
                        view: 'user-interface.lists.Paging',
                        id: 'paginglist',
                        otherContent: [{
                            type: 'Company.ashx.cs',
                            path: 'Data/Company.ashx.cs'
                        }]
                    }, {
                        text: 'Buffered',
                        leaf: true,
                        view: 'user-interface.lists.Buffered',
                        id: 'bufferedlist',
                        otherContent: [{
                            type: 'Company.ashx.cs',
                            path: 'Data/Company.ashx.cs'
                        }]
                    }, {
                        text: 'Pull Refresh',
                        leaf: true,
                        view: 'user-interface.lists.PullRefresh',
                        id: 'pullrefreshlist',
                        otherContent: [{
                            type: 'Company.ashx.cs',
                            path: 'Data/Company.ashx.cs'
                        }]
                    }, {
                        text: 'Sortable',
                        leaf: true,
                        view: 'user-interface.lists.Sortable',
                        id: 'sortablelist'
                    }]
                }, {
                    text: 'Nested Lists',
                    leaf: false,
                    id: 'nestedlists',
                    items: [{
                        text: 'Basic',
                        view: 'user-interface.nestedlists.Basic',
                        leaf: true,
                        id: 'nestedlistbasic'
                    }]
                }, {
                    text: 'Icons',
                    leaf: true,
                    view: 'user-interface.Icons',
                    id: 'icons'
                }, {
                    text: 'Toolbars',
                    leaf: true,
                    view: 'user-interface.Toolbars',
                    id: 'toolbars'
                }, {
                    text: 'Carousel',
                    leaf: true,
                    view: 'user-interface.Carousel',
                    id: 'carousel'
                }, {
                    text: 'Tabs',
                    leaf: true,
                    view: 'user-interface.Tabs',
                    id: 'tabs'
                }, {
                    text: 'Bottom Tabs',
                    view: 'user-interface.BottomTabs',
                    leaf: true,
                    id: 'bottom-tabs'
                }, {
                    text: 'Overlays',
                    view: 'user-interface.Overlays',
                    leaf: true,
                    id: 'overlays'
                }, {
                    text: 'Menus',
                    view: 'user-interface.Menus',
                    leaf: true,
                    id: 'menus'
                }]
            }, {
                text: 'Data Binding',
                id: 'databinding',
                items: [{
                    text: 'Simple',
                    leaf: true,
                    id: 'binding-simple',
                    view: 'binding.Simple'
                }, {
                    text: 'Two Way',
                    leaf: true,
                    id: 'binding-twoway',
                    view: 'binding.TwoWay'
                }, {
                    text: 'Formulas',
                    leaf: true,
                    id: 'binding-formula',
                    view: 'binding.Formula'
                }, {
                    text: 'Two Way Formulas',
                    leaf: true,
                    id: 'binding-twowayformula',
                    view: 'binding.TwoWayFormula'
                }, /*{
                    text: 'Chained Select',
                    leaf: true,
                    id: 'binding-chainedselect',
                    view: 'binding.ChainedSelect'
                },*/ {
                    text: 'Component State',
                    leaf: true,
                    id: 'binding-componentstate',
                    view: 'binding.ComponentState'
                }, {
                    text: 'Selection',
                    leaf: true,
                    id: 'binding-selection',
                    view: 'binding.Selection',
                    otherContent: [{
                        type: 'GetPeople.cs',
                        path: 'Class/KitchenSink/GetPeople.cs'
                    }, {
                        type: 'Person.cs',
                        path: 'Models/KitchenSink/Person.cs'
                    }]
                }, {
                    text: 'Chained Stores',
                    leaf: true,
                    id: 'binding-chainedstores',
                    view: 'binding.ChainedStore',
                    otherContent: [{
                        type: 'GetPeople.cs',
                        path: 'Class/KitchenSink/GetPeople.cs'
                    }, {
                        type: 'Person.cs',
                        path: 'Models/KitchenSink/Person.cs'
                    }]
                }, {
                    text: 'Form',
                    leaf: true,
                    id: 'binding-form',
                    view: 'binding.Form'
                }, {
                    text: 'Associations',
                    leaf: true,
                    id: 'binding-assocations',
                    view: 'binding.Association',
                    otherContent: [{
                        type: 'GetPeople.cs',
                        path: 'Class/KitchenSink/GetPeople.cs'
                    }, {
                        type: 'Person.cs',
                        path: 'Models/KitchenSink/Person.cs'
                    }]
                }]
            }, {
                text: 'Animations',
                id: 'animations',
                items: [{
                    text: 'Slide',
                    id: 'Slide',
                    items: [{
                        text: 'Slide Left',
                        id: 'SlideLeft',
                        view: 'animation.slide.SlideLeft',
                        animation: {
                            type: 'slide'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }, {
                        text: 'Slide Right',
                        id: 'SlideRight',
                        view: 'animation.slide.SlideRight',
                        animation: {
                            type: 'slide',
                            direction: 'right'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }, {
                        text: 'Slide Up',
                        id: 'SlideUp',
                        view: 'animation.slide.SlideUp',
                        animation: {
                            type: 'slide',
                            direction: 'up'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }, {
                        text: 'Slide Down',
                        id: 'SlideDown',
                        view: 'animation.slide.SlideDown',
                        animation: {
                            type: 'slide',
                            direction: 'down'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }]
                }, {
                    text: 'Fade',
                    id: 'Fade',
                    view: 'animation.Fade',
                    animation: {
                        type: 'fade',
                        duration: 500
                    },
                    leaf: true,
                    otherContent: [{
                        type: 'LoremIpsum2.ascx',
                        path: 'Examples/animation/slide/LoremIpsum2.ascx'
                    }]
                }, {
                    text: 'Cover',
                    id: 'Cover',
                    items: [{
                        text: 'Cover Left',
                        view: 'animation.cover.CoverLeft',
                        id: 'CoverLeft',
                        animation: {
                            type: 'cover'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }, {
                        text: 'Cover Right',
                        id: 'CoverRight',
                        view: 'animation.cover.CoverRight',
                        animation: {
                            type: 'cover',
                            direction: 'right'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }, {
                        text: 'Cover Up',
                        view: 'animation.cover.CoverUp',
                        id: 'CoverUp',
                        animation: {
                            type: 'cover',
                            direction: 'up'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }, {
                        text: 'Cover Down',
                        id: 'CoverDown',
                        view: 'animation.cover.CoverDown',
                        animation: {
                            type: 'cover',
                            direction: 'down'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }]
                }, {
                    text: 'Reveal',
                    id: 'Reveal',
                    items: [{
                        text: 'Reveal Left',
                        id: 'RevealLeft',
                        view: 'animation.reveal.RevealLeft',
                        animation: {
                            type: 'reveal'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }, {
                        text: 'Reveal Right',
                        id: 'RevealRight',
                        view: 'animation.reveal.RevealRight',
                        animation: {
                            direction: 'right',
                            type: 'reveal'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }, {
                        text: 'Reveal Up',
                        id: 'RevealUp',
                        view: 'animation.reveal.RevealUp',
                        animation: {
                            direction: 'up',
                            type: 'reveal'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }, {
                        text: 'Reveal Down',
                        id: 'RevealDown',
                        view: 'animation.reveal.RevealDown',
                        animation: {
                            direction: 'down',
                            type: 'reveal'
                        },
                        leaf: true,
                        otherContent: [{
                            type: 'LoremIpsum2.ascx',
                            path: 'Examples/animation/slide/LoremIpsum2.ascx'
                        }]
                    }]
                }, {
                    text: 'Pop',
                    id: 'Pop',
                    view: 'animation.Pop',
                    animation: {
                        type: 'pop'
                    },
                    leaf: true,
                    otherContent: [{
                        type: 'LoremIpsum2.ascx',
                        path: 'Examples/animation/slide/LoremIpsum2.ascx'
                    }]
                }, {
                    text: 'Flip',
                    id: 'Flip',
                    view: 'animation.Flip',
                    animation: {
                        type: 'flip'
                    },
                    leaf: true,
                    otherContent: [{
                        type: 'LoremIpsum2.ascx',
                        path: 'Examples/animation/slide/LoremIpsum2.ascx'
                    }]
                }]
            }, {
                text: 'Events',
                id: 'events',
                items: [{
                    text: 'DirectEvents',
                    id: 'directevents',
                    items: [{
                        text: 'Basic',
                        id: 'directeventsbasic',
                        view: 'events.directevents.Basic',
                        leaf: true,
                        otherContent: [{
                            type: 'GetServerTime.ashx.cs',
                            path: 'Data/GetServerTime.ashx.cs'
                        }]
                    }, {
                        text: 'Duration Messages',
                        id: 'durationmessages',
                        view: 'events.directevents.DurationMessages',
                        leaf: true,
                        otherContent: [{
                            type: 'DurationMessages.ashx.cs',
                            path: 'Data/DurationMessages.ashx.cs'
                        }]
                    }]
                }]
            }, {
                text: 'Touch Events',
                id: 'touchevents',
                view: 'touchevents.TouchEvents',
                leaf: true
            }, {
                text: 'Data',
                id: 'data',
                items: [/*{
                    text: 'Nested Loading',
                    view: 'NestedLoading',
                    leaf: true,
                    id: 'nestedloading'
                }, */{
                    text: 'JSONP',
                    leaf: true,
                    id: 'jsonp',
                    view: 'data.JSONP'
                }/*, {
                    text: 'YQL',
                    leaf: true,
                    id: 'yql',
                    view: 'data.YQL'
                }, {
                    text: 'Ajax',
                    leaf: true,
                    id: 'ajax'
                }*/]
            }, {
                text: 'Media',
                id: 'media',
                items: [{
                    text: 'Video',
                    view: 'media.Video',
                    leaf: true,
                    id: 'video'
                }, {
                    text: 'Audio',
                    view: 'media.Audio',
                    leaf: true,
                    id: 'audio'
                }]
            }/*, {
                text: 'Themes',
                id: 'theme',
                items: [{
                    text: 'Auto Detect',
                    leaf: true,
                    id: 'autotheme',
                    profileName: ''
                    //}, {
                    //    text: 'BlackBerry 10',
                    //    leaf: true,
                    //    id: 'bbtheme',
                    //    profileName: 'blackberry'
                }, {
                    text: 'Cupertino',
                    view: 'ThemeCupertino',
                    leaf: true,
                    id: 'cupertinotheme',
                    profileName: 'cupertino'
                }, {
                    text: 'Mountain View',
                    leaf: true,
                    id: 'mountainviewtheme',
                    profileName: 'mountainview'
                }, {
                    text: 'Modern Neptune',
                    leaf: true,
                    id: 'modernneptunetheme',
                    profileName: 'modern-neptune'
                }, {
                    text: 'Modern Triton',
                    leaf: true,
                    id: 'moderntritontheme',
                    profileName: 'modern-triton'
                }, {
                    text: 'Windows',
                    leaf: true,
                    id: 'windowstheme',
                    profileName: 'windows'
                }, {
                    text: 'Neptune',
                    leaf: true,
                    id: 'neptunetheme',
                    profileName: 'neptune'
                }, {
                    text: 'Neptune Touch',
                    leaf: true,
                    id: 'neptunetouchtheme',
                    profileName: 'neptune-touch'
                }, {
                    text: 'Crisp',
                    leaf: true,
                    id: 'crisptheme',
                    profileName: 'crisp'
                }, {
                    text: 'Crisp Touch',
                    leaf: true,
                    id: 'crisptouchtheme',
                    profileName: 'crisp-touch'
                }, {
                    text: 'Classic',
                    leaf: true,
                    id: 'classictheme',
                    profileName: 'classic'
                }, {
                    text: 'Gray',
                    leaf: true,
                    id: 'graytheme',
                    profileName: 'gray'
                }]
            }*/, {
                text: 'Graphics',
                id: 'graphics',
                items: [{
                    text: 'Cartesian Charts',
                    id: 'CartesianChart',
                    items: [{
                        text: 'Column Chart',
                        view: 'graphics.cartesian-charts.Column',
                        leaf: true,
                        id: 'chart-column',
                        limit: 1,
                        otherContent: [{
                            type: 'JavaScript',
                            path: 'resources/js/examples/columnchart.js'
                        }, {
                            type: 'Climate.ashx.cs',
                            path: 'Data/Climate.ashx.cs'
                        }]
                    }, {
                        text: 'Area Chart',
                        view: 'graphics.cartesian-charts.Area',
                        leaf: true,
                        id: 'chart-area',
                        limit: 1,
                        otherContent: [{
                            type: 'OrderItems.ashx.cs',
                            path: 'Data/OrderItems.ashx.cs'
                        }]
                    }, {
                        text: 'Line Chart (zoomable)',
                        view: 'graphics.cartesian-charts.Line',
                        leaf: true,
                        id: 'chart-line',
                        limit: 1,
                        otherContent: [{
                            type: 'Data',
                            path: 'resources/usd2eur.json'
                        }]
                    }, {
                        text: 'Line Chart (with icons)',
                        view: 'graphics.cartesian-charts.LineWithMarker',
                        leaf: true,
                        id: 'chart-linewithmarker',
                        limit: 1,
                        otherContent: [{
                            type: 'Pie.ashx.cs',
                            path: 'Data/Pie.ashx.cs'
                        }]
                    }, {
                        text: 'Line Chart (with renderer)',
                        view: 'graphics.cartesian-charts.LineWithRenderer',
                        leaf: true,
                        id: 'chart-linewithrenderer',
                        limit: 1,
                        otherContent: [{
                            type: 'Pie.ashx.cs',
                            path: 'Data/Pie.ashx.cs'
                        }]
                    }, {
                        text: 'Column Chart (with renderer)',
                        view: 'graphics.cartesian-charts.ColumnWithRenderer',
                        leaf: true,
                        id: 'chart-columnwithrenderer',
                        limit: 1,
                        otherContent: [{
                            type: 'Pie.ashx.cs',
                            path: 'Data/Pie.ashx.cs'
                        }]
                    }, {
                        text: 'Bar Chart',
                        view: 'graphics.cartesian-charts.Bar',
                        leaf: true,
                        id: 'chart-bar',
                        limit: 1,
                        otherContent: [{
                            type: 'Pie.ashx.cs',
                            path: 'Data/Pie.ashx.cs'
                        }]
                    }, {
                        text: 'Column Chart (stacked)',
                        view: 'graphics.cartesian-charts.ColumnStacked',
                        leaf: true,
                        id: 'chart-columnstacked',
                        limit: 1,
                        otherContent: [{
                            type: 'OrderItems.ashx.cs',
                            path: 'Data/OrderItems.ashx.cs'
                        }]
                    }, {
                        text: 'Column Chart (3D)',
                        view: 'graphics.cartesian-charts.Column3D',
                        leaf: true,
                        id: 'chart-column3d',
                        limit: 1,
                        otherContent: [{
                            type: 'OrderItems.ashx.cs',
                            path: 'Data/OrderItems.ashx.cs'
                        }]
                    }, {
                        text: 'Scatter Chart',
                        view: 'graphics.cartesian-charts.Scatter',
                        leaf: true,
                        id: 'chart-scatter',
                        limit: 1,
                        otherContent: [{
                            type: 'OrderItems.ashx.cs',
                            path: 'Data/OrderItems.ashx.cs'
                        }]
                    }, {
                        text: 'Candlestick Chart',
                        view: 'graphics.cartesian-charts.Candlestick',
                        leaf: true,
                        id: 'chart-candlestick',
                        limit: 1,
                        otherContent: [{
                            type: 'StockPrice.ashx.cs',
                            path: 'Data/StockPrice.ashx.cs'
                        }]
                    }, {
                        text: 'OHLC Chart',
                        view: 'graphics.cartesian-charts.OHLC',
                        leaf: true,
                        id: 'chart-ohlc',
                        limit: 1,
                        otherContent: [{
                            type: 'StockPrice.ashx.cs',
                            path: 'Data/StockPrice.ashx.cs'
                        }]
                    }, {
                        text: 'Plot Chart',
                        view: 'graphics.cartesian-charts.Plot',
                        leaf: true,
                        id: 'chart-plot',
                        limit: 1,
                        otherContent: [{
                            type: 'Plot.ashx.cs',
                            path: 'Data/Plot.ashx.cs'
                        }]
                    }, {
                        text: 'Bubble Chart',
                        view: 'graphics.cartesian-charts.Bubble',
                        leaf: true,
                        id: 'chart-bubble',
                        limit: 1,
                        otherContent: [{
                            type: 'Bubble.ashx.cs',
                            path: 'Data/Bubble.ashx.cs'
                        }]
                    }]
                }, {
                    text: 'Polar Charts',
                    id: 'PolarChart',
                    items: [{
                        text: 'Pie Chart',
                        view: 'graphics.polar-charts.Pie',
                        leaf: true,
                        id: 'chart-pie',
                        limit: 1,
                        otherContent: [{
                            type: 'Pie.ashx.cs',
                            path: 'Data/Pie.ashx.cs'
                        }]
                    }, {
                        text: 'Pie Chart (3D)',
                        view: 'graphics.polar-charts.Pie3D',
                        leaf: true,
                        id: 'chart-pie3d',
                        limit: 1,
                        otherContent: [{
                            type: 'Pie.ashx.cs',
                            path: 'Data/Pie.ashx.cs'
                        }]
                    }, {
                        text: 'Radar Chart',
                        view: 'graphics.polar-charts.Radar',
                        leaf: true,
                        id: 'chart-radar',
                        limit: 1,
                        otherContent: [{
                            type: 'OrderItems.ashx.cs',
                            path: 'Data/OrderItems.ashx.cs'
                        }]
                    }, {
                        text: 'Gauge Chart',
                        view: 'graphics.polar-charts.Gauge',
                        leaf: true,
                        id: 'chart-gauge',
                        limit: 1,
                        otherContent: [{
                            type: 'Pie.ashx.cs',
                            path: 'Data/Pie.ashx.cs'
                        }]
                    }]
                }, {
                    text: 'Draw Component',
                    id: 'Draw',
                    items: [{
                        text: 'Touch Paint',
                        view: 'graphics.draw.FreeDraw',
                        leaf: true,
                        id: 'FreeDraw',
                        limit: 1,
                        otherContent: [{
                            type: 'JavaScript',
                            path: 'resources/js/examples/freedrawcomponent.js'
                        }]
                    }, {
                        text: 'Vector Icons',
                        view: 'graphics.draw.VectorIcons',
                        leaf: true,
                        id: 'VectorIcons',
                        limit: 1,
                        otherContent: [{
                            type: 'JavaScript',
                            path: 'resources/js/examples/vectoricons.js'
                        }]
                    }]
                }]
            }/*, {
                text: 'Enterprise',
                id: 'enterprise',
                items: [
                    {
                        text: 'AMF0 format',
                        view: 'AMF0',
                        leaf: true,
                        id: 'amf-zero'
                    }, {
                        text: 'AMF3 format',
                        view: 'AMF3',
                        leaf: true,
                        id: 'amf-three'
                    }, {
                        text: 'SOAP',
                        leaf: true,
                        id: 'soap'
                    }
                ]
            }*/]
        }
    }
});

Ext.create("KitchenSink.store.Demos", {
    storeId: "Demos"
});