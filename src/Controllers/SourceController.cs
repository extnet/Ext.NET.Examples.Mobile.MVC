using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using Ext.Net.Mobile;
using Ext.Net.Mobile.MVC;

namespace Ext.Net.Examples.Mobile.MVC
{
    [DirectController]
    public class SourceController : System.Web.Mvc.Controller
    {
        public ActionResult GetSourceFile(string file)
        {
            var path = this.HttpContext.Server.MapPath(file);
            var fi = new FileInfo(path);
            var source = System.IO.File.ReadAllText(fi.FullName);

            return this.Content(source, "text/html");
        }
    }
}
