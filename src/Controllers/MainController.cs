using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using Ext.Net.Mobile;
using Ext.Net.Mobile.MVC;

namespace Ext.Net.Examples.Mobile.MVC
{
    [DirectController]
    public class MainController : System.Web.Mvc.Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [DirectMethod]
        public ActionResult GetView(string viewName)
        {
            var path = @"~\Views\";

            viewName = viewName.Remove(0, "KitchenSink.view.".Length);
            viewName = viewName.Replace(".", @"\");
            path = String.Concat(path, viewName, ".cshtml");

            return new Ext.Net.Mobile.MVC.PartialViewResult
            {
                ViewName = path,
                RenderMode = RenderMode.Config
            };
        }
    }
}
