using System.Web.Mvc;
using Ext.Net.Mobile;
using Ext.Net.Mobile.MVC;
using Ext.Net.Examples.Mobile.MVC.Models;

namespace Ext.Net.Examples.Mobile.MVC.Controllers
{
    public class ExtNetMobileController : Controller
    {
        public ActionResult Index()
        {
            ExtNetMobileModel model = new ExtNetMobileModel()
            {
                Title = "Welcome to Ext.NET Mobile!",
                TextAreaPlaceHolder = ">> Enter a Message Here <<"
            };

            return this.View(model);
        }

        public ActionResult SampleAction(string message)
        {
            X.Msg.Alert("Working", message).Show();

            return this.Direct();
        }
    }
}