using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Ext.Net.Examples.Mobile.MVC
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

        void Application_AcquireRequestState(object sender, EventArgs e) 
        {
            if (Request.Url.AbsolutePath.EndsWith(".cshtml"))
            {
                Response.RedirectPermanent("/Source/GetSourceFile?file=" + Request.Url.LocalPath);
            }
        }
    }
}
