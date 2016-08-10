using System.Web.Mvc;
using System.Web.Routing;
 
[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(Ext.Net.Examples.Mobile.MVC.ExtNetMobileConfig), "Start")]

namespace Ext.Net.Examples.Mobile.MVC 
{
    public static class ExtNetMobileConfig 
    {
        public static void Start() 
        {
            ExtNetMobileConfig.RegisterRoutes(RouteTable.Routes);
        }
 
        public static void RegisterRoutes(RouteCollection routes)
        {
            // Ignore all ext-mobile.axd embedded resource paths
            routes.IgnoreRoute("{extnet-root}/{extnet-file}/ext-mobile.axd");
        }

        // If you use configure forms authentication in your Web.config and 
        // use <deny users="*"> to deny all requests, such as the following: 
        //
        //  <location>
        //    <system.web>
        //      <authorization>
        //        <deny users="*" />
        //      </authorization>
        //    </system.web>
        //  </location>
        //
        // Add the following Application_AuthenticateRequest event handler 
        // to your Global.asax.cs to exclude authenticating Ext.NET related 
        // resource files (.js, .css, images).
        // 
        //protected void Application_AuthenticateRequest(object sender, System.EventArgs e)
        //{
        //    // Skip authenticating all ext-mobile.axd embedded resources (.js, .css, images)
        //    if (HttpContext.Current.Request.FilePath.EndsWith("/ext-mobile.axd"))
        //    {
        //        HttpContext.Current.SkipAuthorization = true;
        //    }
        //}
    }
}