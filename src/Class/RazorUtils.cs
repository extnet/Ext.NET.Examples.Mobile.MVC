using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ext.Net.Mobile.MVC
{
    public class RazorUtils
    {
        /// <summary>
        /// This allows returning a plain string out of a @<text></text> block.
        /// </summary>
        /// <param name="?"></param>
        public static string StringifyTextBlock(Func<object, object> contents)
        {
            return contents(null).ToString();
        }
    }
}